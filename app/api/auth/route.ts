import { NextRequest, NextResponse } from "next/server";
import {
  COOKIE_NAME,
  COOKIE_MAX_AGE,
  createSignedCookie,
  verifySignedCookie,
  isSecretConfigured,
} from "@/lib/session";

export async function POST(request: NextRequest) {
  try {
    if (!isSecretConfigured()) {
      return NextResponse.json(
        { error: "Authentication not configured: XPMI_COOKIE_SECRET is missing" },
        { status: 500 }
      );
    }

    const correctPassword = process.env.XPMI_CASE_PASSWORD;
    if (!correctPassword) {
      return NextResponse.json(
        { error: "Authentication not configured: XPMI_CASE_PASSWORD is missing" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { password } = body;

    if (!password || password !== correctPassword) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }

    const cookieValue = await createSignedCookie();
    if (!cookieValue) {
      return NextResponse.json(
        { error: "Failed to create session" },
        { status: 500 }
      );
    }

    const isProduction = process.env.NODE_ENV === "production";

    const response = NextResponse.json({ success: true });
    response.cookies.set(COOKIE_NAME, cookieValue, {
      httpOnly: true,
      secure: isProduction,
      sameSite: "strict",
      path: "/",
      maxAge: COOKIE_MAX_AGE,
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });
  return response;
}

export async function GET(request: NextRequest) {
  const session = request.cookies.get(COOKIE_NAME);
  const valid = session ? await verifySignedCookie(session.value) : false;
  return NextResponse.json({ authenticated: valid });
}
