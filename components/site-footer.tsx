"use client";

import Link from "next/link";
import { Factory, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Certifications", href: "/about#certifications" },
    { name: "Equipment", href: "/about#equipment" },
    { name: "News", href: "/news" },
  ],
  products: [
    { name: "Injection Molding", href: "/products#molding" },
    { name: "Custom Tooling", href: "/products#tooling" },
    { name: "Case Studies", href: "/products#cases" },
    { name: "Gallery", href: "/products#gallery" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "RFQ", href: "/contact#quote" },
    { name: "Technical Support", href: "/contact#support" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted">
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <Factory className="h-6 w-6" />
              <span className="font-bold">Hongqing Plastic & Tooling</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              25 years of excellence in plastic injection molding and custom tooling solutions.
              ISO 9001 certified manufacturer serving global brands.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Guangdong, China</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4" />
                <span>+86 123 4567 8900</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@hongqing.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Products</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Support</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Separator />
      <div className="container py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Hongqing Plastic & Tooling. All rights reserved.
          </p>
          <Button variant="outline" size="sm">
            <Phone className="mr-2 h-4 w-4" />
            Request a Quote
          </Button>
        </div>
      </div>
    </footer>
  );
}