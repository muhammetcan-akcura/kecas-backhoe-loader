import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";
import { businessConfig } from "@/lib/config";

export function CTA() {
  return (
    <section className="relative section-padding bg-white border-t-4 border-primary overflow-hidden">

      {/* Arka plan pattern - hafif */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container-main relative">
        <div className="max-w-4xl mx-auto text-center">

          {/* Heading - Güçlü CTA */}
          <h2 className="mb-6 text-foreground">
            Arnavutköy'de Kepçe Kiralama İhtiyacınız mı Var?
          </h2>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Kazı, yıkım, temel kazısı veya kanal açma işleri için
            <strong className="text-foreground"> JCB 3CX kepçe</strong> ile profesyonel hizmet.
            <strong className="text-foreground"> Ücretsiz keşif</strong> sonrası net fiyatlandırma.
          </p>

          {/* Trust bullets - Sarı ikonlar */}
          <div className="mb-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-primary" strokeWidth={2.5} />
              <span className="font-semibold text-foreground">Ücretsiz Keşif</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-primary" strokeWidth={2.5} />
              <span className="font-semibold text-foreground">Tecrübeli Operatör</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-primary" strokeWidth={2.5} />
              <span className="font-semibold text-foreground">Güvenli Ekipman</span>
            </div>
          </div>

          {/* CTA Buttons - Büyük ve belirgin */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={businessConfig.phoneFormatted}
              className="btn-primary text-lg px-10 py-4"
            >
              <Phone size={22} />
              Hemen Ara: {businessConfig.phone}
            </a>

            <Link
              href="/iletisim"
              className="btn-secondary text-lg px-10 py-4"
            >
              Ücretsiz Keşif Talep Et
            </Link>
          </div>

          {/* Ek bilgi */}
          <p className="text-sm text-muted-foreground">
            22 yıldır Arnavutköy'de güvenilir kepçe kiralama hizmeti
          </p>
        </div>
      </div>
    </section>
  );
}
