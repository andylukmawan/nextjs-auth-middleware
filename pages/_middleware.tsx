import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // 🌐 set relative-url
  const url = req.nextUrl.clone();

  // 🍪 get cookie
  const isLogin = JSON.parse(req.cookies['isLogin'] || 'false');

  // ⬅️ navigate from all pages to login page when unauthenticated
  if (url.pathname !== '/' && !isLogin) {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  // ➡️ navigate from login page to dashboard page when authenticated
  if (url.pathname === '/' && isLogin) {
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }
}
