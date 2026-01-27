// KEÇAŞ KEPÇE - FINAL Service Definitions
// %100 GMB + Local SEO Optimized

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
    slug: "operatorlu-kepce-kiralama",
    name: "Operatörlü Kepçe Kiralama",
    shortDescription: "Arnavutköy’de tecrübeli operatör ile kepçe kiralama",
    description:
      "Arnavutköy ve çevresinde 2004’ten bu yana operatörlü kepçe kiralama hizmeti sunuyoruz. JCB 3CX iş makinemiz ve 10+ yıl tecrübeli operatörlerimizle kazı, yükleme ve hafriyat işlerinde güvenli ve profesyonel çözümler üretiyoruz. Saatlik veya günlük kiralama seçenekleri ile yerel projelere hızlı destek sağlıyoruz.",
    features: [
      "Operatörlü kepçe kiralama",
      "JCB 3CX iş makinesi",
      "Saatlik ve günlük çalışma",
      "Yerel şantiye deneyimi",
      "Bakımlı ve sigortalı ekipman",
      "Acil işler için hızlı mobilizasyon",
    ],
    priceRange: "Proje ve süreye göre değişir (ücretsiz keşif sonrası)",
  },

  {
    slug: "kazi-isleri",
    name: "Kazı İşleri",
    shortDescription: "Arnavutköy’de profesyonel kazı ve hafriyat hizmetleri",
    description:
      "Arnavutköy, Hadımköy ve çevre mahallelerde her türlü kazı ve hafriyat işi için profesyonel hizmet veriyoruz. Temel kazısı, kanal açma ve toprak kazısı gibi çalışmaları, bölgenin zemin yapısına uygun ekipman ve tecrübeli operatörlerle güvenli şekilde gerçekleştiriyoruz.",
    features: [
      "Toprak kazısı ve hafriyat",
      "Kanal ve altyapı kazıları",
      "Zemine uygun ekipman kullanımı",
      "Hızlı ve kontrollü çalışma",
      "Yerel saha tecrübesi",
    ],
    priceRange: "Metreküp veya saatlik çalışma bazlı",
  },

  {
    slug: "temel-kazisi",
    name: "Temel Kazısı",
    shortDescription: "Arnavutköy’de bina ve yapı temel kazısı",
    description:
      "Arnavutköy’de konut, villa ve ticari yapılar için projeye uygun temel kazısı hizmeti sunuyoruz. Kot, derinlik ve şev kurallarına dikkat ederek, grobetona hazır temiz temel alanları teslim ediyoruz. 2004’ten bu yana yerel inşaat projelerinde aktif olarak çalışıyoruz.",
    features: [
      "Bina ve villa temel kazısı",
      "Projeye uygun ölçülü kazı",
      "Zemin yapısına göre çalışma",
      "Güvenli şev oluşturma",
      "Tecrübeli operatör kadrosu",
    ],
    priceRange: "Proje metrajına göre belirlenir",
  },

  {
    slug: "dolgu-tesviye",
    name: "Dolgu ve Tesviye",
    shortDescription: "Arnavutköy’de dolgu işleri ve zemin tesviyesi",
    description:
      "Arnavutköy ve çevresinde arazi düzenleme, dolgu ve zemin tesviye (reglaj) hizmetleri sunuyoruz. Bahçe düzenlemesi, arsa hazırlığı ve bina çevresi dolgularında doğru malzeme seçimi ve ölçülü tesviye ile uzun ömürlü zeminler oluşturuyoruz.",
    features: [
      "Arazi ve zemin tesviyesi",
      "Toprak dolgu ve sıkıştırma",
      "Bahçe ve arsa düzenleme",
      "Su eğimi verme",
      "Peyzaj öncesi zemin hazırlığı",
    ],
    priceRange: "Metrekare / metreküp bazlı",
  },

  {
    slug: "yikim-hizmetleri",
    name: "Yıkım Hizmetleri",
    shortDescription: "Arnavutköy’de bina, duvar yıkımı ve beton kırma",
    description:
      "Arnavutköy’de bina yıkımı, duvar yıkımı, küçük yapı yıkımı ve beton kırma hizmetleri sunuyoruz. JCB kepçe ve hidrolik kırıcı ekipmanlarımızla güvenli, kontrollü ve moloz dahil yıkım çözümleri sağlıyoruz. Yerel yerleşimlere uygun hassas çalışma prensibiyle hareket ediyoruz.",
    features: [
      "Bina ve gecekondu yıkımı",
      "Duvar ve küçük yapı yıkımı",
      "Beton kırma ve söküm",
      "Moloz yükleme ve nakliye",
      "Kontrollü ve güvenli yıkım",
    ],
    priceRange: "Yıkım alanına ve moloz miktarına göre",
  },

  {
    slug: "is-makinesi-kiralama",
    name: "İş Makinesi Kiralama",
    shortDescription: "Arnavutköy’de projeye uygun iş makinesi temini",
    description:
      "Operatörlü kepçe kiralama dışında, Arnavutköy ve çevresindeki projeler için farklı iş makinesi ihtiyaçlarında da çözüm sunuyoruz. Ekskavatör, mini kepçe ve hafriyat kamyonu gibi ekipmanları, güvenilir iş ortaklarımız aracılığıyla organize ediyoruz.",
    features: [
      "Farklı iş makineleri için tek muhatap",
      "Proje bazlı ekipman planlaması",
      "Yerel tedarik ağı",
      "Şantiye organizasyonu desteği",
      "Zamanında makine temini",
    ],
    priceRange: "Proje bazlı fiyatlandırma",
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
