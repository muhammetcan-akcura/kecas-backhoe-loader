"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/components/schemas/FAQSchema";

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-card">
      <div className="container-main">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-10 text-3xl md:text-4xl">Sık Sorulan Sorular</h2>
          
          <div className="space-y-4">
            {items.map((item, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-card/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-foreground text-base">
                    {item.question}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-primary shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 pt-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Türkçe varsayılan SSS
export const defaultFAQItems: FAQItem[] = [
  {
    question: "Arnavutköy'de hizmet veriyor musunuz?",
    answer: "Evet, Arnavutköy merkez olmak üzere tüm mahallelere hizmet veriyoruz. Cennet, Halkalı, Atakent, Sefaköy ve yakın bölgelere yerinde servis sunuyoruz.",
  },
  {
    question: "Ücretsiz keşif yapıyor musunuz?",
    answer: "Evet, tüm hizmetlerimiz için yerinde ücretsiz keşif yapıyoruz. Keşif sonrası size detaylı ve şeffaf fiyat teklifi sunuyoruz.",
  },
  {
    question: "Kepçeçileriniz belgeli mi?",
    answer: "Tüm ustalarımız mesleki yeterlilik belgesine sahiptir ve düzenli olarak güvenlik eğitimi almaktadır. İşlerimiz sigortalıdır.",
  },
  {
    question: "Çalışma saatleriniz nedir?",
    answer: "Pazartesi-Cumartesi 09:00-19:00 arası hizmet veriyoruz. Pazar günleri kapalıyız. Acil durumlar için iletişime geçebilirsiniz.",
  },
  {
    question: "Ödeme seçenekleriniz nelerdir?",
    answer: "Nakit, banka kartı, kredi kartı ve havale/EFT ile ödeme kabul ediyoruz. Büyük işlerde esnek ödeme imkanı sunuyoruz.",
  },
  {
    question: "İş garantisi veriyor musunuz?",
    answer: "Evet, tüm işlerimiz için garanti veriyoruz. İşçilik garantisi ve kullanılan malzemelerin garantileri geçerlidir.",
  },
];

