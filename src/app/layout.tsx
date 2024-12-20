import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import { QueryProvider } from "@/providers/query-provider";
import { Banner } from "@/components/banner";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo App Test Task",
  description: "Take home todo app task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased bg-background text-foreground",
          inter.className
        )}
      >
        <QueryProvider>
          <Banner />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
