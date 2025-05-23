import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Play, CheckCircle2, X } from "lucide-react"

export function VisaInterviewPrep() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Mock Interview</CardTitle>
            <CardDescription>Practice with our virtual interview simulator</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-[#1C2235] rounded-md flex items-center justify-center mb-3">
              <Play className="h-12 w-12 text-white opacity-80" />
            </div>
            <Button className="w-full bg-[#1C2235] hover:bg-[#2A3147]">Start Mock Interview</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Book a Prep Session</CardTitle>
            <CardDescription>Schedule a one-on-one interview preparation session</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Our advisors will guide you through the interview process and provide personalized feedback.
            </p>
            <Button className="w-full" variant="outline" asChild>
              <a href="/dashboard/appointments">
                <Calendar className="mr-2 h-4 w-4" /> Schedule Session
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Common Interview Questions</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Why do you want to study in the United States?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                This question assesses your genuine interest in studying in the U.S. rather than just using a student
                visa as a means to immigrate.
              </p>
              <p className="text-sm text-muted-foreground mb-2">Tips for answering:</p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Be specific about the academic programs or research opportunities that attracted you</li>
                <li>Mention the reputation of U.S. education in your field of study</li>
                <li>Explain how a U.S. degree will benefit your career goals back home</li>
                <li>Avoid generic answers like "because it's better" or focusing only on lifestyle factors</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Why did you choose this specific university?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                This question tests whether you've done your research and have specific reasons for choosing your
                university.
              </p>
              <p className="text-sm text-muted-foreground mb-2">Tips for answering:</p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Mention specific professors, research centers, or unique programs</li>
                <li>Discuss the university's ranking or reputation in your field</li>
                <li>Explain how this university aligns with your academic and career goals</li>
                <li>If applicable, mention any connections you have with alumni or faculty</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How will you finance your education?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                This question verifies that you have sufficient funds to cover your expenses without working illegally.
              </p>
              <p className="text-sm text-muted-foreground mb-2">Tips for answering:</p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Be prepared to discuss your financial documents in detail</li>
                <li>Clearly explain your sources of funding (family support, scholarships, personal savings)</li>
                <li>If you have sponsors, be ready to explain their relationship to you and their occupation</li>
                <li>Know the approximate cost of tuition and living expenses for your program</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What are your plans after completing your studies?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                This question assesses your ties to your home country and whether you intend to return after graduation.
              </p>
              <p className="text-sm text-muted-foreground mb-2">Tips for answering:</p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Emphasize your intention to return to your home country</li>
                <li>Discuss specific career opportunities or plans in your home country</li>
                <li>
                  If applicable, mention family businesses, job offers, or economic opportunities that await you at home
                </li>
                <li>
                  You can mention Optional Practical Training (OPT), but emphasize it as temporary professional
                  experience
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Tell me about your academic background and qualifications.</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                This question evaluates your academic preparedness for the program you've been accepted to.
              </p>
              <p className="text-sm text-muted-foreground mb-2">Tips for answering:</p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Briefly summarize your educational history, focusing on your most recent degree</li>
                <li>Highlight relevant coursework, projects, or research experience</li>
                <li>Mention any academic achievements, honors, or scholarships</li>
                <li>Explain how your background has prepared you for your intended program of study</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Interview Do's and Don'ts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4 bg-green-50">
            <h4 className="font-medium text-green-800 mb-2">Do's</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Dress professionally and arrive early</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Speak clearly and confidently</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Provide concise, direct answers to questions</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Bring all required documents organized in a folder</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Demonstrate strong ties to your home country</span>
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-4 bg-red-50">
            <h4 className="font-medium text-red-800 mb-2">Don'ts</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <X className="h-4 w-4 text-red-600 mt-0.5" />
                <span>Memorize scripted answers or lie</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <X className="h-4 w-4 text-red-600 mt-0.5" />
                <span>Discuss plans to work or immigrate permanently</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <X className="h-4 w-4 text-red-600 mt-0.5" />
                <span>Argue with the visa officer or become defensive</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <X className="h-4 w-4 text-red-600 mt-0.5" />
                <span>Bring family members to speak on your behalf</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <X className="h-4 w-4 text-red-600 mt-0.5" />
                <span>Provide vague or inconsistent information</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
