"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center space-x-2">
            <span>©{new Date().getFullYear()} Kariebi Michael Soroh</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Full Stack Engineer • Nigeria
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
