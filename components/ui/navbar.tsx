"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";

const items: Array<{ href: string; label: string }> = [
  { href: "/", label: "Overview" },
  { href: "/savings", label: "Savings" },
  { href: "/bonds", label: "Bonds" },
  { href: "/index-funds", label: "Index Funds" },
  { href: "/crypto", label: "Crypto" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-6 font-semibold">Personal Finance</div>
        <nav className="flex items-center gap-2 text-sm">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href as any}
                className={cn(
                  "rounded-md px-3 py-2 hover:bg-muted transition-colors",
                  active && "bg-muted font-medium"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <div className="text-sm text-muted-foreground">Risk Dashboard</div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}


