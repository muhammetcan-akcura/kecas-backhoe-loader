import { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { getAllServices } from "@/lib/services";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/schemas/BreadcrumbSchema";
import { FAQSchema } from "@/components/schemas/FAQSchema";
import { businessConfig } from "@/lib/config";

export const metadata: Metadata = generateMetadata({
  title: "Küçükçekmece Elektrik Hizmetleri | AKCURA ELEKTRİK",
  description:
    "Küçükçekmece elektrik tesisatı, arıza onarımı, priz montajı, sigorta panosu tamiri ve aydınlatma kurulumu. Yerinde servis, ücretsiz keşif.",
  path: "/hizmetler",
});

const servicesFAQ = [
  {
    question: "Küçükçekmece’de tüm elektrik hizmetlerini veriyor musunuz?",
    answer:
      "Evet, elektrik arıza onarımı, tesisat, priz montajı, sigorta panosu tamiri ve aydınlatma kurulumu dahil tüm hizmetleri Küçükçekmece genelinde yerinde servis olarak sunuyoruz.",
  },
  {
    question: "Tüm hizmetler için ücretsiz keşif var mı?",
    answer:
      "Evet, sunduğumuz tüm elektrik hizmetleri için Küçükçekmece’de ücretsiz keşif yapıyoruz. Keşif sonrası net ve şeffaf fiyat teklifi sunulur.",
  },
];

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hizmetler", path: "/hizmetler" },
        ]}
      />

      <FAQSchema items={servicesFAQ} pageUrl="https://akcuraelektrik.com.tr/hizmetler" />

      {/* HERO */}
      <section className="bg-card border-b border-border">
        <div className="container-main py-14 md:py-18">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">
              Küçükçekmece Elektrik Hizmetleri
            </h1>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <strong>AKCURA ELEKTRİK</strong> olarak Küçükçekmece ve çevresinde
              ev ve iş yerleri için profesyonel elektrik hizmetleri sunuyoruz.
              Tüm işler yerinde servis ve ücretsiz keşif sonrası yapılır.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle size={18} className="text-primary" />
                Ücretsiz Keşif
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={18} className="text-primary" />
                Yerinde Servis
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={18} className="text-primary" />
                İşçilik Garantisi
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SCOPE */}
      <section className="py-6 bg-background border-b border-border min-h-[60px]">
        <div className="container-main text-center text-sm text-muted-foreground">
          <p>
            Tüm elektrik hizmetlerimiz <strong>Küçükçekmece</strong> merkez olmak
            üzere Halkalı, Atakent, Cennet, Sefaköy ve çevre mahallelerde
            <strong> yerinde servis</strong> olarak sunulmaktadır.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-2xl md:text-3xl font-bold">
              Sunduğumuz Elektrik Hizmetleri
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Elektrik işlerinizde ihtiyaç duyduğunuz tüm hizmetleri
              tek çatı altında sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.slug}
                className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {service.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {service.shortDescription}
                </p>

                <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-muted-foreground mb-4">
                  Küçükçekmece genelinde yerinde servis
                </p>

                <div className="flex items-center justify-between border-t pt-4">
                  <span className="text-sm font-medium">
                    {service.priceRange}
                  </span>
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Detaylar <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-padding bg-card">
        <div className="container-main max-w-4xl mx-auto">
          <h2 className="text-center mb-10 text-2xl md:text-3xl font-bold">
            Elektrik Hizmetlerinde Neden AKCURA ELEKTRİK?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Yerel Deneyim",
                desc: "Küçükçekmece’nin bina yapısını ve elektrik altyapısını iyi biliyoruz.",
              },
              {
                title: "Tecrübeli Ekip",
                desc: "2014 yılından beri sektörde deneyimli, belgeli elektrikçi kadrosu.",
              },
              {
                title: "Şeffaf Fiyat",
                desc: "Ücretsiz keşif sonrası net fiyat. İş bitiminde sürpriz yok.",
              },
              {
                title: "Garanti",
                desc: "Tüm işlerimiz işçilik garantilidir ve standartlara uygundur.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-main max-w-3xl mx-auto">
          <h2 className="text-center mb-8 text-2xl md:text-3xl font-bold">
            Sık Sorulan Sorular
          </h2>

          <div className="space-y-4">
            {servicesFAQ.map((faq, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg p-5 shadow-sm"
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-main text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">
            Elektrik İşleriniz İçin Hemen Arayın
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-primary-foreground/90">
            Küçükçekmece’de tüm elektrik hizmetleri için ücretsiz keşif yapıyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="px-8 py-3 bg-card text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl"
            >
              Ücretsiz Keşif İste
            </Link>
            <a
              href={businessConfig.phoneFormatted}
              className="px-8 py-3 border-2 border-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary-foreground hover:text-primary transition"
            >
              <Phone size={18} />
              {businessConfig.phone}
            </a>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/80">
            Google Haritalar’da işletmemizi aratarak yorumlarımızı inceleyebilirsiniz.
          </p>
        </div>
      </section>
    </>
  );
}
