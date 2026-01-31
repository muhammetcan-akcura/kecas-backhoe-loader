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

    /* ---------------- ADDRESS ---------------- */
    address: businessConfig.address,

    /* ---------------- GEO COORDINATES ---------------- */
    geo: businessConfig.geo,

    /* ---------------- MAP LINK ---------------- */
    hasMap: businessConfig.hasMap,

    /* ---------------- SERVICE AREA (CORRECTED) ---------------- */
    areaServed: [
      {
        "@type": "City",
        name: "Arnavutköy",
        containedInPlace: {
          "@type": "State",
          name: "İstanbul",
        },
      },
      {
        "@type": "Place",
        name: "Hadımköy",
      },
      {
        "@type": "Place",
        name: "Taşoluk",
      },
      {
        "@type": "Place",
        name: "Şirindere",
      },
      {
        "@type": "Place",
        name: "Bolluca",
      },
      {
        "@type": "Place",
        name: "Boyalık",
      },
    ],

    /* ---------------- OPENING HOURS ---------------- */
    openingHoursSpecification: businessConfig.openingHoursSpec,

    /* ---------------- PAYMENT & LANGUAGE ---------------- */
    paymentAccepted: businessConfig.paymentAccepted,
    currenciesAccepted: businessConfig.currenciesAccepted,
    knowsLanguage: businessConfig.knowsLanguage,

    /* ---------------- SERVICE TYPES ---------------- */
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
