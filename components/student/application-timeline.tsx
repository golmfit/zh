export function ApplicationTimeline() {
  // Mock data - would come from backend in real implementation
  const events = [
    {
      id: 1,
      date: "May 15, 2025",
      title: "SEVIS Fee Payment Deadline",
      description: "Pay the I-901 SEVIS fee by this date to stay on track for your visa application.",
      type: "deadline",
    },
    {
      id: 2,
      date: "June 1, 2025",
      title: "Harvard Application Materials Due",
      description: "All supporting documents must be submitted by this date.",
      type: "deadline",
    },
    {
      id: 3,
      date: "June 15, 2025",
      title: "MIT Application Materials Due",
      description: "All supporting documents must be submitted by this date.",
      type: "deadline",
    },
    {
      id: 4,
      date: "July 1, 2025",
      title: "Stanford Application Materials Due",
      description: "All supporting documents must be submitted by this date.",
      type: "deadline",
    },
    {
      id: 5,
      date: "July 15, 2025",
      title: "Visa Interview Preparation Session",
      description: "Scheduled session with your advisor to prepare for the visa interview.",
      type: "appointment",
    },
    {
      id: 6,
      date: "August 1, 2025",
      title: "Visa Application Deadline",
      description: "Complete your visa application by this date to ensure processing time.",
      type: "deadline",
    },
    {
      id: 7,
      date: "December 15, 2025",
      title: "Harvard Application Deadline",
      description: "Final deadline for submitting your complete application.",
      type: "deadline",
    },
  ]

  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
  })

  return (
    <div className="space-y-4">
      {sortedEvents.map((event) => (
        <div key={event.id} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="text-sm font-medium">{event.date.split(",")[0]}</div>
            <div className="text-xs text-muted-foreground">{event.date.split(",")[1]}</div>
          </div>
          <div
            className={`flex-1 rounded-lg border p-3 ${
              event.type === "deadline" ? "border-orange-200 bg-orange-50" : "border-blue-200 bg-blue-50"
            }`}
          >
            <div className="font-medium">{event.title}</div>
            <p className="text-sm text-muted-foreground">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
