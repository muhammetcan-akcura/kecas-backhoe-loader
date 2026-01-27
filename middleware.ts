import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 301 Permanent Redirects for consolidated service pages
const serviceRedirects: Record<string, string> = {
    '/hizmetler/kepce-hizmeti': '/hizmetler/operatorlu-kepce-kiralama',
    '/hizmetler/jcb-kepce-kiralama': '/hizmetler/operatorlu-kepce-kiralama',
    '/hizmetler/dolgu-isleri': '/hizmetler/dolgu-tesviye',
    '/hizmetler/duvar-yikimi': '/hizmetler/yikim-hizmetleri',
    '/hizmetler/kucuk-yapi-yikimi': '/hizmetler/yikim-hizmetleri',
    '/hizmetler/beton-kirma': '/hizmetler/yikim-hizmetleri',
    '/hizmetler/yikim-isi': '/hizmetler/yikim-hizmetleri',
    '/hizmetler/kanal-acma': '/hizmetler/kazi-isleri',
};

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if the current path needs to be redirected
    if (pathname in serviceRedirects) {
        const redirectUrl = new URL(serviceRedirects[pathname], request.url);

        // Return 301 Permanent Redirect
        return NextResponse.redirect(redirectUrl, { status: 301 });
    }

    // Continue with the request if no redirect is needed
    return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
    matcher: '/hizmetler/:path*',
};
