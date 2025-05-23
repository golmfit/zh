import { PublicNavbar } from "@/components/public/navbar"
import { PublicFooter } from "@/components/public/footer"
import { PageHeader } from "@/components/public/page-header"
import { ServicesIntro } from "@/components/public/services-intro"
import { ServiceCards } from "@/components/public/service-cards"
import { PackageTiers } from "@/components/public/package-tiers"
import { AdmissionTimeline } from "@/components/public/admission-timeline"
import { TestimonialsCarousel } from "@/components/public/testimonials-carousel"
import { ComparisonTable } from "@/components/public/comparison-table"
import { StartApplicationCta } from "@/components/public/start-application-cta"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      <PublicNavbar />

      <PageHeader
        title="Our Services"
        description="Comprehensive support for international students applying to U.S. universities."
      />

      <ServicesIntro />

      <ServiceCards />

      <PackageTiers />

      <AdmissionTimeline />

      <TestimonialsCarousel />

      <ComparisonTable />

      <StartApplicationCta />

      <PublicFooter />
    </main>
  )
}
