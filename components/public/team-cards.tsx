import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Facebook, Linkedin, Twitter } from "lucide-react"

export function TeamCards() {
  // Mock data for team members
  const teamMembers = [
    {
      id: 1,
      name: "Zakaria Hassan",
      role: "Founder & CEO",
      bio: "Former international student with 15+ years of experience in education consulting. Passionate about helping students achieve their academic dreams.",
      avatar: "/placeholder.svg?height=300&width=300&query=middle%20eastern%20male%20professional",
      initials: "ZH",
    },
    {
      id: 2,
      name: "John Smith",
      role: "Senior Academic Advisor",
      bio: "Former admissions officer with expertise in Ivy League applications. Helped over 100 students gain admission to top universities.",
      avatar: "/placeholder.svg?height=300&width=300&query=caucasian%20male%20professional",
      initials: "JS",
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Visa Specialist",
      bio: "Immigration expert with deep knowledge of U.S. student visa regulations. 98% success rate with F-1 visa applications.",
      avatar: "/placeholder.svg?height=300&width=300&query=caucasian%20female%20professional",
      initials: "EJ",
    },
    {
      id: 4,
      name: "David Wong",
      role: "University Relations Director",
      bio: "Maintains partnerships with 50+ U.S. universities. Former international student advisor at a major university.",
      avatar: "/placeholder.svg?height=300&width=300&query=asian%20male%20professional",
      initials: "DW",
    },
    {
      id: 5,
      name: "Aisha Patel",
      role: "Student Success Manager",
      bio: "Coordinates pre-departure orientation and ensures smooth transitions for students. Former international student from India.",
      avatar: "/placeholder.svg?height=300&width=300&query=indian%20female%20professional",
      initials: "AP",
    },
    {
      id: 6,
      name: "Carlos Rodriguez",
      role: "Document Specialist",
      bio: "Expert in crafting compelling application materials. Background in college essay coaching and academic writing.",
      avatar: "/placeholder.svg?height=300&width=300&query=hispanic%20male%20professional",
      initials: "CR",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#1C2235]">Meet Our Team</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Dedicated professionals committed to your academic success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-[#1C2235] mb-2">{member.role}</p>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-muted-foreground hover:text-[#1C2235]">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-[#1C2235]">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-[#1C2235]">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
