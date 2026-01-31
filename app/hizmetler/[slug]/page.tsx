import { notFound } from "next/navigation";
import { getServiceDataBySlug, servicesData } from "@/lib/servicesData";
import { generateServiceMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, Clock, MapPin } from "lucide-react";
import { businessConfig } from "@/lib/config";
import { ServiceGallery } from "@/components/common/ServiceGallery";
import { ServiceSchema } from "@/components/schemas/ServiceSchema";

type Props = {
    params: { slug: string };
};

// Generate static params for all services
export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceDataBySlug(slug);
    if (!service) return {};

    return {
        title: service.seo.metaTitle,
        description: service.seo.metaDescription,
        openGraph: {
            title: service.seo.metaTitle,
            description: service.seo.metaDescription,
            url: service.seo.canonical,
            type: 'website',
        },
    };
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;

    console.log('[DEBUG] Requested slug:', slug);
    // console.log('[DEBUG] Available services:', servicesData.map(s => s.slug));

    const service = getServiceDataBySlug(slug);

    // console.log('[DEBUG] Found service:', service ? service.name : 'NOT FOUND');

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            {/* SERVICE SCHEMA */}
            <ServiceSchema service={service} />

            {/* HERO SECTION */}
            <section className="bg-white border-b-4 border-primary">
                <div className="container-main py-12 md:py-16">
                    <div className="max-w-4xl">
                        <h1 className="mb-6 text-gray-900">{service.seo.h1}</h1>
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            {service.content.intro}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={businessConfig.phoneFormatted}
                                className="btn-primary"
                            >
                                <Phone size={20} />
                                {service.conversion.primaryCTA}
                            </a>
                            <Link href="/iletisim" className="btn-secondary">
                                {service.conversion.secondaryCTA}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ARNAVUTKÖY LOCATION LINK - Show on all service pages except arnavutkoy-kiralik-kepce */}
            {slug !== "arnavutkoy-kiralik-kepce" && (
                <section className="bg-primary/10 border-y-2 border-primary">
                    <div className="container-main py-4">
                        <p className="text-center text-gray-900">
                            <MapPin size={18} className="inline-block mr-2 text-primary" />
                            <Link
                                href="/hizmetler/arnavutkoy-kiralik-kepce"
                                className="font-semibold text-primary hover:underline"
                            >
                                Arnavutköy kiralık kepçe
                            </Link>
                            {" "}hizmetimiz hakkında detaylı bilgi için tıklayın.
                        </p>
                    </div>
                </section>
            )}

            {/* HOMEPAGE LINK - Only for arnavutkoy-kiralik-kepce */}
            {slug === "arnavutkoy-kiralik-kepce" && (
                <section className="bg-primary/10 border-y-2 border-primary">
                    <div className="container-main py-4">
                        <p className="text-center text-gray-900">
                            <MapPin size={18} className="inline-block mr-2 text-primary" />
                            <Link
                                href="/"
                                className="font-semibold text-primary hover:underline"
                            >
                                Arnavutköy kepçe hizmetleri
                            </Link>
                            {" "}hakkında daha fazla bilgi için ana sayfamızı ziyaret edin.
                        </p>
                    </div>
                </section>
            )}

            {/* PROBLEM → SOLUTION */}
            <section className="section-padding bg-accent">
                <div className="container-main">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Sorun</h2>
                            <p className="text-gray-700 leading-relaxed">
                                {service.content.problemStatement}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Çözümümüz</h2>
                            <p className="text-gray-700 leading-relaxed">
                                {service.content.solutionOverview}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS STEPS */}
            <section className="section-padding bg-white">
                <div className="container-main">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-center mb-12 text-gray-900">Hizmet Süreci</h2>
                        <div className="space-y-6">
                            {service.content.processSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex gap-6 p-6 bg-accent rounded-lg border-l-4 border-primary"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                        <span className="text-2xl font-bold text-white">
                                            {index + 1}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-900">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-700">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICE GALLERY - Real Work Images */}
            {service.media.galleryImages && service.media.galleryImages.length > 0 && (
                <ServiceGallery images={service.media.galleryImages} />
            )}

            {/* BENEFITS */}
            <section className="section-padding bg-accent">
                <div className="container-main">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-center mb-12 text-gray-900">Avantajlar</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {service.content.benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 bg-white rounded-lg border-2 border-border hover:border-primary transition-colors"
                                >
                                    <CheckCircle
                                        className="text-primary shrink-0 mt-1"
                                        size={24}
                                        strokeWidth={2.5}
                                    />
                                    <span className="text-gray-900 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* USE CASES */}
            <section className="section-padding bg-white">
                <div className="container-main">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-center mb-12 text-gray-900">Kullanım Alanları</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {service.content.useCases.map((useCase, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 bg-accent rounded-lg"
                                >
                                    <span className="text-primary font-bold text-lg">→</span>
                                    <span className="text-gray-900">{useCase}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERIENCE PROOF (EEAT) */}
            <section className="section-padding bg-secondary text-white">
                <div className="container-main">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-center mb-12 text-white">Neden Keçaş Kepçe?</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {service.content.experienceProof.map((proof, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                                >
                                    <CheckCircle
                                        className="text-primary shrink-0 mt-1"
                                        size={24}
                                        strokeWidth={2.5}
                                    />
                                    <span className="text-white font-medium">{proof}</span>
                                </div>
                            ))}
                        </div>

                        {/* Trust Signals */}
                        <div className="mt-12 p-8 bg-white/5 rounded-lg border-2 border-primary/30 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-6 text-white text-center">
                                Güven Sinyalleri
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {service.content.trustSignals.map((signal, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <CheckCircle className="text-primary" size={20} strokeWidth={2.5} />
                                        <span className="text-gray-100">{signal}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section className="section-padding bg-accent">
                <div className="container-main">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="mb-6 text-gray-900">Fiyatlandırma</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {service.content.pricingLogic}
                        </p>
                        <div className="mt-8">
                            <a
                                href={businessConfig.phoneFormatted}
                                className="btn-primary text-lg px-10 py-4"
                            >
                                <Phone size={22} />
                                Fiyat Teklifi Alın
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* LOCAL SEO - SERVICE AREAS */}
            <section className="section-padding bg-white">
                <div className="container-main">
                    <div className="max-w-4xl mx-auto text-center">
                        <MapPin size={48} className="text-primary mx-auto mb-4" strokeWidth={2} />
                        <h2 className="mb-6 text-gray-900">Hizmet Bölgelerimiz</h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            {service.localSEO.serviceAreaText}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            {service.localSEO.locationContext}
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mt-8">
                            <span className="px-4 py-2 bg-accent border-2 border-primary text-gray-900 font-semibold rounded-lg">
                                {service.primaryLocation}
                            </span>
                            {service.secondaryLocations.map((location, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-accent border-2 border-border text-gray-900 font-semibold rounded-lg"
                                >
                                    {location}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding bg-accent">
                <div className="container-main">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-center mb-12 text-gray-900">Sık Sorulan Sorular</h2>
                        <div className="space-y-6">
                            {service.faq.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-white rounded-lg border-2 border-border"
                                >
                                    <h3 className="text-lg font-bold mb-3 text-gray-900">
                                        {item.question}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="section-padding bg-secondary text-white">
                <div className="container-main">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-white mb-6">Hemen İletişime Geçin</h2>
                        <p className="text-gray-100 text-lg mb-8">
                            Ücretsiz keşif ve fiyat teklifi için bize ulaşın.
                            Arnavutköy ve çevresinde <strong className="text-white">aynı gün hizmet</strong>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a
                                href={businessConfig.phoneFormatted}
                                className="btn-primary text-lg px-10 py-4"
                            >
                                <Phone size={22} />
                                {businessConfig.phone}
                            </a>
                            <a
                                href={businessConfig.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-10 py-4 text-lg font-bold bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                            >
                                WhatsApp ile İletişim
                            </a>
                        </div>
                        <div className="flex items-center justify-center gap-6 text-sm text-gray-100">
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-primary" />
                                <span>Pzt-Cmt 08:00-20:00</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={18} className="text-primary" />
                                <span>7/24 Acil Hizmet</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED SERVICES */}
            {service.internalLinks.relatedServices.length > 0 && (
                <section className="section-padding bg-white border-t-4 border-primary">
                    <div className="container-main">
                        <div className="text-center mb-12">
                            <h2 className="mb-4 text-gray-900">Diğer Hizmetlerimiz</h2>
                            <p className="text-gray-700 text-lg">
                                İlginizi çekebilecek diğer hizmetlerimize göz atın
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {service.internalLinks.relatedServices.map((relatedSlug, index) => {
                                const relatedService = getServiceDataBySlug(relatedSlug);
                                if (!relatedService) return null;

                                return (
                                    <Link
                                        key={index}
                                        href={`/hizmetler/${relatedSlug}`}
                                        className="group p-6 bg-accent rounded-lg border-2 border-border hover:border-primary transition-all"
                                    >
                                        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary">
                                            {relatedService.name}
                                        </h3>
                                        <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                                            {relatedService.content.intro.substring(0, 100)}...
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                                            Detaylar <ArrowRight size={16} />
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": service.faq.map(item => ({
                            "@type": "Question",
                            "name": item.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.answer
                            }
                        }))
                    })
                }}
            />

            {/* SERVICE SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": service.name,
                        "description": service.content.intro,
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": businessConfig.name,
                            "telephone": businessConfig.phone,
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": service.primaryLocation.split(",")[0],
                                "addressRegion": service.primaryLocation.split(",")[1]?.trim(),
                                "addressCountry": "TR"
                            }
                        },
                        "areaServed": [
                            service.primaryLocation,
                            ...service.secondaryLocations
                        ],
                        "serviceType": service.name
                    })
                }}
            />
        </main>
    );
}