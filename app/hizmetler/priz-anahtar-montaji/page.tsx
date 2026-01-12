import { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { generateServiceMetadata } from "@/lib/metadata";
import { businessConfig } from "@/lib/config";
import { ServiceSchema } from "@/components/schemas/ServiceSchema";
import { BreadcrumbSchema } from "@/components/schemas/BreadcrumbSchema";
import { FAQSchema, FAQItem } from "@/components/schemas/FAQSchema";

/* -------------------------------------------------------------------------- */
/* SERVICE CONFIG                                                              */
/* -------------------------------------------------------------------------- */

const service = {
    slug: "priz-anahtar-montaji",
    name: "Priz ve Anahtar Montajı",
    shortDescription: "Yerinde priz ve anahtar montajı ve değişimi",
    description:
        "Konut ve iş yerleri için priz ve anahtar montajı, değişimi ve düzenleme işlemlerini Küçükçekmece ve çevresinde yerinde hizmet anlayışıyla gerçekleştiriyoruz. Elektrik güvenliği ve düzenli kullanım için profesyonel montaj çözümleri sunuyoruz.",
    features: [
        "Yeni priz montajı",
        "Anahtar değişimi ve montajı",
        "Eski prizlerin yenilenmesi",
        "Priz ve anahtar yeri değiştirme",
        "Güvenli ve düzenli montaj",
    ],
    priceRange: "80₺'den başlayan fiyatlarla",
};

/* -------------------------------------------------------------------------- */
/* METADATA                                                                    */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = generateServiceMetadata(
    `Küçükçekmece ${service.name}`,
    service.description,
    service.slug
);

/* -------------------------------------------------------------------------- */
/* FAQ DATA                                                                    */
/* -------------------------------------------------------------------------- */

const serviceFAQ: FAQItem[] = [
    {
        question: "Priz ve anahtar montajı ne zaman yapılmalıdır?",
        answer:
            "Kullanımda sorun yaşanan, eskiyen veya güvenli olmayan priz ve anahtarlar yenilenmelidir. Ayrıca yeni cihazlar için ek priz ihtiyacı oluştuğunda montaj yapılmalıdır.",
    },
    {
        question: "Priz veya anahtarın yeri değiştirilebilir mi?",
        answer:
            "Evet, tesisatın durumuna bağlı olarak priz ve anahtarların yeri değiştirilebilir. Uygunluk yerinde yapılan inceleme ile belirlenir.",
    },
    {
        question: "Priz ve anahtar montajı ne kadar sürer?",
        answer:
            "Basit montaj ve değişim işlemleri genellikle kısa sürede tamamlanır. İşin kapsamına göre süre değişebilir.",
    },
    {
        question: "Yapılan montaj işlemleri garantili midir?",
        answer:
            "Evet, yapılan tüm priz ve anahtar montaj işlemleri için işçilik garantisi sunulmaktadır.",
    },
];

/* -------------------------------------------------------------------------- */
/* PAGE                                                                        */
/* -------------------------------------------------------------------------- */

export default function PrizAnahtarMontajiPage() {
    return (
        <>
            {/* SCHEMA */}
            <ServiceSchema service={service} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", path: "/" },
                    { name: "Hizmetler", path: "/hizmetler" },
                    { name: service.name, path: `/hizmetler/${service.slug}` },
                ]}
            />
            <FAQSchema
                items={serviceFAQ}
                pageUrl={`https://akcuraelektrik.com.tr/hizmetler/${service.slug}`}
            />

            {/* HERO */}
            <section className="bg-card border-b border-border">
                <div className="container-main py-12 md:py-16">
                    <div className="max-w-3xl">
                        <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                            Küçükçekmece Priz ve Anahtar Montajı Hizmeti
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-6">
                            Küçükçekmece ve çevresinde priz ve anahtar montaj işlemlerini
                            <strong> güvenli, düzenli ve profesyonel</strong> şekilde gerçekleştiriyoruz.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/iletisim" className="btn-primary">
                                İletişime Geç
                            </Link>
                            <a href={businessConfig.phoneFormatted} className="btn-secondary">
                                <Phone size={18} className="mr-2" />
                                {businessConfig.phone}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className="section-padding">
                <div className="container-main">
                    <div className="max-w-3xl">
                        <h2 className="mb-6 text-3xl md:text-4xl font-bold">
                            Priz ve Anahtar Montajı Hizmet Detayları
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {service.description} Doğru montaj, hem cihazların sağlıklı
                            çalışması hem de elektrik güvenliği açısından büyük önem taşır.
                        </p>

                        <h3 className="text-xl md:text-2xl mb-4 font-semibold">
                            Sunduğumuz Montaj Hizmetleri
                        </h3>
                        <ul className="space-y-3 mb-10">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="text-primary mt-1 font-bold">✓</span>
                                    <span className="text-muted-foreground">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl md:text-2xl mb-3 font-semibold">
                                Çalışma Süreci ve Ücretlendirme
                            </h3>
                            <p className="text-muted-foreground">
                                Priz ve anahtar montaj işlemleri yerinde yapılan inceleme sonrası
                                planlanır. İşin kapsamına göre net fiyat bilgisi sunularak güvenli
                                şekilde uygulama yapılır.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST */}
            <section className="section-padding bg-card">
                <div className="container-main">
                    <div className="max-w-3xl">
                        <h2 className="mb-6 text-3xl md:text-4xl font-bold">
                            Neden Priz ve Anahtar Montajında Bizi Tercih Etmelisiniz?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold mb-2">Yerinde Montaj</h3>
                                <p className="text-sm text-muted-foreground">
                                    Tüm montaj işlemleri adresinizde gerçekleştirilir.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Güvenli Uygulama</h3>
                                <p className="text-sm text-muted-foreground">
                                    Elektrik güvenliği her aşamada ön planda tutulur.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Düzenli İşçilik</h3>
                                <p className="text-sm text-muted-foreground">
                                    Montaj sonrası alan temiz ve düzenli şekilde teslim edilir.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Garanti</h3>
                                <p className="text-sm text-muted-foreground">
                                    Yapılan montaj işlemleri için işçilik garantisi sunulur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding">
                <div className="container-main">
                    <div className="max-w-3xl">
                        <h2 className="mb-8 text-3xl md:text-4xl font-bold">
                            Sık Sorulan Sorular
                        </h2>
                        <div className="space-y-4">
                            {serviceFAQ.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="bg-card border border-border rounded-lg p-6 shadow-sm"
                                >
                                    <h3 className="text-lg font-semibold mb-3">
                                        {faq.question}
                                    </h3>
                                    <p className="text-muted-foreground">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-primary text-primary-foreground">
                <div className="container-main text-center">
                    <h2 className="mb-4 text-3xl md:text-4xl font-bold">
                        Priz ve Anahtar Montajı İçin Hemen İletişime Geçin
                    </h2>
                    <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
                        Küçükçekmece priz ve anahtar montajı hizmeti için ücretsiz keşif
                        talep edebilirsiniz.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/iletisim"
                            className="inline-flex items-center justify-center px-8 py-3 bg-card text-primary font-medium rounded-lg"
                        >
                            İletişim Formu
                        </Link>
                        <a
                            href={businessConfig.phoneFormatted}
                            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-foreground rounded-lg"
                        >
                            <Phone size={18} className="mr-2" />
                            {businessConfig.phone}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
