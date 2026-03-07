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
      <section className="bg-white border-b-4 border-primary">
        <div className="container-main py-12 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground rounded-md text-xs font-bold mb-4">
              <span className="w-2 h-2 bg-foreground rounded-full animate-pulse"></span>
              22 yıllık tecrübe
            </div>
            <h1 className="mb-6 text-foreground">
              Hakkımızda
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              2004 yılından beri Arnavutköy ve çevresinde tecrübeli operatörlü kepçe kiralama
              ve profesyonel kazı hizmetleri sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="mb-6">
                Sektördeki 22 Yıllık Hikayemiz
              </h2>

              <div className="space-y-5 text-muted-foreground">
                <p>
                  <strong className="text-foreground">{businessConfig.name}</strong>, 2004 yılında Arnavutköy'de
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

            <div className="order-1 lg:order-2 relative h-[350px] lg:h-[450px] rounded-lg overflow-hidden shadow-2xl border-4 border-primary">
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
      <section className="section-padding bg-accent">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">
              Arnavutköy ve Çevresinde Güvenilir Hizmet
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Arnavutköy başta olmak üzere Şirindere, Hadımköy, Taşoluk,
              Boyalık ve çevre bölgelerde operatörlü kepçe kiralama hizmetleri sunuyoruz.
              Tüm çalışmalar profesyonel ekipman ve tecrübeli operatörler ile
              güvenli şekilde gerçekleştirilmektedir.
            </p>
            <div className="flex justify-center">
              <Link
                href="/arnavutkoy-kiralik-kepce"
                className="btn-outline"
              >
                Arnavutköy Kiralık Kepçe Detayları
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Kurumsal Değerlerimiz
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              İşimizi yaparken bağlı kaldığımız temel ilkeler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white border-b-4 border-primary rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full">
                  <CheckCircle size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-8 text-white">
                Neden Keçaş Kepçe?
              </h2>

              <div className="space-y-6">
                {[
                  { title: "22 Yıllık Tecrübe", desc: "2004 yılından bu yana aynı bölgede aktif olarak hizmet veriyoruz." },
                  { title: "Yerel Bilgi", desc: "Arnavutköy'ün arazi yapısını ve zemin özelliklerini yakından tanıyoruz." },
                  { title: "Profesyonel Ekipman", desc: "JCB 3CX beko loder kazıyıcı yükleyici ile güvenli çalışma." },
                  { title: "7/24 Acil Hizmet", desc: "Acil durumlarda hızlı çözüm ve kesintisiz destek sunuyoruz." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-white mb-1">{item.title}</h3>
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <h3 className="text-white mb-6">Misyonumuz</h3>
              <p className="text-gray-300 mb-8 italic">
                "Arnavutköy'ün gelişen inşaat ve yapı sektöründe, yerel değerlere saygılı, dürüstlükten ödün vermeyen ve teknik mükemmeliyeti hedefleyen bir çözüm ortağı olmak."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <span className="font-bold text-lg">K</span>
                </div>
                <div>
                  <p className="font-bold text-white">Yusuf Keleş</p>
                  <p className="text-sm text-gray-400">Şirket Sahibi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="mb-4 text-foreground">
              Projeniz İçin Hemen Teklif Alın
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-foreground/80 font-medium">
              Kepçe kiralama, kazı işleri ve yıkım hizmetleri hakkında tecrübeli ekibimizden bilgi alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="btn-secondary px-10 py-4 shadow-xl"
              >
                İletişime Geç
              </Link>
              <a
                href={businessConfig.phoneFormatted}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-foreground font-bold rounded-lg hover:bg-gray-100 transition shadow-xl"
              >
                {businessConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
