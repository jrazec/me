"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Palette, Database, Smartphone, Globe, Zap, FileSpreadsheet, HelpingHandIcon, Facebook, LucideFacebook, PersonStandingIcon, ChartAreaIcon, BarChart2Icon } from "lucide-react"

const expertise = [
  {
    name: "Data Entry",
    shortDesc: "Accurate, fast, and always secure.",
    icon: FileSpreadsheet,
    desc: "Detail-driven and spreadsheet-savvy. I handle numbers with precision, from budget tracking to organizing large datasets."
  },
  {
    name: "Admin Support",
    shortDesc: "Keeping your business organized.",
    icon: PersonStandingIcon,
    desc: "From file organization to day-to-day task handling, I bring reliable and detail-oriented support honed through real organizational operations and leadership roles."
  },
  {
    name: "Project Management",
    shortDesc: "Clarity and control, every step of the way.",
    icon: HelpingHandIcon,
    desc: "I coordinate tasks, teams, and timelines with a strong focus on execution, communication, and results—backed by hands-on experience managing events and digital projects."
  },
  {
    name: "Social Media Management",
    shortDesc: "Grow your presence, effortlessly.",
    icon: LucideFacebook,
    desc: "From planning content to engaging with audiences, I manage social platforms with consistency, clarity, and brand-aligned strategy."
  },
  {
    name: "Analytics & Reporting",
    shortDesc: "Understand what works — and why.",
    icon: BarChart2Icon,
    desc: "I turn raw data into clear insights through dashboards, reports, and visualizations—helping you make data-informed decisions with confidence."
  },
  {
    name: "Graphic Design",
    shortDesc: "Eye-catching visuals that speak.",
    icon: Palette,
    desc: "I create clean, effective visuals for online content, social media, and presentations—designs that communicate clearly, even without flashy extras."
  },

]

const applications = [
  { name: "Figma", shortDesc: "Design", icon: Palette },
  { name: "Adobe Creative Suite", shortDesc: "Design", icon: Palette },
  { name: "VS Code", shortDesc: "Development", icon: Code },
  { name: "Docker", shortDesc: "DevOps", icon: Zap },
  { name: "Git", shortDesc: "Version Control", icon: Code },
  { name: "Postman", shortDesc: "API Testing", icon: Smartphone },
]

export default function Expertise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (

    <section id="expertise" className="py-20 px-6 backdrop-blur-md bg-black z-50" ref={ref}>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold md:text-5xl font-sans mb-6 text-white">Expertise & Skills</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-white/30 via-cyan-300 to-white/30 mx-auto"></div>
          <p className="text-lg font-sans md:text-xl text-gray-500 mt-4 font-light">
            Reflections of what I bring
          </p>
        </motion.div>

        {/* expertise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[80%] mx-auto">
            {expertise.map((exp, index) => (
              <motion.div
                key={exp.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="relative cursor-default border-white/20 border-2  bg-gradient-to-br from-white/5 via-white/10 to-white/5 p-6 rounded-2xl backdrop-blur-lg hover:border-cyan-400/60 transition-all duration-300 group md:h-52 z-20"
                style={{
                  boxShadow: "0 0 0 1px #06B6D426",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "-0.1rem 0.1rem 1rem 0 #06B6D4B3, 0 0 0 1px #06B6D440"
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 0 0 1px #06B6D440"
                }}
              >

                {/* Hover image overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-10">
                  <img
                    src={`/${exp.name}.png`}
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                <div className="h-[10%] flex items-center gap-3 mb-4">
                  <div className="flex justify-center items-center">
                    <exp.icon className="w-8 h-8 text-cyan-600 group-hover:text-cyan-300 transition-colors drop-shadow-lg" />
                  </div>
                  <h3 className="text-cyan-500 font-semibold group-hover:text-cyan-200 text-xl transition-colors md:text-xl tracking-tight drop-shadow-lg">
                    {exp.name}
                  </h3>
                </div>
                <div className="h-[20%] flex items-center md:text-sm text-white text-base font-semibold mb-2 italic leading-snug">
                  {exp.shortDesc}
                </div>
                <div className="text-gray-200 text-md md:text-sm text-justify leading-relaxed font-light">
                  {exp.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Applications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-[80%] flex-col justify-center m-auto bg-white/5 border-2 border-white/5 p-10 rounded-3xl"
        >
          <h3 className="text-2xl font-semibold mb-8 text-white text-center">Tools & Applications</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {applications.map((app, index) => (
              <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className=" border-white/20 border-2 bg-cyan-400/5 p-4 rounded-2xl backdrop-blur-lg hover:border-cyan-400/60 transition-all duration-300 group z-10"
              style={{
                boxShadow: "0 0 0 1px #06B6D426",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                "-0.1rem 0.1rem 1rem 0 #06B6D4B3, 0 0 0 1px #06B6D440"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 0 0 1px #06B6D440"
              }}
              >
              <div className="flex flex-col items-center justify-center h-full">
                <app.icon className="w-8 h-8 text-cyan-600 mb-3 group-hover:text-cyan-300 transition-colors" />
                <h4 className="text-white font-semibold text-sm text-center">{app.name}</h4>
              </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
