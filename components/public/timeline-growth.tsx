export function TimelineGrowth() {
  // Mock data for company timeline
  const timelineEvents = [
    {
      year: "2015",
      title: "ZHAcademie Founded",
      description: "Established with a mission to help international students access U.S. education opportunities.",
    },
    {
      year: "2017",
      title: "Expanded Services",
      description: "Added comprehensive visa application support and pre-departure orientation programs.",
    },
    {
      year: "2019",
      title: "100th Student Success",
      description: "Celebrated our 100th student successfully admitted to a U.S. university.",
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Launched our online platform to support students remotely during the global pandemic.",
    },
    {
      year: "2023",
      title: "University Partnerships",
      description: "Established formal partnerships with 50+ universities across the United States.",
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Opened new offices to serve students from more regions around the world.",
    },
  ]

  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#1C2235]">Our Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A decade of helping international students achieve their academic dreams
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2 hidden md:block" />
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                <div className="md:flex items-center">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:order-last md:pl-12"}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="text-xl font-bold text-[#1C2235]">{event.title}</h3>
                      <p className="mt-2 text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex md:items-center md:justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#1C2235] text-white flex items-center justify-center font-bold">
                      {event.year}
                    </div>
                  </div>
                  <div className="md:w-1/2" />
                </div>
                <div className="flex items-center md:hidden mt-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#1C2235] text-white flex items-center justify-center font-bold mr-4">
                    {event.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1C2235]">{event.title}</h3>
                    <p className="mt-1 text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
