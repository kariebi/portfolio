"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { ThemeProvider } from "next-themes"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <Header />

        <motion.div style={{ opacity }} className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-black opacity-50" />
        </motion.div>

        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
