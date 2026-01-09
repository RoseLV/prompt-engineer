"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const products: Array<{ href: string; name: string; risk: string; desc: string }> = [
    { href: "/savings", name: "Savings", risk: "Low", desc: "High liquidity, principal protection, but limited returns." },
    { href: "/bonds", name: "Bonds", risk: "Low-Medium", desc: "Fixed income with moderate risk and predictable returns." },
    { href: "/index-funds", name: "Index Funds", risk: "Medium", desc: "Broad market exposure with balanced risk/return." },
    { href: "/crypto", name: "Crypto", risk: "High", desc: "High volatility with potential for outsized gains or losses." },
  ];
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Personal Finance Risk Dashboard</h1>
        <p className="text-muted-foreground">
          Explore products by risk profile. Adjust horizons to see projected returns.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <Link key={p.href} href={p.href as any}>
            <Card className="hover:shadow-soft transition-shadow h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{p.name}</CardTitle>
                  <Badge variant="outline">{p.risk}</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{p.desc}</CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}


