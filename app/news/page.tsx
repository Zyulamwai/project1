import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Newspaper } from "lucide-react"

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <section className="container py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Newspaper className="mx-auto mb-6 h-16 w-16 text-primary" />
            <h1 className="mb-6 text-4xl font-bold">Latest News</h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with our latest company news, industry insights, and innovations.
            </p>
          </div>
          
          <div className="mt-12">
            <Card>
              <CardContent className="p-6">
                <p className="text-center text-muted-foreground">
                  News content coming soon...
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}