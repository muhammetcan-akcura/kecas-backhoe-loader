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

      {/* Recent Activity Section - Shows Google site is active */}
      <section className="section-padding bg-gradient-to-b from-background to-card border-t border-border">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Devam Eden Çalışmalarımız
              </h2>
              <p className="text-lg text-muted-foreground">
                Arnavutköy ve çevresinde aktif olarak hizmet vermeye devam ediyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-600">Aktif Hizmet</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Arnavutköy Bölgesi</h3>
                <p className="text-muted-foreground text-sm">
                  Temel kazısı, kanalizasyon ve altyapı çalışmaları için operatörlü kepçe kiralama hizmeti sunuyoruz.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-600">Aktif Hizmet</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Hadımköy - Şirindere</h3>
                <p className="text-muted-foreground text-sm">
                  Villa projeleri ve inşaat alanlarında kazı, dolgu ve hafriyat işleri gerçekleştiriyoruz.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-600">Tamamlanan Proje</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Taşoluk Villaları</h3>
                <p className="text-muted-foreground text-sm">
                  Toplu konut projesi temel kazısı ve bahçe düzenleme işleri başarıyla tamamlandı.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-600">Tamamlanan Proje</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Boyalık Sanayi Alanı</h3>
                <p className="text-muted-foreground text-sm">
                  Fabrika alanı tesviye ve yol açma çalışmaları başarıyla tamamlandı.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Şubat 2026</span> itibarıyla 22 yıldır kesintisiz hizmet veriyoruz.
              </p>
              <a
                href="/iletisim"
                className="inline-flex items-center gap-2 mt-4 text-primary hover:underline font-medium"
              >
                Projeniz için teklif alın →
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTA />
    </>
  );
}
