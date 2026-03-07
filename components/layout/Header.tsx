"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, MapPin, Wrench } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "İletişim", href: "/iletisim" },
];

/// Helper to get correct path for a service slug
const getServicePath = (slug: string) => {
  const neighborhoodSlugs = [
    "arnavutkoy-kiralik-kepce",
    "yunus-emre-kiralik-kepce",
    "yunus-emre-kazi-isleri",
    "yunus-emre-temel-kazisi",
    "yunus-emre-yikim",
    "hadimkoy-kiralik-kepce",
    "tasoluk-kiralik-kepce",
    "bolluca-kiralik-kepce",
  ];
  return neighborhoodSlugs.includes(slug) ? `/${slug}` : `/hizmetler/${slug}`;
};

const hizmetBolgeleri = [
  {
    name: "Yunus Emre",
    services: [
      { name: "Yunus Emre Kiralık Kepçe", href: getServicePath("yunus-emre-kiralik-kepce") },
      { name: "Kazı İşleri", href: getServicePath("yunus-emre-kazi-isleri") },
      { name: "Temel Kazısı", href: getServicePath("yunus-emre-temel-kazisi") },
      { name: "Yıkım Hizmetleri", href: getServicePath("yunus-emre-yikim") },
    ],
  },
  {
    name: "Hadımköy",
    services: [
      { name: "Hadımköy Kiralık Kepçe", href: getServicePath("hadimkoy-kiralik-kepce") },
    ],
  },
  {
    name: "Taşoluk",
    services: [
      { name: "Taşoluk Kiralık Kepçe", href: getServicePath("tasoluk-kiralik-kepce") },
    ],
  },
  {
    name: "Bolluca",
    services: [
      { name: "Bolluca Kiralık Kepçe", href: getServicePath("bolluca-kiralik-kepce") },
    ],
  },
];

const tumHizmetler = [
  { name: "Arnavutköy Kiralık Kepçe", href: getServicePath("arnavutkoy-kiralik-kepce") },
  { name: "Tüm Hizmetler", href: "/hizmetler" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [activeMahalle, setActiveMahalle] = useState<string | null>(hizmetBolgeleri[0]?.name ?? null);
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

              {/* Desktop Mega Dropdown */}
              {desktopDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 w-[640px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                  <div className="flex">
                    {/* Left: Mahalleler */}
                    <div className="w-[200px] bg-gray-50 border-r border-gray-100 py-4">
                      <p className="px-4 mb-3 text-xs font-bold tracking-wider text-primary uppercase">
                        Mahalleler
                      </p>
                      {hizmetBolgeleri.map((bolge) => (
                        <button
                          key={bolge.name}
                          onMouseEnter={() => setActiveMahalle(bolge.name)}
                          onClick={() => setActiveMahalle(bolge.name)}
                          className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition text-left ${activeMahalle === bolge.name
                            ? "text-primary bg-primary/5"
                            : "text-gray-700 hover:text-primary hover:bg-gray-100"
                            }`}
                        >
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          {bolge.name}
                          <ChevronDown className="w-3 h-3 -rotate-90 ml-auto shrink-0 opacity-50" />
                        </button>
                      ))}
                    </div>

                    {/* Center: Mahalle hizmetleri */}
                    <div className="flex-1 py-4">
                      {hizmetBolgeleri
                        .filter((b) => b.name === activeMahalle)
                        .map((bolge) => (
                          <div key={bolge.name}>
                            <p className="px-5 mb-3 text-xs font-bold tracking-wider text-primary uppercase">
                              {bolge.name} Hizmetleri
                            </p>
                            <div className="space-y-0.5">
                              {bolge.services.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  className="flex items-center gap-2 px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 transition"
                                  onClick={() => setDesktopDropdownOpen(false)}
                                >
                                  <Wrench className="w-3.5 h-3.5 shrink-0 opacity-50" />
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}

                      {/* Tüm hizmetler divider */}
                      <div className="mx-5 my-3 border-t border-gray-100" />
                      <p className="px-5 mb-2 text-xs font-bold tracking-wider text-gray-400 uppercase">
                        Tüm Hizmetler
                      </p>
                      <div className="grid grid-cols-2 gap-0.5">
                        {tumHizmetler.map((h) => (
                          <Link
                            key={h.href}
                            href={h.href}
                            className="flex items-center gap-2 px-5 py-2 text-sm text-gray-500 hover:text-primary hover:bg-primary/5 transition"
                            onClick={() => setDesktopDropdownOpen(false)}
                          >
                            {h.name}
                          </Link>
                        ))}
                      </div>
                    </div>
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
                  <div className="ml-4 border-l-2 border-primary/20 pl-4 mt-1 mb-2 space-y-3">
                    {hizmetBolgeleri.map((bolge) => (
                      <div key={bolge.name}>
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">
                          {bolge.name}
                        </p>
                        <div className="space-y-0.5">
                          {bolge.services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 rounded-lg hover:text-primary hover:bg-primary/5 transition"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <Wrench className="w-3.5 h-3.5 opacity-40" />
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className="border-t border-gray-100 pt-2">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Tüm Hizmetler
                      </p>
                      {tumHizmetler.map((h) => (
                        <Link
                          key={h.href}
                          href={h.href}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 rounded-lg hover:text-primary hover:bg-primary/5 transition"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {h.name}
                        </Link>
                      ))}
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
