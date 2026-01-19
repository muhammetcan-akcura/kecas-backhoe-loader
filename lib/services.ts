// KEÇAŞ KEPÇE - Service Definitions
// Kepçe Kiralama ve İnşaat Hizmetleri

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
  priceRange: string;
  icon?: string;
}

export const services: Service[] = [
  {
    slug: "kepce-hizmeti",
    name: "Kepçe Hizmeti",
    shortDescription: "Profesyonel kepçe hizmeti",
    description: "Arnavutköy'de her türlü kazı, yükleme ve hafriyat işleri için profesyonel kepçe hizmeti. JCB 3CX ekipman ile güvenli çalışma.",
    features: [
      "Her türlü kazı işi",
      "Yükleme hizmetleri",
      "Hafriyat taşıma",
      "Arazi düzenleme",
      "Profesyonel ekipman",
    ],
    priceRange: "İşe göre fiyat",
  },
  {
    slug: "jcb-kepce-kiralama",
    name: "JCB 3CX Kepçe Kiralama",
    shortDescription: "Operatörlü JCB kepçe kiralama hizmeti",
    description: "Arnavutköy'de JCB 3CX beko loder kazıyıcı yükleyici kiralama hizmeti. Tecrübeli operatör ile birlikte saatlik veya günlük kiralama seçenekleri.",
    features: [
      "JCB 3CX profesyonel kepçe",
      "Tecrübeli operatör dahil",
      "Saatlik/günlük kiralama",
      "Bakımlı ve güvenli ekipman",
      "7/24 acil hizmet",
    ],
    priceRange: "Saatlik ve günlük fiyat",
  },
  {
    slug: "kazi-isleri",
    name: "Arnavutköy Kazı İşleri",
    shortDescription: "Profesyonel kazı ve hafriyat hizmetleri",
    description: "Temel kazısı, kanal açma, hafriyat ve her türlü kazı işleri. 22 yıllık tecrübe ile güvenli ve hızlı hizmet.",
    features: [
      "Temel kazısı",
      "Kanal açma",
      "Hafriyat işleri",
      "Toprak kazısı",
      "Hendek açma",
    ],
    priceRange: "Metreküp bazlı fiyat",
  },
  {
    slug: "temel-kazisi",
    name: "Arnavutköy Temel Kazısı",
    shortDescription: "Bina ve yapı temel kazısı",
    description: "Konut, villa, işyeri ve her türlü yapı için profesyonel temel kazısı hizmeti. Ölçülü ve standartlara uygun kazı.",
    features: [
      "Konut temel kazısı",
      "Villa temel kazısı",
      "İşyeri temel kazısı",
      "Ölçülü kazı",
      "Zemin analizi dahil",
    ],
    priceRange: "Metreküp bazlı fiyat",
  },
  {
    slug: "kanal-acma",
    name: "Arnavutköy Kanal Açma",
    shortDescription: "Altyapı ve drenaj kanalı açma",
    description: "Su, kanalizasyon, elektrik ve her türlü altyapı için kanal açma hizmeti. Ölçülü ve düzenli kanal kazısı.",
    features: [
      "Su hattı kanalı",
      "Kanalizasyon kanalı",
      "Elektrik kanalı",
      "Drenaj kanalı",
      "Altyapı kazısı",
    ],
    priceRange: "Metre bazlı fiyat",
  },
  {
    slug: "dolgu-isleri",
    name: "Dolgu İşleri",
    shortDescription: "Profesyonel dolgu ve toprak doldurma",
    description: "Arazi dolgusu, zemin yükseltme ve toprak doldurma işleri. Kaliteli malzeme ile profesyonel dolgu hizmeti.",
    features: [
      "Arazi dolgusu",
      "Zemin yükseltme",
      "Toprak doldurma",
      "Moloz dolgusu",
      "Sıkıştırma işleri",
    ],
    priceRange: "Metreküp bazlı fiyat",
  },
  {
    slug: "dolgu-tesviye",
    name: "Dolgu ve Tesviye İşleri",
    shortDescription: "Zemin düzleme ve dolgu hizmetleri",
    description: "Arazi tesviyesi, zemin düzleme ve dolgu işleri. Bahçe düzenleme, arsa hazırlama ve zemin iyileştirme.",
    features: [
      "Zemin düzleme (tesviye)",
      "Dolgu işleri",
      "Arazi düzenleme",
      "Bahçe tesviyesi",
      "Arsa hazırlama",
    ],
    priceRange: "Metrekare bazlı fiyat",
  },
  {
    slug: "yikim-isi",
    name: "Arnavutköy Yıkım İşi",
    shortDescription: "Kepçe ile yıkım ve beton kırma",
    description: "Duvar yıkımı, küçük yapı yıkımı ve beton kırma işleri. Güvenli ve kontrollü yıkım hizmeti.",
    features: [
      "Duvar yıkımı",
      "Küçük yapı yıkımı",
      "Beton kırma",
      "Moloz temizleme",
      "Güvenli yıkım",
    ],
    priceRange: "Metrekare bazlı fiyat",
  },
  {
    slug: "duvar-yikimi",
    name: "Arnavutköy Duvar Yıkımı",
    shortDescription: "Kepçe ile duvar yıkım hizmeti",
    description: "İç ve dış duvar yıkımı, beton duvar kırma ve moloz temizleme. Güvenli ve hızlı yıkım.",
    features: [
      "İç duvar yıkımı",
      "Dış duvar yıkımı",
      "Beton duvar kırma",
      "Moloz toplama",
      "Güvenlik önlemleri",
    ],
    priceRange: "Metrekare bazlı fiyat",
  },
  {
    slug: "kucuk-yapi-yikimi",
    name: "Küçük Yapı Yıkımı",
    shortDescription: "Küçük bina ve yapı yıkım hizmeti",
    description: "Tek katlı bina, depo, garaj gibi küçük yapıların yıkımı. Moloz temizleme dahil.",
    features: [
      "Tek katlı bina yıkımı",
      "Depo yıkımı",
      "Garaj yıkımı",
      "Moloz temizleme",
      "Hafriyat nakliyesi",
    ],
    priceRange: "Metrekare bazlı fiyat",
  },
  {
    slug: "beton-kirma",
    name: "Beton Kırma (Kepçe ile)",
    shortDescription: "Kepçe ile beton kırma hizmeti",
    description: "Zemin betonu, temel betonu ve yapı betonlarının kepçe ile kırılması. Profesyonel ekipman.",
    features: [
      "Zemin betonu kırma",
      "Temel betonu kırma",
      "Yapı betonu kırma",
      "Moloz temizleme",
      "Hızlı hizmet",
    ],
    priceRange: "Metreküp bazlı fiyat",
  },
  {
    slug: "operatorlu-kepce-kiralama",
    name: "Operatörlü Kepçe Kiralama",
    shortDescription: "Tecrübeli operatör ile kepçe kiralama",
    description: "JCB 3CX kepçe ve tecrübeli operatör ile saatlik veya günlük kiralama. Her türlü iş için uygun.",
    features: [
      "Tecrübeli operatör",
      "JCB 3CX kepçe",
      "Saatlik kiralama",
      "Günlük kiralama",
      "Esnek çalışma saatleri",
    ],
    priceRange: "Saatlik ve günlük fiyat",
  },
  {
    slug: "is-makinesi-kiralama",
    name: "İş Makinesi Kiralama",
    shortDescription: "JCB beko loder iş makinesi kiralama",
    description: "Kazıyıcı yükleyici (beko loder) kiralama hizmeti. İnşaat ve kazı işleri için ideal.",
    features: [
      "JCB beko loder",
      "Kazıyıcı yükleyici",
      "Operatör dahil",
      "Bakımlı ekipman",
      "Güvenli çalışma",
    ],
    priceRange: "Günlük kiralama fiyatı",
  },
];

// Helper Functions
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((svc) => svc.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((svc) => svc.slug);
}

export function getAllServices(): Service[] {
  return services;
}

export function getServiceCount(): number {
  return services.length;
}
