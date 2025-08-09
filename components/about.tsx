"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Coffee, Heart, Code2 } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      className="py-20 px-6 backdrop-blur-0 bg-gradient-to-b from-[rgba(0,0,0,0.32)] to-[rgba(32,32,32,0.32)] relative"
      ref={ref}
    >
      <div className="absolute top-0  left-0 w-full h-32 bg-gradient-to-b from-black/5 to-transparent pointer-events-none z-[0]"></div>
  
       <div className="absolute top-0 left-0 w-full h-[0.05rem] bg-gray-500/20 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-white">About Me</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer and UI/UX designer with over 5 years of experience creating digital
              solutions that make a difference. My journey began with a curiosity about how things work on the web, and
              it has evolved into a deep love for crafting experiences that users genuinely enjoy.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in the power of clean code, intuitive design, and meaningful user interactions. Every project I
              work on is an opportunity to solve real problems and create something beautiful that serves its purpose
              perfectly.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding or designing, you'll find me exploring new technologies, contributing to open-source
              projects, or enjoying a good book with a cup of coffee.
            </p>

            <div className="flex space-x-8 pt-6">
              <div className="flex items-center space-x-2">
                <Code2 className="w-6 h-6 text-cyan-400" />
                <span className="text-gray-300">Clean Code</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6 text-cyan-400" />
                <span className="text-gray-300">User-Centric</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee className="w-6 h-6 text-yellow-400" />
                <span className="text-gray-300">Coffee Lover</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="relative z-10 p-8 rounded-xl border border-gray-700 bg-gray-800/30 backdrop-blur-sm mix-blend-overlay">
              <h3 className="text-2xl font-semibold mb-4 text-white">My Approach</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>User research and understanding come first</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Design with accessibility and performance in mind</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Write maintainable, scalable code</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Continuous learning and improvement</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 p-6 rounded-xl border border-cyan-700/50 backdrop-blur-sm mix-blend-overlay">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-cyan-300">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 p-6 rounded-xl border border-cyan-700/50 backdrop-blur-sm mix-blend-overlay">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-cyan-300">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
