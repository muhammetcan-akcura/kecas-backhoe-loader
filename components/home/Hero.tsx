import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Wrench } from "lucide-react";
import { businessConfig } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative bg-white border-b-4 border-primary">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 md:py-16 lg:py-20">

          {/* SOL TARAF - İçerik */}
          <div className="order-2 lg:order-1">
            {/* H1 - SEO Optimized */}
            <h1 className="mb-6 text-foreground leading-tight">
              Arnavutköy'de Güvenilir Kepçe Kiralama Hizmeti
            </h1>

            {/* Alt başlık - Değer teklifi */}
            <p className="mb-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <strong className="text-foreground">JCB 3CX kepçe kiralama</strong>, kazı işleri, temel kazısı ve yıkım hizmetlerinde
              Arnavutköy ve çevresinde <strong className="text-foreground">operatörlü hizmet</strong> sunuyoruz.
            </p>

            {/* Trust signals - Sarı ikonlar */}
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                <CheckCircle size={24} className="text-primary shrink-0" />
                <span className="text-sm font-semibold text-foreground">22 Yıl Tecrübe</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                <Wrench size={24} className="text-primary shrink-0" />
                <span className="text-sm font-semibold text-foreground">JCB 3CX Ekipman</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                <Phone size={24} className="text-primary shrink-0" />
                <span className="text-sm font-semibold text-foreground">7/24 Hizmet</span>
              </div>
            </div>

            {/* CTA Butonları - Sarı primary */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={businessConfig.phoneFormatted}
                className="btn-primary"
              >
                <Phone size={20} />
                Hemen Ara
              </a>

              <Link
                href="/iletisim"
                className="btn-secondary"
              >
                Ücretsiz Keşif İste
              </Link>
            </div>
          </div>

          {/* SAĞ TARAF - Ana Görsel */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/assets/kecas-kepce-logo.avif"
                alt="Keçaş Kepçe - JCB 3CX Kepçe Kiralama Arnavutköy"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain bg-white p-8"
              />

              {/* Sarı accent çerçeve */}
              <div className="absolute inset-0 border-4 border-primary rounded-lg pointer-events-none"></div>
            </div>

            {/* Destek badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg">
              <p className="text-sm font-bold">2004'ten Beri</p>
              <p className="text-2xl font-extrabold">22 YIL</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
