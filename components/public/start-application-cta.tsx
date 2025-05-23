import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function StartApplicationCta() {
  return (
    <section className="py-16 bg-[#1C2235] text-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight">Ready to Start Your U.S. Education Journey?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Take the first step toward your academic dreams with ZHAcademie's expert guidance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-[#1C2235] hover:bg-gray-100">
              <Link href="/contact">
                Start Your Application <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/services">Learn More About Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
