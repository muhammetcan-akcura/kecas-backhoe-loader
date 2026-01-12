import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";
import { businessConfig } from "@/lib/config";

export function Hero() {
  return (
    <section className="bg-card border-b border-border">
      <div className="container-main py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">

          {/* H1 – TEMİZ & LOCAL SEO UYUMLU */}
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Küçükçekmece’de Güvenilir Elektrikçi Hizmeti
          </h1>

          {/* Supporting text – uzmanlık + güven */}
          <p className="mb-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Elektrik arıza onarımı, tesisat ve montaj hizmetlerinde
            <strong> Küçükçekmece ve çevresinde</strong> yerinde servis sunuyoruz.
            Deneyimli ekibimizle sorunlarınıza hızlı ve güvenilir çözümler üretiyoruz.
          </p>

          {/* Trust signals */}
          <div className="mb-10 flex flex-wrap justify-center gap-4 text-sm md:text-base text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-primary" />
              Yerinde Servis
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-primary" />
              Deneyimli Usta
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-primary" />
              Küçükçekmece Odaklı
            </div>
          </div>

          {/* CTA alanı */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg text-base md:text-lg"
            >
              İletişime Geç
            </Link>

            <a
              href={businessConfig.phoneFormatted}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-card text-primary border-2 border-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all shadow-md hover:shadow-lg text-base md:text-lg"
            >
              <Phone size={20} className="mr-2" />
              {businessConfig.phone}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
