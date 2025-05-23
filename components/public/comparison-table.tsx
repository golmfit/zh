import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X } from "lucide-react"

export function ComparisonTable() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#1C2235]">Why Choose ZHAcademie</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how our services compare to navigating the process on your own
          </p>
        </div>

        <div className="overflow-x-auto">
          <Table className="border-collapse border border-gray-200">
            <TableHeader>
              <TableRow className="bg-[#F5F7FA]">
                <TableHead className="border border-gray-200 w-1/3">Feature</TableHead>
                <TableHead className="border border-gray-200 w-1/3 text-center">With ZHAcademie</TableHead>
                <TableHead className="border border-gray-200 w-1/3 text-center">On Your Own</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border border-gray-200 font-medium">Expert Guidance</TableCell>
                <TableCell className="border border-gray-200 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </TableCell>
                <TableCell className="border border-gray-200 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-200 font-medium">University Selection Strategy</TableCell>
                <TableCell className="border border-gray-200 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </TableCell>
                <TableCell className="border border-gray-200 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-200 font-medium">Application Review</TableCell>
                <TableCell className="border border-gray-200 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </TableCell>
                <TableCell className="border border-gray-200 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-200 font-medium">Visa Interview Preparation</TableCell>
                <TableCell className="border border-gray-200 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </TableCell>
                <TableCell className="border border-gray-200 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-200 font-medium">Document Preparation</TableCell>
                <TableCell className="border border-gray-200 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </TableCell>
                <TableCell className="border border-gray-200 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-200 font-medium">Pre-Departure Support</TableCell>
                <TableCell className="border border-gray-200 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </TableCell>
                <TableCell className="border border-gray-200 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-200 font-medium">Time Investment</TableCell>
                <TableCell className="border border-gray-200 text-center">Minimal</TableCell>
                <TableCell className="border border-gray-200 text-center">Significant</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-200 font-medium">Stress Level</TableCell>
                <TableCell className="border border-gray-200 text-center">Low</TableCell>
                <TableCell className="border border-gray-200 text-center">High</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-200 font-medium">Success Rate</TableCell>
                <TableCell className="border border-gray-200 text-center">98%</TableCell>
                <TableCell className="border border-gray-200 text-center">Varies</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
