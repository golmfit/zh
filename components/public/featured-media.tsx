import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function FeaturedMedia() {
  // Mock data for media features
  const mediaFeatures = [
    {
      id: 1,
      source: "Education Weekly",
      title: "ZHAcademie Achieves 98% Visa Success Rate for International Students",
      date: "March 2025",
      link: "#",
    },
    {
      id: 2,
      source: "International Student Magazine",
      title: "How ZHAcademie is Transforming the U.S. Admissions Process",
      date: "February 2025",
      link: "#",
    },
    {
      id: 3,
      source: "Global Education Today",
      title: "Interview: Zakaria Hassan on Supporting International Student Dreams",
      date: "January 2025",
      link: "#",
    },
    {
      id: 4,
      source: "University World News",
      title: "ZHAcademie Partners with Top U.S. Universities to Streamline Admissions",
      date: "December 2024",
      link: "#",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#1C2235]">Featured In</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ZHAcademie has been recognized in leading education publications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mediaFeatures.map((feature) => (
            <Card key={feature.id} className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    {feature.source} • {feature.date}
                  </div>
                  <h3 className="text-lg font-medium">{feature.title}</h3>
                  <a
                    href={feature.link}
                    className="inline-flex items-center text-[#1C2235] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read article <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
