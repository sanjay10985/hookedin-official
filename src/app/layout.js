import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/AIGenerationProvider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/home/header";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Hook Generator For Linkedin",
  description:
    "Get AI-powered hooks that make your posts stand out. Turn scrollers into readers with powerful opening lines.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        <Providers>{children} </Providers>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
