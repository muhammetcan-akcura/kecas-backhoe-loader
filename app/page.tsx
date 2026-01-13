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
    question: "Küçükçekmece'de hizmet veriyor musunuz?",
    answer: "Evet, Küçükçekmece merkez olmak üzere tüm mahallelere hizmet veriyoruz. Cennet, Halkalı, Atakent, Sefaköy ve yakın bölgelere yerinde servis sunuyoruz.",
  },
  {
    question: "Ücretsiz keşif yapıyor musunuz?",
    answer: "Evet, tüm hizmetlerimiz için yerinde ücretsiz keşif yapıyoruz. Keşif sonrası size detaylı ve şeffaf fiyat teklifi sunuyoruz.",
  },
  {
    question: "Elektrikçileriniz belgeli mi?",
    answer: "Tüm ustalarımız mesleki yeterlilik belgesine sahiptir ve düzenli olarak güvenlik eğitimi almaktadır. İşlerimiz sigortalıdır.",
  },
  {
    question: "Çalışma saatleriniz nedir?",
    answer: "Pazartesi-Cumartesi 09:00-19:00 arası hizmet veriyoruz. Pazar günleri kapalıyız. Acil durumlar için iletişime geçebilirsiniz.",
  },
  {
    question: "Ödeme seçenekleriniz nelerdir?",
    answer: "Nakit, banka kartı, kredi kartı ve havale/EFT ile ödeme kabul ediyoruz. Büyük işlerde esnek ödeme imkanı sunuyoruz.",
  },
  {
    question: "İş garantisi veriyor musunuz?",
    answer: "Evet, tüm işlerimiz için garanti veriyoruz. İşçilik garantisi ve kullanılan malzemelerin garantileri geçerlidir.",
  },
];

export default function HomePage() {
  return (
    <>
      <FAQSchema items={faqItems} pageUrl="https://akcuraelektrik.com.tr" />

      <Hero />

      <ServiceGrid />
      <WorkGallery />
      <TrustSignals />

      {/* Local relevance section */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2>Küçükçekmece’de Güvenilir Elektrikçi Hizmeti</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4 text-left">
              <p className="text-lg">
                AKCURA ELEKTRİK olarak 2014 yılından beri Küçükçekmece, Halkalı, Atakent, Cennet,
                Sefaköy ve çevre mahallelerde elektrik hizmeti veriyoruz. Bölgedeki binaları,
                eski tesisatları ve yerel ihtiyaçları çok iyi biliyoruz.
              </p>
              <p className="text-lg">
                <a href="/hizmetler/elektrik-ariza-onarimi" className="underline">
                  elektrik arızalarında hızlı müdahale
                </a>, komple tesisat yenilemede uygun
                fiyat ve her işte kaliteli malzeme kullanımı ile müşterilerimizin
                güvenini kazandık. İster eviniz ister iş yeriniz olsun, elektrik
                işlerinizi gönül rahatlığıyla bize bırakabilirsiniz.
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
