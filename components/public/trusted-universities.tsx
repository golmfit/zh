import Image from "next/image"

export function TrustedUniversities() {
  // Mock data for university logos
  const universities = [
    { name: "Harvard University", logo: "/harvard-university-logo.png" },
    { name: "Stanford University", logo: "/stanford-university-logo.png" },
    { name: "MIT", logo: "/mit-logo-generic.png" },
    { name: "Yale University", logo: "/yale-university-logo.png" },
    { name: "Princeton University", logo: "/placeholder.svg?key=fldoz" },
    { name: "Columbia University", logo: "/columbia-university-logo.png" },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-xl font-medium text-[#1C2235]">Trusted by Students Admitted to Top Universities</h2>
          <p className="text-muted-foreground mt-2">
            Our students have been accepted to prestigious institutions across the United States
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {universities.map((university) => (
            <div
              key={university.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-200"
            >
              <Image
                src={university.logo || "/placeholder.svg"}
                alt={university.name}
                width={120}
                height={40}
                className="h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
