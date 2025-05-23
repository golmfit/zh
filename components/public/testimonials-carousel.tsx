"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function TestimonialsCarousel() {
  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Mei Lin",
      country: "China",
      university: "Harvard University",
      avatar: "/placeholder.svg?key=494qg",
      initials: "ML",
      quote:
        "ZHAcademie transformed my dream of studying at Harvard into reality. Their personalized guidance throughout the application and visa process was invaluable. I couldn't have done it without their support!",
    },
    {
      id: 2,
      name: "Raj Patel",
      country: "India",
      university: "Stanford University",
      avatar: "/indian-male-student.png",
      initials: "RP",
      quote:
        "The advisors at ZHAcademie helped me navigate the complex U.S. university application process with ease. Their expertise and attention to detail made all the difference in my successful admission to Stanford.",
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      country: "Mexico",
      university: "MIT",
      avatar: "/placeholder.svg?key=rxjr0",
      initials: "SR",
      quote:
        "I was overwhelmed by the visa application process until I found ZHAcademie. Their step-by-step guidance and interview preparation gave me the confidence I needed to succeed.",
    },
    {
      id: 4,
      name: "Ahmed Hassan",
      country: "Egypt",
      university: "Columbia University",
      avatar: "/placeholder.svg?key=b648h",
      initials: "AH",
      quote:
        "Working with ZHAcademie was the best decision I made. Their comprehensive support from university selection to pre-departure orientation made my transition to studying in the U.S. seamless.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Display current testimonial and the next one on larger screens
  const currentTestimonial = testimonials[currentIndex]
  const nextTestimonialIndex = (currentIndex + 1) % testimonials.length
  const nextTestimonialData = testimonials[nextTestimonialIndex]

  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#1C2235]">Student Success Stories</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from our students who achieved their dreams of studying in the U.S.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard testimonial={currentTestimonial} />
            <div className="hidden md:block">
              <TestimonialCard testimonial={nextTestimonialData} />
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full p-0 ${index === currentIndex ? "bg-[#1C2235]" : "bg-transparent"}`}
              >
                <span className="sr-only">Go to testimonial {index + 1}</span>
              </Button>
            ))}
            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <Card className="border-none shadow-sm h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="h-8 w-8 text-[#1C2235]/20 mb-4" />
        <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
            <AvatarFallback>{testimonial.initials}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{testimonial.name}</div>
            <div className="text-sm text-muted-foreground">
              {testimonial.country} • {testimonial.university}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
