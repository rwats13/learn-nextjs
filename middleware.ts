import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  /**
   * Match all request paths except the following:
   * api (API routes)
   * _next/static (static files)
   * _next/image (image optimisation files)
   * .*\\.png$ (PNG files)
   */
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}