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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-12">
          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {businessConfig.name}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {businessConfig.description}
            </p>
            <p className="text-sm text-slate-400">
              2004 yılından beri Arnavutköy ve çevresinde<br />
              <span className="text-slate-300 font-medium">
                operatörlü kepçe kiralama hizmetleri
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

          {/* MAP EXTENSION */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-white mb-4">
              Konum
            </h4>
            <div className="rounded-lg overflow-hidden border border-slate-700 h-48 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48031.66308267822!2d28.694215750804837!3d41.20043265881691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4376f201f7f4c7e7%3A0x63a51a405f34860f!2zS2XDp2HFnyBLZXDDp2U!5e0!3m2!1str!2str!4v1769334977259!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Keçaş Kepçe Konum"
                className="grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
            <a
              href={businessConfig.googleMapsUrl}
              target="_blank"
              rel="nofollow noopener"
              className="text-xs text-slate-400 mt-2 hover:text-white transition flex items-center gap-1"
            >
              <ExternalLink size={12} />
              Büyük haritada görüntüle
            </a>
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
