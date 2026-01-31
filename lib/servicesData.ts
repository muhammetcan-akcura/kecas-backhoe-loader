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
        internalLinks: { relatedServices: ["temel-kazisi", "operatorlu-kepce-kiralama", "dolgu-tesviye"] }
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
        internalLinks: { relatedServices: ["kazi-isleri", "yikim-hizmetleri", "dolgu-tesviye"] }
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
        internalLinks: { relatedServices: ["kazi-isleri", "operatorlu-kepce-kiralama", "dolgu-tesviye"] }
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
        secondaryLocations: ["Hadımköy", "Taşoluk", "Bolluca", "Haraççı", "Şirindere"],
        seo: {
            metaTitle: "Arnavutköy Kiralık Kepçe | Operatörlü JCB 3CX – Keçaş Kepçe",
            metaDescription: "Arnavutköy'de operatörlü kiralık kepçe hizmeti. JCB 3CX ile kazı, dolgu, temel kazısı ve yıkım işleri. Aynı gün hizmet, ücretsiz keşif. ☎ 0539 477 81 12",
            canonical: "/hizmetler/arnavutkoy-kiralik-kepce",
            h1: "Arnavutköy Kiralık Kepçe Hizmeti"
        },
        content: {
            intro: "Keçaş Kepçe olarak Arnavutköy'de JCB 3CX kazıyıcı yükleyici ile operatörlü kiralık kepçe hizmeti sunuyoruz. Kazı, temel açma, dolgu, tesviye ve yıkım işleri Arnavutköy genelinde profesyonel şekilde gerçekleştirilir. Yerel ekip avantajımız sayesinde hızlı mobilizasyon ve uygun fiyat sunuyoruz.",
            problemStatement: "Arnavutköy'de kepçe ihtiyacı genellikle acildir. Güvenilir operatör bulmak, makinenin zamanında gelmemesi veya fiyat belirsizliği işleri geciktirir. Yanlış makine seçimi hem maliyeti artırır hem de işi uzatır.",
            solutionOverview: "Tek makine – tek sorumluluk prensibiyle çalışıyoruz. JCB 3CX kepçemiz ve tecrübeli operatörümüzle işi baştan sona biz yönetiyoruz. Ücretsiz keşif sonrası net fiyat veriyor, sürpriz maliyet çıkarmıyoruz.",
            processSteps: [
                { title: "Keşif ve Planlama", description: "İşin yapılacağı alan incelenir, uygun çalışma planı çıkarılır." },
                { title: "Fiyat ve Zamanlama", description: "Saatlik veya günlük net fiyat belirlenir, randevu oluşturulur." },
                { title: "Uygulama", description: "JCB 3CX kepçe ve operatör sahaya gelir, iş güvenli şekilde yapılır." },
                { title: "Teslim", description: "İş tamamlanır, saha temiz bırakılır." }
            ],
            benefits: [
                "Arnavutköy odaklı hızlı hizmet",
                "Operatörlü kiralama – ek masraf yok",
                "JCB 3CX ile çok yönlü çalışma",
                "Aynı gün hizmet imkanı",
                "Net ve şeffaf fiyatlandırma"
            ],
            useCases: [
                "Arnavutköy temel kazısı",
                "Bahçe ve arsa kazısı",
                "Dolgu ve tesviye işleri",
                "Duvar ve küçük yapı yıkımı",
                "Kanal açma"
            ],
            experienceProof: [
                "Arnavutköy'de 20+ yıllık saha tecrübesi",
                "Yüzlerce yerel kazı ve dolgu işi",
                "Bölge zemin yapısına hakim operatör"
            ],
            pricingLogic: "Saatlik veya günlük kiralama bazlıdır. İşin türüne ve süresine göre net fiyat ücretsiz keşif sonrası belirlenir.",
            trustSignals: [
                "Yerel Arnavutköy firması",
                "Gerçek saha fotoğrafları",
                "Operatörlü ve sigortalı çalışma",
                "Müşteri memnuniyeti odaklı hizmet"
            ]
        },
        media: {
            heroImageAlt: "Arnavutköy'de JCB 3CX ile kiralık kepçe çalışması",
            galleryAlts: [
                "Arnavutköy kiralık kepçe kazı çalışması",
                "JCB 3CX ile dolgu işlemi",
                "Arnavutköy kepçe yıkım işi"
            ]
        },
        localSEO: {
            serviceAreaText: "Arnavutköy merkez ve çevre mahallelerde aktif kiralık kepçe hizmeti veriyoruz.",
            locationContext: "Arnavutköy'ün arazi ve zemin yapısını bilen yerel ekip avantajıyla hızlı ve güvenli hizmet sağlıyoruz."
        },
        faq: [
            {
                question: "Arnavutköy kiralık kepçe fiyatları ne kadar?",
                answer: "Fiyatlar işin süresine ve yapılacak çalışmaya göre değişir. Ücretsiz keşif sonrası net fiyat sunuyoruz."
            },
            {
                question: "Operatör dahil mi?",
                answer: "Evet, tüm kiralık kepçe hizmetlerimiz operatörlüdür."
            },
            {
                question: "Aynı gün hizmet alabilir miyim?",
                answer: "Müsaitlik durumuna göre Arnavutköy içinde aynı gün hizmet sağlıyoruz."
            }
        ],
        conversion: { primaryCTA: "Hemen Ara: 0539 477 81 12", secondaryCTA: "Ücretsiz Keşif İste" },
        internalLinks: { relatedServices: ["operatorlu-kepce-kiralama", "kazi-isleri", "dolgu-tesviye", "yikim-hizmetleri"] }
    }
];

export function getServiceDataBySlug(slug: string): ServiceData | undefined {
    return servicesData.find(s => s.slug === slug);
}
