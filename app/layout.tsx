import type { Metadata, Viewport } from "next";
import { Inter, Lora, Space_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { businessConfig } from "@/lib/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/schemas/LocalBusinessSchema";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

// Dynamic import for mobile-only CTA (not SEO-critical, reduces initial bundle)
const MobileStickyCTA = dynamic(
  () => import("@/components/common/MobileStickyCTA").then((mod) => mod.MobileStickyCTA)
);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  preload: true,
  fallback: ["georgia", "serif"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  preload: false, // Not critical, load later
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0074D9",
};

export const metadata: Metadata = {
  metadataBase: new URL(businessConfig.seo.siteUrl),
  title: {
    default: businessConfig.seo.defaultTitle,
    template: businessConfig.seo.titleTemplate,
  },
  description: businessConfig.seo.defaultDescription,
  authors: [{ name: businessConfig.name }],
  creator: businessConfig.name,
  publisher: businessConfig.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: businessConfig.seo.locale,
    url: businessConfig.seo.siteUrl,
    siteName: businessConfig.name,
    title: businessConfig.seo.defaultTitle,
    description: businessConfig.seo.defaultDescription,
    images: [
      {
        url: businessConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: businessConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: businessConfig.seo.defaultTitle,
    description: businessConfig.seo.defaultDescription,
    images: [businessConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: businessConfig.seo.googleVerification,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${lora.variable} ${spaceMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="image"
          href="/assets/arnavutkoy-jcb-3cx-kepce-arazi-calismasi.avif"
          type="image/avif"
          fetchPriority="high"
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <LocalBusinessSchema />
        <GoogleAnalytics />
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
