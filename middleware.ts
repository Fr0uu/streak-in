import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('calisthenic_session')?.value;
  const hasUserSession = Boolean(sessionCookie && sessionCookie.trim() !== '');

  const pathname = request.nextUrl.pathname;

  // Protected paths
  const protectedPaths = ['/home', '/library', '/latihan', '/selesai', '/riwayat', '/notifikasi'];
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));

  // If visiting protected route without auth session, redirect to /akun?next=
  if (isProtected && !hasUserSession) {
    const redirectUrl = new URL('/akun', request.url);
    redirectUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // If already logged in and visiting /akun or root /, redirect to /home
  if (hasUserSession && (pathname === '/' || pathname === '/akun')) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, images in public
     * - api routes
     */
    '/((?!_next/static|_next/image|favicon.ico|api/|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
