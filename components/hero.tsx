"use client"

import { motion } from "framer-motion"
import { ArrowDown, Sparkles, Code, Database } from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import Cursor from "./ui/cursor"


export default function Hero() {

  const ref = useRef(null)
  const [showContacts, setShowContacts] = useState(false);
  const scrollDown = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  const devTiles = ["A Fullstack Developer", "A Business Analyst", "A Leader", "A Problem Solver"];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexDev((prev) => (prev + 1) % devTiles.length);
    }, 2250);
    return () => clearInterval(interval);
  }, []);

  const [indexDev, setIndexDev] = useState<number>(0);

  // Floating particles for ambient tech atmosphere
  const particles = typeof window !== 'undefined' ? Array.from({ length: 15 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-cyan-200/70 rounded-full"
      initial={{
        x: Math.random() * (window?.innerWidth || 1920),
        y: Math.random() * (window?.innerHeight || 1080),
        scale: 0
      }}
      animate={{
        y: [null, -150, -300],
        opacity: [0, 0.8, 0],
        scale: [0, 1.2, 0],
      }}
      transition={{
        duration: Math.random() * 4 + 3,
        repeat: Infinity,
        delay: Math.random() * 3,
        ease: "easeOut"
      }}
    />
  )) : [];

  return (

    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles}
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-[45%_55%] gap-12 items-center">


        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center pt-36 md:pt-0"
        >
          <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
            {/* Background Glow */}
            <motion.div
              className="absolute top-10 left-10 inset-0 rounded-[5rem] w-[80%] h-[80%] z-[0] border-8 border-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: 1
              }}
              transition={{
                opacity: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                },
                scale: {
                  duration: 1.2,
                  ease: "easeOut",
                  delay: 0.5
                }
              }}
            >
              {/* Glowing Inner Circle */}
              <motion.div
                className="absolute inset-0 w-full h-full rounded-full opacity-0 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)] z-[1]"
                animate={{
                  opacity: [0.5, 0.7, 1, 0.7, 0.5],
                  scale: [0.7, 1.01, 1.01, 1.01, 0.7]
                }}
                transition={{
                  opacity: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.2, 0.5, 0.8, 1]
                  },
                  scale: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1]
                  }
                }}
              >
                <div className="w-full h-full rounded-[5rem] bg-cyan-600" />
              </motion.div>
            </motion.div>


            {/* Glassess */}
            <motion.div
              className="absolute z-[5] top-7 right-10 w-24 h-56 bg-white/5 backdrop-blur-sm rounded-xl border border-white/30"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                opacity: { duration: 0.8, delay: 1.0 },
                y: {
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.6
                },
                rotate: {
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.6
                }
              }}
            ></motion.div>
            <motion.div
              className="absolute z-10 bottom-20 left-4 w-24 h-40 bg-white/5 backdrop-blur-sm rounded-xl border border-white/30"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, -4, 0],
                rotate: [0, 4, 0]
              }}
              transition={{
                opacity: { duration: 0.8, delay: 1.0 },
                y: {
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.8
                },
                rotate: {
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.8
                }
              }}
            ></motion.div>
            <motion.div
              className="absolute z-10 bottom-4 right-8 w-40 h-24 bg-white/5 backdrop-blur-sm rounded-xl border border-white/30"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, -12, 0],
                rotate: [0, 6, 0]
              }}
              transition={{
                opacity: { duration: 0.8, delay: 1.0 },
                y: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2.0
                },
                rotate: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2.0
                }
              }}
            ></motion.div>
            <motion.div
              className="absolute z-10 top-12 left-8 w-20 h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/30"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, -6, 0],
                rotate: [0, 3, 0]
              }}
              transition={{
                opacity: { duration: 0.8, delay: 1.0 },
                y: {
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2.2
                },
                rotate: {
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2.2
                }
              }}
            ></motion.div>


            <Image
              src="/rzc.png"
              alt="rzc"
              fill
              className="rounded-sm object-cover relative z-[5]"
              style={{ inset: "-0.7rem 0 0 0 " }}
            />

          </div>
        </motion.div>

        {/* Glassmorphism Text Content Container */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="order-1 lg:order-2"
        >
          {/* Main Glass Container */}
          <motion.div
            className="relative"
          >



            {/* Content */}
            <div className="relative z-10 bg-white/10 p-5 border-white/10 border-2 rounded-3xl backdrop-blur-sm shadow-2xl shadow-white/10 overflow-hidden">
             
              <div className="absolute border-b-2 border-r-2 border-t-0 border-l-0 border-b-white/40 border-r-white/30 w-full h-full rounded-br-3xl pointer-events-none z-10"></div>
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="font-bold leading-tight"
              >
                <span className="text-gray-200 font-light text-3xl lg:text-5xl xl:text-6xl ">Hi, I'm </span>
                <motion.span
                  className="relative bg-clip-text text-transparent text-4xl lg:text-6xl xl:text-7xl"
                  style={{
                    backgroundImage: `
                    /* Moving gleam layer */
                    linear-gradient(90deg,
                      rgba(255,255,255,0) 45%,
                      rgba(255,255,255,0.7) 50%,
                      rgba(255,255,255,0) 55%
                    ),
                    /* Base glassy cyan gradient */
                    linear-gradient(to right, #00e5ff, #5ffbf1, #00e5ff)
                  `,
                    backgroundSize: '200% 100%',
                    textShadow: '0 1px 6px rgba(0, 229, 255, 0.4)' // subtle glow
                  }}
                  animate={{
                    backgroundPosition: ['-150% 50%', '150% 50%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  RAZEC
                </motion.span>


              </motion.h1>

              {/* Dynamic Role Display */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="text-xl lg:text-2xl xl:text-3xl  text-gray-400 mb-5 h-12 flex items-center "
              >
                <motion.span
                  key={indexDev}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="block bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent"
                >
                  {devTiles[indexDev]}
                </motion.span>
              </motion.div>


              {/* Enhanced Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="text-lg lg:text-[1.40rem] text-white/70 leading-relaxed mb-10 max-w-xl"
              >
                Providing {" "}
                <motion.span
                  className="text-cyan-300/80 font-semibold "
                  whileHover={{ scale: 1.05 }}
                >
                  tech-savvy
                </motion.span>
                {" "}
                <motion.span
                  className="text-white/90 font-semibold relative inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  insight
                </motion.span>
                , grounded with {" "}
                <motion.span
                  className="text-white/90 relative inline-block italic"
                  whileHover={{ scale: 1.05 }}
                >
                  focus
                </motion.span>
                , and fueled by {" "}
                <motion.span
                  className="text-white relative inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  solving
                </motion.span>
                {" "}
                <motion.span
                  className="text-white/90 relative font-semibold"
                >
                  real-world challenges.
                </motion.span>

                <div className="h-5"></div>
                <span className="text-white">Let's turn </span>
                <motion.span
                  className="text-white font-semibold relative inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  your ideas
                </motion.span>
                {" "} <span className="text-white"> into </span> {" "}
                <motion.span
                  className="text-white font-bold relative"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.5 }}
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.6)) drop-shadow(0 0 20px rgba(34, 211, 238, 0.3))',
                    textShadow: '0 0 5px rgba(34, 211, 238, 0.3), 0 0 10px rgba(34, 211, 238, 0.1)'
                  }}
                >
                  reality
                </motion.span>
                .
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.7 }}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                {/* Primary CTA */}
                <motion.button
                  className="group relative px-8 py-4 rounded-2xl font-semibold text-lg overflow-hidden text-white"
                  style={{
                    background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.9), rgba(59, 130, 246, 0.7))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(34, 211, 238, 0.5)',
                    boxShadow: '0 8px 32px rgba(34, 211, 238, 0.2)'
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(34, 211, 238, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />

                  <span className="relative z-10 flex items-center gap-3">
                    Collaborate with me
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >

                    </motion.span>
                  </span>
                </motion.button>

                {/* Secondary CTA */}
                <motion.button
                  className="group relative px-8 py-4 rounded-2xl font-semibold text-lg overflow-hidden text-cyan-300 border border-cyan-400/30"
                  style={{
                    background: 'rgba(34, 211, 238, 0.05)',
                    backdropFilter: 'blur(20px)'
                  }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'rgba(34, 211, 238, 0.6)',
                    boxShadow: "0 20px 40px rgba(34, 211, 238, 0.15)",
                    background: 'rgba(34, 211, 238, 0.1)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full"
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">View Portfolio</span>
                </motion.button>
              </motion.div>

              {/* Enhanced Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.9 }}
                className="flex gap-4"
              >
                {[
                  { href: "https://linkedin.com/in/johnrazeca", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", color: "hover:bg-blue-600/20", label: "LinkedIn" },
                  { href: "https://m.me/johnrazeca", icon: "M12 0C5.373 0 0 4.975 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.13 3.26L19.752 8.1l-6.561 6.863z", color: "hover:bg-blue-500/20", label: "Messenger" },
                  { href: "mailto:johnrazeca@gmail.com", icon: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v.545L12 10.455l6.545-6.089v-.545h3.819c.904 0 1.636.732 1.636 1.636z", color: "hover:bg-red-500/20", label: "Email" },
                  { href: "https://github.com/johnrazeca", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", color: "hover:bg-gray-600/20", label: "GitHub" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white/70 transition-all duration-300 ${social.color}`}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      boxShadow: "0 15px 30px rgba(34, 211, 238, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.1 + index * 0.1 }}
                    aria-label={social.label}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>



      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollDown}
          className="p-3 rounded-full hover:bg-white/10 transition-colors duration-200"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <ArrowDown size={24} className="text-gray-400" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}
