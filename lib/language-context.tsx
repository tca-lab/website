"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Language = "tr" | "en" | "ru"

type Translations = {
  [key: string]: {
    tr: string
    en: string
    ru: string
  }
}

export const translations: Translations = {
  // Header nav
  "nav.home": {
    tr: "Ana Sayfa",
    en: "Home",
    ru: "Главная",
  },
  "nav.operations": {
    tr: "Faaliyetler",
    en: "Operations",
    ru: "Деятельность",
  },
  "nav.about": {
    tr: "Hakkımızda",
    en: "About Us",
    ru: "О нас",
  },
  "nav.contact": {
    tr: "İletişim",
    en: "Contact",
    ru: "Контакты",
  },
  "nav.contactBtn": {
    tr: "İletişime Geçin",
    en: "Contact Us",
    ru: "Свяжитесь с нами",
  },

  // Hero
  "hero.chip": {
    tr: "Dış Ticaret ve Lojistik Çözümleri",
    en: "Foreign Trade & Logistics Solutions",
    ru: "Внешняя торговля и логистика",
  },
  "hero.title1": {
    tr: "Global Kaliteyi Yerel",
    en: "Bridging Global Quality",
    ru: "Соединяем глобальное",
  },
  "hero.title2": {
    tr: "Pazarlarla Buluşturuyoruz",
    en: "With Local Markets",
    ru: "качество с местными рынками",
  },
  "hero.description": {
    tr: "Seçkin ürünler için kesintisiz ithalat ve stratejik e-ticaret çözümleri sunuyoruz. Daha verimli operasyon, daha güçlü büyüme.",
    en: "We provide seamless import and strategic e-commerce solutions for premium products. More efficient operations, stronger growth.",
    ru: "Мы предоставляем бесперебойные решения по импорту и стратегической электронной коммерции для премиальных продуктов.",
  },
  "hero.cta1": {
    tr: "Faaliyetlerimizi Keşfet",
    en: "Explore Our Operations",
    ru: "Наша деятельность",
  },
  "hero.cta2": {
    tr: "İletişime Geçin",
    en: "Contact Us",
    ru: "Свяжитесь с нами",
  },

  // Operations
  "ops.chip": {
    tr: "Faaliyetler",
    en: "Operations",
    ru: "Деятельность",
  },
  "ops.title": {
    tr: "Temel Faaliyet Alanlarımız",
    en: "Our Core Operations",
    ru: "Основные направления деятельности",
  },
  "ops.subtitle": {
    tr: "Her adımda kalite ve güvenilirlik odaklı çözümler sunuyoruz.",
    en: "We deliver quality and reliability-focused solutions at every step.",
    ru: "Мы предоставляем решения, ориентированные на качество и надёжность.",
  },
  "ops.global.title": {
    tr: "Küresel Tedarik Yönetimi",
    en: "Global Sourcing",
    ru: "Глобальные закупки",
  },
  "ops.global.desc": {
    tr: "Uluslararası üreticilerden yüksek kalite standartlarıyla seçkin ürünlerin tedarik edilmesi.",
    en: "Sourcing premium products from international manufacturers with high quality standards.",
    ru: "Поставка премиальных товаров от международных производителей с высокими стандартами качества.",
  },
  "ops.supply.title": {
    tr: "Tedarik Zinciri Yönetimi",
    en: "Supply Chain Management",
    ru: "Управление цепочкой поставок",
  },
  "ops.supply.desc": {
    tr: "Uçtan uca görünürlük ve kontrol ile verimli lojistik ve depolama çözümleri sağlanması.",
    en: "Efficient logistics and warehousing solutions with end-to-end visibility and control.",
    ru: "Эффективные логистические и складские решения с полной прозрачностью и контролем.",
  },
  "ops.ecom.title": {
    tr: "E-Ticaret Entegrasyonu",
    en: "E-Commerce Integration",
    ru: "Интеграция электронной коммерции",
  },
  "ops.ecom.desc": {
    tr: "Veri odaklı içgörülerle Türkiye pazarına stratejik giriş ve dağıtım planlaması.",
    en: "Strategic market entry and distribution planning for the Turkish market with data-driven insights.",
    ru: "Стратегический выход на турецкий рынок и планирование дистрибуции на основе данных.",
  },
  "ops.quality.title": {
    tr: "Kalite Güvencesi",
    en: "Quality Assurance",
    ru: "Обеспечение качества",
  },
  "ops.quality.desc": {
    tr: "Her ürün grubu için uluslararası standartlarda kalite kontrol ve sertifikasyon süreçleri.",
    en: "Quality control and certification processes at international standards for every product group.",
    ru: "Процессы контроля качества и сертификации по международным стандартам для каждой группы продукции.",
  },
  "ops.logistics.title": {
    tr: "Lojistik Operasyonlar",
    en: "Logistics Operations",
    ru: "Логистические операции",
  },
  "ops.logistics.desc": {
    tr: "Hızlı ve güvenilir teslimat ağıyla üretimden son tüketiciye kesintisiz lojistik yönetimi.",
    en: "Seamless logistics management from production to end consumer with a fast and reliable delivery network.",
    ru: "Бесперебойное управление логистикой от производства до конечного потребителя.",
  },
  "ops.market.title": {
    tr: "Pazar Analizi",
    en: "Market Analysis",
    ru: "Анализ рынка",
  },
  "ops.market.desc": {
    tr: "Veri tabanlı pazar araştırması ve trend analizi ile stratejik karar destek sistemleri.",
    en: "Data-driven market research and trend analysis with strategic decision support systems.",
    ru: "Исследование рынка и анализ трендов на основе данных для стратегической поддержки решений.",
  },

  // About
  "about.chip": {
    tr: "Hakkımızda",
    en: "About Us",
    ru: "О нас",
  },
  "about.title": {
    tr: "Güvenilir İş Ortağınız",
    en: "Your Trusted Partner",
    ru: "Ваш надёжный партнёр",
  },
  "about.subtitle": {
    tr: "Uluslararası mükemmelliği yerel fırsatlarla buluşturmaya kararlıyız.",
    en: "We are committed to bridging international excellence with local opportunities.",
    ru: "Мы стремимся объединить международное качество с местными возможностями.",
  },
  "about.mission.title": {
    tr: "Misyonumuz",
    en: "Our Mission",
    ru: "Наша миссия",
  },
  "about.mission.desc": {
    tr: "Stratejik ortaklıklar ve verimli lojistik çözümleriyle küresel premium ürünler ile Türkiye pazarı arasında köprü kurmak. Kalite ve güvenilirlik odaklı yaklaşımımızla, en yüksek standartları karşılayan ürünleri özenle seçiyoruz.",
    en: "Building a bridge between global premium products and the Turkish market through strategic partnerships and efficient logistics solutions. With our quality and reliability-focused approach, we carefully select products that meet the highest standards.",
    ru: "Создание моста между глобальными премиальными продуктами и турецким рынком через стратегические партнёрства и эффективные логистические решения.",
  },
  "about.vision.title": {
    tr: "Vizyonumuz",
    en: "Our Vision",
    ru: "Наше видение",
  },
  "about.vision.desc": {
    tr: "Erişimlerini genişletmek isteyen işletmeler ve dünya standartlarında ürünlere erişim arayan tüketiciler için güvenilir iş ortağı olmak. Tüm tedarik zinciri boyunca sorunsuz, şeffaf operasyonlar sağlamak.",
    en: "To be the trusted partner for businesses seeking to expand their reach and consumers looking for world-class products. To ensure seamless, transparent operations throughout the entire supply chain.",
    ru: "Быть надёжным партнёром для бизнеса, стремящегося расширить охват, и потребителей, ищущих продукцию мирового класса.",
  },
  "about.stat.partners": {
    tr: "İş Ortağı",
    en: "Partners",
    ru: "Партнёры",
  },
  "about.stat.countries": {
    tr: "Ülke",
    en: "Countries",
    ru: "Страны",
  },
  "about.stat.products": {
    tr: "Ürün Çeşidi",
    en: "Products",
    ru: "Продукция",
  },
  "about.stat.support": {
    tr: "Destek",
    en: "Support",
    ru: "Поддержка",
  },

  // Contact
  "contact.chip": {
    tr: "İletişim",
    en: "Contact",
    ru: "Контакты",
  },
  "contact.title": {
    tr: "İletişime Geçin",
    en: "Get in Touch",
    ru: "Свяжитесь с нами",
  },
  "contact.subtitle": {
    tr: "Projeleriniz ve iş birlikleriniz için bize ulaşın.",
    en: "Reach out to us for your projects and collaborations.",
    ru: "Свяжитесь с нами для ваших проектов и сотрудничества.",
  },

  // Footer
  "footer.rights": {
    tr: "TCA Grup Dış Ticaret Limited Şirketi. Tüm hakları saklıdır.",
    en: "TCA Grup Foreign Trade Limited Company. All rights reserved.",
    ru: "TCA Grup Внешняя Торговля ООО. Все права защищены.",
  },

  // Scroll down
  "hero.scroll": {
    tr: "Aşağı kaydır",
    en: "Scroll down",
    ru: "Прокрутите вниз",
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr")

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
