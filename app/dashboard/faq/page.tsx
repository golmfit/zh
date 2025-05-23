import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Mail, Phone, Calendar } from "lucide-react"

export default function FaqPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">FAQ & Help</h1>
        <p className="text-muted-foreground">Find answers to common questions and get support</p>
      </div>

      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search for answers..." className="pl-8 w-full md:w-[400px]" />
      </div>

      <Tabs defaultValue="application" className="w-full">
        <TabsList className="grid w-full md:w-[600px] grid-cols-3">
          <TabsTrigger value="application">Application</TabsTrigger>
          <TabsTrigger value="visa">Visa</TabsTrigger>
          <TabsTrigger value="general">General</TabsTrigger>
        </TabsList>
        <TabsContent value="application" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Application FAQs</CardTitle>
              <CardDescription>Common questions about the university application process</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>When should I start my university application?</AccordionTrigger>
                  <AccordionContent>
                    For fall admission, you should start your application process at least 12-18 months in advance. This
                    gives you enough time to prepare for standardized tests, write essays, gather recommendations, and
                    meet application deadlines which typically fall between November and January for the following fall.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What standardized tests do I need to take?</AccordionTrigger>
                  <AccordionContent>
                    Most U.S. universities require international students to take the TOEFL or IELTS to demonstrate
                    English proficiency. Depending on the program, you may also need to take the SAT/ACT for
                    undergraduate programs or GRE/GMAT for graduate programs. Some universities have become
                    test-optional in recent years, so check each university's specific requirements.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How many universities should I apply to?</AccordionTrigger>
                  <AccordionContent>
                    We typically recommend applying to 6-10 universities with a mix of reach, target, and safety
                    schools. This provides enough options while keeping the application process manageable. Your advisor
                    will help you create a balanced list based on your academic profile and preferences.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What documents do I need for my application?</AccordionTrigger>
                  <AccordionContent>
                    Common required documents include: academic transcripts, standardized test scores, letters of
                    recommendation, personal statement/essays, resume/CV, financial documents, and a copy of your
                    passport. Some programs may require additional materials like portfolios or writing samples.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I demonstrate financial capability?</AccordionTrigger>
                  <AccordionContent>
                    You'll need to provide bank statements or financial guarantee letters showing you have sufficient
                    funds to cover at least one year of tuition and living expenses. The specific amount varies by
                    university and location. Some universities may also require you to complete a specific financial
                    certification form.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="visa" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Visa FAQs</CardTitle>
              <CardDescription>Common questions about the student visa process</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What type of visa do I need to study in the U.S.?</AccordionTrigger>
                  <AccordionContent>
                    Most international students attend U.S. universities on an F-1 student visa. This visa is
                    specifically for academic students enrolled in universities, colleges, or language programs. If
                    you're participating in vocational programs, you would need an M-1 visa instead.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>When should I apply for my student visa?</AccordionTrigger>
                  <AccordionContent>
                    You can apply for an F-1 visa up to 120 days before the start date listed on your I-20 form. We
                    recommend applying as early as possible within this window, as visa processing times can vary. You
                    cannot enter the U.S. on an F-1 visa more than 30 days before your program start date.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What is the SEVIS fee and when do I pay it?</AccordionTrigger>
                  <AccordionContent>
                    The SEVIS (Student and Exchange Visitor Information System) fee is required for all F-1 visa
                    applicants. You must pay this fee before your visa interview. The fee is currently $350 and can be
                    paid online at fmjfee.com. Keep the payment receipt as you'll need it for your visa interview.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What documents do I need for my visa interview?</AccordionTrigger>
                  <AccordionContent>
                    For your F-1 visa interview, you'll need: a valid passport, Form DS-160 confirmation page, visa
                    application fee receipt, SEVIS fee receipt, Form I-20, university acceptance letter, financial
                    documents, academic transcripts/diplomas, and standardized test scores. Additional documents may be
                    required based on your specific situation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I work while studying in the U.S.?</AccordionTrigger>
                  <AccordionContent>
                    F-1 students can work on-campus for up to 20 hours per week during the academic year and full-time
                    during breaks. After completing one academic year, you may be eligible for off-campus employment
                    through Curricular Practical Training (CPT) or Optional Practical Training (OPT), which allows you
                    to work in your field of study.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General FAQs</CardTitle>
              <CardDescription>Other common questions about studying in the U.S.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How much does it cost to study in the U.S.?</AccordionTrigger>
                  <AccordionContent>
                    Costs vary widely depending on the type of institution and location. Public universities typically
                    cost $20,000-$40,000 per year for international students, while private universities can range from
                    $40,000-$60,000+ annually. This includes tuition and fees, but not living expenses, which add
                    approximately $10,000-$20,000 per year depending on the location.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Are there scholarships available for international students?</AccordionTrigger>
                  <AccordionContent>
                    Yes, many U.S. universities offer scholarships for international students, though competition can be
                    intense. These include merit-based scholarships, need-based aid, athletic scholarships, and
                    diversity scholarships. There are also external scholarships from governments, private
                    organizations, and foundations. Your ZHAcademie advisor will help you identify and apply for
                    relevant opportunities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I find housing in the U.S.?</AccordionTrigger>
                  <AccordionContent>
                    Most universities offer on-campus housing options for international students, especially in the
                    first year. This is often the easiest option as it includes utilities and is close to classes.
                    Off-campus housing is typically less expensive but requires more planning. Many universities have
                    housing offices that can help you find suitable accommodations near campus.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What health insurance do I need?</AccordionTrigger>
                  <AccordionContent>
                    International students are required to have health insurance while studying in the U.S. Many
                    universities offer their own health insurance plans that students can purchase, or you may need to
                    find an approved plan that meets the university's requirements. Healthcare in the U.S. can be very
                    expensive without insurance, so this is an important requirement.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can my family visit or live with me in the U.S.?</AccordionTrigger>
                  <AccordionContent>
                    Family members can visit you on B-2 tourist visas for short periods. If you want your spouse or
                    dependent children to live with you during your studies, they can apply for F-2 dependent visas. F-2
                    visa holders cannot work in the U.S., but dependent children can attend school through grade 12.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Need More Help?</CardTitle>
          <CardDescription>Can't find what you're looking for? Contact us directly.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-6">
              <Mail className="h-8 w-8 mb-2" />
              <span className="font-medium">Email Support</span>
              <span className="text-sm text-muted-foreground">support@zhacademie.com</span>
            </Button>
            <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-6">
              <Phone className="h-8 w-8 mb-2" />
              <span className="font-medium">Phone Support</span>
              <span className="text-sm text-muted-foreground">+1 (234) 567-8900</span>
            </Button>
            <Button className="h-auto flex flex-col items-center justify-center p-6 bg-[#1C2235] hover:bg-[#2A3147]">
              <Calendar className="h-8 w-8 mb-2" />
              <span className="font-medium">Book Consultation</span>
              <span className="text-sm">Speak with an advisor</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
