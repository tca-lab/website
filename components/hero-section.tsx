"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToOperations = () => {
    const el = document.getElementById("operations")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle radial glow instead of image */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.04)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-medium text-[#999999] tracking-wide">
            {t("hero.chip")}
          </span>
        </div>

        <h1
          className="fade-up text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 text-balance"
          style={{ transitionDelay: "100ms" }}
        >
          {t("hero.title1")}
          <br />
          <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#ffffff,#666666)]">
            {t("hero.title2")}
          </span>
        </h1>

        <p
          className="fade-up text-base md:text-lg text-[#888888] font-normal max-w-2xl mx-auto leading-relaxed"
          style={{ transitionDelay: "200ms" }}
        >
          {t("hero.description")}
        </p>
      </div>

      <button
        onClick={scrollToOperations}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#555555] hover:text-white transition-colors duration-300"
        aria-label={t("hero.scroll")}
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  )
}
