"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, MapPin, Wrench, ArrowRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "İletişim", href: "/iletisim" },
];

// All mahalle items for the mega dropdown - flat list, displayed in grid
const mahalleler = [
  { name: "Arnavutköy", href: "/arnavutkoy-kiralik-kepce", highlight: true },
  { name: "Yunus Emre", href: "/yunus-emre-kiralik-kepce" },
  { name: "Hadımköy", href: "/hadimkoy-kiralik-kepce" },
  { name: "Taşoluk", href: "/tasoluk-kiralik-kepce" },
  { name: "Bolluca", href: "/bolluca-kiralik-kepce" },
  { name: "Deliklikaya", href: "/deliklikaya-kiralik-kepce" },
  { name: "Ömerli", href: "/omerli-kiralik-kepce" },
  { name: "İmrahor", href: "/imrahor-kiralik-kepce" },
  { name: "Karlıbayır", href: "/karlibayir-kiralik-kepce" },
  { name: "Haraççı", href: "/haracci-kiralik-kepce" },
  { name: "Yassıören", href: "/yassioren-kiralik-kepce" },
  { name: "Baklalı", href: "/baklali-kiralik-kepce" },
  { name: "Boğazköy", href: "/bogazkoy-kiralik-kepce" },
  { name: "Yavuz Selim", href: "/yavuz-selim-kiralik-kepce" },
  { name: "Tayakadın", href: "/tayakadin-kiralik-kepce" },
  { name: "Mavigöl", href: "/mavigol-kiralik-kepce" },
  { name: "Boyalık", href: "/boyalik-kiralik-kepce" },
  { name: "Dursunköy", href: "/dursunkoy-kiralik-kepce" },
  { name: "Sazlıbosna", href: "/sazlibosna-kiralik-kepce" },
  { name: "Hacımaşlı", href: "/hacimasli-kiralik-kepce" },
  { name: "Karaburun", href: "/karaburun-kiralik-kepce" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDesktopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDesktopDropdownOpen(false), 200);
  };

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
          <div className="hidden md:flex items-center gap-1">
            {/* Hizmet Bölgeleri dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                className="flex items-center gap-1 px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-primary transition group"
                aria-expanded={desktopDropdownOpen}
                aria-haspopup="true"
              >
                Hizmet Bölgeleri
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${desktopDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Desktop Mega Dropdown - Wide Grid Layout */}
              {desktopDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[720px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                  {/* Header */}
                  <div className="px-6 pt-5 pb-3 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                        Hizmet Verdiğimiz Mahalleler
                      </span>
                    </div>
                    <Link
                      href="/hizmetler"
                      className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                      onClick={() => setDesktopDropdownOpen(false)}
                    >
                      Tüm Hizmetler <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  {/* Mahalleler Grid - 4 columns */}
                  <div className="p-4 grid grid-cols-4 gap-1">
                    {mahalleler.map((m) => (
                      <Link
                        key={m.href}
                        href={m.href}
                        className={`flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg transition ${
                          m.highlight
                            ? "font-bold text-primary bg-primary/5 hover:bg-primary/10 border border-primary/20"
                            : "text-gray-700 hover:text-primary hover:bg-primary/5"
                        }`}
                        onClick={() => setDesktopDropdownOpen(false)}
                      >
                        <MapPin className={`w-3.5 h-3.5 shrink-0 ${m.highlight ? "text-primary" : "opacity-40"}`} />
                        {m.name}
                      </Link>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      Arnavutköy ve çevresinde <strong>21 mahallede</strong> aktif hizmet
                    </span>
                    <Link
                      href="/arnavutkoy-kiralik-kepce"
                      className="text-xs font-semibold text-primary hover:underline"
                      onClick={() => setDesktopDropdownOpen(false)}
                    >
                      Arnavutköy Kiralık Kepçe →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Standard nav links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-primary transition group"
              >
                {link.name}
                <span className="absolute left-1/2 -bottom-0.5 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-3/4 -translate-x-1/2" />
              </Link>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <Link
            href="/iletisim"
            className="hidden md:inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-sm hover:translate-y-[-2px] transition"
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
            <div className="flex flex-col gap-1">
              {/* Hizmet Bölgeleri - Mobile Accordion */}
              <div>
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
                  aria-expanded={mobileDropdownOpen}
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Hizmet Bölgeleri
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileDropdownOpen && (
                  <div className="ml-4 border-l-2 border-primary/20 pl-3 mt-1 mb-2">
                    {/* Mahalleler as a compact 2-column grid on mobile */}
                    <p className="px-1 mb-2 text-xs font-bold text-primary uppercase tracking-wider">
                      Mahalleler
                    </p>
                    <div className="grid grid-cols-2 gap-0.5">
                      {mahalleler.map((m) => (
                        <Link
                          key={m.href}
                          href={m.href}
                          className={`flex items-center gap-1.5 px-2 py-2 text-sm rounded-lg transition ${
                            m.highlight
                              ? "font-bold text-primary bg-primary/5"
                              : "text-gray-600 hover:text-primary hover:bg-primary/5"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <MapPin className={`w-3 h-3 shrink-0 ${m.highlight ? "text-primary" : "opacity-40"}`} />
                          {m.name}
                        </Link>
                      ))}
                    </div>

                    <div className="border-t border-gray-100 pt-2 mt-2">
                      <Link
                        href="/hizmetler"
                        className="flex items-center gap-2 px-2 py-2 text-sm text-gray-500 rounded-lg hover:text-primary hover:bg-primary/5 transition font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Wrench className="w-3.5 h-3.5 opacity-40" />
                        Tüm Hizmetler
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Standard mobile links */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:text-primary transition"
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
