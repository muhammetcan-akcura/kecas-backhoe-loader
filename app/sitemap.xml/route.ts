import { businessConfig } from "@/lib/config";
import { servicesData } from "@/lib/servicesData";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
    const baseUrl = businessConfig.seo.siteUrl;
    const now = new Date().toISOString();

    const staticPages = [
        { url: "", priority: 1.0, freq: "weekly" },
        { url: "/hizmetler", priority: 0.9, freq: "weekly" },
        { url: "/iletisim", priority: 0.8, freq: "monthly" },
        { url: "/hakkimizda", priority: 0.6, freq: "monthly" },
    ];

    const servicePages = servicesData.map((service) => {
        const isMoneyPage = service.slug.includes('kiralik-kepce');
        return {
            url: `/hizmetler/${service.slug}`,
            priority: isMoneyPage ? 0.95 : 0.8,
            freq: isMoneyPage ? "weekly" : "monthly",
        };
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPages, ...servicePages]
            .map((page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.freq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`)
            .join("\n")}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            "Pragma": "no-cache",
            "Expires": "0",
        },
    });
}
