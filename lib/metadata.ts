// Metadata Generation Utilities for Next.js
import { Metadata } from "next";
import { businessConfig } from "./config";

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}

/* -------------------------------------------------------------------------- */
/* BASE METADATA GENERATOR                                                     */
/* -------------------------------------------------------------------------- */

export function generateMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
}: GenerateMetadataProps): Metadata {
  const metaTitle = title ?? businessConfig.seo.defaultTitle;
  const metaDescription =
    description ?? businessConfig.seo.defaultDescription;

  const canonical = `${businessConfig.seo.siteUrl}${path}`;

  const ogImage =
    image || businessConfig.seo.ogImage || "/og-default.jpg";

  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${businessConfig.seo.siteUrl}${ogImage}`;

  return {
    title: metaTitle,

    description: metaDescription,

    alternates: {
      canonical,
    },

    openGraph: {
      type: "website",
      locale: businessConfig.seo.locale,
      url: canonical,
      siteName: businessConfig.name,
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [fullOgImage],
    },

    robots: noIndex
      ? {
        index: false,
        follow: false,
      }
      : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-snippet": -1,
          "max-image-preview": "large",
          "max-video-preview": -1,
        },
      },
  };
}

/* -------------------------------------------------------------------------- */
/* SERVICE PAGE METADATA                                                       */
/* -------------------------------------------------------------------------- */

export function generateServiceMetadata(
  serviceName: string,
  serviceDescription: string,
  slug: string
): Metadata {
  return generateMetadata({
    title: `${serviceName} – Küçükçekmece`,
    description: `${serviceDescription} Küçükçekmece ve çevresinde yerinde servis sunuyoruz.`,
    path: `/hizmetler/${slug}`,
  });
}

/* -------------------------------------------------------------------------- */
/* HOMEPAGE METADATA                                                           */
/* -------------------------------------------------------------------------- */

export function getHomeMetadata(): Metadata {
  return generateMetadata({
    title: "Küçükçekmece Elektrikçi – Yerinde Servis",
    description: businessConfig.seo.defaultDescription,
    path: "/",
  });
}
