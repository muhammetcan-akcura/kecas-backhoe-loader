import { MetadataRoute } from 'next';
import { businessConfig } from '@/lib/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api', '/_next'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: `${businessConfig.seo.siteUrl}/sitemap.xml`,
  };
}
