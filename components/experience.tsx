"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      company: "Codetratives",
      position: "Lead Full Stack Engineer",
      period: "04/2025 - Present",
      location: "Remote",
      highlights: [
        "Led fullstack development on multiple international projects",
        "Integrated Convex for real-time chat and lightweight-charts for financial data",
        "Architected AI-powered modules for market sentiment analysis",
        "Completed 3 high-priority milestones in 10 days (originally 4 weeks)",
        "Boosted team velocity by 40% while mentoring junior Engineers",
      ],
      technologies: ["React", "Next.js", "FastAPI", "TypeScript", "Python", "Convex", "AI/ML"],
    },
    {
      company: "Musigwe Labs",
      position: "Lead Frontend Web3 / Mobile Engineer",
      period: "06/2023 - Present",
      location: "Remote",
      highlights: [
        "Integrated biometric auth and Flutterwave payments in React Native apps",
        "Delivered smart-contract-powered Web3 apps on COTI blockchain",
        "Increased user engagement by 35% through Telegram web apps",
        "Improved blockchain wallet reliability by 99%",
        "Deployed applications on bare-metal Linux servers via SSH",
      ],
      technologies: ["React Native", "Web3", "PM2", "Nginx", "Next.js", "COTI", "Telegram", "Linux"],
    },
    {
      company: "Homiee.AU",
      position: "Frontend Engineer",
      period: "06/2024 - 07/2025",
      location: "Remote",
      highlights: [
        "Launched a geolocation-based homeowner claims feature, driving 10% user growth",
        "Revamped the UI design system, resulting in 30% increase in user satisfaction",
        "Implemented responsive design patterns for better mobile experience",
        "Collaborated with Australian team across different time zones",
      ],
      technologies: ["React", "TypeScript", "Geolocation API", "UI/UX", "Design Systems"],
    },
    {
      company: "Abinci.ng",
      position: "Lead Frontend Engineer",
      period: "11/2023 - 07/2025",
      location: "Remote",
      highlights: [
        "Rebuilt over 12 major UI pages and fixed 1,000+ bugs",
        "Improved user retention through enhanced UX",
        "Mentored junior engineers, increasing deployment speed by 30%",
      ],
      technologies: ["React", "Frontend", "UI/UX", "Mentoring"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 mx-auto mb-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-8"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -z-10" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-gray-400 dark:bg-gray-500 rounded-full border-4 border-white dark:border-gray-900" />

              <Card className="ml-12 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</CardTitle>
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-1">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
