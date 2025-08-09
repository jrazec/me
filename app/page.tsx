"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Expertise from "@/components/expertise"
import About from "@/components/about"
import PortfolioComponent from "@/components/portfolio"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-[#070707] text-white"
        >

          <main>
            <Hero />
            <Navbar />
            <About />
            <Expertise />
            <PortfolioComponent />
            <Services />
            <Contact />
          </main>
          {/* BACKGROUND */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
            <motion.div
              className="absolute inset-0"
              style={{
              backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '5rem 5rem',
              }}

              animate={{
              backgroundPosition: ['0px 0px', '60px 60px'],
              }}
              transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
              }}
            />
            </div>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
