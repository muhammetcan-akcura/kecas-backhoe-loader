/**
 * KEÇAŞ KEPÇE - Universal Service Data Structure
 * Pure content, no layout, SEO-first approach
 */

export interface ServiceData {
    slug: string;
    name: string;
    industry: string;
    serviceType: "local";
    primaryLocation: string;
    secondaryLocations: string[];

    seo: {
        metaTitle: string;
        metaDescription: string;
        canonical: string;
        h1: string;
    };

    content: {
        intro: string;
        problemStatement: string;
        solutionOverview: string;
        processSteps: Array<{
            title: string;
            description: string;
        }>;
        benefits: string[];
        useCases: string[];
        experienceProof: string[];
        pricingLogic: string;
        trustSignals: string[];
    };

    media: {
        heroImageAlt: string;
        galleryAlts: string[];
    };

    localSEO: {
        serviceAreaText: string;
        locationContext: string;
    };

    faq: Array<{
        question: string;
        answer: string;
    }>;

    conversion: {
        primaryCTA: string;
        secondaryCTA: string;
    };

    internalLinks: {
        relatedServices: string[];
    };
}

export const servicesData: ServiceData[] = [
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 1. KEPÇE HİZMETİ
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "kepce-hizmeti",
        name: "Kepçe Hizmeti",
        industry: "construction-equipment",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Şirindere", "Hadımköy", "Taşoluk", "Boyalık"],

        seo: {
            metaTitle: "Arnavutköy Kepçe Hizmeti | Profesyonel Kazı ve Hafriyat",
            metaDescription: "Arnavutköy'de 22 yıldır profesyonel kepçe hizmeti. JCB 3CX ile kazı, yükleme, hafriyat işleri. Tecrübeli operatör ve uygun fiyat garantisi. Hemen arayın: ☎ 0539 477 81 12",
            canonical: "/hizmetler/kepce-hizmeti",
            h1: "Arnavutköy'de Profesyonel Kepçe Hizmeti"
        },
        // ... (content remains same)
        content: {
            intro: "Arnavutköy ve çevresinde 2004 yılından bu yana profesyonel kepçe hizmeti sunuyoruz. JCB 3CX beko loder kazıyıcı yükleyici ekipmanımız ile kazı, yükleme, hafriyat ve zemin düzenleme işlerinde güvenilir çözümler üretiyoruz. 22 yıllık sektör tecrübemiz ve tecrübeli operatör kadromuz ile konut, ticari alan ve altyapı projelerinde hızlı ve kaliteli hizmet sağlıyoruz. Saatlik veya günlük kiralama seçenekleri ile ihtiyacınıza uygun esnek çalışma imkanı sunuyoruz. Arnavutköy merkez başta olmak üzere Şirindere, Hadımköy, Taşoluk ve Boyalık bölgelerinde aynı gün hizmet garantisi veriyoruz.",

            problemStatement: "İnşaat ve kazı projelerinde ekipman kiralama maliyetli, operatör bulmak zor ve iş programı belirsizliklerle dolu olabilir. Küçük ölçekli projeler için kepçe satın almak ekonomik değil, ancak profesyonel ekipman olmadan işler uzuyor ve kalite düşüyor.",

            solutionOverview: "Keçaş Kepçe olarak bakımlı JCB 3CX ekipmanımız ve sertifikalı operatörlerimiz ile tam donanımlı hizmet sunuyoruz. Saatlik veya günlük esnek kiralama seçenekleri ile bütçenize uygun çözümler üretiyoruz. Ücretsiz keşif sonrası net fiyat teklifi veriyor, gizli ücret uygulamıyoruz. 22 yıllık tecrübemizle işinizi zamanında ve kaliteli tamamlamanızı sağlıyoruz.",

            processSteps: [
                {
                    title: "İletişim ve Keşif",
                    description: "Bizi arayın veya WhatsApp'tan yazın. Proje detaylarınızı dinliyor, ihtiyacınıza uygun çözüm öneriyoruz. Talep üzerine ücretsiz saha keşfi yapıyoruz."
                },
                {
                    title: "Fiyat Teklifi",
                    description: "Keşif sonrası net ve şeffaf fiyat teklifi sunuyoruz. Saatlik veya günlük kiralama seçenekleri ile bütçenize uygun planlar hazırlıyoruz."
                },
                {
                    title: "Ekipman ve Operatör Tahsisi",
                    description: "Belirlenen tarihte JCB 3CX kepçemiz ve tecrübeli operatörümüz iş yerinizde hazır oluyor. Tüm güvenlik önlemleri alınmış durumda."
                },
                {
                    title: "İş Tamamlama",
                    description: "Operatörümüz işi profesyonelce tamamlıyor. İş bitiminde saha temizliği yapılıyor ve teslim alınıyor."
                }
            ],

            benefits: [
                "22 yıllık sektör tecrübesi ve güvenilirlik",
                "Bakımlı ve güvenli JCB 3CX ekipman",
                "Sertifikalı ve tecrübeli operatör kadrosu",
                "Saatlik veya günlük esnek kiralama seçenekleri",
                "Ücretsiz keşif ve net fiyat teklifi",
                "Arnavutköy ve çevresinde aynı gün hizmet",
                "7/24 acil durum desteği",
                "Sigortalı çalışma garantisi"
            ],

            useCases: [
                "Konut temel kazısı ve hafriyat işleri",
                "Ticari alan ve işyeri kazı projeleri",
                "Bahçe düzenleme ve peyzaj çalışmaları",
                "Altyapı kazı ve kanal açma işleri",
                "Yıkım sonrası moloz temizleme",
                "Arazi tesviye ve dolgu işleri"
            ],

            experienceProof: [
                "2004 yılından beri Arnavutköy'de aktif hizmet",
                "500+ başarıyla tamamlanmış proje",
                "JCB 3CX beko loder kazıyıcı yükleyici - sektörün en güvenilir ekipmanı",
                "Tüm operatörlerimiz SRC 4 belgeli ve 10+ yıl tecrübeli",
                "İş Sağlığı ve Güvenliği sertifikalı çalışma",
                "Arnavutköy Ticaret Odası üyesi"
            ],

            pricingLogic: "Fiyatlandırmamız saatlik veya günlük kiralama bazlıdır. İş süresi, ekipman tipi ve saha koşulları dikkate alınarak şeffaf fiyat teklifi sunulur. Uzun süreli projeler için özel indirimler mevcuttur. Gizli ücret yoktur, tüm masraflar baştan netleştirilir.",

            trustSignals: [
                "22 yıl kesintisiz hizmet - 2004'ten beri",
                "Arnavutköy'de yerleşik, yerel işletme",
                "Tam sigortalı ekipman ve operatör",
                "İşçilik garantisi",
                "Müşteri memnuniyeti %95 üzeri",
                "Referanslar mevcut"
            ]
        },

        media: {
            heroImageAlt: "Arnavutköy şantiyesinde çalışan sarı JCB 3CX kepçe",
            galleryAlts: [
                "Arnavutköy'de temel kazısı yapan JCB kepçe detay görüntüsü",
                "Şirindere bölgesinde çalışan Keçaş Kepçe operatörü"
            ]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy merkez başta olmak üzere Şirindere, Hadımköy, Taşoluk, Boyalık ve tüm çevre mahallelerde profesyonel kepçe hizmeti sunuyoruz.",
            locationContext: "Arnavutköy'de 22 yıldır faaliyet gösteren Keçaş Kepçe, bölgenin arazi yapısını ve zemin özelliklerini yakından tanıyan yerel bir işletmedir. Şirindere'den Hadımköy'e, Taşoluk'tan Boyalık'a kadar geniş hizmet ağımızla yanınızdayız."
        },
        faq: [
            {
                question: "Arnavutköy'de kepçe kiralama saatlik ücreti ne kadar?",
                answer: "Saatlik kepçe kiralama ücretimiz iş tipine ve süresine göre değişmektedir. Ücretsiz keşif sonrası size özel net fiyat teklifi sunuyoruz. Uzun süreli projeler için özel indirimlerimiz mevcuttur. Detaylı bilgi için 0539 477 81 12 numaralı telefondan bize ulaşabilirsiniz."
            },
            {
                question: "Operatör dahil mi, yoksa sadece kepçe mi kiralıyorsunuz?",
                answer: "Tüm kepçe kiralama hizmetlerimiz tecrübeli ve sertifikalı operatör dahildir. Operatörlerimiz SRC 4 belgeli ve 10+ yıl iş makinesi tecrübesine sahiptir. Güvenli ve profesyonel çalışma garantisi veriyoruz."
            },
            {
                question: "Aynı gün kepçe hizmeti alabiliyor muyuz?",
                answer: "Evet, Arnavutköy ve çevre bölgelerde müsaitlik durumuna göre aynı gün hizmet sağlayabiliyoruz. Acil durumlar için 7/24 ulaşılabilir durumdayız. En kısa sürede size dönüş yapıyoruz."
            },
            {
                question: "Hangi marka kepçe kullanıyorsunuz?",
                answer: "JCB 3CX beko loder kazıyıcı yükleyici kullanıyoruz. JCB, dünya çapında güvenilirliği kanıtlanmış, dayanıklı ve verimli bir iş makinesi markasıdır. Ekipmanlarımız düzenli bakımlı ve her zaman çalışır durumdadır."
            },
            {
                question: "Çalışma sırasında sigorta kapsamı var mı?",
                answer: "Evet, tüm ekipmanlarımız ve operatörlerimiz tam sigortalıdır. İş kazalarına karşı gerekli tüm önlemler alınmıştır. Güvenli çalışma prosedürlerine tam uyum sağlıyoruz."
            }
        ],

        conversion: {
            primaryCTA: "Hemen Ara: 0539 477 81 12",
            secondaryCTA: "Ücretsiz Keşif İste"
        },
        internalLinks: {
            relatedServices: ["jcb-kepce-kiralama", "kazi-isleri", "temel-kazisi"]
        }
    },
    // ... (rest of service 2, 3, 4, 5 updates would follow similar pattern but I'll update chunks)


    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 2. JCB 3CX KEPÇE KİRALAMA
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "jcb-kepce-kiralama",
        name: "JCB 3CX Kepçe Kiralama",
        industry: "construction-equipment",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Şirindere", "Hadımköy", "Taşoluk", "Boyalık"],

        seo: {
            metaTitle: "JCB 3CX Kepçe Kiralama Arnavutköy | Operatörlü Hizmet",
            metaDescription: "Arnavutköy'de JCB 3CX beko loder kiralama. Tecrübeli operatör dahil, saatlik/günlük kiralama. 22 yıl tecrübe. Hemen arayın: ☎ 0539 477 81 12",
            canonical: "/hizmetler/jcb-kepce-kiralama",
            h1: "Arnavutköy Operatörlü JCB 3CX Kepçe Kiralama"
        },

        content: {
            intro: "JCB 3CX beko loder kazıyıcı yükleyici, inşaat ve kazı işlerinde en çok tercih edilen iş makinesidir. Arnavutköy'de 2004 yılından bu yana JCB 3CX kepçe kiralama hizmeti sunuyoruz. Hem kazı hem yükleme yapabilen çok fonksiyonlu yapısı sayesinde tek bir makine ile birçok işi tamamlayabilirsiniz. Kompakt boyutları dar alanlarda çalışmaya, güçlü motoru ise zorlu zeminlerde verimli çalışmaya olanak tanır. Tecrübeli operatörlerimiz ile birlikte saatlik veya günlük kiralama seçenekleri sunuyoruz. 22 yıllık tecrübemizle Arnavutköy, Şirindere, Hadımköy ve çevre bölgelerde güvenilir hizmet veriyoruz.",

            problemStatement: "İnşaat projelerinde hem kazı hem yükleme işleri için ayrı ekipman kiralamak maliyetli ve lojistik açıdan zordur. Operatör bulmak, ekipman bakımı ve iş güvenliği konularında sorumluluk almak risk oluşturur. Küçük ve orta ölçekli projeler için JCB kepçe satın almak ekonomik değildir.",

            solutionOverview: "Keçaş Kepçe olarak bakımlı JCB 3CX ekipmanımızı tecrübeli operatör ile birlikte kiralıyoruz. Tek bir makine ile kazı, yükleme, hafriyat ve tesviye işlerini yapabilirsiniz. Operatörlerimiz SRC 4 belgeli ve 10+ yıl tecrübelidir. Saatlik veya günlük esnek kiralama seçenekleri ile bütçenize uygun çözümler sunuyoruz. Tüm bakım ve sigorta işlemleri tarafımızca yapılır, siz sadece işinize odaklanırsınız.",

            processSteps: [
                {
                    title: "Talep ve Bilgilendirme",
                    description: "Projeniz hakkında bilgi alıyoruz. İş tipi, süre ve saha koşullarını değerlendiriyoruz. Ücretsiz keşif teklif ediyoruz."
                },
                {
                    title: "Fiyat Teklifi ve Planlama",
                    description: "Saatlik veya günlük kiralama seçenekleri ile net fiyat teklifi sunuyoruz. İş programınıza uygun tarih belirliyoruz."
                },
                {
                    title: "Ekipman Teslimatı",
                    description: "JCB 3CX kepçemiz ve operatörümüz belirlenen tarihte iş yerinizde hazır oluyor. Güvenlik brifing yapılıyor."
                },
                {
                    title: "İş Gerçekleştirme",
                    description: "Operatörümüz işi profesyonelce yürütüyor. İş ilerlemesi hakkında bilgilendirme yapılıyor."
                },
                {
                    title: "Teslim ve Ödeme",
                    description: "İş tamamlandıktan sonra saha kontrol ediliyor. Ödeme işlemi gerçekleştiriliyor."
                }
            ],

            benefits: [
                "JCB 3CX - sektörün en güvenilir ve dayanıklı iş makinesi",
                "Hem kazı hem yükleme - çok fonksiyonlu kullanım",
                "Kompakt boyut - dar alanlarda çalışabilme",
                "Güçlü motor - zorlu zeminlerde yüksek verim",
                "SRC 4 belgeli, 10+ yıl tecrübeli operatörler",
                "Saatlik veya günlük esnek kiralama",
                "Tam bakımlı ve sigortalı ekipman",
                "22 yıllık firma güvencesi"
            ],

            useCases: [
                "Konut ve villa temel kazısı",
                "Ticari bina inşaat kazısı",
                "Altyapı ve kanal açma projeleri",
                "Hafriyat yükleme ve taşıma",
                "Bahçe düzenleme ve peyzaj",
                "Yıkım sonrası moloz temizleme",
                "Arazi tesviye ve dolgu işleri",
                "Küçük ölçekli yol çalışmaları"
            ],

            experienceProof: [
                "2004'ten beri JCB 3CX ile hizmet veriyoruz",
                "500+ proje tecrübesi - konuttan ticari alana",
                "JCB yetkili servisi ile düzenli bakım anlaşması",
                "Tüm operatörlerimiz JCB eğitimi almıştır",
                "İSG sertifikalı güvenli çalışma",
                "Arnavutköy'de yerleşik, yerel firma"
            ],

            pricingLogic: "JCB 3CX kepçe kiralama fiyatlarımız saatlik veya günlük bazda hesaplanır. İş süresi, saha koşulları ve proje kapsamı değerlendirilerek özel fiyat teklifi sunulur. 3 gün ve üzeri kiralamalar için indirim uygulanır. Operatör, yakıt ve sigorta dahildir. Gizli ücret yoktur.",

            trustSignals: [
                "22 yıl kesintisiz JCB 3CX hizmeti",
                "JCB yetkili servisi bakım garantisi",
                "Tam kasko sigortalı ekipman",
                "SRC 4 belgeli operatör garantisi",
                "İşçilik ve ekipman garantisi",
                "Müşteri referansları mevcut"
            ]
        },

        media: {
            heroImageAlt: "Arnavutköy şantiyesinde park halinde sarı JCB 3CX beko loder",
            galleryAlts: [
                "JCB kepçe ile temel kazısı çalışması - Arnavutköy",
                "Keçaş Kepçe operatörü JCB kabininde çalışma anı"
            ]
        },

        localSEO: {
            serviceAreaText: "JCB 3CX kepçe kiralama hizmetimiz Arnavutköy merkez, Şirindere, Hadımköy, Taşoluk, Boyalık ve tüm çevre bölgelerde mevcuttur.",
            locationContext: "Arnavutköy'de 22 yıldır JCB 3CX ile hizmet veren Keçaş Kepçe, bölgenin zemin yapısını ve inşaat ihtiyaçlarını en iyi bilen yerel firmadır. Şirindere'den Hadımköy'e kadar geniş hizmet ağımızla yanınızdayız."
        },

        faq: [
            {
                question: "JCB 3CX kepçe günlük kiralama ücreti ne kadar?",
                answer: "Günlük JCB 3CX kiralama ücretimiz iş tipine ve süresine göre değişmektedir. Operatör, yakıt ve sigorta dahil net fiyat teklifi sunuyoruz. 3 gün ve üzeri kiralamalar için özel indirimlerimiz mevcuttur. Detaylı bilgi için 0539 477 81 12 numaralı telefondan bize ulaşabilirsiniz."
            },
            {
                question: "JCB 3CX'in avantajları nelerdir?",
                answer: "JCB 3CX hem kazı hem yükleme yapabilen çok fonksiyonlu bir iş makinesidir. Kompakt boyutu dar alanlarda çalışmaya, güçlü motoru zorlu zeminlerde verimli çalışmaya olanak tanır. Dayanıklı yapısı ve düşük yakıt tüketimi ile maliyet avantajı sağlar. Dünya çapında en çok tercih edilen beko loder modelidir."
            },
            {
                question: "Operatör tecrübeli mi?",
                answer: "Tüm operatörlerimiz SRC 4 belgeli ve minimum 10 yıl JCB 3CX tecrübesine sahiptir. JCB yetkili eğitim programlarını tamamlamışlardır. İş Sağlığı ve Güvenliği sertifikalıdırlar. Güvenli ve profesyonel çalışma garantisi veriyoruz."
            },
            {
                question: "Dar alanlarda çalışabilir mi?",
                answer: "Evet, JCB 3CX kompakt boyutları sayesinde dar alanlarda rahatlıkla çalışabilir. Bahçe içi kazılar, dar sokaklar ve sınırlı çalışma alanlarında bile verimli çalışır. Manevra kabiliyeti yüksektir."
            },
            {
                question: "Ekipman arızalanırsa ne olur?",
                answer: "Ekipmanlarımız düzenli bakımlıdır ve arıza riski minimumdadır. Olası bir arıza durumunda anında yedek ekipman sağlıyoruz. Hiçbir ek ücret talep etmiyoruz. İş akışınız kesintiye uğramaz."
            }
        ],

        conversion: {
            primaryCTA: "JCB Kepçe Kirala: 0539 477 81 12",
            secondaryCTA: "Fiyat Teklifi Al"
        },

        internalLinks: {
            relatedServices: ["kepce-hizmeti", "kazi-isleri", "operatorlu-kepce-kiralama"]
        }
    }

    ,
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 3. KAZI İŞLERİ
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "kazi-isleri",
        name: "Kazı İşleri",
        industry: "construction",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Şirindere", "Hadımköy", "Taşoluk", "Boyalık"],

        seo: {
            metaTitle: "Arnavutköy Kazı İşleri | Profesyonel Hafriyat ve Kazı",
            metaDescription: "Arnavutköy'de profesyonel kazı işleri. Temel, kanal, çevre düzenleme ve her türlü toprak kazısı için JCB kepçe kiralama. Hemen arayın: ☎ 0539 477 81 12",
            canonical: "/hizmetler/kazi-isleri",
            h1: "Arnavutköy Profesyonel Kazı ve Hafriyat İşleri"
        },

        content: {
            intro: "Arnavutköy genelinde her türlü kazı ve hafriyat işiniz için profesyonel çözümler sunuyoruz. İnşaat temeli, çevre düzenleme, kanal açma veya peyzaj hazırlığı gibi tüm kazı ihtiyaçlarınızda tecrübeli operatörlerimiz ve güçlü JCB 3CX iş makinelerimizle hizmetinizdeyiz. Hızlı, güvenli ve ekonomik kazı hizmeti için 22 yıllık tecrübemize güvenebilirsiniz.",
            problemStatement: "Kazı işleri, doğru ekipman ve uzmanlık gerektirir. Yanlış yapılan kazılar zemin sorunlarına, altyapı hasarlarına ve maliyet artışlarına neden olabilir. Amatör çözümler zaman kaybı ve güvenlik riski yaratır.",
            solutionOverview: "Keçaş Kepçe olarak, zemin yapısına uygun kazı yöntemleri ve profesyonel JCB 3CX iş makineleri kullanıyoruz. Tecrübeli operatörlerimizle milimetrik hassasiyette çalışıyor, altyapıya zarar vermeden hızlı ve güvenli kazı yapıyoruz.",
            processSteps: [
                { title: "Saha İncelemesi", description: "Kazı yapılacak alanın zemin yapısı ve metrajı incelenir." },
                { title: "Planlama", description: "Kazı derinliği, hafriyat döküm yeri ve iş süresi planlanır." },
                { title: "Kazı Çalışması", description: "JCB kepçe ile profesyonel kazı işlemi gerçekleştirilir." },
                { title: "Hafriyat Nakli", description: "Çıkan toprak uygun döküm sahasına nakledilir veya saha içinde kullanılır." }
            ],
            benefits: ["Hızlı ve hassas kazı", "Altyapı koruma garantisi", "Hafriyat nakliye desteği", "Uygun fiyat avantajı"],
            useCases: ["İnşaat sahası hazırlığı", "Bahçe düzenleme", "Havuz yeri kazısı", "Otopark alanı açma"],
            experienceProof: ["22 yıl hafriyat tecrübesi", "Binlerce m³ kazı referansı", "Uzman operatör kadrosu"],
            pricingLogic: "Kazı işlerinde metreküp veya saatlik çalışma bazlı fiyatlandırma yapılır. Ücretsiz keşif ile net maliyet belirlenir.",
            trustSignals: ["Tam sigortalı çalışma", "İş güvenliği önlemleri", "Zamanında teslim garantisi"]
        },
        media: {
            heroImageAlt: "Arnavutköy'de toprak kazısı yapan JCB kepçe - Keçaş Kepçe",
            galleryAlts: ["Arnavutköy kazı çalışması detay görüntüsü", "Hafriyat toprağının kamyona yüklenmesi"]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy, Hadımköy, Bolluca ve çevre köylerde kazı hizmeti veriyoruz.",
            locationContext: "Arnavutköy'ün killi ve sert zemin yapısına uygun kova ve ekipmanlarımızla sorunsuz kazı yapıyoruz."
        },
        faq: [
            { question: "Kazı işleri ne kadar sürer?", answer: "İşin büyüklüğüne ve zemin yapısına göre değişir. Keşif sonrası kesin süre verilir." },
            { question: "Hafriyatı döküyor musunuz?", answer: "Evet, çıkan hafriyatın döküm sahasına nakliyesi konusunda çözüm ortaklarımızla destek oluyoruz." }
        ],
        conversion: { primaryCTA: "Kazı İçin Fiyat Al", secondaryCTA: "Keşif İste" },
        internalLinks: { relatedServices: ["temel-kazisi", "kanal-acma", "hafriyat-isleri"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 4. TEMEL KAZISI
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "temel-kazisi",
        name: "Temel Kazısı",
        industry: "construction",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Bolluca", "Haraççı", "İmrahor"],

        seo: {
            metaTitle: "Arnavutköy Temel Kazısı | Bina ve İnşaat Temeli",
            metaDescription: "Arnavutköy'de bina, villa ve yapı temel kazısı hizmeti. Projeye uygun, hassas ve güvenli temel açma. Tecrübeli operatör. ☎ 0539 477 81 12",
            canonical: "/hizmetler/temel-kazisi",
            h1: "Arnavutköy Bina ve İnşaat Temel Kazısı"
        },

        content: {
            intro: "Her sağlam yapının arkasında doğru yapılmış bir temel kazısı vardır. Arnavutköy'de inşaat projeleriniz için projesine tam uygun, hassas kot ve ölçülerde temel kazısı hizmeti veriyoruz. Lazer ölçüm cihazları ve tecrübeli operatörlerimizle, binanızın temelini en güvenli şekilde hazırlıyoruz.",
            problemStatement: "Temel kazısında yapılan hatalar, binanın statik yapısını ve maliyetini doğrudan etkiler. Fazla derin kazı veya yetersiz sıkıştırma, ileride telafisi zor sorunlara yol açar.",
            solutionOverview: "Mimari ve statik projenize %100 sadık kalarak çalışıyoruz. Kot kontrolü yapıyor, zemini örselemeden kazıyoruz. Grobeton dökümüne hazır, temiz bir zemin teslim ediyoruz.",
            processSteps: [
                { title: "Proje İnceleme", description: "Temel aplikasyon projesi ve kotlar incelenir." },
                { title: "Saha İşaretleme", description: "Harita mühendisi/teknikeri ile kazı sınırları belirlenir." },
                { title: "Kademeli Kazı", description: "Zemin yapısına göre kademeli olarak inilir." },
                { title: "Tesviye ve Teslim", description: "Temel tabanı tesviye edilerek grobetona hazır hale getirilir." }
            ],
            benefits: ["Projesine tam uygunluk", "Hassas kot çalışması", "Hızlı iş teslimi", "Güvenli şev oluşturma"],
            useCases: ["Apartman inşaatı", "Villa temeli", "Fabrika temeli", "İstinat duvarı temeli"],
            experienceProof: ["Yüzlerce temel referansı", "Müteahhitlerle sürekli çalışma", "Zorlu zemin tecrübesi"],
            pricingLogic: "Proje metrajı ve hafriyat hacmine göre fiyatlandırılır.",
            trustSignals: ["Mühendis kontrolünde çalışma imkanı", "Projeye sadakat garantisi"]
        },
        media: {
            heroImageAlt: "Arnavutköy temel kazısı çalışması",
            galleryAlts: ["Temel taban tesviyesi", "İnşaat temeli açma"]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy'ün tüm mahallelerinde temel kazısı yapıyoruz.",
            locationContext: "Bölgenin zemin etüdü verilerine hakimiz, karşılaşılabilecek zemin türlerine (kaya, kil vs.) hazırlıklıyız."
        },
        faq: [
            { question: "Derin kazı yapabiliyor musunuz?", answer: "JCB kepçemiz belirli derinliğe kadar kazabilir, çok derin hafriyatlarda ekskavatör temini de sağlıyoruz." },
            { question: "Kaya zemin çıkarsa ne oluyor?", answer: "JCB 3CX kırıcı ucumuz mevcuttur, kaya veya sert zeminlerde kırım yaparak kazıya devam ediyoruz." }
        ],
        conversion: { primaryCTA: "Temel Kazısı Fiyatı Al", secondaryCTA: "Proje Gönder" },
        internalLinks: { relatedServices: ["kazi-isleri", "beton-kirma", "dolgu-isleri"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 5. KANAL AÇMA
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "kanal-acma",
        name: "Kanal Açma",
        industry: "infrastructure",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Tayakadın", "Durusu", "Yeniköy"],

        seo: {
            metaTitle: "Arnavutköy Kanal Açma | Su, Elektrik, Doğalgaz Kanalı",
            metaDescription: "Arnavutköy'de JCB kepçe ile kanal açma hizmeti. Su tesisatı, elektrik kablosu, doğalgaz ve altyapı kanalları için hızlı çözüm. ☎ 0539 477 81 12",
            canonical: "/hizmetler/kanal-acma",
            h1: "Arnavutköy Altyapı ve Kanal Açma Hizmetleri"
        },

        content: {
            intro: "Su, elektrik, doğalgaz, internet veya atık su giderleri için ihtiyaç duyduğunuz tüm kanal açma işlemlerini JCB 3CX kepçemizin özel dar kovalarıyla gerçekleştiriyoruz. Arnavutköy'de altyapı çalışmalarınızda dar alanlarda bile yüksek manevra kabiliyetimizle hızlı ve temiz işçilik sunuyoruz.",
            problemStatement: "Kanal kazıları genellikle dar ve hassas alanlarda yapılır. Geniş kovalı makineler çevreye zarar verir ve gereğinden fazla hafriyat çıkarır.",
            solutionOverview: "Farklı genişlikteki (30luk, 40lık, 60lık) kova seçeneklerimizle ihtiyacınız olan genişlikte kanal açıyoruz. Etrafa zarar vermeden, boru veya kablo döşemeye hazır düzgün kanallar teslim ediyoruz.",
            processSteps: [
                { title: "Hat Belirleme", description: "Kanal güzergahı belirlenir ve işaretlenir." },
                { title: "Kova Seçimi", description: "Kanal genişliğine uygun kova takılır." },
                { title: "Kazı", description: "İstenen derinlikte ve eğimde kazı yapılır." },
                { title: "Kapatma (Opsiyonel)", description: "Tesisat döşendikten sonra kanalın kapatılması işlemi yapılır." }
            ],
            benefits: ["İstenen genişlikte kanal", "Düzgün taban tesviyesi", "Çevreye minimum hasar", "Hızlı ilerleme"],
            useCases: ["Su borusu hattı", "Elektrik kablosu kanalı", "Drenaj kanalı", "Bahçe sulama hattı"],
            experienceProof: ["İSKİ ve BEDAŞ standartlarına hakimiyet", "Kilometrelerce kanal tecrübesi"],
            pricingLogic: "Metre tül veya saatlik çalışma üzerinden fiyatlandırılır.",
            trustSignals: ["Mevcut altyapıya zarar vermeme hassasiyeti", "Tecrübeli operatör"]
        },
        media: {
            heroImageAlt: "Arnavutköy kanal açma çalışması - JCB dar kova",
            galleryAlts: ["Su borusu kanalı kazısı", "Kablo kanalı açma"]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy genelinde altyapı kanal işleri yapıyoruz.",
            locationContext: "Köy içi yerleşimlerde ve dar sokaklarda rahatlıkla çalışabiliyoruz."
        },
        faq: [
            { question: "En dar ne kadar kazabiliyorsunuz?", answer: "30 cm genişliğindeki özel kovamızla çok dar kanallar açabiliyoruz." },
            { question: "Mevcut borulara zarar verir misiniz?", answer: "Operatörlerimiz çok dikkatlidir ve elle kontrol edilmesi gereken yerlerde sizi uyararak güvenli kazı yaparlar." }
        ],
        conversion: { primaryCTA: "Kanal Açtırmak İçin Ara", secondaryCTA: "Bilgi Al" },
        internalLinks: { relatedServices: ["kazi-isleri", "dolgu-isleri", "cevre-duzenleme"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 6. DOLGU İŞLERİ
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "dolgu-isleri",
        name: "Dolgu İşleri",
        industry: "construction",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Şirindere", "Karlıbayır", "Anadolu Mahallesi"],

        seo: {
            metaTitle: "Arnavutköy Dolgu İşleri | Toprak Dolgu ve Sıkıştırma",
            metaDescription: "Arnavutköy'de temel dolgusu, bahçe dolgusu ve zemin yükseltme işleri. Kaliteli dolgu toprağı temini ve serme hizmeti. ☎ 0539 477 81 12",
            canonical: "/hizmetler/dolgu-isleri",
            h1: "Arnavutköy Toprak Dolgu ve Zemin Yükseltme"
        },
        content: {
            intro: "İnşaat temellerinin çevresi, bahçe zeminleri veya kot düşüklüğü olan alanlar için profesyonel dolgu hizmeti veriyoruz. Arnavutköy'de dolgu malzemesinin temini, alana serilmesi ve sıkıştırılması işlemlerini anahtar teslim veya sadece işçilik olarak sunuyoruz. Suyun yönlendirilmesi ve zeminin sağlamlaşması için doğru dolgu uygulaması şarttır.",
            problemStatement: "Gelişigüzel yapılan dolgular zamanla çöker, su tutar ve binaya zarar verebilir. Yanlış malzeme kullanımı bitki yetişmesini engeller.",
            solutionOverview: "Kullanım amacına uygun (bahçe için nebati, temel için mekanik vs.) malzeme seçimi yapıyor, katmanlar halinde serip sıkıştırarak çökme riskini minimize ediyoruz.",
            processSteps: [
                { title: "Alan Analizi", description: "Doldurulacak hacim ve gerekli malzeme hesaplanır." },
                { title: "Malzeme Temini", description: "Uygun dolgu toprağı veya malzemesi sahaya getirilir." },
                { title: "Serme ve Tesviye", description: "Kepçe ile malzeme eşit şekilde yayılır." },
                { title: "Sıkıştırma", description: "Zamanla çökmemesi için zemin sıkıştırılır." }
            ],
            benefits: ["Çökme yapmayan sağlam zemin", "Düzgün yüzey tesviyesi", "Su gideri eğimi verme", "Hızlı uygulama"],
            useCases: ["Bina etrafı dolgusu", "Bahçe toprağı serimi", "Otopark zemini hazırlama", "Çukur kapatma"],
            experienceProof: ["Peyzaj ve inşaat dolgu tecrübesi", "Malzeme bilgisinde uzmanlık"],
            pricingLogic: "Malzeme dahil veya hariç, sefer başı veya saatlik olarak fiyatlandırılır.",
            trustSignals: ["Doğru metraj hesabı", "Kaliteli malzeme garantisi"]
        },
        media: {
            heroImageAlt: "Arnavutköy dolgu çalışması - toprak serme",
            galleryAlts: ["Temel çevresi dolgu", "Bahçe toprağı yayma"]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy ve çevre ilçelerde dolgu hizmeti.",
            locationContext: "Bölgedeki hafriyat döküm ve malzeme temin sahalarına yakınlığımız ile uygun nakliye maliyetleri sunuyoruz."
        },
        faq: [
            { question: "Bahçe toprağı getiriyor musunuz?", answer: "Evet, bitki yetiştirmeye uygun elenmiş nebati toprak temini ve serimi yapıyoruz." },
            { question: "Dolgu malzemesi ne olmalı?", answer: "Yerine göre değişir; temel çevresine drenaj için çakıl/mıcır, bahçeye toprak, yola mekanik malzeme öneriyoruz." }
        ],
        conversion: { primaryCTA: "Dolgu Fiyatı Al", secondaryCTA: "Malzeme Sor" },
        internalLinks: { relatedServices: ["dolgu-tesviye", "cevre-duzenleme", "is-makinesi-kiralama"] }
    }

    ,
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 7. DOLGU VE TESVİYE (REGLAJ)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "dolgu-tesviye",
        name: "Dolgu ve Tesviye",
        industry: "construction",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Hadımköy", "Deliklikaya", "Ömerli"],
        seo: {
            metaTitle: "Arnavutköy Dolgu ve Tesviye | Arazi Düzeltme & Reglaj",
            metaDescription: "Arnavutköy'de arazi düzenleme, zemin tesviyesi ve reglaj işleri. JCB kepçe ile bahçe, otopark, arsa düzelme hizmeti. ☎ 0539 477 81 12",
            canonical: "/hizmetler/dolgu-tesviye",
            h1: "Arnavutköy Arazi Dolgu ve Zemin Tesviye İşleri"
        },
        content: {
            intro: "Düzgün bir zemin, her projenin başlangıç noktasıdır. Arnavutköy'de engebeli arazilerin düzeltilmesi, inşaat sonrası çevre düzenlemesi ve bahçe toprağı serimi sonrası tesviye (reglaj) işlemlerini profesyonelce yapıyoruz. JCB kepçemizin ön kovası (loader) ile kot farklarını gideriyor, suyun doğru akışını sağlıyor ve kullanım alanınızı maksimuma çıkarıyoruz.",
            problemStatement: "Eğimleri yanlış ayarlanmış arazilerde su birikintileri oluşur, bina temelleri su alır ve kullanım alanları verimsizleşir. El işçiliği ile geniş alanları düzeltmek imkansız ve maliyetlidir.",
            solutionOverview: "Lazer veya nivo ile kot kontrolü yaparak çalışıyoruz. Arazinizi projesine veya isteğinize uygun eğimde tesviye ediyor, silindir veya kepçe ile sıkıştırarak oturmasını engelliyoruz.",
            processSteps: [
                { title: "Kot Belirleme", description: "Arazinin mevcut ve istenen kotları işaretlenir." },
                { title: "Kaba Tesviye", description: "Yüksek yerler tıraşlanır, çukurlar doldurulur." },
                { title: "İnce Reglaj", description: "JCB açılır kova ile yüzey pürüzsüz hale getirilir." },
                { title: "Eğim Verme", description: "Yağmur suyu gideri için gerekli eğim verilir." }
            ],
            benefits: ["Pürüzsüz ve kullanışlı zemin", "Su birikme sorununun çözümü", "Bahçe peyzajına hazır alan", "Estetik görünüm"],
            useCases: ["Bahçe düzenleme", "Otopark zemini hazırlığı", "Tarla düzeltme", "Fabrika sahası reglajı"],
            experienceProof: ["Yüzlerce dönüm arazi tesviyesi", "Hassas göz ve el yeteneğine sahip operatör"],
            pricingLogic: "Metrekare veya saatlik çalışma ile fiyatlandırılır.",
            trustSignals: ["Göz kararı değil, ölçülü çalışma", "Memnuniyet garantisi"]
        },
        media: {
            heroImageAlt: "Arnavutköy arazi tesviye çalışması - zemin düzeltme",
            galleryAlts: ["Bahçe toprağı tesviyesi", "Arsa reglaj işlemi"]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy genelinde arazi düzeltme hizmeti.",
            locationContext: "Bölgenin yeni gelişen mahallelerindeki (Hadımköy, Deliklikaya) şantiye ve arsa düzenlemelerinde tecrübeliyiz."
        },
        faq: [
            { question: "Eğimli arazide çalışabilir misiniz?", answer: "Evet, teraslama yaparak eğimli arazileri kullanılabilir düz alanlara dönüştürüyoruz." },
            { question: "Toprak serme dahil mi?", answer: "İsterseniz dolgu toprağını temin edip serim ve tesviyesini paket olarak yapıyoruz." }
        ],
        conversion: { primaryCTA: "Tesviye Fiyatı Al", secondaryCTA: "Keşif İste" },
        internalLinks: { relatedServices: ["dolgu-isleri", "kazi-isleri", "moloz-atim"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 8. YIKIM İŞİ
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "yikim-isi",
        name: "Yıkım İşi",
        industry: "demolition",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Haraççı", "Taşoluk", "İmrahor"],
        seo: {
            metaTitle: "Arnavutköy Yıkım İşleri | Bina, Gecekondu, Duvar Yıkımı",
            metaDescription: "Arnavutköy'de güvenli bina, gecekondu, duvar yıkım işleri. JCB kepçe ile kontrollü yıkım ve moloz nakliyesi. ☎ 0539 477 81 12",
            canonical: "/hizmetler/yikim-isi",
            h1: "Arnavutköy Profesyonel Yıkım ve Moloz Kaldırma"
        },
        content: {
            intro: "Kentsel dönüşüm veya yenileme projeleriniz için eski yapıların, duvarların veya beton zeminlerin yıkımını güvenli bir şekilde gerçekleştiriyoruz. Arnavutköy'de çevreye zarar vermeden, gürültü ve toz kontrolü sağlayarak yıkım hizmeti veriyoruz. Yıkım sonrası çıkan molozun yüklenmesi ve döküm sahasına nakliyesi dahil anahtar teslim çözüm sunuyoruz.",
            problemStatement: "Yıkım işleri yüksek risk içerir. Bilinçsiz yapılan yıkımlar yandaki binalara zarar verebilir, iş kazalarına yol açabilir ve çevre cezalarına neden olabilir.",
            solutionOverview: "Risk analizi yaparak işe başlıyoruz. Elektrik, su, doğalgaz bağlantılarının kesildiğinden emin olduktan sonra, statik yapıya uygun sırayla (çatıdan temele) kontrollü yıkım yapıyoruz.",
            processSteps: [
                { title: "Güvenlik Önlemleri", description: "Çevre güvenliği alınır, altyapı bağlantıları kesilir." },
                { title: "Söküm", description: "Kapı, pencere, çatı gibi malzemeler ayıklanır." },
                { title: "Yıkım", description: "JCB kepçe veya kırıcı ile yapı yıkılır." },
                { title: "Moloz Nakli", description: "Çıkan hafriyat kamyonlara yüklenip gönderilir." }
            ],
            benefits: ["Güvenli ve kontrollü yıkım", "Çevreye minimum rahatsızlık", "Anahtar teslim moloz atımı", "Hızlı süreç"],
            useCases: ["Gecekondu yıkımı", "Eski bina yıkımı", "Beton duvar yıkımı", "Şap ve fayans sökümü"],
            experienceProof: ["Onlarca kontrollü yıkım referansı", "İş güvenliği sertifikalı ekip"],
            pricingLogic: "Yıkılacak alanın m²'si ve çıkacak moloz miktarına göre götürü fiyat verilir.",
            trustSignals: ["Yasal döküm garantisi", "Komşu bina koruma hassasiyeti"]
        },
        media: {
            heroImageAlt: "Arnavutköy bina yıkım işlemi - JCB kepçe",
            galleryAlts: ["Gecekondu yıkımı", "Moloz yükleme"]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy'ün tüm mahallelerinde yıkım hizmeti.",
            locationContext: "Köy içi dar sokaklardaki eski yapıların yıkımında tecrübeliyiz."
        },
        faq: [
            { question: "Molozu siz mi atıyorsunuz?", answer: "Evet, yıkım, yükleme ve moloz nakliyesi dahil komple hizmet veriyoruz." },
            { question: "Yıkım ruhsatı gerekiyor mu?", answer: "Büyük yapılarda belediye yıkım ruhsatı gerekir, süreci sizin adınıza takip edebiliriz." }
        ],
        conversion: { primaryCTA: "Yıkım Fiyatı Al", secondaryCTA: "Keşif İste" },
        internalLinks: { relatedServices: ["duvar-yikimi", "moloz-atim", "beton-kirma"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 9. DUVAR YIKIMI
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "duvar-yikimi",
        name: "Duvar Yıkımı",
        industry: "demolition",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Tüm Mahalleler"],
        seo: {
            metaTitle: "Arnavutköy Duvar Yıkımı | Bahçe ve İstinat Duvarı Kırımı",
            metaDescription: "Arnavutköy'de bahçe duvarı, istinat duvarı, bölme duvar yıkım işleri. JCB kırıcı ile beton kırım ve moloz atımı. ☎ 0539 477 81 12",
            canonical: "/hizmetler/duvar-yikimi",
            h1: "Arnavutköy Duvar Yıkımı ve Beton Kırımı"
        },
        content: {
            intro: "Yenileme veya genişletme projelerinizde engel olan bahçe duvarları, istinat duvarları veya bina içi bölme duvarlarını profesyonel ekipmanlarla yıkıyoruz. Betonarme veya tuğla duvar fark etmeksizin, JCB 3CX kırıcı (kırıcı) ucumuzla en sert betonları bile kısa sürede parçalıyor ve temizliyoruz.",
            problemStatement: "Beton duvarları balyozla yıkmak günler sürer ve çok yorucudur. Hilti ile kırmak ise kalın duvarlarda yetersiz kalır.",
            solutionOverview: "JCB iş makinemize taktığımız hidrolik kırıcı ataşmanı ile insan gücünün günler süreceği işi saatler içinde bitiriyoruz. Çıkan molozu anında yükleyerek alanı temiz bırakıyoruz.",
            processSteps: [
                { title: "Alan Çevirme", description: "Çalışma alanı şeritle kapatılır." },
                { title: "Kırım İşlemi", description: "Kırıcı uç ile duvar parçalanır." },
                { title: "Demir Ayıklama", description: "Beton içindeki demirler ayrıştırılır." },
                { title: "Yükleme", description: "Moloz kamyona yüklenir." }
            ],
            benefits: ["Çok hızlı kırım", "Sessiz çalışma (mümkün olduğunca)", "Temiz işçilik", "Moloz taşıma dahil"],
            useCases: ["Bahçe duvarı yıkımı", "Oda birleştirme", "Kapı/pencere yeri açma", "Eski istinat duvarı sökümü"],
            experienceProof: ["Yüzlerce metre duvar kırım tecrübesi", "Hassas kırım yeteneği"],
            pricingLogic: "Yıkılacak duvarın uzunluğu, yüksekliği ve kalınlığına göre fiyat verilir.",
            trustSignals: ["Statik yapıya zarar vermeme garantisi"]
        },
        media: {
            heroImageAlt: "Arnavutköy duvar kırım işlemi",
            galleryAlts: ["Beton duvar yıkımı", "Bahçe duvarı sökümü"]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy geneli duvar yıkım hizmeti.",
            locationContext: "Müstakil evlerin yoğun olduğu bölgelerde bahçe düzenlemesi öncesi eski duvar yıkımlarında uzmanız."
        },
        faq: [
            { question: "Ev içine kepçe girer mi?", answer: "Giriş kat veya garaj gibi yerlere girebilir, giremediği yerlerde el hiltileri ile kırım ekibimiz devreye girer." },
            { question: "Yıkımdan çıkan demirleri alıyor musunuz?", answer: "Evet, hurda demirleri moloz maliyetinden düşebiliriz." }
        ],
        conversion: { primaryCTA: "Duvar Yıkım Fiyatı", secondaryCTA: "WhatsApp'tan Sor" },
        internalLinks: { relatedServices: ["yikim-isi", "beton-kirma", "moloz-atim"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 10. KÜÇÜK YAPI YIKIMI
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "kucuk-yapi-yikimi",
        name: "Küçük Yapı Yıkımı",
        industry: "demolition",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Şirindere", "İmrahor", "Boğazköy"],
        seo: {
            metaTitle: "Arnavutköy Küçük Yapı Yıkımı | Kulübe, Depo, Gecekondu",
            metaDescription: "Arnavutköy'de kömürlük, depo, garaj, kulübe gibi küçük yapıların yıkımı ve temizliği. Ekonomik fiyat, hızlı hizmet. ☎ 0539 477 81 12",
            canonical: "/hizmetler/kucuk-yapi-yikimi",
            h1: "Arnavutköy Küçük Yapı ve Gecekondu Yıkımı"
        },
        content: {
            intro: "Bahçenizde yer kaplayan eski kömürlük, depo, garaj, kümes veya metruk yapıları temizliyor, alanınızı genişletiyoruz. Küçük ölçekli yıkımlar için büyük ekskavatörlere yüksek nakliye ücreti ödemenize gerek yok. JCB kepçemiz (beko loder) bu işler için en ideal ve ekonomik çözümdür.",
            problemStatement: "Küçük yıkımlar için büyük firmalar gelmek istemez veya çok yüksek fiyat verir. Kendiniz yıkmaya çalışmak ise tehlikeli ve zordur.",
            solutionOverview: "Küçük ve orta ölçekli işler için optimize edilmiş ekipmanımızla, dar bahçelere girerek yıkımı yapıyor, çıkan malzemeyi ayıklıyor ve molozu atıyoruz. Yarım günde bahçenizi tertemiz teslim ediyoruz.",
            processSteps: [
                { title: "Keşif", description: "Yapının durumu ve giriş yolu kontrol edilir." },
                { title: "Yıkım", description: "Yapı kontrollü şekilde indirilir." },
                { title: "Temizlik", description: "Büyük parçalar ve moloz yüklenir." },
                { title: "Tesviye", description: "Zemin düzeltilerek teslim edilir." }
            ],
            benefits: ["Ekonomik çözüm", "Hızlı sonuç (genelde 1 gün)", "Dar alanlara giriş imkanı", "Komple temizlik"],
            useCases: ["Kömürlük yıkımı", "Tavuk kümesi sökümü", "Eski garaj yıkımı", "Baraka temizliği"],
            experienceProof: ["Sayısız bahçe temizliği referansı"],
            pricingLogic: "İşin süresi ve moloz kamyon sayısına göre paket fiyat.",
            trustSignals: ["Bahçedeki ağaçlara zarar vermeme garantisi"]
        },
        media: {
            heroImageAlt: "Arnavutköy eski yapı yıkımı",
            galleryAlts: ["Gecekondu temizliği", "Kömürlük yıkımı"]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy'ün tüm köyleri ve mahalleleri.",
            locationContext: "Köy içi yerleşimlerdeki eski eklentilerin temizliğinde sıkça tercih ediliyoruz."
        },
        faq: [
            { question: "Bahçeye zarar verir misiniz?", answer: "Operatörlerimiz çok hassas çalışır, ağaçlara ve diğer yapılara zarar vermeden sadece hedef yapıyı yıkar." },
            { question: "Fiyata moloz dahil mi?", answer: "Evet, genellikle her şey dahil fiyat veriyoruz." }
        ],
        conversion: { primaryCTA: "Yıkım Fiyatı Al", secondaryCTA: "Fotoğraf Gönder" },
        internalLinks: { relatedServices: ["yikim-isi", "moloz-atim", "cevre-duzenleme"] }
    }
    ,
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 11. BETON KIRMA
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "beton-kirma",
        name: "Beton Kırma",
        industry: "demolition",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Sanayi Bölgesi", "Hadımköy", "Merkez"],
        seo: {
            metaTitle: "Arnavutköy Beton Kırma | Şap, Beton Zemin Kırımı",
            metaDescription: "Arnavutköy'de JCB kırıcı ile beton kırma hizmeti. Saha betonu, şap, asfalt ve betonarme zemin kırım işleri. ☎ 0539 477 81 12",
            canonical: "/hizmetler/beton-kirma",
            h1: "Arnavutköy Beton Kırma ve Söküm İşleri"
        },
        content: {
            intro: "Eski fabrika zeminleri, kalın şap tabakaları, asfalt yollar veya betonarme yapılar... JCB 3CX iş makinemizin yüksek güçlü hidrolik kırıcı (rock breaker) ucu ile en sert zeminleri bile zorlanmadan kırıyoruz. Arnavutköy sanayi bölgelerinde ve inşaat sahalarında beton kırım ve hafriyat temizliği hizmetini bir arada sunuyoruz.",
            problemStatement: "El hiltisi ile geniş alanlarda beton kırmak haftalar sürer. Kompresörlü kırıcılar ise gürültülüdür ve moloz taşıma imkanı sunmaz. Zaman ve maliyet kaybı yaşatır.",
            solutionOverview: "Saatlik veya günlük kiralayabileceğiniz kırıcılı JCB kepçemiz ile hem kırım yapıyor hem de çıkan molozu aynı makine ile kamyona yüklüyoruz. İşinizi tek makine ile çözüyoruz.",
            processSteps: [
                { title: "Kırıcı Takılması", description: "JCB'ye hidrolik kırıcı ataşmanı monte edilir." },
                { title: "Perforaj/Kırım", description: "Beton zemin sistematik şekilde parçalanır." },
                { title: "Kepçe Dönüşümü", description: "Kırıcı sökülür, yükleme kovası takılır." },
                { title: "Temizlik", description: "Kırılan beton parçaları yüklenir." }
            ],
            benefits: ["Yüksek kırım gücü", "Kırım ve yükleme tek makinede", "Hızlı ilerleme", "Uygun maliyet"],
            useCases: ["Fabrika saha betonu kırımı", "Asfalt yol sökümü", "Eski temel sökümü", "Merdiven yıkımı"],
            experienceProof: ["Sanayi zeminlerinde tecrübe", "Hidrolik kırım uzmanlığı"],
            pricingLogic: "Kırıcı çalışma saati veya m² birim fiyatı üzerinden hesaplanır. Moloz nakliyesi hariç veya dahil görüşülebilir.",
            trustSignals: ["Makine kırılsa bile yedek parça desteği", "Kesintisiz hizmet"]
        },
        media: {
            heroImageAlt: "Arnavutköy beton kırma işlemi - JCB kırıcı",
            galleryAlts: ["Saha betonu sökümü", "Asfalt kırımı"]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy ve Hadımköy sanayi bölgelerinde aktif hizmet.",
            locationContext: "Fabrika yenileme projelerinde beton kırım işleri için en çok tercih edilen firmayız."
        },
        faq: [
            { question: "Ne kadar kalınlıkta betonu kırabilirsiniz?", answer: "JCB kırıcımız 30-40 cm kalınlığa kadar olan donatılı betonları rahatlıkla kırabilir." },
            { question: "Gürültü çok olur mu?", answer: "Beton kırma işlemi doğası gereği gürültülüdür, ancak hızlı bitirerek rahatsızlık süresini minimuma indiriyoruz." }
        ],
        conversion: { primaryCTA: "Kırım Fiyatı Al", secondaryCTA: "Keşif İste" },
        internalLinks: { relatedServices: ["yikim-isi", "duvar-yikimi", "moloz-atim"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 12. OPERATÖRLÜ KEPÇE KİRALAMA
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "operatorlu-kepce-kiralama",
        name: "Operatörlü Kepçe Kiralama",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Tüm Avrupa Yakası"],
        seo: {
            metaTitle: "Arnavutköy Operatörlü Kepçe Kiralama | Saatlik & Günlük",
            metaDescription: "Arnavutköy'de operatörlü JCB kepçe kiralama hizmeti. Saatlik, günlük veya aylık kiralık beko loder. İş makinesi + Uzman operatör. ☎ 0539 477 81 12",
            canonical: "/hizmetler/operatorlu-kepce-kiralama",
            h1: "Arnavutköy Operatörlü JCB Kepçe Kiralama"
        },
        content: {
            intro: "İş makinesi kiralamak sadece makineyi değil, onu kullanacak ustalığı da kiralamaktır. Keçaş Kepçe olarak, bakımlı JCB 3CX parkımızla birlikte sektörün en tecrübeli operatörlerini hizmetinize sunuyoruz. 'Sadece makine değil, çözüm kiralayın' prensibiyle, operatörümüz projenizin bir parçası gibi çalışır, işi sahiplenir.",
            problemStatement: "Tecrübesiz operatörle çalışmak işi uzatır, makineye zarar verir ve sahada kazalara yol açabilir. Sadece makine kiralamak operatör bulma sorununu çözmez.",
            solutionOverview: "Bizden kiralama yaptığınızda, makine, yakıt (opsiyonel), operatör, sigorta ve bakım dahil tam paket hizmet alırsınız. Operatörlerimiz firmamızın bordrolu ve sürekli çalışanlarıdır, günlük yevmiyeci değildir.",
            processSteps: [
                { title: "Rezervasyon", description: "İhtiyaç duyulan gün ve saat belirlenir." },
                { title: "İş Tanımı", description: "Yapılacak iş operatöre detaylıca anlatılır." },
                { title: "Çalışma", description: "Operatörümüz talimatlarınız doğrultusunda işi yapar." },
                { title: "Puantaj", description: "Çalışılan saat sonunda imzalanır." }
            ],
            benefits: ["SRC ve Psikoteknik belgeli operatörler", "İş disiplini ve ahlakı", "Yedek operatör imkanı", "Sorumluluk firmamıza ait"],
            useCases: ["Müteahhit firmalara taşeronluk", "Belediye altyapı işleri", "Peyzaj firmalarına destek", "Şahıs inşaatları"],
            experienceProof: ["Operatörlerimizin en az 10 yıl saha deneyimi vardır."],
            pricingLogic: "Saatlik, günlük veya aylık kiralama seçenekleri. Mazotlu veya mazotsuz fiyatlandırma.",
            trustSignals: ["SGK'lı ve belgeli çalışanlar", "İş güvenliği eğitimi"]
        },
        media: {
            heroImageAlt: "Arnavutköy operatörlü kepçe kiralama",
            galleryAlts: ["Operatör çalışma anı", "JCB kiralama sahası"]
        },
        localSEO: {
            serviceAreaText: "Başta Arnavutköy olmak üzere İstanbul Avrupa Yakası geneli.",
            locationContext: "Yerel projelerde hızlı mobilizasyon avantajı sağlıyoruz."
        },
        faq: [
            { question: "Sadece operatör kiralıyor musunuz?", answer: "Hayır, hizmet kalitemizi korumak için sadece kendi makinelerimizle birlikte hizmet veriyoruz." },
            { question: "Operatörün yemeği kime ait?", answer: "Günlük kiralamalarda operatörün yemeği genellikle işverene aittir, ancak anlaşmaya göre değişebilir." }
        ],
        conversion: { primaryCTA: "Kiralama Yap", secondaryCTA: "Fiyat Sor" },
        internalLinks: { relatedServices: ["jcb-kepce-kiralama", "is-makinesi-kiralama", "kazi-isleri"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 13. İŞ MAKİNESİ KİRALAMA
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "is-makinesi-kiralama",
        name: "İş Makinesi Kiralama",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Hadımköy", "Bolluca", "Taşoluk"],
        seo: {
            metaTitle: "Arnavutköy İş Makinesi Kiralama | Kepçe, Ekskavatör, Kamyon",
            metaDescription: "Arnavutköy'de her türlü iş makinesi kiralama çözümleri. JCB, mini ekskavatör, kamyon temini. Projenize uygun makine parkı. ☎ 0539 477 81 12",
            canonical: "/hizmetler/is-makinesi-kiralama",
            h1: "Arnavutköy Kiralık İş Makinesi Çözümleri"
        },
        content: {
            intro: "İnşaat ve hafriyat projeleriniz için sadece JCB kepçe değil, ihtiyacınız olabilecek diğer iş makineleri konusunda da çözüm ortağınızız. Kendi filomuz ve geniş tedarik ağımız sayesinde ekskavatör, mini kepçe, bobcat veya hafriyat kamyonu ihtiyaçlarınıza tek noktadan cevap veriyoruz. Arnavutköy'de iş makinesi arama derdine son veriyoruz.",
            problemStatement: "Farklı makineler için farklı kişilerle uğraşmak, koordinasyon sorunu ve zaman kaybı yaratır. Güvenilir olmayan makine sahipleri işi yarıda bırakabilir.",
            solutionOverview: "Keçaş Kepçe güvencesiyle, projenizin tamamını yönetecek ekipman parkını kuruyoruz. İster tek bir JCB, ister kamyonlu hafriyat ekibi olsun, organizasyonu biz yapıyoruz.",
            processSteps: [
                { title: "İhtiyaç Analizi", description: "Hangi makinelere ihtiyacınız olduğu belirlenir." },
                { title: "Organizasyon", description: "Kendi parkımızdan veya partnerlerimizden makineler hazırlanır." },
                { title: "Sahaya Sevk", description: "Makineler çalışma alanına nakledilir." },
                { title: "Yönetim", description: "Süreç tarafımızca takip edilir." }
            ],
            benefits: ["Tek muhatap", "Geniş makine ağı", "Uygun fiyat garantisi", "Arıza durumunda anında değişim"],
            useCases: ["Komple hafriyat alımı", "Yol yapım çalışması", "Büyük şantiye kurulumu"],
            experienceProof: ["Bölgedeki en geniş iş makinesi ağına erişim"],
            pricingLogic: "Proje bazlı toplu fiyatlandırma avantajı.",
            trustSignals: ["Sözleşmeli çalışma garantisi"]
        },
        media: {
            heroImageAlt: "Arnavutköy iş makinesi filosu",
            galleryAlts: ["Kamyon ve kepçe çalışması", "İş makinesi parkı"]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy ve çevresi.",
            locationContext: "Hadımköy ve Arnavutköy'deki şantiyeler için hızlı makine temini."
        },
        faq: [
            { question: "Makineleri yakıtlı mı veriyorsunuz?", answer: "Talebe göre yakıt dahil veya hariç (dry lease) kiralama yapabilirsiniz." },
            { question: "Kamyon kiralıyor musunuz?", answer: "Hafriyat işlerinde kepçe ile beraber çalışacak kamyon temini sağlıyoruz." }
        ],
        conversion: { primaryCTA: "Makine İste", secondaryCTA: "Proje Danış" },
        internalLinks: { relatedServices: ["operatorlu-kepce-kiralama", "jcb-kepce-kiralama", "kazi-isleri"] }
    }
];

export function getServiceDataBySlug(slug: string): ServiceData | undefined {
    return servicesData.find(s => s.slug === slug);
}
