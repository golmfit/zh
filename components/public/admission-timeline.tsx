export function AdmissionTimeline() {
  // Mock data for admission timeline
  const timelineSteps = [
    {
      id: 1,
      title: "Research & Planning",
      timeframe: "12-18 months before enrollment",
      description:
        "Research universities, programs, and requirements. Take standardized tests like TOEFL/IELTS and SAT/ACT/GRE/GMAT.",
    },
    {
      id: 2,
      title: "University Selection",
      timeframe: "10-12 months before enrollment",
      description: "Finalize your list of target universities based on academic fit, budget, and career goals.",
    },
    {
      id: 3,
      title: "Application Preparation",
      timeframe: "8-10 months before enrollment",
      description:
        "Prepare application materials including personal statements, recommendation letters, and academic documents.",
    },
    {
      id: 4,
      title: "Application Submission",
      timeframe: "6-9 months before enrollment",
      description:
        "Submit applications according to university deadlines (typically November-January for fall admission).",
    },
    {
      id: 5,
      title: "University Decisions",
      timeframe: "3-6 months before enrollment",
      description: "Receive admission decisions and compare offers. Make your final university selection.",
    },
    {
      id: 6,
      title: "Visa Application",
      timeframe: "3-5 months before enrollment",
      description: "Receive I-20, pay SEVIS fee, complete DS-160, and attend visa interview at U.S. embassy/consulate.",
    },
    {
      id: 7,
      title: "Pre-Departure Preparation",
      timeframe: "1-3 months before enrollment",
      description: "Arrange housing, book flights, attend orientation, and prepare for your journey to the U.S.",
    },
    {
      id: 8,
      title: "Arrival & Orientation",
      timeframe: "1-2 weeks before classes",
      description:
        "Arrive in the U.S., attend university orientation, set up bank account, and settle into your new home.",
    },
  ]

  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#1C2235]">U.S. Admission Timeline</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Understanding the typical timeline for U.S. university admissions
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 md:left-1/2 md:-ml-0.5"></div>
          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="md:flex items-center md:justify-center">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:order-last md:pl-12"}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="text-xl font-bold text-[#1C2235]">{step.title}</h3>
                      <p className="text-sm font-medium text-[#1C2235]/70 mt-1">{step.timeframe}</p>
                      <p className="mt-2 text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-6 md:top-1/2 transform md:-translate-y-1/2 flex items-center justify-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1C2235] text-white font-bold">
                      {step.id}
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
                <div className="flex items-center md:hidden mt-4 mb-8 ml-12">
                  <div>
                    <h3 className="text-xl font-bold text-[#1C2235]">{step.title}</h3>
                    <p className="text-sm font-medium text-[#1C2235]/70">{step.timeframe}</p>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
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
