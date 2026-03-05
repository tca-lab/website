"use client"

import { useEffect, useRef } from "react"
import { Globe2, Package, TrendingUp, ShieldCheck, Truck, BarChart3 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function CoreOperations() {
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
      { threshold: 0.05 }
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-up, .scale-in")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const operations = [
    { icon: Globe2, titleKey: "ops.global.title", descKey: "ops.global.desc" },
    { icon: Package, titleKey: "ops.supply.title", descKey: "ops.supply.desc" },
    { icon: TrendingUp, titleKey: "ops.ecom.title", descKey: "ops.ecom.desc" },
    { icon: ShieldCheck, titleKey: "ops.quality.title", descKey: "ops.quality.desc" },
    { icon: Truck, titleKey: "ops.logistics.title", descKey: "ops.logistics.desc" },
    { icon: BarChart3, titleKey: "ops.market.title", descKey: "ops.market.desc" },
  ]

  return (
    <section
      id="operations"
      ref={sectionRef}
      className="relative py-28 lg:py-36 px-6 lg:px-8 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="fade-up flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03]">
            <span className="text-xs font-medium text-[#777777] tracking-wider uppercase">
              {t("ops.chip")}
            </span>
          </div>
        </div>

        <h2
          className="fade-up text-3xl lg:text-5xl font-bold text-white tracking-tight text-center mb-4 text-balance"
          style={{ transitionDelay: "100ms" }}
        >
          {t("ops.title")}
        </h2>

        <p
          className="fade-up text-[#777777] text-center text-base lg:text-lg max-w-2xl mx-auto mb-20 leading-relaxed"
          style={{ transitionDelay: "200ms" }}
        >
          {t("ops.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {operations.map((operation, index) => (
            <div
              key={index}
              className="scale-in group relative p-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 cursor-default"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-white/[0.06] flex items-center justify-center mb-6 group-hover:bg-white/[0.1] transition-colors duration-500">
                <operation.icon className="h-6 w-6 text-white stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">
                {t(operation.titleKey)}
              </h3>
              <p className="text-[#777777] leading-relaxed text-sm">
                {t(operation.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
