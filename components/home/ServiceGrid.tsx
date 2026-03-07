import Link from "next/link";
import { servicesData } from "@/lib/servicesData";
import { ArrowRight, Hammer, Pickaxe, Truck, Wrench, Building2, Trash2, Star } from "lucide-react";

// Ana hizmet slugları (neighborhood sayfaları hariç)
const mainServiceSlugs = [
  "operatorlu-kepce-kiralama",
  "kazi-isleri",
  "temel-kazisi",
  "dolgu-tesviye",
  "yikim-hizmetleri",
  "is-makinesi-kiralama",
];

const moneyPageSlug = "arnavutkoy-kiralik-kepce";

// Hizmet ikonları
const serviceIcons: Record<string, any> = {
  "operatorlu-kepce-kiralama": Wrench,
  "kazi-isleri": Pickaxe,
  "temel-kazisi": Building2,
  "dolgu-tesviye": Hammer,
  "yikim-hizmetleri": Trash2,
  "is-makinesi-kiralama": Truck,
  "arnavutkoy-kiralik-kepce": Truck,
};

const neighborhoodSlugs = [
  "arnavutkoy-kiralik-kepce",
  "yunus-emre-kiralik-kepce",
  "yunus-emre-kazi-isleri",
  "yunus-emre-temel-kazisi",
  "yunus-emre-yikim",
  "hadimkoy-kiralik-kepce",
  "tasoluk-kiralik-kepce",
  "bolluca-kiralik-kepce",
];

const getServicePath = (slug: string) => {
  return neighborhoodSlugs.includes(slug) ? `/${slug}` : `/hizmetler/${slug}`;
};

export function ServiceGrid() {
  const moneyPage = servicesData.find((s) => s.slug === moneyPageSlug);
  const mainServices = servicesData.filter((s) => mainServiceSlugs.includes(s.slug));

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

        {/* HIGHLIGHTED MONEY PAGE CARD */}
        {moneyPage && (
          <Link
            href={getServicePath(moneyPage.slug)}
            className="block mb-8 group"
            aria-label="Arnavutköy Kiralık Kepçe detayları"
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-2 border-primary rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300">
              {/* Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                <Star size={12} fill="currentColor" />
                Öne Çıkan
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/15 rounded-xl shrink-0">
                  <Truck size={32} className="text-primary" strokeWidth={2.5} />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {moneyPage.name}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base line-clamp-2">
                    {moneyPage.content.intro.substring(0, 180)}...
                  </p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    {moneyPage.content.benefits.slice(0, 4).map((b, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        ✓ {b.split("–")[0].trim()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-primary font-semibold shrink-0">
                  Detaylar
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full rounded-b-xl"></div>
            </div>
          </Link>
        )}

        {/* Services Grid - Ana hizmetler */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainServices.map((service) => {
            const Icon = serviceIcons[service.slug] || Wrench;
            const path = getServicePath(service.slug);

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
                    href={path}
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
