import { NextResponse, NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const PUBLIC_FILE = /\.(.*)$/
const PROTECTED = ['/admin']

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  const mustAuth = PROTECTED.some((p) => pathname.startsWith(p))
  if (!mustAuth) return NextResponse.next()

  const token = req.cookies.get('token')?.value
  if (!token) return redirectLogin(req)

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET as string)
    const payload = await jwtVerify(
      token,
      secret,
    )

    if (pathname.startsWith('/admin') && payload.payload.email !== 'example@mail.com') {
      return NextResponse.redirect(new URL('/', req.url))
    }

    return NextResponse.next()
  } catch {
    return redirectLogin(req)
  }
}

function redirectLogin(req: NextRequest) {
  const loginUrl = new URL('/login', req.url)
  loginUrl.searchParams.set('from', req.nextUrl.pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/((?!favicon.ico).*)'],
}