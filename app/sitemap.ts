import { MetadataRoute } from 'next';
import { businessConfig } from '@/lib/config';
import { servicesData } from '@/lib/servicesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = businessConfig.seo.siteUrl;
  const now = new Date();

  const staticPages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/hizmetler`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  const servicePages = servicesData.map((service) => {
    const isMoneyPage = service.slug === 'arnavutkoy-kiralik-kepce';
    return {
      url: `${baseUrl}/hizmetler/${service.slug}`,
      lastModified: now,
      changeFrequency: (isMoneyPage ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: isMoneyPage ? 0.95 : 0.8,
    };
  });

  return [...staticPages, ...servicePages];
}
