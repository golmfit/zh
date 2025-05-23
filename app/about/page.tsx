import { PublicNavbar } from "@/components/public/navbar"
import { PublicFooter } from "@/components/public/footer"
import { PageHeader } from "@/components/public/page-header"
import { MissionStatement } from "@/components/public/mission-statement"
import { TimelineGrowth } from "@/components/public/timeline-growth"
import { TeamCards } from "@/components/public/team-cards"
import { GlobalReachMap } from "@/components/public/global-reach-map"
import { FeaturedMedia } from "@/components/public/featured-media"
import { AppointmentCta } from "@/components/public/appointment-cta"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      <PublicNavbar />

      <PageHeader
        title="About ZHAcademie"
        description="Learn about our mission to help international students achieve their academic dreams in the United States."
      />

      <MissionStatement />

      <TimelineGrowth />

      <TeamCards />

      <GlobalReachMap />

      <FeaturedMedia />

      <AppointmentCta />

      <PublicFooter />
    </main>
  )
}
