import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Factory,
  Award,
  Users,
  Cog,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const advantages = [
  {
    icon: Factory,
    title: "75 Injection Molding Machines",
    description: "Ranging from 80T to 1200T capacity",
  },
  {
    icon: Award,
    title: "ISO 9001 Certified",
    description: "Quality management system certification",
  },
  {
    icon: Users,
    title: "25 Years Experience",
    description: "Serving global clients since 2000",
  },
  {
    icon: Cog,
    title: "In-house Tooling",
    description: "Complete mold design and manufacturing",
  },
];

const features = [
  "Wire-cutting machines & CNC capabilities",
  "Precision EDM equipment",
  "In-house painting facilities",
  "Silk-screen printing services",
  "Professional assembly lines",
  "Strict quality control",
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative flex h-full items-center">
          <div className="max-w-2xl text-white">
            <h1 className="mb-6 text-5xl font-bold leading-tight">
              Professional Plastic Injection Molding & Tooling Solutions
            </h1>
            <p className="mb-8 text-xl">
              25 years of excellence in custom manufacturing for global brands
            </p>
            <div className="flex space-x-4">
              <Button 
                size="lg" 
                variant="default"
                className="hover:bg-white hover:text-black bg-black text-white transition-colors border-0"
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="hover:bg-white hover:text-black bg-black text-white transition-colors border-0"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Choose Hongqing</h2>
            <p className="text-muted-foreground">
              Industry-leading capabilities backed by decades of experience
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => (
              <Card key={advantage.title}>
                <CardContent className="pt-6">
                  <advantage.icon className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                Comprehensive Manufacturing Capabilities
              </h2>
              <div className="grid gap-4">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center space-x-3 text-lg"
                  >
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8" size="lg">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80"
                alt="Manufacturing facility"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}