"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/lib/language-context"

export function AboutUs() {
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

    const elements = sectionRef.current?.querySelectorAll(".fade-up, .fade-left, .fade-right")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: "50+", labelKey: "about.stat.partners" },
    { value: "15+", labelKey: "about.stat.countries" },
    { value: "1000+", labelKey: "about.stat.products" },
    { value: "7/24", labelKey: "about.stat.support" },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 lg:py-36 px-6 lg:px-8 overflow-hidden bg-[#050505]"
    >
      {/* Subtle top gradient divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.06),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="fade-up flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03]">
            <span className="text-xs font-medium text-[#777777] tracking-wider uppercase">
              {t("about.chip")}
            </span>
          </div>
        </div>

        <h2
          className="fade-up text-3xl lg:text-5xl font-bold text-white tracking-tight text-center mb-6 text-balance"
          style={{ transitionDelay: "100ms" }}
        >
          {t("about.title")}
        </h2>

        <p
          className="fade-up text-[#777777] text-center text-base lg:text-lg max-w-2xl mx-auto mb-16 leading-relaxed"
          style={{ transitionDelay: "200ms" }}
        >
          {t("about.subtitle")}
        </p>

        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          <div className="fade-left" style={{ transitionDelay: "300ms" }}>
            <div className="p-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] h-full">
              <h3 className="text-xl font-semibold text-white mb-4">{t("about.mission.title")}</h3>
              <p className="text-[#888888] leading-relaxed text-sm">
                {t("about.mission.desc")}
              </p>
            </div>
          </div>

          <div className="fade-right" style={{ transitionDelay: "400ms" }}>
            <div className="p-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] h-full">
              <h3 className="text-xl font-semibold text-white mb-4">{t("about.vision.title")}</h3>
              <p className="text-[#888888] leading-relaxed text-sm">
                {t("about.vision.desc")}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="fade-up p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center"
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-[#666666] tracking-wider uppercase">
                {t(stat.labelKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
