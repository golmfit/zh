import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function FeaturedBlogPosts() {
  // Mock data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "5 Tips for a Successful F-1 Visa Interview",
      excerpt: "Prepare for your student visa interview with these expert tips to increase your chances of approval.",
      date: "May 5, 2025",
      author: "John Smith",
      category: "Visa",
      image: "/placeholder.svg?height=200&width=400&query=visa%20interview",
      slug: "successful-f1-visa-interview-tips",
    },
    {
      id: 2,
      title: "How to Choose the Right U.S. University for Your Major",
      excerpt: "Factors to consider when selecting a university that will best support your academic and career goals.",
      date: "April 28, 2025",
      author: "Emily Johnson",
      category: "Admissions",
      image: "/placeholder.svg?height=200&width=400&query=us%20university%20campus",
      slug: "choosing-right-us-university",
    },
    {
      id: 3,
      title: "Understanding the U.S. College Application Timeline",
      excerpt: "A month-by-month breakdown of when to complete each step of the application process.",
      date: "April 15, 2025",
      author: "David Wong",
      category: "Planning",
      image: "/placeholder.svg?height=200&width=400&query=calendar%20planning",
      slug: "us-college-application-timeline",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#1C2235]">Latest from Our Blog</h2>
            <p className="mt-4 text-lg text-muted-foreground">Insights and advice for international students</p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0" asChild>
            <Link href="/blog" className="flex items-center">
              View all posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-none shadow-sm">
              <div className="aspect-video relative">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#1C2235]/10 text-[#1C2235]">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div className="text-sm text-muted-foreground">By {post.author}</div>
                <Button variant="ghost" size="sm" className="text-[#1C2235]" asChild>
                  <Link href={`/blog/${post.slug}`}>Read more</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
