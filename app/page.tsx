"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CoreOperations } from "@/components/core-operations"
import { AboutUs } from "@/components/about-us"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/lib/language-context"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#020617] relative">
        <Header />
        <main className="relative z-[2]">
          <HeroSection />
          <CoreOperations />
          <AboutUs />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
