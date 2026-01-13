import Image from "next/image";
import { CheckCircle } from "lucide-react";

const stats = [
  { value: "2014’ten Beri", label: "Yerel Tecrübe" },
  { value: "Küçükçekmece", label: "Merkez Hizmet Bölgesi" },
  { value: "Yerinde Servis", label: "Keşif & Uygulama" },
  { value: "Pzt–Cts", label: "Çalışma Günleri" },
];

const trustPoints = [
  "Yerinde ücretsiz keşif sonrası net fiyat",
  "Garantili ve sigortalı işçilik",
  "Küçükçekmece genelinde yerinde servis",
  "Standartlara uygun, kaliteli malzeme",
];

export function TrustSignals() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2>Küçükçekmece’de Neden AKCURA ELEKTRİK?</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Küçükçekmece ve çevresinde sunduğumuz elektrik hizmetlerinde,
            şeffaf fiyatlandırma, garantili işçilik ve yerinde ücretsiz keşif
            anlayışıyla çalışıyoruz.
          </p>

        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-3 md:p-5 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl text-primary mb-2 font-bold whitespace-nowrap overflow-hidden text-ellipsis px-1">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust points with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <h3 className="mb-6 text-foreground text-2xl">Güvenle Çalışın</h3>
            <div className="space-y-4">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary shrink-0 mt-0.5" size={22} />
                  <span className="text-foreground text-base">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block relative h-[300px]">
            <Image
              src="/assets/elektrik-panosu.jpeg"
              alt="Elektrik panosu montajı"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>
      </div>
    </section>
  );
}

