"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Zap, Users, Trophy } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Code, label: "Years Experience", value: "9+" },
    { icon: Zap, label: "Performance Boost", value: "40%" },
    { icon: Users, label: "Team Velocity Increase", value: "40%" },
    { icon: Trophy, label: "Projects Delivered", value: "50+" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Versatile Full Stack Engineer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With about a decade of experience in building scalable, high-performance Web2 and Web3 applications, I
              specialize in architecting both frontend and backend systems using modern technologies like React/Next.js
              and Node.js/NestJS with TypeScript.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              My expertise spans from integrating complex systems and optimizing performance to leading cross-functional
              teams and mentoring junior Engineers. I consistently drive business value through secure, reliable, and
              maintainable solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Based in Imo State, Nigeria, I work with international clients and teams, delivering production-grade
              applications that exceed expectations and accelerate product delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="text-center p-6 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
                        <stat.icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
