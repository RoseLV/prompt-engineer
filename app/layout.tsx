import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Finance Risk Dashboard",
  description: "A polished, responsive fintech dashboard showing risk profiles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="finance-dashboard-theme">
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 bg-[hsl(var(--background))]">
              <div className="container py-8">{children}</div>
            </main>
            <footer className="border-t">
              <div className="container py-6 text-sm text-muted-foreground">
                © {new Date().getFullYear()} Personal Finance Risk Dashboard
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}


