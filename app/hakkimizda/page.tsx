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
  title: "Hakkımızda | Keçaş Kepçe - 22 Yıllık Tecrübe",
  description:
    "Keçaş Kepçe, 2004 yılından beri Arnavutköy ve çevresinde JCB kepçe kiralama, kazı işleri ve hafriyat hizmetleri sunmaktadır. Güvenilir, şeffaf ve profesyonel hizmet anlayışı.",
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
              2004 yılından beri Arnavutköy ve çevresinde operatörlü kepçe kiralama
              ve kazı hizmetleri sunuyoruz.
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
                  {businessConfig.name}, 2004 yılında Arnavutköy'de
                  kurulmuştur. İnşaat ve kazı sektöründe edinilen 22 yıllık
                  tecrübe ile bölge halkına güvenilir kepçe kiralama ve kazı hizmetleri
                  sunmak amacıyla yola çıktık.
                </p>

                <p>
                  JCB 3CX beko loder kazıyıcı yükleyici ekipmanımız ve tecrübeli
                  operatörlerimiz ile Arnavutköy, Şirindere, Hadımköy, Taşoluk,
                  Boyalık ve çevresindeki tüm kazı, yıkım ve hafriyat ihtiyaçlarına
                  hızlı ve profesyonel çözümler üretiriz.
                </p>

                <p>
                  Amacımız sadece bir işi tamamlamak değil, uzun vadeli güven
                  ilişkileri kurmaktır. Bu nedenle her işi kendi projemizmiş
                  gibi titizlikle yaparız. 7/24 acil hizmet desteği ile yanınızdayız.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/kecas-kepce-calisma-sahasi.avif"
                alt="Keçaş Kepçe JCB 3CX çalışma sahası"
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
              Arnavutköy ve Çevresinde Hizmet
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Arnavutköy başta olmak üzere Şirindere, Hadımköy, Taşoluk,
              Boyalık ve çevre bölgelerde operatörlü kepçe kiralama hizmetleri sunuyoruz.
              Tüm çalışmalar profesyonel ekipman ve tecrübeli operatörler ile
              güvenli şekilde gerçekleştirilmektedir.
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
              Neden Keçaş Kepçe?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  22 Yıllık Tecrübe
                </h3>
                <p className="text-muted-foreground">
                  2004 yılından bu yana aynı bölgede aktif olarak kepçe kiralama
                  ve kazı hizmetleri veriyoruz.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Yerel Bilgi
                </h3>
                <p className="text-muted-foreground">
                  Arnavutköy'ün arazi yapısını, zemin özelliklerini ve altyapısını
                  yakından tanıyoruz.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Profesyonel Ekipman
                </h3>
                <p className="text-muted-foreground">
                  JCB 3CX beko loder kazıyıcı yükleyici ile bakımlı ve güvenli
                  ekipman garantisi sunuyoruz.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Tecrübeli Operatör
                </h3>
                <p className="text-muted-foreground">
                  Sertifikalı ve deneyimli operatörlerimiz ile her işi güvenle
                  tamamlıyoruz.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  7/24 Hizmet
                </h3>
                <p className="text-muted-foreground">
                  Acil durumlarda 7 gün 24 saat ulaşılabilir ve hızlı çözüm
                  sunuyoruz.
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
            Kepçe kiralama ve kazı hizmetleri hakkında bilgi almak için bize ulaşabilirsiniz.
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
