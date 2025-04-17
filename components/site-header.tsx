"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products & Cases", href: "/products" },
  { name: "Service Capabilities", href: "/services" },
  { name: "News & Insights", href: "/news" },
  { name: "FAQ", href: "/faq" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // 点击外部时关闭下拉列表
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center px-4">
        {/* Logo */}
        <div className="flex-shrink-0 mr-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/hongqinglogo.svg"
              alt="Hongqing Logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="hidden sm:inline-block font-bold">
              Hongqing Plastic & Tooling
            </span>
          </Link>
        </div>

        {/* Desktop: 导航栏 + Contact 按钮 */}
        <div className="hidden lg:flex flex-1 items-center justify-end">
          <div className="flex-1 flex justify-center">
            <nav className="flex items-center space-x-6 text-sm font-medium whitespace-nowrap">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="ml-4">
            <Link href="/contact">
              <Button variant="outline" size="sm">
                <Phone className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile: 始终显示 Contact 按钮 和 汉堡菜单 */}
        <div className="flex items-center space-x-2 lg:hidden ml-auto">
          <Link href="/contact">
            <Button variant="outline" size="sm">
              <Phone className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </Link>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown：仅收起导航项，添加平滑统一的非线性过渡效果 */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden border-t bg-background transition-[max-height] duration-700 ease-out overflow-hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div
          className={`flex flex-col p-4 space-y-2
            transition-opacity duration-700 ease-out
            ${open ? "opacity-100" : "opacity-0"}`}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block transition-colors hover:text-foreground/80",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}