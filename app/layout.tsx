import type { Metadata, Viewport } from "next";
import "./globals.css";
import { businessConfig } from "@/lib/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/schemas/LocalBusinessSchema";

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
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <LocalBusinessSchema />
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
