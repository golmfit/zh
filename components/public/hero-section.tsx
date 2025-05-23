import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 bg-[#F5F7FA]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-[#3F4861]/10 px-3 py-1 text-sm text-[#1C2235]">
              98% Visa Approval Rate
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#1C2235]">
              Your Path to U.S. Universities Starts Here
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Expert guidance for international students seeking admission to top U.S. universities and navigating the
              visa process.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-[#1C2235] hover:bg-[#2A3147] text-white">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:ml-auto">
            <div className="relative">
              <img
                alt="International students celebrating graduation"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height={550}
                src="/placeholder.svg?key=xewib"
                width={550}
              />
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-green-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">200+ Students</div>
                    <div className="text-xs text-gray-500">Successfully Admitted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
