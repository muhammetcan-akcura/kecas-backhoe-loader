// AKCURA ELEKTRİK - Service Definitions
// 5 Core Services Only (klima-montaji removed per plan)

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
    slug: "elektrik-tesisati",
    name: "Elektrik Tesisatı",
    shortDescription: "Komple tesisat yenileme ve döşeme",
    description: "Evinizin veya iş yerinizin elektrik tesisatını sıfırdan döşüyor veya tamamen yeniliyoruz. Güvenli, standartlara uygun işçilik.",
    features: [
      "Komple tesisat yenileme",
      "Sıfırdan tesisat döşeme",
      "Kablo çekimi ve kanal açma",
      "Topraklama sistemi",
      "Standartlara uygun işçilik",
    ],
    priceRange: "Keşfe göre fiyat",
  },
  {
    slug: "elektrik-ariza-onarimi",
    name: "Küçükçekmece Elektrik Arıza Onarımı",
    shortDescription: "Hızlı elektrik arıza servisi",
    description: "Elektrik kesintisi, kısa devre, kaçak akım gibi arızalara hızlı müdahale. İş günlerinde aynı gün hizmet.",
    features: [
      "Hızlı arıza tespiti",
      "Kısa devre onarımı",
      "Kaçak akım bulma",
      "Sigorta arızaları",
      "Priz ve anahtar tamiri",
    ],
    priceRange: "150₺'den başlayan",
  },
  {
    slug: "priz-anahtar-montaji",
    name: "Priz ve Anahtar Montajı",
    shortDescription: "Priz, anahtar değişimi ve ekleme",
    description: "Eski prizlerinizi yeniliyoruz, ihtiyaç duyduğunuz yerlere yeni prizler ekliyoruz. Estetik ve güvenli çözümler.",
    features: [
      "Priz değişimi ve ekleme",
      "Anahtar montajı",
      "USB'li priz montajı",
      "Topraklı priz kurulumu",
      "Dekoratif anahtar seçenekleri",
    ],
    priceRange: "80₺'den başlayan",
  },
  {
    slug: "sigorta-panosu-tamiri",
    name: "Küçükçekmece Sigorta Panosu Tamiri",
    shortDescription: "Sigorta panosu kurulum ve yenileme",
    description: "Yeni nesil elektrik panoları, otomatik sigorta sistemleri ve kaçak akım röleleri ile evinizi güvence altına alıyoruz.",
    features: [
      "Pano kurulumu ve yenileme",
      "Otomatik sigorta montajı",
      "Kaçak akım rölesi",
      "Faz dengeli dağıtım",
      "Etiketleme ve düzenleme",
    ],
    priceRange: "500₺'den başlayan",
  },
  {
    slug: "aydinlatma-kurulumu",
    name: "Küçükçekmece Aydınlatma Kurulumu",
    shortDescription: "İç ve dış mekan aydınlatma çözümleri",
    description: "LED aydınlatma, spot lamba, avize montajı ve dekoratif aydınlatma projeleri. Enerji tasarruflu çözümler sunuyoruz.",
    features: [
      "LED aydınlatma sistemleri",
      "Spot ve avize montajı",
      "Bahçe aydınlatması",
      "Dekoratif aydınlatma",
      "Enerji tasarruflu çözümler",
    ],
    priceRange: "100₺'den başlayan",
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

