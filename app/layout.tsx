import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daukariebi Michael Soroh | Fullstack Web3 Engineer",
  description:
    "Results-driven fullstack and blockchain engineer building global-scale apps, AI-integrated systems, and real-time fintech tools using React, Next.js, NestJS, FastAPI and more.",
  keywords: [
    "Fullstack Developer",
    "Web3 Engineer",
    "Next.js",
    "NestJS",
    "React",
    "Blockchain",
    "Convex",
    "Realtime Systems",
    "AI Sentiment",
    "Crypto Apps",
    "Financial Tools",
    "TypeScript Developer",
    "OpenAI",
    "COTI Blockchain",
  ],
  authors: [{ name: "Daukariebi Michael Soroh", url: "https://kariebi.vercel.app" }],
  creator: "Daukariebi Michael Soroh",
  openGraph: {
    title: "Daukariebi Michael Soroh | Fullstack Web3 Engineer",
    description:
      "Expert in building high-performance fullstack Web3 applications. From real-time AI models to scalable backend APIs, I bring ideas to life.",
    siteName: "Michael \"Kariebi\" Soroh",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daukariebi Michael Soroh - Fullstack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daukariebi Michael Soroh | Fullstack Web3 Engineer",
    description:
      "Building future-proof digital experiences using Next.js, NestJS, Web3, AI, and real-time tech.",
    images: ["/og-image.png"],
    creator: "@kariebi._",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
