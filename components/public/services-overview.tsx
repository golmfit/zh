import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { School, FileText, Compass, StampIcon, Users, Home } from "lucide-react"
import Link from "next/link"

export function ServicesOverview() {
  // Mock data for services
  const services = [
    {
      id: 1,
      title: "University Admissions",
      description:
        "Strategic guidance for selecting and applying to U.S. universities that match your academic profile and career goals.",
      icon: School,
    },
    {
      id: 2,
      title: "Document Preparation",
      description:
        "Expert assistance with crafting compelling personal statements, resumes, and other application materials.",
      icon: FileText,
    },
    {
      id: 3,
      title: "University Selection",
      description:
        "Personalized recommendations for universities based on your academic background, interests, and career aspirations.",
      icon: Compass,
    },
    {
      id: 4,
      title: "Visa Application",
      description:
        "Comprehensive support throughout the student visa process, including documentation and interview preparation.",
      icon: StampIcon,
    },
    {
      id: 5,
      title: "Pre-Departure Orientation",
      description:
        "Preparation for U.S. academic culture, campus life, and practical aspects of living in the United States.",
      icon: Users,
    },
    {
      id: 6,
      title: "Housing Assistance",
      description: "Help with finding suitable on-campus or off-campus housing options near your university.",
      icon: Home,
    },
  ]

  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#1C2235]">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive support for international students at every step of the journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="border-none shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#1C2235]/10 mb-4">
                  <service.icon className="h-6 w-6 text-[#1C2235]" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="text-[#1C2235] hover:text-[#2A3147] p-0" asChild>
                  <Link href="/services">Learn more</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-[#1C2235] hover:bg-[#2A3147]">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
