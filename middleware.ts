import { NextRequest, NextResponse } from "next/server";
import { verifySignedCookie } from "@/lib/session";

const PROTECTED_SLUGS = [
  "alibaba",
  "aparat",
  "digikala",
  "digipay",
  "divar",
  "filimo",
  "karafs",
  "khanoumi",
  "torob",
  "tap30",
  "titana",
];

const COOKIE_NAME = "xpmi_session";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const match = pathname.match(/^\/cases\/([a-z0-9-]+)$/);
  if (!match) return NextResponse.next();

  const slug = match[1];

  if (!PROTECTED_SLUGS.includes(slug) || slug === "login") {
    return NextResponse.next();
  }

  const session = request.cookies.get(COOKIE_NAME);
  if (session) {
    const valid = await verifySignedCookie(session.value);
    if (valid) return NextResponse.next();
  }

  const loginUrl = new URL("/cases/login", request.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: "/cases/:slug*",
};
