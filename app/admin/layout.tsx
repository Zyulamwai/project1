"use client";

import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Box, FileText, MessageSquare, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarNavItems = [
  {
    title: "Case Studies",
    href: "/admin/case-studies",
    icon: Box,
  },
  {
    title: "Articles",
    href: "/admin/articles",
    icon: FileText,
  },
  {
    title: "FAQs",
    href: "/admin/faqs",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <ScrollArea className="py-6 pr-6 lg:py-8">
            <h2 className="mb-4 px-2 text-lg font-semibold tracking-tight">
              Dashboard
            </h2>
            <nav className="grid items-start gap-2">
              {sidebarNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                >
                  <Button
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Button>
                </Link>
              ))}
            </nav>
          </ScrollArea>
        </aside>
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
    </div>
  )
}