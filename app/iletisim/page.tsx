import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { businessConfig } from "@/lib/config";
import { BreadcrumbSchema } from "@/components/schemas/BreadcrumbSchema";
import { LocalBusinessSchema } from "@/components/schemas/LocalBusinessSchema";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* METADATA                                                                   */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = generateMetadata({
  title: "İletişim",
  description: `${businessConfig.name} ile iletişime geçin. Küçükçekmece ve çevresinde yerinde elektrik hizmetleri için telefon veya e-posta yoluyla bize ulaşabilirsiniz.`,
  path: "/iletisim",
});

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function ContactPage() {
  return (
    <>
      {/* SCHEMA */}
      <LocalBusinessSchema />

      <BreadcrumbSchema
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "İletişim", path: "/iletisim" },
        ]}
      />

      {/* HERO */}
      <section className="bg-card border-b border-border">
        <div className="container-main py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">
              İletişim
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Elektrik hizmetleri hakkında bilgi almak ve randevu oluşturmak
              için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT */}
            <div>
              <h2 className="mb-8 text-3xl md:text-4xl font-bold">
                İletişim Bilgileri
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-card border border-border rounded-lg">
                  <Phone className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <a
                      href={businessConfig.phoneFormatted}
                      className="text-lg text-primary hover:underline"
                    >
                      {businessConfig.phone}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Çalışma saatleri içerisinde ulaşabilirsiniz
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-card border border-border rounded-lg">
                  <Mail className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">E-posta</h3>
                    <a
                      href={`mailto:${businessConfig.email}`}
                      className="text-primary hover:underline break-all"
                    >
                      {businessConfig.email}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      En kısa sürede dönüş sağlanır
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-card border border-border rounded-lg">
                  <MapPin className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Hizmet Bölgesi</h3>
                    <p className="text-foreground">
                      {businessConfig.serviceArea.full}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Hizmetlerimiz sabit bir mağaza üzerinden değil,
                      adresinize gelerek sunulmaktadır.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-card border border-border rounded-lg">
                  <Clock className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Çalışma Saatleri</h3>
                    <p className="text-foreground">
                      Pazartesi – Cumartesi:{" "}
                      {businessConfig.workingHours.weekdays}
                    </p>
                    <p className="text-foreground">
                      Pazar: {businessConfig.workingHours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT – MAP */}
            <div>
              <h2 className="mb-8 text-3xl md:text-4xl font-bold">
                Hizmet Alanımız
              </h2>

              <div className="bg-card border border-border rounded-lg overflow-hidden h-[420px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d145618.86533730265!2d28.779357!3d41.020681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ba31ce02fca4235%3A0x535971576d417566!2sAkcura%20Elektrik!5e1!3m2!1str!2str!4v1768251499730!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Küçükçekmece Elektrikçi Harita"
                />
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                Küçükçekmece başta olmak üzere Halkalı, Atakent, Cennet,
                Sefaköy ve çevre mahallelere yerinde servis hizmeti sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-main text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">
            Bizimle İletişime Geçin
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg opacity-95">
            Elektrik hizmetleri hakkında bilgi almak için bize ulaşabilirsiniz.
          </p>
          <a
            href={businessConfig.phoneFormatted}
            className="inline-flex items-center justify-center px-8 py-3 bg-card text-primary font-medium rounded-lg shadow-md hover:bg-card/90 transition"
          >
            <Phone size={20} className="mr-2" />
            {businessConfig.phone}
          </a>
        </div>
      </section>
    </>
  );
}
