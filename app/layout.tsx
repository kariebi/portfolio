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
  title: "Daukariebi Michael Soroh — Full-Stack Engineer",
  description:
    "Full-stack engineer building production web and mobile products with TypeScript, React, Next.js, React Native, and scalable backend systems.",
  keywords: [
    "Full-Stack Engineer",
    "Software Engineer",
    "Next.js",
    "React Native",
    "NestJS",
    "React",
    "TypeScript Developer",
    "Mobile App Developer",
    "Web Developer",
    "Realtime Systems",
  ],
  authors: [
    { name: "Daukariebi Michael Soroh", url: "https://kariebi.vercel.app" },
  ],
  creator: "Daukariebi Michael Soroh",
  openGraph: {
    title: "Daukariebi Michael Soroh | Full-Stack Engineer",
    description:
      "Production-focused engineer shipping polished web and mobile products across product UI, backend systems, and realtime infrastructure.",
    siteName: 'Michael "Kariebi" Soroh',
    images: [
      {
        url: "/og-image.png",
        alt: "Daukariebi Michael Soroh - Fullstack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daukariebi Michael Soroh | Full-Stack Engineer",
    description:
      "Building production-ready web and mobile products with TypeScript, React, Next.js, React Native, and scalable backend systems.",
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
