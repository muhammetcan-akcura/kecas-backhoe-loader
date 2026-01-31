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
    areaServed: {
      "@type": "City",
      name: service.primaryLocation,
    },
    provider: {
      "@id": `${businessConfig.websiteUrl}#localbusiness`,
    },
    url: `${businessConfig.websiteUrl}/hizmetler/${service.slug}`,
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
