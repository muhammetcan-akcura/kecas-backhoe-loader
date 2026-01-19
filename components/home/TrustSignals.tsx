import { CheckCircle, Award, Users, Clock } from "lucide-react";

const stats = [
  { value: "22", label: "Yıl Tecrübe", icon: Award },
  { value: "JCB 3CX", label: "Profesyonel Ekipman", icon: CheckCircle },
  { value: "7/24", label: "Acil Hizmet", icon: Clock },
  { value: "100+", label: "Mutlu Müşteri", icon: Users },
];

const trustPoints = [
  "Yerinde ücretsiz keşif ve net fiyat teklifi",
  "Tecrübeli ve sertifikalı operatör garantisi",
  "Arnavutköy genelinde hızlı operatörlü hizmet",
  "Bakımlı JCB 3CX ekipman ile güvenli çalışma",
];

export function TrustSignals() {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-main">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-white mb-4">
            Arnavutköy'de Neden KEÇAŞ KEPÇE?
          </h2>
          <p className="text-gray-300 text-lg">
            22 yıldır Arnavutköy ve çevresinde sunduğumuz kepçe kiralama hizmetlerinde,
            <strong className="text-white"> şeffaf fiyatlandırma</strong>, tecrübeli operatör ve
            <strong className="text-white"> ücretsiz keşif</strong> anlayışıyla çalışıyoruz.
          </p>
        </div>

        {/* Stats grid - Sarı vurgular */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-white/5 border-2 border-white/10 rounded-lg hover:border-primary transition-colors"
              >
                <Icon size={32} className="text-primary mx-auto mb-3" strokeWidth={2.5} />
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300 font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust points - 2 sütun */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Güvenle Çalışın
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg">
                <CheckCircle className="text-primary shrink-0 mt-1" size={24} strokeWidth={2.5} />
                <span className="text-white text-base">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="tel:+905394778112"
            className="btn-primary text-lg px-10 py-4"
          >
            Hemen Fiyat Teklifi Alın
          </a>
        </div>
      </div>
    </section>
  );
}
