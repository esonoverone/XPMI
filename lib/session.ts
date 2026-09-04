/**
 * XPMI Session — Web Crypto HMAC-SHA256 cookie signing and verification.
 *
 * Uses crypto.subtle (Web Crypto API) which is available in both
 * Next.js middleware (Edge runtime) and Node.js API routes.
 *
 * No fallback secrets. XPMI_COOKIE_SECRET must be explicitly set.
 */

export const COOKIE_NAME = "xpmi_session";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days in seconds

function getSecret(): string | null {
  const secret = process.env.XPMI_COOKIE_SECRET;
  if (!secret || secret.trim().length === 0) return null;
  return secret;
}

async function getKey(): Promise<CryptoKey | null> {
  const secret = getSecret();
  if (!secret) return null;
  const enc = new TextEncoder();
  return crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function fromHex(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return bytes;
}

/**
 * Create a signed session cookie value.
 * Returns null if XPMI_COOKIE_SECRET is not configured.
 */
export async function createSignedCookie(): Promise<string | null> {
  const key = await getKey();
  if (!key) return null;

  const payload = JSON.stringify({
    authenticated: true,
    expires: Date.now() + COOKIE_MAX_AGE * 1000,
    iat: Date.now(),
  });

  const encoded = btoa(payload);
  const enc = new TextEncoder();
  const signature = await crypto.subtle.sign("HMAC", key, enc.encode(encoded));

  return `${encoded}.${toHex(signature)}`;
}

/**
 * Verify a signed session cookie value.
 * Returns true only if:
 *   - XPMI_COOKIE_SECRET is configured
 *   - cookie has valid structure (payload.signature)
 *   - HMAC signature matches the payload
 *   - payload is valid JSON
 *   - authenticated === true
 *   - not expired
 *
 * Uses crypto.subtle.verify which is constant-time for HMAC.
 */
export async function verifySignedCookie(cookie: string): Promise<boolean> {
  try {
    const key = await getKey();
    if (!key) return false;

    const dotIndex = cookie.indexOf(".");
    if (dotIndex === -1 || dotIndex === 0 || dotIndex === cookie.length - 1) {
      return false;
    }

    const encoded = cookie.substring(0, dotIndex);
    const signatureHex = cookie.substring(dotIndex + 1);

    // Validate hex format
    if (!/^[0-9a-f]+$/.test(signatureHex) || signatureHex.length !== 64) {
      return false;
    }

    const signatureBytes = fromHex(signatureHex);
    const enc = new TextEncoder();

    // crypto.subtle.verify performs constant-time comparison
    const valid = await crypto.subtle.verify(
      "HMAC",
      key,
      signatureBytes.buffer as ArrayBuffer,
      enc.encode(encoded)
    );

    if (!valid) return false;

    // Signature verified — now check payload contents
    const payload = JSON.parse(atob(encoded));
    return payload.authenticated === true && payload.expires > Date.now();
  } catch {
    return false;
  }
}

/**
 * Check if the session secret is configured.
 */
export function isSecretConfigured(): boolean {
  return getSecret() !== null;
}
