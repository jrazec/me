"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Palette, Smartphone, Globe, Zap, Shield, Globe2, GlobeIcon } from "lucide-react"

const services = [
  {
    icon: Globe2,
    title: "Business Website",
    description: "Boost your business with a conversion-driven website that’s easy to update and manage.",
    features: [
      "Responsive Custom Design",
      "Up to 8 Pages",
      "Integrated CMS",
      "Custom Domain Setup",
      "1 Month Free Support"
    ],
    pricing: "Starting at $249",
    popular: false,
  },

  {
    icon: Globe,
    title: "Professional Portfolio Website",
    description: "Showcase your work with a sleek, responsive portfolio designed to impress and engage.",
    features: [
      "Responsive Custom Design",
      "Up to 3 Pages",
      "Fast & Accessible",
      "Domain & Hosting Guidance",
      "Deployment Support"
    ],
    pricing: "Starting at $79",
    popular: true,
  },

  {
    icon: GlobeIcon,
    title: "Elite Custom Web Solutions",
    description: "Get a fully tailored, premium website or app built to elevate your brand and user experience.",
    features: [
      "Bespoke Design & Development",
      "Desired Pages & Features",
      "E-Commerce or Custom Apps",
      "Advanced SEO & Performance",
      "Ongoing Support & Management"
    ],
    pricing: "Starting at $499",
    popular: false,
  },
];



export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 px-6 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-white">Services & Pricing</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive development services tailored to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${service.popular
                ? "border-cyan-500 shadow-lg shadow-cyan-500/20"
                : "border-gray-700 hover:border-cyan-500/50"
                }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <service.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-4">{service.pricing}</div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-500 text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-cyan-600 transition-all duration-200">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Need Something Custom?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Every project is unique. Let's discuss your specific requirements and create a tailored solution that
              perfectly fits your needs and budget.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200">
              Schedule a Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
