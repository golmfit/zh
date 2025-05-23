import { CheckCircle2, Circle, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VisaRequirementsList() {
  // Mock data - would come from backend in real implementation
  const requirements = [
    {
      id: 1,
      name: "Valid Passport",
      description: "Must be valid for at least 6 months beyond your intended period of stay",
      status: "completed",
      link: null,
    },
    {
      id: 2,
      name: "Form I-20",
      description: "Certificate of Eligibility for Nonimmigrant Student Status",
      status: "completed",
      link: null,
    },
    {
      id: 3,
      name: "SEVIS Fee Receipt",
      description: "Proof of payment of the I-901 SEVIS Fee",
      status: "pending",
      link: "https://www.fmjfee.com/",
    },
    {
      id: 4,
      name: "DS-160 Confirmation Page",
      description: "Online Nonimmigrant Visa Application confirmation",
      status: "pending",
      link: "https://ceac.state.gov/genniv/",
    },
    {
      id: 5,
      name: "Visa Application Fee Receipt",
      description: "Proof of payment of the visa application fee",
      status: "pending",
      link: null,
    },
    {
      id: 6,
      name: "Financial Documents",
      description: "Bank statements, scholarships, or sponsorship letters showing sufficient funds",
      status: "completed",
      link: null,
    },
    {
      id: 7,
      name: "Academic Documents",
      description: "Transcripts, diplomas, and standardized test scores",
      status: "completed",
      link: null,
    },
    {
      id: 8,
      name: "Passport-sized Photos",
      description: "Recent photos meeting the U.S. visa photo requirements",
      status: "pending",
      link: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos.html",
    },
  ]

  return (
    <div className="space-y-4">
      {requirements.map((requirement) => (
        <div key={requirement.id} className="flex items-start gap-3 p-3 border rounded-lg">
          <div className="mt-0.5">
            {requirement.status === "completed" ? (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            ) : (
              <Circle className="h-5 w-5 text-gray-300" />
            )}
          </div>
          <div className="flex-1">
            <div className="font-medium">{requirement.name}</div>
            <p className="text-sm text-muted-foreground">{requirement.description}</p>
            {requirement.link && (
              <a
                href={requirement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center text-sm text-[#1C2235] hover:underline"
              >
                <ExternalLink className="mr-1 h-3 w-3" /> Visit Official Site
              </a>
            )}
          </div>
          <div>
            {requirement.status === "completed" ? (
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
            ) : (
              <Button variant="outline" size="sm" disabled>
                Pending
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
