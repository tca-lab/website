"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TcaLogo } from "@/components/tca-logo"
import { useLanguage, type Language } from "@/lib/language-context"

const langLabels: Record<Language, string> = {
  tr: "TR",
  en: "EN",
  ru: "RU",
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: "home", labelKey: "nav.home" },
    { id: "operations", labelKey: "nav.operations" },
    { id: "about", labelKey: "nav.about" },
    { id: "contact", labelKey: "nav.contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`flex items-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo - slides from left to center */}
          <div
            className="flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: scrolled
                ? "translateX(calc(50vw - 50% - 24px - 100px))"
                : "translateX(0)",
            }}
          >
            <button onClick={() => scrollToSection("home")}>
              <TcaLogo
                className={`text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  scrolled ? "w-32 h-9" : "w-52 h-14"
                }`}
              />
            </button>
          </div>

          {/* Nav links + language + contact button - slides from right to center */}
          <div className="hidden md:flex items-center gap-1 ml-auto">
            {/* Navigation items - fade out on scroll */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-[#888888] hover:text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] text-sm font-medium rounded-full hover:bg-white/[0.06]"
                style={{
                  opacity: scrolled ? 0 : 1,
                  transform: scrolled ? "translateX(40px) scale(0.95)" : "translateX(0) scale(1)",
                  pointerEvents: scrolled ? "none" : "auto",
                  transitionDelay: scrolled ? "0ms" : "100ms",
                }}
              >
                {t(item.labelKey)}
              </button>
            ))}

            {/* Language switcher - fade out on scroll */}
            <div
              ref={langRef}
              className="relative ml-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                opacity: scrolled ? 0 : 1,
                transform: scrolled ? "translateX(40px) scale(0.95)" : "translateX(0) scale(1)",
                pointerEvents: scrolled ? "none" : "auto",
                transitionDelay: scrolled ? "0ms" : "150ms",
              }}
            >
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-[#888888] hover:text-white transition-colors duration-300 text-sm font-medium rounded-full hover:bg-white/[0.06]"
              >
                <Globe className="h-3.5 w-3.5" />
                {langLabels[language]}
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 py-1 bg-[#111111] border border-white/[0.08] rounded-xl overflow-hidden min-w-[80px]">
                  {(Object.keys(langLabels) as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang)
                        setLangOpen(false)
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                        language === lang
                          ? "text-white bg-white/[0.06]"
                          : "text-[#888888] hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      {langLabels[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact button - slides from right to center */}
            <div
              className="transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: scrolled
                  ? "translateX(calc(-50vw + 50% + 24px + 100px))"
                  : "translateX(0)",
              }}
            >
              <button
                onClick={() => scrollToSection("contact")}
                className={`ml-3 px-5 py-2 bg-white text-[#050505] text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-300 ${
                  scrolled ? "ml-6" : ""
                }`}
              >
                {t("nav.contactBtn")}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/[0.06] rounded-full ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/[0.06]">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#888888] hover:text-white hover:bg-white/[0.06] transition-colors text-sm font-medium text-left px-4 py-3 rounded-xl"
                >
                  {t(item.labelKey)}
                </button>
              ))}
              <div className="flex items-center gap-2 px-4 py-3">
                <Globe className="h-3.5 w-3.5 text-[#555555]" />
                {(Object.keys(langLabels) as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      language === lang
                        ? "bg-white text-[#050505]"
                        : "text-[#888888] hover:text-white border border-white/[0.08]"
                    }`}
                  >
                    {langLabels[lang]}
                  </button>
                ))}
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-2 mx-4 px-5 py-2.5 bg-white text-[#050505] text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-300"
              >
                {t("nav.contactBtn")}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
