import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";
import { businessConfig } from "@/lib/config";
import { getAllServices } from "@/lib/services";

export function Footer() {
  const services = getAllServices();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container-main py-16">
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {businessConfig.name}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {businessConfig.description}
            </p>
            <p className="text-sm text-slate-400">
              2014 yılından beri Küçükçekmece ve çevresinde<br />
              <span className="text-slate-300 font-medium">
                yerinde elektrik hizmetleri
              </span>
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Hizmetler
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="text-sm text-slate-400 hover:text-white transition"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Kurumsal
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Ana Sayfa", href: "/" },
                { name: "Hakkımızda", href: "/hakkimizda" },
                { name: "Hizmetler", href: "/hizmetler" },
                { name: "İletişim", href: "/iletisim" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              İletişim
            </h4>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone size={18} className="text-blue-400 mt-1" />
                <a
                  href={businessConfig.phoneFormatted}
                  className="text-sm text-slate-400 hover:text-white transition"
                >
                  {businessConfig.phone}
                </a>
              </li>

              <li className="flex gap-3">
                <Mail size={18} className="text-blue-400 mt-1" />
                <a
                  href={`mailto:${businessConfig.email}`}
                  className="text-sm text-slate-400 hover:text-white transition break-all"
                >
                  {businessConfig.email}
                </a>
              </li>

              <li className="flex gap-3">
                <MapPin size={18} className="text-blue-400 mt-1" />
                <p className="text-sm text-slate-400">
                  Hizmet Bölgesi:
                  <br />
                  {businessConfig.serviceArea.full}
                </p>
              </li>

              <li className="flex gap-3">
                <Clock size={18} className="text-blue-400 mt-1" />
                <p className="text-sm text-slate-400">
                  {businessConfig.workingHours.weekdays}
                  <br />
                  Pazar: {businessConfig.workingHours.sunday}
                </p>
              </li>

              <li className="flex gap-3 pt-2">
                <ExternalLink size={18} className="text-blue-400 mt-1" />
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="nofollow noopener"
                  className="text-sm text-slate-400 hover:text-white transition"
                >
                  Google Haritalar’da Görüntüle
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white">
          <p className="text-white">
            © {currentYear} {businessConfig.name}. Tüm hakları saklıdır.
          </p>
          <p className="text-white">
            Yerinde servis • Sabit mağaza bulunmamaktadır
          </p>
        </div>
      </div>
    </footer>
  );
}
