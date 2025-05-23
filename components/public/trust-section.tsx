import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function TrustSection() {
  // Mock data for trust points
  const trustPoints = [
    "Experienced advisors with deep knowledge of U.S. admissions",
    "Personalized guidance tailored to your academic profile",
    "Proven track record with 98% visa approval rate",
    "Comprehensive support from application to arrival",
    "Network of partner universities across the United States",
    "Transparent process with regular progress updates",
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#1C2235]">Why Students Trust ZHAcademie</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              For over a decade, we've been the trusted partner for international students pursuing their academic
              dreams in the United States.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#1C2235] mt-0.5 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?key=lfmop"
                alt="International students working with advisors"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-[250px]">
              <div className="text-4xl font-bold text-[#1C2235]">10+</div>
              <p className="text-muted-foreground">Years helping international students achieve their dreams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
