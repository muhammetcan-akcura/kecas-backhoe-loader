import Link from "next/link";
import { getAllServices, Service } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export function ServiceGrid() {
  const services = getAllServices();

  return (
    <section className="section-padding">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">
            Küçükçekmece Elektrik Hizmetlerimiz
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Küçükçekmece ve çevresinde ev ve iş yerleri için
            yerinde elektrik hizmetleri sunuyoruz.
            Tüm işler ücretsiz keşif sonrası planlanır.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article
      className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Local micro signal */}
      <meta itemProp="areaServed" content="Küçükçekmece, İstanbul" />
      <meta itemProp="provider" content="AKCURA ELEKTRİK" />

      {/* Service title */}
      <h3 className="text-xl mb-2 text-foreground" itemProp="name">
        {service.name}
      </h3>

      {/* Local service indicator */}
      <p className="text-xs text-muted-foreground mb-2">
        Küçükçekmece genelinde yerinde servis
      </p>

      {/* Short description */}
      <p className="text-muted-foreground text-sm mb-4" itemProp="description">
        {service.shortDescription}
      </p>

      {/* Feature list */}
      <ul className="text-sm text-muted-foreground mb-4 space-y-1">
        {service.features.slice(0, 3).map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-sm font-medium text-foreground">
          {service.priceRange}
        </span>
        <Link
          href={`/hizmetler/${service.slug}`}
          className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
          aria-label={`${service.name} detaylarını görüntüle`}
        >
          Detaylar <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
