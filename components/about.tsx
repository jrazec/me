"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Coffee, Heart, Code2 } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const experiences = [
    {
      role: "Project Management Lead",
      short: "Leading multiple project managers using Blue for coordination.",
      details: `Conducts meetings via Zoom and Outlook, oversees timelines, 
                coordinates deliverables, and ensures cross-functional collaboration 
                to meet project milestones efficiently.`,
    },
    {
      role: "Student Organization President",
      short: "Managed 20+ officers and 400+ members.",
      details: `Organized campus-wide events, handled finance, creatives, documentation, 
                and community partnerships. Managed social media pages, email communications, 
                and project workflows via Trello and Google Workspace.`,
    },
    {
      role: "Web Development Intern (Startup)",
      short: "Developed e-commerce admin systems.",
      details: `Built account management, product/category CRUD, authentication systems, 
                and optimized the admin interface for smooth business operations.`,
    },
    {
      role: "Business Analytics Student",
      short: "Data management, automation, and analysis.",
      details: `Experienced in Google Sheets automation, database management, 
                and extracting actionable insights for decision-making.`,
    },
  ];
  return (
    <section
      id="about"
      className="py-20 px-6  backdrop-blur-sm bg-gradient-to-b from-white/5 via-black/5 to-black/30 relative rounded-t-2xl border-t-gray-500/20 border-t-2 z-20"
      ref={ref}
    >
      {/* <div className="absolute inset-0 w-full top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div> */}
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
            <p className="text-lg text-gray-300 leading-relaxed text-justify">
              A Bachelor of Science in Information Technology major in Business Analytics with a knack for turning ideas into
              organized, tech-powered solutions. With experience in full-stack web development,
              project management, and leadership, I blend technical expertise with practical
              problem-solving.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed text-justify">
              From building and maintaining websites to creating automated dashboards, managing
              databases, and analyzing business data, I deliver precise, creative, and effective
              results. Oh, and I run best on coffee, programming marathons, and rainy days.
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

            {/* Experience Dropdown Cards */}
            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 transition-all cursor-pointer hover:border-cyan-500"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                      <p className="text-gray-400">{exp.short}</p>
                    </div>
                    <span className="text-cyan-400">
                      {openIndex === idx ? "▲" : "▼"}
                    </span>
                  </div>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 text-gray-300"
                    >
                      {exp.details}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
