import Link from 'next/link';
import { Metadata } from 'next';
import { businessConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Sayfa Bulunamadı - 404 | Keçaş Kepçe',
  description: 'Aradığınız sayfa bulunamadı. Arnavutköy kepçe kiralama hizmetleri için ana sayfaya dönebilirsiniz.',
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
            Arnavutköy ve çevresinde kepçe kiralama hizmetleri için
            <Link href="/iletisim" className="underline ml-1">
              bizimle iletişime geçebilirsiniz.
            </Link>
          </p>

          <a
            href={businessConfig.phoneFormatted}
            className="inline-flex items-center justify-center px-8 py-3 my-6 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition shadow-md"
          >
            Hemen Ara: {businessConfig.phone}
          </a>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition shadow-md"
            >
              Ana Sayfaya Dön
            </Link>
            <Link
              href="/hizmetler"
              className="inline-flex items-center justify-center px-8 py-3 bg-card text-foreground font-semibold rounded-lg hover:bg-card/90 transition border-2 border-border"
            >
              Hizmetleri İncele
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
