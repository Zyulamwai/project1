"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Factory, Phone } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products & Cases", href: "/products" },
  { name: "Service Capabilities", href: "/services" },
  { name: "News & Insights", href: "/news" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <div className="mr-8 flex items-center space-x-2">
          <Factory className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">
            Hongqing Plastic & Tooling
          </span>
        </div>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.href ? "text-foreground" : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <Phone className="mr-2 h-4 w-4" />
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
}