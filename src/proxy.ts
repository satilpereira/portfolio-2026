import { NextResponse, NextRequest } from "next/server";

let locales = ['en', 'pt']

function getLocale(request: NextRequest) {
  // Get the preferred locale from the Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language')
  if (!acceptLanguage) return 'en-US' // Default locale

  const acceptedLocales = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim())

  // Find the first accepted locale that matches our supported locales
  for (const acceptedLocale of acceptedLocales) {
    if (locales.includes(acceptedLocale)) {
      return acceptedLocale
    }
  }

  // If no accepted locale matches, return the default
  return 'en-US'
}

export function proxy(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}


export const config = {
  matcher: [
    // Skip all internal paths (_next) and any paths that contain a dot (e.g. static assets like .pdf, .jpg, etc.)
    '/((?!_next|.*\\.pdf$).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
