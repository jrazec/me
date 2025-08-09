"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Linkedin, Github, Twitter, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const socialLinks = [
  { name: "Email", icon: Mail, href: "mailto:jane@example.com", color: "hover:text-red-400" },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-400" },
  { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-300" },
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-300" },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-white">Let's Talk</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-semibold text-white">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-500 hover:from-cyan-600 hover:to-cyan-600 text-white py-3 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm always excited to work on new projects and collaborate with amazing people. Whether you have a clear
                vision or just an idea, let's discuss how we can bring it to life.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">jane@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Available for freelance work</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
              <h4 className="text-xl font-semibold mb-6 text-white">Connect With Me</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-3 p-4 bg-gray-700 rounded-lg text-gray-300 transition-colors duration-200 ${link.color}`}
                  >
                    <link.icon size={20} />
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-900/30 p-8 rounded-xl border border-cyan-700/50">
              <h4 className="text-xl font-semibold mb-4 text-white">Quick Response</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                I typically respond to all inquiries within 24 hours. For urgent projects, feel free to reach out via
                LinkedIn or email directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
