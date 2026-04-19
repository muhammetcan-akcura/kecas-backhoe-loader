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
            url: `${baseUrl}/arnavutkoy-kiralik-kepce`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        // Yunus Emre Mahallesi Hizmetleri
        {
            url: `${baseUrl}/yunus-emre-kiralik-kepce`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/yunus-emre-kazi-isleri`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/yunus-emre-temel-kazisi`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/yunus-emre-yikim`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        // Bölgesel Pillar Sayfalar
        {
            url: `${baseUrl}/hadimkoy-kiralik-kepce`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/tasoluk-kiralik-kepce`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/bolluca-kiralik-kepce`,
            lastModified: new Date('2026-03-07'),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/deliklikaya-kiralik-kepce`,
            lastModified: new Date('2026-04-19'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/omerli-kiralik-kepce`,
            lastModified: new Date('2026-04-19'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/imrahor-kiralik-kepce`,
            lastModified: new Date('2026-04-19'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/karlibayir-kiralik-kepce`,
            lastModified: new Date('2026-04-19'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/haracci-kiralik-kepce`,
            lastModified: new Date('2026-04-19'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/yassioren-kiralik-kepce`,
            lastModified: new Date('2026-04-19'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/baklali-kiralik-kepce`,
            lastModified: new Date('2026-04-19'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/bogazkoy-kiralik-kepce`,
            lastModified: new Date('2026-04-19'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/yavuz-selim-kiralik-kepce`,
            lastModified: new Date('2026-04-19'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/tayakadin-kiralik-kepce`,
            lastModified: new Date('2026-04-19'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/mavigol-kiralik-kepce`,
            lastModified: new Date('2026-04-19'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/boyalik-kiralik-kepce`,
            lastModified: new Date('2026-04-19'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];
}
