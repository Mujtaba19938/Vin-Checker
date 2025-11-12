"use client"
import HeroSection from "@/components/hero-section"
import ReportSection from "@/components/report-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import SupportSection from "@/components/support-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ReportSection />
      <FeaturesSection />
      <TestimonialsSection />
      <SupportSection />
      <Footer />
    </main>
  )
}
