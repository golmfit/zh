import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FaqAccordion() {
  // Mock data for FAQs
  const faqs = [
    {
      question: "What services does ZHAcademie provide?",
      answer:
        "ZHAcademie offers comprehensive support for international students seeking admission to U.S. universities. Our services include university selection, application assistance, document preparation, visa guidance, interview preparation, and pre-departure orientation. We provide personalized support throughout the entire process from initial consultation to arrival in the United States.",
    },
    {
      question: "How does the visa application process work?",
      answer:
        "The student visa process involves several steps: receiving an I-20 form from your university, paying the SEVIS fee, completing the DS-160 form, scheduling and attending a visa interview at a U.S. embassy or consulate, and receiving your visa decision. Our advisors guide you through each step, help prepare your documentation, and provide mock interview sessions to ensure you're fully prepared.",
    },
    {
      question: "When should I start the application process?",
      answer:
        "For fall admission (August/September start), we recommend beginning the process 12-18 months in advance. This timeline allows sufficient time for university research, standardized testing, application preparation, and the visa process. Starting early gives you the best chance of meeting all deadlines and securing admission to your preferred universities.",
    },
    {
      question: "What are your success rates for university admissions and visa approvals?",
      answer:
        "ZHAcademie maintains a 98% visa approval rate for our students. Our university admission success rates vary by the competitiveness of the institutions, but we pride ourselves on helping students gain admission to universities that match their academic profiles and career goals. We've helped students gain admission to top institutions including Harvard, Stanford, MIT, and many other prestigious universities across the United States.",
    },
    {
      question: "How much does it cost to study in the United States?",
      answer:
        "The cost of studying in the U.S. varies widely depending on the type of institution and location. Public universities typically cost $20,000-$40,000 per year for international students, while private universities can range from $40,000-$60,000+ annually. Additionally, living expenses can add $10,000-$20,000 per year depending on the location. Our advisors can help you identify universities that fit your budget and explore scholarship opportunities.",
    },
  ]

  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#1C2235]">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about studying in the U.S. and our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Still have questions? We're here to help.</p>
            <Button asChild className="bg-[#1C2235] hover:bg-[#2A3147]">
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
