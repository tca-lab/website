"use client"

import { useState } from "react"

import type React from "react"
import { Mail, Instagram, Phone } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("[v0] Form submitted:", formData)
    setSubmitStatus("success")
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })

    setTimeout(() => setSubmitStatus("idle"), 3000)
  }

  return (
    <section id="contact" className="py-16 lg:py-20 px-6 lg:px-8 bg-[#F5F5F5]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-light text-[#333333] tracking-tight text-center mb-12 text-balance">
          İletişime Geçin
        </h2>

        <div className="bg-white p-8 border border-[#E0E0E0] space-y-6">
          <a
            href="mailto:pazarlama@tcagrup.com"
            className="flex items-center gap-4 text-[#333333] hover:text-[#666666] transition-colors group"
          >
            <div className="w-12 h-12 bg-[#F5F5F5] flex items-center justify-center group-hover:bg-[#E0E0E0] transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-light text-[#999999] tracking-wide mb-1">E-posta</div>
              <div className="text-sm font-light tracking-wide">pazarlama@tcagrup.com</div>
            </div>
          </a>

          <a
            href="https://wa.me/905467665142"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-[#333333] hover:text-[#666666] transition-colors group"
          >
            <div className="w-12 h-12 bg-[#F5F5F5] flex items-center justify-center group-hover:bg-[#E0E0E0] transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-light text-[#999999] tracking-wide mb-1">WhatsApp</div>
              <div className="text-sm font-light tracking-wide">+90 5XX XXX XX XX</div>
            </div>
          </a>

          <a
            href="https://instagram.com/tcagrup"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-[#333333] hover:text-[#666666] transition-colors group"
          >
            <div className="w-12 h-12 bg-[#F5F5F5] flex items-center justify-center group-hover:bg-[#E0E0E0] transition-colors">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-light text-[#999999] tracking-wide mb-1">Instagram</div>
              <div className="text-sm font-light tracking-wide">@tcagrup</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
