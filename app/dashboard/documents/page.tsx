import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DocumentUploader } from "@/components/student/document-uploader"
import { DocumentList } from "@/components/student/document-list"
import { AlertCircle, Upload } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Documents</h1>
          <p className="text-muted-foreground">Upload and manage your application documents</p>
        </div>
        <Button className="bg-[#1C2235] hover:bg-[#2A3147]">
          <Upload className="mr-2 h-4 w-4" /> Upload New Document
        </Button>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          Please ensure all documents are in PDF format and clearly legible. Maximum file size is 5MB.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="required" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="required">Required Documents</TabsTrigger>
          <TabsTrigger value="uploaded">Uploaded Documents</TabsTrigger>
        </TabsList>
        <TabsContent value="required" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Required Documents</CardTitle>
              <CardDescription>These documents are required for your university and visa applications</CardDescription>
            </CardHeader>
            <CardContent>
              <DocumentUploader />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="uploaded" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Uploaded Documents</CardTitle>
              <CardDescription>All documents you have submitted so far</CardDescription>
            </CardHeader>
            <CardContent>
              <DocumentList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
