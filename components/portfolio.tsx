"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern, full-stack e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management SaaS",
    description:
      "A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description:
      "An intelligent analytics platform that provides actionable insights through machine learning algorithms.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Vue.js", "Python", "TensorFlow", "D3.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Mobile Banking App",
    description:
      "A secure and user-friendly mobile banking application with biometric authentication and real-time transactions.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "Node.js", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="portfolio" className="py-20 px-6 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-white">Featured Projects</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise across different technologies and industries
          </p>
        </motion.div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
            >
              <div className={`relative group ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative overflow-hidden rounded-xl border border-gray-700">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                {project.featured && (
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-cyan-500 text-white text-sm rounded-full">
                    Featured Project
                  </span>
                )}

                <h3 className="text-3xl font-serif font-semibold text-white">{project.title}</h3>

                <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>

                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                  >
                    <Github size={18} />
                    <span>View Code</span>
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
