import Image from "next/image";

// 2-3 destek görsel - statik, slider YOK
const galleryImages = [
  {
    src: "/assets/kecas-kepce-kazi-isleri.jpeg",
    alt: "JCB 3CX kepçe ile kazı işleri - Arnavutköy",
    title: "Kazı İşleri",
  },
  {
    src: "/assets/kecas-kepce-logo.avif",
    alt: "Keçaş Kepçe operatörlü hizmet - Arnavutköy",
    title: "Operatörlü Hizmet",
  },
];

export function WorkGallery() {
  return (
    <section className="section-padding bg-accent">
      <div className="container-main">
        {/* Başlık */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-foreground mb-4">
            Profesyonel Kepçe Hizmetleri
          </h2>
          <p className="text-lg text-muted-foreground">
            Arnavutköy ve çevresinde <strong className="text-foreground">JCB 3CX kepçe</strong> ile
            gerçekleştirdiğimiz kazı, yıkım ve hafriyat çalışmalarından görüntüler.
          </p>
        </div>

        {/* Statik Galeri - YAN YANA, SLIDER YOK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Görsel container */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors duration-300 shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />

                {/* Overlay - hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA altında */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            22 yıldır Arnavutköy'de güvenilir kepçe kiralama hizmeti
          </p>
          <a
            href="tel:+905394778112"
            className="btn-primary"
          >
            Fiyat Teklifi Al
          </a>
        </div>
      </div>
    </section>
  );
}
