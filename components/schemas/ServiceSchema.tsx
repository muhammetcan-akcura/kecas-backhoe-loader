import { businessConfig } from "@/lib/config";
import { ServiceData } from "@/lib/servicesData";

interface ServiceSchemaProps {
  service: ServiceData;
}

export function ServiceSchema({ service }: ServiceSchemaProps) {
  const neighborhoodSlugs = [
    "arnavutkoy-kiralik-kepce",
    "yunus-emre-kiralik-kepce",
    "yunus-emre-kazi-isleri",
    "yunus-emre-temel-kazisi",
    "yunus-emre-yikim",
    "hadimkoy-kiralik-kepce",
    "tasoluk-kiralik-kepce",
    "bolluca-kiralik-kepce",
    "deliklikaya-kiralik-kepce",
    "omerli-kiralik-kepce",
    "imrahor-kiralik-kepce",
    "karlibayir-kiralik-kepce",
    "haracci-kiralik-kepce",
    "yassioren-kiralik-kepce",
    "baklali-kiralik-kepce",
  ];
  const isNeighborhood = neighborhoodSlugs.includes(service.slug);
  const servicePath = isNeighborhood ? `/${service.slug}` : `/hizmetler/${service.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${businessConfig.websiteUrl}${servicePath}#service`,
    name: service.name,
    description: service.content.intro,
    serviceType: service.name,
    areaServed: [
      {
        "@type": "City",
        name: service.primaryLocation.split(",")[0].trim(),
        containedInPlace: {
          "@type": "State",
          name: service.primaryLocation.split(",")[1]?.trim() || "İstanbul",
        },
      },
      ...service.secondaryLocations.map((loc) => ({
        "@type": "Place" as const,
        name: loc,
      })),
    ],
    provider: {
      "@id": `${businessConfig.websiteUrl}#localbusiness`,
    },
    url: `${businessConfig.websiteUrl}${servicePath}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "TRY",
        description: "Ücretsiz keşif sonrası net fiyat teklifi sunulmaktadır.",
      },
    },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: businessConfig.phone,
        contactType: "customer service",
        availableLanguage: "Turkish",
      },
    },
    termsOfService: "Ücretsiz saha keşfi ve net fiyat teklifi",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
