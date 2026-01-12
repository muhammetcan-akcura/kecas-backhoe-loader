import { businessConfig } from "@/lib/config";
import { Service } from "@/lib/services";

interface ServiceSchemaProps {
  service: Service;
}

export function ServiceSchema({ service }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "serviceType": service.name,
    "areaServed": {
      "@type": "Place",
      "name": businessConfig.serviceArea.full
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": businessConfig.name,
      "url": businessConfig.website,
      "telephone": businessConfig.phone,
      "areaServed": {
        "@type": "Place",
        "name": businessConfig.serviceArea.full
      },
      "sameAs": businessConfig.socialProfiles
    }
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
