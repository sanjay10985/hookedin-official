import { NextResponse } from "next/server";

export function middleware(request) {
  const authSession = request.cookies.get("auth-session");

  if (request.nextUrl.pathname.startsWith("/app")) {
    if (!authSession) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }

    try {
      // Verify session data
      const session = JSON.parse(authSession.value);
      if (!session.email) {
        return NextResponse.redirect(new URL("/auth", request.url));
      }
    } catch {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/app/:path*",
};
