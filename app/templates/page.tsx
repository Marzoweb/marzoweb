import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Website Templates - MARZOWEB",
  description: "Browse our collection of professional website templates. Live previews available for restaurants, portfolios, businesses, and more.",
}

export default function TemplatesPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Website Templates</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Browse through our collection of professionally designed website templates. Click on "Live Preview" to experience them in action.
        </p>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <Tabs defaultValue="all" className="w-full md:w-auto">
          <TabsList className="w-full md:w-auto bg-gray-100">
            <TabsTrigger value="all" className="data-[state=active]:bg-[#0056b3] data-[state=active]:text-white">
              All
            </TabsTrigger>
            <TabsTrigger value="business" className="data-[state=active]:bg-[#0056b3] data-[state=active]:text-white">
              Business
            </TabsTrigger>
            <TabsTrigger value="restaurant" className="data-[state=active]:bg-[#0056b3] data-[state=active]:text-white">
              Restaurant
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="data-[state=active]:bg-[#0056b3] data-[state=active]:text-white">
              Portfolio
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="w-full md:w-auto md:max-w-sm">
          <Input placeholder="Search templates..." className="border-gray-300 focus-visible:ring-[#0056b3]" />
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TemplateCard
          title="Modern Restaurant"
          category="Restaurant"
          image="/restaurant-template.png?height=400&width=600"
          previewLink="/templates/examples/restaurant/index.html"
        />
        <TemplateCard
          title="Professional Portfolio"
          category="Portfolio"
          image="/portfolio-template.png?height=400&width=600"
          previewLink="/templates/examples/portfolio/index.html"
        />
        <TemplateCard
          title="Educational Website"
          category="Education"
          image="/education-template.png?height=400&width=600"
          previewLink="/templates/examples/education/index.html"
        />
        <TemplateCard
          title="Creative Agency"
          category="Business"
          image="/agency-template.png?height=400&width=600"
          previewLink="/templates/examples/agency/index.html"
        />
        <TemplateCard
          title="Café & Bakery"
          category="Restaurant"
          image="/cafe-template.png?height=400&width=600"
          previewLink="/templates/examples/cafe/index.html"
        />
        <TemplateCard
          title="Ecommerce Store"
          category="Business"
          image="/ecommerce-template.png?height=400&width=600"
          previewLink="/templates/examples/ecommerce/index.html"
        />
      </div>
    </div>
  )
}

function TemplateCard({
  title,
  category,
  image,
  previewLink,
}: {
  title: string
  category: string
  image: string
  previewLink: string
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
      <div className="relative overflow-hidden group">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c2b39]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
          <Link href={`/templates-viewer?template=${encodeURIComponent(previewLink)}`} >
            <Button className="bg-[#0056b3] hover:bg-[#004494] shadow-soft">Live Preview</Button>
          </Link>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center">
          <span className="text-gray-800">{title}</span>
          <span className="text-sm bg-gray-100 text-[#0056b3] py-1 px-3 rounded-full">{category}</span>
        </CardTitle>
      </CardHeader>
      <CardFooter className="pt-0">
        <Link href={previewLink} className="text-[#0056b3] hover:text-[#004494] font-medium" >
          View Details
        </Link>
      </CardFooter>
    </Card>
  )
}
