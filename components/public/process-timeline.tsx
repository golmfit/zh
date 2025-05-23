export function ProcessTimeline() {
  // Mock data for the process steps
  const steps = [
    {
      id: 1,
      title: "Initial Consultation",
      description: "Meet with our advisors to discuss your academic goals and university preferences.",
    },
    {
      id: 2,
      title: "Application Strategy",
      description: "Develop a personalized strategy for university selection and application preparation.",
    },
    {
      id: 3,
      title: "Document Preparation",
      description: "Receive guidance on preparing compelling application documents and essays.",
    },
    {
      id: 4,
      title: "University Applications",
      description: "Submit applications to your selected universities with our expert assistance.",
    },
    {
      id: 5,
      title: "Visa Application",
      description: "Navigate the student visa process with step-by-step guidance and interview preparation.",
    },
    {
      id: 6,
      title: "Pre-Departure Support",
      description: "Prepare for your journey with housing assistance and orientation to U.S. campus life.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#1C2235]">Our Process</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A structured approach to help you achieve your academic dreams in the U.S.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div key={step.id} className={`md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="md:w-1/2 md:pr-12 md:pl-12 mb-8 md:mb-24">
                  <div
                    className={`bg-white p-6 rounded-lg shadow-md border border-gray-100 relative ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div
                      className={`absolute top-6 hidden md:block ${index % 2 === 0 ? "right-[-42px]" : "left-[-42px]"}`}
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1C2235] text-white">
                        {step.id}
                      </div>
                    </div>
                    <div className="md:hidden flex items-center mb-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1C2235] text-white mr-3">
                        {step.id}
                      </div>
                      <h3 className="text-xl font-bold text-[#1C2235]">{step.title}</h3>
                    </div>
                    <h3 className="hidden md:block text-xl font-bold text-[#1C2235]">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
