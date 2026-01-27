import Image from "next/image";

interface ServiceGalleryProps {
    images: Array<{
        src: string;
        alt: string;
    }>;
}

export function ServiceGallery({ images }: ServiceGalleryProps) {
    if (!images || images.length === 0) return null;

    return (
        <section className="section-padding bg-white">
            <div className="container-main">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center mb-12 text-gray-900">Çalışma Görselleri</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="group relative aspect-[4/3] rounded-lg overflow-hidden border-4 border-primary/20 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                                {/* Overlay with alt text on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-white text-sm font-medium leading-tight">
                                            {image.alt}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
