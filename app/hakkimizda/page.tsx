import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generateMetadata } from "@/lib/metadata";
import { businessConfig } from "@/lib/config";
import { BreadcrumbSchema } from "@/components/schemas/BreadcrumbSchema";
import { LocalBusinessSchema } from "@/components/schemas/LocalBusinessSchema";
import { CheckCircle } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* METADATA                                                                   */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = generateMetadata({
  title: "Hakkımızda",
  description:
    "Akcura Elektrik, 2014 yılından beri Küçükçekmece ve çevresinde yerinde elektrik hizmetleri sunmaktadır. Güvenilir, şeffaf ve profesyonel hizmet anlayışı.",
  path: "/hakkimizda",
});

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function AboutPage() {
  const values = [
    {
      title: "Dürüstlük",
      description:
        "Şeffaf iletişim ve net bilgilendirme prensibiyle çalışırız.",
    },
    {
      title: "Kalite",
      description:
        "Her işi teknik standartlara uygun ve güvenli şekilde yaparız.",
    },
    {
      title: "Güvenilirlik",
      description:
        "Verdiğimiz sözlerin arkasında durur, sorumluluk alırız.",
    },
    {
      title: "Müşteri Memnuniyeti",
      description:
        "Her müşteriye komşumuz gibi yaklaşırız.",
    },
  ];

  return (
    <>
      {/* SCHEMAS */}
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hakkımızda", path: "/hakkimizda" },
        ]}
      />

      {/* HERO */}
      <section className="bg-card border-b border-border">
        <div className="container-main py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Hakkımızda
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              2014 yılından beri Küçükçekmece ve çevresinde yerinde elektrik
              hizmetleri sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="mb-6 text-3xl md:text-4xl font-bold">
                Hikayemiz
              </h2>

              <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  {businessConfig.name}, 2014 yılında Küçükçekmece’de
                  kurulmuştur. Elektrik sektöründe edinilen uzun yıllara
                  dayanan tecrübe ile bölge halkına güvenilir hizmet sunmak
                  amacıyla yola çıktık.
                </p>

                <p>
                  Hizmetlerimiz sabit bir mağaza üzerinden değil, müşterilerimizin
                  adresine gelerek sunulmaktadır. Bu sayede Küçükçekmece ve
                  çevresindeki elektrik ihtiyaçlarına hızlı ve yerinde çözümler
                  üretiriz.
                </p>

                <p>
                  Amacımız sadece bir işi tamamlamak değil, uzun vadeli güven
                  ilişkileri kurmaktır. Bu nedenle her işi kendi evimizdeymiş
                  gibi titizlikle yaparız.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/elektrik-ustasi.jpg"
                alt="Akcura Elektrik çalışma sahası"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="max-w-3xl">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">
              Küçükçekmece ve Çevresinde Hizmet
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Küçükçekmece başta olmak üzere Halkalı, Atakent, Cennet ve
              Sefaköy bölgelerinde yerinde elektrik hizmetleri sunuyoruz.
              Tüm çalışmalar servis bölgesi kapsamında, adresinizde
              gerçekleştirilmektedir.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">
              Değerlerimiz
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              İşimizi yaparken bağlı kaldığımız temel ilkeler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <CheckCircle
                  className="text-primary mx-auto mb-4"
                  size={36}
                />
                <h3 className="text-lg font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-10 text-center text-3xl md:text-4xl font-bold">
              Neden Akcura Elektrik?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Tecrübe ve Süreklilik
                </h3>
                <p className="text-muted-foreground">
                  2014 yılından bu yana aynı bölgede aktif olarak hizmet
                  veriyoruz.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Yerel Bilgi
                </h3>
                <p className="text-muted-foreground">
                  Küçükçekmece’nin bina yapısını ve altyapısını yakından
                  tanıyoruz.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Şeffaf Çalışma
                </h3>
                <p className="text-muted-foreground">
                  İş öncesi bilgilendirme yapar, süreç boyunca açık iletişim
                  kurarız.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Sorumluluk
                </h3>
                <p className="text-muted-foreground">
                  Yaptığımız işlerin arkasında dururuz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card text-foreground">
        <div className="container-main text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">
            Bizimle İletişime Geçin
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-muted-foreground">
            Elektrik hizmetleri hakkında bilgi almak için bize ulaşabilirsiniz.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition shadow-md"
          >
            İletişime Geç
          </Link>
        </div>
      </section>
    </>
  );
}
