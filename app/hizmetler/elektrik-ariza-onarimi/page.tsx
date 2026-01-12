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
    slug: "elektrik-ariza-onarimi",
    name: "Elektrik Arıza Onarımı",
    shortDescription: "Yerinde elektrik arıza onarım hizmeti",
    description:
        "Elektrik kesintisi, kısa devre, sigorta atması ve kaçak akım gibi elektrik arızalarında Küçükçekmece ve çevresinde yerinde elektrik arıza onarım hizmeti sunuyoruz.",
    features: [
        "Elektrik arızası tespiti",
        "Kısa devre onarımı",
        "Kaçak akım kontrolü",
        "Sigorta arızalarının giderilmesi",
        "Priz ve anahtar kontrolleri",
    ],
    priceRange: "150₺'den başlayan",
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
        question: "Elektrik arızası nasıl tespit edilir?",
        answer:
            "Elektrik arızaları, yerinde yapılan kontrollerle tespit edilir. Kısa devre, kaçak akım veya sigorta kaynaklı sorunlar belirlenerek uygun çözüm uygulanır.",
    },
    {
        question: "Elektrik arızası ne kadar sürede giderilir?",
        answer:
            "Arızanın türüne göre değişir. Basit elektrik arızaları çoğu zaman aynı gün içinde giderilebilir.",
    },
    {
        question: "Küçükçekmece'nin hangi bölgelerinde hizmet veriyorsunuz?",
        answer:
            "Küçükçekmece merkez başta olmak üzere Halkalı, Atakent, Cennet ve çevre mahallelerde yerinde elektrik arıza onarım hizmeti sunuyoruz.",
    },
    {
        question: "Yapılan işler için garanti veriliyor mu?",
        answer:
            "Evet, yapılan tüm elektrik arıza onarım işlemleri için işçilik garantisi sağlanmaktadır.",
    },
];

/* -------------------------------------------------------------------------- */
/* PAGE                                                                        */
/* -------------------------------------------------------------------------- */

export default function ElektrikArizaOnarimiPage() {
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
                            Küçükçekmece Elektrik Arıza Onarımı
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-6">
                            Küçükçekmece ve çevresinde elektrik arızalarına
                            <strong> yerinde, güvenli ve hızlı</strong> çözümler sunuyoruz.
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
                            Elektrik Arıza Onarım Hizmeti
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {service.description} Elektrik sistemlerinde oluşan arızalar,
                            güvenlik açısından profesyonel müdahale gerektirir.
                        </p>

                        <h3 className="text-xl md:text-2xl mb-4 font-semibold">
                            Hangi Arızalara Müdahale Ediyoruz?
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
                                Ücretlendirme ve Süreç
                            </h3>
                            <p className="text-muted-foreground">
                                Elektrik arızası yerinde incelenir, arızanın kaynağı tespit edilir
                                ve işlem öncesinde net bilgi verilir. Ücretlendirme işin kapsamına
                                göre belirlenir.
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
                            Neden Bizi Tercih Etmelisiniz?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold mb-2">Yerinde Servis</h3>
                                <p className="text-sm text-muted-foreground">
                                    Elektrik arızaları adresinizde kontrol edilerek güvenli şekilde giderilir.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Deneyimli Ekip</h3>
                                <p className="text-sm text-muted-foreground">
                                    Alanında tecrübeli elektrikçiler ile profesyonel hizmet sunulur.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Şeffaf Bilgilendirme</h3>
                                <p className="text-sm text-muted-foreground">
                                    Yapılacak işlemler hakkında önceden bilgilendirme yapılır.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Garanti</h3>
                                <p className="text-sm text-muted-foreground">
                                    Yapılan tüm işlemler için işçilik garantisi verilir.
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
                        Elektrik Arızası İçin Hemen Arayın
                    </h2>
                    <p className="max-w-2xl mx-auto mb-8 text-lg text-muted-foreground">
                        Küçükçekmece elektrik arıza onarımı için bize ulaşın.
                        Yerinde servis ve güvenilir çözümler sunuyoruz.
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
