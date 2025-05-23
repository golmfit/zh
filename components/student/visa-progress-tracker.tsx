import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Circle, Clock } from "lucide-react"

export function VisaProgressTracker() {
  // Mock data - would come from backend in real implementation
  const steps = [
    { id: 1, name: "Receive I-20", status: "completed", date: "April 10, 2025" },
    { id: 2, name: "Pay SEVIS Fee", status: "in-progress", date: "Due by May 15, 2025" },
    { id: 3, name: "Complete DS-160", status: "pending", date: "Not Started" },
    { id: 4, name: "Schedule Interview", status: "pending", date: "Not Started" },
    { id: 5, name: "Attend Interview", status: "pending", date: "Not Started" },
    { id: 6, name: "Receive Visa", status: "pending", date: "Not Started" },
  ]

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="relative">
          <div className="absolute left-[15px] top-0 h-full w-0.5 bg-gray-200" />
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex gap-4">
                {index < steps.length - 1 && (
                  <div
                    className={`absolute left-[15px] top-8 h-full w-0.5 ${
                      step.status === "completed" ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                )}
                <div className="z-10">
                  {step.status === "completed" ? (
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  ) : step.status === "in-progress" ? (
                    <Clock className="h-8 w-8 text-[#1C2235]" />
                  ) : (
                    <Circle className="h-8 w-8 text-gray-300" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-lg font-medium">{step.name}</h3>
                    <span
                      className={`text-sm ${
                        step.status === "completed"
                          ? "text-green-600"
                          : step.status === "in-progress"
                            ? "text-[#1C2235] font-medium"
                            : "text-muted-foreground"
                      }`}
                    >
                      {step.date}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {step.status === "completed" && "This step has been completed."}
                    {step.status === "in-progress" && "This step is currently in progress."}
                    {step.status === "pending" && "This step will be available once previous steps are completed."}
                  </p>
                  {step.status === "in-progress" && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href="https://www.fmjfee.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#1C2235] underline hover:text-[#2A3147]"
                      >
                        Pay SEVIS Fee Online
                      </a>
                      <span className="text-sm text-muted-foreground">•</span>
                      <a href="#" className="text-sm text-[#1C2235] underline hover:text-[#2A3147]">
                        View Payment Instructions
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
