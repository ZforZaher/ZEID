import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Correct way to get token
  const token = await getToken({ req: request });
  
  if (token) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL('/Login', request.url));
  }
}

export const config = {
  matcher: ['/Cart', '/Wishlist']
};