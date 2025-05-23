export function VisaSuccessMetrics() {
  // Mock data for success metrics
  const metrics = [
    { id: 1, value: "98%", label: "Visa Approval Rate" },
    { id: 2, value: "200+", label: "Students Admitted" },
    { id: 3, value: "50+", label: "Partner Universities" },
    { id: 4, value: "10+", label: "Years of Experience" },
  ]

  return (
    <section className="py-16 bg-[#1C2235] text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Our Success by the Numbers</h2>
          <p className="mt-4 text-lg text-gray-300">
            We take pride in our track record of helping international students achieve their dreams
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((metric) => (
            <div key={metric.id} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">{metric.value}</div>
              <div className="text-gray-300">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
