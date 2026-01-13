// AKCURA ELEKTRİK – Business, Local SEO & Schema Configuration

export const businessConfig = {
  /* -------------------------------------------------------------------------- */
  /* BUSINESS IDENTITY                                                          */
  /* -------------------------------------------------------------------------- */

  name: "Akcura Elektrik",
  legalName: "Akcura Elektrik",
  foundingDate: "2014-06-10",
  description:
    "Küçükçekmece ve çevresinde yerinde elektrik tesisatı, arıza onarımı ve montaj hizmetleri sunan yerel elektrikçi.",

  /* -------------------------------------------------------------------------- */
  /* CONTACT INFORMATION (NAP)                                                   */
  /* -------------------------------------------------------------------------- */

  phone: "0537 993 27 61",
  phoneFormatted: "tel:+905379932761",
  email: "akcuramuhammet658@gmail.com",

  /* -------------------------------------------------------------------------- */
  /* WEBSITE & MAPS                                                             */
  /* -------------------------------------------------------------------------- */

  website: "https://akcuraelektrik.com.tr",
  websiteUrl: "https://akcuraelektrik.com.tr",
  googleMapsUrl: "https://maps.app.goo.gl/RdW9GC9TdftLKwqa7", // GMB linki açılınca burayı güncelle

  /* -------------------------------------------------------------------------- */
  /* SERVICE AREA (SERVICE-AREA BUSINESS)                                       */
  /* -------------------------------------------------------------------------- */

  serviceArea: {
    district: "Küçükçekmece",
    city: "İstanbul",
    region: "İstanbul",
    country: "TR",
    full: "Küçükçekmece, İstanbul",
  },

  /* -------------------------------------------------------------------------- */
  /* ADDRESS (SCHEMA SAFE – NO FAKE ADDRESS)                                    */
  /* -------------------------------------------------------------------------- */

  address: {
    "@type": "PostalAddress" as const,
    addressLocality: "Küçükçekmece",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },

  /* -------------------------------------------------------------------------- */
  /* WORKING HOURS                                                              */
  /* -------------------------------------------------------------------------- */

  workingHours: {
    weekdays: "09:00-19:00",
    saturday: "09:00-19:00",
    sunday: "Kapalı",
    formatted: "Pazartesi–Cumartesi: 09:00–19:00, Pazar: Kapalı",
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
      opens: "09:00",
      closes: "19:00",
    },
  ] as const,

  /* -------------------------------------------------------------------------- */
  /* SOCIAL & SAMEAS                                                            */
  /* -------------------------------------------------------------------------- */

  social: {
    instagram: "",
    facebook: "",
  },

  socialProfiles: [
    // instagram / facebook eklenince buraya koy
  ],

  sameAs: [
    // instagram / facebook eklenince buraya koy
  ],

  /* -------------------------------------------------------------------------- */
  /* SEO DEFAULTS                                                               */
  /* -------------------------------------------------------------------------- */

  seo: {
    siteUrl: "https://akcuraelektrik.com.tr",
    defaultTitle: "Akcura Elektrik | Küçükçekmece Elektrik Hizmetleri",
    titleTemplate: "%s",
    defaultDescription:
      "Akcura Elektrik, Küçükçekmece ve çevresinde yerinde elektrik hizmetleri sunar. 2014 yılından beri güvenilir ve profesyonel elektrikçi.",
    locale: "tr_TR",
    ogImage: "/assets/elektrik-ustasi.jpeg",
    keywords: [
      "elektrikçi",
      "Küçükçekmece elektrikçi",
      "elektrik arıza onarımı",
      "elektrik tesisatı",
      "sigorta panosu",
      "priz anahtar montajı",
      "aydınlatma kurulumu",
      "İstanbul elektrikçi",
    ],
    googleVerification: "izp4XDjSxK6C2omP1XDjKci6yS4yIgAWFNWkf3jGXh4",
  },

  /* -------------------------------------------------------------------------- */
  /* BUSINESS TYPE & ATTRIBUTES                                                 */
  /* -------------------------------------------------------------------------- */

  businessType: ["LocalBusiness", "Electrician"] as const,
  priceRange: "₺₺",

  features: [
    "2014 yılından beri tecrübe",
    "Yerinde servis hizmeti",
    "Şeffaf çalışma",
    "Güvenilir işçilik",
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
