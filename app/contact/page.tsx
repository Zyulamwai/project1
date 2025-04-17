import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    description: "Guangdong Province, China",
    details: "Manufacturing facility: 30,000 m²",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "+86 123 4567 8900",
    details: "Mon-Fri from 8am to 6pm GMT+8",
  },
  {
    icon: Mail,
    title: "Email",
    description: "info@hongqing.com",
    details: "24/7 support for urgent inquiries",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "Within 24 hours",
    details: "Quick quotes for standard parts",
  },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Request a quote or discuss your project requirements with our team.
              We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <Card key={info.title}>
                <CardContent className="pt-6">
                  <info.icon className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold">{info.title}</h3>
                  <p className="mb-2">{info.description}</p>
                  <p className="text-sm text-muted-foreground">{info.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Request a Quote</h2>
              <p className="text-muted-foreground">
                Fill out the form below with your project details and requirements.
                Our team will review and respond with a detailed quote.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}