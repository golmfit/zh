import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VisaProgressTracker } from "@/components/student/visa-progress-tracker"
import { VisaRequirementsList } from "@/components/student/visa-requirements-list"
import { VisaInterviewPrep } from "@/components/student/visa-interview-prep"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function VisaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Visa Progress</h1>
        <p className="text-muted-foreground">Track and manage your U.S. student visa application</p>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Current Status: SEVIS Fee Payment</AlertTitle>
        <AlertDescription>
          Your next step is to pay the SEVIS fee. Please complete this step before proceeding to the DS-160 form.
        </AlertDescription>
      </Alert>

      <VisaProgressTracker />

      <Tabs defaultValue="requirements" className="w-full">
        <TabsList className="grid w-full md:w-[600px] grid-cols-3">
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
          <TabsTrigger value="interview">Interview Prep</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>
        <TabsContent value="requirements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Visa Requirements</CardTitle>
              <CardDescription>Documents and steps needed for your F-1 student visa</CardDescription>
            </CardHeader>
            <CardContent>
              <VisaRequirementsList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="interview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Interview Preparation</CardTitle>
              <CardDescription>Prepare for your visa interview with these resources</CardDescription>
            </CardHeader>
            <CardContent>
              <VisaInterviewPrep />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="timeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Visa Timeline</CardTitle>
              <CardDescription>Expected timeline for your visa application process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1C2235] text-white">1</div>
                  <div>
                    <h3 className="font-medium">Receive I-20 Form</h3>
                    <p className="text-sm text-muted-foreground">
                      After university acceptance, you'll receive your I-20 form
                    </p>
                    <p className="text-sm font-medium text-[#1C2235]">Completed: April 10, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1C2235] text-white">2</div>
                  <div>
                    <h3 className="font-medium">Pay SEVIS Fee</h3>
                    <p className="text-sm text-muted-foreground">Pay the I-901 SEVIS fee online at fmjfee.com</p>
                    <p className="text-sm font-medium text-orange-500">Current Step: Due by May 15, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Complete DS-160 Form</h3>
                    <p className="text-sm text-muted-foreground">
                      Fill out the DS-160 Online Nonimmigrant Visa Application
                    </p>
                    <p className="text-sm text-muted-foreground">Estimated: May 20, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">Schedule Visa Interview</h3>
                    <p className="text-sm text-muted-foreground">
                      Schedule your interview at the U.S. Embassy or Consulate
                    </p>
                    <p className="text-sm text-muted-foreground">Estimated: May 25, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                    5
                  </div>
                  <div>
                    <h3 className="font-medium">Attend Visa Interview</h3>
                    <p className="text-sm text-muted-foreground">
                      Attend your scheduled interview with all required documents
                    </p>
                    <p className="text-sm text-muted-foreground">Estimated: June 10, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                    6
                  </div>
                  <div>
                    <h3 className="font-medium">Receive Visa Decision</h3>
                    <p className="text-sm text-muted-foreground">Typically within 1-2 weeks after your interview</p>
                    <p className="text-sm text-muted-foreground">Estimated: June 25, 2025</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
