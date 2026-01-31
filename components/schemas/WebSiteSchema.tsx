import { businessConfig } from "@/lib/config";

export function WebSiteSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${businessConfig.websiteUrl}#website`,
        url: businessConfig.websiteUrl,
        name: businessConfig.name,
        description: businessConfig.seo.defaultDescription,
        inLanguage: "tr-TR",
        publisher: {
            "@id": `${businessConfig.websiteUrl}#localbusiness`,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
