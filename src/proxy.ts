import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(request: NextRequest) {
  // Check if the user has an auth token in cookies
  // For now, we use a mock cookie named 'auth_token'
  const authToken = request.cookies.get('auth_token')?.value;

  const isAuthPage = request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/register');

  if (!authToken && !isAuthPage) {
    // If not authenticated and trying to access dashboard, redirect to login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (authToken && isAuthPage) {
    // If authenticated and trying to access login, redirect to dashboard
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Protect these routes (everything except API, static files, and _next)
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
