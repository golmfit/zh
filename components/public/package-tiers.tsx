import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export function PackageTiers() {
  // Mock data for service packages
  const packages = [
    {
      id: 1,
      name: "Essential",
      description: "Core services for students who need fundamental guidance",
      price: "$1,500",
      features: [
        "Initial consultation and assessment",
        "University selection (up to 3 universities)",
        "Basic application review",
        "General visa guidance",
        "Email support",
      ],
      popular: false,
    },
    {
      id: 2,
      name: "Comprehensive",
      description: "Our most popular package for complete application support",
      price: "$3,000",
      features: [
        "Everything in Essential package",
        "University selection (up to 6 universities)",
        "Personal statement development",
        "Complete application preparation",
        "Visa application support",
        "Interview preparation",
        "Pre-departure orientation",
        "Priority email and phone support",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Premium",
      description: "VIP service with dedicated advisor and maximum support",
      price: "$5,000",
      features: [
        "Everything in Comprehensive package",
        "University selection (up to 10 universities)",
        "Dedicated senior advisor",
        "Unlimited document revisions",
        "Scholarship application assistance",
        "Housing arrangement support",
        "Airport pickup coordination",
        "First-month check-ins after arrival",
        "24/7 emergency support",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#1C2235]">Service Packages</h2>
          <p className="mt-4 text-lg text-muted-foreground">Choose the level of support that best fits your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`border-none shadow-sm ${pkg.popular ? "relative ring-2 ring-[#1C2235]" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-[#1C2235] text-white text-xs font-medium px-2 py-1 rounded">Most Popular</span>
                </div>
              )}
              <CardHeader>
                <CardTitle>{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold">{pkg.price}</div>
                <ul className="space-y-2">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className={`w-full ${
                    pkg.popular ? "bg-[#1C2235] hover:bg-[#2A3147]" : "bg-gray-100 text-[#1C2235] hover:bg-gray-200"
                  }`}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 text-muted-foreground">
          <p>All packages include a free initial consultation. Custom packages are also available.</p>
        </div>
      </div>
    </section>
  )
}
