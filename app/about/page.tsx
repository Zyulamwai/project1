import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Building2,
  Factory,
  Globe2,
  Users,
  CheckCircle,
  Timer,
} from "lucide-react";

const milestones = [
  {
    year: "2000",
    title: "Company Founded",
    description: "Started with 5 injection molding machines",
  },
  {
    year: "2005",
    title: "ISO 9001 Certification",
    description: "Achieved quality management certification",
  },
  {
    year: "2010",
    title: "Facility Expansion",
    description: "Expanded to 30 injection molding machines",
  },
  {
    year: "2015",
    title: "Global Market Entry",
    description: "Started serving European and American markets",
  },
  {
    year: "2020",
    title: "Advanced Manufacturing",
    description: "Implemented smart factory solutions",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "75 machines and growing global presence",
  },
];

const certifications = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    description: "Quality Management System",
  },
  {
    icon: Globe2,
    title: "CE Certification",
    description: "European Market Compliance",
  },
  {
    icon: Building2,
    title: "FDA Registration",
    description: "US Medical Device Manufacturing",
  },
  {
    icon: Factory,
    title: "IATF 16949",
    description: "Automotive Quality Management",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold">
                25 Years of Manufacturing Excellence
              </h1>
              <p className="mb-6 text-xl text-muted-foreground">
                From our humble beginnings to becoming a leading manufacturer,
                we've maintained our commitment to quality and innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>75 injection molding machines (80-1200T)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>30,000 m² manufacturing facility</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>500+ skilled employees</span>
                </div>
              </div>
              <Button className="mt-8" size="lg">
                View Our Capabilities
              </Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1581092334247-ddef2a41a4f7?auto=format&fit=crop&q=80"
                alt="Manufacturing facility"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="border-t bg-muted py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Journey</h2>
            <p className="text-muted-foreground">
              A timeline of growth and innovation
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex flex-col md:flex-row">
                  <div className={cn(
                    "flex w-full md:w-1/2",
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start md:order-2"
                  )}>
                    <div className="relative ml-12 w-full pl-0 pr-4 md:mx-4 md:w-auto md:min-w-[300px] md:max-w-[400px]">
                      <div className="absolute -left-12 top-3 flex h-6 w-6 items-center justify-center rounded-full border bg-background md:-left-[52px]">
                        <Timer className="h-4 w-4 text-primary" />
                      </div>
                      <Card>
                        <CardContent className="p-4">
                          <div className="mb-2 flex items-center space-x-2">
                            <span className="font-semibold">{milestone.year}</span>
                          </div>
                          <h3 className="mb-1 text-base font-semibold">
                            {milestone.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Certifications</h2>
            <p className="text-muted-foreground">
              Internationally recognized quality standards
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <Card key={cert.title}>
                <CardContent className="pt-6">
                  <cert.icon className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold">{cert.title}</h3>
                  <p className="text-muted-foreground">{cert.description}</p>
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