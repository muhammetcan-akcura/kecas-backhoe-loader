import dynamic from "next/dynamic";
import { getHomeMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { TrustSignals } from "@/components/home/TrustSignals";
import { FAQSchema } from "@/components/schemas/FAQSchema";
import { WorkGallery } from "@/components/home/workGallery";

// Dynamic imports for below-the-fold components (SEO preserved via schema)
const FAQ = dynamic(() => import("@/components/home/FAQ").then((mod) => ({ default: mod.FAQ })));
const CTA = dynamic(() => import("@/components/home/CTA").then((mod) => ({ default: mod.CTA })));

export const metadata = getHomeMetadata();

const faqItems = [
  {
    question: "Arnavutköy'de kepçe kiralama hizmeti veriyor musunuz?",
    answer: "Evet, Arnavutköy merkez olmak üzere Şirindere, Hadımköy, Taşoluk, Boyalik ve tüm çevre mahallelere operatörlü kepçe kiralama hizmeti veriyoruz.",
  },
  {
    question: "Kepçe kiralama fiyatları nasıl hesaplanıyor?",
    answer: "Fiyatlandırma işin türüne, süresine ve büyüklüğüne göre değişir. Ücretsiz keşif yapıp size en uygun fiyat teklifini sunuyoruz. Saatlik ve günlük kiralama seçeneklerimiz mevcuttur.",
  },
  {
    question: "Operatörleriniz tecrübeli mi?",
    answer: "Evet, 22 yıldır bu işi yapan tecrübeli operatörlerimiz vardır. Tüm operatörlerimiz sertifikalı ve sigortalıdır.",
  },
  {
    question: "Çalışma saatleriniz nedir?",
    answer: "Pazartesi-Cumartesi 08:00-20:00 arası hizmet veriyoruz. Pazar günleri kapalıyız. Acil durumlar için 7/24 ulaşabilirsiniz.",
  },
  {
    question: "Hangi tür işler için kepçe kiralıyorsunuz?",
    answer: "Temel kazısı, kanal açma, yıkım işleri, dolgu ve tesviye, hafriyat ve her türlü kazı işi için JCB 3CX kepçe kiralama hizmeti sunuyoruz.",
  },
  {
    question: "Sigorta ve güvenlik konusunda ne gibi önlemler alıyorsunuz?",
    answer: "Tüm ekipmanlarımız düzenli bakımlıdır ve sigortalıdır. İş güvenliği önlemlerine azami dikkat gösteriyoruz. Çalışma alanı güvenliği sağlanır.",
  },
];

export default function HomePage() {
  return (
    <>
      <FAQSchema items={faqItems} pageUrl="https://kecaskepce.com.tr" />

      <Hero />

      <ServiceGrid />
      <WorkGallery />
      <TrustSignals />

      {/* Local relevance section */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2>Arnavutköy'de Güvenilir Kepçe Kiralama Hizmeti</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4 text-left">
              <p className="text-lg">
                KEÇAŞ KEPÇE olarak 2004 yılından beri Arnavutköy, Şirindere, Hadımköy, Taşoluk,
                Boyalık ve çevre bölgelerde JCB 3CX kepçe kiralama ve kazı hizmeti veriyoruz.
                Bölgedeki arazi yapısını, zemin özelliklerini ve yerel ihtiyaçları çok iyi biliyoruz.
              </p>
              <p className="text-lg">
                <a href="/hizmetler/jcb-kepce-kiralama" className="underline">
                  Operatörlü kepçe kiralama
                </a>, temel kazısı, yıkım işleri ve hafriyat hizmetlerinde 22 yıllık tecrübemiz,
                uygun fiyatlarımız ve profesyonel ekipmanımız ile müşterilerimizin güvenini kazandık.
                İster konut, ister ticari alan olsun, tüm kazı ve kepçe işlerinizi gönül rahatlığıyla
                bize bırakabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTA />
    </>
  );
}
