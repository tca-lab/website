"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#050505] border-t border-white/[0.06] py-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#444444] text-xs font-medium">
            {"© "}{new Date().getFullYear()}{" "}{t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:pazarlama@tcagrup.com"
              className="text-[#444444] hover:text-white transition-colors duration-300 text-xs font-medium"
            >
              E-posta
            </a>
            <a
              href="https://instagram.com/tcagrup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#444444] hover:text-white transition-colors duration-300 text-xs font-medium"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/905XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#444444] hover:text-white transition-colors duration-300 text-xs font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
