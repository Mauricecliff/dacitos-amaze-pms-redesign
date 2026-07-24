import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amaze PMS – India's Premier Property Management Company",
  description:
    "Amaze PMS Pvt Ltd offers comprehensive integrated facility management services across India including Security, Housekeeping, MEP, Pest Control, Gardening, Swimming Pool Maintenance and more. 15,000+ professionals, 20M+ sq ft managed.",
  keywords: [
    "property management Hyderabad",
    "facility management India",
    "housekeeping services",
    "security services Hyderabad",
    "MEP services",
    "pest control",
    "Amaze PMS",
    "integrated facility management",
  ],
  authors: [{ name: "Amaze Property Management Solutions Pvt Ltd" }],
  openGraph: {
    title: "Amaze PMS – India's Premier Property Management Company",
    description:
      "Comprehensive integrated facility management — Security, Housekeeping, MEP, Pest Control and more. Serving 100+ clients across India.",
    type: "website",
    locale: "en_IN",
    siteName: "Amaze PMS",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amaze PMS – India's Premier Property Management Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaze PMS – India's Premier Property Management Company",
    description:
      "Comprehensive integrated facility management. 15,000+ professionals. 20M+ sq ft managed. PAN India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#030712" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-[#030712] text-slate-100 antialiased font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
