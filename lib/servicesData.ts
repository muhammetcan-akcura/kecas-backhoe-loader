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
        heroImage?: string;
        galleryImages?: Array<{
            src: string;
            alt: string;
        }>;
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
    // 1. OPERATÖRLÜ KEPÇE KİRALAMA
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "operatorlu-kepce-kiralama",
        name: "Operatörlü Kepçe Kiralama",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Şirindere", "Hadımköy", "Taşoluk", "Boyalık"],
        seo: {
            metaTitle: "Operatörlü Kepçe Kiralama | Keçaş Kepçe",
            metaDescription: "JCB 3CX ile operatörlü kepçe kiralama hizmeti. Tecrübeli operatör dahil, saatlik/günlük kiralama. Kazı, yükleme, hafriyat işleriniz için ücretsiz keşif. ☎ 0539 477 81 12",
            canonical: "/hizmetler/operatorlu-kepce-kiralama",
            h1: "Operatörlü Kepçe Kiralama"
        },
        content: {
            intro: "Arnavutköy'de 2004 yılından bu yana profesyonel kepçe hizmeti ve JCB 3CX kepçe kiralama sunuyoruz. İş makinesi kiralamak sadece makineyi değil, onu kullanacak ustalığı da kiralamaktır. Bakımlı JCB 3CX beko loder kazıyıcı yükleyici ekipmanımız ve sektörün en tecrübeli operatörleri ile kazı, yükleme, hafriyat ve zemin düzenleme işlerinde güvenilir çözümler üretiyoruz. 22 yıllık sektör tecrübemiz ve tecrübeli operatör kadromuz ile konut, ticari alan ve altyapı projelerinde hızlı ve kaliteli hizmet sağlıyoruz. Saatlik veya günlük kiralama seçenekleri ile ihtiyacınıza uygun esnek çalışma imkanı sunuyoruz.",
            problemStatement: "İnşaat ve kazı projelerinde ekipman kiralama maliyetli, operatör bulmak zor ve iş programı belirsizliklerle dolu olabilir. Tecrübesiz operatörle çalışmak işi uzatır, makineye zarar verir ve sahada kazalara yol açabilir. Küçük ölçekli projeler için kepçe satın almak ekonomik değil, ancak profesyonel ekipman olmadan işler uzuyor ve kalite düşüyor.",
            solutionOverview: "Keçaş Kepçe olarak bakımlı JCB 3CX ekipmanımız ve sertifikalı operatörlerimiz ile tam donanımlı hizmet sunuyoruz. Bizden kiralama yaptığınızda, makine, yakıt (opsiyonel), operatör, sigorta ve bakım dahil tam paket hizmet alırsınız. Operatörlerimiz firmamızın bordrolu ve sürekli çalışanlarıdır, günlük yevmiyeci değildir. Saatlik veya günlük esnek kiralama seçenekleri ile bütçenize uygun çözümler üretiyoruz. Ücretsiz keşif sonrası net fiyat teklifi veriyor, gizli ücret uygulamıyoruz.",
            processSteps: [
                { title: "İletişim ve Keşif", description: "Bizi arayın veya WhatsApp'tan yazın. Proje detaylarınızı dinliyor, ihtiyacınıza uygun çözüm öneriyoruz. Talep üzerine ücretsiz saha keşfi yapıyoruz." },
                { title: "Fiyat Teklifi ve Rezervasyon", description: "Keşif sonrası net ve şeffaf fiyat teklifi sunuyoruz. Saatlik veya günlük kiralama seçenekleri ile bütçenize uygun planlar hazırlıyoruz. İhtiyaç duyulan gün ve saat belirlenir." },
                { title: "Ekipman ve Operatör Tahsisi", description: "Belirlenen tarihte JCB 3CX kepçemiz ve tecrübeli operatörümüz iş yerinizde hazır oluyor. Yapılacak iş operatöre detaylıca anlatılır. Tüm güvenlik önlemleri alınmış durumda." },
                { title: "İş Tamamlama ve Puantaj", description: "Operatörümüz talimatlarınız doğrultusunda işi profesyonelce tamamlıyor. İş bitiminde saha temizliği yapılıyor. Çalışılan saat sonunda puantaj imzalanır." }
            ],
            benefits: [
                "22 yıllık sektör tecrübesi ve güvenilirlik",
                "Bakımlı ve güvenli JCB 3CX ekipman",
                "SRC 4 belgeli ve 10+ yıl tecrübeli operatörler",
                "Saatlik veya günlük esnek kiralama seçenekleri",
                "Ücretsiz keşif ve net fiyat teklifi",
                "Arnavutköy ve çevresinde aynı gün hizmet",
                "7/24 acil durum desteği",
                "Sigortalı çalışma garantisi",
                "JCB 3CX - hem kazı hem yükleme yapabilen çok fonksiyonlu makine",
                "Kompakt boyut - dar alanlarda çalışabilme",
                "Güçlü motor - zorlu zeminlerde yüksek verim",
                "Operatör, yakıt ve sigorta dahil paket seçenekleri"
            ],
            useCases: [
                "Konut temel kazısı ve hafriyat işleri",
                "Ticari alan ve işyeri kazı projeleri",
                "Bahçe düzenleme ve peyzaj çalışmaları",
                "Altyapı kazı ve kanal açma işleri",
                "Yıkım sonrası moloz temizleme",
                "Arazi tesviye ve dolgu işleri",
                "Müteahhit firmalara taşeronluk",
                "Belediye altyapı işleri",
                "Peyzaj firmalarına destek",
                "Hafriyat yükleme ve taşıma"
            ],
            experienceProof: [
                "2004’ten bu yana Arnavutköy ve çevresinde 500+ hafriyat ve kiralama projesi tamamlandı.",
                "JCB 3CX beko loder kazıyıcı yükleyici - sektörün en güvenilir ekipmanı",
                "Tüm operatörlerimiz SRC 4 belgeli ve 10+ yıl tecrübeli",
                "JCB yetkili servisi ile düzenli bakım anlaşması",
                "İş Sağlığı ve Güvenliği sertifikalı çalışma",
                "Arnavutköy Ticaret Odası üyesi"
            ],
            pricingLogic: "Fiyatlandırmamız saatlik veya günlük kiralama bazlıdır. İş süresi, ekipman tipi ve saha koşulları dikkate alınarak şeffaf fiyat teklifi sunulur. Operatör, yakıt ve sigorta dahil veya hariç seçenekler mevcuttur. Uzun süreli projeler için özel indirimler mevcuttur. Gizli ücret yoktur, tüm masraflar baştan netleştirilir.",
            trustSignals: [
                "22 yıl kesintisiz hizmet - 2004'ten beri",
                "Arnavutköy'de yerleşik, yerel işletme",
                "Tam sigortalı ekipman ve operatör",
                "SGK'lı ve belgeli çalışanlar",
                "İş güvenliği eğitimi",
                "İşçilik garantisi",
                "Müşteri memnuniyeti %95 üzeri",
                "Referanslar mevcut",
                "JCB yetkili servisi bakım garantisi"
            ]
        },
        media: {
            heroImageAlt: "Arnavutköy şantiyesinde çalışan sarı JCB 3CX kepçe - operatörlü kiralama",
            heroImage: "/assets/arnavutkoy-jcb-3cx-kepce-arazi-calismasi.avif",
            galleryImages: [
                {
                    src: "/assets/arnavutkoy-jcb-3cx-kepce-arazi-calismasi.avif",
                    alt: "Arnavutköy'de JCB 3CX kepçe ile arazi hazırlama çalışması"
                },
                {
                    src: "/assets/arnavutkoy-kepce-operatoru-tesviye-calismasi.avif",
                    alt: "Arnavutköy'de tecrübeli kepçe operatörü ile tesviye çalışması"
                },
                {
                    src: "/assets/arnavutkoy-temel-kazisi-hafriyat-calismasi.avif",
                    alt: "Arnavutköy'de temel kazısı ve hafriyat çalışması"
                }
            ],
            galleryAlts: [
                "Arnavutköy'de temel kazısı yapan JCB kepçe detay görüntüsü",
                "Şirindere bölgesinde çalışan Keçaş Kepçe operatörü",
                "JCB kepçe ile temel kazısı çalışması - Arnavutköy"
            ]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy merkez başta olmak üzere çevre mahallelerde aktif hizmet veriyoruz.",
            locationContext: "Arnavutköy'de 22 yıldır faaliyet gösteren Keçaş Kepçe, bölgenin arazi yapısını ve zemin özelliklerini yakından tanıyan yerel bir işletmedir. Yerel projelerde hızlı mobilizasyon avantajı sağlıyoruz."
        },
        faq: [
            { question: "Arnavutköy'de kepçe kiralama saatlik ücreti ne kadar?", answer: "Saatlik kepçe kiralama ücretimiz iş tipine ve süresine göre değişmektedir. Ücretsiz keşif sonrası size özel net fiyat teklifi sunuyoruz. Uzun süreli projeler için özel indirimlerimiz mevcuttur. Detaylı bilgi için 0539 477 81 12 numaralı telefondan bize ulaşabilirsiniz." },
            { question: "JCB 3CX kepçe günlük kiralama ücreti ne kadar?", answer: "Günlük JCB 3CX kiralama ücretimiz iş tipine ve süresine göre değişmektedir. Operatör, yakıt ve sigorta dahil net fiyat teklifi sunuyoruz. 3 gün ve üzeri kiralamalar için özel indirimlerimiz mevcuttur. Detaylı bilgi için 0539 477 81 12 numaralı telefondan bize ulaşabilirsiniz." },
            { question: "Operatör dahil mi, yoksa sadece kepçe mi kiralıyorsunuz?", answer: "Tüm kepçe kiralama hizmetlerimiz tecrübeli ve sertifikalı operatör dahildir. Operatörlerimiz SRC 4 belgeli ve 10+ yıl iş makinesi tecrübesine sahiptir. Hizmet kalitemizi korumak için sadece kendi makinelerimizle birlikte hizmet veriyoruz. Güvenli ve profesyonel çalışma garantisi veriyoruz." },
            { question: "Aynı gün kepçe hizmeti alabiliyor muyuz?", answer: "Evet, Arnavutköy ve çevre bölgelerde müsaitlik durumuna göre aynı gün hizmet sağlayabiliyoruz. Acil durumlar için 7/24 ulaşılabilir durumdayız. En kısa sürede size dönüş yapıyoruz." },
            { question: "JCB 3CX'in avantajları nelerdir?", answer: "JCB 3CX hem kazı hem yükleme yapabilen çok fonksiyonlu bir iş makinesidir. Kompakt boyutu dar alanlarda çalışmaya, güçlü motoru zorlu zeminlerde verimli çalışmaya olanak tanır. Dayanıklı yapısı ve düşük yakıt tüketimi ile maliyet avantajı sağlar. Dünya çapında en çok tercih edilen beko loder modelidir." },
            { question: "Dar alanlarda çalışabilir mi?", answer: "Evet, JCB 3CX kompakt boyutları sayesinde dar alanlarda rahatlıkla çalışabilir. Bahçe içi kazılar, dar sokaklar ve sınırlı çalışma alanlarında bile verimli çalışır. Manevra kabiliyeti yüksektir." },
            { question: "Çalışma sırasında sigorta kapsamı var mı?", answer: "Evet, tüm ekipmanlarımız ve operatörlerimiz tam sigortalıdır. İş kazalarına karşı gerekli tüm önlemler alınmıştır. Güvenli çalışma prosedürlerine tam uyum sağlıyoruz." },
            { question: "Ekipman arızalanırsa ne olur?", answer: "Ekipmanlarımız düzenli bakımlıdır ve arıza riski minimumdadır. Olası bir arıza durumunda anında yedek ekipman sağlıyoruz. Hiçbir ek ücret talep etmiyoruz. İş akışınız kesintiye uğramaz." },
            { question: "Operatörün yemeği kime ait?", answer: "Günlük kiralamalarda operatörün yemeği genellikle işverene aittir, ancak anlaşmaya göre değişebilir." }
        ],
        conversion: { primaryCTA: "Hemen Ara: 0539 477 81 12", secondaryCTA: "Ücretsiz Keşif İste" },
        internalLinks: { relatedServices: ["kazi-isleri", "temel-kazisi", "is-makinesi-kiralama"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 2. KAZI İŞLERİ
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "kazi-isleri",
        name: "Kazı İşleri",
        industry: "construction",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Şirindere", "Hadımköy", "Taşoluk", "Boyalık"],

        seo: {
            metaTitle: "Kazı İşleri | Keçaş Kepçe",
            metaDescription: "Profesyonel kazı ve hafriyat hizmeti. JCB 3CX kepçe ile temel, kanal, çevre düzenleme ve toprak kazısı. Ücretsiz keşif sonrası net fiyat. ☎ 0539 477 81 12",
            canonical: "/hizmetler/kazi-isleri",
            h1: "Kazı İşleri"
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
            experienceProof: ["22 yıllık tecrübe ile bölgede binlerce m³ kazı ve hafriyat işi başarıyla teslim edildi.", "Binlerce m³ kazı referansı", "Uzman operatör kadrosu"],
            pricingLogic: "Kazı işlerinde metreküp veya saatlik çalışma bazlı fiyatlandırma yapılır. Ücretsiz keşif ile net maliyet belirlenir.",
            trustSignals: ["Tam sigortalı çalışma", "İş güvenliği önlemleri", "Zamanında teslim garantisi"]
        },
        media: {
            heroImageAlt: "Arnavutköy'de toprak kazısı yapan JCB kepçe - Keçaş Kepçe",
            heroImage: "/assets/arnavutkoy-sokak-kazi-calismasi-jcb-kepce.avif",
            galleryImages: [
                {
                    src: "/assets/arnavutkoy-sokak-kazi-calismasi-jcb-kepce.avif",
                    alt: "Arnavutköy sokak kazı çalışması - JCB kepçe ile altyapı kazısı"
                },
                {
                    src: "/assets/arnavutkoy-kanal-kazi-altyapi-calismasi.avif",
                    alt: "Arnavutköy'de kanal kazısı ve altyapı çalışması"
                },
                {
                    src: "/assets/arnavutkoy-derin-kazi-jcb-kepce-hidrolik-kirici.avif",
                    alt: "Arnavutköy'de derin kazı - JCB kepçe hidrolik kırıcı ile çalışma"
                }
            ],
            galleryAlts: ["Arnavutköy kazı çalışması detay görüntüsü", "Hafriyat toprağının kamyona yüklenmesi"]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy merkez ve çevre köylerde profesyonel kazı hizmeti sunuyoruz.",
            locationContext: "Arnavutköy'ün killi ve sert zemin yapısına uygun kova ve ekipmanlarımızla sorunsuz kazı yapıyoruz."
        },
        faq: [
            { question: "Kazı işleri ne kadar sürer?", answer: "İşin büyüklüğüne ve zemin yapısına göre değişir. Keşif sonrası kesin süre verilir." },
            { question: "Hafriyatı döküyor musunuz?", answer: "Evet, çıkan hafriyatın döküm sahasına nakliyesi konusunda çözüm ortaklarımızla destek oluyoruz." }
        ],
        conversion: { primaryCTA: "Kazı İçin Fiyat Al", secondaryCTA: "Keşif İste" },
        internalLinks: { relatedServices: ["temel-kazisi", "operatorlu-kepce-kiralama", "dolgu-tesviye", "yunus-emre-kazi-isleri"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 3. TEMEL KAZISI
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "temel-kazisi",
        name: "Temel Kazısı",
        industry: "construction",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Bolluca", "Haraççı", "İmrahor"],

        seo: {
            metaTitle: "Temel Kazısı | Keçaş Kepçe",
            metaDescription: "Bina, villa ve yapı temel kazısı hizmeti. Projeye uygun, hassas ve güvenli temel açma. JCB 3CX kepçe ile profesyonel çözüm. ☎ 0539 477 81 12",
            canonical: "/hizmetler/temel-kazisi",
            h1: "Temel Kazısı"
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
            experienceProof: ["Arnavutköy bölgesinde 100+ inşaat projesinin temel kazısı hassas kot kontrolüyle tamamlandı.", "Müteahhitlerle sürekli çalışma", "Zorlu zemin tecrübesi"],
            pricingLogic: "Proje metrajı ve hafriyat hacmine göre fiyatlandırılır.",
            trustSignals: ["Mühendis kontrolünde çalışma imkanı", "Projeye sadakat garantisi"]
        },
        media: {
            heroImageAlt: "Arnavutköy temel kazısı çalışması",
            heroImage: "/assets/arnavutkoy-temel-kazisi-hafriyat-calismasi.avif",
            galleryImages: [
                {
                    src: "/assets/arnavutkoy-temel-kazisi-hafriyat-calismasi.avif",
                    alt: "Arnavutköy'de temel kazısı ve hafriyat çalışması"
                },
                {
                    src: "/assets/arnavutkoy-derin-kazi-jcb-kepce-hidrolik-kirici.avif",
                    alt: "Arnavutköy'de derin kazı - JCB kepçe hidrolik kırıcı ile çalışma"
                }
            ],
            galleryAlts: ["Temel taban tesviyesi", "İnşaat temeli açma"]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy genelinde tüm zemin türlerinde temel kazısı yapıyoruz.",
            locationContext: "Bölgenin zemin etüdü verilerine hakimiz, karşılaşılabilecek zemin türlerine (kaya, kil vs.) hazırlıklıyız."
        },
        faq: [
            { question: "Derin kazı yapabiliyor musunuz?", answer: "JCB kepçemiz belirli derinliğe kadar kazabilir, çok derin hafriyatlarda ekskavatör temini de sağlıyoruz." },
            { question: "Kaya zemin çıkarsa ne oluyor?", answer: "JCB 3CX kırıcı ucumuz mevcuttur, kaya veya sert zeminlerde kırım yaparak kazıya devam ediyoruz." }
        ],
        conversion: { primaryCTA: "Temel Kazısı Fiyatı Al", secondaryCTA: "Proje Gönder" },
        internalLinks: { relatedServices: ["kazi-isleri", "yikim-hizmetleri", "dolgu-tesviye", "yunus-emre-temel-kazisi"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 4. DOLGU VE TESVİYE
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "dolgu-tesviye",
        name: "Dolgu ve Tesviye",
        industry: "construction",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Şirindere", "Hadımköy", "Karlıbayır", "Deliklikaya", "Ömerli", "Anadolu Mahallesi"],
        seo: {
            metaTitle: "Dolgu ve Tesviye | Keçaş Kepçe",
            metaDescription: "Dolgu işleri, arazi tesviyesi ve zemin düzleme hizmeti. Toprak dolgu, bahçe düzenleme, arsa hazırlama. JCB kepçe ile profesyonel çözüm. ☎ 0539 477 81 12",
            canonical: "/hizmetler/dolgu-tesviye",
            h1: "Dolgu ve Tesviye"
        },
        content: {
            intro: "Düzgün bir zemin, her projenin başlangıç noktasıdır. Arnavutköy'de inşaat temellerinin çevresi, bahçe zeminleri, kot düşüklüğü olan alanlar ve engebeli arazilerin düzeltilmesi için profesyonel dolgu ve tesviye hizmeti veriyoruz. Dolgu malzemesinin temini, alana serilmesi, sıkıştırılması ve zemin tesviyesi (reglaj) işlemlerini anahtar teslim veya sadece işçilik olarak sunuyoruz. JCB kepçemizin ön kovası (loader) ile kot farklarını gideriyor, suyun doğru akışını sağlıyor ve kullanım alanınızı maksimuma çıkarıyoruz.",
            problemStatement: "Gelişigüzel yapılan dolgular zamanla çöker, su tutar ve binaya zarar verebilir. Yanlış malzeme kullanımı bitki yetişmesini engeller. Eğimleri yanlış ayarlanmış arazilerde su birikintileri oluşur, bina temelleri su alır ve kullanım alanları verimsizleşir. El işçiliği ile geniş alanları düzeltmek imkansız ve maliyetlidir.",
            solutionOverview: "Kullanım amacına uygun (bahçe için nebati, temel için mekanik vs.) malzeme seçimi yapıyor, katmanlar halinde serip sıkıştırarak çökme riskini minimize ediyoruz. Lazer veya nivo ile kot kontrolü yaparak çalışıyoruz. Arazinizi projesine veya isteğinize uygun eğimde tesviye ediyor, silindir veya kepçe ile sıkıştırarak oturmasını engelliyoruz.",
            processSteps: [
                { title: "Alan Analizi ve Kot Belirleme", description: "Doldurulacak hacim, gerekli malzeme hesaplanır. Arazinin mevcut ve istenen kotları işaretlenir." },
                { title: "Malzeme Temini", description: "Uygun dolgu toprağı veya malzemesi sahaya getirilir. Kullanım amacına göre nebati toprak, mıcır veya mekanik malzeme seçilir." },
                { title: "Serme ve Kaba Tesviye", description: "Kepçe ile malzeme eşit şekilde yayılır. Yüksek yerler tıraşlanır, çukurlar doldurulur." },
                { title: "İnce Reglaj ve Sıkıştırma", description: "JCB açılır kova ile yüzey pürüzsüz hale getirilir. Zamanla çökmemesi için zemin sıkıştırılır. Yağmur suyu gideri için gerekli eğim verilir." }
            ],
            benefits: [
                "Çökme yapmayan sağlam zemin",
                "Düzgün yüzey tesviyesi",
                "Su gideri eğimi verme",
                "Su birikme sorununun çözümü",
                "Hızlı uygulama ve ilerleme",
                "Pürüzsüz ve kullanışlı zemin",
                "Bahçe peyzajına hazır alan",
                "Estetik görünüm",
                "Doğru metraj hesabı",
                "Kaliteli malzeme garantisi"
            ],
            useCases: [
                "Bina etrafı dolgusu",
                "Bahçe toprağı serimi ve düzenleme",
                "Otopark zemini hazırlama",
                "Çukur kapatma",
                "Arazi tesviyesi ve düzleme",
                "Zemin yükseltme işleri",
                "Arsa hazırlama ve reglaj",
                "Bahçe tesviyesi",
                "Tarla düzeltme",
                "Fabrika sahası reglajı",
                "Toprak sıkıştırma işleri"
            ],
            experienceProof: [
                "Yüzlerce dönüm arazi tesviyesi ve dolgu işlemi bölge standartlarına uygun şekilde yapıldı.",
                "Peyzaj ve inşaat dolgu tecrübesi",
                "Malzeme bilgisinde uzmanlık",
                "Hassas göz ve el yeteneğine sahip operatör"
            ],
            pricingLogic: "Malzeme dahil veya hariç, sefer başı veya saatlik olarak fiyatlandırılır. Metrekare veya metreküp bazlı hesaplama yapılır. Uzun süreli projeler için özel fiyatlandırma mevcuttur.",
            trustSignals: [
                "Doğru metraj hesabı",
                "Kaliteli malzeme garantisi",
                "Göz kararı değil, ölçülü çalışma",
                "Memnuniyet garantisi"
            ]
        },
        media: {
            heroImageAlt: "Arnavutköy dolgu ve tesviye çalışması - zemin düzeltme",
            galleryAlts: [
                "Arnavutköy dolgu çalışması - toprak serme",
                "Temel çevresi dolgu",
                "Bahçe toprağı yayma",
                "Bahçe toprağı tesviyesi",
                "Arsa reglaj işlemi"
            ]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy ve çevresindeki şantiye ve arazilerde dolgu hizmeti veriyoruz.",
            locationContext: "Bölgedeki hafriyat döküm ve malzeme temin sahalarına yakınlığımız ile uygun nakliye maliyetleri sunuyoruz. Bölgenin yeni gelişen mahallelerindeki (Hadımköy, Deliklikaya) şantiye ve arsa düzenlemelerinde tecrübeliyiz."
        },
        faq: [
            { question: "Bahçe toprağı getiriyor musunuz?", answer: "Evet, bitki yetiştirmeye uygun elenmiş nebati toprak temini ve serimi yapıyoruz." },
            { question: "Dolgu malzemesi ne olmalı?", answer: "Yerine göre değişir; temel çevresine drenaj için çakıl/mıcır, bahçeye toprak, yola mekanik malzeme öneriyoruz." },
            { question: "Eğimli arazide çalışabilir misiniz?", answer: "Evet, teraslama yaparak eğimli arazileri kullanılabilir düz alanlara dönüştürüyoruz." },
            { question: "Toprak serme dahil mi?", answer: "İsterseniz dolgu toprağını temin edip serim ve tesviyesini paket olarak yapıyoruz." },
            { question: "Zemin sıkıştırması yapıyor musunuz?", answer: "Evet, dolgu işlerinde zamanla çökme olmaması için katmanlar halinde sıkıştırma yapıyoruz." }
        ],
        conversion: { primaryCTA: "Dolgu ve Tesviye Fiyatı Al", secondaryCTA: "Keşif İste" },
        internalLinks: { relatedServices: ["kazi-isleri", "temel-kazisi", "is-makinesi-kiralama"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 5. YIKIM HİZMETLERİ
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "yikim-hizmetleri",
        name: "Yıkım Hizmetleri",
        industry: "demolition",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Haraççı", "Taşoluk", "İmrahor", "Şirindere", "Boğazköy", "Hadımköy", "Sanayi Bölgesi"],
        seo: {
            metaTitle: "Yıkım Hizmetleri | Keçaş Kepçe",
            metaDescription: "Profesyonel yıkım hizmeti: Bina yıkımı, duvar yıkımı, küçük yapı yıkımı, beton kırma. JCB kepçe ve kırıcı ile güvenli yıkım. Moloz dahil. ☎ 0539 477 81 12",
            canonical: "/hizmetler/yikim-hizmetleri",
            h1: "Yıkım Hizmetleri"
        },
        content: {
            intro: "Arnavutköy'de kentsel dönüşüm, yenileme projeleri ve bahçe düzenlemesi için her türlü yıkım hizmetini güvenli bir şekilde gerçekleştiriyoruz. Bina yıkımı, duvar yıkımı, küçük yapı yıkımı ve beton kırma işlemlerinde JCB 3CX kepçemiz ve hidrolik kırıcı ekipmanımız ile çevreye zarar vermeden, gürültü ve toz kontrolü sağlayarak profesyonel hizmet veriyoruz. Yıkım sonrası çıkan molozun yüklenmesi ve döküm sahasına nakliyesi dahil anahtar teslim çözüm sunuyoruz. 22 yıllık tecrübemizle güvenli ve kontrollü yıkım garantisi veriyoruz.",
            problemStatement: "Yıkım işleri yüksek risk içerir. Bilinçsiz yapılan yıkımlar yandaki binalara zarar verebilir, iş kazalarına yol açabilir ve çevre cezalarına neden olabilir. Beton duvarları balyozla yıkmak günler sürer ve çok yorucudur. Hilti ile kırmak ise kalın duvarlarda yetersiz kalır. Küçük yıkımlar için büyük firmalar gelmek istemez veya çok yüksek fiyat verir.",
            solutionOverview: "Risk analizi yaparak işe başlıyoruz. Elektrik, su, doğalgaz bağlantılarının kesildiğinden emin olduktan sonra, statik yapıya uygun sırayla (çatıdan temele) kontrollü yıkım yapıyoruz. JCB iş makinemize taktığımız hidrolik kırıcı ataşmanı ile insan gücünün günler süreceği işi saatler içinde bitiriyoruz. Çıkan molozu anında yükleyerek alanı temiz bırakıyoruz.",
            processSteps: [
                { title: "Güvenlik Önlemleri ve Keşif", description: "Çevre güvenliği alınır, altyapı bağlantıları kesilir. Yapının durumu ve giriş yolu kontrol edilir. Yıkım planı hazırlanır." },
                { title: "Söküm ve Ayıklama", description: "Kapı, pencere, çatı gibi malzemeler ayıklanır. Beton içindeki demirler ayrıştırılır. Değerli malzemeler korunur." },
                { title: "Yıkım ve Kırım", description: "JCB kepçe veya kırıcı ile yapı yıkılır. Kırıcı uç ile duvar ve beton parçalanır. Kontrollü şekilde yapı indirilir." },
                { title: "Moloz Nakli ve Temizlik", description: "Çıkan hafriyat kamyonlara yüklenir ve yasal döküm sahasına gönderilir. Zemin düzeltilerek teslim edilir." }
            ],
            benefits: [
                "Güvenli ve kontrollü yıkım",
                "Çevreye minimum rahatsızlık",
                "Anahtar teslim moloz atımı",
                "Hızlı süreç ve teslim",
                "Çok hızlı kırım gücü",
                "Kırım ve yükleme tek makinede",
                "Temiz işçilik",
                "Moloz taşıma dahil",
                "Ekonomik çözüm",
                "Dar alanlara giriş imkanı",
                "Komple temizlik",
                "Bahçedeki ağaçlara zarar vermeme garantisi"
            ],
            useCases: [
                "Gecekondu ve eski bina yıkımı",
                "Beton duvar yıkımı",
                "Bahçe duvarı yıkımı",
                "İstinat duvarı sökümü",
                "Oda birleştirme - bölme duvar yıkımı",
                "Kapı/pencere yeri açma",
                "Küçük yapı yıkımı (kömürlük, depo, garaj, kulübe)",
                "Tavuk kümesi sökümü",
                "Baraka temizliği",
                "Fabrika saha betonu kırımı",
                "Asfalt yol sökümü",
                "Eski temel sökümü",
                "Şap ve fayans sökümü",
                "Zemin betonu kırma",
                "Merdiven yıkımı"
            ],
            experienceProof: [
                "Bölgede 50+ kontrollü bina ve duvar yıkım projesi iş güvenliği kurallarına uygun tamamlandı.",
                "Onlarca kontrollü yıkım referansı",
                "İş güvenliği sertifikalı ekip",
                "Hydraulic breaker (kırıcı) uzmanlığı"
            ],
            pricingLogic: "Yıkılacak alanın m²'si ve çıkacak moloz miktarına göre götürü fiyat verilir. Yıkılacak duvarın uzunluğu, yüksekliği ve kalınlığına göre fiyat hesaplanır. Kırıcı çalışma saati veya m² birim fiyatı üzerinden hesaplanır. Moloz nakliyesi dahil veya hariç seçenekler mevcuttur. İşin süresi ve moloz kamyon sayısına göre paket fiyat sunulur.",
            trustSignals: [
                "Yasal döküm garantisi",
                "Komşu bina koruma hassasiyeti",
                "Statik yapıya zarar vermeme garantisi",
                "Makine kırılsa bile yedek parça desteği",
                "Kesintisiz hizmet",
                "Bahçedeki ağaçlara zarar vermeme garantisi"
            ]
        },
        media: {
            heroImageAlt: "Arnavutköy yıkım işlemi - JCB kepçe ile bina yıkımı",
            galleryAlts: [
                "Arnavutköy bina yıkım işlemi - JCB kepçe",
                "Gecekondu yıkımı",
                "Moloz yükleme",
                "Arnavutköy duvar kırım işlemi",
                "Beton duvar yıkımı",
                "Bahçe duvarı sökümü",
                "Arnavutköy eski yapı yıkımı",
                "Gecekondu temizliği",
                "Kömürlük yıkımı",
                "Arnavutköy beton kırma işlemi - JCB kırıcı",
                "Saha betonu sökümü",
                "Asfalt kırımı"
            ]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy'ün tüm mahallelerinde güvenli yıkım hizmeti sağlıyoruz.",
            locationContext: "Köy içi dar sokaklardaki eski yapıların yıkımında tecrübeliyiz. Müstakil evlerin yoğun olduğu bölgelerde bahçe düzenlemesi öncesi eski duvar yıkımlarında uzmanız. Fabrika yenileme projelerinde beton kırım işleri için en çok tercih edilen firmayız."
        },
        faq: [
            { question: "Molozu siz mi atıyorsunuz?", answer: "Evet, yıkım, yükleme ve moloz nakliyesi dahil komple hizmet veriyoruz. Yasal döküm sahalarına gönderim garantisi veriyoruz." },
            { question: "Yıkım ruhsatı gerekiyor mu?", answer: "Büyük yapılarda belediye yıkım ruhsatı gerekir, süreci sizin adınıza takip edebiliriz." },
            { question: "Ev içine kepçe girer mi?", answer: "Giriş kat veya garaj gibi yerlere girebilir, giremediği yerlerde el hiltileri ile kırım ekibimiz devreye girer." },
            { question: "Yıkımdan çıkan demirleri alıyor musunuz?", answer: "Evet, hurda demirleri moloz maliyetinden düşebiliriz." },
            { question: "Bahçeye zarar verir misiniz?", answer: "Operatörlerimiz çok hassas çalışır, ağaçlara ve diğer yapılara zarar vermeden sadece hedef yapıyı yıkar." },
            { question: "Fiyata moloz dahil mi?", answer: "Evet, genellikle her şey dahil fiyat veriyoruz." },
            { question: "Ne kadar kalınlıkta betonu kırabilirsiniz?", answer: "JCB kırıcımız 30-40 cm kalınlığa kadar olan donatılı betonları rahatlıkla kırabilir." },
            { question: "Gürültü çok olur mu?", answer: "Beton kırma işlemi doğası gereği gürültülüdür, ancak hızlı bitirerek rahatsızlık süresini minimuma indiriyoruz." },
            { question: "Küçük yıkımlar için de gelir misiniz?", answer: "Evet, küçük ve orta ölçekli işler için optimize edilmiş ekipmanımızla, dar bahçelere girerek yıkımı yapıyor, çıkan malzemeyi ayıklıyor ve molozu atıyoruz. Yarım günde bahçenizi tertemiz teslim ediyoruz." }
        ],
        conversion: { primaryCTA: "Yıkım Fiyatı Al", secondaryCTA: "Keşif İste" },
        internalLinks: { relatedServices: ["kazi-isleri", "operatorlu-kepce-kiralama", "dolgu-tesviye", "yunus-emre-yikim"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 6. İŞ MAKİNESİ KİRALAMA
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "is-makinesi-kiralama",
        name: "İş Makinesi Kiralama",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Hadımköy", "Bolluca", "Taşoluk"],
        seo: {
            metaTitle: "İş Makinesi Kiralama | Keçaş Kepçe",
            metaDescription: "Her türlü iş makinesi kiralama çözümleri. JCB kepçe, mini ekskavatör, kamyon temini. Projenize uygun makine parkı. ☎ 0539 477 81 12",
            canonical: "/hizmetler/is-makinesi-kiralama",
            h1: "İş Makinesi Kiralama"
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
            experienceProof: ["Geniş makine parkımızla bölgedeki birçok büyük şantiyenin ekipman tedarikçisiyiz.", "Bölgedeki en geniş iş makinesi ağına erişim"],
            pricingLogic: "Proje bazlı toplu fiyatlandırma avantajı.",
            trustSignals: ["Sözleşmeli çalışma garantisi"]
        },
        media: {
            heroImageAlt: "Arnavutköy iş makinesi filosu",
            galleryAlts: ["Kamyon ve kepçe çalışması", "İş makinesi parkı"]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy ve Hadımköy sanayi bölgelerine hızlı makine temini sağlıyoruz.",
            locationContext: "Hadımköy ve Arnavutköy'deki şantiyeler için hızlı makine temini."
        },
        faq: [
            { question: "Makineleri yakıtlı mı veriyorsunuz?", answer: "Talebe göre yakıt dahil veya hariç (dry lease) kiralama yapabilirsiniz." },
            { question: "Kamyon kiralıyor musunuz?", answer: "Hafriyat işlerinde kepçe ile beraber çalışacak kamyon temini sağlıyoruz." }
        ],
        conversion: { primaryCTA: "Makine İste", secondaryCTA: "Proje Danış" },
        internalLinks: { relatedServices: ["operatorlu-kepce-kiralama", "kazi-isleri", "temel-kazisi"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 7. ARNAVUTKÖY KİRALIK KEPÇE (LOKASYON SAYFASI)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "arnavutkoy-kiralik-kepce",
        name: "Arnavutköy Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Arnavutköy, İstanbul",
        secondaryLocations: ["Hadımköy", "Taşoluk", "Bolluca", "Haraççı", "Şirindere", "Boyalık", "Boğazköy", "İmrahor", "Karlıbayır", "Deliklikaya"],
        seo: {
            metaTitle: "Arnavutköy Kiralık Kepçe | Operatörlü JCB 3CX ☎ 0539 477 81 12",
            metaDescription: "Arnavutköy'de operatörlü kiralık kepçe hizmeti ✓ JCB 3CX kazıyıcı yükleyici ✓ Temel kazısı, dolgu, yıkım ✓ Aynı gün hizmet ✓ Ücretsiz keşif ✓ 22 yıl tecrübe. Hemen arayın!",
            canonical: "/arnavutkoy-kiralik-kepce",
            h1: "Arnavutköy Kiralık Kepçe Hizmeti"
        },
        content: {
            intro: "Arnavutköy'de kiralık kepçe mi arıyorsunuz? Keçaş Kepçe olarak 2004 yılından bu yana Arnavutköy ve çevre ilçelerde JCB 3CX kazıyıcı yükleyici (beko loder) ile operatörlü kiralık kepçe hizmeti sunuyoruz. Temel kazısı, kanal açma, dolgu ve tesviye, bahçe düzenleme, yıkım ve hafriyat işleri dahil her türlü kazı ihtiyacınızda yanınızdayız. Arnavutköy'ün arazi yapısını, zemin özelliklerini ve bölge dinamiklerini 22 yıldır yakından tanıyan yerel bir ekip olarak, hızlı mobilizasyon ve uygun fiyat avantajı sunuyoruz. Tüm kiralık kepçe hizmetlerimiz SRC 4 belgeli ve 10+ yıl tecrübeli operatörümüz dahildir; sadece makine değil, ustalık da kiralarsınız. Ücretsiz saha keşfi sonrası saatlik veya günlük net fiyat teklifi veriyor, sürpriz maliyet çıkarmıyoruz. Arnavutköy merkez, Hadımköy, Taşoluk, Bolluca, Haraççı, Şirindere, Boyalık, Boğazköy ve çevre mahallelerde aynı gün hizmet imkanı sunuyoruz.",
            problemStatement: "Arnavutköy'de kepçe ihtiyacı genellikle acildir: temel kazısı beklenemez, kanalizasyon tıkanması ertelenmez, yıkım işi durdurulmaz. Ancak güvenilir ve tecrübeli operatörlü kiralık kepçe bulmak zor olabilir. İnternette veya tanıdık çevrende bulduğun kepçeciler zamanında gelmeyebilir, fiyat konusunda belirsizlik yaşatabilir veya tecrübesiz operatörle işi uzatabilir. Yanlış makine seçimi hem maliyeti artırır hem de sahada güvenlik riski oluşturur. Amatör operatörle çalışmak altyapı hasarlarına, komşu mülklere zarar vermeye ve iş kazalarına yol açabilir.",
            solutionOverview: "Keçaş Kepçe olarak 'tek makine – tek sorumluluk' prensibiyle çalışıyoruz. Bakımlı JCB 3CX kazıyıcı yükleyicimiz ve tecrübeli operatörümüzle işi baştan sona biz yönetiyoruz. JCB 3CX hem kazı hem yükleme yapabilen çok fonksiyonlu bir iş makinesidir; kompakt boyutu dar alanlarda, güçlü motoru sert zeminlerde verimli çalışmasını sağlar. Ücretsiz saha keşfi sonrası saatlik veya günlük net fiyat teklifi veriyoruz. Operatör, sigorta ve iş güvenliği önlemleri dahildir. Gizli ücret uygulamıyoruz. Arnavutköy'de yerel firma olmamız sayesinde hızlı mobilizasyon, düşük nakliye maliyeti ve aynı gün hizmet avantajı sunuyoruz.",
            processSteps: [
                { title: "İletişim ve Ücretsiz Keşif", description: "Bizi telefonla veya WhatsApp'tan arayın. Projenizin detaylarını dinliyor, ihtiyacınıza uygun çözüm öneriyoruz. Gerekli durumlarda sahaya gelerek ücretsiz keşif yapıyoruz." },
                { title: "Net Fiyat Teklifi ve Planlama", description: "Keşif sonrası işin türüne, süresine ve saha koşullarına göre saatlik veya günlük net fiyat teklifi sunuyoruz. Çalışma günü ve saati birlikte belirlenir. Gizli ücret yoktur." },
                { title: "Kepçe ve Operatör Sahada", description: "Belirlenen tarih ve saatte JCB 3CX kepçemiz ve tecrübeli operatörümüz iş yerinizde hazır olur. Tüm iş güvenliği önlemleri alınmış durumdadır." },
                { title: "İş Tamamlama ve Temiz Teslim", description: "Operatörümüz işi profesyonelce tamamlar, saha temiz bırakılır. Çalışılan süre üzerinden puantaj tutulur. Memnuniyet garantili teslim yapılır." }
            ],
            benefits: [
                "Arnavutköy odaklı hızlı mobilizasyon – aynı gün hizmet",
                "Operatörlü kiralama – makine + operatör + sigorta dahil",
                "JCB 3CX ile kazı, yükleme, dolgu, tesviye tek makinede",
                "22 yıllık yerel sektör tecrübesi (2004'ten beri)",
                "SRC 4 belgeli ve 10+ yıl tecrübeli operatör",
                "Ücretsiz saha keşfi ve net fiyat teklifi",
                "Saatlik veya günlük esnek kiralama seçenekleri",
                "Dar alanlarda çalışabilme – JCB 3CX kompakt boyut",
                "7/24 acil durum desteği",
                "Sigortalı ekipman ve operatörle güvenli çalışma",
                "Sürpriz maliyet yok – şeffaf fiyatlandırma",
                "Arnavutköy zemin yapısına hakim deneyimli ekip"
            ],
            useCases: [
                "Konut ve villa temel kazısı",
                "Kanalizasyon ve altyapı kanal açma",
                "Bahçe düzenleme ve peyzaj hazırlığı",
                "Dolgu ve arazi tesviye işleri",
                "Duvar, kömürlük ve küçük yapı yıkımı",
                "Hafriyat yükleme ve nakliye",
                "Arsa hazırlama ve reglaj",
                "Havuz yeri kazısı",
                "Toprak sıkıştırma ve zemin düzeltme",
                "İstinat duvarı temeli açma",
                "Müteahhit firmalarına taşeron kepçe desteği",
                "Belediye altyapı ve yol açma projeleri"
            ],
            experienceProof: [
                "2004'ten bu yana Arnavutköy ve çevresinde 500+ başarılı proje",
                "JCB 3CX beko loder – sektörün en güvenilir kazıyıcı yükleyicisi",
                "SRC 4 belgeli ve 10+ yıl tecrübeli operatör kadrosu",
                "JCB yetkili servisi ile düzenli bakım anlaşması",
                "İş Sağlığı ve Güvenliği sertifikalı çalışma",
                "Arnavutköy'de yüzlerce müteahhit ve bireysel müşteri referansı"
            ],
            pricingLogic: "Arnavutköy kiralık kepçe fiyatlarımız işin türüne, süresine ve saha koşullarına göre belirlenir. Saatlik veya günlük kiralama seçenekleri mevcuttur. Operatör, sigorta ve iş güvenliği dahildir. Uzun süreli projeler için özel indirimler sunuyoruz. Ücretsiz saha keşfi sonrası net ve şeffaf fiyat teklifi verilir – gizli ücret yoktur. Yakıt dahil veya hariç seçenekler mevcuttur. Fiyat bilgisi için 0539 477 81 12 numaralı telefondan bize ulaşabilirsiniz.",
            trustSignals: [
                "22 yıl kesintisiz hizmet – 2004'ten beri Arnavutköy'de",
                "Yerel Arnavutköy firması – hızlı ulaşım avantajı",
                "Tam sigortalı ekipman ve operatörle güvenli çalışma",
                "SGK'lı ve belgeli çalışanlar",
                "Gerçek saha fotoğrafları ile kanıtlanmış iş kalitesi",
                "JCB yetkili servisi bakım garantili ekipman",
                "Operatörlü ve sigortalı çalışma – iş kazası riski minimumda",
                "Müşteri memnuniyeti odaklı hizmet anlayışı"
            ]
        },
        media: {
            heroImageAlt: "Arnavutköy'de JCB 3CX ile kiralık kepçe çalışması – operatörlü kepçe kiralama",
            heroImage: "/assets/arnavutkoy-jcb-3cx-kepce-arazi-calismasi.avif",
            galleryImages: [
                {
                    src: "/assets/arnavutkoy-jcb-3cx-kepce-arazi-calismasi.avif",
                    alt: "Arnavutköy kiralık kepçe – JCB 3CX ile arazi kazı çalışması"
                },
                {
                    src: "/assets/arnavutkoy-kepce-operatoru-tesviye-calismasi.avif",
                    alt: "Arnavutköy'de kepçe operatörü ile tesviye ve dolgu çalışması"
                },
                {
                    src: "/assets/arnavutkoy-temel-kazisi-hafriyat-calismasi.avif",
                    alt: "Arnavutköy kiralık kepçe ile temel kazısı ve hafriyat çalışması"
                }
            ],
            galleryAlts: [
                "Arnavutköy kiralık kepçe kazı çalışması detay görüntüsü",
                "JCB 3CX ile dolgu ve tesviye işlemi – Arnavutköy",
                "Arnavutköy kepçe yıkım ve hafriyat işi"
            ]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy merkez başta olmak üzere Hadımköy, Taşoluk, Bolluca, Haraççı, Şirindere, Boyalık, Boğazköy, İmrahor, Karlıbayır ve Deliklikaya mahallelerinde aktif kiralık kepçe hizmeti veriyoruz. Arnavutköy'ün tüm köy ve mahallelerine aynı gün ulaşım sağlıyoruz.",
            locationContext: "Arnavutköy, İstanbul'un en hızlı gelişen ilçelerinden biridir. Yeni konut projeleri, villa inşaatları, sanayi alanları ve tarım arazileri ile sürekli kepçe ihtiyacı olan bir bölgedir. Keçaş Kepçe olarak 22 yıldır bu bölgede yaşıyor ve çalışıyoruz. Arnavutköy'ün killi, kayalık ve engebeli arazi yapısını yakından tanıyoruz. Bu yerel bilgi birikimi sayesinde doğru ekipman seçimi yapıyor, işinizi hızlı ve sorunsuz tamamlıyoruz."
        },
        faq: [
            {
                question: "Arnavutköy kiralık kepçe fiyatları ne kadar?",
                answer: "Arnavutköy kiralık kepçe fiyatlarımız işin türüne, süresine ve saha koşullarına göre değişmektedir. Saatlik veya günlük kiralama seçeneklerimiz mevcuttur. Operatör ve sigorta dahildir. Ücretsiz saha keşfi sonrası net fiyat teklifi sunuyoruz. Güncel fiyat bilgisi için 0539 477 81 12 numaralı telefondan bize ulaşabilirsiniz."
            },
            {
                question: "Arnavutköy'de aynı gün kiralık kepçe hizmeti alabilir miyim?",
                answer: "Evet, Arnavutköy ve çevre mahallelerde müsaitlik durumuna göre aynı gün kiralık kepçe hizmeti sağlıyoruz. Yerel firma olmamız sayesinde hızlı mobilizasyon avantajımız vardır. Acil durumlar için 7/24 ulaşılabilir durumdayız."
            },
            {
                question: "Kiralık kepçe operatörlü mü geliyor?",
                answer: "Evet, tüm kiralık kepçe hizmetlerimiz tecrübeli ve sertifikalı operatör dahildir. Operatörümüz SRC 4 belgeli ve 10+ yıl iş makinesi tecrübesine sahiptir. Sadece makine değil, makineyi en iyi şekilde kullanacak uzmanlık da dahildir."
            },
            {
                question: "JCB 3CX kepçe ile hangi işler yapılabilir?",
                answer: "JCB 3CX hem kazıcı hem yükleyici fonksiyonuna sahip çok yönlü bir iş makinesidir. Temel kazısı, kanal açma, dolgu ve tesviye, bahçe düzenleme, yıkım, hafriyat yükleme, toprak sıkıştırma ve arazi düzeltme gibi geniş bir yelpazede kullanılır. Kompakt boyutu dar alanlarda da rahatlıkla çalışmasını sağlar."
            },
            {
                question: "Arnavutköy'de hangi mahallelere hizmet veriyorsunuz?",
                answer: "Arnavutköy merkez, Hadımköy, Taşoluk, Bolluca, Haraççı, Şirindere, Boyalık, Boğazköy, İmrahor, Karlıbayır ve Deliklikaya dahil Arnavutköy'ün tüm mahallelerine kiralık kepçe hizmeti veriyoruz."
            },
            {
                question: "Kepçe kiralama için ücretsiz keşif yapıyor musunuz?",
                answer: "Evet, Arnavutköy genelinde tüm kiralık kepçe hizmetlerimiz için ücretsiz saha keşfi yapıyoruz. Keşif sonrası işin kapsamına göre net ve şeffaf fiyat teklifi sunuyoruz. Gizli ücret uygulamıyoruz."
            },
            {
                question: "Kiralık kepçe sigortalı mı?",
                answer: "Evet, tüm ekipmanlarımız ve operatörlerimiz tam sigortalıdır. İş kazalarına karşı gerekli tüm iş güvenliği önlemleri alınmıştır. Güvenli çalışma prosedürlerine tam uyum sağlıyoruz."
            },
            {
                question: "Saatlik mi yoksa günlük mü kiralama yapılıyor?",
                answer: "Her iki seçenek de mevcuttur. Küçük işler için saatlik, büyük projeler için günlük kiralama daha avantajlıdır. Uzun süreli projeler için özel indirimler sunuyoruz. İhtiyacınıza en uygun seçeneği birlikte belirleyelim."
            }
        ],
        conversion: { primaryCTA: "Hemen Ara: 0539 477 81 12", secondaryCTA: "Ücretsiz Keşif İste" },
        internalLinks: { relatedServices: ["operatorlu-kepce-kiralama", "kazi-isleri", "dolgu-tesviye", "yikim-hizmetleri", "temel-kazisi", "yunus-emre-kiralik-kepce"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 8. YUNUS EMRE MAHALLESİ KİRALIK KEPÇE (PILLAR)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "yunus-emre-kiralik-kepce",
        name: "Yunus Emre Mahallesi Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Yunus Emre Mahallesi, Arnavutköy",
        secondaryLocations: ["Arnavutköy Merkez", "Hadımköy", "Taşoluk", "Bolluca", "Haraççı"],
        seo: {
            metaTitle: "Yunus Emre Mahallesi Kiralık Kepçe | Arnavutköy ☎ 0539 477 81 12",
            metaDescription: "Yunus Emre Mahallesi'nde operatörlü kiralık kepçe hizmeti ✓ JCB 3CX ✓ Kazı, temel, dolgu, yıkım ✓ Aynı gün hizmet ✓ Ücretsiz keşif ✓ 22 yıl tecrübe. Hemen arayın!",
            canonical: "/yunus-emre-kiralik-kepce",
            h1: "Yunus Emre Mahallesi Kiralık Kepçe Hizmeti"
        },
        content: {
            intro: "Arnavutköy Yunus Emre Mahallesi'nde kiralık kepçe mi arıyorsunuz? Keçaş Kepçe olarak 2004 yılından bu yana Yunus Emre Mahallesi ve çevre bölgelerde JCB 3CX kazıyıcı yükleyici ile operatörlü kiralık kepçe hizmeti sunuyoruz. Yunus Emre Mahallesi, Arnavutköy'ün hızla gelişen konut bölgelerinden biridir ve sürekli yeni inşaat, altyapı ve peyzaj projeleri ile kepçe ihtiyacı artmaktadır. Temel kazısı, kanal açma, dolgu ve tesviye, bahçe düzenleme, yıkım ve hafriyat işleri dahil her türlü kazı ihtiyacınızda Yunus Emre Mahallesi'ne hızlı ulaşım avantajımızla yanınızdayız. SRC 4 belgeli ve 10+ yıl tecrübeli operatörümüz dahildir. Ücretsiz saha keşfi sonrası saatlik veya günlük net fiyat teklifi veriyor, sürpriz maliyet çıkarmıyoruz. Yunus Emre Mahallesi'nde aynı gün hizmet imkanı sunuyoruz.",
            problemStatement: "Yunus Emre Mahallesi'nde yeni yapılaşma hızla devam etmektedir. Villa inşaatları, müstakil ev projeleri ve bahçe düzenlemeleri için kepçe ihtiyacı sürekli artmaktadır. Ancak mahalle düzeyinde hızlı ve güvenilir operatörlü kiralık kepçe bulmak kolay değildir. Uzak bölgelerden gelen kepçeciler yüksek nakliye maliyeti çıkarır, mahallenin dar sokaklarını ve arazi yapısını bilmez. Tecrübesiz operatörle çalışmak hem zaman kaybı hem güvenlik riski yaratır.",
            solutionOverview: "Keçaş Kepçe olarak Arnavutköy'de yerleşik bir firma olmamız sayesinde Yunus Emre Mahallesi'ne dakikalar içinde ulaşırız. JCB 3CX kazıyıcı yükleyicimiz hem kazı hem yükleme yapabilir, kompakt boyutu dar sokaklarda ve bahçe içlerinde rahatlıkla çalışmasını sağlar. 22 yıllık yerel tecrübemizle mahallenin zemin yapısını tanıyoruz. Ücretsiz keşif, net fiyat, sigortalı çalışma ve memnuniyet garantisi sunuyoruz.",
            processSteps: [
                { title: "İletişim ve Ücretsiz Keşif", description: "Bizi telefonla veya WhatsApp'tan arayın. Yunus Emre Mahallesi'ndeki projenizin detaylarını dinliyoruz. Gerekli durumlarda sahaya gelerek ücretsiz keşif yapıyoruz." },
                { title: "Net Fiyat Teklifi", description: "Keşif sonrası işin türüne ve süresine göre saatlik veya günlük net fiyat teklifi sunuyoruz. Gizli ücret yoktur." },
                { title: "Kepçe ve Operatör Sahada", description: "Belirlenen tarihte JCB 3CX kepçemiz ve tecrübeli operatörümüz Yunus Emre Mahallesi'ndeki iş yerinizde hazır olur." },
                { title: "Temiz Teslim", description: "İş profesyonelce tamamlanır, saha temiz bırakılır. Çalışma süresi puantajla kayıt altına alınır." }
            ],
            benefits: [
                "Yunus Emre Mahallesi'ne hızlı ulaşım – aynı gün hizmet",
                "Operatörlü kiralama – makine + operatör + sigorta dahil",
                "JCB 3CX ile kazı, yükleme, dolgu, tesviye tek makinede",
                "22 yıllık yerel sektör tecrübesi",
                "SRC 4 belgeli ve 10+ yıl tecrübeli operatör",
                "Ücretsiz saha keşfi ve net fiyat teklifi",
                "Saatlik veya günlük esnek kiralama",
                "Dar sokaklarda çalışabilme – JCB 3CX kompakt boyut",
                "7/24 acil durum desteği",
                "Sigortalı ekipman ve operatörle güvenli çalışma",
                "Mahallenin zemin yapısına hakim deneyimli ekip",
                "Sürpriz maliyet yok – şeffaf fiyatlandırma"
            ],
            useCases: [
                "Villa ve müstakil ev temel kazısı",
                "Bahçe düzenleme ve peyzaj hazırlığı",
                "Kanalizasyon ve altyapı kanal açma",
                "Dolgu ve arazi tesviye işleri",
                "Eski yapı ve duvar yıkımı",
                "Hafriyat yükleme ve nakliye",
                "Arsa hazırlama ve reglaj",
                "Havuz yeri kazısı",
                "İstinat duvarı temeli açma",
                "Bahçe duvarı sökümü ve yenileme"
            ],
            experienceProof: [
                "Arnavutköy'de 22 yıldır faaliyet – 500+ başarılı proje",
                "Yunus Emre Mahallesi ve çevre mahallelerde onlarca tamamlanmış iş",
                "JCB 3CX beko loder – sektörün en güvenilir ekipmanı",
                "SRC 4 belgeli ve 10+ yıl tecrübeli operatör kadrosu",
                "JCB yetkili servisi ile düzenli bakım anlaşması",
                "Yüzlerce müteahhit ve bireysel müşteri referansı"
            ],
            pricingLogic: "Yunus Emre Mahallesi kiralık kepçe fiyatlarımız işin türüne, süresine ve saha koşullarına göre belirlenir. Saatlik veya günlük kiralama seçenekleri mevcuttur. Operatör, sigorta ve iş güvenliği dahildir. Ücretsiz saha keşfi sonrası net fiyat teklifi verilir. Gizli ücret yoktur. Fiyat bilgisi için 0539 477 81 12 numaralı telefondan bize ulaşabilirsiniz.",
            trustSignals: [
                "22 yıl kesintisiz hizmet – 2004'ten beri",
                "Yerel Arnavutköy firması – Yunus Emre'ye hızlı ulaşım",
                "Tam sigortalı ekipman ve operatör",
                "SGK'lı ve belgeli çalışanlar",
                "Gerçek saha fotoğrafları ile kanıtlanmış kalite",
                "JCB yetkili servisi bakım garantili ekipman",
                "Operatörlü ve sigortalı çalışma",
                "Müşteri memnuniyeti odaklı hizmet"
            ]
        },
        media: {
            heroImageAlt: "Yunus Emre Mahallesi'nde JCB 3CX ile kiralık kepçe çalışması",
            heroImage: "/assets/arnavutkoy-jcb-3cx-kepce-arazi-calismasi.avif",
            galleryImages: [
                { src: "/assets/arnavutkoy-jcb-3cx-kepce-arazi-calismasi.avif", alt: "Yunus Emre Mahallesi kiralık kepçe – JCB 3CX arazi çalışması" },
                { src: "/assets/arnavutkoy-kepce-operatoru-tesviye-calismasi.avif", alt: "Yunus Emre Mahallesi'nde kepçe operatörü ile tesviye çalışması" },
                { src: "/assets/arnavutkoy-temel-kazisi-hafriyat-calismasi.avif", alt: "Yunus Emre Mahallesi kiralık kepçe ile temel kazısı" }
            ],
            galleryAlts: [
                "Yunus Emre Mahallesi kepçe kazı çalışması",
                "JCB 3CX ile dolgu ve tesviye – Yunus Emre",
                "Yunus Emre Mahallesi yıkım ve hafriyat işi"
            ]
        },
        localSEO: {
            serviceAreaText: "Yunus Emre Mahallesi başta olmak üzere Arnavutköy merkez, Hadımköy, Taşoluk, Bolluca ve çevre mahallelerde aktif kiralık kepçe hizmeti veriyoruz.",
            locationContext: "Yunus Emre Mahallesi, Arnavutköy'ün gelişen konut bölgelerinden biridir. Yeni villa projeleri, müstakil ev inşaatları ve bahçe düzenleme çalışmaları ile sürekli kepçe ihtiyacı olan bir mahalledir. Keçaş Kepçe olarak bu mahallenin zemin yapısını ve arazi özelliklerini yakından tanıyoruz. Yerel avantajımız sayesinde hızlı mobilizasyon ve uygun fiyat sunuyoruz."
        },
        faq: [
            { question: "Yunus Emre Mahallesi'nde kiralık kepçe fiyatları ne kadar?", answer: "Yunus Emre Mahallesi kiralık kepçe fiyatlarımız işin türüne ve süresine göre değişmektedir. Saatlik veya günlük kiralama seçeneklerimiz mevcuttur. Operatör ve sigorta dahildir. Ücretsiz keşif sonrası net fiyat teklifi sunuyoruz. Güncel fiyat için 0539 477 81 12'yi arayabilirsiniz." },
            { question: "Yunus Emre Mahallesi'ne aynı gün kepçe geliyor mu?", answer: "Evet, Arnavutköy'de yerleşik firmamız sayesinde Yunus Emre Mahallesi'ne müsaitlik durumuna göre aynı gün hizmet sağlıyoruz. Acil durumlar için 7/24 ulaşılabilir durumdayız." },
            { question: "Operatör dahil mi?", answer: "Evet, tüm kiralık kepçe hizmetlerimiz SRC 4 belgeli ve 10+ yıl tecrübeli operatör dahildir. Sadece makine değil, uzmanlık da kiralarsınız." },
            { question: "Yunus Emre Mahallesi'nde hangi işler yapılır?", answer: "Temel kazısı, kanal açma, dolgu ve tesviye, bahçe düzenleme, yıkım, hafriyat yükleme ve arsa hazırlama gibi her türlü kazı işi yapılır." },
            { question: "Dar sokaklarda çalışabilir misiniz?", answer: "Evet, JCB 3CX kompakt boyutları sayesinde Yunus Emre Mahallesi'nin dar sokaklarında ve bahçe içlerinde rahatlıkla çalışabilir." },
            { question: "Ücretsiz keşif yapıyor musunuz?", answer: "Evet, Yunus Emre Mahallesi'ndeki tüm projeler için ücretsiz saha keşfi yapıyoruz. Keşif sonrası net ve şeffaf fiyat teklifi sunuyoruz." }
        ],
        conversion: { primaryCTA: "Hemen Ara: 0539 477 81 12", secondaryCTA: "Ücretsiz Keşif İste" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "yunus-emre-kazi-isleri", "yunus-emre-temel-kazisi", "yunus-emre-yikim", "operatorlu-kepce-kiralama"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 9. YUNUS EMRE MAHALLESİ KAZI İŞLERİ (CLUSTER)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "yunus-emre-kazi-isleri",
        name: "Yunus Emre Mahallesi Kazı İşleri",
        industry: "construction",
        serviceType: "local",
        primaryLocation: "Yunus Emre Mahallesi, Arnavutköy",
        secondaryLocations: ["Arnavutköy Merkez", "Hadımköy", "Taşoluk"],
        seo: {
            metaTitle: "Yunus Emre Mahallesi Kazı İşleri | Arnavutköy – Keçaş Kepçe",
            metaDescription: "Yunus Emre Mahallesi'nde profesyonel kazı ve hafriyat hizmeti ✓ JCB 3CX ✓ Toprak, kanal, temel kazısı ✓ Operatörlü ✓ Ücretsiz keşif ✓ 22 yıl tecrübe. ☎ 0539 477 81 12",
            canonical: "/yunus-emre-kazi-isleri",
            h1: "Yunus Emre Mahallesi Kazı İşleri"
        },
        content: {
            intro: "Arnavutköy Yunus Emre Mahallesi'nde kazı ve hafriyat işleri için profesyonel çözümler sunuyoruz. İnşaat temeli, bahçe düzenleme, kanal açma, altyapı kazısı veya peyzaj hazırlığı gibi tüm kazı ihtiyaçlarınızda JCB 3CX kepçemiz ve tecrübeli operatörümüzle hizmetinizdeyiz. Yunus Emre Mahallesi'nin zemin yapısını yakından tanıyoruz: bölgedeki killi ve taşlı zemin katmanlarına uygun ekipman ve tekniklerle çalışıyoruz. 22 yıllık sektör tecrübemizle hızlı, güvenli ve ekonomik kazı hizmeti garantisi veriyoruz. Ücretsiz saha keşfi sonrası net fiyat teklifi sunuyoruz.",
            problemStatement: "Kazı işleri doğru ekipman ve uzmanlık gerektirir. Yunus Emre Mahallesi'ndeki yeni yapılaşma alanlarında zemin yapısı değişkendir; kil, taş ve kayalık bölgeler bulunabilir. Yanlış yapılan kazılar zemin çökmesi, altyapı hasarları ve maliyet artışlarına neden olabilir. Tecrübesiz ekiplerle çalışmak hem zaman kaybı hem güvenlik riski yaratır.",
            solutionOverview: "Keçaş Kepçe olarak Yunus Emre Mahallesi'nin zemin yapısına uygun kazı yöntemleri ve JCB 3CX ekipmanı kullanıyoruz. Operatörümüz bölgenin arazi koşullarını bilerek hassas ve güvenli kazı yapıyor. Altyapıya zarar vermeden, milimetrik hassasiyette çalışıyoruz. Kazı sonrası hafriyat yükleme ve nakliye desteği de sunuyoruz.",
            processSteps: [
                { title: "Saha İncelemesi", description: "Yunus Emre Mahallesi'ndeki kazı yapılacak alanın zemin yapısı, mevcut altyapı ve metrajı incelenir." },
                { title: "Kazı Planlaması", description: "Kazı derinliği, hafriyat döküm yeri ve iş süresi planlanır. Zemin türüne göre uygun kova ve teknik seçilir." },
                { title: "Profesyonel Kazı", description: "JCB 3CX kepçe ile hassas ve güvenli kazı işlemi gerçekleştirilir. Altyapı hatları korunur." },
                { title: "Hafriyat ve Teslim", description: "Çıkan toprak uygun döküm sahasına nakledilir. Saha temiz ve düzgün bırakılır." }
            ],
            benefits: [
                "Yunus Emre Mahallesi'ne hızlı ulaşım avantajı",
                "Zemin yapısına uygun ekipman ve teknik",
                "Hassas ve altyapı korumalı kazı",
                "Hafriyat nakliye desteği",
                "22 yıllık kazı tecrübesi",
                "Ücretsiz keşif ve net fiyat",
                "Sigortalı çalışma garantisi",
                "Hızlı iş tamamlama"
            ],
            useCases: [
                "İnşaat sahası kazı hazırlığı",
                "Bahçe düzenleme için zemin kazısı",
                "Havuz yeri kazısı",
                "Kanalizasyon ve altyapı kanal açma",
                "Toprak taşıma ve hafriyat",
                "Otopark alanı hazırlama",
                "Yol açma ve stabilize zemin kazısı",
                "Peyzaj için temel zemin hazırlığı"
            ],
            experienceProof: [
                "22 yıldır Arnavutköy genelinde binlerce m³ kazı ve hafriyat işi",
                "Yunus Emre Mahallesi'nde onlarca kazı projesi referansı",
                "Uzman operatör kadrosu ve bakımlı ekipman"
            ],
            pricingLogic: "Kazı işlerinde metreküp veya saatlik çalışma bazlı fiyatlandırma yapılır. Yunus Emre Mahallesi'ne yakınlığımız sayesinde nakliye maliyetleri düşüktür. Ücretsiz keşif ile net maliyet belirlenir.",
            trustSignals: [
                "Tam sigortalı çalışma",
                "İş güvenliği önlemleri",
                "Zamanında teslim garantisi",
                "Altyapı koruma hassasiyeti"
            ]
        },
        media: {
            heroImageAlt: "Yunus Emre Mahallesi'nde JCB 3CX ile kazı çalışması",
            heroImage: "/assets/arnavutkoy-sokak-kazi-calismasi-jcb-kepce.avif",
            galleryImages: [
                { src: "/assets/arnavutkoy-sokak-kazi-calismasi-jcb-kepce.avif", alt: "Yunus Emre Mahallesi kazı çalışması – JCB kepçe" },
                { src: "/assets/arnavutkoy-kanal-kazi-altyapi-calismasi.avif", alt: "Yunus Emre Mahallesi'nde kanal kazısı ve altyapı çalışması" },
                { src: "/assets/arnavutkoy-derin-kazi-jcb-kepce-hidrolik-kirici.avif", alt: "Yunus Emre Mahallesi'nde derin kazı – JCB kepçe" }
            ],
            galleryAlts: [
                "Yunus Emre Mahallesi kazı detay görüntüsü",
                "Hafriyat yükleme – Yunus Emre",
                "Altyapı kazısı – Yunus Emre Mahallesi"
            ]
        },
        localSEO: {
            serviceAreaText: "Yunus Emre Mahallesi ve çevre mahallelerde profesyonel kazı hizmeti sunuyoruz.",
            locationContext: "Yunus Emre Mahallesi'nin zemin yapısı killi ve yer yer taşlı olabilir. Bu bölgede kazı yaparken doğru kova seçimi ve kademeli kazı tekniği önemlidir. 22 yıllık Arnavutköy tecrübemizle bu zemin koşullarına hakimiz."
        },
        faq: [
            { question: "Yunus Emre Mahallesi'nde kazı işi ne kadar sürer?", answer: "İşin büyüklüğüne ve zemin yapısına göre değişir. Küçük bahçe kazıları birkaç saat, temel kazıları 1-3 gün sürebilir. Keşif sonrası kesin süre bildirilir." },
            { question: "Hafriyatı döküyor musunuz?", answer: "Evet, çıkan hafriyatın yasal döküm sahasına nakliyesi konusunda çözüm ortaklarımızla destek sağlıyoruz." },
            { question: "Yunus Emre Mahallesi'nde kanal açma yapıyor musunuz?", answer: "Evet, kanalizasyon, su, doğalgaz ve altyapı kanalları için dar ve derin kazı yapabiliyoruz." },
            { question: "Zemin çok sert olursa ne yapıyorsunuz?", answer: "JCB 3CX kırıcı uç ataşmanımız mevcuttur. Kaya veya sert zeminlerde kırım yaparak kazıya devam ediyoruz." },
            { question: "Kazı sırasında mevcut altyapıya zarar verir misiniz?", answer: "Kazı öncesi altyapı hatları tespit edilir, operatörümüz hassas çalışarak mevcut boru ve kablolara zarar vermeden kazı yapar." },
            { question: "Kazı işi fiyatı nasıl hesaplanır?", answer: "Metreküp veya saatlik çalışma bazlı hesaplanır. Ücretsiz keşif sonrası net fiyat teklifi sunuyoruz." }
        ],
        conversion: { primaryCTA: "Kazı İçin Fiyat Al", secondaryCTA: "Ücretsiz Keşif İste" },
        internalLinks: { relatedServices: ["yunus-emre-kiralik-kepce", "yunus-emre-temel-kazisi", "kazi-isleri", "dolgu-tesviye"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 10. YUNUS EMRE MAHALLESİ TEMEL KAZISI (CLUSTER)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "yunus-emre-temel-kazisi",
        name: "Yunus Emre Mahallesi Temel Kazısı",
        industry: "construction",
        serviceType: "local",
        primaryLocation: "Yunus Emre Mahallesi, Arnavutköy",
        secondaryLocations: ["Arnavutköy Merkez", "Bolluca", "Haraççı"],
        seo: {
            metaTitle: "Yunus Emre Mahallesi Temel Kazısı | Arnavutköy – Keçaş Kepçe",
            metaDescription: "Yunus Emre Mahallesi'nde bina, villa ve yapı temel kazısı ✓ Projeye uygun hassas kazı ✓ JCB 3CX ✓ Operatörlü ✓ Ücretsiz keşif. ☎ 0539 477 81 12",
            canonical: "/yunus-emre-temel-kazisi",
            h1: "Yunus Emre Mahallesi Temel Kazısı"
        },
        content: {
            intro: "Arnavutköy Yunus Emre Mahallesi'nde villa, müstakil ev ve yapı projeleri için profesyonel temel kazısı hizmeti veriyoruz. Her sağlam yapının arkasında doğru yapılmış bir temel kazısı vardır. Projeye tam uygun ölçülerde, hassas kot kontrolüyle ve güvenli şev oluşturarak temel kazısı yapıyoruz. Yunus Emre Mahallesi'ndeki zemin yapısına hakimiz: kil, taş ve kayalık zemin katmanlarında deneyimli operatörümüz ile doğru kazı tekniğini uyguluyoruz. JCB 3CX kepçemiz ve kırıcı uç ataşmanımız ile en zorlu zeminlerde bile sorunsuz temel açıyoruz. Grobetona hazır, temiz ve düzgün zemin teslim ediyoruz.",
            problemStatement: "Temel kazısında yapılan hatalar binanın statik yapısını, ömrünü ve maliyetini doğrudan etkiler. Yunus Emre Mahallesi'nde yer yer kaya ve sert kil zemin bulunur. Fazla derin kazı veya yetersiz sıkıştırma ileride telafisi zor sorunlara yol açar. İnşaat ruhsatına uygun olmayan kazılar belediye sorunlarına neden olabilir.",
            solutionOverview: "Mimari ve statik projenize tam sadık kalarak çalışıyoruz. Lazer ölçüm ve nivo ile kot kontrolü yapıyor, zemini örselemeden kademe kademe kazıyoruz. JCB 3CX kırıcı ucumuz ile kaya zemine de hakimiz. Grobetona hazır, temiz bir temel tabanı teslim ediyoruz. Çıkan hafriyatın nakliyesi konusunda da destek sağlıyoruz.",
            processSteps: [
                { title: "Proje ve Kot İnceleme", description: "Temel aplikasyon projesi, kazı kotları ve zemin etüdü incelenir. Yunus Emre Mahallesi'nin zemin özelliklerine göre hazırlık yapılır." },
                { title: "Saha İşaretleme", description: "Harita mühendisi veya teknikeri eşliğinde kazı sınırları arazi üzerinde işaretlenir." },
                { title: "Kademeli Temel Kazısı", description: "Zemin yapısına göre kademeli olarak inilir. Kaya zemin karşılaşılırsa kırıcı uç devreye girer. Güvenli şevler oluşturulur." },
                { title: "Tesviye ve Teslim", description: "Temel tabanı projeye uygun şekilde tesviye edilir. Grobetona hazır, temiz zemin teslim edilir." }
            ],
            benefits: [
                "Projeye %100 uygun hassas kazı",
                "Lazer/nivo ile kot kontrolü",
                "Kaya zemine hakimiyet – kırıcı uç mevcut",
                "Güvenli şev oluşturma",
                "22 yıllık temel kazısı tecrübesi",
                "Grobetona hazır temiz teslim",
                "Ücretsiz keşif ve net fiyat",
                "Hızlı iş tamamlama"
            ],
            useCases: [
                "Villa ve müstakil ev temel kazısı",
                "Apartman temel kazısı",
                "Ticari yapı temeli",
                "İstinat duvarı temeli",
                "Havuz temeli kazısı",
                "Çelik konstrüksiyon temeli",
                "Depo ve atölye temeli",
                "Bahçe yapıları temeli"
            ],
            experienceProof: [
                "Arnavutköy bölgesinde 100+ inşaat projesinin temel kazısı tamamlandı",
                "Yunus Emre Mahallesi ve çevre mahallelerdeki villa projelerinde aktif çalışma",
                "Zorlu zemin koşullarında kanıtlanmış tecrübe",
                "Müteahhitlerle sürekli iş birliği"
            ],
            pricingLogic: "Temel kazısı fiyatı proje metrajı, kazı derinliği ve zemin yapısına göre belirlenir. Hafriyat hacmi ve nakliye mesafesi de fiyata etki eder. Ücretsiz keşif sonrası net fiyat teklifi verilir.",
            trustSignals: [
                "Projeye sadakat garantisi",
                "Mühendis kontrolünde çalışma imkanı",
                "İnşaat ruhsatına uygun kazı",
                "Sigortalı çalışma",
                "Arnavutköy zemin tecrübesi"
            ]
        },
        media: {
            heroImageAlt: "Yunus Emre Mahallesi'nde temel kazısı çalışması",
            heroImage: "/assets/arnavutkoy-temel-kazisi-hafriyat-calismasi.avif",
            galleryImages: [
                { src: "/assets/arnavutkoy-temel-kazisi-hafriyat-calismasi.avif", alt: "Yunus Emre Mahallesi temel kazısı – hafriyat çalışması" },
                { src: "/assets/arnavutkoy-derin-kazi-jcb-kepce-hidrolik-kirici.avif", alt: "Yunus Emre'de derin kazı – JCB kırıcı ile" }
            ],
            galleryAlts: [
                "Yunus Emre Mahallesi temel açma çalışması",
                "Villa temeli kazısı – Yunus Emre"
            ]
        },
        localSEO: {
            serviceAreaText: "Yunus Emre Mahallesi ve çevre bölgelerde tüm zemin türlerinde temel kazısı yapıyoruz.",
            locationContext: "Yunus Emre Mahallesi'nde yeni konut projeleri hızla artmaktadır. Villa ve müstakil ev inşaatları için temel kazısı ihtiyacı süreklidir. Bölgenin kil ve taş içeren zemin yapısına hakimiz, karşılaşılabilecek zorlu zemin koşullarına hazırlıklıyız."
        },
        faq: [
            { question: "Yunus Emre Mahallesi'nde temel kazısı yapıyor musunuz?", answer: "Evet, Yunus Emre Mahallesi'nde villa, müstakil ev ve her türlü yapı için projeye uygun temel kazısı hizmeti veriyoruz." },
            { question: "Kaya zemin çıkarsa ne yapıyorsunuz?", answer: "JCB 3CX kırıcı uç ataşmanımız mevcuttur. Kaya ve sert zeminlerde kırım yaparak kazıya devam ediyoruz." },
            { question: "Derin kazı yapabilir misiniz?", answer: "JCB 3CX ile belirli derinliğe kadar kazı yapılabilir. Çok derin hafriyatlarda ekskavatör temini de sağlıyoruz." },
            { question: "Temel kazısı ne kadar sürer?", answer: "Villa temeli genellikle 1-2 günde tamamlanır. Büyük projeler proje ölçeğine göre değişir. Keşif sonrası kesin süre verilir." },
            { question: "Hafriyatı siz kaldırıyor musunuz?", answer: "Evet, çıkan hafriyatın kamyonlara yüklenmesi ve yasal döküm sahasına nakliyesi konusunda destek sağlıyoruz." },
            { question: "Temel kazısı fiyatı ne kadar?", answer: "Fiyat proje metrajı, kazı derinliği ve zemin yapısına göre değişir. Ücretsiz keşif sonrası net teklif sunuyoruz." }
        ],
        conversion: { primaryCTA: "Temel Kazısı Fiyatı Al", secondaryCTA: "Proje Gönder" },
        internalLinks: { relatedServices: ["yunus-emre-kiralik-kepce", "yunus-emre-kazi-isleri", "yunus-emre-yikim", "temel-kazisi"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 11. YUNUS EMRE MAHALLESİ YIKIM HİZMETLERİ (CLUSTER)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "yunus-emre-yikim",
        name: "Yunus Emre Mahallesi Yıkım Hizmetleri",
        industry: "demolition",
        serviceType: "local",
        primaryLocation: "Yunus Emre Mahallesi, Arnavutköy",
        secondaryLocations: ["Arnavutköy Merkez", "Taşoluk", "Boğazköy"],
        seo: {
            metaTitle: "Yunus Emre Mahallesi Yıkım Hizmetleri | Arnavutköy – Keçaş Kepçe",
            metaDescription: "Yunus Emre Mahallesi'nde güvenli yıkım hizmeti ✓ Bina, duvar, beton kırma ✓ Moloz dahil ✓ JCB kırıcı ✓ Kontrollü yıkım ✓ Ücretsiz keşif. ☎ 0539 477 81 12",
            canonical: "/yunus-emre-yikim",
            h1: "Yunus Emre Mahallesi Yıkım Hizmetleri"
        },
        content: {
            intro: "Arnavutköy Yunus Emre Mahallesi'nde her türlü yıkım hizmetini güvenli ve kontrollü şekilde gerçekleştiriyoruz. Eski yapı yıkımı, duvar yıkımı, küçük yapı yıkımı (kömürlük, depo, garaj), beton kırma ve moloz temizliği dahil kapsamlı hizmet sunuyoruz. JCB 3CX kepçemiz ve hidrolik kırıcı ataşmanımız ile insan gücünün günler süreceği işi saatler içinde bitiriyoruz. Yunus Emre Mahallesi'ndeki konut yapılarına yakın çalışmalarda komşu binalara ve bahçelere zarar vermeden hassas yıkım garantisi veriyoruz. Yıkım sonrası çıkan molozu yükleyip yasal döküm sahasına nakliye ediyoruz. 22 yıllık tecrübemizle güvenli ve kontrollü yıkım yapıyoruz.",
            problemStatement: "Yıkım işleri yüksek risk içerir. Yunus Emre Mahallesi'nde konutların birbirine yakın olması nedeniyle bilinçsiz yapılan yıkımlar yandaki yapılara, bahçelere ve altyapıya zarar verebilir. Balyozla yıkım günler sürer, hilti ile kırmak kalın duvarlarda yetersiz kalır. Küçük yıkım işleri için büyük firmalar gelmek istemez veya çok yüksek fiyat verir.",
            solutionOverview: "Risk analizi yaparak işe başlıyoruz. Elektrik, su, doğalgaz bağlantılarının kesildiğinden emin olduktan sonra kontrollü yıkım yapıyoruz. JCB 3CX kırıcı ucumuz ile beton duvarları, tabanları ve eski yapıları saatler içinde yıkıyoruz. Çıkan molozu anında yükleyip alanı temiz teslim ediyoruz. Komşu yapılara ve bahçelere zarar vermeme garantisi veriyoruz.",
            processSteps: [
                { title: "Güvenlik Değerlendirme ve Keşif", description: "Yıkılacak yapının durumu incelenir. Çevre güvenliği ve altyapı kontrolü yapılır. Yıkım planı hazırlanır." },
                { title: "Söküm ve Ayıklama", description: "Kapı, pencere gibi yeniden kullanılabilir malzemeler sökülür. Demir ve hurda ayıklanır." },
                { title: "Kontrollü Yıkım", description: "JCB kepçe ve kırıcı ile yapı güvenli şekilde yıkılır. Komşu yapılara zarar verilmez." },
                { title: "Moloz Temizlik ve Teslim", description: "Moloz kamyonlara yüklenir, yasal döküm sahasına gönderilir. Zemin düzeltilerek teslim edilir." }
            ],
            benefits: [
                "Güvenli ve kontrollü yıkım garantisi",
                "Komşu yapılara zarar vermeme hassasiyeti",
                "Anahtar teslim moloz atımı dahil",
                "JCB kırıcı ile hızlı beton kırma",
                "Kırım ve yükleme tek makinede",
                "Dar alanlara giriş imkanı",
                "22 yıllık yıkım tecrübesi",
                "Bahçedeki ağaçlara zarar vermeme garantisi",
                "Ekonomik çözüm – küçük işler için de geliriz",
                "Yasal döküm garantisi"
            ],
            useCases: [
                "Eski yapı ve gecekondu yıkımı",
                "Beton ve briket duvar yıkımı",
                "Bahçe duvarı sökümü ve yenileme",
                "Kömürlük, depo, garaj yıkımı",
                "İstinat duvarı sökümü",
                "Zemin betonu kırma",
                "Eski temel sökümü",
                "Bahçe temizliği – baraka kaldırma",
                "Fabrika ve atölye yenileme yıkımları",
                "Merdiven ve rampa yıkımı"
            ],
            experienceProof: [
                "Arnavutköy bölgesinde 50+ kontrollü yıkım projesi",
                "Yunus Emre Mahallesi ve çevresinde yıkım referansları",
                "İş güvenliği sertifikalı ekip",
                "Hidrolik kırıcı uzmanlığı"
            ],
            pricingLogic: "Yıkım fiyatı yıkılacak alanın büyüklüğü, yapı türü ve çıkacak moloz miktarına göre belirlenir. Moloz nakliyesi dahil veya hariç seçenekler mevcuttur. Küçük yıkımlar için de uygun fiyat sunuyoruz. Ücretsiz keşif sonrası net fiyat teklifi verilir.",
            trustSignals: [
                "Yasal döküm garantisi",
                "Komşu bina koruma hassasiyeti",
                "İş güvenliği önlemleri",
                "Bahçe ve ağaç koruma garantisi",
                "Sigortalı ekipman ve operatör"
            ]
        },
        media: {
            heroImageAlt: "Yunus Emre Mahallesi'nde JCB kepçe ile yıkım çalışması",
            heroImage: "/assets/arnavutkoy-jcb-3cx-kepce-arazi-calismasi.avif",
            galleryAlts: [
                "Yunus Emre Mahallesi yıkım işlemi",
                "Duvar kırım – Yunus Emre",
                "Moloz yükleme – Yunus Emre Mahallesi"
            ]
        },
        localSEO: {
            serviceAreaText: "Yunus Emre Mahallesi ve çevre mahallelerde güvenli yıkım hizmeti sağlıyoruz.",
            locationContext: "Yunus Emre Mahallesi'nde konutların birbirine yakın konumlanması nedeniyle yıkım işlerinde hassasiyet çok önemlidir. 22 yıllık tecrübemizle dar alanlarda, bahçe içlerinde ve komşu yapılara yakın çalışmalarda güvenli yıkım yapıyoruz. Küçük ve orta ölçekli yıkım işleri için de hizmet veriyoruz."
        },
        faq: [
            { question: "Yunus Emre Mahallesi'nde yıkım yapıyor musunuz?", answer: "Evet, Yunus Emre Mahallesi'nde bina, duvar, küçük yapı yıkımı ve beton kırma hizmeti veriyoruz. Moloz nakliyesi dahil anahtar teslim çözüm sunuyoruz." },
            { question: "Yıkım sırasında komşu binalara zarar verir misiniz?", answer: "Hayır, operatörlerimiz çok hassas çalışır. Komşu yapılara, bahçelere ve ağaçlara zarar vermeden sadece hedef yapıyı yıkarız." },
            { question: "Moloz atımı fiyata dahil mi?", answer: "Genellikle yıkım, yükleme ve moloz nakliyesi dahil paket fiyat veriyoruz. İsterseniz moloz hariç fiyat da alabirsiniz." },
            { question: "Küçük yıkım işleri için de gelir misiniz?", answer: "Evet, kömürlük, bahçe duvarı, baraka gibi küçük yıkımlar için de hizmet veriyoruz. Yarım günde bahçenizi tertemiz teslim ediyoruz." },
            { question: "Beton kırma yapıyor musunuz?", answer: "Evet, JCB kırıcımız ile 30-40 cm kalınlığa kadar donatılı betonları rahatlıkla kırabiliyoruz." },
            { question: "Yıkım ruhsatı gerekiyor mu?", answer: "Büyük yapılarda belediye yıkım ruhsatı gerekebilir. Süreci sizin adınıza takip edebiliriz." }
        ],
        conversion: { primaryCTA: "Yıkım Fiyatı Al", secondaryCTA: "Ücretsiz Keşif İste" },
        internalLinks: { relatedServices: ["yunus-emre-kiralik-kepce", "yunus-emre-kazi-isleri", "yunus-emre-temel-kazisi", "yikim-hizmetleri"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 12. HADIMKÖY KİRALIK KEPÇE (SANAYİ BÖLGESİ)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "hadimkoy-kiralik-kepce",
        name: "Hadımköy Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Hadımköy, Arnavutköy",
        secondaryLocations: ["Arnavutköy Merkez", "Şirindere", "Boyalık", "Sazlıbosna"],
        seo: {
            metaTitle: "Hadımköy Kiralık Kepçe | Sanayi & Lojistik Bölge ☎ 0539 477 81 12",
            metaDescription: "Hadımköy'de operatörlü kiralık kepçe ✓ Fabrika, depo, OSB çevresi kazı ✓ Sanayi altyapısı ✓ Büyük çaplı hafriyat ✓ Ağır iş kapasitesi. Hemen arayın!",
            canonical: "/hadimkoy-kiralik-kepce",
            h1: "Hadımköy Kiralık Kepçe – Sanayi ve Lojistik Bölge Hizmeti"
        },
        content: {
            intro: "Hadımköy, Arnavutköy'ün sanayi ve lojistik kalbi. Organize sanayi bölgeleri, fabrikalar, depolar ve lojistik merkezleriyle dolup taşan bu bölgede kepçe ihtiyacı sıradan bir konut inşaatından çok farklıdır. Fabrika zemini hazırlama, depo sahası açma, sanayi kanalizasyonu, ağır tonajlı altyapı kazıları ve geniş çaplı hafriyat işleri burada günlük rutine dönüşmüştür. Keçaş Kepçe olarak Hadımköy'ün sanayi dokusuna hakimiz. TIR trafiğine açık sahalarda, OSB çevrelerinde ve fabrika bahçelerinde çalışma deneyimimiz var. JCB 3CX ekipmanımızın hem kazı hem yükleme kapasitesi, sanayi sahalarındaki çok yönlü ihtiyaçları tek makinede karşılıyor. Büyük çaplı projeler için çoklu gün anlaşmalarıyla maliyet avantajı sunuyoruz.",
            problemStatement: "Hadımköy'deki sanayi tesisleri büyük ölçekli kazı gerektiriyor. Fabrika temeli, depo sahası veya yol açma işleri yüzlerce metreküp hafriyat çıkarılmasını gerektirebilir. Amatör ekiplerle çalışmak hem iş güvenliği riski yaratır hem de sanayi bölgelerinin sıkı denetimlerinde sorun çıkarır. İş makineleri trafiği yoğun bölgelerde koordinasyon ve deneyim şarttır. Ayrıca sanayi alanlarında mevcut altyapı (elektrik, su, doğalgaz, fiber optik) hatlarına zarar verilmemesi hayati önem taşır.",
            solutionOverview: "Hadımköy'ün sanayi alanlarında nasıl çalışılacağını biliyoruz. Fabrika sahibi, müteahhit veya tesis yöneticisi fark etmez; işi sahada koordineli yürütürüz. İş güvenliği prosedürlerine tam uyum sağlar, mevcut altyapı haritalarını operatörümüze aktarır, hassas noktalarda elle kontrol ile makine gücünü birleştiririz. Uzun süreli projelerde günlük kiralama yerine paket fiyat sunarak bütçenizi koruyor, sahada kesintisiz iş sürekliliği sağlıyoruz.",
            processSteps: [
                { title: "Saha Keşfi ve Risk Analizi", description: "Hadımköy'deki tesisi ziyaret ediyoruz. Mevcut altyapı, giriş-çıkış noktaları ve TIR trafiğine göre çalışma planı oluşturuyoruz." },
                { title: "Proje Bazlı Fiyatlandırma", description: "Sanayi projelerinde genellikle günlük veya haftalık paket fiyat daha avantajlıdır. İşin büyüklüğüne göre en uygun teklifi sunuyoruz." },
                { title: "Koordineli Çalışma", description: "Müteahhit, tesis yönetimi ve alt yüklenicilerle koordineli şekilde çalışıyoruz. İş güvenliği önlemleri sahada uygulanıyor." },
                { title: "İş Tamamlama ve Raporlama", description: "Çalışma puantajı tutulur, hafriyat hacmi raporlanır. Saha temiz ve düzgün bırakılır." }
            ],
            benefits: [
                "Sanayi bölgesi deneyimi – OSB ve fabrika çevresinde çalışma tecrübesi",
                "Ağır tonajlı kazı kapasitesi – büyük hafriyat projeleri",
                "TIR ve ağır vasıta trafiğine uyumlu saha çalışması",
                "Mevcut altyapıya zarar vermeme hassasiyeti",
                "Uzun süreli projelerde paket fiyat avantajı",
                "İş güvenliği prosedürlerine tam uyum",
                "Müteahhit ve tesis yönetimiyle koordineli iş akışı",
                "Hadımköy'e dakikalar mesafede – hızlı mobilizasyon"
            ],
            useCases: [
                "Fabrika ve depo temeli kazısı",
                "Sanayi sahası zemin hazırlığı",
                "OSB çevresi altyapı ve kanalizasyon kazısı",
                "Lojistik merkez arazi tesviyesi",
                "Fabrika bahçesi düzenleme ve sert zemin kırma",
                "TIR parkı ve otopark alanı açma",
                "Sanayi yolu açma ve stabilize zemin hazırlığı",
                "Eski sanayi yapısı yıkımı ve moloz temizliği"
            ],
            experienceProof: [
                "Hadımköy bölgesinde onlarca sanayi projesi referansı",
                "Fabrika ve depo temel kazılarında kanıtlanmış tecrübe",
                "İş güvenliği sertifikalı operatör kadrosu",
                "Geniş çaplı hafriyat projelerinde çoklu gün deneyimi"
            ],
            pricingLogic: "Hadımköy'deki sanayi projeleri genellikle büyük çaplıdır. Günlük veya haftalık paket fiyat seçenekleri sunuyoruz. Uzun süreli projelerde %15'e kadar indirim uygulanır. Hafriyat nakliyesi ayrıca fiyatlandırılabilir veya dahil edilebilir. Ücretsiz keşif sonrası net teklif verilir.",
            trustSignals: [
                "Sanayi bölgesi çalışma deneyimi",
                "İş güvenliği sertifika ve prosedürleri",
                "SGK'lı ve belgeli ekip",
                "Büyük proje referansları",
                "Sigortalı ekipman ve operatör"
            ]
        },
        media: {
            heroImageAlt: "Hadımköy sanayi bölgesinde JCB 3CX ile kiralık kepçe çalışması",
            heroImage: "/assets/arnavutkoy-jcb-3cx-kepce-arazi-calismasi.avif",
            galleryAlts: [
                "Hadımköy fabrika sahası kazı çalışması",
                "Sanayi altyapısı kazısı – Hadımköy",
                "Hadımköy depo sahası zemin hazırlığı"
            ]
        },
        localSEO: {
            serviceAreaText: "Hadımköy organize sanayi bölgeleri, fabrika alanları, lojistik merkezleri ve çevre yerleşim yerlerinde aktif kiralık kepçe hizmeti veriyoruz.",
            locationContext: "Hadımköy, İstanbul'un en büyük sanayi ve lojistik merkezlerinden biridir. Binlerce fabrika, depo ve lojistik tesisi barındıran bu bölge, sürekli altyapı ve inşaat çalışmasına ihtiyaç duyar. Sanayi alanlarında çalışmak konut sahalarından çok farklıdır: daha büyük kazı hacimleri, daha sıkı iş güvenliği kuralları ve mevcut altyapının korunması gerekir. 22 yıllık Arnavutköy tecrübemizle Hadımköy'ün sanayi dokusuna hakimiz."
        },
        faq: [
            { question: "Hadımköy'de fabrika sahası kazısı yapıyor musunuz?", answer: "Evet, Hadımköy'deki fabrika, depo ve sanayi tesisleri için arazi kazısı, zemin hazırlığı ve altyapı kazısı hizmeti veriyoruz. OSB çevresinde çalışma tecrübemiz var." },
            { question: "Sanayi alanlarında iş güvenliği nasıl sağlanıyor?", answer: "İş güvenliği prosedürlerine tam uyum sağlıyoruz. Operatörümüz İSG sertifikalıdır. Çalışma alanı bariyerlerle çevrilir, mevcut altyapı hatları önceden tespit edilir." },
            { question: "Büyük çaplı projeler için uzun süreli anlaşma yapılıyor mu?", answer: "Evet, Hadımköy'deki sanayi projeleri için haftalık veya aylık paket fiyat sunuyoruz. Uzun süreli anlaşmalarda %15'e kadar indirim uygulanır." },
            { question: "Ağır hafriyat işleri için yeterli misiniz?", answer: "JCB 3CX orta ölçekli işlerde çok verimlidir. Çok büyük hafriyatlar için ekskavatör ve kamyon organizasyonu da sağlıyoruz." },
            { question: "Gece vardiyası çalışıyor musunuz?", answer: "Sanayi bölgelerinde gerekmesi halinde erken sabah veya akşam saatlerinde de çalışma düzenleyebiliyoruz. Önceden koordinasyon gerekir." },
            { question: "Mevcut altyapıya zarar verir misiniz?", answer: "Çalışma öncesi altyapı haritaları incelenir. Elektrik, su, doğalgaz ve fiber optik hatları tespit edilip korunur. Hassas bölgelerde elle kontrollü kazı yapılır." }
        ],
        conversion: { primaryCTA: "Sanayi Projesi İçin Ara", secondaryCTA: "Keşif ve Fiyat Al" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "kazi-isleri", "yikim-hizmetleri", "operatorlu-kepce-kiralama"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 13. TAŞOLUK KİRALIK KEPÇE (KIRSAL→KENTSEL DÖNÜŞÜM)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "tasoluk-kiralik-kepce",
        name: "Taşoluk Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Taşoluk, Arnavutköy",
        secondaryLocations: ["Arnavutköy Merkez", "Dursunköy", "İmrahor", "Karaburun"],
        seo: {
            metaTitle: "Taşoluk Kiralık Kepçe | Konut & Arazi Dönüşüm ☎ 0539 477 81 12",
            metaDescription: "Taşoluk'ta operatörlü kiralık kepçe ✓ Toplu konut projeleri ✓ Tarım arazisi dönüşümü ✓ Büyük çaplı arazi kazısı ✓ Ücretsiz keşif. Hemen arayın!",
            canonical: "/tasoluk-kiralik-kepce",
            h1: "Taşoluk Kiralık Kepçe – Konut ve Arazi Dönüşüm Hizmeti"
        },
        content: {
            intro: "Taşoluk, Arnavutköy'ün geleceğin şehri. Dün tarlalar ve bağlarla dolu olan bu bölge, bugün TOKİ konut projeleri, toplu villa siteleri ve yeni yerleşim alanlarıyla hızla dönüşüyor. Tarım arazisini inşaat sahasına çevirmek sıradan bir kepçe işi değildir: önce yıllardır el değmemiş toprağı tanımak, sonra onu inşaata hazırlamak gerekir. Keçaş Kepçe olarak Taşoluk'un toprak yapısını 22 yıldır tanıyoruz. Buranın killi, yer yer taşlı ve organik madde bakımından zengin toprağını, hangi derinlikte serten anaya ulaşılacağını biliyoruz. Büyük parsellerde geniş çaplı arazi temizliği, reglaj, yol açma ve toplu konut temel kazıları için hem teknik bilgiye hem doğru ekipmana sahibiz.",
            problemStatement: "Taşoluk'ta en büyük zorluk arazinin bakir olması. Yıllardır tarım yapılan veya boş duran arazilerde ilk iş mevcut bitki örtüsünün ve üst toprağın kaldırılması, ardından zemin sıkılaştırma ve kot ayarlama gerekir. İmar görmemiş parsellerde yol bile olmayabilir; makinenin sahaya girişi bile planlama gerektirir. Büyük parsellerde tek makinenin yetmemesi, kamyon koordinasyonu ve hafriyat döküm noktasının uzaklığı maliyeti artırır. Ayrıca Taşoluk'un engebeli bölgelerinde su tablasının yüksekliği temel kazılarını zorlaştırabilir.",
            solutionOverview: "Taşoluk'taki arazi dönüşüm projelerini adım adım yönetiyoruz. İlk giriş yolunun açılmasından itibaren sahada varsak, arazi temizliği, sıyırma, hafriyat yükleme, reglaj ve nihayetinde temel kazısına kadar bütün süreci tek elden yürütüyoruz. JCB 3CX'in hem ön yükleyici hem arka kazıcı kolu, aynı gün içinde toprak sıyırma, kazı ve yükleme yapabilmemizi sağlıyor. Büyük araziler için kamyon ve damperli araç organizasyonunu da biz koordine ediyoruz. Böylece parsel sahibi sadece projesine odaklanıyor.",
            processSteps: [
                { title: "Arazi İnceleme ve Planlama", description: "Arazinin boyutu, eğimi, mevcut bitki örtüsü ve toprak yapısı incelenir. Giriş yolu ve makine erişimi planlanır." },
                { title: "Arazi Temizliği ve Sıyırma", description: "Çalı, kök, ağaç kütükleri ve organik üst toprak tabakası kaldırılır. Çıkan malzeme ayrıştırılır." },
                { title: "Reglaj ve Kot Ayarlama", description: "Projeye göre arazi yükseklikleri düzenlenir. Dolgu gereken yerler doldurulur, yüksek kısımlar indirilir." },
                { title: "Temel Kazısı veya Altyapı", description: "Arazi hazırlandıktan sonra temel kazısı, kanal açma veya yol altyapısı oluşturulur." }
            ],
            benefits: [
                "Bakir arazi dönüşümünde uçtan uca hizmet",
                "Bitki örtüsü temizliği ve kök sökümü",
                "Geniş çaplı reglaj ve kot ayarlama kapasitesi",
                "Kamyon ve damperli araç koordinasyonu",
                "Taşoluk'un toprak yapısına derin hakimiyet",
                "Toplu konut projeleri için çoklu parselde çalışma deneyimi",
                "Organik toprak ile dolgu toprağının ayrıştırılması",
                "Tarla yolundan inşaat yoluna geçiş hazırlığı"
            ],
            useCases: [
                "Tarım arazisi → inşaat sahasına dönüştürme",
                "TOKİ ve toplu konut projesi arazi hazırlığı",
                "Villa sitesi için çoklu parsel reglajı",
                "Çiftlik ve bağ arazi temizliği",
                "İmar yolu açma ve altyapı hazırlığı",
                "Yeni yerleşim alanı kanalizasyon kazısı",
                "Geniş arsa temel kazısı ve hafriyat",
                "Taşoluk'ta bahçe ve peyzaj zemini hazırlama"
            ],
            experienceProof: [
                "Taşoluk ve çevresinde düzinelerce arazi dönüşüm projesi",
                "Toplu konut ve villa sitesi hazırlık çalışmaları",
                "Bakir araziden inşaat sahasına dönüşüm deneyimi",
                "22 yıllık bölge toprak bilgisi"
            ],
            pricingLogic: "Taşoluk'taki arazi projeleri genellikle büyük ölçeklidir. Günlük çalışma veya proje bazlı toplam fiyat seçenekleri sunuyoruz. Arazi temizliği + reglaj + temel kazısını tek pakette alabilirsiniz. Hafriyat nakliyesi ayrıca veya dahil fiyatlandırılabilir. Ücretsiz keşif sonrası net teklif verilir.",
            trustSignals: [
                "Büyük arazi projelerinde tecrübe",
                "Taşoluk toprak yapısına hakimiyet",
                "Komple arazi dönüşüm çözümü",
                "Kamyon ve nakliye organizasyonu",
                "Sigortalı ve belgelendirme tam"
            ]
        },
        media: {
            heroImageAlt: "Taşoluk'ta geniş arazide JCB 3CX ile kiralık kepçe çalışması",
            heroImage: "/assets/arnavutkoy-jcb-3cx-kepce-arazi-calismasi.avif",
            galleryAlts: [
                "Taşoluk arazi temizliği ve reglaj çalışması",
                "Toplu konut alanı kazı hazırlığı – Taşoluk",
                "Taşoluk tarım arazisi dönüşüm projesi"
            ]
        },
        localSEO: {
            serviceAreaText: "Taşoluk merkez, Dursunköy, İmrahor, Karaburun ve çevre bölgelerde arazi dönüşüm ve kiralık kepçe hizmeti veriyoruz.",
            locationContext: "Taşoluk, Arnavutköy'ün kuzey tarafında hızla kentleşen bir bölge. Eskiden tarım arazileriyle dolu olan bu alan, bugün yeni konut projeleri ve altyapı çalışmalarıyla dönüşüyor. Buranın toprağı organik madde bakımından zengin, yer yer killi ve taşlıdır. İnşaat öncesi arazi temizliği ve zemin stabilizasyonu kritik önem taşır. 22 yıldır bu bölgenin toprak karakterini tanıyoruz."
        },
        faq: [
            { question: "Taşoluk'ta büyük arazi temizliği yapıyor musunuz?", answer: "Evet, çalı, kök, ağaç kütüğü ve üst toprak tabakası temizliği dahil büyük çaplı arazi hazırlığı yapıyoruz. Geniş parsellerde tek elden çözüm sunuyoruz." },
            { question: "Tarım arazisini inşaata nasıl hazırlıyorsunuz?", answer: "Önce bitki örtüsü ve organik toprak kaldırılır, sonra zemin sıkıştırma ve kot ayarlama yapılır. İnşaat projesine uygun temel kazısı ile süreç tamamlanır." },
            { question: "Taşoluk'taki engebeli arazilerde çalışabilir misiniz?", answer: "Evet, JCB 3CX engebeli ve eğimli arazilerde stabildir. Kademe kademe çalışarak güvenli zemin oluştururuz." },
            { question: "Çoklu parsel projelerinde fiyat avantajı var mı?", answer: "Evet, yan yana parsellerde veya toplu konut projelerinde çoklu gün çalışmasıyla önemli maliyet avantajı sunuyoruz." },
            { question: "Hafriyat nakliyesini siz organize ediyor musunuz?", answer: "Evet, kamyon ve damperli araç organizasyonunu yapıyoruz. Hafriyat yasal döküm sahasına nakledilir." },
            { question: "Yol olmayan araziye nasıl giriyorsunuz?", answer: "Önce geçici giriş yolu açıyoruz. JCB 3CX'in ön yükleyicisi ile bozuk veya stabilize olmayan zeminlerde ilerleyebiliyoruz." }
        ],
        conversion: { primaryCTA: "Arazi Projesi İçin Ara", secondaryCTA: "Ücretsiz Keşif İste" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "kazi-isleri", "dolgu-tesviye", "temel-kazisi"] }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 14. BOLLUCA KİRALIK KEPÇE (TEPELİK/YAMAÇLI ARAZİ)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "bolluca-kiralik-kepce",
        name: "Bolluca Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Bolluca, Arnavutköy",
        secondaryLocations: ["Arnavutköy Merkez", "Karlıbayır", "Deliklikaya", "İmrahor"],
        seo: {
            metaTitle: "Bolluca Kiralık Kepçe | Eğimli Arazi Uzmanı ☎ 0539 477 81 12",
            metaDescription: "Bolluca'da operatörlü kiralık kepçe ✓ Yamaçlı arazi kazısı ✓ İstinat duvarı ✓ Kayalık zemin ✓ Eğimli temel kazısı ✓ Ücretsiz keşif. Hemen arayın!",
            canonical: "/bolluca-kiralik-kepce",
            h1: "Bolluca Kiralık Kepçe – Eğimli Arazi ve Yamaç Çalışmaları"
        },
        content: {
            intro: "Bolluca'da kepçe çalışması düz bir arsayla kıyaslanamaz. Bu mahallenin tepelik yapısı, orman kenarı parselleri ve dik yamaçları, kepçe operatörünün sadece makineyi değil araziyi de okumasını gerektirir. Keçaş Kepçe olarak Bolluca'nın zorlu coğrafyasını avantaja çeviriyoruz. İstinat duvarı temeli açmak, yamacın altını kademe kademe kazarak güvenli platformlar oluşturmak ve kayalık zeminde kırıcı uçla çalışmak burada bildiğimiz işler. Bolluca'daki parsellerin çoğu eğimlidir ve düz zemin elde etmek başlı başına bir mühendislik işidir. JCB 3CX'in kompakt yapısı dar bahçe yollarından geçerken, hidrolik kırıcı ucu da kaya ile karşılaştığımızda elimizi güçlendiriyor. Her yamacın, her eğimin farklı bir hikayesi var; biz o hikayeyi 22 yıldır okuyoruz.",
            problemStatement: "Bolluca'daki inşaat zorlukları düz araziden tamamen farklıdır. Eğimli parsellerde temel kazısı yapmak, toprağın kayma riskini yönetmeyi gerektirir. İstinat duvarı yapılmadan kazılan yamaçlar zamanla kayabilir, komşu parsele toprak akabilir. Kayalık zemin karşılaştığında normal kovalarla çalışmak mümkün değildir. Ormana yakın parsellerde ağaçlara zarar vermeden çalışmak ek hassasiyet gerektirir. Dar ve dik bahçe yollarından büyük makinelerin geçememesi de ayrı bir sorun oluşturur.",
            solutionOverview: "Bolluca'da her kazıya eğim analizi ile başlıyoruz. Yamaç yönünü, su akış güzergahını ve kayma riskini değerlendirip kademe planı çıkarıyoruz. JCB 3CX'in kompakt boyutu Bolluca'nın dar yollarından geçebilirken, güçlü hidrolik sistemi sert zeminlerde kırıcı uç kullanmamıza imkan veriyor. İstinat duvarı temelleri için hassas kot kontrolü yapıyor, yarma ve dolgu dengesini koruyarak zemin stabilitesini sağlıyoruz. Ağaç koruma alanlarında manuel kazı ile makine gücünü kombine ediyoruz.",
            processSteps: [
                { title: "Eğim Analizi ve Kademe Planı", description: "Parselin eğimi, su yönü ve zemin yapısı incelenir. Kademe kademe kazı planı oluşturulur. Kayma riski değerlendirilir." },
                { title: "Giriş ve Erişim Hazırlığı", description: "Dar yollardan makine geçişi planlanır. Gerekirse geçici erişim yolu açılır." },
                { title: "Kademeli Kazı", description: "Yamaç yukarıdan aşağıya kademe kademe kazılır. Her kademe sonrası şev stabilitesi kontrol edilir. Kayalık bölgelerde kırıcı uç kullanılır." },
                { title: "İstinat Temeli ve Tesviye", description: "İstinat duvarı yapılacaksa temel kotu hassas şekilde açılır. Platform alanı tesviye edilir. Drenaj kanalları oluşturulur." }
            ],
            benefits: [
                "Eğimli arazi ve yamaç kazısında uzmanlaşmış ekip",
                "İstinat duvarı temel kazısı deneyimi",
                "Kayalık zeminde JCB 3CX kırıcı uç kapasitesi",
                "Kademe kademe kontrollü kazı tekniği",
                "Dar yollardan geçebilen kompakt makine",
                "Ormana yakın parsellerde ağaç koruma hassasiyeti",
                "Toprak kayma riskine karşı şev stabilizasyonu",
                "Su akış yönüne göre drenaj planlama desteği"
            ],
            useCases: [
                "Eğimli parselde villa temeli kazısı",
                "İstinat duvarı temel hendeği açma",
                "Yamaç yarma ve platform oluşturma",
                "Kayalık zeminde kırıcı ile kazı",
                "Orman kenarı parselde hassas kazı",
                "Dik bahçede teras oluşturma",
                "Drenaj kanalı ve su tahliye sistemi kazısı",
                "Bolluca manzaralı villa arsası hazırlama"
            ],
            experienceProof: [
                "Bolluca ve çevre yamaçlarda onlarca eğimli arazi projesi",
                "İstinat duvarı temeli uzmanlığı",
                "Kayalık zemin kırma ve hassas kazı referansları",
                "22 yıldır Arnavutköy coğrafyasına hakimiyet"
            ],
            pricingLogic: "Bolluca'daki eğimli arazi çalışmaları düz araziye göre daha fazla zaman ve teknik gerektirir. Fiyatlandırma işin zorluğu, eğim derecesi, kayalık oranı ve erişilebilirliğe göre yapılır. Ücretsiz keşif sonrası net ve şeffaf fiyat teklifi verilir. İstinat duvarı temeli + tesviye paketleri mevcuttur.",
            trustSignals: [
                "Eğimli arazi ve yamaç çalışma uzmanlığı",
                "İstinat duvarı projeleri referansı",
                "Ağaç ve doğa koruma hassasiyeti",
                "Kademeli kazı ile güvenli şev yönetimi",
                "Sigortalı ekipman ve operatör"
            ]
        },
        media: {
            heroImageAlt: "Bolluca'da eğimli arazide JCB 3CX ile kiralık kepçe çalışması",
            heroImage: "/assets/arnavutkoy-derin-kazi-jcb-kepce-hidrolik-kirici.avif",
            galleryAlts: [
                "Bolluca yamaç kazısı ve istinat temeli",
                "Eğimli arazide kademe kazı – Bolluca",
                "Bolluca kayalık zeminde kırıcı çalışma"
            ]
        },
        localSEO: {
            serviceAreaText: "Bolluca başta olmak üzere Karlıbayır, Deliklikaya, İmrahor ve çevre bölgelerde eğimli arazi ve yamaç çalışmalarında kiralık kepçe hizmeti veriyoruz.",
            locationContext: "Bolluca, Arnavutköy'ün tepelik ve orman kenarı mahallelerinden biridir. Eğimli araziler, ormanlık alanlar ve manzaralı villa parselleri ile bilinen bu mahallede, düz arazi çalışmasından çok farklı bir uzmanlık gerekir. İstinat duvarları, kademeli teraslar ve drenaj sistemleri Bolluca'daki inşaatların olmazsa olmazıdır. 22 yıldır bu bölgenin engebeli coğrafyasında çalışıyoruz; her tepenin, her yamaçın nasıl kazılacağını biliyoruz."
        },
        faq: [
            { question: "Bolluca'daki dik arazilerde çalışabilir misiniz?", answer: "Evet, JCB 3CX eğimli arazilerde stabil bir şekilde çalışır. Kademe kademe kazı yaparak güvenli platformlar oluşturuyoruz." },
            { question: "İstinat duvarı temeli açıyor musunuz?", answer: "Evet, istinat duvarı temel hendeği açmak uzmanlaştığımız işlerden biridir. Projeye uygun kot ve genişlikte hassas kazı yapıyoruz." },
            { question: "Kayalık zeminle karşılaşırsak ne oluyor?", answer: "JCB 3CX kırıcı uç ataşmanımız mevcuttur. Kaya ve sert zeminlerde kırım yaparak kazıya devam ediyoruz. Ek maliyet keşifte belirlenir." },
            { question: "Ormana yakın parselde ağaçlara zarar verir misiniz?", answer: "Hassas çalışma ile korunması gereken ağaçlara zarar vermeden kazı yapıyoruz. Makine erişemediği noktalarda elle kazı desteği sağlıyoruz." },
            { question: "Dar bahçe yollarından geçebiliyor musunuz?", answer: "JCB 3CX'in kompakt boyutu (genişlik 2.36m) çoğu bahçe yolundan geçmesini sağlar. Giriş öncesi ölçü alıyoruz." },
            { question: "Bolluca'da temel kazısı neden daha zor?", answer: "Eğimli arazilerde kazı asimetrik yapılır, bir taraf derin diğer taraf sığ olabilir. Toprak kayma riski yönetilmeli, istinat gerekebilir. Bu deneyim gerektirir." }
        ],
        conversion: { primaryCTA: "Yamaç Projesi İçin Ara", secondaryCTA: "Ücretsiz Keşif İste" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "temel-kazisi", "kazi-isleri", "yunus-emre-kiralik-kepce"] }
    },
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 15. DELİKLİKAYA KİRALIK KEPÇE (SANAYİ & LOJİSTİK HUB)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "deliklikaya-kiralik-kepce",
        name: "Deliklikaya Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Deliklikaya, Arnavutköy",
        secondaryLocations: ["Hadımköy", "Ömerli", "Sazlıbosna", "Hastane Mahallesi"],
        seo: {
            metaTitle: "Deliklikaya Kiralık Kepçe | Sanayi & Lojistik Bölge Uzmanı",
            metaDescription: "Deliklikaya'da profesyonel kiralık kepçe hizmeti. DESB Sanayi Bölgesi ve lojistik merkezler için JCB 3CX operatörlü kepçe. 22 yıllık tecrübe. ☎ 0539 477 81 12",
            canonical: "/deliklikaya-kiralik-kepce",
            h1: "Deliklikaya Kiralık Kepçe ve İş Makinesi Hizmetleri"
        },
        content: {
            intro: "Deliklikaya Mahallesi, bugün Arnavutköy'ün ve hatta İstanbul'un sanayi yükünü sırtlayan en kritik lokasyonlardan biri haline gelmiştir. Deliklikaya Sanayi Bölgesi (DESB) ve çevresindeki devasa lojistik yatırımları, beraberinde profesyonel iş makinesi ihtiyacını da getirmektedir. Keçaş Kepçe olarak, 2004 yılından bu yana Deliklikaya'nın tarladan modern sanayi sitesine dönüşüm sürecine bizzat şahitlik ettik ve yüzlerce projenin temelinde yer aldık. DESB içindeki fabrika yapımları, depo zemin hazırlıkları ve sanayi altyapı çalışmaları sıradan bir kepçe operatörünün yapabileceği işler değildir; yüksek konsantrasyon, mevcut altyapı hatlarına (doğalgaz, yüksek gerilim, fiber optik) hakimiyet ve sanayi disiplini gerektirir. JCB 3CX beko loder makinemiz ve sanayi sahalarında pişmiş tecrübeli operatörlerimizle, Deliklikaya'daki tüm projelerinizde çözüm ortağınız olmaya hazırız. Bölgenin ağır vasıta trafiğine, sanayi sitelerinin çalışma prosedürlerine ve zemin yapısının getirdiği zorluklara tam hakimiz. İster Deliklikaya Tren İstasyonu çevresindeki yeni şantiyelerde olsun, ister Tesko Sanayi Sitesi içindeki tadilat işlerinde; makinemizi tam zamanında sahaya ulaştırarak iş akışınızı kesintiye uğratmıyoruz.",
            problemStatement: "Deliklikaya Sanayi Bölgesi'nde çalışmak, beraberinde büyük riskler ve teknik zorluklar getirir. Bölgenin zemini, yoğun dolgu alanlarından ve yer yer sert kaya katmanlarından oluşur. Bu durum, tecrübesiz bir operatör için hem zaman kaybı hem de makineye zarar verme riskidir. Ayrıca, sanayi tesislerinin içinde veya çevresinde yapılan kazılarda en büyük kabus, yeraltındaki gelişmiş altyapı ağlarına zarar vermektir. Tek bir fiber kablonun veya su ana hattının kopması, sadece sizin projenizi değil, tüm sanayi sitesini durdurabilir ve ağır cezalarla karşılaşmanıza neden olabilir. Bir diğer sorun ise, büyük ölçekli kurumsal firmaların küçük ama acil kepçe ihtiyaçları için muhatap bulamamasıdır. Çoğu büyük hafriyat firması tekil kepçe kiralama taleplerine geç dönerken, mahalle aralarındaki kepçeciler ise sanayi sitelerinin iş güvenliği (İSG) şartlarını karşılayamaz. Bu boşluk, projelerin durmasına ve maliyetlerin artmasına yol açar.",
            solutionOverview: "Keçaş Kepçe olarak bu sorunları, sanayi odaklı çalışma prensibimizle kökten çözüyoruz. Deliklikaya'daki projeleriniz için sadece bir iş makinesi değil, 22 yıllık 'sanayi tecrübesi' sunuyoruz. Operatörlerimiz, sanayi bölgelerinin katı İSG kurallarına, yelek ve baret disiplinine, çalışma saatlerine tam uyum sağlar. Kazı öncesinde bölgedeki altyapı haritalarını göz önünde bulundurarak, şüpheli noktalarda manuel kontrol ile makine gücünü birleştiriyoruz. JCB 3CX makinemizdeki hidrolik kırıcı (breaker) ve açılır kova (loader) fonksiyonları sayesinde, beton kırma işinden zemin tesviyesine kadar her şeyi tek seferde bitiriyoruz. Fabrika içindeki dar alanlarda dahi kıvrak manevra kabiliyetimizle işinizi tamamlıyoruz. SRC 4 belgeli, sigortalı ve profesyonel ekibimizle, kurumsal firmaların aradığı güvenilir ve hesap verebilir taşeron desteğini sağlıyoruz. Üstelik Deliklikaya'ya çok yakın lokasyonda olmamız sebebiyle, acil taleplerinizde ulaştırma maliyetini minimumda tutarak 'aynı gün' hizmet veriyoruz.",
            processSteps: [
                { title: "Saha İncelemesi ve Altyapı Tespiti", description: "Deliklikaya'daki iş sahanıza gelip yerinde ücretsiz keşif yapıyoruz. Mevcut altyapı hatlarını gözlemliyor, zemin sertliğini analiz ediyoruz." },
                { title: "Sanayi Standartlarında Fiyatlandırma", description: "İşin hacmine göre saatlik, günlük veya götürü fiyat teklifimizi sunuyoruz. Sanayi siteleri için gerekli fatura ve puantaj sistemini netleştiriyoruz." },
                { title: "İSG Uyumlu Mobilizasyon", description: "Makinemizi ve operatörümüzü iş güvenliği ekipmanları tam şekilde sahaya ulaştırıyoruz. DESB giriş prosedürlerini sizin adınıza koordine ediyoruz." },
                { title: "Hassas Uygulama ve Temizlik", description: "Operatörümüz, projeye uygun kazı veya yükleme işlemini gerçekleştirir. İş bitiminde saha temizlenir, molozlar yüklenir ve zemin düzgün şekilde teslim edilir." }
            ],
            benefits: [
                "Deliklikaya Sanayi Bölgesi (DESB) tecrübesi",
                "Sanayi altyapı hatlarına karşı yüksek hassasiyet",
                "SRC 4 belgeli ve İSG kurallarına hakim profesyonel operatör",
                "Ağır sanayi tipi JCB 3CX ve kırıcı ataşman desteği",
                "7/24 ulaşılan acil kiralık kepçe hattı",
                "Aynı gün mobilizasyon ve düşük nakliye maliyeti",
                "Kurumsal firmalar için şeffaf puantaj ve faturalandırma",
                "Zemin tesviyesinde (reglaj) milimetrik hassasiyet",
                "Fabrika ve depo içi çalışmalarda yüksek manevra kabiliyeti",
                "Aziz Sancar MTAL ve çevresindeki kamu şantiyelerine hızlı destek"
            ],
            useCases: [
                "Fabrika binası temel kazısı ve hafriyat alımı",
                "Depo ve lojistik antrepo zemin tesviyesi",
                "Sanayi sitesi kanalizasyon ve yağmur suyu hattı kazısı",
                "Fabrika bahçesi beton kırma ve moloz yükleme",
                "TIR parkı sahası hazırlama ve stabilize dolgu",
                "Makine temeli için hassas kırım ve kazı işleri",
                "Elektrik ve fiber optik kanallarının açılması",
                "Sanayi parseli arazi temizliği ve reglaj",
                "Drenaj hattı oluşturma ve su tahliyesi",
                "Asfalt sökümü ve yol genişletme çalışmaları"
            ],
            experienceProof: [
                "Deliklikaya Sanayi Bölgesi (DESB) kuruluşundan bu yana 100+ fabrika sahası hazırlığı",
                "Tesko Sanayi Sitesi içerisinde sayısız tadilat ve altyapı projesi",
                "Hadımköy-Deliklikaya bağlantı yolu üzerindeki geniş ölçekli reglaj işleri",
                "22 yıllık Arnavutköy ve yerel sanayi bölgesi uzmanlığı",
                "Bölgenin killi ve dolgu zemin yapısına tam hakimiyet"
            ],
            pricingLogic: "Deliklikaya kiralık kepçe fiyatlandırmamız, sanayi sahalarının yoğun çalışma temposuna göre esneklik gösterir. Standart saatlik kiralama dışında, uzun süreli fabrika inşaatları için haftalık veya aylık indirimli paketlerimiz mevcuttur. Sanayi bölgelerindeki nakliye (lowbed veya sürüş) maliyetlerimiz, yerel bir işletme olduğumuz için oldukça uygundur. Ücretsiz saha keşfi sonrası, işin zorluğu ve kullanılacak ataşmanlar (kırıcı uç, dar kova vs.) dikkate alınarak net bir fiyat teklifi sunulur; iş sonunda sürpriz maliyetlerle karşılaşmazsınız.",
            trustSignals: [
                "Arnavutköy Ticaret Odası kaydı",
                "DESB ve sanayi sitelerinde aktif çalışma referansları",
                "Belgeli ve sigortalı operatör güvencesi",
                "JCB yetkili servisi tarafından düzenli bakımı yapılan ekipman",
                "İş kazalarına karşı tam sorumluluk ve sigorta kapsamı",
                "22 yıllık bölge yerleşiği, güvenilir aile işletmesi"
            ]
        },
        media: {
            heroImageAlt: "Deliklikaya Sanayi Bölgesi'nde çalışan operatörlü JCB 3CX kiralık kepçe - Keçaş Kepçe",
            galleryAlts: [
                "DESB fabrika temeli kazısı",
                "Deliklikaya sanayi lojistik saha tesviyesi",
                "Deliklikaya beton kırma ve moloz yükleme",
                "Sanayi caddesi altyapı kazı çalışması",
                "Keçaş Kepçe Deliklikaya bölge mobilizasyonu"
            ]
        },
        localSEO: {
            serviceAreaText: "Deliklikaya Sanayi Bölgesi (DESB), Tesko Sanayi Sitesi, Deliklikaya Tren İstasyonu çevresi ve mahallenin tüm yerleşim alanlarında aktif hizmet veriyoruz.",
            locationContext: "Deliklikaya, özellikle 2010 sonrası İstanbul'un sanayi dönüşümünün merkezi haline gelmiştir. Mahalle, doğusunda Hadımköy, batısında Sazlıbosna ile komşudur. Bu stratejik konum, bölgeyi bir lojistik üssü yapmaktadır. Bölge genelinde zeminin killi yapısı, kış aylarında şantiyelerin çamurlaşmasına, yazın ise beton kadar sertleşmesine neden olur. Keçaş Kepçe olarak bu mevsimsel zemin değişkenliğini bilerek, makinemizin bakımını ve lastik seçimini buna göre yapıyoruz. Mahallenin meydanından Aliya İzzetbegoviç Parkı çevresindeki konut inşaatlarına kadar her noktada 'yerel usta' kimliğimizle hizmet sağlıyoruz."
        },
        faq: [
            { question: "Deliklikaya Sanayi Bölgesi'ne aynı gün kepçe gönderebilir misiniz?", answer: "Evet, Deliklikaya'da sürekli devam eden projelerimiz olduğundan veya merkezimize yakınlığından dolayı müsaitlik durumuna göre 1-2 saat içinde makinemizi şantiyenize ulaştırabiliyoruz. Acil kiralık kepçe ihtiyaçlarınız için 0539 477 81 12'den 7/24 bizi arayabilirsiniz." },
            { question: "Sanayi sitesi içinde beton kırma yapabiliyor musunuz?", answer: "Evet, JCB 3CX makinemizde yüksek vuruş gücüne sahip hidrolik kırıcı (breaker) ataşmanımız mevcuttur. Fabrika zemin betonu, istinat duvarı veya saha betonu gibi kırım işlerini hızlıca yapıp, çıkan molozu ön kovamızla yükleyerek alanı temizliyoruz." },
            { question: "İSG evraklarınız (İş Sağlığı ve Güvenliği) tam mı?", answer: "Evet, operatörlerimizin tüm mesleki yeterlilik belgeleri, G sınıfı ehliyetleri, sigorta girişleri ve sağlık raporları tamdır. Makinelerimizin periyodik kontrolleri düzenli yapılmaktadır. Sanayi sitelerinin kapı girişlerinde ve çalışma sahasında istenen tüm evrak grubunu sunabiliyoruz." },
            { question: "Deliklikaya'da kanal açma fiyatları nasıl hesaplanır?", answer: "Kanal açma işlerinde projenin derinliği, genişliği ve toplam metrajına göre fiyat veriyoruz. Genellikle sanayi bölgelerinde saatlik kiralama tercih edilse de, uzun metrajlı kanalizasyon veya kablo kanalı işleri için metre başına veya iş bazlı götürü fiyat teklifi almanız daha avantajlı olabilir." },
            { question: "Mevcut yeraltı hatlarına zarar gelmemesi için nasıl bir önlem alıyorsunuz?", answer: "Kazı öncesinde sahadaki altyapı krokilerini projenizden istiyoruz. Eğer kroki yoksa, operatörümüzün 'el hassasiyeti' ve tecrübesiyle, şüpheli bölgelerde önce yüzeysel sıyırma yaparak ilerliyoruz. Gerekirse operatörümüz yardımcı personeli (işçi) ile manuel kontrol eşliğinde kazıyı yönlendirir." }
        ],
        conversion: { primaryCTA: "Hemen Ara: 0539 477 81 12", secondaryCTA: "Ücretsiz Keşif İste" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "hadimkoy-kiralik-kepce", "omerli-kiralik-kepce", "kazi-isleri", "yikim-hizmetleri"] }
    },
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 16. ÖMERLİ KİRALIK KEPÇE (DEPOLAMA & ALTYAPI ODAKLI)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "omerli-kiralik-kepce",
        name: "Ömerli Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Ömerli, Arnavutköy",
        secondaryLocations: ["Hadımköy", "Deliklikaya", "Yeşilbayır", "Karlıbayır"],
        seo: {
            metaTitle: "Ömerli Kiralık Kepçe | Arnavutköy İş Makinesi Hizmetleri",
            metaDescription: "Ömerli'de operatörlü kiralık kepçe hizmeti. KİPTAŞ konutları, sanayi siteleri ve depo projeleri için JCB 3CX kepçe. 7/24 acil hizmet. ☎ 0539 477 81 12",
            canonical: "/omerli-kiralik-kepce",
            h1: "Ömerli Kiralık Kepçe ve Hafriyat Çözümleri"
        },
        content: {
            intro: "Ömerli Mahallesi, Arnavutköy'ün yükselen değeri olarak hem devasa lojistik depoların hem de KİPTAŞ ve benzeri büyük konut projelerinin kesişme noktasında yer almaktadır. Bölgenin hızla artan nüfusu ve ticari hacmi, altyapı ve çevre düzenleme işlerinde profesyonel kepçe hizmetine olan ihtiyacı her geçen gün artırmaktadır. Keçaş Kepçe olarak, Ömerli'nin hem dar sokaklarındaki bahçe düzenlemelerinde hem de sanayi parselindeki büyük kazı işlerinde 22 yıllık tecrübemizle faaliyet gösteriyoruz. Ömerli Bölge Parkı çevresindeki peyzaj hazırlıklarından tutun, sanayi caddesi üzerindeki fabrika tadilatlarına kadar mahallenin her köşesine hakimiz. Bölgedeki yüksek vasıfta zemin tesviyesi, drenaj kanalları ve temel kazıları projenin ömrünü belirler. Biz, Ömerli'nin toprak yapısını (özellikle killi ve yer yer kaygan zeminlerini) bilerek, iş makinemizi en verimli şekilde kullanıyoruz. Hadımköy-Ömerli hattındaki lojistik koridorda karşılaşılan tüm kazı ve yükleme taleplerine, donanımlı JCB 3CX kepçemiz ve sertifikalı operatörümüzle anında yanıt veriyoruz.",
            problemStatement: "Ömerli mahallesindeki şantiyelerde en sık karşılaşılan sorun, zeminin değişken yapısına uygun olmayan makine seçimidir. KİPTAŞ konutları çevresindeki dar alanlarda veya site bahçelerinde çalışmak, milimetrik hassasiyet gerektirir; tecrübesiz bir operatör yaya kaldırımlarına, çevre çitlerine veya otopark zeminlerine zarar vererek yüksek tamir masrafları çıkarabilir. Öte yandan, Ömerli Sanayi bölgesindeki büyük parsellerde ise küçük makineler kapasite olarak yetersiz kalırken, devasa ekskavatörler ise hem çok pahalıdır hem de küçük detaylarda (kanal açma, ince tesviye) hantal kalır. Ayrıca bölgedeki yoğun lojistik trafiği nedeniyle makinelerin sahaya gelmesi bazen saatler sürebilir, bu da iş programınızın aksamasına neden olur. Mahalle aralarındaki kayıt dışı kepçecilerle çalışmak ise, olası bir kazada veya altyapı hasarında karşınızda sorumlu bir muhatap bulamamanıza yol açar.",
            solutionOverview: "Ömerli projelerinizde Keçaş Kepçe olarak sunduğumuz 'çok fonksiyonlu' çözümle bu riskleri ortadan kaldırıyoruz. JCB 3CX kazıyıcı yükleyicimiz, hem dar alanlarda çalışabilecek kadar kompakt hem de temel kazısı yapabilecek kadar güçlüdür. Ön kovasıyla 1 metreküp yükleme yapabilirken, arka kazıcı koluyla 4 metrenin üzerine inebiliriz. Site içlerindeki hassas peyzaj işlerinde, 'lastik tekerlekli' olmamızın avantajıyla zemini bozmadan ilerliyoruz. Operatörlerimiz Ömerli'nin tüm cadde ve sokaklarını (Dr. Muhtar Ahmet Ensari Parkı çevresi, Sanayi Caddesi vs.) bildiği için, navigasyonla vakit kaybetmeden en kestirme yoldan sahanıza ulaşır. İş öncesi ve sonrası 'ücretsiz keşif' ve 'şeffaf puantaj' uyguluyoruz. Herhangi bir iş kazasına karşı tam sigortalı çalışma prensibimizle, hem bireysel mülk sahiplerine hem de kurumsal şantiye yöneticilerine iç huzuru sağlıyoruz. Makinemize takılabilen açılır kova, forklift çatalı ve hidrolik kırıcı gibi farklı ataşmanlarla, Ömerli'deki her türlü işi (tesviye, kırım, yükleme, istifleme) tek seferde bitirip çıkıyoruz.",
            processSteps: [
                { title: "Lokasyon ve İş Analizi", description: "Ömerli mahallesindeki adresinize geliyoruz. Çalışma alanının dar yollarını, eğim durumunu ve zemin sertliğini analiz ediyoruz." },
                { title: "Bütçe Dostu Fiyatlandırma", description: "Ömerli'de yakın mesafede olmanın getirdiği avantajla, düşük nakliye bedelli ve iş süresine uygun ekonomik bir fiyat sunuyoruz." },
                { title: "Hızlı Mobilizasyon", description: "Müsait durumdaki JCB 3CX'imiz, söz verdiğimiz saatte Ömerli şantiyenizde hazır hale getirilir." },
                { title: "Profesyonel Uygulama ve Onay", description: "Operatörümüz talimatlarınız doğrultusunda işi yapar. Sizin onayınız alınmadan sahadan ayrılmayız, işi teslim eder ve puantajı kapatırız." }
            ],
            benefits: [
                "Ömerli ve Hadımköy lokasyonlarına dakikalar içinde ulaşım",
                "KİPTAŞ konutları ve site içi çalışmalarda yüksek tecrübe",
                "Bahçe düzenlemesi ve peyzaj tesviyesinde (reglaj) uzmanlık",
                "JCB 3CX ile hem kazı hem yükleme yapabilme avantajı",
                "22 yıllık yerel aile işletmesi güvenilirliği",
                "Uygun fiyatlı saatlik ve günlük kiralama seçenekleri",
                "Operatörlü kiralama – makine + yakıt(opsiyonel) + operatör paketi",
                "Dar sokaklarda ve müstakil ev bahçelerinde güvenli çalışma",
                "Altyapı hatlarına (İSKİ, İGDAŞ) zarar vermeyen hassas kazı",
                "Her türlü zemin ve moloz yükleme işine uygun ön kova kapasitesi"
            ],
            useCases: [
                "Villa ve müstakil ev bahçe tesviyesi",
                "Ömerli sanayi bölgesi fabrika temel kazıları",
                "Site içi çevre düzenleme ve kanal açma işleri",
                "Beton duvar ve eski kömürlük yıkımı",
                "Toprak serimi ve rulo çim öncesi reglaj",
                "İnşaat molozu ve hafriyat yüklemesi",
                "Kanalizasyon ve foseptik çukuru kazısı",
                "Dar sokaklarda altyapı onarım kazıları",
                "Arsa temizliği ve yabani ot sıyırma",
                "Yağmur suyu drenaj hattı oluşturma"
            ],
            experienceProof: [
                "Ömerli Mahallesi genelinde 22 yıldır kesintisiz hizmet",
                "KİPTAŞ ve civarındaki site projelerinde onlarca tamamlanmış iş",
                "Ömerli sanayi parsellerinde fabrika zemin hazırlığı referansları",
                "Arnavutköy Belediyesi ve yerel müteahhitlerle koordineli çalışma geçmişi",
                "Birinci sınıf JCB 3CX operatörlüğü uzmanlığı"
            ],
            pricingLogic: "Ömerli kiralık kepçe ücretlerimiz, işin niteliğine göre şekillenir. Bahçe düzenleme gibi kısa süreli işler için 'saatlik', büyük kazı veya dolgu işleri için 'günlük' bazda fiyat veriyoruz. Ömerli merkez mahalle sınırları içinde nakliye (lowbed) gerektirmeden, makinenin kendi sürüşüyle gelmesi maliyetlerinizi düşürür. Ücretsiz keşif yaparak işin kaç saat süreceğini önceden tahmin ediyor ve size 'sürprizsiz fatura' garantisi veriyoruz.",
            trustSignals: [
                "Arnavutköy Yerel Esnaf kaydı",
                "SGK'lı ve profesyonel operatör kadrosu",
                "Müşteri memnuniyeti %98 olan hizmet geçmişi",
                "Düzenli bakımlı, yeni model JCB 3CX ekipman",
                "7/24 ulaşılabilecek sabit ve mobil numaralar",
                "Referans odaklı büyüme ve güven prensibi"
            ]
        },
        media: {
            heroImageAlt: "Ömerli Arnavutköy'de bahçe düzenleme yapan kiralık JCB kepçe - Keçaş Kepçe",
            galleryAlts: [
                "Ömerli bahçe tesviye çalışması",
                "Ömerli sanayi fabrika kazısı",
                "Ömerli moloz yükleme ve temizlik",
                "KİPTAŞ konutları çevre düzenleme kepçe işi",
                "Ömerli'de dar alanda çalışan kepçe"
            ]
        },
        localSEO: {
            serviceAreaText: "Ömerli merkez, KİPTAŞ Ömerli Konutları, Ömerli Sanayi Bölgesi ve çevresindeki tüm sitelerde aktif kiralık kepçe hizmeti sağlıyoruz.",
            locationContext: "Ömerli, İstanbul'un batısında, Arnavutköy ile Esenyurt arasında kalan stratejik bir bölgedir. Bir tarafında yoğun sanayi ve lojistik koridoru (Hadımköy-Ömerli), diğer tarafında modern konut projeleri bulunur. Bu ikili yapı, hem profesyonel ağır iş kapasitesi olan hem de kentsel estetiği bozmayacak hassas makinelerin gerekliliğini doğurur. Ömerli'nin yer yer killi olan zemin yapısı, özellikle yağışlı havalarda drenaj sorunlarına yol açar. Keçaş Kepçe olarak bu bölgenin toprak özelliklerini bilerek, buralarda su tahliye kanalları açma ve zemin stabilizasyonu konusunda bölge halkına ve sanayicilerine 22 yıldır destek veriyoruz."
        },
        faq: [
            { question: "Ömerli'de bahçe düzenlemesi için kepçe kiralıyor musunuz?", answer: "Evet, özellikle Ömerli'deki villa, müstakil ev veya site bahçeleri için kepçe kiralıyoruz. Makinemizin lastik tekerlekli olması sayesinde kilit parke veya çim alanlara (gerekli önlemle) zarar vermeden tesviye, toprak serimi ve ağaç kökü sökme gibi işleri yapıyoruz." },
            { question: "En az kaç saat kiralama yapılabiliyor?", answer: "Standart olarak minimum kiralama süremiz bulunmakla birlikte, Ömerli içindeki işler için mesafeye bağlı olarak esneklik gösterebiliyoruz. Detaylı bilgi ve size en uygun fiyat teklifi için bizi hemen arayabilirsiniz." },
            { question: "Makineleriniz dar sokaklara girebilir mi?", answer: "Evet, JCB 3CX makinemiz bir kamyon boyutlarındadır ve Ömerli'nin standart sokaklarının tamamında rahatlıkla manevra yapabilir. Sadece çok dar kapılardan veya duvar arası tünellerden geçemeyiz." },
            { question: "Operatörünüz tecrübeli mi?", answer: "Kesinlikle. Operatörlerimiz minimum 10 yıl tecrübeye sahiptir, SRC 4 belgeleri tamdır ve Ömerli'nin yerel zemin koşullarına son derece hakimdirler." },
            { question: "Kepçe ile beton kırma yapıyor musunuz?", answer: "Evet, Ömerli'deki eski duvarlar, şap betonları veya saha betonları için hidrolik kırıcı ataşmanımızla kırım yapabiliyoruz. Hızlı ve çevreye minimum rahatsızlık vererek işi bitiriyoruz." }
        ],
        conversion: { primaryCTA: "Ömerli Kepçe Hattı: 0539 477 81 12", secondaryCTA: "Ücretsiz Saha Keşfi" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "deliklikaya-kiralik-kepce", "hadimkoy-kiralik-kepce", "dolgu-tesviye", "temel-kazisi"] }
    },
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 17. İMRAHOR KİRALIK KEPÇE (KAZI & DOĞA ODAKLI)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "imrahor-kiralik-kepce",
        name: "İmrahor Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "İmrahor, Arnavutköy",
        secondaryLocations: ["Arnavutköy Merkez", "Karaburun", "Tayakadın", "Boğazköy"],
        seo: {
            metaTitle: "İmrahor Kiralık Kepçe | Arnavutköy Kazı & Hafriyat",
            metaDescription: "İmrahor'da kiralık kepçe ve iş makinesi hizmetleri. Mesire alanı hazırlığı, arazi kazısı ve yıkım işleri için JCB 3CX biko loder. 22 yıllık usta operatör.",
            canonical: "/imrahor-kiralik-kepce",
            h1: "İmrahor Kiralık Kepçe ve Arazi Düzenleme Hizmeti"
        },
        content: {
            intro: "Arnavutköy'ün hem tarihi dokusunu koruyan hem de doğasıyla nefes alan mahallesi İmrahor, son yıllarda kentsel dönüşüm ve yeni sosyal donatı projeleriyle büyük bir değişim içindedir. İmrahor Mesire Alanı gibi devasa sosyal projelerin ve bölgedeki tescilli tarihi yapıların çevresindeki çalışmalar, özel bir ihtimam ve uzmanlık gerektirir. Keçaş Kepçe olarak, İmrahor Mahallesi'nin her bir parselinde, eski taş ocakları bölgesinden İmrahor Roma Köprüsü çevresine kadar 22 yıllık saha deneyimimizle kiralık kepçe hizmeti sunuyoruz. İmrahor'un zemini, geçmişteki maden ve taş ocağı faaliyetleri nedeniyle oldukça değişkendir: bir noktada yumuşak dolgu toprak varken, birkaç metre ötede sert kaya tabakalarıyla karşılaşabilirsiniz. Biz, JCB 3CX iş makinemiz ve bu zemin dilinden anlayan operatörlerimizle, İmrahor'daki şantiyelerde veya müstakil arsalarınızda 'sorunsuz işçilik' garantisi veriyoruz. Mahallenin dar yollarından geçebilen makinemizle, bahçe temizliği, temel kazısı veya altyapı kanalı açma gibi işleri büyük bir titizlikle yürütüyoruz.",
            problemStatement: "İmrahor'da iş makinesi çalıştırmanın en büyük zorluğu, bölgenin 'doğasını ve tarihini' korurken modern işleyişi sürdürmektir. Amatör kepçe operatörleri, İmrahor'un hassas noktalarında veya eski yapıların çevresinde çalışırken dikkatsiz manevralar yapabilir, meyve bahçelerine veya mevcut altyapıya kalıcı zararlar verebilirler. Ayrıca, İmrahor'un bazı bölgeleri sular ve göletler çevresinde yer aldığı için yer altı su seviyesi yüksektir; yanlış bir kazı stratejisi şantiyenin anında suyla dolmasına ve projenin durmasına neden olabilir. İmrahor sakinleri için bir diğer sorun ise, Arnavutköy merkezden uzaklaştıkça kepçe bulmanın zorlaşması veya gelen makinelerin çok yüksek nakliye (sefer) ücretleri talep etmesidir. Güvenilmez şahıs kepçecileri, işi yarıda bırakabilir veya fiyatı iş ortasında artırabilir, bu da İmrahor'daki mülk sahiplerini ve müteahhitleri zor durumda bırakır.",
            solutionOverview: "Biz İmrahor'da 'lokal uzman' kimliğimizle hareket ederek bu problemleri bertaraf ediyoruz. 22 yıldır bu mahallede çalışıyor olmanın getirdiği tecrübeyle, nerede hangi zeminle karşılaşacağımızı biliyoruz. İmrahor Mesire Alanı civarındaki gevşek dolgularda güvenli şev açıları vererek kazı yapıyor, kaya zeminlere denk geldiğimizde JCB 3CX kırıcımızla zaman kaybetmeden müdahale ediyoruz. Suyun yüksek olduğu bölgelerde drenaj kanallarını önceleyerek sahanın kuru kalmasını sağlıyoruz. Arnavutköy'ün her köşesinde olduğu gibi İmrahor'da da 'nakliye dostu' fiyatlandırma yapıyoruz; makinemiz bölgede aktif çalıştığı için ulaşım maaliyetini müşterimize yansıtmıyoruz. Operatörlerimiz sadece makineyi kullanmaz; İmrahor'un tarihi köprüsü veya camileri çevresindeki hassas bölgelerin 'sit alanı' bilinciyle çalışır, doğaya ve çevreye zarar vermeden işini bitirir. Her iş sonunda, İmrahor'un o güzel doğasına uygun şekilde sahanın kaba temizliğini yapıyor ve tesviyesi yapılmış düzgün bir alan teslim ediyoruz.",
            processSteps: [
                { title: "Ücretsiz Saha Keşfi", description: "İmrahor'daki arsanıza veya şantiyenize geliyoruz. Zemin yapısını, giriş çıkış imkanlarını ve riskli noktaları ücretsiz analiz ediyoruz." },
                { title: "Net ve Şeffaf Teklif", description: "Yapılacak işin süresini ve gerekecek ataşmanları (kırıcı, dar kova vs.) belirleyip, saatlik veya götürü fiyatımızı iletiyoruz." },
                { title: "Zamanında Varış ve Uygulama", description: "İmrahor'a olan yakınlığımız sayesinde tam zamanında mobilizasyon sağlıyoruz. Operatörümüz iş planını harfiyen uygular." },
                { title: "Kalite Kontrol ve Teslimat", description: "Hassas kot kontrolü ile işi tamamlıyoruz. Sizin onayınızdan sonra çalışmayı bitirip makinemizi sahadan çekiyoruz." }
            ],
            benefits: [
                "İmrahor Mahallesi ve mesire alanı çevresinde yüksek saha deneyimi",
                "Arnavutköy-İmrahor hattında hızlı ve ekonomik mobilizasyon",
                "Değişken zemin yapısına (dolgu-taş-kaya) uygun ekipman seçimi",
                "JCB 3CX ile hassas arazi temizliği ve reglaj işçiliği",
                "Geçmişten gelen maden ve ocak sahası zemin bilgisi",
                "Operatörlü kiralama – 22 yıllık usta işçiliğine sahip ekip",
                "Bahçe, tarla ve mesire alanlarında 'çevre dostu' çalışma",
                "Kentsel dönüşüm alanlarında güvenli duvar ve bina yıkımı",
                "Altyapı (su, kanalizasyon) kazılarında sızdırmazlık ve kot hassasiyeti",
                "7/24 operatör desteği ve acil durum müdahale kapasitesi"
            ],
            useCases: [
                "Mesire alanı ve hobi bahçesi zemin hazırlığı",
                "İmrahor kentsel dönüşüm konut temeli kazıları",
                "Tarihi yapı çevresinde (izinli) hassas altyapı işleri",
                "Araba yolu açma ve stabilize malzeme serimi",
                "Bahçe temizliği, kök sökme ve moloz kaldırma",
                "Sera ve tarım alanı drenaj kanallarının açılması",
                "Beton saha kırma ve eski temel söküm işleri",
                "Eğilimli arazilerde kademeli tesviye ve dolgu",
                "Foseptik çukuru ve kanalizasyon hattı kazısı",
                "Havuz yeri açma ve çevre düzenleme reglajı"
            ],
            experienceProof: [
                "İmrahor bölgesinde 20 yılı aşkın sürede devam eden kazı referansları",
                "Mesire alanı projelerinde alt yüklenici olarak edinilen tecrübe",
                "Roma Köprüsü ve çevresindeki hassas şantiye deneyimleri",
                "Yüzlerce müstakil parsel sahibine sunulan güvenilir hizmet",
                "Bölgenin yerel operatörü olarak tescillenmiş marka değeri"
            ],
            pricingLogic: "İmrahor kiralık kepçe fiyatlarımız, bölgenin mesafesini ve çalışma koşullarını gözeten bir yapıdadır. Kısa süreli bahçe işleri için saatlik, büyük çaplı konut temelleri için günlük veya 'sefer başı' fiyat seçeneklerimiz bulunur. İmrahor'un değişken zeminleri (özellikle taşlık alanlar) ek kırıcı kullanımı gerektirebileceği için, ücretsiz keşif sonrası en net rakamı veriyoruz. 'Dürüst Esnaf' politikamız gereği, çalışılmayan saati değil sadece fiilen çalışılan süreyi puantaja ekliyoruz.",
            trustSignals: [
                "Arnavutköy Belediyesi onaylı yerel işletmecilik",
                "SRC ve G sınıfı belgeli, her yıl İSG eğitiminden geçen operatörler",
                "JCB marka iş makinerinde yetkili servis garantisi",
                "Gerçek referanslar ve bitirilen işlere dair saha fotoğrafları",
                "Vergi levhalı, fatura kesen ve yasal sorumluluk alan resmi yapı",
                "Mahalle sakinleri tarafından tanınan, sözünün eri aile firması"
            ]
        },
        media: {
            heroImageAlt: "İmrahor Arnavutköy'de arazi düzenleme yapan kiralık JCB kepçe - Keçaş Kepçe",
            galleryAlts: [
                "İmrahor arazi tesviye çalışması",
                "İmrahor mesire alanı hazırlık işi",
                "İmrahor moloz yükleme ve temizlik",
                "Roma Köprüsü çevresi altyapı kazısı",
                "İmrahor'da kayalık zemin kırma çalışması"
            ]
        },
        localSEO: {
            serviceAreaText: "İmrahor merkez, İmrahor Mesire Alanı çevresi, Roma Köprüsü mevkii ve mahallemizin tüm sokaklarında aktif kiralık kepçe desteği veriyoruz.",
            locationContext: "İmrahor, ismini Osmanlı'nın 'mir ahur'undan (saray atlarının bakıcısı) alan, Arnavutköy'ün hem tarihi hem stratejik bir mahallesidir. Bir tarafı Sazlıbosna Barajı'na, diğer tarafı Arnavutköy merkeze dayanır. Bölgenin en büyük özelliği, eskiden aktif olan taş ocaklarının bugün yerini sosyal alanlara ve kentsel dönüşüme bırakmasıdır. Bu durum İmrahor'un zeminini 'yorgun ve sürprizli' bir hale getirmiştir. Keçaş Kepçe olarak, toprağın altında nerede boşluk, nerede kaya olduğunu bilerek kazıyoruz. Hz. Ömer Camii'nden Halis Kutmangil okuluna kadar her bölgede 'İmrahörlünün komşusu' olarak hizmetteyiz."
        },
        faq: [
            { question: "İmrahor Mesire Alanı yakınlarına kepçe gönderiyor musunuz?", answer: "Evet, İmrahor Mesire Alanı ve çevresindeki hobi bahçeleri, piknik alanları veya yeni şantiyelerin tamamına hizmet veriyoruz. Bölgenin giriş yollarını ve çalışma sınırlarını yakından tanıyoruz." },
            { question: "Zemin taşa veya kayaya denk gelirse ne yapıyorsunuz?", answer: "JCB 3CX makinemizin arkasında her zaman hidrolik kırıcı (breaker) ataşmanımız montajlıdır. Kayaya denk gelindiğinde hemen kazıcı kovayı çıkarıp kırıya geçiyor ve işi aksatmadan bitiriyoruz." },
            { question: "Dar bahçelere kepçe giriyor mu?", answer: "Evet, İmrahor'daki çoğu bahçeye 2.30 metre genişliğindeki JCB kepçemiz rahatlıkla girer. Operatörümüz çok hassas manevra yapabildiği için ağaçlara veya duvarlara zarar vermeden çalışır." },
            { question: "Fiyatlarınıza operatör ve yakıt dahil mi?", answer: "Evet, genellikle operatörlü, sigortalı ve yakıt dahil 'yarım gün' veya 'tam gün' paketleri üzerinden fiyat veriyoruz. İsteğinize göre yakıt hariç seçeneklerimizi de değerlendirebilirsiniz." },
            { question: "Acil bir kanalizasyon patlamasında hemen gelebilir misiniz?", answer: "İmrahor acil durum hattımız (0539 477 81 12) 7/24 hizmettedir. Hafriyat veya kazı makinelerimiz müsaitse en kısa sürede adresinize yönlendirilir." }
        ],
        conversion: { primaryCTA: "İmrahor Kepçe Hattı: 0539 477 81 12", secondaryCTA: "Ücretsiz Fiyat Al" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "karaburun-kiralik-kepce", "kazi-isleri", "temel-kazisi", "yikim-hizmetleri"] }
    },
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 18. KARLIBAYIR KİRALIK KEPÇE (KENTSEL DÖNÜŞÜM ODAKLI)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "karlibayir-kiralik-kepce",
        name: "Karlıbayır Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Karlıbayır, Arnavutköy",
        secondaryLocations: ["Arnavutköy Merkez", "İslambey", "Yavuz Selim", "Hicret"],
        seo: {
            metaTitle: "Karlıbayır Kiralık Kepçe | Arnavutköy Kentsel Dönüşüm Kazı",
            metaDescription: "Karlıbayır'da profesyonel kiralık kepçe. Kentsel dönüşüm, bina temeli ve dar alan kazıları için JCB 3CX. Devlet Hastanesi çevresi hızlı hizmet. ☎ 0539 477 81 12",
            canonical: "/karlibayir-kiralik-kepce",
            h1: "Karlıbayır Kiralık Kepçe ve Bina Temel Kazısı"
        },
        content: {
            intro: "Arnavutköy'ün merkezine en yakın ve yerleşim yoğunluğunun en yüksek olduğu mahallelerden biri olan Karlıbayır, son yıllarda kentsel dönüşümün kalbi haline gelmiştir. Eski ve riskli binaların yıkılıp yerine modern konutların yükseldiği bu süreçte, Karlıbayır'ın kendine has coğrafi yapısı ve dar sokakları, profesyonel bir kepçe hizmetini zorunlu kılmaktadır. Karlıbayır Mahallesi, Arnavutköy Devlet Hastanesi'ne olan yakınlığı ve merkezi konumuyla sürekli bir hareketlilik içindedir. Keçaş Kepçe olarak, Karlıbayır'daki inşaat projelerinde, özellikle kot farkı olan arazilerde ve bitişik nizami yapılarda 22 yıllık tecrübemizle yanınızdayız. Bölgenin sıkışık yapılaşması, operatörün makineyi milimetrik bir hassasiyetle kullanmasını gerektirir. Bir komşu duvara zarar vermeden temel kazmak veya dar bir sokaktaki kanalizasyon arızasına müdahale etmek, sadece iyi bir makineyle değil, Karlıbayır'ın sokaklarını avucunun içi gibi bilen usta bir operatörle mümkündür. JCB 3CX beko loder makinemiz, Karlıbayır'ın dik yokuşlarında ve dar dönüşlerinde üstün manevra kabiliyeti sergileyerek projelerinizin aksamadan ilerlemesini sağlar.",
            problemStatement: "Karlıbayır'da çalışırken karşılaşılan en büyük zorluk, dar çalışma alanları ve bitişik nizam binalardır. Çoğu zaman makinenin girebileceği alan o kadar kısıtlıdır ki, en ufak bir manevra hatası yan binanın temeline, yoldaki doğalgaz hattına veya elektrik kablolarına zarar verebilir. Özellikle kentsel dönüşüm kapsamında yapılan yıkımlarda, çıkan molozun dar sokaklardan tahliyesi büyük bir lojistik problem oluşturur. Tecrübesiz operatörlerin kullandığı büyük makineler, Karlıbayır'ın asfalt yollarına ve kaldırımlarına zarar vererek mahalle sakinleriyle sorun yaşamanıza neden olabilir. Ayrıca, bölgedeki kot farkları nedeniyle kazı esnasında toprak kayması riskleri yüksektir. Profesyonel olmayan, mahalle dışından gelen kepçeciler bu yerel riskleri öngöremedikleri için işin süresinin uzamasına ve maliyetlerin kontrolsüzce artmasına yol açarlar. Şahıs odaklı, belgesiz ve sigortasız çalışanlar ise olası bir kaza anında sizi yasal olarak savunmasız bırakır.",
            solutionOverview: "Keçaş Kepçe olarak Karlıbayır projelerinizde 'güvenli ve hassas' çalışma garantisi sunuyoruz. 22 yıldır bu mahallede, komşularınızla kurduğumuz güven bağıyla hizmet veriyoruz. JCB 3CX makinemiz, lastik tekerlekli yapısı sayesinde Karlıbayır'ın asfalt zeminine zarar vermez. Dar sokaklarda geri manevra yaparken kullandığımız profesyonel yardımcı personelimiz ve operatörümüzün 'el hassasiyeti' sayesinde çevre yapılara en ufak bir temas dahi etmeden kazıyı tamamlıyoruz. Kot farkı olan arazilerde, istinat duvarı öncesi yapılan kademeli kazılarda (şevli kazı) toprak dengesini koruyarak güvenli bir çalışma ortamı yaratıyoruz. Karlıbayır Meydanı ve Devlet Hastanesi çevresindeki projelerde, trafik akışını bozmayacak şekilde hızlı mobilizasyon sağlıyoruz. İş öncesinde altyapı hatlarını (İSKİ, İGDAŞ) kontrol ederek riski minimuma indiriyoruz. Çıkan molozu ön kovamızla hızlıca yükleyerek, dar sokaklardaki işgal süresini en aza indiriyoruz. SRC belgeli ve sigortalı operatörlerimizle hem kurumsal müteahhitlere hem de kendi evini yaptıran mülk sahiplerine resmi, faturalı ve hesap verebilir bir hizmet sunuyoruz.",
            processSteps: [
                { title: "Saha ve Çevre Analizi", description: "Karlıbayır'daki iş sahanıza gelip komşu binaların durumunu, sokak genişliğini ve altyapı risklerini yerinde inceliyoruz." },
                { title: "Hassas Fiyatlandırma", description: "Bitişik nizam çalışma zorluklarını ve işin süresini dikkate alarak, bütçenize uygun şeffaf bir teklif sunuyoruz." },
                { title: "Koordineli Çalışma", description: "Makinemizi trafik yoğunluğunu gözeterek sahaya ulaştırıyor, iş güvenliği önlemlerini alarak kazı veya kırım işlemine başlıyoruz." },
                { title: "Saha Temizliği ve Onay", description: "İş bitiminde zemini düzeltiyor, alanı temizliyoruz. Sizin onayınızla puantajı tutup teslimatımızı yapıyoruz." }
            ],
            benefits: [
                "Karlıbayır'ın dar sokaklarında milimetrik manevra kabiliyeti",
                "Kentsel dönüşüm yıkım ve temel kazılarında yüksek tecrübe",
                "Arnavutköy Devlet Hastanesi çevresine 15 dakikada ulaşım",
                "Asfalt ve yaya yollarına zarar vermeyen lastik tekerlekli JCB kepçeler",
                "22 yıllık bölge hakimiyetiyle altyapı hatlarına karşı yüksek duyarlılık",
                "Bitişik nizam binalarda güvenli ve sarsıntısız kazı işçiliği",
                "7/24 acil kiralık kepçe ve teknik destek hattı",
                "Hukuki sorumluluğu üstlenen sigortalı ve belgeli operatör ekibi",
                "Açılır kova ve kırıcı ataşmanlar ile tek makinede çoklu çözüm",
                "Bölge müteahhitleri tarafından tercih edilen güvenilir iş ortağı"
            ],
            useCases: [
                "Bina temeli kazısı ve hafriyat yükleme",
                "İstinat duvarı temel hendeği açılması",
                "Dar sokaklarda kanalizasyon ve su hattı kazıları",
                "Eski bina yıkımı ve moloz kaldırma çalışmaları",
                "Bahçe duvarı hazırlığı ve arazi tesviyesi",
                "Doğalgaz ve elektrik tavası kanallarının açılması",
                "Kot farkı olan arazilerde kademeli reglaj",
                "İnşaat sahası malzeme taşıma ve istifleme",
                "Site içi çevre düzenleme ve toprak serimi",
                "Kentsel dönüşüm projelerinde altyapı deplase işleri"
            ],
            experienceProof: [
                "Karlıbayır'da kentsel dönüşüm kapsamında bitirilen 50+ bina temeli",
                "Arnavutköy Devlet Hastanesi ek inşaat sürecinde sağlanan iş makinesi desteği",
                "Bölgedeki birçok yerel müteahhit ile 20 yılı aşkın sürekli çalışma",
                "Karlıbayır'ın dik yokuşlarında makine devrilme riskine karşı uzman operatör kontrolü",
                "22 yıllık mahalle esnafı olmanın getirdiği yüksek güven endeksi"
            ],
            pricingLogic: "Karlıbayır kiralık kepçe fiyatlarımızda, bitişik nizam ve dar sokak gibi 'dikkat gerektiren' koşulları gözetiyoruz. Standart saatlik kiralama dışında, bina temeli gibi hacimli işler için 'metreküp' veya 'götürü' fiyat paketleri sunabiliyoruz. Mahalle sakinlerine özel, kısa süreli moloz yükleme veya bahçe temizliği gibi işlerde oldukça ekonomik tarifeler uyguluyoruz. Ücretsiz keşif yaparak, işin zorluk derecesini önceden belirliyor ve size sonradan ek maliyet çıkarmayan net bir rakam veriyoruz.",
            trustSignals: [
                "Arnavutköy Esnaf ve Sanatkarlar Odası üyeliği",
                "Karlıbayır yerel referanslı onlarca başarılı şantiye",
                "Aktif sigortalı, profesyonel operatör kadrosu",
                "Arıza yapmayan, yeni nesil ve bakımlı JCB 3CX makine parkuru",
                "Cayırma ve mağdur etmeyen, sözleşmeli/faturalı çalışma sistemi",
                "7/24 ulaşılan canlı destek ve operasyon hattı"
            ]
        },
        media: {
            heroImageAlt: "Karlıbayır Arnavutköy'de bitişik nizam bina temeli kazan kiralık kepçe - Keçaş Kepçe",
            galleryAlts: [
                "Karlıbayır kentsel dönüşüm kazı çalışması",
                "Karlıbayır dar sokak moloz yükleme",
                "Arnavutköy Devlet Hastanesi çevresi kepçe işi",
                "Karlıbayır temel sondaj ve kanal kazısı",
                "Keçaş Kepçe Karlıbayır bölge mobilizasyonu"
            ]
        },
        localSEO: {
            serviceAreaText: "Karlıbayır Meydanı, Arnavutköy Devlet Hastanesi çevresi, İslambey sınırı ve Karlıbayır'ın tüm cadde ve sokaklarında hizmetinizdeyiz.",
            locationContext: "Karlıbayır, ismini kış aylarında karların en geç kalktığı yüksek mevkisinden alan, coğrafi olarak Arnavutköy'ün yüksek bir tepesinde kurulu mahallesidir. Bu durum, bölgedeki inşaatlarda ciddi kot farkları ve dik yamaçlar doğurur. Karlıbayır'da kazı demek, aynı zamanda 'istinat' ve 'denge' demektir. Keçaş Kepçe olarak bu toprağın ruhunu biliyor, kazıkları ve perdeleri ona göre planlamanıza yardımcı oluyoruz. Mahallemizin merkezi camisi ve meydanından, hastane arka sokaklarındaki en dar parsellere kadar her noktada operasyon yeteneğine sahibiz."
        },
        faq: [
            { question: "Karlıbayır'ın dar sokaklarına kepçeniz girebilir mi?", answer: "Evet, JCB 3CX makinemiz standart bir damperli kamyondan daha dar bir gövdeye sahiptir. Karlıbayır'ın en dar sokaklarında bile manevra yapabiliyor, binalar arasından geçebiliyoruz. Eksperimiz gerekirse gelip sokağı önceden ölçebilir." },
            { question: "Yan binanın temeline zarar gelmesinden korkuyoruz, ne önlem alıyorsunuz?", answer: "Hassas operatörlüğümüz en büyük garantimizdir. Bitişik nizamlarda kazıyı kademeli yapıyor, yan binanın temel pabuçlarını el ile sıyırır gibi açıyoruz. Gerekirse destek elemanımız (işçi) ile manuel koordinasyon sağlıyoruz." },
            { question: "Karlıbayır'da acil kanalizasyon arızası için 7/24 kepçe bulabilir miyiz?", answer: "Evet, Karlıbayır mahallesine çok yakın lokasyonda makinelerimiz hazır bulunmaktadır. Gece veya gündüz fark etmeksizin acil altyapı kazıları için 0539 477 81 12 numarasından bize ulaşabilirsiniz." },
            { question: "Yıkım sonrası molozu da siz mi taşıyorsunuz?", answer: "Biz kepçe ile yükleme hizmeti veriyoruz. Anlaşmalı olduğumuz damperli hafriyat kamyonları ile koordineli çalışarak molozunuzu döküm sahasına gönderiyoruz. Tek yerden çözüm sunuyoruz." },
            { question: "Kentsel dönüşüm projelerinde fiyat paketleriniz var mı?", answer: "Evet, müteahhitlerimiz için bina yıkımı, temel kazısı ve altyapı bağlantılarını kapsayan 'anahtar teslim' kazı paketleri sunuyoruz. Uzun süreli çalışmalarda günlük fiyatlarımız oldukça rekabetçidir." }
        ],
        conversion: { primaryCTA: "Karlıbayır Kepçe: 0539 477 81 12", secondaryCTA: "Ücretsiz Keşif ve Fiyat" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "temel-kazisi", "kazi-isleri", "yunus-emre-kiralik-kepce", "yikim-hizmetleri"] }
    },
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 19. HARAÇÇI KİRALIK KEPÇE (GELİŞİM & SANAYİ ODAKLI)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "haracci-kiralik-kepce",
        name: "Haraççı Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Haraççı, Arnavutköy",
        secondaryLocations: ["Hadımköy", "Merkez", "Taşoluk", "İmrahor"],
        seo: {
            metaTitle: "Haraççı Kiralık Kepçe | Arnavutköy İş Makinesi Kiralama",
            metaDescription: "Haraççı'da operatörlü kiralık kepçe hizmeti. Konut inşaatları ve hafif sanayi projeleri için JCB 3CX. 22 yıllık yerel tecrübe. ☎ 0539 477 81 12",
            canonical: "/haracci-kiralik-kepce",
            h1: "Haraççı Kiralık Kepçe ve Hafriyat Çözümleri"
        },
        content: {
            intro: "Arnavutköy'ün köklü yerleşim birimlerinden biri olan Haraççı Mahallesi, son yıllarda hem sanayi sitelerinin hem de modern yapılaşmanın etkisiyle büyük bir dönüşüm geçirmektedir. Haraççı, İstanbul Havalimanı'na yakınlığı ve stratejik konumuyla iş makinesi ihtiyacının en yoğun olduğu bölgelerden biridir. Keçaş Kepçe olarak, Haraççı'nın hem eski yerleşim alanlarındaki dar bahçe işlerinde hem de yeni gelişen sanayi parsellerindeki büyük hafriyat taleplerinde 22 yıldır kesintisiz hizmet sunuyoruz. Haraççı Meydanı'ndan en ücra sokaklarına kadar mahallemizin her noktasına hakimiz. Bölgenin genel olarak düz ama yer yer yumuşak toprak yapısı, kazı işlemlerinde özel bir dikkat gerektirir. Biz, donanımlı JCB 3CX beko loder makinemiz ve bölgeyi tanıyan usta operatörlerimizle, Haraççı'daki projelerinizde hem hız hem de güvenlik vaat ediyoruz. Fabrika zemin hazırlıklarından, villa temellerine kadar her ölçekteki işinizde 'tek yerden uzman destek' prensibiyle hareket ediyoruz.",
            problemStatement: "Haraççı mahallesindeki şantiyelerde en sık karşılaşılan sorun, altyapı hatlarının yoğunluğu ve yerleşim yerleriyle iç içe geçen sanayi alanlarıdır. Tecrübesiz operatörlerin yaptığı dikkatsiz kazılar, Haraççı'nın yerleşik sakinlerini susuz bırakabilir veya elektrik kesintilerine yol açabilir. Ayrıca bölgenin bazı kısımlarında yer alan meyve bahçeleri ve tarım arazilerinin inşaata dönüştürülmesi esnasında, verimli toprağın korunması ve doğru tesviye yapılması kritik bir konudur; yanlış kepçe kullanımı bu arazileri verimsiz hale getirebilir veya drenaj sorunlarına yol açabilir. Bir diğer problem ise, kurumsal sanayi tesislerinin 'belgeli ve profesyonel' taşeron bulmakta yaşadığı zorluktur. Çoğu serbest çalışan kepçeci, İSG kurallarına ve gerekli resmi evrak süreçlerine hakim olmadığı için iş akışını yavaşlatır. Haraççı sakinleri ise küçük işleri için kepçe bulamamaktan veya yüksek yol masraflarından şikayetçidirler.",
            solutionOverview: "Keçaş Kepçe olarak bu sorunları, 22 yıllık yerel deneyimimiz ve kurumsal çalışma disiplinimizle çözüyoruz. Haraççı'daki her parselde 'kazmadan önce anla' felsefesiyle çalışıyoruz. İGDAŞ ve İSKİ hatlarını dikkate alarak, hassas kotlarla kazı yapıyoruz. Makinemize takılabilen hidrolik kırıcı (breaker) ile beton sökümlerini sessiz ve hızlı bitiriyor, açılır kovamızla zemin düzleme (reglaj) işlemlerinde milimetrik hassasiyet sunuyoruz. Haraççı mahalle sınırları içine çok yakın olduğumuz için 'yol masrafı' gibi ek yükleri müşterimize yansıtmıyoruz; böylece en ufak bahçe düzenleme işiniz dahi ekonomik bir hal alıyor. Operatörlerimiz SRC 4 belgeli, sigortalı ve profesyoneldir; fabrikalarınızın veya site yönetimlerinizin istediği tüm İSG belgelerini (periyodik kontrol, operatörlük belgesi vs.) anında sunabiliyoruz. İş bittiğinde alanı tertemiz bırakıyor, çıkan tüm fazlalıkları yükleyerek sizi moloz derdinden kurtarıyoruz. 'Yarın değil, bugün' sloganımızla Haraççı'daki acil taleplerinize saatler içinde yanıt veriyoruz.",
            processSteps: [
                { title: "Saha Keşfi ve Talimat Alımı", description: "Haraççı'daki adresinize gelip işin kapsamını belirliyoruz. Altyapı hatlarını projeniz üzerinden veya yerinde kontrol ediyoruz." },
                { title: "Ekonomik Fiyatlandırma", description: "İşimizi yerel olarak yaptığımız için nakliye avantajlı, net ve rekabetçi fiyat teklifimizi iletiyoruz." },
                { title: "Zamanında Mobilizasyon", description: "JCB 3CX kepçemizi söz verdiğimiz saatte Haraççı şantiyenize ulaştırarak çalışmaya başlıyoruz." },
                { title: "Onaylı Teslimat", description: "Yapılan kazı veya tesviye işini sizinle birlikte kontrol edip onay aldıktan sonra sahadan ayrılıyoruz." }
            ],
            benefits: [
                "Haraççı ve çevresinde 22 yıllık yerleşik firma güveni",
                "Sanayi ve konut projelerinde çift yönlü uzmanlık",
                "Arnavutköy-Haraççı hattında en hızlı mobilizasyon kapasitesi",
                "Operatörlerin bölge altyapısına olan yüksek hakimiyeti",
                "JCB 3CX ile kazı, kırım ve yükleme işlerinde yüksek verimlilik",
                "Tüm İSG belgelerine ve resmi çalışma standartlarına tam uyum",
                "Bahçe düzenlemelerinde bitkilere ve çevre yapılara zarar vermeyen hassas kullanım",
                "Ekonomik saatlik ve günlük kiralama seçenekleri",
                "7/24 acil kiralık kepçe desteği",
                "Sürpriz maliyet içermeyen, şeffaf ve dürüst fiyatlandırma"
            ],
            useCases: [
                "Fabrika ve depo zemin hazırlığı (reglaj)",
                "Villa ve müstakil ev temel kazıları",
                "Bahçe temizliği, ağaç sökümü ve toprak serimi",
                "Hafif sanayi siteleri altyapı kanal kazıları",
                "Eski bina ve fabrika içi zemin yıkımları",
                "Yağmur suyu drenaj hatları oluşturma",
                "İnşaat molozu yükleme ve saha temizliği",
                "Arsa parselleme ve sınır belirleme kazıları",
                "Beton saha kırma ve hafriyat alımı",
                "Otopark ve garaj zemini hazırlama"
            ],
            experienceProof: [
                "Haraççı Mahallesi'nde 2004'ten bu yana tamamlanmış 100+ proje",
                "Haraççı Meydanı ve çevresindeki birçok kamu projesinde görev alma",
                "Bölgedeki yerel üreticiler ve sanayicilerle uzun vadeli çözüm ortaklıkları",
                "Hassas zeminlerde operatör hatasız teslim edilen yüksek metrajlı kanal işleri",
                "Haraççı yerlisi operatörler ile bölge coğrafyasına tam hakimiyet"
            ],
            pricingLogic: "Haraççı kiralık kepçe fiyatlarımız, işin zorluk derecesine ve makinenin sahada kalacağı süreye göre belirlenir. 'Komşu esnaf' mantığıyla yaklaştığımız için, küçük bahçe işleri veya 1-2 saatlik yükleme taleplerinde en uygun tarifeyi uyguluyoruz. Fabrika temeli gibi büyük projelerde ise günlük veya iş bazlı paketlerle maliyetlerinizi düşürüyoruz. Ücretsiz saha keşfi yaparak, işinize en uygun bütçeyi birlikte oluşturuyoruz.",
            trustSignals: [
                "Arnavutköy Belediyesi ve Kaymakamlığına kayıtlı yasal işletme",
                "Sürekli yenilenen ve bakımı yapılan JCB ekipman parkuru",
                "Müşteri yorumlarında %100 güvenirlik puanı",
                "Resmi sözleşme ve fatura imkanı",
                "Yasal tüm operatörlük belgelerine sahip uzman ekip",
                "Bölgenin en eski ve tanınan iş makinesi kiralama markası"
            ]
        },
        media: {
            heroImageAlt: "Haraççı Arnavutköy'de fabrika zemin tesviyesi yapan JCB kiralık kepçe - Keçaş Kepçe",
            galleryAlts: [
                "Haraççı sanayi sitesi altyapı çalışması",
                "Haraççı villa temeli kazı işi",
                "Haraççı bahçe düzenleme ve reglaj",
                "Haraççı Meydanı çevresi moloz yükleme",
                "Keçaş Kepçe Haraççı iş sahası mobilizasyonu"
            ]
        },
        localSEO: {
            serviceAreaText: "Haraççı Meydanı, Sanayi Caddesi, İBB Sosyal Tesisler çevresi ve mahallenin tüm yerleşim bölgelerinde aktif hizmet veriyoruz.",
            locationContext: "Haraççı, ismini Osmanlı dönemindeki askeri bir birim veya vergi sisteminden alan, Arnavutköy'ün en merkezi gelişim akslarından biridir. Mahalle, sanayi ile konutun iç içe geçtiği, bu yüzden de kepçe hizmetinde 'hassasiyet' ve 'güç' dengesinin korunması gereken bir yerdir. Haraççı'nın killi toprak yapısı, kışın ağır makinelerin batmasına neden olabilir; bu yüzden JCB 3CX gibi optimize edilmiş makineler burada en yüksek verimi verir. Mahallemizin camilerinden okul yollarına kadar her karışı avucumuzun içi gibi biliyoruz."
        },
        faq: [
            { question: "Haraççı'da kepçe kiralama ücretleri ne kadar?", answer: "Ücretlerimiz saatlik ve günlük olarak değişmektedir. Haraççı'da yerel olduğumuz için nakliye maliyetimiz yoktur, bu da fiyatlarımıza indirim olarak yansır. Ücretsiz keşif sonrası net rakamı iletiyoruz." },
            { question: "Dar sokaktaki bir bahçe için kepçe gelir mi?", answer: "Kesinlikle. Haraççı'nın eski yerleşim alanlarındaki en dar sokaklara dahi JCB 3CX ile girebiliyoruz. Bahçe temizliği, kök sökme veya toprak serimi gibi işleri çevreye zarar vermeden yapıyoruz." },
            { question: "Makinelerinizde kırıcı mevcut mu?", answer: "Evet, tüm makinelerimizde beton ve asfalt kırmak için yüksek darbeli hidrolik kırıcı ataşmanı bulunmaktadır. Haraççı'daki otopark veya bahçe betonu kırma işleriniz için bizi 7/24 arayabilirsiniz." },
            { question: "Resmi kurumlar için fatura kesiyor musunuz?", answer: "Evet, tüm hizmetlerimiz için resmi fatura kesiyoruz. Ayrıca sanayi sitelerinin ve kurumsal firmaların talep ettiği tüm İSG evraklarımız eksiksizdir." },
            { question: "Acil taleplerde kaç dakikada gelirsiniz?", answer: "Haraççı'da makinelerimiz aktif olduğu için ortalama 30-60 dakika içinde sahanızda olabiliyoruz. Takvimimize göre en hızlı çözümü sunuyoruz." }
        ],
        conversion: { primaryCTA: "Haraççı Kepçe Hattı: 0539 477 81 12", secondaryCTA: "Ücretsiz Fiyat Al" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "tasoluk-kiralik-kepce", "kazi-isleri", "temel-kazisi", "yassioren-kiralik-kepce"] }
    },
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 20. YASSIÖREN KİRALIK KEPÇE (SANAYİ & LOJİSTİK ÜSSÜ)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "yassioren-kiralik-kepce",
        name: "Yassıören Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Yassıören, Arnavutköy",
        secondaryLocations: ["Hadımköy", "Yassıören-Akpınar Sanayi", "Dursunköy", "Boyalık"],
        seo: {
            metaTitle: "Yassıören Kiralık Kepçe | Akpınar Sanayi Bölgesi Uzmanı",
            metaDescription: "Yassıören'de profesyonel kiralık kepçe. Akpınar Sanayi Bölgesi ve lojistik depolar için JCB 3CX biko loder. Operatörlü, güvenilir hizmet. ☎ 0539 477 81 12",
            canonical: "/yassioren-kiralik-kepce",
            h1: "Yassıören Kiralık Kepçe ve Sanayi Hafriyat Hizmetleri"
        },
        content: {
            intro: "Arnavutköy'ün kuzeybatısında, lojistik ve ağır sanayinin kalbi olarak konumlanan Yassıören Mahallesi, bugün İstanbul'un en önemli üretim üslerinden birine ev sahipliği yapmaktadır. Özellikle Akpınar Sanayi Bölgesi ve çevresindeki devasa antrepo yatırımları, Yassıören'i iş makinesi kiralama sektöründe en yüksek standartların arandığı bir nokta haline getirmiştir. Keçaş Kepçe olarak, Yassıören'in meralardan dev fabrikalara dönüşüm sürecinde 22 yıldır aktif rol oynuyoruz. Kuzey Marmara Otoyolu bağlantısı ve İstanbul Havalimanı koridoru üzerindeki bu stratejik lokasyonda, kurumsal firmaların ve yatırımcıların en güvendiği çözüm ortağıyız. Yassıören'in sert rüzgarlı açık alanlarından, fabrika içlerindeki dar operasyon sahalarına kadar her türlü koşulda JCB 3CX kepçemizle hizmet veriyoruz. Sanayi disiplinine hakim operatörlerimiz, yüksek metrajlı kanalizasyon hatlarından milimetrik fabrika temeli reglaj işlerine kadar tüm süreçleri profesyonellikle yönetir. Akpınar Sanayi Bölgesi'nin katı kurallarına ve çalışma temposuna tam uyumlu ekibimizle, işinizin aksamasına asla izin vermiyoruz.",
            problemStatement: "Yassıören ve Akpınar Sanayi hattındaki projelerde en büyük problem, sahaların büyüklüğü ile işin detaycılığı arasındaki dengedir. Devasa ekskavatörlerin giremediği dar alanlarda veya küçük detaylı altyapı işlerinde hantal makineler zaman ve para kaybıdır. Ayrıca bölgenin sanayi karakteri gereği, altyapı hatları (yüksek gerilim, ana su boruları, fiber optik) son derece yoğundur; tecrübesiz bir operatörün ufak bir hatası koca bir sanayi bölgesinin enerjisinin kesilmesine ve milyonlarca liralık tazminatlara yol açar. Bir diğer sorun ise, Yassıören gibi merkeze biraz daha mesafeli bölgelerde acil kepçe ihtiyacı doğduğunda, operatörüyle birlikte sağlıklı bir makine bulmanın zorluğudur. Çoğu kiralama firması uzaklık nedeniyle yüksek 'nakliye sefer bedeli' talep ederken, bakımsız makineli şahıslar ise sanayi sitelerinin istediği İSG evraklarını (E-Devlet giriş bildirimleri, periyodik kontrol formları vs.) sağlayamaz.",
            solutionOverview: "Keçaş Kepçe olarak Yassıören'deki bu boşluğu 'kurumsal yerellik' ve '7/24 mobilizasyon' ile dolduruyoruz. Akpınar Sanayi Bölgesi ve Yassıören merkezindeki şantiyeler için makinemizi her an hazır tutuyoruz. JCB 3CX makinemiz, hem ağır yükleme yapabilecek kapasitede hem de dar kanalları hassasça açabilecek kıvraklıktadır. Sanayi sitelerine girişlerde istenen operatör sigorta girişleri, mesleki yeterlilik belgeleri ve makine periyodik raporlarını dijital ortamda şantiye şefinize anında ulaştırıyoruz. Altyapı yoğunluğu olan sahalarda, kazı öncesi 'güvenli bölge' tespiti yapıyor ve el hassasiyeti yüksek operatörlerimizle çalışıyoruz. Yassıören'e olan rotamız üzerinde sürekli makinelerimiz bulunduğundan, müşterilerimize ek nakliye yükü bindirmeden en rekabetçi fiyatları sunuyoruz. Sadece kazı değil, fabrika içi beton kırma, forklift çatalı ile paletli malzeme taşıma ve yükleme gibi entegre çözümlerimizle projenizdeki makine çeşitliliği ihtiyacını tek başına karşılıyoruz. İş bitiminde, sanayi disiplinine uygun saha temizliğini yaparak personelinizi yormadan alanı teslim ediyoruz.",
            processSteps: [
                { title: "Saha ve Altyapı Tetkiki", description: "Yassıören'deki sanayi parselinize veya şantiyenize gelip ücretsiz keşif yapıyoruz. Altyapı kritik noktalarını işaretliyoruz." },
                { title: "Sanayi Standartlarında Teklif", description: "İş güvenliği ve çalışma süresini kapsayan, sürpriz maliyet içermeyen profesyonel fiyatlandırmamızı sunuyoruz." },
                { title: "Zamanında Sahaya İniş", description: "Söz verdiğimiz gün ve saatte, tüm belgeleri hazır makine ve operatörümüzle Yassıören'de hazır bulunuyoruz." },
                { title: "Profesyonel Uygulama ve Raporlama", description: "Hassas kotlarda kazı ve dolgu işlemlerini tamamlıyor, puantajınızı onaylatarak işi kusursuz teslim ediyoruz." }
            ],
            benefits: [
                "Akpınar Sanayi Bölgesi (ASKOOP) çalışma prosedürlerine tam hakimiyet",
                "Sanayi altyapı hatlarına karşı yüksek hassasiyetli operatörlük",
                "Yassıören ve çevresine hızlı mobilizasyon (Ek nakliye maliyetsiz)",
                "JCB 3CX ile kazı, kırım ve forklift hizmetinin tek makinede birleşmesi",
                "Tüm resmi kurum ve sanayi siteleri için eksiksiz İSG evrak desteği",
                "Lojistik depoların zemin hazırlığında (stabilize dolgu) uzmanlaşmış ekip",
                "22 yıllık Arnavutköy ve yerel sanayi bölgeleri tecrübesi",
                "Kurumsal firmalar için faturalı ve şeffaf çalışma sistemi",
                "7/24 ulaşılabilen teknik destek ve operatör hattı",
                "Bölgenin rüzgarlı ve açık arazi koşullarında yüksek iş disiplini"
            ],
            useCases: [
                "Fabrika ve depo temeli pabuç kazıları",
                "Akpınar Sanayi Bölgesi altyapı ve kanal işleri",
                "Lojistik antrepo zemin tesviyesi ve reglaj",
                "Saha betonu öncesi stabilize dolgu ve sıkıştırma",
                "Trafo merkezi ve makine temeli hassas kazıları",
                "Yangın hidrant hattı ve su deposu kazıları",
                "TIR parkı sahası hazırlığı ve çevre düzenleme",
                "Sanayi binaları içindeki beton kırım ve moloz yükleme",
                "Fiber optik ve OG/AG kablo kanallarının açılması",
                "Parsel bazlı ağaç sökümü ve genel arazi temizliği"
            ],
            experienceProof: [
                "Akpınar Sanayi Bölgesi ve Yassıören hattında tamamlanmış 150+ orta ve büyük ölçekli iş",
                "Lojistik devlerinin depo zemin hazırlığı süreçlerinde aktif taşeronluk",
                "Bölgedeki altyapı deplase ve onarım işlerinde sağlanan acil müdahale desteği",
                "Yüksek gerilim hatları altında dahi hatasız ve emniyetli operatörlük performansı",
                "22 yıllık Arnavutköy-Hadımköy-Yassıören yerel sanayi uzmanlığı"
            ],
            pricingLogic: "Yassıören kiralık kepçe fiyatlarımız, sanayi bölgelerinin yoğun ve disiplinli çalışma temposuna göre optimize edilmiştir. Fabrika inşaatı gibi uzun süreli projeler için günlük ve haftalık indirimli tarifelerimiz mevcuttur. Akpınar Sanayi'ye yakınlığımız sayesinde yol ücretini minimize ediyoruz. Ücretsiz saha keşfi sonrası, kullanılacak ataşmanlara ve işin risk derecesine göre en ekonomik ve dürüst teklifi sunuyoruz.",
            trustSignals: [
                "Arnavutköy yerleşiği olan köklü ve yasal şirket yapısı",
                "Akpınar Sanayi ve büyük lojistik depolarından alınan referanslar",
                "SRC ve G sınıfı belgeli, kalifiye operatör kadrosu",
                "JCB marka, yeni model ve periyodik bakımlı iş makineleri",
                "Resmi sözleşme, tam fatura ve şeffaf puantaj sistemi",
                "İş kazalarına karşı %100 önlem ve kurumsal İSG disiplini"
            ]
        },
        media: {
            heroImageAlt: "Yassıören Akpınar Sanayi Bölgesi'nde depo temeli hazırlayan kiralık kepçe - Keçaş Kepçe",
            galleryAlts: [
                "Akpınar Sanayi altyapı hattı kazısı",
                "Yassıören lojistik depo zemin tesviyesi",
                "Yassıören fabrika bahçesi beton kırma",
                "Sanayi parseli arazi reglaj çalışması",
                "Keçaş Kepçe Yassıören sanayi mobilizasyonu"
            ]
        },
        localSEO: {
            serviceAreaText: "Akpınar Sanayi Bölgesi (ASKOOP), Yassıören Merkez, Kuzey Marmara Otoyolu bağlantı noktaları ve civarındaki tüm lojistik antrepolarda hizmet veriyoruz.",
            locationContext: "Yassıören, Arnavutköy'ün kuzeybatı ucunda, İstanbul'un sanayi ve lojistik geleceğinin inşa edildiği bir merkezdir. Bölge, geniş meraların yerini alan modern endüstriyel tesislerle karakterizedir. Yassıören'in zemin yapısı, sanayi yapıları için ideal olan 'sertleşmiş dolgu' ve kaya katmanlarından oluşur; bu da güçlü kırıcılara ve dayanıklı JCB makinelerine olan ihtiyacı artırır. Keçaş Kepçe olarak bu ağır çalışma koşullarına ve sanayi temposuna 22 yıldır tam uyum sağlıyoruz. Mahallenin camisinden, Akpınar Sanayi nizamiyesine kadar her noktada 'çözüm ortağınız' olarak bekliyoruz."
        },
        faq: [
            { question: "Akpınar Sanayi Bölgesi'ne giriş için evraklarınız tam mı?", answer: "Evet, Akpınar Sanayi (ASKOOP) ve diğer tüm OSB/Sanayi sitelerinin istediği sigorta girişleri, operatörlük belgeleri, İSG eğitim formları ve makine periyodik kontrol belgelerinin tamamını eksiksiz sunuyoruz." },
            { question: "Yassıören'de fabrika içi beton kırma yapabiliyor musunuz?", answer: "Evet, JCB 3CX makinemizde bulunan yüksek vuruş gücüne sahip hidrolik kırıcı ataşmanımız ile fabrika içi zemin betonu, makine temeli veya saha betonlarını çevreye en az sarsıntıyı vererek kırıyoruz." },
            { question: "Kepçe ile forklift hizmeti veriyor musunuz?", answer: "Makinemizin ön kısmına takılabilen forklift çatalı (forklift attachment) sayesinde, Yassıören'deki şantiyelerinizde 1.5 tona kadar olan paletli malzemelerinizi taşıyabiliyor ve yüksek raflara istifleyebiliyoruz." },
            { question: "Uzun süreli kiralama fiyatlarınız nasıl?", answer: "Haftalık ve aylık kiralama talepleriniz için liste fiyatlarımız üzerinden %20'den başlayan indirimler uyguluyoruz. Sanayi projeleri için en ekonomik ve kurumsal çözümü sunmak temel ilkemizdir." },
            { question: "Yassıören'deki acil altyapı kazılarına müdahale edebilir misiniz?", answer: "Bölgeye olan yakınlığımız ve lojistik ağımız sayesinde, acil kanal veya kablo arızaları için makinemizi ortalama 1 saat içinde Yassıören şantiyenize ulaştırabiliyoruz." }
        ],
        conversion: { primaryCTA: "Yassıören Kepçe: 0539 477 81 12", secondaryCTA: "Ücretsiz Sanayi Keşfi" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "hadimkoy-kiralik-kepce", "deliklikaya-kiralik-kepce", "kazi-isleri", "temel-kazisi"] }
    },
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 21. BAKLALI KİRALIK KEPÇE (STRATEJİK GELİŞİM ODAKLI)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "baklali-kiralik-kepce",
        name: "Baklalı Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Baklalı, Arnavutköy",
        secondaryLocations: ["Boyalık", "Yassıören", "Tayakadın", "Hadımköy"],
        seo: {
            metaTitle: "Baklalı Kiralık Kepçe | Arnavutköy Kanal İstanbul Güzergahı",
            metaDescription: "Baklalı'da profesyonel kiralık kepçe hizmeti. Arazi tesviyesi, temel kazısı ve büyük parsel reglaj işleri için JCB 3CX. 22 yıllık yerel tecrübe. ☎ 0539 477 81 12",
            canonical: "/baklali-kiralik-kepce",
            h1: "Baklalı Kiralık Kepçe ve Geniş Arazi Kazı Çözümleri"
        },
        content: {
            intro: "Arnavutköy'ün kuzeybatısında, stratejik konumu ve Kanal İstanbul projesinin muhtemel güzergahı üzerinde yer alan Baklalı Mahallesi, bugün tarımsal geçmişinden gelen geniş arazileriyle büyük bir değişim ve gelişim sürecinin eşiğindedir. Baklalı, hem mevcut hayvancılık ve tarım alanlarındaki altyapı ihtiyaçları hem de yeni planlanan sanayi ve lojistik bölgeleriyle iş makinesi kiralama sektöründe kilit bir noktadır. Keçaş Kepçe olarak, Baklalı'nın düz ama bereketli topraklarında 22 yıldır arazi düzenleme, kanal açma ve temel kazısı hizmetleri sunuyoruz. Bölgenin geniş parsel yapısı, yüksek verimliliğe sahip ve hızlı hareket edebilen makineleri zorunlu kılar. JCB 3CX beko loder makinemiz ve Baklalı'nın toprak yapısını (özellikle yüzey altındaki killi katmanları ve su yataklarını) iyi bilen operatörlerimizle, projelerinizde en doğru kazı stratejisini uyguluyoruz. Boyalık ve Yassıören aksındaki tüm arazi hazırlıklarında, tarlalardan şantiye sahalarına dönüşümde bölge halkının ve yatırımcıların en güvenilir 'yerel' partneriyiz.",
            problemStatement: "Baklalı'da çalışırken karşılaşılan temel zorluk, arazilerin büyüklüğü ve altyapı eksikliği olan bölgelerdeki lojistik problemlerdir. Çoğu operatör, Baklalı'nın yumuşak tarım topraklarında makineyi batırma riskiyle karşı karşıya kalabilir veya yanlış kotlandırma yaparak yağmur sularının arazide göllenmesine neden olabilir. Ayrıca Kanal İstanbul güzergahı olması sebebiyle bölgedeki arazi hareketliliği, 'kimin nerede kazdığının' ve yasal sınırların korunmasının kritik önem taşıdığı bir durumdur; belgesiz ve dikkatsiz operatörlerin yaptığı sınır ihlalleri komşuluk ve yasal sorunlara yol açabilir. Baklalı sakinleri için bir diğer sorun ise, mahalleye dışarıdan gelen makinelerin talep ettiği fahiş nakliye ücretleridir. Uzmanlığı olmayan kepçecilerin arazi tesviyesi (reglaj) yaparken toprağı gereğinden fazla sıyırarak verimliliği düşürmesi veya dolgu alanlarını dayanıksız bırakması şantiyenin geleceğine zarar verir.",
            solutionOverview: "Keçaş Kepçe olarak Baklalı projelerinizde 'toprağın dilinden anlayan' uzmanlığımızı konuşturuyoruz. 22 yıldır bu bölgenin köylerinde ve tarlalarında çalıştığımız için, toprağın hangi derinlikte sertleşeceğini veya nerede su damarı olduğunu biliyoruz. JCB 3CX makinemizin geniş ağızlı ön kovası ve güçlü arka kepçesiyle, Baklalı'nın geniş arazilerinde hızlı ve kaba reglaj (tesviye) işlemlerini milimetrik bir doğrulukla yapıyoruz. Arazi sınırlarınıza azami saygı gösteriyor, kazı öncesi ölçümlerinize sadık kalarak sınır ihlallerini önlüyoruz. Baklalı'ya çok yakın bir lokasyonda olduğumuz için, makinemizi kendi tekerlekleri üzerinde hızlıca sahaya ulaştırıyor ve sizden 'lowbed/nakliye' gibi ağır masraflar talep etmiyoruz. Tarlasını hobi bahçesine çevirmek isteyen sakinlere de, büyük sanayi parselini hazırlayan müteahhitlere de aynı profesyonel dille yaklaşıyoruz. Operatörlerimizin yerel olması, hem bölgeyi tanıması hem de iş güvenliği konusunda tam bilinçli olması (sigortalı ve belgeli) projenizin yasal güvencesidir. İş bitiminde toprağı havalandırılmış, drenaj kanalları açılmış ve üzerinde yapılaşmaya hazır bir zemin teslim ediyoruz.",
            processSteps: [
                { title: "Saha Analizi ve Su Yolu Tespiti", description: "Baklalı'daki arazinize gelip toprağın eğimini ve doğal su yollarını inceliyoruz. Kazı sonrası birikme riskini minimize ediyoruz." },
                { title: "Yerel Dostu Fiyatlandırma", description: "Bölgenin yerlisi ve yakını olduğumuz için en düşük nakliye maliyetli ve dürüst saatlik/günlük fiyatımızı sunuyoruz." },
                { title: "Planlı Uygulama ve Reglaj", description: "Arazinizi hedeflenen kot seviyesine getiriyor, kazı ve dolgu dengesini bozmadan profesyonel tesviye işlemini yapıyoruz." },
                { title: "Onaylı Saha Teslimi", description: "İşin her aşamasını sizinle koordineli yönetiyoruz. Saha istediğiniz formu aldığında onayınızı alıp çalışmayı bitiriyoruz." }
            ],
            benefits: [
                "Baklalı ve Boyalık bölgesinde 22 yıllık yerel operatörlük uzmanlığı",
                "Kanal İstanbul güzergahı zemin özelliklerine yüksek hakimiyet",
                "Geniş arazilerde hızlı ve ekonomik reglaj (tesviye) yeteneği",
                "JCB 3CX ile tarlalarda batma ve kayma riskine karşı kontrollü sürüş",
                "Nakliye (lowbed) masrafsız, kendi gücüyle hızlı mobilizasyon",
                "Operatörlerin parsel ve sınır hassasiyeti konusunda yüksek bilinci",
                "7/24 ulaşılan yerel acil destek ve fiyatlandırma hattı",
                "Bahçe düzenlemesinden dev parsel hazırlığına kadar esnek çözüm kapasitesi",
                "Toprak serimi ve drenaj kanallarında 'usta gözüyle' doğru uygulama",
                "Resmi kurumlar tarafından tanınan, dürüst ve belgeli işletme güvencesi"
            ],
            useCases: [
                "Hobi bahçesi zemin hazırlığı ve toprak serimi",
                "Büyük sanayi ve lojistik parsellerinin tesviyesi",
                "Tarımsal arazilerde drenaj kanallarının açılması",
                "Parsel sınır yollarının açılması ve stabilize serimi",
                "Villa ve müstakil ev yerleşimi için temel kazıları",
                "Eski köy evi yıkımı ve moloz kaldırma çalışmaları",
                "Hayvan damı ve ahır temeli beton hendeği kazısı",
                "Arsa temizliği, diken sıyırma ve yabani ot reglajı",
                "Kanalizasyon ve foseptik çukurlarının standartlara uygun kazılması",
                "Elektrik ve su boru hatları için uzun metrajlı kanal açımı"
            ],
            experienceProof: [
                "Baklalı ve çevresinde tarladan arsaya dönen düzinelerce parselin hazırlığı",
                "Bölge hayvancılarının ve çiftçilerinin altyapı onarımındaki tek tercih noktası",
                "Baklalı Köyü gelişim aksındaki altyapı ve yol genişletme tecrübeleri",
                "Operatörlerin bölge insanı olması sayesinde sağlanan sarsılmaz güven",
                "JCB 3CX ile hassas zeminlerde dahi makine kontrolü sağlayan usta operatörlük"
            ],
            pricingLogic: "Baklalı kiralık kepçe fiyatlarımızda, mahallemizin merkeze göre daha geniş araziler içermesini göz önünde bulunduruyoruz. Kısa süreli kanal açma işleri için saatlik, büyük parsel düzenlemeleri için ise 'günlük' veya 'alan bazlı' (dönüm bazlı) ekonomik çözümler üretiyoruz. Baklalı'ya komşu olduğumuz için ulaştırma ücretlerini en alt seviyede tutuyoruz. Ücretsiz keşif yaparak, projeniz için en karlı makine saat programını birlikte çıkartıyoruz.",
            trustSignals: [
                "Arnavutköy yerel esnaf tescili ve 22 yıllık marka ömrü",
                "Baklalı'da bitirilen tarımsal ve inşaat odaklı referanslar",
                "G sınıfı ehliyetli ve tam sigortalı uzman operatörler",
                "Bakımı tam, yüksek performanslı JCB 3CX makine parkuru",
                "Dürüst puantaj, net fatura ve tam resmiyet",
                "24 saat cevap veren whatsapp ve telefon destek hattı"
            ]
        },
        media: {
            heroImageAlt: "Baklalı Arnavutköy'de geniş arazi tesviyesi yapan kiralık JCB kepçe - Keçaş Kepçe",
            galleryAlts: [
                "Baklalı arazi reglaj ve düzleme",
                "Baklalı Kanal İstanbul güzergahı kazı çalışması",
                "Baklalı bahçe düzenleme ve toprak serimi",
                "Baklalı parsel yolu açma işi",
                "Baklalı killi toprak kazı ve kanal açma"
            ]
        },
        localSEO: {
            serviceAreaText: "Baklalı Merkez, Boyalık Hattı, Tayakadın sınırı ve mahallenin tüm arazi parsellerinde aktif kiralık kepçe hizmeti sağlıyoruz.",
            locationContext: "Baklalı, Arnavutköy'ün hem geçmişini hem geleceğini temsil eden stratejik bir köydür. Geçmişte bakla ve hububat tarımıyla bilinen bu düzlükler, bugün İstanbul'un en önemli kanal ve lojistik projelerinin odağındadır. Baklalı'nın düz arazisi kepçe çalışması için ideal görünse de, toprak altındaki yüksek nem oranı ve killi yapı tecrübesiz makinelerin çamura saplanmasına neden olur. Keçaş Kepçe olarak biz bu toprakta büyüdük; nerede duracağımızı, nerede kazacağımızı biliriz. Baklalı Camii'nden, Sazlıdere Barajı kıyısındaki parsellere kadar her noktada operasyon yeteneğine sahibiz."
        },
        faq: [
            { question: "Baklalı'da tarlamı hobi bahçesi yapacağım, kepçe hizmetiniz var mı?", answer: "Kesinlikle. Tarlanızın otlarını sıyırıyor, toprağı havalandırıyor, su drenaj kanallarını açıyor ve varsa meyve fidanı yerlerinizi hassasça hazırlıyoruz. Baklalı'daki hobi bahçesi projelerinde çok tecrübeliyiz." },
            { question: "Kanal İstanbul ve çevresi sanayi parsellerinde çalışabiliyor musunuz?", answer: "Evet, bölgedeki planlanmış tüm yeni parselasyon alanlarında, imar durumuna ve yasal izinlerinize uygun olarak zemin etüdü kazıları ve tesviye işleri yapıyoruz." },
            { question: "Makinelerinizin günlük kira bedeli nedir?", answer: "Baklalı'da günlük kiralama bedellerimiz Arnavutköy geneline göre daha uygundur çünkü nakliye masrafımız yok denecek kadar azdır. Güncel ve net fiyat için 0539 477 81 12'den bizi arayın." },
            { question: "Operatör parsel sınırlarına dikkat eder mi?", answer: "Bizim için en önemli kural sınır haklarıdır. Operatörümüz sizin verdiğiniz aplikasyon veya sınır işaretlerine harfiyen uyar, asla komşu parsele müdahale etmez." },
            { question: "Toprak altı su çıkarsa kepçeyle kanal açabilir misiniz?", answer: "Evet, Baklalı'nın bazı bölgelerinde su seviyesi yüksektir. JCB 3CX ile derin tahliye kanalları açarak sahanızın kurumasını ve inşaata elverişli hale gelmesini sağlıyoruz." }
        ],
        conversion: { primaryCTA: "Baklalı Kepçe Hattı: 0539 477 81 12", secondaryCTA: "Ücretsiz Arazi Keşfi" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "yassioren-kiralik-kepce", "kazi-isleri", "temel-kazisi", "dolgu-tesviye"] }
    },
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 22. BOĞAZKÖY KİRALIK KEPÇE (PREMİUM KONUT & PEYZAJ)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "bogazkoy-kiralik-kepce",
        name: "Boğazköy Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Boğazköy, Arnavutköy",
        secondaryLocations: ["İstiklal", "Yunus Emre", "Karlıbayır", "Bolluca"],
        seo: {
            metaTitle: "Boğazköy Kiralık Kepçe | Villa & Peyzaj Kazı Hizmetleri",
            metaDescription: "Boğazköy'de profesyonel kiralık kepçe. Villa temeli, havuz kazısı ve bahçe düzenleme için operatörlü JCB 3CX. Hassas ve temiz işçilik. ☎ 0539 477 81 12",
            canonical: "/bogazkoy-kiralik-kepce",
            h1: "Boğazköy Kiralık Kepçe ve Bahçe Düzenleme"
        },
        content: {
            intro: "Arnavutköy'ün en nezih yerleşim alanlarından biri olan Boğazköy, geniş bahçeli villaları, butik siteleri ve yeşil dokusuyla öne çıkmaktadır. Boğazköy'de kepçe hizmeti, kaba bir kazıdan ziyade; mevcut peyzaja zarar vermeyen, dar bahçe kapılarından geçebilen ve milimetrik tesviye yapabilen bir ustalık gerektirir. Keçaş Kepçe olarak, Boğazköy'ün bu estetik ve huzurlu atmosferine uygun, 'temiz işçilik' odaklı kiralık kepçe hizmeti sunuyoruz. 22 yıllık tecrübemizle, Boğazköy'deki villa sahiplerinin ve site yönetimlerinin en güvendiği partneriyiz. JCB 3CX makinemizin sunduğu kıvraklık sayesinde, havuz yeri kazısı, otomatik sulama kanalları veya rulo çim öncesi toprak serimi gibi hassas işlerde profesyonel çözümler üretiyoruz. Bölgenin yer yer killi ve bitkisel toprak ağırlıklı yapısına hakim operatörlerimiz, toprağın verimli katmanını koruyarak şantiyenizi peyzaja hazır hale getirir.",
            problemStatement: "Boğazköy'deki mülk sahipleri için en büyük çekince, iş makinesinin mevcut bahçeye, çevre duvarlarına veya yerleşik bitkilere zarar vermesidir. Çoğu operatör büyük makinelerle dar alanlara girmeye çalışırken manevra hataları yapabilir ve telafisi zor masraflar çıkarabilir. Ayrıca, Boğazköy gibi sessiz mahallelerde gürültü ve çevre kirliliği komşu ilişkilerini bozabilir. Belgesiz ve sigortasız çalışan kepçeciler, olası bir altyapı hasarında (fiber internet kablosu veya bahçe sulama hattı kopması gibi) sorumluluk almaktan kaçınırlar. Küçük ama detaylı işler için büyük hafriyat firmalarından yanıt alamamak da bölge halkının sıkça yaşadığı bir sorundur.",
            solutionOverview: "Boğazköy'ün hassas dokusuna 'operatör hassasiyeti' ile yanıt veriyoruz. JCB 3CX makinemiz lastik tekerlekli olduğu için kilit parke yollarınıza veya asfalt zemine zarar vermez. Dar yollarda ve bahçe içlerinde çalışırken operatörümüz yüksek odakla hareket eder; gerekirse çevre güvenliği için yardımcı personel eşliğinde manevra yaparız. Gürültü kirliliğini minimumda tutmak için makinemizin bakımını eksiksiz yapıyor, işi en kısa sürede bitirerek yaşam alanınızdaki konforu bozmamaya özen gösteriyoruz. Tüm altyapı hatlarını kazı öncesi gözlemliyor, süpriz hasarların önüne geçiyoruz. SRC 4 belgeli ve sigortalı ekibimizle profesyonel, faturalı ve güvenilir bir hizmet sunuyoruz. İş bitiminde bahçenizi kaba molozundan arındırılmış ve tesviyesi yapılmış şekilde teslim ediyoruz.",
            processSteps: [
                { title: "Detaylı Bahçe Keşfi", description: "Boğazköy'deki adresinize gelip makinenin giriş imkanlarını, toprak yapısını ve korunması gereken ağaç/yapıları analiz ediyoruz." },
                { title: "Hassas İş Planı ve Teklif", description: "İşin süresini ve gerekecek ataşmanları (ince kova, tesviye bıçağı vs.) belirleyip şeffaf fiyatımızı sunuyoruz." },
                { title: "Temiz ve Sessiz Uygulama", description: "Belirlenen saatte makinemizle gelip, çevreye minimum rahatsızlık vererek profesyonel kazı veya dolgu işlemini yapıyoruz." },
                { title: "Onaylı Teslimat", description: "Sizinle birlikte yapılan işi kontrol ediyoruz; zemin düzgünlüğü sağlandığında sahadan ayrılıyoruz." }
            ],
            benefits: [
                "Boğazköy'de villa ve site içi çalışmalarda 22 yıllık uzmanlık",
                "Mevcut peyzaja ve ağaçlara zarar vermeyen hassas kullanım",
                "Lastik tekerlekli JCB ile asfalt ve parke dostu sürüş",
                "Havuz kazısı ve drenaj hatlarında milimetrik kot hassasiyeti",
                "Arnavutköy Boğazköy lokasyonuna en hızlı ulaşım kapasitesi",
                "Sertifikalı ve sigortalı operatör güvencesi",
                "Bahçe düzenlemesi için özel tesviye (reglaj) yeteneği",
                "Kentsel estetiği bozmayan temiz çalışma disiplini",
                "Açılır kova ile toprak serimi ve rulo çim hazırlığı uzmanlığı",
                "Hafta içi ve hafta sonu (izinli saatlerde) esnek çalışma desteği"
            ],
            useCases: [
                "Villa bahçesi havuz yeri kazısı",
                "Otomatik sulama ve drenaj kanalı açılması",
                "Bahçe toprağı serimi ve seviye düzenleme",
                "Ağaç yeri açma ve eski köklerin sökülmesi",
                "Villa çevresi istinat duvarı temel kazısı",
                "Kilit taşı ve otopark zemini hazırlığı",
                "Eski kömürlük veya bahçe duvarı yıkımı",
                "Site içi altyapı onarım ve kanal kazıları",
                "Hobi bahçesi teraslama ve reglaj",
                "Peyzaj molozu yükleme ve saha temizliği"
            ],
            experienceProof: [
                "Boğazköy villa bölgelerinde tamamlanmış yüzlerce peyzaj ve temel işi",
                "Bölgedeki site yönetimleri ile uzun vadeli bakım ve altyapı çalışmaları",
                "Hassas zeminlerde operatör hatasız teslim edilen havuz projeleri",
                "Boğazköy Kültür Merkezi çevresindeki çevre düzenleme destekleri",
                "22 yıldır bölge sakinlerinin referanslarıyla büyüyen güvenli hizmet"
            ],
            pricingLogic: "Boğazköy kiralık kepçe fiyatlarımızda, bahçe işlerinin detaycı yapısını gözetiyoruz. Saatlik kiralama ile bütçenizi korurken, havuz kazısı gibi net işler için 'götürü' paketler sunuyoruz. Boğazköy merkezinde aktif olduğumuz için nakliye maliyetini en alt seviyede tutuyoruz. Ücretsiz keşif yaparak işin kaç saatte biteceğini önceden tahmin ediyor, süpriz maliyetleri önlüyoruz.",
            trustSignals: [
                "Yerel Arnavutköy esnafı ve 22 yıllık resmi şirket ömrü",
                "Boğazköy'de bitirilen villa projelerinden güçlü referanslar",
                "SRC belgeli, profesyonel ve güler yüzlü operatör ekibi",
                "Yeni nesil, sessiz ve bakımlı JCB 3CX makine parkuru",
                "Resmi faturalı, puantaj odaklı ve dürüst çalışma sistemi",
                "İş kazalarına karşı %100 sigortalı ve yasal sorumlu yapı"
            ]
        },
        media: {
            heroImageAlt: "Boğazköy Arnavutköy'de villa bahçesinde çalışan kiralık JCB kepçe - Keçaş Kepçe",
            galleryAlts: [
                "Boğazköy villa havuz kazısı",
                "Boğazköy bahçe düzenleme ve tesviye",
                "Boğazköy site içi altyapı kazısı",
                "Boğazköy toprak serimi ve reglaj",
                "Keçaş Kepçe Boğazköy mobilizasyonu"
            ]
        },
        localSEO: {
            serviceAreaText: "Boğazköy Merkez, Boğazköy Villaları, Boğazköy Bölge Parkı çevresi ve mahallenin tüm butik sitelerinde hizmet veriyoruz.",
            locationContext: "Boğazköy, Arnavutköy'ün yükselen modern yüzü olarak, geniş yeşil alanları ve kaliteli yapılaşmasıyla bilinir. Bölgenin zemini genellikle killi ve sağlamdır, ancak peyzaj çalışmaları için üst katmanların doğru işlenmesi gerekir. Boğazköy'de kepçeci olmak, sadece çukur açmak değil, mahallemizin estetik değerine saygı duyarak çalışmaktır. Keçaş Kepçe olarak, Boğazköy Camii'nden mesire alanı girişlerine kadar her sokakta komşuluk hukukuyla hizmet veriyoruz."
        },
        faq: [
            { question: "Boğazköy'deki dar bahçe kapılarından kepçeniz geçer mi?", answer: "JCB 3CX makinemiz yaklaşık 2.36 metre genişliğindedir. Standart villa bahçe kapılarının çoğundan rahatlıkla geçer. Eğer kapı çok darsa, mini makinelerimiz için yönlendirme de yapabiliyoruz." },
            { question: "Bahçemdeki kilit parke taşlarına zarar gelir mi?", answer: "Makinemiz lastik tekerleklidir; beton veya parke üzerinde iz yapmaz. Ancak engebeli manevralarda taşların oynamaması için operatörümüz ekstra hassas çalışır ve gerekirse zemin koruyucu önlemler alırız." },
            { question: "Bahçe toprağını siz mi getiriyorsunuz?", answer: "Biz kepçe hizmeti veriyoruz. Talep etmeniz halinde, verimli nebati toprak veya dolgu malzemesi getirecek kamyonları organize edebiliyor, kepçemizle serme ve tesviye işlemini yapıyoruz." },
            { question: "Hafta sonu çalışma yapabiliyor musunuz?", answer: "Site kuralları ve belediye yasakları dahilinde, pazar günü hariç cumartesi günleri veya izinli saatlerde Boğazköy'deki bahçe işlerinizi yapabiliyoruz." },
            { question: "Havuz kazısı ne kadar sürer?", answer: "Standart bir villa havuzu (4x8m gibi) zemin sertliğine göre ortalama 4-6 saat içinde kazılıp, hafriyatı kamyona yüklenebilir durumda tamamlanır." }
        ],
        conversion: { primaryCTA: "Boğazköy Kepçe Hattı: 0539 477 81 12", secondaryCTA: "Ücretsiz Bahçe Keşfi" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "yunus-emre-kiralik-kepce", "dolgu-tesviye", "temel-kazisi", "kazi-isleri"] }
    },
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 23. YAVUZ SELİM MAHALLESİ KİRALIK KEPÇE (KENTSEL YOĞUNLUK & MERKEZ)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "yavuz-selim-kiralik-kepce",
        name: "Yavuz Selim Mahallesi Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Yavuz Selim, Arnavutköy",
        secondaryLocations: ["Arnavutköy Merkez", "İslambey", "Karlıbayır", "Nenehatun"],
        seo: {
            metaTitle: "Yavuz Selim Mahallesi Kiralık Kepçe | Arnavutköy Merkez Hafriyat",
            metaDescription: "Yavuz Selim Mahallesi'nde operatörlü kiralık kepçe. Kentsel dönüşüm, dar sokak kazıları ve bina temel hazırlığı için JCB 3CX. 7/24 hizmet. ☎ 0539 477 81 12",
            canonical: "/yavuz-selim-kiralik-kepce",
            h1: "Yavuz Selim Mahallesi Kiralık Kepçe ve Temel Kazısı"
        },
        content: {
            intro: "Arnavutköy'ün merkezinde, ticaretin ve yaşamın en yoğun olduğu mahallelerden biri olan Yavuz Selim, son yıllarda kentsel dönüşüm projeleriyle hızla kabuk değiştirmektedir. Yavuz Selim Mahallesi'nde kepçe çalışması, yoğun trafik, dar sokaklar ve bitişik nizam binalar nedeniyle en üst düzey operatör mahareti gerektirir. Keçaş Kepçe olarak, Yavuz Selim'in merkezindeki her bir sokakta, komşu binalara ve altyapıya zarar vermeden 22 yıldır faaliyet gösteriyoruz. Bölgenin merkezi konumu, iş makinesinin sahaya vaktinde ulaşmasını ve işini trafiği aksatmadan bitirmesini zorunlu kılar. JCB 3CX beko loder makinemiz ve mahallemizin dar labirentlerine hakim operatörlerimizle, bina temel kazılarından kanalizasyon onarımlarına kadar tüm ihtiyaçlarınızda 'yerel usta' hızıyla yanınızdayız.",
            problemStatement: "Yavuz Selim Mahallesi'nde en büyük zorluk, makinelerin hareket alanının kısıtlı olmasıdır. Bitişik binaların temellerine çok yakın çalışmak, tecrübesiz operatörler için büyük bir risk oluşturur; en küçük bir dikkatsizlik komşu yapıların statik güvenliğini tehlikeye atabilir. Ayrıca, Yavuz Selim'in dar sokaklarında doğalgaz, su ve fiber optik hatları yüzeye çok yakındır; yanlış kazı Yavuz Selim sakinlerini günlerce mağdur edebilir. Trafik yoğunluğu nedeniyle iş makinelerinin mahalleye girmesi gecikirse, şantiye programınız sarkar ve maliyetleriniz artar. Kayıt dışı çalışan kepçecilerle Yavuz Selim gibi merkezi yerlerde çalışmak, zabıta ve iş güvenliği denetimlerinde sizi zor durumda bırakabilir.",
            solutionOverview: "Yavuz Selim projelerinizde 'merkezi çözüm' sunuyoruz. 22 yıldır Arnavutköy Meydanı ve çevresinde kurduğumuz güvenle, Yavuz Selim'in tüm sokaklarını (Hükümet Konağı çevresi, Necip Fazıl Caddesi vs.) biliyoruz. JCB 3CX makinemizin lastik tekerlekli yapısı Yavuz Selim'in yoğun kullanılan asfalt yollarını bozmaz. Bitişik nizam binalarda pabuç kazılarını milimetrik hassasiyetle yapıyor, gerekirse yer altı radarı gibi yerel bilgimizle altyapıya zarar vermeden ilerliyoruz. Trafik akışını bozmamak adına Yavuz Selim'deki mobilizasyonlarımızı erken saatlerde veya planlı şekilde koordine ediyoruz. SRC 4 belgeli, sigortalı ve faturalı çalışmamızla Yavuz Selim'deki müteahhitlerimize ve vatandaşlarımıza yasal güvence sağlıyoruz. İş bittiğinde çıkan molozu hızlıca yükleyerek sokağınızdaki işgali sonlandırıyoruz.",
            processSteps: [
                { title: "Sokak ve Altyapı Analizi", description: "Yavuz Selim'deki adresinize gelip sokak genişliğini, trafik durumunu ve komşu binaların risklerini analiz ediyoruz." },
                { title: "Merkezi Konum Fiyatlandırması", description: "Yakın mesafede olmanın avantajıyla nakliye masrafsız, dürüst ve şeffaf saatlik/günlük fiyatımızı sunuyoruz." },
                { title: "Hızlı Sahaya İniş", description: "Trafik yoğunluğunu gözeterek makinemizi Yavuz Selim şantiyenize ulaştırıp hemen çalışmaya başlıyoruz." },
                { title: "Kontrollü Uygulama ve Onay", description: "Bitişik yapılara dikkat ederek kazıyı tamamlıyor, onayınızı alıp çevreyi temizleyerek sahadan ayrılıyoruz." }
            ],
            benefits: [
                "Yavuz Selim Mahallesi ve Arnavutköy merkezde 22 yıllık yerel tecrübe",
                "Dar sokaklarda ve bitişik nizamlarda milimetrik kazı yeteneği",
                "Arnavutköy Belediyesi ve Hükümet Konağı çevresine 10 dakikada ulaşım",
                "Tüm İSG belgeleri tam, sigortalı ve profesyonel operatör ekibi",
                "JCB 3CX ile Yavuz Selim asfaltına zarar vermeden hızlı çalışma",
                "Bölgenin yoğun altyapı hattına karşı yüksek operatör dikkati",
                "Kentsel dönüşüm temel kazılarında uzmanlaşmış iş ortağı",
                "Sürpriz maliyet içermeyen, faturalı ve hesap verebilir resmi yapı",
                "7/24 acil durum kanalizasyon ve altyapı kazı desteği",
                "Müteahhitler için şeffaf puantaj ve düzenli raporlama imkanı"
            ],
            useCases: [
                "Kentsel dönüşüm bina temeli kazısı",
                "Bitişik nizam yapılarda pabuç ve perde kazıları",
                "Dar sokaklarda kanalizasyon onarım ve bağlantı kazısı",
                "Eski bina yıkımı ve inşaat molozu yükleme",
                "Hükümet Caddesi çevresi dükkan önü tesviye ve kırım",
                "Hizmet binaları ve kamu alanı çevre düzenleme kepçe işi",
                "Otopark alanı kazısı ve stabilize malzeme serimi",
                "Doğalgaz ve fiber optik ana hat kanallarının açılması",
                "Bahçe duvarı yıkımı ve moloz kaldırma",
                "Site/Apartman bahçelerinde hassas kanal ve dolgu işleri"
            ],
            experienceProof: [
                "Yavuz Selim Mahallesi genelinde bitirilmiş 50+ bina temeli",
                "Arnavutköy merkez cadde düzenlemelerinde sağlanan iş makinesi destekleri",
                "Mahalledeki yerel müteahhitlerin 20 yıldır değişmeyen kepçe partneri olma",
                "Dar sokaklardaki altyapı patlaklarında hızlı müdahale referansları",
                "22 yıllık mahalle esnafı olmanın getirdiği yüksek güvenilirliğimiz"
            ],
            pricingLogic: "Yavuz Selim kiralık kepçe fiyatlarımızda, merkez mahalle olmanın avantajını müşterimize yansıtıyoruz. Nakliye maliyeti olmadığı için oldukça ekonomik saatlik ücretler sunuyoruz. Bina temeli gibi uzun süreli işler için Yavuz Selim şantiyelerinize özel günlük indirimli paketlerimiz mevcuttur. Ücretsiz keşif sonrası işin kaç gün süreceğini netleştirip, iş bütçenizi koruyoruz.",
            trustSignals: [
                "Arnavutköy yerel esnaf tescili ve 22 yıllık köklü geçmiş",
                "Yavuz Selim'de aktif çalışan müteahhitlerin onaylı referansları",
                "SRC belgeli, profesyonel ve yasal tüm hakları korunmuş operatörler",
                "Teknolojik donanımı tam, bakımlı JCB 3CX makine parkuru",
                "Resmi faturalı, yasal sorumluluğu üstlenen kurumsal yapı",
                "7/24 ulaşılan canlı destek ve acil çağrı operasyonu"
            ]
        },
        media: {
            heroImageAlt: "Yavuz Selim Mahallesi Arnavutköy'de bina temeli kazan kiralık kepçe - Keçaş Kepçe",
            galleryAlts: [
                "Yavuz Selim kentsel dönüşüm kazısı",
                "Yavuz Selim dar sokak moloz yükleme",
                "Arnavutköy merkez altyapı onarımı",
                "Yavuz Selim bina temeli pabuç açma",
                "Keçaş Kepçe Yavuz Selim mobilizasyonu"
            ]
        },
        localSEO: {
            serviceAreaText: "Yavuz Selim Meydanı, Necip Fazıl Caddesi, Hükümet Konağı çevresi ve mahallenin tüm sokaklarında aktif hizmet veriyoruz.",
            locationContext: "Yavuz Selim Mahallesi, Arnavutköy'ün kalbi ve idari merkezidir. Ticaretin en yoğun olduğu Necip Fazıl Caddesi ve Fatih Caddesi arasındaki bu bölge, kentsel dönüşümün en hızlı yürüdüğü yerdir. Yavuz Selim'de kepçe çalıştırmak, şehir hayatının ritmini bozmadan, güvenli ve hızlı operasyon yapmayı gerektirir. Keçaş Kepçe olarak, Yavuz Selim Camii'nden merkez kapalı pazar alanına kadar her noktada 'merkez usta' kimliğimizle 22 yıldır hizmetteyiz."
        },
        faq: [
            { question: "Yavuz Selim'in dar sokaklarında makineniz trafiği engeller mi?", answer: "Operatörlerimiz trafik akışını koordine ederek çalışır. JCB 3CX makinemiz kompakttır; sokak girişlerini tamamen kapatmadan, çevre güvenliği alarak kazı yapıyoruz. Gerekirse akşam veya hafta sonu saatlerini tercih ediyoruz." },
            { question: "Bitişik nizam binada temel kazarken risk olur mu?", answer: "En büyük uzmanlığımız bitişik nizam bina temelleridir. Kademeli kazı tekniğimiz ve operatörümüzün el hassasiyeti sayesinde yan binalara sarsıntı vermeden, pabuçları emniyetli şekilde açıyoruz." },
            { question: "Acil kanal arızalarında Yavuz Selim'e ne kadar sürede gelirsiniz?", answer: "Hükümet Konağı civarındaki merkezimiz ve bölgede aktif bulunan makinelerimizle ortalama 15-30 dakika içinde Yavuz Selim şantiyenize ulaşabiliyoruz." },
            { question: "Zabıta ve Belediye izinlerinde yardımcı oluyor musunuz?", answer: "Kepçe ve operatör evraklarımızı (belgeli/sigortalı) anında sunuyoruz. Yol işgal izinleri konusunda ise tecrübemizle sizi yönlendiriyoruz." },
            { question: "Yıkım sonrası molozu da yüklüyor musunuz?", answer: "Evet, kepçemizin ön kovasıyla kentsel dönüşüm sahanızdaki molozu kamyonlara hızlıca yükleyerek sokağı tertemiz bırakıyoruz." }
        ],
        conversion: { primaryCTA: "Yavuz Selim Kepçe: 0539 477 81 12", secondaryCTA: "Ücretsiz Saha Keşfi" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "karlibayir-kiralik-kepce", "kazi-isleri", "temel-kazisi", "yikim-hizmetleri"] }
    },
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 24. TAYAKADIN KİRALIK KEPÇE (HAVAALANI & STRATEJİK HUB)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "tayakadin-kiralik-kepce",
        name: "Tayakadın Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Tayakadın, Arnavutköy",
        secondaryLocations: ["Karaburun", "Baklalı", "Terkos", "Yassıören", "Yeni Havalimanı"],
        seo: {
            metaTitle: "Tayakadın Kiralık Kepçe | Havalimanı & Lojistik Bölge",
            metaDescription: "Tayakadın'da profesyonel kiralık kepçe. İstanbul Havalimanı çevresi lojistik sahalar ve arazi hazırlığı için JCB 3CX. Hızlı mobilizasyon. ☎ 0539 477 81 12",
            canonical: "/tayakadin-kiralik-kepce",
            h1: "Tayakadın Kiralık Kepçe ve Lojistik Saha Hazırlığı"
        },
        content: {
            intro: "İstanbul Havalimanı'nın gölgesinde, Arnavutköy'ün en stratejik noktalarından biri olan Tayakadın Mahallesi, bugün dünya çapında bir lojistik ve ulaşım merkezine dönüşmüştür. Tayakadın'da kepçe hizmeti demek; havalimanı servis yolları, dev antrepolar, personel lojmanları ve her geçen gün büyüyen ticari parsellerde 'zamanla yarışmak' demektir. Keçaş Kepçe olarak, Tayakadın'ın bu dinamik yapısını 22 yıldır yakından tanıyor, bölgedeki büyük çaplı projelerde ve yerel arazi düzenlemelerinde aktif rol alıyoruz. Bölgenin geçmişteki tarımsal dokusu ile bugünkü dev şantiye karakteri arasındaki geçişi en iyi bilen yerel ekiplerden biriyiz. JCB 3CX makinemizle, hem havalimanı nizamiyesi çevresindeki hassas işlerde hem de geniş arazi temizliklerinde yüksek verim sağlıyoruz. Tayakadın'ın sert rüzgarlarına ve değişken zemin yapısına karşı, tecrübeli operatörlerimizle projelerinizin zeminini sağlamlaştırıyoruz.",
            problemStatement: "Tayakadın'da şantiye yönetmenin en büyük zorluğu, bölgenin çok kısıtlı zaman dilimleri ve yüksek güvenlik standartları altında çalışmasıdır. Havalimanı çevresindeki projelerde, iş makinelerinin hızı ve arıza yapmama garantisi hayati önem taşır; duran bir makine tüm lojistik zincirini aksatabilir. Ayrıca, bölgenin yer yeraltı su seviyesi (göl ve deniz yakınlığı sebebiyle) değişkendir ve kontrolsüz kazılar su baskınlarına yol açabilir. Tayakadın şantiyelerinde İSG (İş Sağlığı ve Güvenliği) standartları çok yüksektir ve mahalle dışından gelen sıradan kepçecilerin bu evraklara ve disipline sahip olmaması, projelerin durdurulmasına neden olur. Dev şantiye hareketliliği içinde küçük ölçekli ama acil kazı ihtiyaçları için profesyonel muhatap bulmak da mülk sahi平 için kronik bir sorundur.",
            solutionOverview: "Keçaş Kepçe olarak Tayakadın'da 'lojistik hız' ile hizmet veriyoruz. Havalimanı koridoruna olan yakınlığımız sayesinde, acil kiralık kepçe taleplerinize dakikalar içinde yanıt verebiliyoruz. Makinelerimiz periyodik bakımlı ve yeni nesil olduğu için havalimanı çevresindeki kritik projelerde 'kesintisiz çalışma' garantisi sunuyoruz. Operatörlerimizin tamamı SRC belgeli ve sanayi disiplinine hakimdir; büyük şantiyelerin istediği tüm resmi evrakları (İSG dosyası, sigorta girişleri vs.) dijital olarak anında iletiyoruz. Zemin suyunun yüksek olduğu parsellerde önce drenaj kanalları açarak çalışma alanını kuru tutuyor, ardından hassas temel kazısına geçiyoruz. Geniş ön kovamızla yüksek hacimli toprak taşıma yaparken, arka kazıcımızla dar altyapı kanallarını açıyoruz. Tayakadın yerlisi olmanın getirdiği nakliye avantajıyla, bölgedeki sanayicilere ve arazi sahiplerine ek masraf çıkarmadan en rekabetçi fiyatları ulaştırıyoruz.",
            processSteps: [
                { title: "Lojistik Saha Analizi", description: "Tayakadın'daki şantiye veya parselinize geliyoruz. Havalimanı trafiğini ve zemin su seviyesini analiz ederek çalışma planı kuruyoruz." },
                { title: "Hızlı Teklif ve Onay", description: "Projenin büyüklüğüne göre saatlik veya günlük paket fiyatımızı iletiyoruz. Onay sonrası belgelerimizi şantiye yönetimine sunuyoruz." },
                { title: "24/7 Odaklı Uygulama", description: "Tayakadın'ın yoğun temposuna uygun şekilde, makinemizle sahaya inip kazı, dolgu veya kırım işini profesyonelce yapıyoruz." },
                { title: "Raporlama ve Teslim", description: "Yapılan hafriyat miktarını veya çalışılan saati raporlayıp, sahayı temiz şekilde teslim ediyoruz." }
            ],
            benefits: [
                "İstanbul Havalimanı ve Tayakadın lojistik hattında 22 yıllık deneyim",
                "Havalimanı çevresindeki yüksek güvenlik ve İSG standartlarına tam uyum",
                "Bölgedeki yüksek yer altı su seviyesine uygun drenaj odaklı kazı tekniği",
                "JCB 3CX ile hem dar alan altyapısı hem de geniş parsel temizliği",
                "Tayakadın ve Karaburun hattında en hızlı mobilizasyon kapasitesi",
                "Lojistik depoların zemin hazırlığında (reglaj) kanıtlanmış uzmanlık",
                "Kurumsal firmalar için eksiksiz evrak, fatura ve puantaj desteği",
                "7/24 ulaşılan acil destek ve yedek makine garantisi",
                "Asfalt sökümü ve yol genişletme işlerinde kullanılan güçlü kırıcı ataşmanı",
                "Yerel bölge bilgisiyle altyapı hatlarına karşı maksimum duyarlılık"
            ],
            useCases: [
                "Lojistik depo ve antrepo temel kazıları",
                "Havalimanı çevresi geçici şantiye ve personel kampı hazırlığı",
                "Geniş arazi temizliği, çalı sıyırma ve reglaj",
                "Tır parkı sahalarında stabilize dolgu ve sıkıştırma",
                "Tayakadın merkez ve köy içi kentsel dönüşüm yıkımları",
                "Elektrik, su ve fiber optik ana hat kanallarının açılması",
                "Bahçe duvarı ve istinat yapısı temel hendekleri",
                "Bölgedeki meyve bahçeleri için drenaj kanalı oluşturma",
                "İnşaat molozu yükleme ve saha temizleme işleri",
                "Asfalt kırma ve yeni yol altyapısı hazırlığı"
            ],
            experienceProof: [
                "Tayakadın - Havalimanı bağlantı yollarında tamamlanmış onlarca altyapı işi",
                "Bölgedeki büyük lojistik antrepoların zemin hazırlığı süreçlerinde aktif rol alma",
                "Tayakadın Köy içi yerleşimlerinde sunulan 22 yıllık bireysel hizmet referansı",
                "Zorlu zemin koşullarında ve kısıtlı zamanlarda hatasız bitirilen şantiye işleri",
                "Karaburun ve Terkos hattındaki su kanalları projelerinde edinilen tecrübe"
            ],
            pricingLogic: "Tayakadın kiralık kepçe fiyatlarımızda, sanayi ve lojistik projelerin 'uzun süreli' yapısını destekliyoruz. Günlük ve haftalık kiralama taleplerinde kurumsal indirimler uyguluyoruz. Tayakadın'ın merkezine olan yakınlığımız sayesinde yol masrafını minimize ediyor, mülk sahiplerine ekonomik çözümler sunuyoruz. Ücretsiz keşif yaparak en uygun makine-saat planını çıkarıyoruz.",
            trustSignals: [
                "Arnavutköy yerel usta tescili ve 22 yıllık marka güveni",
                "Tayakadın'da aktif çalışan kurumsal firmalardan alınan referanslar",
                "SRC ve G sınıfı belgeli, kalifiye operatör kadrosu",
                "Periyodik bakımlı, yüksek performanslı JCB 3CX iş makineleri",
                "Resmi sözleşme, fatura ve kurumsal hesap verebilirlik",
                "7/24 canlı destek hattı ve hızlı çözüm üretme garantisi"
            ]
        },
        media: {
            heroImageAlt: "Tayakadın Arnavutköy'de lojistik saha hazırlığı yapan kiralık JCB kepçe - Keçaş Kepçe",
            galleryAlts: [
                "Tayakadın lojistik depo kazısı",
                "Tayakadın havalimanı çevresi altyapı işi",
                "Tayakadın arazi temizliği ve reglaj",
                "Tayakadın köy içi temel kazısı",
                "Keçaş Kepçe Tayakadın mobilizasyonu"
            ]
        },
        localSEO: {
            serviceAreaText: "Tayakadın Merkez, Havalimanı Lojistik Bölgesi, Karaburun Yolu ve mahallenin tüm arazi parsellerinde hizmet veriyoruz.",
            locationContext: "Tayakadın, ismiyle müsemma (eski bir menzil noktası), Arnavutköy'ün hem tarihi hem de en modern kavşak noktasıdır. Dünyanın en büyük havalimanlarından birine komşu olan bu mahallede, toprak artık sadece tarım için değil, küresel ticaretin zemini olarak işlenmektedir. Tayakadın'da kepçeci olmak, şantiyenin hızına ve güvenliğine ayak uydurabilmektir. Keçaş Kepçe olarak, Tayakadın Camii'nden Karaburun sapağına kadar her noktada lojistik disipliniyle çalışıyoruz."
        },
        faq: [
            { question: "Tayakadın şantiyelerinde gece çalışması yapabiliyor musunuz?", answer: "Havalimanı projelerinin aciliyetine binaen, önceden planlanması ve gerekli ışıklandırmanın sağlanması durumunda 7/24 çalışma düzenleyebiliyoruz." },
            { question: "İSG evraklarınız kurumsal firmalar için uygun mu?", answer: "Kesinlikle. Operatörlerimizin e-devlet girişleri, periyodik makine muayeneleri ve sağlık raporları eksiksizdir. Kurumsal şantiye yönetmeliklerine tam uyum sağlıyoruz." },
            { question: "Tayakadın'daki killi ve sulak zeminlerde makineniz batar mı?", answer: "JCB 3CX operatörlerimiz bölge zeminine hakimdir. Sulak alanlarda önce drenaj yaparak ilerliyor ve makineyi emniyetli platformlarda çalıştırıyoruz." },
            { question: "En az kaç gün kiralama yapılabiliyor?", answer: "Tayakadın'daki yerel projeleriniz için saatlik kiralama yapabildiğimiz gibi, büyük parseller için aylık kiralama seçeneklerimiz de mevcuttur. Yakınlık avantajımızla her süreye cevap veriyoruz." },
            { question: "Asfalt sökümü yapabilir misiniz?", answer: "Evet, makinemizin arkasındaki yüksek vuruşlu kırıcı ile eski asfalt ve beton yolları söküp, ön kova ile çıkan molozu kamyonlara yüklüyoruz." }
        ],
        conversion: { primaryCTA: "Tayakadın Kepçe: 0539 477 81 12", secondaryCTA: "Ücretsiz Sanayi Keşfi" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "baklali-kiralik-kepce", "yassioren-kiralik-kepce", "kazi-isleri", "yikim-hizmetleri"] }
    },
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 25. MAVİGÖL MAHALLESİ KİRALIK KEPÇE (SAHİL & YERLEŞİM ODAKLI)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "mavigol-kiralik-kepce",
        name: "Mavigöl Mahallesi Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Mavigöl, Arnavutköy",
        secondaryLocations: ["İmrahor", "Sazlıbosna", "Taşoluk", "Arnavutköy Merkez"],
        seo: {
            metaTitle: "Mavigöl Mahallesi Kiralık Kepçe | Bahçe & Villa Kazı",
            metaDescription: "Mavigöl'de profesyonel kiralık kepçe. Göl manzaralı villalar, bahçe düzenleme ve altyapı kanalları için operatörlü JCB 3CX. ☎ 0539 477 81 12",
            canonical: "/mavigol-kiralik-kepce",
            h1: "Mavigöl Mahallesi Kiralık Kepçe ve Arazi Hazırlığı"
        },
        content: {
            intro: "İmrahor ve Sazlıdere Barajı hattında, ismini göl manzarasından alan Arnavutköy'ün yeni gözdesi Mavigöl Mahallesi, huzurlu bir yaşam ve modern müstakil projelerin merkezidir. Mavigöl'de kepçe hizmeti; hem bölgenin engebeli yamaçlarını hem de baraj gölü çevresindeki hassas ekosistemi gözeterek yürütülmelidir. Keçaş Kepçe olarak, Mavigöl Mahallesi'nin bu özel coğrafyasında 22 yıllık tecrübemizle villa bahçelerini düzenliyor, rüya evlerin temellerini kazıyoruz. Bölgenin yer yer yumuşak, yer yer kayalık olan yamaç yapısı, operatörün hem dengeyi korumasını hem de doğru kova tekniğini kullanmasını gerektirir. JCB 3CX makinemizle, Mavigöl'deki dar sokaklardan ve eğimli arazilerden geçerek, manzaranızı bozmadan şantiye alanınızı en düzgün hale getiriyoruz. Su yollarına ve baraj havzasına olan yakınlık bilinciyle, doğaya en az sarsıntıyı vererek profesyonel kazı çözümleri sunuyoruz.",
            problemStatement: "Mavigöl Mahallesi'ndeki mülk sahipleri için en büyük zorluk, eğimli arazilerde yapılan kazılarda toprak kayması ve istinat duvarı ihtiyacıdır. Tecrübesiz bir operatörün yanlış açıyla yaptığı kazılar, yağışlı havalarda setlerin çökmesine ve komşu parsellere zarar gelmesine neden olabilir. Ayrıca, baraj havzasına yakın kısımlarda toprağın nemli yapısı makinelerin saplanma riskini artırır. Mavigöl'ün yeni gelişen dar sokaklarında ağır vasıta hareketliliği, mevcut asfalt yollara ve çevre duvarlarına zarar verebilir. Yerleşik sakinler için gürültülü ve özensiz çalışma süreci komşuluk ilişkilerini zedeleyen bir diğer unsurdur. Küçük bahçe tadilatları için bölge dışından makine getirmek ise, yüksek yol ücretleri nedeniyle çoğu zaman astronomik maliyetlere ulaşır.",
            solutionOverview: "Mavigöl'ün 'manzaralı şantiyelerinde' denge ve hassasiyetle çalışıyoruz. Eğimli parsellerde kazı yaparken, toprağın doğal basamağını (şev) bozmadan kademeli olarak ilerliyoruz. Lastik tekerlekli JCB 3CX makinemizle Mavigöl'ün yeni yollarına zarar vermiyoruz. Operatörlerimiz, baraj gölüne sızıntı yapmayacak şekilde makinelerimizin bakımını (yağ kaçağı kontrolü vs.) her sabah eksiksiz yapar; doğayı sizin kadar önemsiyoruz. Gürültü seviyesini düşük tutarak, sabah saatlerine duyarlı çalışma programları uyguluyoruz. İstinat duvarı temelleri için hassas kot belirleme yapıyor, kazıdan çıkan toprağı bahçenizin tesviyesinde geri dönüştürerek sizi ekstra hafriyat maliyetinden kurtarıyoruz. Mavigöl'e komşu yerel bir işletme olduğumuz için 'yol masrafı' almadan, en ekonomik bütçe ile villa bahçenize giriyoruz. SRC belgeli ve sigortalı ekibimizle profesyonel, temiz ve güvenilir bir teslimat sağlıyoruz.",
            processSteps: [
                { title: "Eğim ve Zemin Analizi", description: "Mavigöl'deki parselinize gelip göl tarafındaki eğimi ve zemin yumuşaklığını analiz ediyoruz." },
                { title: "Manzara Dostu Fiyatlandırma", description: "İşin zorluk derecesini ve bitiş süresini belirleyip, bölge ve özel en şeffaf fiyat teklifimizi sunuyoruz." },
                { title: "Hassas ve Güvenli Kazı", description: "Eğimli arazide makinemizi sabitleyerek, çevre mülklere ve doğaya en az sarsıntıyı vererek çalışıyoruz." },
                { title: "Saha Regülasyonu ve Teslim", description: "Bahçenizi rulo çim veya beton öncesi istenen koda getirip tesviye ediyoruz ve onayınızı alıyoruz." }
            ],
            benefits: [
                "Mavigöl ve baraj hattındaki eğimli arazilerde 22 yıllık kazı uzmanlığı",
                "Göl manzaralı villa bahçelerinde 'sıfır hata' ile hassas çalışma",
                "Arnavutköy Mavigöl lokasyonuna dakikalar içinde ulaşım (Ek masrafsız)",
                "İstinat duvarı ve set kazılarında mühendislik hassasiyeti",
                "JCB 3CX ile dar yollarda ve bahçe içlerinde yüksek manevra kabiliyeti",
                "Baraj havzasına duyarlı, sızıntısız ve temiz iş makine parkuru",
                "Operatörlü kiralama – 22 yıllık bölge tecrübesine sahip usta ekip",
                "Bahçe düzenlemesi (reglaj) ve toprak seriminde uzman işçilik",
                "Yeni yerleşim alanlarında yasalara ve saatlere duyarlı çalışma disiplini",
                "İş kazalarına ve altyapı hasarlarına karşı %100 sigortalı güvence"
            ],
            useCases: [
                "Villa bahçesi kademeli tesviye ve reglaj",
                "Göl manzaralı parsellerde istinat duvarı temeli kazısı",
                "Havuz yeri açma ve bahçe drenaj kanallarının açılması",
                "Mavigöl kentsel yerleşimlerinde bina temel kazıları",
                "Arsa temizliği, diken sıyırma ve yabani ot reglajı",
                "Hobi bahçesi hazırlığı ve organik toprak serimi",
                "Eski baraka yıkımı ve inşaat molozu kaldırma",
                "Site içi altyapı onarım ve beton kırım işleri",
                "Otopark alanı hazırlığı ve stabilize malzeme serme",
                "Foseptik çukuru ve yağmur suyu hattı kazıları"
            ],
            experienceProof: [
                "Mavigöl ve İmrahor yamaçlarında yapılmış onlarca villa temel projesi",
                "Baraj havzası korama kuşağındaki hassas altyapı çalışmalarında edinilen tecrübe",
                "Mavigöl sakinleri tarafından takdir edilen 'temiz bahçe' teslimat referansları",
                "Eğimli arazilerde makine dengesini koruyan usta operatörlük performansları",
                "22 yıldır bölgenin jeolojik yapısını tanıyan yerel marka değerimiz"
            ],
            pricingLogic: "Mavigöl kiralık kepçe fiyatlarımızda, bölgenin 'gelişim' karakterini destekliyoruz. Bahçe tadilatlarınız için ekonomik saatlik kiralama yaparken, büyük arsa tesviyeleri için günlük indirimli paketler sunuyoruz. Mavigöl'e olan yakınlığımız sebebiyle nakliye bedelini müşterimize yansıtmayarak maliyet avantajı sağlıyoruz. Ücretsiz keşif yaparak, projenize en karlı çözüm planını iletiyoruz.",
            trustSignals: [
                "Arnavutköy yerel esnaf tescili ve 22 yıllık marka imajı",
                "Mavigöl'de bitirilen birçok özel mülk ve hobi bahçesi referansı",
                "SRC ve G sınıfı belgeli, kalifiye ve güvenilir operatör kadrosu",
                "Periyodik bakımlı, çevre dostu ve yeni model JCB 3CX parkuru",
                "Resmi yasalara uygun, sigortalı ve profesyonel hizmet yapısı",
                "Dürüst puantaj, net fatura ve tam şeffaflık prensibi"
            ]
        },
        media: {
            heroImageAlt: "Mavigöl Arnavutköy'de göl manzaralı villa bahçesinde çalışan kiralık JCB kepçe - Keçaş Kepçe",
            galleryAlts: [
                "Mavigöl bahçe kademeli tesviye",
                "Mavigöl villa temel kazısı",
                "Mavigöl göl kenarı drenaj hattı",
                "Mavigöl istinat duvarı hazırlığı",
                "Keçaş Kepçe Mavigöl bölge mobilizasyonu"
            ]
        },
        localSEO: {
            serviceAreaText: "Mavigöl Merkez, Göl Boyu Villaları, İmrahor sınırı ve mahallenin tüm yeni yerleşim bölgelerinde hizmet veriyoruz.",
            locationContext: "Mavigöl, Arnavutköy'ün hem huzuru hem de modernleşmeyi bir arada sunduğu, Sazlıdere Barajı'na nazır özel bir mahalledir. Bölgenin en büyük özelliği, yerleşimlerin bir taraftan göle bakarken diğer taraftan dik yamaçlara yaslanmasıdır. Bu durum Mavigöl'de kepçe çalışmasını 'titizlik ve denge' sınavı haline getirir. Keçaş Kepçe olarak, biz bu yamaçların ruhunu tanıyoruz. Mavigöl Camii'nden baraj kıyısındaki en uç villaya kadar her noktada komşularımıza 'usta gözüyle' hizmet veriyoruz."
        },
        faq: [
            { question: "Mavigöl'deki eğimli bahçemize kepçe girebilir mi?", answer: "JCB 3CX operatörlerimiz yamaçlı arazilerde ileri derece tecrübelidir. Makineyi emniyetli açıyla konumlandırıp, bahçenizi kademe kademe tesviye ederek düz alanlar (teraslama) oluşturuyoruz." },
            { question: "Göl manzaralı bahçemizi mahvetmeden kök sökebilir misiniz?", answer: "Hassas operatörlüğümüzle, korunması gereken bitkilere zarar vermeden, sadece temizlenmesi gereken ağaç köklerini ve çalıları kökünden söküp alanı pürüzsüzleştiriyoruz." },
            { question: "Baraj havzasında çalışma kısıtlaması var mı?", answer: "İlgili belediye ve İSKİ yönetmeliklerine uygun alanlarda, çevresel hassasiyetleri (yağ kaçağı, gürültü vs.) gözeterek profesyonel kazı yapıyoruz. Yasal sınırları biliyor ve sizi yönlendiriyoruz." },
            { question: "Acil kanalizasyon sızıntısında Mavigöl'e ne zaman gelirsiniz?", answer: "İmrahor'daki merkezimize çok yakın olan Mavigöl'e ortalama 20-30 dakika içinde iş makinemizi yönlendirebiliyoruz." },
            { question: "Havuz yeri kazısı yapıyor musunuz?", answer: "Evet, Mavigöl villalarında çok sayıda havuz kazısı tamamladık. Projenize uygun kotlarda, temiz bir temel tabanı açıp, çıkan hafriyatı yükleyerek işi bitiriyoruz." }
        ],
        conversion: { primaryCTA: "Mavigöl Kepçe Hattı: 0539 477 81 12", secondaryCTA: "Ücretsiz Bahçe Keşfi" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "imrahor-kiralik-kepce", "dolgu-tesviye", "temel-kazisi", "kazi-isleri"] }
    },
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 26. BOYALIK KİRALIK KEPÇE (TARIMDAN SANAYİYE GEÇİŞ)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "boyalik-kiralik-kepce",
        name: "Boyalık Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Boyalık, Arnavutköy",
        secondaryLocations: ["Hadımköy", "Baklalı", "Terkos", "Yassıören"],
        seo: {
            metaTitle: "Boyalık Kiralık Kepçe | Arnavutköy Arazi Hazırlığı & Hafriyat",
            metaDescription: "Boyalık Mahallesi'nde profesyonel kiralık kepçe. Tarım arazisi düzenleme, temel kazısı ve geniş parsel temizliği için JCB 3CX. ☎ 0539 477 81 12",
            canonical: "/boyalik-kiralik-kepce",
            h1: "Boyalık Kiralık Kepçe ve Arazi Düzenleme Hizmetleri"
        },
        content: {
            intro: "Hadımköy ve Arnavutköy merkez arasındaki stratejik kavşakta yer alan Boyalık Mahallesi, bugün tarımsal köklerinden kopmadan hızla inşaat ve sanayi gelişimine açılan bir bölgedir. Boyalık'ta kepçe hizmeti demek; geniş ayçiçeği tarlalarını hobi bahçelerine çevirmek, yeni sanayi parsellerini inşaata hazırlamak ve köy içi kentsel dönüşüm süreçlerini yönetmek demektir. Keçaş Kepçe olarak, Boyalık'ın bu bereketli ve hareketli topraklarında 22 yıldır operatörlük yapıyoruz. Bölgenin geniş parselleri, iş makinesinin hem hızlı hem de düşük maliyetle yüksek metrajlı işler bitirmesini zorunlu kılar. JCB 3CX kepçemizle, Boyalık'taki arazi temizliği, reglaj ve temel kazısı işlerinde 'yerel marka' gücümüzle yanınızdayız. Tarlasını parselleyen yatırımcıdan, evini yenileyen köylümüze kadar herkesin dilinden anlayan, Boyalık'ın killi ve yer yer taşlı zemin karakteristiklerine hakim bir ekiple çalışmanın avantajını sunuyoruz.",
            problemStatement: "Boyalık'ta çalışırken karşılaşılan temel problem, arazilerin büyüklüğüdür; yanlış bir reglaj (tesviye) stratejisi yüzlerce metreküp toprağın yanlış yere yığılmasına ve maliyetlerin katlanmasına neden olur. Ayrıca bölgenin killi toprak yapısı yağmurlu havalarda iş makineleri için batma riski taşır; tecrübesiz operatörler işi yarıda bırakmak zorunda kalabilir. Boyalık, orman ve su kaynaklarına olan yakınlığı sebebiyle çevresel denetimlerin ve yasal sınırların önemli olduğu bir yerdir; belgesiz kepçecilerin yaptığı kontrolsüz kazılar mülk sahiplerine ağır cezalar olarak geri dönebilir. Mahalle sakinleri için bir diğer sorun ise, Hadımköy merkezden Boyalık'a makine getirmeye çalışan firmaların talep ettiği yüksek 'nakliye' bedelleridir. Küçük ama teknik gerektiren bahçe işlerinde muhatap bulmak da Boyalık halkının sıkça yaşadığı bir zorluktur.",
            solutionOverview: "Keçaş Kepçe olarak Boyalık projelerinizde 'verimlilik ve dürüstlük' ile hareket ediyoruz. Boyalık'ın geniş arazilerinde toprağı en az enerjiyle en doğru forma getirecek kazı-dolgu planları uyguluyoruz. JCB 3CX makinemizin genişliği ve torka dayalı gücüyle, sertleşmiş Boyalık killi topraklarında dahi kesintisiz kırım ve kazı yapabiliyoruz. Kazı öncesinde parsel sınırlarınızı (kadastro işaretlerini) hassasiyetle kontrol ediyor, komşu haklarını koruyoruz. Boyalık ve çevresinde sürekli makinelerimiz bulunduğu için sizden 'nakliye/lowbed' ücreti talep etmiyor, işinize sadece çalışma saati üzerinden şeffaf bütçe veriyoruz. Operatörlerimiz SRC belgeli, profesyonel ve yasal tüm standartlara uygundur; böylece hem idari denetimlerde hem de sahada başınız ağrımaz. İş bittiğinde toprağı iyice tesviye edilmiş, molozundan arındırılmış ve projenize hazır tertemiz bir alan teslim ediyoruz.",
            processSteps: [
                { title: "Geniş Saha Keşfi", description: "Boyalık'taki arazinize geliyoruz. Toprak yapısını, doğal eğimi ve malzeme döküm alanlarını ücretsiz analiz ediyoruz." },
                { title: "Şeffaf Alan/Saat Fiyatlandırması", description: "İşin hacmine göre en ekonomik saatlik veya götürü fiyatımızı iletiyoruz. Boyalık yerlisi olmanın avantajını bütçenize yansıtıyoruz." },
                { title: "Planlı ve Güçlü Mobilizasyon", description: "JCB 3CX kepçemizle sözleşilen saatte sahaya inip, geniş parsellerinizde hızlı ve etkili çalışmaya başlıyoruz." },
                { title: "Denetimli Teslimat", description: "Kot kontrollerini sizinle birlikte yapıp, şantiyeyi projenize tam uygun şekilde teslim ederek sahadan ayrılıyoruz." }
            ],
            benefits: [
                "Boyalık ve çevresinde tarımsal arazi dönüşümünde 22 yıllık usta tecrübesi",
                "Geniş parsellerde düşük maliyetli ve yüksek hızlı reglaj (tesviye) yeteneği",
                "Arnavutköy-Hadımköy hattında nakliye masrafsız, kendi gücüyle ulaşım",
                "Boyalık'ın killi ve sert zemin yapısına uygun ekipman ve kova seçimi",
                "Parsel sınırlarına ve komşu haklarına duyarlı, dikkatli operatörlük",
                "Yeni sanayi bölgeleri için altyapı ve temel kazısı uzmanlığı",
                "Resmi kurumlar tarafından tanınan, sigortalı ve faturalı resmi yapı",
                "7/24 ulaşılan yerel destek ve acil kiralık kepçe hattı",
                "Bahçe düzenlemesinden fidan yeri açmaya kadar geniş hizmet yelpazesi",
                "Açılır kova ve hidrolik kırıcı ataşmanlarıyla her türlü zemine müdahale gücü"
            ],
            useCases: [
                "Tarımsal araziyi hobi bahçesine dönüştürme ve reglaj",
                "Yeni sanayi parsellerinin temel ve zemin hazırlığı",
                "Hafriyat yükleme, toprak serme ve arazi temizliği",
                "Boyalık merkez köy içi kentsel dönüşüm temel kazıları",
                "Drenaj kanalları ve yağmur suyu tahliye hatları",
                "Bahçe duvarı hazırlığı ve eskilerin sökülmesi",
                "Asfalt ve beton saha kırma, moloz kaldırma çalışmaları",
                "Foseptik çukuru kazısı ve standartlara uygun dolgu",
                "Ağaç yerleri açma ve yabani bitki örtüsü sıyırma",
                "Stabilize yol malzemesi serimi ve sıkıştırma işleri"
            ],
            experienceProof: [
                "Boyalık ve Hadımköy arasında bitirilmiş onlarca geniş arazi temizlik projesi",
                "Bölge çiftçilerinin ve yatırımcılarının 22 yıldır ilk tercihi olma güveni",
                "Parsel yollarının açılması ve stabilizasyonunda kanıtlanmış işçilik",
                "Çetin kış şartlarında dahi bölge zemininde başarıyla tamamlanan şantiye işleri",
                "Köy yerleşik alanındaki dar sokak yapılarında sunulan hassas kepçe hizmeti"
            ],
            pricingLogic: "Boyalık kiralık kepçe fiyatlarımızda, mahallemizin yerel kalkınmasına destek veriyoruz. Uzun süreli arazi ıslahı işlerinde günlük ve haftalık paketlerle maliyetlerinizi düşürüyoruz. Boyalık'a yakınlığımız sayesinde yol ücreti almıyoruz. Ücretsiz keşif yaparak, işinize en uygun ve dürüst bütçeyi birlikte oluşturuyoruz.",
            trustSignals: [
                "Arnavutköy Yerel Esnaf tescili ve 20 yılı aşan marka ömrü",
                "Boyalık'ta bitirilen yüzlerce hobi bahçesi ve inşaat referansı",
                "G sınıfı ehliyetli, sigortalı ve profesyonel usta operatörler",
                "Hatasız çalışan, yeni nesil ve bakımlı JCB 3CX ekipman parkuru",
                "Dürüst puantaj, faturalı çalışma ve tam yasal sorumluluk",
                "24 saat cevap veren whatsapp ve çağrı destek hattı"
            ]
        },
        media: {
            heroImageAlt: "Boyalık Arnavutköy'de geniş arazi tesviyesi yapan kiralık JCB kepçe - Keçaş Kepçe",
            galleryAlts: [
                "Boyalık arazi temizliği ve reglaj",
                "Boyalık sanayi parseli kazı hazırlığı",
                "Boyalık bahçe düzenleme ve toprak serimi",
                "Boyalık köy içi temel kazısı",
                "Keçaş Kepçe Boyalık bölge mobilizasyonu"
            ]
        },
        localSEO: {
            serviceAreaText: "Boyalık Merkez, Hadımköy Yolu Üzeri, Şamlar sınırı ve mahallenin tüm arazi parsellerinde hizmet veriyoruz.",
            locationContext: "Boyalık, Arnavutköy'ün hem merkezine hem de Hadımköy sanayi aksına olan yakınlığıyla 'stratejik bir geçiş noktasıdır'. Mahalle, geniş düzlükleri ve verimli killi toprağıyla karakterizedir. Burada kepçe çalışması, toprağın gücüne saygı duyarak, onun gelecekteki kullanım amacına (tarım, bahçe veya sanayi) göre şekillendirilmesidir. Keçaş Kepçe olarak, Boyalık Camii'nden merkez okul çevresindeki tüm parsellere kadar 'yerel komşunuz' olarak 22 yıldır hizmetteyiz."
        },
        faq: [
            { question: "Boyalık'ta tarlamıza hobi bahçesi yaparken kepçe gerekir mi?", answer: "Kesinlikle. Tarlanın otlarını temizlemek, zemin kotunu düzeltmek, suyun akışını sağlamak ve fidan dikilecek yerleri havalandırmak için kepçe çalışması arazinin ömrünü uzatır." },
            { question: "Makinelerinizde killi toprak için uygun tırnaklar var mı?", answer: "JCB 3CX kepçemizde Boyalık'ın sert ve killi zeminine uygun kova tırnakları ve güçlü hidrolik sistem bulunmaktadır. Toprak sertleştiğinde dahi verim kaybı yaşamıyoruz." },
            { question: "Boyalık'ta aynı gün kepçe bulabilir miyiz?", answer: "Bölgeye çok yakın olduğumuz için, müsaitlik durumuna göre aynı gün içinde makinemizi arazinize sevk edebiliyoruz. 0539 477 81 12'den teyit alabilirsiniz." },
            { question: "Bahçe duvarı yıkıp molozunu atıyor musunuz?", answer: "Evet, kırıcımızla eski duvarı yıkıyor, çıkan molozu ön kova ile hafriyat kamyonuna yüklüyor ve alanı pürüzsüzleştiriyoruz." },
            { question: "Fiyatlarınıza yakıt dahil mi?", answer: "Genelde operatörlü ve yakıt dahil 'yarım gün' veya 'tam gün' paketleri üzerinden şeffaf ve ekonomik fiyat veriyoruz." }
        ],
        conversion: { primaryCTA: "Boyalık Kepçe Hattı: 0539 477 81 12", secondaryCTA: "Ücretsiz Arazi Keşfi" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "hadimkoy-kiralik-kepce", "baklali-kiralik-kepce", "kazi-isleri", "temel-kazisi"] }
    },
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 27. DURSUNKÖY KİRALIK KEPÇE (YENİŞEHİR & MEGA PROJELER)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "dursunkoy-kiralik-kepce",
        name: "Dursunköy Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Dursunköy, Arnavutköy",
        secondaryLocations: ["Sazlıbosna", "Hacımaşlı", "Tayakadın", "Bolluca"],
        seo: {
            metaTitle: "Dursunköy Kiralık Kepçe | Yenişehir & Konut Projesi Kazı Hizmetleri",
            metaDescription: "Dursunköy'de profesyonel kiralık kepçe. Yenişehir projesi, konut inşaatları ve altyapı kazıları için operatörlü JCB 3CX. Aynı gün hizmet. ☎ 0539 477 81 12",
            canonical: "/dursunkoy-kiralik-kepce",
            h1: "Dursunköy Kiralık Kepçe ve Yenişehir Proje Sahası Hizmetleri"
        },
        content: {
            intro: "Arnavutköy'ün geleceğinin inşa edildiği Dursunköy Mahallesi, Yenişehir projesi ve Kanal İstanbul güzergahına yakınlığıyla İstanbul'un en büyük kentsel dönüşüm sahalarından birinin merkezindedir. Dursunköy'de kepçe hizmeti demek; binlerce konutluk sosyal konut projelerinin altyapı hazırlığından, mevcut köy yerleşimindeki bireysel inşaat işlerine kadar geniş bir yelpazede 'profesyonel zemin çözümleri' üretmek demektir. Keçaş Kepçe olarak, Dursunköy'ün bu devasa dönüşüm sürecinde 22 yıldır aktif rol alıyoruz. Bölgenin eski tarımsal arazilerinin şantiye sahalarına dönüştüğü bu dönemde, JCB 3CX kepçemizle hem büyük ölçekli arazi temizliklerinde hem de köy merkezindeki hassas temel kazılarında güvenilir çözüm ortağınızız. Dursunköy'ün killi ve yer yer kayalık zemin yapısına hakim operatörlerimizle, Yenişehir vizyonuna uygun sağlam zeminler hazırlıyoruz.",
            problemStatement: "Dursunköy, bugün İstanbul'un en yoğun şantiye trafiğine sahip bölgelerinden biri haline gelmiştir. Büyük müteahhitlerin dev projelerinin yanı sıra, mevcut köy sakinlerinin bireysel inşaat, bahçe ve altyapı ihtiyaçları da devam etmektedir. Ancak bölgedeki yoğun iş makinesi talebi nedeniyle küçük ve orta ölçekli projeler için uygun fiyatlı ve güvenilir kepçe bulmak zorlaşmıştır. Dursunköy'ün değişken zemin yapısı – üst katmanlarda yumuşak kil, alt katmanlarda sert kaya – tecrübesiz operatörleri zorlayan bir karakter taşır. Ayrıca bölgedeki imar değişiklikleri ve parselasyon süreçleri, kazı işlerinde kadastro hassasiyetini zorunlu kılmaktadır; yanlış sınırda yapılan bir kazı büyük hukuki sorunlara yol açabilir.",
            solutionOverview: "Keçaş Kepçe olarak Dursunköy'de 'yerel bilgi ve büyük proje disiplini' ile çalışıyoruz. 22 yıldır bölgenin zemin katmanlarını, su tablasını ve parsel sınırlarını tanıyoruz. JCB 3CX makinemizle hem yumuşak kilde hassas kazı hem de kaya katmanında kırıcı ile ilerleme yapabiliyoruz. Yenişehir projesi çevresindeki büyük şantiyelerin İSG standartlarına tam uyum sağlarken, köy merkezindeki bireysel işlerde de aynı profesyonelliği sunuyoruz. Dursunköy'e komşu yerel bir firma olarak nakliye masrafı almıyor, saatlik veya günlük net ve şeffaf fiyat teklifi veriyoruz. Parsel sınırlarınızı kadastro hassasiyetiyle kontrol ederek, hukuki güvenliğinizi de koruyoruz.",
            processSteps: [
                { title: "Proje ve Zemin Keşfi", description: "Dursunköy'deki arazinize gelip zemin katmanlarını, su seviyesini ve parsel sınırlarını analiz ediyoruz. Ücretsiz keşif sonrası iş planı oluşturuyoruz." },
                { title: "Net Fiyat ve Planlama", description: "İşin hacmine ve zemin zorluğuna göre saatlik veya günlük fiyat teklifimizi sunuyoruz. Yenişehir proje disiplinine uygun belgelerimizi hazırlıyoruz." },
                { title: "Güçlü Mobilizasyon", description: "JCB 3CX kepçemizle sözleşilen saatte Dursunköy'deki şantiyenize inip, kil katmanından kaya tabakasına kadar her zeminde verimli çalışıyoruz." },
                { title: "Kontrollü Teslim", description: "Kazı derinliğini ve kot kontrolünü sizinle birlikte doğrulayıp, sahayı projenize hazır ve temiz şekilde teslim ediyoruz." }
            ],
            benefits: [
                "Dursunköy ve Yenişehir proje sahasında 22 yıllık yerel zemin bilgisi",
                "Büyük konut projeleri ve bireysel inşaatlarda eşit profesyonellik",
                "Killi üst katman ve kayalık alt katmanda çift yönlü kazı kapasitesi",
                "Arnavutköy merkezinden Dursunköy'e nakliye masrafsız hızlı ulaşım",
                "Kadastro hassasiyetiyle parsel sınırlarına duyarlı operatörlük",
                "Yenişehir şantiye standartlarına uygun İSG evrakları ve sigorta",
                "JCB 3CX ile hem dar köy sokaklarında hem geniş arazilerde manevra",
                "7/24 acil kiralık kepçe desteği ve yedek makine garantisi",
                "Altyapı kanalları, drenaj ve kanalizasyon hatlarında uzman kazı",
                "Şeffaf puantaj ve faturalı çalışma ile tam yasal güvence"
            ],
            useCases: [
                "Yenişehir konut projesi çevresi altyapı ve zemin hazırlığı",
                "Dursunköy köy içi villa ve müstakil ev temel kazısı",
                "Tarım arazisinden imarlı parsele dönüşüm reglajı",
                "Kanalizasyon, yağmur suyu ve içme suyu hat kazıları",
                "Eski yapı yıkımı ve moloz kaldırma işleri",
                "İstinat duvarı temeli ve şev oluşturma",
                "Bahçe düzenleme, toprak serimi ve peyzaj hazırlığı",
                "Foseptik çukuru açma ve dolgu işleri",
                "Stabilize yol yapımı ve arazi tesviyesi",
                "Hafriyat yükleme ve kamyon koordinasyonlu nakliye"
            ],
            experienceProof: [
                "Dursunköy ve çevresinde tamamlanmış onlarca arazi dönüşüm ve temel kazısı projesi",
                "Yenişehir proje sahasında büyük müteahhitlerle birlikte yürütülen altyapı çalışmaları",
                "Bölgenin killi ve kayalık zemin geçişlerinde edinilen 22 yıllık operatörlük deneyimi",
                "Dursunköy köy yerleşimindeki dar sokaklarda sunulan hassas kepçe hizmeti referansları",
                "Kadastro duyarlı kazılarda sıfır hukuki sorun ile tamamlanan proje geçmişi"
            ],
            pricingLogic: "Dursunköy kiralık kepçe fiyatlarımızda, bölgenin büyük dönüşüm sürecini destekliyoruz. Bireysel bahçe ve temel kazılarında ekonomik saatlik kiralama, büyük arazi projelerinde günlük ve haftalık indirimli paketler sunuyoruz. Dursunköy'e olan yakınlığımız sayesinde nakliye bedeli almıyoruz. Ücretsiz keşif sonrası net ve dürüst bütçe oluşturuyoruz.",
            trustSignals: [
                "Arnavutköy yerel esnaf tescili ve 22 yıllık marka güvenilirliği",
                "Dursunköy ve Yenişehir sahasında bitirilen yüzlerce proje referansı",
                "SRC ve G sınıfı belgeli, bölge zeminine hakim usta operatörler",
                "Periyodik bakımlı, arızasız JCB 3CX iş makinesi parkuru",
                "Resmi sözleşme, fatura ve tam yasal sorumluluk güvencesi",
                "24 saat cevap veren WhatsApp ve telefon destek hattı"
            ]
        },
        media: {
            heroImageAlt: "Dursunköy Arnavutköy'de Yenişehir proje sahasında çalışan kiralık JCB kepçe - Keçaş Kepçe",
            galleryAlts: [
                "Dursunköy arazi dönüşüm ve tesviye çalışması",
                "Dursunköy köy içi temel kazısı",
                "Dursunköy altyapı kanal açma işlemi",
                "Dursunköy Yenişehir projesi çevresi kazı",
                "Keçaş Kepçe Dursunköy bölge mobilizasyonu"
            ]
        },
        localSEO: {
            serviceAreaText: "Dursunköy Merkez, Yenişehir Proje Sahası çevresi, Sazlıbosna sınırı ve mahallenin tüm arazi parsellerinde hizmet veriyoruz.",
            locationContext: "Dursunköy, Arnavutköy'ün en hızlı dönüşen mahallelerinden biridir. Kanal İstanbul güzergahına yakınlığı ve Yenişehir Rezerv Yapı Alanı kapsamındaki dev konut projeleri ile bölgenin çehresi her geçen gün değişmektedir. Eski tarım arazileri yerini modern yerleşim alanlarına bırakırken, hem büyük şantiyelerin altyapı ihtiyaçları hem de mevcut köy sakinlerinin bireysel inşaat talepleri artmaktadır. Keçaş Kepçe olarak, Dursunköy Camii'nden proje şantiyelerine kadar her noktada 22 yıllık yerel tecrübemizle hizmetteyiz."
        },
        faq: [
            { question: "Dursunköy'de Yenişehir projesi çevresinde kepçe kiralayabilir miyiz?", answer: "Evet, Yenişehir proje sahası çevresindeki bireysel parsellerde ve altyapı ihtiyaçlarında operatörlü kiralık kepçe hizmeti veriyoruz. İSG evraklarımız kurumsal standartlara uygundur." },
            { question: "Dursunköy'ün killi zemininde kepçe verimli çalışır mı?", answer: "JCB 3CX kepçemizde Dursunköy'ün killi zeminine uygun kova tırnakları ve güçlü hidrolik sistem mevcuttur. Kaya katmanına ulaşıldığında kırıcı ataşmanımızla çalışmaya devam ediyoruz." },
            { question: "Dursunköy'e aynı gün kepçe gelebilir mi?", answer: "Arnavutköy merkezindeki konumumuz sayesinde Dursunköy'e müsaitlik durumuna göre aynı gün makine sevk edebiliyoruz. 0539 477 81 12'den teyit alabilirsiniz." },
            { question: "Parsel sınırlarına dikkat ediyor musunuz?", answer: "Kesinlikle. Kazı öncesinde kadastro işaretlerini kontrol ediyor, komşu parsellere taşmadan hassas çalışma yapıyoruz. Hukuki güvenliğiniz bizim önceliğimizdir." },
            { question: "Fiyatlarınız nakliye dahil mi?", answer: "Evet, Dursunköy'e yakınlığımız sayesinde ek nakliye bedeli almıyoruz. Operatörlü ve yakıt dahil paket fiyatlarımız mevcuttur." }
        ],
        conversion: { primaryCTA: "Dursunköy Kepçe: 0539 477 81 12", secondaryCTA: "Ücretsiz Proje Keşfi" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "bolluca-kiralik-kepce", "tayakadin-kiralik-kepce", "temel-kazisi", "kazi-isleri"] }
    },
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 28. SAZLIBOSNA KİRALIK KEPÇE (BARAJ HAVZASI & DOĞA DOKUSU)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "sazlibosna-kiralik-kepce",
        name: "Sazlıbosna Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Sazlıbosna, Arnavutköy",
        secondaryLocations: ["Dursunköy", "Mavigöl", "İmrahor", "Hacımaşlı"],
        seo: {
            metaTitle: "Sazlıbosna Kiralık Kepçe | Baraj Havzası & Arazi Hazırlığı",
            metaDescription: "Sazlıbosna'da profesyonel kiralık kepçe. Sazlıdere Barajı çevresi, arazi düzenleme ve kentsel dönüşüm kazıları için JCB 3CX. ☎ 0539 477 81 12",
            canonical: "/sazlibosna-kiralik-kepce",
            h1: "Sazlıbosna Kiralık Kepçe ve Arazi Düzenleme Hizmetleri"
        },
        content: {
            intro: "Sazlıdere Barajı'nın kıyısında, leylekleriyle ünlü doğal güzellikleriyle bilinen Sazlıbosna Mahallesi, Arnavutköy'ün hem en huzurlu hem de en dinamik dönüşüm sürecini yaşayan köylerinden biridir. Sazlıbosna'da kepçe hizmeti; baraj havzasının hassas ekosistemini gözeterek arazi düzenlemek, TOKİ ve Yenişehir projelerinin çevre altyapısını hazırlamak ve köyün geleneksel yapısını koruyarak yeni yaşam alanları oluşturmak demektir. Keçaş Kepçe olarak, Sazlıbosna'nın bu eşsiz coğrafyasında 22 yıldır operatörlük yapıyoruz. Bölgenin nemli ve sazlık zemin yapısından killi derin katmanlara kadar her tabakayı tanıyan ekibimizle, JCB 3CX kepçemizi Sazlıbosna'nın dar patika yollarından geniş arazi parsellerine kadar her noktaya ulaştırıyoruz. Su kaynaklarına ve baraja olan yakınlık bilinciyle, çevreye en az etkiyi vererek profesyonel kazı çözümleri sunuyoruz.",
            problemStatement: "Sazlıbosna'da kepçe çalışmasının en büyük zorluğu, baraj havzasına yakın kısımlarda yüksek yer altı su seviyesi ve nemli zemin yapısıdır. Tecrübesiz operatörler bu koşullarda makineyi batırabilir veya kazı çukurlarını su basabilir. Ayrıca bölgenin ekolojik hassasiyeti sebebiyle İSKİ yönetmeliklerine uygun çalışmak zorunludur; kontrolsüz kazılar çevre cezalarına yol açabilir. Sazlıbosna'nın köy merkezi dar sokaklarında ağır vasıta manevra alanı kısıtlıdır. Bölge dışından gelen firmalar mahallenin yol yapısını bilmediği için mülklere zarar verebilir ve yüksek nakliye ücreti talep eder. TOKİ projelerinin hareketliliği ile bireysel arazi sahiplerinin küçük ölçekli işleri arasında profesyonel muhatap bulmak da yerel halk için süregelen bir zorluktur.",
            solutionOverview: "Keçaş Kepçe olarak Sazlıbosna'da 'doğaya saygılı kazı' prensibiyle çalışıyoruz. Yüksek su seviyeli alanlarda önce drenaj kanalları açarak çalışma alanını kuru tutuyor, ardından güvenli kazıya geçiyoruz. Makinelerimizin bakımını titizlikle yaparak yağ kaçağı ve çevre kirliliği riskini sıfıra indiriyoruz. JCB 3CX'in kompakt boyutu Sazlıbosna'nın dar köy sokaklarında rahatlıkla çalışmasını sağlar. İSKİ ve belediye yönetmeliklerine uygun çevresel bilinçle hareket ediyoruz. Sazlıbosna'ya komşu yerel bir firma olarak nakliye masrafı çıkarmıyor, ücretsiz keşif sonrası dürüst ve ekonomik fiyat teklifi veriyoruz. 22 yıllık bölge tecrübemizle, hem büyük projelerde hem küçük bahçe işlerinde güvenilir çözüm ortağınızız.",
            processSteps: [
                { title: "Ekolojik Saha Analizi", description: "Sazlıbosna'daki arazinize gelerek su seviyesini, zemin nemini ve havza yakınlığını analiz ediyoruz. Çevresel hassasiyetleri belirliyoruz." },
                { title: "Çevre Duyarlı Fiyatlandırma", description: "İşin teknik zorluğunu ve süresini hesaplayarak, bölgenin özel koşullarına uygun şeffaf fiyat teklifimizi sunuyoruz." },
                { title: "Drenaj Odaklı Kazı", description: "Gerekli alanlarda önce drenaj hatları açarak zemini kurutuyor, ardından JCB 3CX ile hassas ve güvenli kazı yapıyoruz." },
                { title: "Temiz ve Düzenli Teslim", description: "Kazı alanını çevre standartlarına uygun şekilde tesviye edip, sahayı pürüzsüz ve kullanıma hazır teslim ediyoruz." }
            ],
            benefits: [
                "Sazlıbosna ve Sazlıdere Barajı çevresinde 22 yıllık çevresel kazı tecrübesi",
                "Yüksek su seviyeli ve nemli zeminlerde drenaj odaklı güvenli kazı tekniği",
                "Baraj havzasına duyarlı, sızıntısız ve çevre dostu iş makinesi bakımı",
                "JCB 3CX ile Sazlıbosna'nın dar köy sokaklarında yüksek manevra kabiliyeti",
                "Arnavutköy yerleşkesinden Sazlıbosna'ya nakliye masrafsız hızlı ulaşım",
                "İSKİ ve belediye çevre yönetmeliklerine tam uyumlu çalışma garantisi",
                "TOKİ ve Yenişehir projeleri için kurumsal standartlarda İSG evrakları",
                "Operatörlü kiralama – SRC belgeli, 22 yıl bölge tecrübeli usta ekip",
                "Tarım arazisi dönüşümü, hobi bahçesi ve peyzaj hazırlığında uzmanlık",
                "Şeffaf puantaj, fatura ve dürüst fiyat garantisi"
            ],
            useCases: [
                "Sazlıbosna köy içi müstakil ev ve villa temel kazısı",
                "Baraj çevresi arazi temizliği ve tarla dönüşüm reglajı",
                "TOKİ ve Yenişehir projesi çevresi altyapı kazıları",
                "Drenaj kanalı, yağmur suyu ve fosseptik hat açma",
                "Bahçe düzenleme, hobi bahçesi hazırlığı ve toprak serimi",
                "Eski yapı ve ahır yıkımı, moloz kaldırma işleri",
                "İstinat duvarı temeli ve yamaç şev oluşturma",
                "Stabilize köy yolu yapımı ve onarımı",
                "Arsa temizliği, çalı sıyırma ve yabani ot kazıması",
                "Hafriyat yükleme ve kamyonla nakliye koordinasyonu"
            ],
            experienceProof: [
                "Sazlıbosna ve Sazlıdere havzasında tamamlanmış onlarca arazi ve temel kazısı projesi",
                "Baraj yakını nemli zeminlerde edinilen drenaj odaklı kazı uzmanlığı",
                "Sazlıbosna köy sakinlerinin güvendiği 22 yıllık yerel marka itibarı",
                "Leylekli Köy'ün doğal dokusuna zarar vermeden gerçekleştirilen çevreci kazı işleri",
                "Dar köy yollarında ve geniş tarla parsellerinde eşit verimlilikle sunulan hizmet"
            ],
            pricingLogic: "Sazlıbosna kiralık kepçe fiyatlarımızda, bölgenin ekolojik karakterine ve yerel kalkınmasına destek veriyoruz. Bahçe düzenlemelerinde ekonomik saatlik kiralama, geniş arazi projelerinde günlük indirimli paketler sunuyoruz. Sazlıbosna'ya yakınlığımız nedeniyle nakliye bedeli almıyoruz. Ücretsiz keşif yaparak, projenize en uygun bütçeyi birlikte oluşturuyoruz.",
            trustSignals: [
                "Arnavutköy yerel esnaf tescili ve 22 yıllık marka güveni",
                "Sazlıbosna'da bitirilen yüzlerce bireysel ve tarımsal proje referansı",
                "SRC ve G sınıfı belgeli, çevre bilincine sahip usta operatörler",
                "Periyodik bakımlı, çevre dostu ve arızasız JCB 3CX iş makinesi",
                "Resmi sözleşme, fatura ve tam yasal sorumluluk güvencesi",
                "24 saat cevap veren WhatsApp ve telefon destek hattı"
            ]
        },
        media: {
            heroImageAlt: "Sazlıbosna Arnavutköy'de baraj havzası yakınında çalışan kiralık JCB kepçe - Keçaş Kepçe",
            galleryAlts: [
                "Sazlıbosna arazi temizliği ve reglaj çalışması",
                "Sazlıbosna köy içi temel kazısı",
                "Sazlıbosna drenaj kanalı açma işlemi",
                "Sazlıbosna baraj çevresi arazi düzenleme",
                "Keçaş Kepçe Sazlıbosna bölge mobilizasyonu"
            ]
        },
        localSEO: {
            serviceAreaText: "Sazlıbosna Merkez, Sazlıdere Barajı çevresi, Dursunköy sınırı ve mahallenin tüm tarım ve yerleşim parsellerinde hizmet veriyoruz.",
            locationContext: "Sazlıbosna, Arnavutköy'ün Sazlıdere Barajı kıyısındaki eşsiz bir mahallesidir. 'Leylekli Köy' olarak bilinen bölge, doğal güzellikleri ve tarihi Sultanlar Yolu ile dikkat çekerken, Yenişehir Rezerv Yapı Alanı kapsamındaki dev konut projeleri ile hızlı bir dönüşüm süreci yaşamaktadır. Keçaş Kepçe olarak, Sazlıbosna'nın bu doğal dokusuna saygı duyarak, baraj havzasının ekolojik hassasiyetlerini gözeten çevreye duyarlı kazı çözümleri sunuyoruz. 22 yıldır bölgenin toprağını tanıyan komşunuzuz."
        },
        faq: [
            { question: "Sazlıbosna'da baraj yakınında kazı yapılabilir mi?", answer: "İSKİ yönetmeliklerine uygun alanlarda, çevresel hassasiyetleri gözeterek profesyonel kazı yapıyoruz. Yasal sınırları biliyor ve sizi doğru yönlendiriyoruz." },
            { question: "Nemli ve sulak zeminde makineniz çalışabilir mi?", answer: "JCB 3CX operatörlerimiz Sazlıbosna'nın nemli zemin yapısına hakimdir. Sulak alanlarda önce drenaj yaparak ilerliyor ve makineyi emniyetli platformlarda çalıştırıyoruz." },
            { question: "Sazlıbosna'ya aynı gün kepçe gelebilir mi?", answer: "Bölgeye çok yakın konumumuz sayesinde, müsaitlik durumuna göre aynı gün makinemizi arazinize sevk edebiliyoruz. 0539 477 81 12'den teyit alabilirsiniz." },
            { question: "Köy içi dar sokaklarda çalışabilir misiniz?", answer: "JCB 3CX kompakt boyutlarıyla Sazlıbosna'nın dar köy sokaklarında ve bahçe girişlerinde rahatlıkla manevra yapabilir." },
            { question: "Hobi bahçesi hazırlığı yapıyor musunuz?", answer: "Evet, tarla arazisini hobi bahçesine dönüştürme, toprak serimi, tesviye ve drenaj kanalı açma işlerinde uzmanız. Anahtar teslim bahçe hazırlığı sunuyoruz." }
        ],
        conversion: { primaryCTA: "Sazlıbosna Kepçe: 0539 477 81 12", secondaryCTA: "Ücretsiz Doğa Keşfi" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "dursunkoy-kiralik-kepce", "mavigol-kiralik-kepce", "dolgu-tesviye", "kazi-isleri"] }
    },
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 29. HACIMAŞLI KİRALIK KEPÇE (KIRSAL KÖY & DOĞAL DOKU)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "hacimasli-kiralik-kepce",
        name: "Hacımaşlı Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Hacımaşlı, Arnavutköy",
        secondaryLocations: ["Sazlıbosna", "Dursunköy", "Tayakadın", "Yassıören"],
        seo: {
            metaTitle: "Hacımaşlı Kiralık Kepçe | Köy İçi Kazı & Arazi Düzenleme",
            metaDescription: "Hacımaşlı'da profesyonel kiralık kepçe. Köy içi temel kazısı, bahçe düzenleme, arazi temizliği ve altyapı işleri için JCB 3CX. ☎ 0539 477 81 12",
            canonical: "/hacimasli-kiralik-kepce",
            h1: "Hacımaşlı Kiralık Kepçe ve Köy İçi Arazi Hizmetleri"
        },
        content: {
            intro: "Arnavutköy'ün kuzeyinde, şehrin gürültüsünden uzak doğal dokusuyla bilinen Hacımaşlı Mahallesi, İstanbul'un nadir 'köy havası' sunan yerleşimlerinden biridir. Hacımaşlı'da kepçe hizmeti; yeşil alanlarla çevrili müstakil evlerin bahçelerini düzenlemek, yeni konut projelerinin temellerini sağlam bir şekilde açmak ve köyün geleneksel yaşam alanlarını koruyarak altyapısını güçlendirmek demektir. Keçaş Kepçe olarak, Hacımaşlı'nın bu sakin ama sürekli gelişen yapısında 22 yıldır hizmet veriyoruz. Bölgenin organik toprak yapısından sert kil katmanlarına kadar her zemin tabakasını bilen operatörlerimiz, JCB 3CX kepçemizle köyün dar patikalarından çiftlik arazilerine kadar her noktada profesyonel kazı çözümleri sunuyor. Hacımaşlı'nın huzurlu atmosferini bozmadan, komşulara saygılı ve çevreci bir anlayışla çalışıyoruz.",
            problemStatement: "Hacımaşlı'da yaşayanların en büyük sorunu, mahalle düzeyinde profesyonel iş makinesi hizmeti bulmaktır. Şehir merkezinden gelen firmalar yüksek nakliye bedeli talep eder ve köyün toprak yollarını, bahçe duvarlarını ve dar geçitlerini tanımaz. Bölgenin organik toprak yapısı yağışlarda yumuşayarak makine sapması riskini artırır; tecrübesiz operatörler bahçelere ve komşu mülklere zarar verebilir. Hacımaşlı'nın rezerv yapı alanı statüsü nedeniyle imar süreçleri dinamiktir; parsel sınırları ve yapılaşma koşulları hakkında yerel bilgi sahibi olmak kazı işlerinde zorunludur. Köy sakinlerinin küçük ama teknik gerektiren işleri (fosseptik, drenaj, bahçe düzenleme) için uygun fiyatlı muhatap bulmak da kronik bir zorluktur.",
            solutionOverview: "Keçaş Kepçe olarak Hacımaşlı'da 'köye saygılı profesyonellik' ilkesiyle çalışıyoruz. Bölgenin toprak yapısını ve mevsimsel değişimlerini 22 yıldır takip ediyoruz; hangi ayda hangi derinlikte su çıkacağını, kil katmanının nerede başlayacağını biliyoruz. JCB 3CX makinemizin kompakt boyutu Hacımaşlı'nın dar köy yollarında ve bahçe kapılarından geçişte büyük avantaj sağlar. Gürültü ve titreşimi minimize ederek, köyün huzurlu yaşamına saygı duyuyoruz. Yerel firma olarak nakliye masrafı almıyor, komşumuz olan Hacımaşlı halkına samimi ve şeffaf hizmet sunuyoruz. Ücretsiz keşif sonrası her zaman net fiyat teklifi veriyor, işin sonunda sahayı temiz teslim ediyoruz.",
            processSteps: [
                { title: "Köy İçi Hassas Keşif", description: "Hacımaşlı'daki mülkünüze gelip zemin yapısını, giriş yolunu ve komşu yapıları kontrol ediyoruz. Ücretsiz ve kapsamlı saha analizi yapıyoruz." },
                { title: "Samimi ve Şeffaf Teklif", description: "İşin büyüklüğüne ve zemin koşullarına göre saatlik veya günlük net fiyat teklifimizi sunuyoruz. Gizli masraf olmadan, komşuca anlaşma." },
                { title: "Saygılı ve Verimli Çalışma", description: "JCB 3CX kepçemizle bahçenize veya arazinize girerek, çevredeki yapılara ve ağaçlara zarar vermeden hassas kazı yapıyoruz." },
                { title: "Temiz Bahçe Teslimatı", description: "İşi bitirdiğimizde sahayı düzgün tesviye ediyor, molozu kaldırıyor ve mülkünüzü kullanıma hazır, pırıl pırıl teslim ediyoruz." }
            ],
            benefits: [
                "Hacımaşlı ve çevre köylerde 22 yıllık yerel zemin ve arazi bilgisi",
                "Köy içi dar yollarda ve bahçe girişlerinde JCB 3CX ile kolay manevra",
                "Organik toprak ve kil katmanı geçişlerinde uzman operatörlük",
                "Arnavutköy merkezinden Hacımaşlı'ya nakliye bedeli almadan hızlı ulaşım",
                "Köyün huzurlu atmosferine saygılı, düşük gürültülü çalışma prensibi",
                "Komşu mülklere ve bahçe ağaçlarına zarar vermeme hassasiyeti",
                "Rezerv yapı alanı süreçlerinde yerel bilgi ve kadastro duyarlılığı",
                "Sigortalı, SRC belgeli ve profesyonel operatör güvencesi",
                "Küçük bahçe işlerinden büyük arazi projelerine kadar geniş hizmet yelpazesi",
                "7/24 ulaşılabilen yerel destek ve acil kepçe hattı"
            ],
            useCases: [
                "Müstakil ev ve köy evi temel kazısı",
                "Bahçe düzenleme, toprak serimi ve peyzaj hazırlığı",
                "Fosseptik çukuru açma ve kanalizasyon hat kazısı",
                "Çiftlik ve tarla arazisi temizliği, dönüşüm reglajı",
                "Eski ahır, kümüs ve baraka yıkımı ile moloz kaldırma",
                "Bahçe duvarı temel hendek açma ve istinat yapısı",
                "Drenaj kanalı ve yağmur suyu tahliye hattı kazıları",
                "Ağaç yeri açma, kök sökme ve arazi havalandırma",
                "Stabilize köy yolu düzeltme ve yol genişletme",
                "Toprak sıkıştırma ve kot düzeltme (reglaj) işleri"
            ],
            experienceProof: [
                "Hacımaşlı'da onlarca müstakil ev ve bahçe projesiyle kazanılmış güven",
                "Köy sakinlerinin 22 yıldır ilk tercihi olan yerel marka değeri",
                "Dar patika yollarda ve sınırlı bahçe alanlarında sunulan hassas operatörlük",
                "Doğal dokuya zarar vermeden tamamlanan çevreci kazı referansları",
                "Organik toprak ve kil geçişlerinde biriken deneyim ve uzmanlık"
            ],
            pricingLogic: "Hacımaşlı kiralık kepçe fiyatlarımızda, köy komşuluğu anlayışıyla hareket ediyoruz. Küçük bahçe ve fosseptik işlerinde ekonomik saatlik ücretler, geniş çiftlik arazileri için günlük paket fiyatlar sunuyoruz. Hacımaşlı'ya yakınlığımız sayesinde ek nakliye bedeli almıyoruz. Ücretsiz keşif sonrası dürüst ve net bütçe vererek, iş bittiğinde sürpriz maliyet çıkarmıyoruz.",
            trustSignals: [
                "Arnavutköy yerel esnaf tescili ve 22 yıllık kesintisiz hizmet geçmişi",
                "Hacımaşlı köy halkının güvenini kazanmış yerel marka itibarı",
                "SRC ve G sınıfı belgeli, köy yaşamına duyarlı usta operatörler",
                "Periyodik bakımlı, sessiz ve verimli JCB 3CX iş makinesi",
                "Dürüst puantaj, resmi fatura ve tam yasal güvence",
                "24 saat cevap veren WhatsApp ve acil çağrı hattı"
            ]
        },
        media: {
            heroImageAlt: "Hacımaşlı Arnavutköy'de köy bahçesinde çalışan kiralık JCB kepçe - Keçaş Kepçe",
            galleryAlts: [
                "Hacımaşlı köy içi bahçe düzenleme çalışması",
                "Hacımaşlı müstakil ev temel kazısı",
                "Hacımaşlı çiftlik arazisi temizliği",
                "Hacımaşlı fosseptik çukuru kazısı",
                "Keçaş Kepçe Hacımaşlı bölge mobilizasyonu"
            ]
        },
        localSEO: {
            serviceAreaText: "Hacımaşlı Merkez, Ihlamur Parkı çevresi, çiftlik arazileri ve mahallenin tüm köy içi parsellerinde hizmet veriyoruz.",
            locationContext: "Hacımaşlı, Arnavutköy'ün doğal dokusunu en iyi koruyan mahallelerinden biridir. Geniş yeşil alanları, sakin köy atmosferi ve şehir merkezine uzaklığı ile huzurlu bir yaşam sunar. Ancak İstanbul Havalimanı'na yakınlığı ve Yenişehir Rezerv Yapı Alanı kapsamındaki planlama süreçleri ile bölge geleceğe hazırlanmaktadır. Keçaş Kepçe olarak, Hacımaşlı'nın bu köy ruhunu koruyarak, sakinlerine profesyonel ve komşuca kepçe hizmeti sunmayı 22 yıldır sürdürüyoruz."
        },
        faq: [
            { question: "Hacımaşlı'daki köy yollarından kepçe geçebilir mi?", answer: "JCB 3CX kompakt boyutlarıyla Hacımaşlı'nın dar patika ve toprak yollarından rahatlıkla geçebilir. Köy içi manevrada 22 yıllık tecrübemiz var." },
            { question: "Küçük bir bahçe işi için de gelir misiniz?", answer: "Kesinlikle. Hacımaşlı'ya yakınlığımız sayesinde küçük bahçe düzenleme, fosseptik veya duvar yıkımı gibi işler için de ekonomik saatlik hizmet veriyoruz." },
            { question: "Hacımaşlı'ya aynı gün kepçe geliyor mu?", answer: "Müsaitlik durumuna göre aynı gün makinemizi Hacımaşlı'ya sevk edebiliyoruz. 0539 477 81 12'den bize ulaşabilirsiniz." },
            { question: "Bahçemdeki ağaçlara zarar verir misiniz?", answer: "Operatörlerimiz bahçe içi çalışmalarda son derece hassas davranır. Sadece hedef alana müdahale eder, ağaçlar ve komşu yapılar korunur." },
            { question: "Fosseptik çukuru kazısı yapıyor musunuz?", answer: "Evet, Hacımaşlı ve çevre köylerde onlarca fosseptik çukuru açtık. Standartlara uygun derinlik ve genişlikte, temiz bir kazı yapıyoruz." }
        ],
        conversion: { primaryCTA: "Hacımaşlı Kepçe: 0539 477 81 12", secondaryCTA: "Ücretsiz Köy Keşfi" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "sazlibosna-kiralik-kepce", "dursunkoy-kiralik-kepce", "dolgu-tesviye", "yikim-hizmetleri"] }
    },
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 30. KARABURUN KİRALIK KEPÇE (SAHİL & LOJİSTİK KAVŞAK)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        slug: "karaburun-kiralik-kepce",
        name: "Karaburun Kiralık Kepçe",
        industry: "equipment-rental",
        serviceType: "local",
        primaryLocation: "Karaburun, Arnavutköy",
        secondaryLocations: ["Tayakadın", "Durusu", "Yassıören", "Terkos"],
        seo: {
            metaTitle: "Karaburun Kiralık Kepçe | Sahil & Yazlık Bölgesi Kazı Hizmetleri",
            metaDescription: "Karaburun'da profesyonel kiralık kepçe. Sahil yazlıkları, villa bahçeleri ve arazi hazırlığı için operatörlü JCB 3CX. Hızlı mobilizasyon. ☎ 0539 477 81 12",
            canonical: "/karaburun-kiralik-kepce",
            h1: "Karaburun Kiralık Kepçe ve Sahil Arazi Hizmetleri"
        },
        content: {
            intro: "Arnavutköy'ün Karadeniz kıyısındaki incisi Karaburun Mahallesi, İstanbul'un en güzel plajlarından birine ev sahipliği yapan, yazlık kültürüyle bilinen eşsiz bir sahil yerleşimidir. Karaburun'da kepçe hizmeti; deniz manzaralı villa bahçelerini düzenlemek, sahil yakını parsellerin temellerini açmak, kum ve çakıl karışımı zemin yapısında profesyonel kazı yapmak ve bölgenin turizm potansiyelini destekleyen altyapı çalışmalarını yürütmek demektir. Keçaş Kepçe olarak, Karaburun'un bu deniz kokulu coğrafyasında 22 yıldır yerel hizmet sunuyoruz. Bölgenin tuzlu deniz havası, kumlu üst katman ve killi alt katman geçişleri, operatörün hem makine bakımına hem de kazı tekniğine hakim olmasını zorunlu kılar. JCB 3CX kepçemizle, Karaburun'un sahil yollarından tepe yamacındaki parsellere kadar her noktada güvenilir kazı çözümleri üretiyoruz.",
            problemStatement: "Karaburun'da iş makinesi çalıştırmanın en büyük zorluğu, bölgenin sahil şeridindeki kumlu-çakıllı zemin yapısı ile iç kısımlardaki sert kil tabakası arasındaki ani geçişlerdir. Tecrübesiz operatörler kumlu zeminde batma riski yaşar veya kil katmanında yetersiz kalır. Ayrıca sahil yakını parsellerde tuzlu yer altı suyu seviyesi yüksek olabilir; bu durum kazı çukurlarının su basmasına neden olur. Karaburun'un yazlık bölgesi karakteri sebebiyle yoğun sezonlarda gürültülü çalışma komşuluk sorunlarına yol açabilir. Bölge merkezinden uzak olması nedeniyle dışarıdan gelen firmalar astronomik nakliye ücretleri talep eder. İmar planlarındaki değişiklikler ve kıyı kanunu düzenlemeleri kazı işlerinde yasal bilgi sahibi olmayı gerektirmektedir.",
            solutionOverview: "Keçaş Kepçe olarak Karaburun'da 'sahile saygılı profesyonellik' ile çalışıyoruz. Kumlu-çakıllı üst katmanda hafif kova tekniği ile ilerlerken, kil tabakasına ulaşıldığında güçlü tırnaklarla verim artırıyoruz. Tuzlu yer altı suyu olan alanlarda drenaj öncelikli kazı planı uyguluyoruz. Makinelerimizin tuzlanmaya karşı özel bakımını yaparak sahil şartlarında uzun ömürlü çalışma garantisi veriyoruz. Karaburun'un yazlık bölgesi hassasiyetine uygun olarak sabah saatlerine ve komşuluk ilişkilerine duyarlı çalışma programları hazırlıyoruz. Yerel firma avantajımızla nakliye bedeli almıyor, ücretsiz keşif sonrası net ve dürüst fiyat teklifi sunuyoruz. Kıyı kanunu ve imar düzenlemeleri hakkında sizi bilgilendirerek, yasal güvenliğinizi de sağlıyoruz.",
            processSteps: [
                { title: "Sahil Şeridi Zemin Analizi", description: "Karaburun'daki parselinize gelip kumlu-killi zemin geçişlerini, su seviyesini ve kıyı mesafesini analiz ediyoruz." },
                { title: "Sezona Uygun Fiyatlandırma", description: "İşin teknik zorluğuna ve büyüklüğüne göre saatlik veya günlük şeffaf fiyat teklifimizi sunuyoruz. Komşuluk dostu çalışma planı hazırlıyoruz." },
                { title: "Deneyimli ve Hassas Kazı", description: "JCB 3CX kepçemizle sahil zeminine uygun tekniklerle, çevreye minimum rahatsızlık vererek profesyonel kazı yapıyoruz." },
                { title: "Plaj Havası Teslimatı", description: "Sahayı peyzaja veya inşaata hazır şekilde tesviye edip, temiz ve düzenli teslim ederek manzaranızı koruyoruz." }
            ],
            benefits: [
                "Karaburun sahil şeridinde 22 yıllık kumlu ve killi zemin kazı tecrübesi",
                "Deniz manzaralı villa bahçelerinde hassas ve estetik odaklı çalışma",
                "Tuzlu yer altı suyu alanlarında drenaj öncelikli kazı planlaması",
                "JCB 3CX ile dar sahil yollarında ve eğimli parsellerde yüksek manevra",
                "Arnavutköy merkezinden Karaburun'a nakliye masrafsız ulaşım avantajı",
                "Yazlık bölgesi komşuluk hassasiyetine uygun sessiz ve düzenli çalışma",
                "Kıyı kanunu ve imar düzenlemeleri hakkında yerel bilgi birikimi",
                "Sahil koşullarına uygun makine bakımı ve arızasız çalışma garantisi",
                "Operatörlü kiralama – SRC belgeli, 22 yıl sahil bölgesi deneyimli ekip",
                "7/24 acil destek ve hızlı mobilizasyon kapasitesi"
            ],
            useCases: [
                "Villa ve yazlık ev temel kazısı ve altyapı hazırlığı",
                "Deniz manzaralı bahçe düzenleme ve peyzaj reglajı",
                "Havuz kazısı ve bahçe drenaj kanalları açma",
                "Sahil yakını arsa temizliği ve inşaat sahası hazırlama",
                "Eski yazlık yıkımı ve moloz kaldırma işleri",
                "İstinat duvarı temeli ve yamaç stabilizasyonu",
                "Kanalizasyon ve yağmur suyu altyapı hat kazıları",
                "Otel ve konaklama tesisi çevresi zemin düzenleme",
                "Stabilize yol yapımı ve sahil yolu onarımı",
                "Bahçe duvarı sökümü ve yeniden yapım hazırlığı"
            ],
            experienceProof: [
                "Karaburun sahil şeridinde tamamlanmış onlarca villa ve yazlık evi projesi",
                "Kumlu-killi zemin geçişlerinde biriken 22 yıllık operatörlük uzmanlığı",
                "Tuzlu yer altı suyu koşullarında başarıyla yürütülen drenajlı kazı projeleri",
                "Karaburun sakinlerinin ve yazlık sahiplerinin güvendiği yerel marka itibarı",
                "Sahil yaşam alanlarında çevreci ve komşuluk dostu çalışma referansları"
            ],
            pricingLogic: "Karaburun kiralık kepçe fiyatlarımızda, bölgenin sahil karakterini ve yazlık kültürünü gözetiyoruz. Bahçe tadilatlarında ekonomik saatlik fiyatlar, büyük arsa projelerinde günlük indirimli paketler sunuyoruz. Karaburun'a olan yakınlığımız sayesinde ek nakliye ücreti almıyoruz. Ücretsiz keşif yaparak, projenize en uygun ve dürüst bütçeyi birlikte oluşturuyoruz.",
            trustSignals: [
                "Arnavutköy yerel esnaf tescili ve 22 yıllık kesintisiz marka güveni",
                "Karaburun sahilinde bitirilen onlarca villa ve bahçe projesi referansı",
                "SRC ve G sınıfı belgeli, sahil zemininde uzmanlaşmış operatör kadrosu",
                "Tuzlanmaya dayanıklı bakımlı JCB 3CX iş makinesi parkuru",
                "Resmi sözleşme, fatura ve tam yasal güvence",
                "24 saat cevap veren WhatsApp ve telefon destek hattı"
            ]
        },
        media: {
            heroImageAlt: "Karaburun Arnavutköy'de sahil yakını villa bahçesinde çalışan kiralık JCB kepçe - Keçaş Kepçe",
            galleryAlts: [
                "Karaburun sahil villa bahçe düzenleme",
                "Karaburun yazlık temel kazısı",
                "Karaburun arazi temizliği ve reglaj",
                "Karaburun sahil altyapı kazı işlemi",
                "Keçaş Kepçe Karaburun bölge mobilizasyonu"
            ]
        },
        localSEO: {
            serviceAreaText: "Karaburun Merkez, Sahil Şeridi, Plaj Bölgesi ve mahallenin tüm villa parselleri ile arazi alanlarında hizmet veriyoruz.",
            locationContext: "Karaburun, Arnavutköy'ün Karadeniz kıyısındaki en özel mahallesidir. İstanbul'un en güzel plajlarından birine ev sahipliği yapan bölge, uzun yıllardır yazlık ve ikinci konut kültürünün merkezidir. İstanbul Havalimanı'na yakınlığı ile stratejik bir konumda bulunan Karaburun, yeni konut projeleri ve turizm yatırımlarıyla sürekli gelişmektedir. Keçaş Kepçe olarak, Karaburun'un tuzlu deniz havasından kumlu sahil zeminine kadar her koşula hakim 22 yıllık tecrübemizle, sahil komşularımıza profesyonel kepçe hizmeti sunuyoruz."
        },
        faq: [
            { question: "Karaburun'daki kumlu zeminde kepçe verimli çalışır mı?", answer: "JCB 3CX operatörlerimiz Karaburun'un kumlu-çakıllı üst katmanında hafif kova tekniği, kil tabakasında güçlü tırnak tekniği kullanarak her derinlikte verimli çalışır." },
            { question: "Sahil yakınında yer altı suyu çıkarsa ne olur?", answer: "Tuzlu yer altı suyu beklenen alanlarda önce drenaj kanalları açarak çalışma alanını kurutuyor, ardından güvenli kazıya geçiyoruz. Bu konuda 22 yıllık tecrübemiz var." },
            { question: "Karaburun'a aynı gün kepçe gelir mi?", answer: "Arnavutköy'deki konumumuz sayesinde Karaburun'a müsaitlik durumuna göre aynı gün makinemizi sevk edebiliyoruz. 0539 477 81 12'den teyit alabilirsiniz." },
            { question: "Yazlık sezonda gürültü problemi yaratır mısınız?", answer: "Komşuluk hassasiyetine büyük önem veriyoruz. Uygun saatlerde çalışıyor, gürültüyü minimum seviyede tutarak işi hızlı bitiriyoruz." },
            { question: "Havuz yeri kazısı yapıyor musunuz?", answer: "Evet, Karaburun villalarında çok sayıda havuz kazısı tamamladık. Projenize uygun kotlarda, temiz temel tabanı açıp çıkan hafriyatı yüklüyoruz." }
        ],
        conversion: { primaryCTA: "Karaburun Kepçe: 0539 477 81 12", secondaryCTA: "Ücretsiz Sahil Keşfi" },
        internalLinks: { relatedServices: ["arnavutkoy-kiralik-kepce", "tayakadin-kiralik-kepce", "yassioren-kiralik-kepce", "temel-kazisi", "dolgu-tesviye"] }
    }
];

export function getServiceDataBySlug(slug: string): ServiceData | undefined {
    return servicesData.find(s => s.slug === slug);
}
