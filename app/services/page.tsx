import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Settings, PenTool, Paintbrush, PackageCheck, Microscope, ArrowRight, CheckCircle } from "lucide-react";

const equipmentList = [
  {
    icon: Factory,
    title: "Injection Molding",
    description: "State-of-the-art injection molding machines",
    specs: [
      "75 machines from 80T to 1200T",
      "Automated material handling",
      "Real-time production monitoring",
    ],
  },
  {
    icon: PenTool,
    title: "Tooling Workshop",
    description: "Complete in-house mold making facility",
    specs: [
      "CNC machining centers",
      "Wire-cutting machines",
      "EDM equipment",
    ],
  },
  {
    icon: Paintbrush,
    title: "Surface Treatment",
    description: "Comprehensive finishing capabilities",
    specs: [
      "Automated painting lines",
      "UV coating equipment",
      "Silk-screen printing",
    ],
  },
  {
    icon: PackageCheck,
    title: "Assembly Lines",
    description: "Professional product assembly services",
    specs: [
      "Clean room assembly",
      "Automated testing",
      "Packaging solutions",
    ],
  },
];

const qualityControls = [
  {
    icon: Settings,
    title: "Process Control",
    points: [
      "Statistical process control (SPC)",
      "Real-time monitoring systems",
      "Preventive maintenance program",
    ],
  },
  {
    icon: Microscope,
    title: "Quality Inspection",
    points: [
      "3D coordinate measuring machine",
      "Optical measuring instruments",
      "Material testing equipment",
    ],
  },
];

const certifications = [
  "ISO 9001:2015 Quality Management System",
  "IATF 16949 Automotive Quality Management",
  "ISO 14001 Environmental Management",
  "FDA Registered Facility",
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold">Service Capabilities</h1>
            <p className="text-xl text-muted-foreground">
              Advanced manufacturing equipment and comprehensive quality control
              systems to ensure superior product quality.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Manufacturing Equipment</h2>
            <p className="text-muted-foreground">
              State-of-the-art machinery for precision manufacturing
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {equipmentList.map((equipment) => (
              <Card key={equipment.title}>
                <CardContent className="pt-6">
                  <equipment.icon className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold">{equipment.title}</h3>
                  <p className="mb-4 text-muted-foreground">
                    {equipment.description}
                  </p>
                  <ul className="space-y-2 text-sm">
                    {equipment.specs.map((spec) => (
                      <li key={spec} className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Quality Assurance</h2>
            <p className="text-muted-foreground">
              Comprehensive quality control throughout the manufacturing process
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {qualityControls.map((control) => (
              <Card key={control.title}>
                <CardContent className="p-6">
                  <div className="mb-6 flex items-center space-x-4">
                    <control.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">{control.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {control.points.map((point) => (
                      <li key={point} className="flex items-start space-x-3">
                        <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Our Certifications</h2>
            <p className="text-muted-foreground">
              International quality standards and certifications
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center space-x-3 rounded-lg bg-background p-4"
              >
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg">
              Request Custom Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}