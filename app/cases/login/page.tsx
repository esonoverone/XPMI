"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push(next);
        router.refresh();
      } else {
        setError("Invalid password");
        setPassword("");
      }
    } catch {
      setError("Connection error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="gate">
      <div className="gate-eyebrow">Protected Case Library</div>
      <h2 className="gate-title">Access Intelligence Cases</h2>
      <p className="gate-sub">
        This case is part of the XPMI protected intelligence library.
      </p>
      <p className="gate-desc">
        Enter the access password to continue.
      </p>

      <form className="gate-form" onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="gate-input"
          dir="ltr"
          autoFocus
          disabled={loading}
        />
        {error && (
          <p style={{ color: "#e74c3c", fontSize: "0.85rem", margin: "0.5rem 0" }}>
            {error}
          </p>
        )}
        <button
          type="submit"
          className="btn btn-primary gate-btn"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Unlock Case Library"}
        </button>
      </form>

      <p className="gate-note" style={{ marginTop: "1.5rem" }}>
        <Link href="/cases/snapp" style={{ color: "rgba(255,255,255,.5)", textDecoration: "underline" }}>
          View the public Snapp case →
        </Link>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="case-page">
      <nav className="topbar">
        <Link href="/" className="tb-back">← Back to XPMI</Link>
        <span className="tb-logo">XPMI</span>
      </nav>

      <div className="case-wrap" style={{ maxWidth: 480, margin: "0 auto", paddingTop: "6rem" }}>
        <Suspense fallback={<div style={{ textAlign: "center", padding: "2rem", color: "rgba(255,255,255,.5)" }}>Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
