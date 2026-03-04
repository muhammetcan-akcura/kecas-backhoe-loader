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

  {
    slug: "arnavutkoy-kiralik-kepce",
    name: "Arnavutköy Kiralık Kepçe",
    shortDescription: "Arnavutköy genelinde operatörlü kiralık kepçe hizmeti",
    description: "Arnavutköy ve çevresinde JCB 3CX ile profesyonel kiralık kepçe hizmeti. Temel kazısı, dolgu, yıkım ve kanal açma işleri için aynı gün destek.",
    features: [
      "Operatörlü kiralık kepçe",
      "JCB 3CX iş makinesi",
      "Hızlı mobilizasyon",
      "Ücretsiz saha keşfi",
      "22 yıllık tecrübe",
    ],
    priceRange: "Saatlik/günlük kiralama seçenekleri",
  },

  // Yunus Emre Mahallesi Sayfaları
  {
    slug: "yunus-emre-kiralik-kepce",
    name: "Yunus Emre Mah. Kiralık Kepçe",
    shortDescription: "Yunus Emre Mahallesi'nde operatörlü kiralık kepçe",
    description: "Arnavutköy Yunus Emre Mahallesi'nde JCB 3CX ile operatörlü kiralık kepçe hizmeti. Temel kazısı, kanal açma, dolgu, yıkım dahil tüm kazı işleri. Aynı gün hizmet.",
    features: [
      "Operatörlü kiralık kepçe",
      "JCB 3CX iş makinesi",
      "Aynı gün hizmet",
      "Ücretsiz keşif",
      "Sigortalı çalışma",
    ],
    priceRange: "Saatlik/günlük – ücretsiz keşif sonrası",
  },
  {
    slug: "yunus-emre-kazi-isleri",
    name: "Yunus Emre Mah. Kazı İşleri",
    shortDescription: "Yunus Emre Mahallesi'nde profesyonel kazı hizmeti",
    description: "Yunus Emre Mahallesi'nde inşaat, bahçe, kanal ve altyapı kazı işleri. Mahallenin zemin yapısına uygun ekipman ve tekniklerle hızlı ve güvenli kazı.",
    features: [
      "Toprak ve kanal kazısı",
      "Altyapı korumalı hassas kazı",
      "Hafriyat nakliye desteği",
      "Zemine uygun teknik",
    ],
    priceRange: "Metreküp veya saatlik bazlı",
  },
  {
    slug: "yunus-emre-temel-kazisi",
    name: "Yunus Emre Mah. Temel Kazısı",
    shortDescription: "Yunus Emre Mahallesi'nde villa ve yapı temel kazısı",
    description: "Yunus Emre Mahallesi'nde projeye uygun hassas temel kazısı. Kot kontrolü, güvenli şev ve grobetona hazır zemin teslimi. Kaya zemine hakimiyet.",
    features: [
      "Projeye uygun hassas kazı",
      "Kot kontrolü",
      "Kaya zemine hakimiyet",
      "Güvenli şev oluşturma",
    ],
    priceRange: "Proje metrajına göre",
  },
  {
    slug: "yunus-emre-yikim",
    name: "Yunus Emre Mah. Yıkım Hizmetleri",
    shortDescription: "Yunus Emre Mahallesi'nde güvenli yıkım ve beton kırma",
    description: "Yunus Emre Mahallesi'nde bina, duvar yıkımı ve beton kırma. JCB kırıcı ile hızlı, kontrollü yıkım. Moloz nakliyesi dahil anahtar teslim hizmet.",
    features: [
      "Kontrollü yıkım",
      "Beton kırma ve söküm",
      "Moloz nakliyesi dahil",
      "Komşu yapı koruma hassasiyeti",
    ],
    priceRange: "Yıkım alanına ve moloz miktarına göre",
  },

  // Hadımköy, Taşoluk, Bolluca
  {
    slug: "hadimkoy-kiralik-kepce",
    name: "Hadımköy Kiralık Kepçe",
    shortDescription: "Hadımköy sanayi bölgesinde operatörlü kiralık kepçe",
    description: "Hadımköy'de fabrika, depo ve OSB çevresi kazı işleri. Sanayi altyapısı, ağır hafriyat ve büyük çaplı projeler. Paket fiyat avantajı.",
    features: [
      "Sanayi bölgesi deneyimi",
      "Ağır tonajlı kazı kapasitesi",
      "Paket fiyat avantajı",
      "İş güvenliği tam uyum",
    ],
    priceRange: "Günlük/haftalık paket fiyat",
  },
  {
    slug: "tasoluk-kiralik-kepce",
    name: "Taşoluk Kiralık Kepçe",
    shortDescription: "Taşoluk'ta arazi dönüşüm ve konut projesi kepçe hizmeti",
    description: "Taşoluk'ta bakir arazi dönüşümü, toplu konut hazırlığı ve geniş çaplı reglaj. Tarım arazisinden inşaat sahasına tek elden çözüm.",
    features: [
      "Arazi dönüşüm uzmanlığı",
      "Toplu konut proje deneyimi",
      "Geniş çaplı reglaj kapasitesi",
      "Kamyon koordinasyonu dahil",
    ],
    priceRange: "Proje bazlı toplam fiyat",
  },
  {
    slug: "bolluca-kiralik-kepce",
    name: "Bolluca Kiralık Kepçe",
    shortDescription: "Bolluca'da eğimli arazi ve yamaç kazısı uzmanı",
    description: "Bolluca'nın tepelik arazisinde istinat duvarı temeli, yamaç kazısı ve kayalık zeminde kırıcı çalışma. Eğimli arazi uzmanı.",
    features: [
      "Eğimli arazi uzmanlığı",
      "İstinat duvarı temeli",
      "Kayalık zeminde kırıcı uç",
      "Dar yollardan geçebilen makine",
    ],
    priceRange: "Arazi zorluğuna göre",
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
