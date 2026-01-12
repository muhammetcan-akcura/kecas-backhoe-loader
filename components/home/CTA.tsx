import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";
import { businessConfig } from "@/lib/config";

export function CTA() {
  return (
    <section className="relative section-padding bg-primary text-primary-foreground overflow-hidden">

      {/* Soft background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-main relative text-center">
        {/* Heading */}
        <h2 className="mb-4 text-3xl md:text-4xl font-bold leading-tight">
          Küçükçekmece’de Elektrik Sorununuz mu Var?
        </h2>

        {/* Description */}
        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg md:text-xl">
          Elektrik arızası, tesisat veya montaj işleri için
          Küçükçekmece ve çevresinde yerinde servis sunuyoruz.
          Ücretsiz keşif sonrası net fiyatlandırma ile çalışıyoruz.
        </p>

        {/* Trust bullets */}
        <div className="mb-10 flex flex-wrap justify-center gap-6 text-sm md:text-base text-primary-foreground/90">
          <div className="flex items-center gap-2">
            <CheckCircle size={18} />
            Ücretsiz Keşif
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={18} />
            Yerinde Servis
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={18} />
            Garantili İşçilik
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center px-10 py-3.5 bg-card text-primary font-semibold rounded-lg hover:bg-card/90 transition-all shadow-lg hover:shadow-xl text-base md:text-lg"
            aria-label="Ücretsiz keşif talebi oluştur"
          >
            Ücretsiz Keşif Talep Et
          </Link>

          <a
            href={businessConfig.phoneFormatted}
            className="inline-flex items-center justify-center px-10 py-3.5 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground hover:text-primary transition-all shadow-lg hover:shadow-xl text-base md:text-lg"
            aria-label="Telefon ile iletişime geç"
          >
            <Phone size={20} className="mr-2" />
            {businessConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
