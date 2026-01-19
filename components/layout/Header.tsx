"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "İletişim", href: "/iletisim" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Ana navigasyon"
      >
        <div className="flex items-center justify-between min-h-[72px]">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
            aria-label="Keçaş Kepçe Ana Sayfa"
          >
            <div className="relative w-[44px] h-[44px] sm:w-[52px] sm:h-[52px]">
              <Image
                src="/assets/kecas-kepce-logo.avif"
                alt="Keçaş Kepçe Logo"
                fill
                priority
                sizes="(max-width: 640px) 44px, 52px"
                className="object-contain"
              />
            </div>

            <span className="font-bold text-gray-900 tracking-tight leading-tight text-lg sm:text-xl">
              Keçaş Kepçe
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-blue-600 transition group"
              >
                {link.name}
                <span className="absolute left-1/2 -bottom-0.5 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-3/4 -translate-x-1/2" />
              </Link>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <Link
            href="/iletisim"
            className="hidden md:inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-sm hover:bg-white/90 transition"
            aria-label="İletişim sayfasına git"
          >
            İletişime Geç
          </Link>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            aria-label="Menüyü aç/kapat"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:text-blue-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/iletisim"
                className="mx-4 mt-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-center hover:bg-primary/90 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
