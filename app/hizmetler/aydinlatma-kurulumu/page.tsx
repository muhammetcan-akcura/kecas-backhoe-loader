import { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { generateServiceMetadata } from "@/lib/metadata";
import { businessConfig } from "@/lib/config";
import { ServiceSchema } from "@/components/schemas/ServiceSchema";
import { BreadcrumbSchema } from "@/components/schemas/BreadcrumbSchema";
import { FAQSchema, FAQItem } from "@/components/schemas/FAQSchema";

/* -------------------------------------------------------------------------- */
/* SERVICE CONFIG                                                              */
/* -------------------------------------------------------------------------- */

const service = {
  slug: "aydinlatma-kurulumu",
  name: "Aydınlatma Kurulumu",
  shortDescription: "Yerinde aydınlatma kurulumu ve montaj hizmeti",
  description:
    "Konut ve iş yerleri için iç ve dış mekan aydınlatma kurulumu, montaj ve düzenleme işlemlerini Küçükçekmece ve çevresinde yerinde hizmet anlayışıyla gerçekleştiriyoruz.",
  features: [
    "Avize ve lamba montajı",
    "LED aydınlatma kurulumu",
    "Spot ve dekoratif aydınlatma",
    "Dış mekan aydınlatma montajı",
    "Güvenli ve düzenli bağlantı",
  ],
  priceRange: "100₺'den başlayan",
};

/* -------------------------------------------------------------------------- */
/* METADATA                                                                    */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = generateServiceMetadata(
  service.name,
  service.description,
  service.slug
);

/* -------------------------------------------------------------------------- */
/* FAQ DATA                                                                    */
/* -------------------------------------------------------------------------- */

const serviceFAQ: FAQItem[] = [
  {
    question: "Aydınlatma kurulumu hangi alanlarda yapılır?",
    answer:
      "Konutlar, ofisler ve küçük ölçekli iş yerlerinde iç ve dış mekan aydınlatma kurulumu yapılabilir.",
  },
  {
    question: "LED aydınlatma kurulumu yapıyor musunuz?",
    answer:
      "Evet, LED aydınlatma sistemlerinin montajı ve bağlantı işlemleri yapılmaktadır.",
  },
  {
    question: "Aydınlatma montajı ne kadar sürer?",
    answer:
      "Yapılacak işin kapsamına göre değişir. Basit montaj işlemleri genellikle kısa sürede tamamlanır.",
  },
  {
    question: "Kurulum sonrası garanti veriliyor mu?",
    answer:
      "Yapılan montaj işlemleri için işçilik garantisi sağlanmaktadır.",
  },
];

/* -------------------------------------------------------------------------- */
/* PAGE                                                                        */
/* -------------------------------------------------------------------------- */

export default function AydinlatmaKurulumuPage() {
  return (
    <>
      {/* SCHEMA */}
      <ServiceSchema service={service} />
      <BreadcrumbSchema
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hizmetler", path: "/hizmetler" },
          { name: service.name, path: `/hizmetler/${service.slug}` },
        ]}
      />
      <FAQSchema
        items={serviceFAQ}
        pageUrl={`https://akcuraelektrik.com.tr/hizmetler/${service.slug}`}
      />

      {/* HERO */}
      <section className="bg-card border-b border-border">
        <div className="container-main py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Küçükçekmece Aydınlatma Kurulumu Hizmeti
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Küçükçekmece, Halkalı ve Atakent çevresinde aydınlatma kurulum
              işlemlerini <strong>güvenli, düzenli ve yerinde</strong> şekilde
              gerçekleştiriyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/iletisim" className="btn-primary">
                İletişime Geç
              </Link>
              <a href={businessConfig.phoneFormatted} className="btn-secondary">
                <Phone size={18} className="mr-2" />
                {businessConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl md:text-4xl font-bold">
              Aydınlatma Kurulumu Hizmet Detayları
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {service.description}
            </p>

            <h3 className="text-xl md:text-2xl mb-4 font-semibold">
              Neler Yapıyoruz?
            </h3>
            <ul className="space-y-3 mb-10">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">✓</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl md:text-2xl mb-3 font-semibold">
                Çalışma Sürecimiz
              </h3>
              <p className="text-muted-foreground">
                Aydınlatma kurulumu, yerinde yapılan inceleme sonrası elektrik
                güvenliği kurallarına uygun şekilde tamamlanır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL AREA */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl md:text-4xl font-bold">
              Küçükçekmece’de Aydınlatma Kurulumu
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cennet Mahallesi, Halkalı, Atakent, Sefaköy ve Küçükçekmece’ye yakın
              bölgelerde aydınlatma kurulumu hizmeti sunuyoruz. Tüm işlemler
              adresinizde, yerinde gerçekleştirilir.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl md:text-4xl font-bold">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Yerinde Montaj</h3>
                <p className="text-sm text-muted-foreground">
                  Aydınlatma kurulum işlemleri adresinizde yapılır.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Güvenli Bağlantı</h3>
                <p className="text-sm text-muted-foreground">
                  Elektrik bağlantıları güvenlik standartlarına uygun yapılır.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Düzenli Teslim</h3>
                <p className="text-sm text-muted-foreground">
                  Montaj sonrası alan temiz ve düzenli bırakılır.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">İşçilik Garantisi</h3>
                <p className="text-sm text-muted-foreground">
                  Yapılan montaj işlemleri için garanti sunulur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="max-w-3xl">
            <h2 className="mb-8 text-3xl md:text-4xl font-bold">
              Sık Sorulan Sorular
            </h2>
            <div className="space-y-4">
              {serviceFAQ.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-background border border-border rounded-lg p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card text-foreground">
        <div className="container-main text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">
            Aydınlatma Kurulumu İçin Bize Ulaşın
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
            Küçükçekmece ve çevresinde aydınlatma kurulumu için ücretsiz keşif
            hizmeti sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90"
            >
              İletişim Formu
            </Link>
            <a
              href={businessConfig.phoneFormatted}
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
            >
              <Phone size={18} className="mr-2" />
              {businessConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
