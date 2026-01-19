import { businessConfig } from "@/lib/config";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${businessConfig.websiteUrl}#localbusiness`,

    name: businessConfig.name,
    description: businessConfig.description,
    foundingDate: businessConfig.foundingDate,
    priceRange: businessConfig.priceRange,

    url: businessConfig.websiteUrl,
    image: `${businessConfig.websiteUrl}${businessConfig.seo.ogImage}`,

    telephone: businessConfig.phone,
    email: businessConfig.email,

    /* ---------------- ADDRESS (SERVICE AREA SAFE) ---------------- */
    address: businessConfig.address,

    /* ---------------- SERVICE AREA ---------------- */
    areaServed: {
      "@type": "ServiceArea",
      areaServed: {
        "@type": "AdministrativeArea",
        name: businessConfig.serviceArea.full,
      },
    },

    /* ---------------- OPENING HOURS ---------------- */
    openingHoursSpecification: businessConfig.openingHoursSpec,

    /* ---------------- BUSINESS TYPE ---------------- */
    serviceType: [
      "Kepçe kiralama",
      "JCB kepçe kiralama",
      "Kazı işleri",
      "Temel kazısı",
      "Yıkım işi",
      "Kanal açma",
      "Dolgu ve tesviye",
      "Operatörlü kepçe",
      "İş makinesi kiralama",
    ],

    /* ---------------- SOCIAL / ENTITY LINKS ---------------- */
    sameAs: businessConfig.sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
