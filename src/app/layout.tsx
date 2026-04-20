import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Primax Irrigation Pvt. Ltd. — Save Water. Grow More.",
  description:
    "India's trusted micro-irrigation company. Premium drip irrigation, sprinkler systems, HDPE pipes, and fittings for modern, water-efficient farming.",
  keywords:
    "drip irrigation, sprinkler system, HDPE pipes, micro irrigation, farming, agriculture, water saving",
  openGraph: {
    title: "Primax Irrigation Pvt. Ltd.",
    description: "Save Water. Grow More. Premium micro-irrigation solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
