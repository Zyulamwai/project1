import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Box, Cog, Layers, Smartphone } from "lucide-react";

const productCategories = [
  {
    icon: Box,
    title: "Injection Molded Parts",
    description: "Custom plastic components for various industries",
    examples: ["Automotive parts", "Electronic housings", "Consumer goods"],
  },
  {
    icon: Cog,
    title: "Custom Tooling",
    description: "Precision mold design and manufacturing",
    examples: ["Single cavity molds", "Multi-cavity molds", "Hot runner systems"],
  },
  {
    icon: Layers,
    title: "Surface Treatment",
    description: "Various finishing options for plastic parts",
    examples: ["Painting", "Silk-screen printing", "Texture finishing"],
  },
  {
    icon: Smartphone,
    title: "Assembly Services",
    description: "Complete product assembly solutions",
    examples: ["Electronic assembly", "Product packaging", "Quality testing"],
  },
];

const caseStudies = [
  {
    title: "Automotive Lighting Components",
    description: "High-precision LED housing for major European car manufacturer",
    image: "https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&q=80",
    specs: ["Material: PC+ABS", "Annual volume: 500,000 units", "Tolerance: ±0.02mm"],
  },
  {
    title: "Consumer Electronics Enclosure",
    description: "TWS earphone charging case with premium finish",
    image: "https://images.unsplash.com/photo-1631176093617-63490a3d785a?auto=format&fit=crop&q=80",
    specs: ["Material: ABS", "Surface: Soft touch", "Production: 100K/month"],
  },
  {
    title: "Medical Device Housing",
    description: "FDA-compliant plastic housing for diagnostic equipment",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80",
    specs: ["Material: Medical grade PC", "Clean room molding", "Full traceability"],
  },
];

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold">Products & Case Studies</h1>
            <p className="text-xl text-muted-foreground">
              Explore our manufacturing capabilities and success stories across
              various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Our Capabilities</h2>
            <p className="text-muted-foreground">
              Comprehensive manufacturing solutions for your plastic components
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category) => (
              <Card key={category.title}>
                <CardContent className="pt-6">
                  <category.icon className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold">{category.title}</h3>
                  <p className="mb-4 text-muted-foreground">
                    {category.description}
                  </p>
                  <ul className="space-y-2 text-sm">
                    {category.examples.map((example) => (
                      <li key={example} className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Featured Case Studies</h2>
            <p className="text-muted-foreground">
              Success stories from our manufacturing expertise
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Card key={study.title} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{study.title}</h3>
                  <p className="mb-4 text-muted-foreground">
                    {study.description}
                  </p>
                  <ul className="space-y-2 text-sm">
                    {study.specs.map((spec) => (
                      <li key={spec} className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6" variant="outline">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}