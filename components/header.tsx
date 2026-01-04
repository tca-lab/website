"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-[#E0E0E0] z-50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-36">
          <div className="flex items-center">
            <Image
              src="/tca-grup-logo.png"
              alt="TCA Grup Dış Ticaret Limited Şirketi"
              width={550}
              height={180}
              className="h-32 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[#333333] hover:text-[#666666] transition-colors text-sm font-light tracking-wide"
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => scrollToSection("operations")}
              className="text-[#333333] hover:text-[#666666] transition-colors text-sm font-light tracking-wide"
            >
              Faaliyetler
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#333333] hover:text-[#666666] transition-colors text-sm font-light tracking-wide"
            >
              Hakkımızda
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#333333] hover:text-[#666666] transition-colors text-sm font-light tracking-wide"
            >
              İletişim
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6 text-[#333333]" /> : <Menu className="h-6 w-6 text-[#333333]" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-[#E0E0E0]">
            <div className="flex flex-col gap-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-[#333333] hover:text-[#666666] transition-colors text-sm font-light tracking-wide text-left"
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => scrollToSection("operations")}
                className="text-[#333333] hover:text-[#666666] transition-colors text-sm font-light tracking-wide text-left"
              >
                Faaliyetler
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-[#333333] hover:text-[#666666] transition-colors text-sm font-light tracking-wide text-left"
              >
                Hakkımızda
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[#333333] hover:text-[#666666] transition-colors text-sm font-light tracking-wide text-left"
              >
                İletişim
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
