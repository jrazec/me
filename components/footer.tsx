"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 px-6 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-gray-400">Crafted with</span>
            <Heart size={16} className="text-red-400 fill-current" />
            <span className="text-gray-400">by Jane Doe</span>
          </div>

          <p className="text-gray-500 mb-6">© {new Date().getFullYear()} Jane Doe. All rights reserved.</p>

          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-4">Built with Next.js, TypeScript, TailwindCSS & Framer Motion</p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-500 text-white rounded-full hover:from-cyan-600 hover:to-cyan-600 transition-all duration-200"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
