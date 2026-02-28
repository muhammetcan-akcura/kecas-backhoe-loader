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
            canonical: "/hizmetler/arnavutkoy-kiralik-kepce",
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
            canonical: "/hizmetler/yunus-emre-kiralik-kepce",
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
            canonical: "/hizmetler/yunus-emre-kazi-isleri",
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
            canonical: "/hizmetler/yunus-emre-temel-kazisi",
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
            canonical: "/hizmetler/yunus-emre-yikim",
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
            canonical: "/hizmetler/hadimkoy-kiralik-kepce",
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
            canonical: "/hizmetler/tasoluk-kiralik-kepce",
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
            canonical: "/hizmetler/bolluca-kiralik-kepce",
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
    }
];

export function getServiceDataBySlug(slug: string): ServiceData | undefined {
    return servicesData.find(s => s.slug === slug);
}
