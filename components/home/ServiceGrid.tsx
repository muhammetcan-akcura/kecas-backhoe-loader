import Link from "next/link";
import { servicesData } from "@/lib/servicesData";
import { ArrowRight, Hammer, Pickaxe, Truck, Wrench, Building2, Trash2 } from "lucide-react";

// Hizmet ikonları - sarı vurgu ile
const serviceIcons: Record<string, any> = {
  "kepce-hizmeti": Truck,
  "jcb-kepce-kiralama": Wrench,
  "kazi-isleri": Pickaxe,
  "temel-kazisi": Building2,
  "kanal-acma": Hammer,
  "dolgu-isleri": Truck,
  "dolgu-tesviye": Hammer,
  "yikim-isi": Trash2,
  "duvar-yikimi": Hammer,
  "kucuk-yapi-yikimi": Trash2,
  "beton-kirma": Hammer,
  "operatorlu-kepce-kiralama": Wrench,
  "is-makinesi-kiralama": Truck,
};

export function ServiceGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="mb-4 text-foreground">
            Arnavutköy Kepçe Kiralama Hizmetlerimiz
          </h2>
          <p className="text-lg text-muted-foreground">
            JCB 3CX kepçe ile profesyonel kazı, yıkım ve hafriyat hizmetleri.
            Tüm işler <strong className="text-foreground">ücretsiz keşif</strong> sonrası planlanır.
          </p>
        </div>

        {/* Services Grid - İkonlu kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const Icon = serviceIcons[service.slug] || Wrench;

            return (
              <article
                key={service.slug}
                className="group relative bg-white border-2 border-border rounded-lg p-6 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl"
                itemScope
                itemType="https://schema.org/Service"
              >
                {/* Schema markup */}
                <meta itemProp="areaServed" content={service.primaryLocation} />
                <meta itemProp="provider" content="KEÇAŞ KEPÇE" />

                {/* Sarı ikon - sol üst */}
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg">
                  <Icon size={28} className="text-primary" strokeWidth={2.5} />
                </div>

                {/* Service title */}
                <h3 className="text-xl mb-2 text-foreground font-bold" itemProp="name">
                  {service.name}
                </h3>

                {/* Local service indicator */}
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide font-semibold">
                  {service.primaryLocation} • Operatörlü Hizmet
                </p>

                {/* Short description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2" itemProp="description">
                  {service.content.intro.substring(0, 120)}...
                </p>

                {/* Feature list - 3 özellik */}
                <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                  {service.content.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5 font-bold">✓</span>
                      <span className="line-clamp-1">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer - Link */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-bold text-foreground">
                    {service.content.pricingLogic.substring(0, 30)}...
                  </span>
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all group-hover:text-primary"
                    aria-label={`${service.name} detaylarını görüntüle`}
                  >
                    Detaylar
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Hover effect - sarı çizgi */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full rounded-b-lg"></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
