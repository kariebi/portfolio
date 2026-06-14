import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kariebi.vercel.app"),
  title: "Daukariebi Michael Soroh — Full-Stack & Systems Engineer",
  description:
    "Senior Full-Stack Engineer architecting high-scale, type-safe web and mobile applications with TypeScript, Next.js, NestJS, and decentralized Web3 infrastructures.",
  keywords: [
    "Daukariebi Michael Soroh",
    "Kariebi",
    "Systems Architect",
    "Senior Full-Stack Engineer",
    "Next.js Developer",
    "React Native Expert",
    "NestJS backend",
    "TypeScript Type-Safety",
    "oRPC",
    "Redis Realtime Systems",
    "Web3 Blockchain Engineer",
    "COTI Network",
  ],
  authors: [
    { name: "Daukariebi Michael Soroh", url: "https://kariebi.vercel.app" },
  ],
  creator: "Daukariebi Michael Soroh",
  openGraph: {
    title: "Daukariebi Michael Soroh | Elite Systems & Full-Stack Engineer",
    description:
      "Architecting polished, high-throughput web and mobile products. Expert in Next.js, type-safe backend infrastructure, and scalable realtime data pipelines.",
    siteName: 'Michael "Kariebi" Soroh',
    images: [
      {
        url: "/og-image.png",
        alt: "Daukariebi Michael Soroh - Fullstack Systems Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daukariebi Michael Soroh | Full-Stack & Systems Architect",
    description:
      "Building high-performance web and mobile solutions with TypeScript, Next.js, and high-throughput real-time systems.",
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
