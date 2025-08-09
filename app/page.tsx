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
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
