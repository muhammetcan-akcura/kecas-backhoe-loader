import { MetadataRoute } from 'next';
import { businessConfig } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = businessConfig.seo.siteUrl;

    return [
        {
            url: baseUrl,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/hizmetler`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/hakkimizda`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/iletisim`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // Ana Hizmetler
        {
            url: `${baseUrl}/hizmetler/operatorlu-kepce-kiralama`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/hizmetler/kazi-isleri`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/hizmetler/temel-kazisi`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/hizmetler/dolgu-tesviye`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/hizmetler/yikim-hizmetleri`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/hizmetler/is-makinesi-kiralama`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/hizmetler/arnavutkoy-kiralik-kepce`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        // Yunus Emre Mahallesi Hizmetleri
        {
            url: `${baseUrl}/hizmetler/yunus-emre-kiralik-kepce`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/hizmetler/yunus-emre-kazi-isleri`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/hizmetler/yunus-emre-temel-kazisi`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/hizmetler/yunus-emre-yikim`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // Bölgesel Pillar Sayfalar
        {
            url: `${baseUrl}/hizmetler/hadimkoy-kiralik-kepce`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/hizmetler/tasoluk-kiralik-kepce`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/hizmetler/bolluca-kiralik-kepce`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
}
