import { PublicNavbar } from "@/components/public/navbar"
import { PublicFooter } from "@/components/public/footer"
import { HeroSection } from "@/components/public/hero-section"
import { TrustedUniversities } from "@/components/public/trusted-universities"
import { ProcessTimeline } from "@/components/public/process-timeline"
import { VisaSuccessMetrics } from "@/components/public/visa-success-metrics"
import { ServicesOverview } from "@/components/public/services-overview"
import { TrustSection } from "@/components/public/trust-section"
import { TestimonialsCarousel } from "@/components/public/testimonials-carousel"
import { FeaturedBlogPosts } from "@/components/public/featured-blog-posts"
import { FaqAccordion } from "@/components/public/faq-accordion"
import { AppointmentCta } from "@/components/public/appointment-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      <PublicNavbar />

      <HeroSection />

      <TrustedUniversities />

      <ProcessTimeline />

      <VisaSuccessMetrics />

      <ServicesOverview />

      <TrustSection />

      <TestimonialsCarousel />

      <FeaturedBlogPosts />

      <FaqAccordion />

      <AppointmentCta />

      <PublicFooter />
    </main>
  )
}
