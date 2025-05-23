import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Circle, Clock } from "lucide-react"

export function ApplicationStageTracker() {
  // Mock data - would come from backend in real implementation
  const stages = [
    { id: 1, name: "Initial Consultation", status: "completed", date: "Jan 15, 2025" },
    { id: 2, name: "Document Collection", status: "completed", date: "Feb 3, 2025" },
    { id: 3, name: "University Applications", status: "in-progress", date: "Current Stage" },
    { id: 4, name: "Visa Application", status: "pending", date: "Upcoming" },
    { id: 5, name: "Pre-Departure", status: "pending", date: "Upcoming" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Application Progress</CardTitle>
        <CardDescription>Track your journey to studying in the U.S.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
          <div className="space-y-8">
            {stages.map((stage) => (
              <div key={stage.id} className="relative flex items-start gap-4">
                <div className="absolute left-4 top-7 h-full w-0.5 bg-gray-200" />
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  {stage.status === "completed" ? (
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  ) : stage.status === "in-progress" ? (
                    <Clock className="h-8 w-8 text-[#1C2235]" />
                  ) : (
                    <Circle className="h-8 w-8 text-gray-300" />
                  )}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{stage.name}</p>
                    <p className="text-sm text-muted-foreground">{stage.date}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stage.status === "completed"
                      ? "Completed"
                      : stage.status === "in-progress"
                        ? "In Progress"
                        : "Pending"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
