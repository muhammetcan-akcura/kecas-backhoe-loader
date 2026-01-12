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
    slug: "elektrik-tesisati",
    name: "Elektrik Tesisatı",
    shortDescription: "Yerinde elektrik tesisatı kurulumu ve yenileme hizmeti",
    description:
        "Konut ve iş yerleri için elektrik tesisatı kurulumu, yenileme ve düzenleme işlemlerini Küçükçekmece ve çevresinde yerinde hizmet anlayışıyla gerçekleştiriyoruz. Elektrik tesisatının güvenli, düzenli ve yönetmeliklere uygun olması için profesyonel çözümler sunuyoruz.",
    features: [
        "Yeni elektrik tesisatı kurulumu",
        "Mevcut tesisat yenileme",
        "Tesisat düzenleme ve iyileştirme",
        "Güvenli ve standartlara uygun uygulama",
        "Konut ve küçük işletmelere özel çözümler",
    ],
    priceRange: "Ücretsiz keşif sonrası belirlenir",
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
        question: "Elektrik tesisatı ne zaman yenilenmelidir?",
        answer:
            "Eski, yıpranmış veya güvenli olmayan tesisatlar yenilenmelidir. Sık sigorta atması, kabloların ısınması veya prizlerde sorun yaşanması tesisat yenileme ihtiyacına işaret eder.",
    },
    {
        question: "Elektrik tesisatı çalışmaları ne kadar sürer?",
        answer:
            "Yapılacak işin kapsamına göre değişir. Küçük tesisat düzenlemeleri kısa sürede tamamlanabilir, kapsamlı yenilemeler için süre yerinde keşif sonrası belirlenir.",
    },
    {
        question: "Hangi alanlarda elektrik tesisatı hizmeti veriyorsunuz?",
        answer:
            "Konutlar, daireler, ofisler ve küçük ölçekli iş yerleri için elektrik tesisatı hizmeti sunuyoruz.",
    },
    {
        question: "Yapılan elektrik tesisatı çalışmaları garantili midir?",
        answer:
            "Evet, yapılan tüm elektrik tesisatı işlemleri için işçilik garantisi sağlanmaktadır.",
    },
];

/* -------------------------------------------------------------------------- */
/* PAGE                                                                        */
/* -------------------------------------------------------------------------- */

export default function ElektrikTesisatiPage() {
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
                            Küçükçekmece Elektrik Tesisatı Hizmeti
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-6">
                            Küçükçekmece ve çevresinde konut ve iş yerleri için
                            <strong> güvenli, düzenli ve yönetmeliklere uygun</strong> elektrik
                            tesisatı çözümleri sunuyoruz.
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
                            Elektrik Tesisatı Hizmet Detayları
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {service.description} Elektrik tesisatı, hem güvenlik hem de
                            uzun ömürlü kullanım açısından profesyonel şekilde yapılmalıdır.
                        </p>

                        <h3 className="text-xl md:text-2xl mb-4 font-semibold">
                            Sunduğumuz Elektrik Tesisatı Hizmetleri
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
                                Elektrik tesisatı işlemleri yerinde yapılan ücretsiz keşif
                                sonrası planlanır. İşin kapsamına göre net fiyat bilgisi
                                sunularak güvenli şekilde uygulama yapılır.
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
                            Neden Elektrik Tesisatında Bizi Tercih Etmelisiniz?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold mb-2">Yerinde Hizmet</h3>
                                <p className="text-sm text-muted-foreground">
                                    Elektrik tesisatı çalışmaları adresinizde yapılır.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Deneyimli Ekip</h3>
                                <p className="text-sm text-muted-foreground">
                                    Tesisat uygulamaları alanında tecrübeli ustalar tarafından gerçekleştirilir.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Şeffaf Süreç</h3>
                                <p className="text-sm text-muted-foreground">
                                    Yapılacak işlemler hakkında süreç boyunca bilgilendirme yapılır.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Güvenlik Önceliği</h3>
                                <p className="text-sm text-muted-foreground">
                                    Elektrik güvenliği her aşamada ön planda tutulur.
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
            <section className="section-padding bg-card text-foreground">
                <div className="container-main text-center">
                    <h2 className="mb-4 text-3xl md:text-4xl font-bold">
                        Elektrik Tesisatı İçin Hemen İletişime Geçin
                    </h2>
                    <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
                        Küçükçekmece elektrik tesisatı hizmeti için ücretsiz keşif
                        talep edebilirsiniz.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/iletisim"
                            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90"
                        >
                            İletişim Formu
                        </Link>
                        <a
                            href={businessConfig.phoneFormatted}
                            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
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
