"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Expertise", href: "#expertise" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? " backdrop-blur-sm border-b border-gray-800 rounded-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 pt-5 pb-2">
      <div className="flex justify-between items-center">
        <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-4xl font-serif font-semibold cursor-pointer text-cyan-200/70"
        onClick={() => scrollToSection("#hero")}
        >
        razec
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <motion.button
          key={item.name}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          onClick={() => scrollToSection(item.href)}
          className={`text-xl text-gray-300 hover:text-cyan-400 transition-colors duration-200 ${
            isScrolled ? "" : ""
          }`} 
          >
          {item.name}
          </motion.button>
        ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="md:hidden mt-4 pb-4"
        >
        {navItems.map((item) => (
          <button
          key={item.name}
          onClick={() => scrollToSection(item.href)}
          className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors duration-200"
          >
          {item.name}
          </button>
        ))}
        </motion.div>
      )}
      </div>
    </motion.nav>
  )
}
