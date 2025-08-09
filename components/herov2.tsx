"use client"

import { motion } from "framer-motion"
import { ArrowDown, Sparkles, Code, Database, Cpu } from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"


export default function Hero() {
  const ref = useRef(null)
  const [showContacts, setShowContacts] = useState(false);
  
  const scrollDown = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  const devTiles = [
    "Virtual Assistant Expert", 
    "Business Process Optimizer", 
    "Digital Solutions Architect", 
    "Automation Specialist"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexDev((prev) => (prev + 1) % devTiles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [indexDev, setIndexDev] = useState<number>(0);

  // Floating particles for ambient tech atmosphere
  const particles = typeof window !== 'undefined' ? Array.from({ length: 15 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 211, 238, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 211, 238, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '60px 60px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        {/* Ambient Glow Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/4 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles}
        </div>
      </div>
      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">

          {/* Enhanced Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
              {/* Floating Tech Icons */}
              <motion.div
                className="absolute -top-6 -left-6 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-cyan-400/20 shadow-lg"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Code className="w-6 h-6 text-cyan-400" />
              </motion.div>
              
              <motion.div
                className="absolute -top-2 -right-8 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-cyan-400/20 shadow-lg"
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Database className="w-6 h-6 text-cyan-400" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -right-6 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-cyan-400/20 shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-8 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-cyan-400/20 shadow-lg"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <Cpu className="w-6 h-6 text-cyan-400" />
              </motion.div>

              {/* Main Profile Glass Container */}
              <motion.div
                className="relative w-full h-full rounded-3xl bg-white/5 backdrop-blur-md border border-white/20 overflow-hidden shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* Rotating Glow Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-70"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, rgba(34, 211, 238, 0.4), transparent, rgba(34, 211, 238, 0.2), transparent)',
                    padding: '1px'
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="w-full h-full rounded-3xl bg-black/40" />
                </motion.div>

                {/* Profile Image */}
                <div className="relative z-10 w-full h-full p-6">
                  <Image
                    src="/rzc.png"
                    alt="RAZEC - Virtual Assistant Expert"
                    fill
                    className="rounded-2xl object-cover"
                    priority
                  />
                </div>

                {/* Floating Glass Elements */}
                <motion.div
                  className="absolute top-6 right-6 w-12 h-12 bg-cyan-400/10 backdrop-blur-sm rounded-xl border border-cyan-400/30"
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30"
                  animate={{
                    y: [0, -4, 0],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>
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
              className="relative p-8 lg:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {/* Animated Glow Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent opacity-50"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ 
                  maskImage: 'linear-gradient(90deg, transparent, black, transparent)',
                  WebkitMaskImage: 'linear-gradient(90deg, transparent, black, transparent)'
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Status Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="mb-6"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-sm font-medium">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                    />
                    Available for Projects
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
                >
                  <span className="text-white/70 font-light block mb-2">Hi, I'm</span>
                  <motion.span 
                    className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-white bg-clip-text text-transparent block"
                    style={{
                      backgroundSize: '200% 100%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '200% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
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
                  className="text-xl lg:text-2xl xl:text-3xl font-light text-gray-300 mb-8 h-20 flex items-center"
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
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="text-lg lg:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl"
                >
                  Transforming businesses through{" "}
                  <motion.span
                    className="text-cyan-300 font-semibold relative inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    intelligent automation
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-300"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 2 }}
                    />
                  </motion.span>
                  , strategic insights, and seamless digital workflows that drive{" "}
                  <motion.span
                    className="text-white font-semibold"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                  >
                    measurable results
                  </motion.span>
                  .
                </motion.p>

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
                      Let's Collaborate
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
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

        {/* Scroll Down Indicator */}
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
      </div>
    </section>
  );
}



  {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-sm font-medium">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-cyan-400 rounded-full"
                  />
                  Available for Projects
                </span>
              </motion.div>