# AKCURA ELEKTRİK - Next.js SEO-Optimized Website

Küçükçekmece elektrik hizmetleri için SEO optimize edilmiş Next.js 14 web sitesi.

## 🚀 Teknolojiler

- **Next.js 14** - App Router ile
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Modern, responsive tasarım
- **Shadcn/ui** - UI component library
- **Lucide React** - Modern ikonlar

## 📁 Proje Yapısı

```
akcura-elektrik-nextjs/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout + metadata
│   ├── page.tsx                 # Homepage
│   ├── hizmetler/               # Services pages
│   │   ├── page.tsx            # Services list
│   │   └── [slug]/page.tsx     # Dynamic service pages (5 services)
│   ├── hakkimizda/page.tsx     # About page
│   ├── iletisim/page.tsx       # Contact page
│   ├── not-found.tsx           # 404 page
│   ├── robots.ts               # Dynamic robots.txt
│   └── sitemap.ts              # Dynamic XML sitemap
├── components/
│   ├── schemas/                # JSON-LD Schema components
│   │   ├── LocalBusinessSchema.tsx
│   │   ├── ServiceSchema.tsx
│   │   ├── FAQSchema.tsx
│   │   └── BreadcrumbSchema.tsx
│   ├── layout/                 # Layout components
│   │   ├── Header.tsx          # Header with NAP
│   │   └── Footer.tsx          # Footer with NAP
│   ├── home/                   # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── ServiceGrid.tsx
│   │   ├── TrustSignals.tsx
│   │   ├── FAQ.tsx
│   │   └── CTA.tsx
│   └── ui/                     # Shadcn/ui components
├── lib/
│   ├── config.ts               # Business & SEO config (REAL CONTACT DATA)
│   ├── services.ts             # 5 service definitions
│   ├── metadata.ts             # Metadata generators
│   └── utils.ts                # Utilities
├── public/
│   ├── assets/                 # Images
│   ├── favicon.ico
│   └── robots.txt
└── package.json
```

## 🎯 SEO Özellikleri

### 1. **Next.js Metadata API**
- Her sayfada benzersiz title ve description
- Canonical URL'ler
- OpenGraph ve Twitter Card metadata
- Otomatik robots.txt ve sitemap.xml

### 2. **JSON-LD Structured Data**
- ✅ LocalBusiness Schema
- ✅ Electrician additionalType
- ✅ Service Schema (5 hizmet)
- ✅ FAQPage Schema
- ✅ BreadcrumbList Schema

### 3. **NAP Tutarlılığı** (Name, Address, Phone)
Aşağıdaki yerlerde **birebir aynı**:
- Header
- Footer
- Contact page
- LocalBusiness Schema

```
İsim: AKCURA ELEKTRİK
Telefon: 0537 993 27 61
Email: akcuramuhammet658@gmail.com
Bölge: Küçükçekmece, İstanbul
Çalışma: Pazartesi-Cumartesi 09:00-19:00
```

### 4. **5 Hizmet Sayfası**
1. Elektrik Tesisatı (`/hizmetler/elektrik-tesisati`)
2. Elektrik Arıza Onarımı (`/hizmetler/elektrik-ariza-onarimi`)
3. Priz ve Anahtar Montajı (`/hizmetler/priz-anahtar-montaji`)
4. Sigorta Panosu Tamiri (`/hizmetler/sigorta-panosu-tamiri`)
5. Aydınlatma Kurulumu (`/hizmetler/aydinlatma-kurulumu`)

Her hizmet sayfasında:
- Unique H1 with service name
- Service-specific metadata
- ServiceSchema JSON-LD
- BreadcrumbSchema
- FAQSchema
- CTA sections

### 5. **Performance Optimization**
- ✅ next/image ile otomatik image optimization
- ✅ Server Components (default)
- ✅ Static generation for all pages
- ✅ Lazy loading images
- ✅ Responsive images with srcset

### 6. **Local SEO Best Practices**
- Service Area Business model (no fake address)
- Natural Turkish content
- Location mentions: Küçükçekmece, Halkalı, Atakent, Cennet, Sefaköy
- Click-to-call buttons
- Google Maps embed on contact page

## 🛠️ Kurulum ve Çalıştırma

### Development

```bash
# Dependencies'i yükle
npm install

# Development server'ı başlat
npm run dev
```

http://localhost:3000 adresinde çalışacaktır.

### Production Build

```bash
# Production build
npm run build

# Production server'ı başlat
npm run start
```

### Linting

```bash
npm run lint
```

## 📝 Yapılandırma

### İletişim Bilgilerini Güncelleme

`lib/config.ts` dosyasını düzenleyin:

```typescript
export const businessConfig = {
  name: "AKCURA ELEKTRİK",
  phone: "0537 993 27 61",
  email: "akcuramuhammet658@gmail.com",
  serviceArea: {
    district: "Küçükçekmece",
    city: "İstanbul"
  },
  // ... diğer ayarlar
}
```

### Domain Güncelleme

`lib/config.ts` içinde `siteUrl` değerini güncelleyin:

```typescript
seo: {
  siteUrl: "https://akcuraelektrik.com.tr",
  // ...
}
```

## 🧪 SEO Test Checklist

### Pre-Launch Checklist
- [x] All 5 service pages created
- [x] All schemas validated
- [x] NAP consistency verified (Header, Footer, Contact, Schema)
- [x] Images optimized with next/image
- [x] Unique metadata on every page
- [x] robots.txt and sitemap.xml working
- [x] 404 page implemented
- [x] Mobile responsive
- [x] Turkish content (no English)

### Post-Launch Checklist
- [ ] Submit sitemap to Google Search Console
- [ ] Setup Google Business Profile
- [ ] Verify NAP matches GBP exactly
- [ ] Test on Google Rich Results Test
- [ ] Monitor Core Web Vitals
- [ ] Setup Google Analytics 4

## 🔍 SEO Testing Tools

1. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - Test any page for schema errors

2. **Google Search Console**
   - Submit sitemap: `https://akcuraelektrik.com/sitemap.xml`
   - Monitor indexing status

3. **PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Check Core Web Vitals

4. **Schema Validator**
   - https://validator.schema.org/
   - Validate JSON-LD schemas

## 📄 Sayfalar

### Public Pages
- `/` - Homepage
- `/hizmetler` - Services list
- `/hizmetler/[slug]` - Service detail (5 pages)
- `/hakkimizda` - About
- `/iletisim` - Contact
- `/404` - Not found

### Dynamic Routes
- `/sitemap.xml` - XML sitemap
- `/robots.txt` - Robots file

## 🎨 Design System

Tailwind CSS custom classes:
- `.container-main` - Max-width 1200px container
- `.section-padding` - Consistent section spacing
- `.btn-primary` - Primary CTA button
- `.btn-secondary` - Secondary button
- `.link-underline` - Animated underline link

## 📞 NAP Consistency (CRITICAL)

**Aşağıdaki bilgiler TÜM sayfalarda birebir aynı olmalı:**

```
AKCURA ELEKTRİK
Telefon: 0537 993 27 61
Email: akcuramuhammet658@gmail.com
Hizmet Bölgesi: Küçükçekmece, İstanbul
Çalışma Saatleri: Pazartesi-Cumartesi 09:00-19:00, Pazar kapalı
```

Bu bilgiler şuralarda kullanılıyor:
- `lib/config.ts` - Master config
- `components/layout/Header.tsx` - Phone in top bar
- `components/layout/Footer.tsx` - Full NAP
- `app/iletisim/page.tsx` - Contact page
- `components/schemas/LocalBusinessSchema.tsx` - Schema

## 🚀 Deployment

### Vercel (Önerilen)

1. GitHub'a push yapın
2. Vercel'e import edin
3. Environment variables ekleyin (gerekirse)
4. Deploy

### Diğer Platformlar

Any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📈 Performance Targets

- **Lighthouse SEO Score**: 100/100 ✅
- **Lighthouse Performance**: 95+ 
- **Core Web Vitals**:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

## 🔒 Security

- No sensitive data in client code
- All business info in `lib/config.ts`
- Environment variables for API keys (if needed)

## 📚 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 📝 License

© 2024 AKCURA ELEKTRİK. All rights reserved.

## 👨‍💻 Development Notes

- Tüm içerik Türkçe (TR) dilinde
- Service Area Business modeli (fiziksel adres yok)
- Google Local Pack için optimize edilmiş
- No keyword stuffing
- Natural, trustworthy tone
- Real business, real services
