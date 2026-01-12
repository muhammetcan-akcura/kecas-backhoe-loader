import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sayfa Bulunamadı - 404',
  description: 'Aradığınız sayfa bulunamadı.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="section-padding">
      <div className="container-main">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Sayfa Bulunamadı
          </h1>
          <p className="text-6xl md:text-8xl font-bold text-accent mb-6">
            404
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
          <p className="text-sm text-muted-foreground mt-6">
            Küçükçekmece ve çevresinde elektrik hizmetleri için
            <Link href="/iletisim" className="underline ml-1">
              bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
          <a href="tel:+905379932761" className="btn-secondary my-3.5">
            Hemen Ara
          </a>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Ana Sayfaya Dön
            </Link>
            <Link href="/hizmetler" className="btn-secondary">
              Hizmetleri İncele
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

