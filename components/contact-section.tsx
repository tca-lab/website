"use client"

import { useEffect, useRef } from "react"
import { Mail, Instagram, Phone, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
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

    const elements = sectionRef.current?.querySelectorAll(".fade-up, .scale-in")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const contacts = [
    {
      icon: Mail,
      label: "E-posta",
      value: "pazarlama@tcagrup.com",
      href: "mailto:pazarlama@tcagrup.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+90 5XX XXX XX XX",
      href: "https://wa.me/905XXXXXXXXX",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@tcagrup",
      href: "https://instagram.com/tcagrup",
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 px-6 lg:px-8 bg-[#050505]"
    >
      <div className="max-w-3xl mx-auto">
        <div className="fade-up flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03]">
            <span className="text-xs font-medium text-[#777777] tracking-wider uppercase">
              {t("contact.chip")}
            </span>
          </div>
        </div>

        <h2
          className="fade-up text-3xl lg:text-5xl font-bold text-white tracking-tight text-center mb-4 text-balance"
          style={{ transitionDelay: "100ms" }}
        >
          {t("contact.title")}
        </h2>

        <p
          className="fade-up text-[#777777] text-center text-base lg:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ transitionDelay: "200ms" }}
        >
          {t("contact.subtitle")}
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="scale-in group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 text-center"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <ArrowUpRight className="absolute top-4 right-4 h-4 w-4 text-[#444444] group-hover:text-white transition-colors duration-300" />
              <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mx-auto mb-4 group-hover:bg-white/[0.1] transition-colors duration-500">
                <contact.icon className="h-5 w-5 text-white stroke-[1.5]" />
              </div>
              <div className="text-xs font-medium text-[#555555] tracking-wider uppercase mb-2">
                {contact.label}
              </div>
              <div className="text-sm font-medium text-white group-hover:text-white/90 transition-colors">
                {contact.value}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
