import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function AppointmentCta() {
  return (
    <section className="py-16 bg-[#1C2235] text-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight">Ready to Begin Your U.S. Education Journey?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Schedule a free consultation with our expert advisors to discuss your academic goals and how we can help you
            achieve them.
          </p>
          <Button asChild className="mt-8 bg-white text-[#1C2235] hover:bg-gray-100">
            <Link href="/contact">
              <Calendar className="mr-2 h-5 w-5" /> Book Your Free Consultation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
