import Image from "next/image";

const galleryImages = [
  {
    src: "/assets/kucukcekmece-elektrikci-aydinlatma-montaji.avif",
    alt: "Küçükçekmece'de ofis ve iş yerleri için profesyonel aydınlatma montajı yapan elektrikçi",
  },
  {
    src: "/assets/kucukcekmece-elektrik-aydinlatma-kurulumu-usta.avif",
    alt: "Küçükçekmece'de yerinde aydınlatma kurulumu yapan uzman elektrik ustası",
  },
  {
    src: "/assets/kucukcekmece-sigorta-panosu-tamiri.avif",
    alt: "Küçükçekmece’de güvenli ve düzenli sigorta panosu tamiri hizmeti",
  },
  {
    src: "/assets/kucukcekmece-elektrikci-ekipmanlari.avif",
    alt: "Küçükçekmece elektrik arıza ve tesisat işleri için profesyonel elektrikçi ekipmanları",
  },
];

export function WorkGallery() {
  return (
    <section className="section-padding bg-card border-t border-border">
      <div className="container-main">
        {/* Başlık */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Yaptığımız İşlerden Görüntüler
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Küçükçekmece ve çevresinde gerçekleştirdiğimiz elektrik
            tesisatı, arıza onarımı ve aydınlatma çalışmalarından bazıları.
          </p>
        </div>

        {/* Galeri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
