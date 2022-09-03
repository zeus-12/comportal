import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req) {
  const session = req.header["x-access-token"];
  console.log(session);
  if (!session) return NextResponse.redirect(new URL("/about-2", req.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/:path*",
};
