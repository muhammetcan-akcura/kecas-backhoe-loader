import { businessConfig } from "@/lib/config";
import { ServiceData } from "@/lib/servicesData";

interface ServiceSchemaProps {
  service: ServiceData;
}

export function ServiceSchema({ service }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${businessConfig.websiteUrl}/hizmetler/${service.slug}#service`,
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
    url: `${businessConfig.websiteUrl}/hizmetler/${service.slug}`,
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
