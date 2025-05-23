import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { School, FileText, Compass, StampIcon, Users, Home, BookOpen, Calendar } from "lucide-react"

export function ServiceCards() {
  // Mock data for services
  const services = [
    {
      id: 1,
      title: "University Admissions",
      description:
        "Strategic guidance for selecting and applying to U.S. universities that match your academic profile and career goals.",
      icon: School,
      features: [
        "Personalized university selection",
        "Application strategy development",
        "Essay and personal statement review",
        "Interview preparation",
        "Application submission assistance",
      ],
    },
    {
      id: 2,
      title: "Document Preparation",
      description:
        "Expert assistance with crafting compelling personal statements, resumes, and other application materials.",
      icon: FileText,
      features: [
        "Personal statement development",
        "Resume/CV optimization",
        "Letter of recommendation guidance",
        "Academic document preparation",
        "Portfolio review (if applicable)",
      ],
    },
    {
      id: 3,
      title: "Visa Application Support",
      description:
        "Comprehensive support throughout the student visa process, including documentation and interview preparation.",
      icon: StampIcon,
      features: [
        "F-1 visa application guidance",
        "Document preparation and review",
        "SEVIS fee and DS-160 assistance",
        "Mock visa interviews",
        "Visa denial troubleshooting",
      ],
    },
    {
      id: 4,
      title: "Test Preparation",
      description: "Resources and guidance for standardized tests required for U.S. university admissions.",
      icon: BookOpen,
      features: [
        "TOEFL/IELTS preparation",
        "SAT/ACT guidance (undergraduate)",
        "GRE/GMAT strategies (graduate)",
        "Practice test resources",
        "Score improvement plans",
      ],
    },
    {
      id: 5,
      title: "Pre-Departure Orientation",
      description:
        "Preparation for U.S. academic culture, campus life, and practical aspects of living in the United States.",
      icon: Compass,
      features: [
        "Cultural adaptation guidance",
        "Academic expectations overview",
        "Banking and finances setup",
        "Health insurance information",
        "Travel and arrival planning",
      ],
    },
    {
      id: 6,
      title: "Housing Assistance",
      description: "Help with finding suitable on-campus or off-campus housing options near your university.",
      icon: Home,
      features: [
        "On-campus housing application help",
        "Off-campus housing resources",
        "Roommate matching assistance",
        "Lease review guidance",
        "Temporary accommodation options",
      ],
    },
    {
      id: 7,
      title: "Student Life Support",
      description: "Ongoing support to help you navigate academic and social life at your U.S. university.",
      icon: Users,
      features: [
        "Academic advising connections",
        "Student organization information",
        "Cultural adjustment support",
        "Career services guidance",
        "Community building resources",
      ],
    },
    {
      id: 8,
      title: "OPT/CPT Guidance",
      description:
        "Information and support for Optional Practical Training and Curricular Practical Training opportunities.",
      icon: Calendar,
      features: [
        "OPT/CPT eligibility assessment",
        "Application timeline planning",
        "Document preparation assistance",
        "Employment authorization guidance",
        "Status maintenance information",
      ],
    },
  ]

  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="container px-4 md:px-6">
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
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
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
                        className="h-5 w-5 mr-2 text-[#1C2235] shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
