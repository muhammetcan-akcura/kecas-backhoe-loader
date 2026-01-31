// KEÇAŞ KEPÇE – Business, Local SEO & Schema Configuration

export const businessConfig = {
  /* -------------------------------------------------------------------------- */
  /* BUSINESS IDENTITY                                                          */
  /* -------------------------------------------------------------------------- */

  name: "Keçaş Kepçe",
  legalName: "Keçaş Kepçe",
  foundingDate: "2004-10-20",
  description:
    "Arnavutköy ve çevresinde 22 yıldır JCB 3CX kepçe kiralama, kazı işleri, temel kazısı, yıkım ve hafriyat hizmetleri sunan tecrübeli operatörlü iş makinesi kiralama firması.",

  /* -------------------------------------------------------------------------- */
  /* CONTACT INFORMATION (NAP)                                                   */
  /* -------------------------------------------------------------------------- */

  phone: "0539 477 81 12",
  phoneFormatted: "tel:+905394778112",
  whatsappUrl: "https://wa.me/905394778112",
  email: "yusufkecas@gmail.com",

  /* -------------------------------------------------------------------------- */
  /* WEBSITE & MAPS                                                             */
  /* -------------------------------------------------------------------------- */

  website: "https://kecaskepce.com.tr",
  websiteUrl: "https://kecaskepce.com.tr",
  googleMapsUrl: "https://maps.app.goo.gl/BAmrmJkgLn8SwLiG8", // GMB linki açılınca burayı güncelle

  /* -------------------------------------------------------------------------- */
  /* SERVICE AREA (SERVICE-AREA BUSINESS)                                       */
  /* -------------------------------------------------------------------------- */

  serviceArea: {
    district: "Arnavutköy",
    neighborhood: "Şirindere",
    city: "İstanbul",
    region: "İstanbul",
    country: "TR",
    full: "Arnavutköy, İstanbul",
  },

  /* -------------------------------------------------------------------------- */
  /* ADDRESS (SCHEMA SAFE – NO FAKE ADDRESS)                                    */
  /* -------------------------------------------------------------------------- */

  address: {
    "@type": "PostalAddress" as const,
    addressLocality: "Arnavutköy",
    addressRegion: "İstanbul",
    addressCountry: "TR",
    // Şirindere mahallesi - tam adres GMB doğrulaması sonrası eklenecek
  },

  /* -------------------------------------------------------------------------- */
  /* GEO COORDINATES                                                            */
  /* -------------------------------------------------------------------------- */

  geo: {
    "@type": "GeoCoordinates" as const,
    latitude: 41.2167,
    longitude: 28.7333,
  },

  hasMap: "https://maps.app.goo.gl/BAmrmJkgLn8SwLiG8",

  /* -------------------------------------------------------------------------- */
  /* PAYMENT & LANGUAGE                                                         */
  /* -------------------------------------------------------------------------- */

  paymentAccepted: ["Nakit", "Havale/EFT"],
  currenciesAccepted: "TRY",
  knowsLanguage: "tr",

  /* -------------------------------------------------------------------------- */
  /* WORKING HOURS                                                              */
  /* -------------------------------------------------------------------------- */

  workingHours: {
    weekdays: "08:00-20:00",
    saturday: "08:00-20:00",
    sunday: "Kapalı",
    formatted: "Pazartesi–Cumartesi: 08:00–20:00, Pazar: Kapalı",
    emergency: "7/24 acil hizmet mevcuttur",
  },

  openingHoursSpec: [
    {
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ] as const,
      opens: "08:00",
      closes: "20:00",
    },
  ] as const,

  /* -------------------------------------------------------------------------- */
  /* SOCIAL & SAMEAS                                                            */
  /* -------------------------------------------------------------------------- */

  social: {
    instagram: "", // Açılınca eklenecek
    facebook: "", // Açılınca eklenecek
    youtube: "", // Açılınca eklenecek
  },

  socialProfiles: [
    // instagram / facebook / youtube eklenince buraya koy
  ],

  sameAs: [
    // instagram / facebook / youtube eklenince buraya koy
  ],

  /* -------------------------------------------------------------------------- */
  /* SEO DEFAULTS                                                               */
  /* -------------------------------------------------------------------------- */

  seo: {
    siteUrl: "https://kecaskepce.com.tr",
    defaultTitle: "Keçaş Kepçe | Arnavutköy Kepçe Kiralama & Kazı İşleri",
    titleTemplate: "%s | Keçaş Kepçe",
    defaultDescription:
      "Arnavutköy'de 22 yıldır JCB 3CX kepçe kiralama, kazı işleri, temel kazısı, yıkım ve hafriyat hizmetleri. Tecrübeli operatör, uygun fiyat, 7/24 hizmet.",
    locale: "tr_TR",
    ogImage: "/assets/kepce-kiralama.avif",
    keywords: [
      "kepçe kiralama",
      "Arnavutköy kepçe",
      "JCB kepçe",
      "kazı işleri",
      "temel kazısı",
      "operatörlü kepçe",
      "iş makinesi kiralama",
      "beko loder",
      "hafriyat",
      "yıkım işi",
      "kanal açma",
      "İstanbul kepçe kiralama",
      "Arnavutköy kazı",
      "Şirindere kepçe",
    ],
    googleVerification: "NhA4tjEBpPfywoWAFG129NlMlh-OJPtCmTxNajxZALU",
  },

  /* -------------------------------------------------------------------------- */
  /* BUSINESS TYPE & ATTRIBUTES                                                 */
  /* -------------------------------------------------------------------------- */

  businessType: ["LocalBusiness", "HomeAndConstructionBusiness"] as const,
  priceRange: "₺₺", // Orta segment - GMB için uygun

  features: [
    "22 yıldır tecrübe",
    "7/24 acil hizmet",
    "Tecrübeli operatör",
    "Uygun fiyat garantisi",
    "JCB 3CX kepçe",
    "Profesyonel ekipman",
  ],

  equipment: [
    {
      name: "JCB 3CX Beko Loder",
      type: "Kazıyıcı Yükleyici",
      description: "Profesyonel JCB 3CX kepçe ile her türlü kazı ve yükleme işi",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* HELPERS                                                                    */
/* -------------------------------------------------------------------------- */

export function getFullBusinessName() {
  return businessConfig.name;
}

export function getServiceAreaText() {
  return businessConfig.serviceArea.full;
}

export function getWorkingHoursText() {
  return businessConfig.workingHours.formatted;
}
