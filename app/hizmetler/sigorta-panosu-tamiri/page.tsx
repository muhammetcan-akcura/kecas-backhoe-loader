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
  slug: "sigorta-panosu-tamiri",
  name: "Sigorta Panosu Tamiri",
  shortDescription: "Yerinde sigorta panosu kontrol, düzenleme ve tamir hizmeti",
  description:
    "Sigorta panosunda yaşanan arıza, sık sigorta atması, düzensiz bağlantı ve güvenlik sorunları için Küçükçekmece ve çevresinde yerinde sigorta panosu tamir hizmeti sunuyoruz. Elektrik güvenliğini riske atmadan, pano içi kontrolleri profesyonel şekilde gerçekleştiriyoruz.",
  features: [
    "Sigorta panosu arıza tespiti",
    "Sürekli atan sigortaların kontrolü",
    "Pano içi bağlantıların düzenlenmesi",
    "Yıpranmış ve riskli parçaların tespiti",
    "Güvenli ve düzenli pano yapısının sağlanması",
  ],
  priceRange: "500₺'den başlayan fiyatlarla",
};

/* -------------------------------------------------------------------------- */
/* METADATA                                                                    */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = generateServiceMetadata(
  `Küçükçekmece ${service.name}`,
  service.description,
  service.slug
);

/* -------------------------------------------------------------------------- */
/* FAQ DATA                                                                    */
/* -------------------------------------------------------------------------- */

const serviceFAQ: FAQItem[] = [
  {
    question: "Sigorta panosu neden sürekli atar?",
    answer:
      "Aşırı yüklenme, kısa devre, eski tesisat veya pano içindeki düzensiz bağlantılar sigortaların sürekli atmasına neden olabilir.",
  },
  {
    question: "Sigorta panosu tamiri ne zaman gereklidir?",
    answer:
      "Sigortaların sık atması, yanık kokusu, gevşek bağlantılar veya elektrik kesintilerinin sık yaşanması pano tamiri gerektirebilir.",
  },
  {
    question: "Sigorta panosu tamiri ne kadar sürer?",
    answer:
      "Arızanın durumuna göre değişir. Basit kontroller ve düzenlemeler kısa sürede tamamlanabilir. Detaylı işlemler için süre yerinde inceleme sonrası netleşir.",
  },
  {
    question: "Yapılan sigorta panosu işlemleri garantili midir?",
    answer:
      "Evet, yapılan tüm sigorta panosu tamir ve düzenleme işlemleri için işçilik garantisi sunulmaktadır.",
  },
];

/* -------------------------------------------------------------------------- */
/* PAGE                                                                        */
/* -------------------------------------------------------------------------- */

export default function SigortaPanosuTamiriPage() {
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
              Küçükçekmece Sigorta Panosu Tamiri Hizmeti
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Küçükçekmece ve çevresinde sigorta panosu kaynaklı elektrik
              sorunlarına <strong>güvenli, kontrollü ve kalıcı</strong> çözümler
              sunuyoruz.
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
              Sigorta Panosu Tamiri Hizmet Detayları
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {service.description} Sigorta panosu, elektrik sisteminin kalbidir
              ve burada oluşabilecek sorunlar ciddi güvenlik riskleri
              oluşturabilir.
            </p>

            <h3 className="text-xl md:text-2xl mb-4 font-semibold">
              Yaptığımız İşlemler
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
                Çalışma Süreci ve Güvenlik
              </h3>
              <p className="text-muted-foreground">
                Sigorta panosu tamir işlemleri, yerinde yapılan detaylı inceleme
                sonrası planlanır. Elektrik güvenliği öncelik alınarak pano içi
                bağlantılar düzenlenir ve riskli durumlar ortadan kaldırılır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl md:text-4xl font-bold">
              Neden Sigorta Panosu Tamirinde Bizi Tercih Etmelisiniz?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Yerinde Kontrol</h3>
                <p className="text-sm text-muted-foreground">
                  Sigorta panosu adresinizde detaylı şekilde kontrol edilir.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Güvenlik Önceliği</h3>
                <p className="text-sm text-muted-foreground">
                  Elektrik güvenliği esas alınarak tüm işlemler gerçekleştirilir.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Düzenli Pano Yapısı</h3>
                <p className="text-sm text-muted-foreground">
                  Pano içi bağlantılar düzenlenerek güvenli hale getirilir.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Garanti</h3>
                <p className="text-sm text-muted-foreground">
                  Yapılan tüm işlemler için işçilik garantisi sunulur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-3xl">
            <h2 className="mb-8 text-3xl md:text-4xl font-bold">
              Sık Sorulan Sorular
            </h2>
            <div className="space-y-4">
              {serviceFAQ.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-lg p-6 shadow-sm"
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
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-main text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">
            Sigorta Panosu Sorunları İçin Hemen İletişime Geçin
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
            Küçükçekmece sigorta panosu tamiri hizmeti için ücretsiz keşif
            talep edebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center px-8 py-3 bg-card text-primary font-medium rounded-lg"
            >
              İletişim Formu
            </Link>
            <a
              href={businessConfig.phoneFormatted}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-foreground rounded-lg"
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
