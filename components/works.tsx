"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with React and Node.js, featuring a clean design and seamless user experience.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and intuitive drag-and-drop functionality.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Design System",
    description: "A comprehensive design system and component library used across multiple products and teams.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Storybook", "Figma", "CSS-in-JS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with interactive charts and location-based forecasts.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Works() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="works" className="py-20 px-6 bg-stone-100" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-stone-800">Selected Works</h2>
          <div className="w-24 h-0.5 bg-stone-300 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 text-stone-800">{project.title}</h3>

                <p className="text-stone-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-stone-100 text-stone-600 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>

                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
