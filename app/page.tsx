import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CoreOperations } from "@/components/core-operations"
import { AboutUs } from "@/components/about-us"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-36">
        <HeroSection />
        <CoreOperations />
        <AboutUs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
