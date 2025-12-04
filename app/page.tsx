"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { Moon, Sun, ChevronDown, ExternalLink, Github } from "lucide-react"
import type { Project } from "@/lib/projects"
import { useTheme } from "./theme-provider"
import razec_1 from "@/public/razec-1.png"
import razec_2 from "@/public/razec-2.png"
import razec_3 from "@/public/razec-3.png"

const bootSequence = [
  { tag: "SYS:init", message: "Initializing system frame" },
  { tag: "DB:schemas", message: "Loading service schemas" },
  { tag: "API:handshake", message: "Handshaking with PortfolioAPI" },
]

const metrics = [
  { label: "Bachelor's Degree", value: "Information Technology" },
  { label: "Major", value: "Business Analytics" },
  { label: "School", value: "Batangas State University - Lipa" },
  { label: "Current GWA", value: "1.2589" },
  { label: "Projects Completed", value: "12+" },
  { label: "Certification", value: "PHILNITS IP Passer" },
]

const techStack = [
  {
    title: "Backend",
    items: ["Node.js", "Django", "Laravel"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "Supabase", "MySQL", "SQLite", "MongoDB"],
  },
  {
    title: "ML / Vision",
    items: ["YOLOv11", "OpenCV", "Gemini API"],
  },
  {
    title: "Tools",
    items: ["Vercel", "Railway", "GitHub Actions"],
  },
]

const logs = [
  {
    title: "Lead Project Manager (Intern)",
    org: "Tech Executive Labs",
    period: "2024 - Present",
    description: "Led cross-functional teams in developing scalable web applications. Coordinated project timelines, managed client communications, and implemented agile methodologies to deliver high-quality software solutions.",
    achievements: ["Delivered 5+ projects on time", "Improved team efficiency by 30%", "Managed $50K+ project budgets"]
  },
  {
    title: "Associate Software Engineer Intern (Project-Based)",
    org: "Wavebiz",
    period: "2023 - 2024",
    description: "Developed and maintained backend systems using Node.js and Django. Collaborated with senior engineers to optimize database queries and implement RESTful APIs.",
    achievements: ["Reduced API response time by 40%", "Built 10+ REST endpoints", "Mentored 2 junior developers"]
  },
  {
    title: "President",
    org: "Tech Innovators Society",
    period: "2022 - 2023",
    description: "Led a student organization of 100+ members focused on technology innovation and education. Organized workshops, hackathons, and networking events.",
    achievements: ["Organized 15+ tech events", "Grew membership by 150%", "Established industry partnerships"]
  },
  {
    title: "Community Partnership Coordinator",
    org: "Tech Innovators Society",
    period: "2022 - 2023",
    description: "Led a student organization of 100+ members focused on technology innovation and education. Organized workshops, hackathons, and networking events.",
    achievements: ["Organized 15+ tech events", "Grew membership by 150%", "Established industry partnerships"]
  },
]

const contacts = [
  {
    label: "Email",
    value: "johnrazeca@gmail.com",
    href: "mailto:johnrazeca@gmail.com",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jrazec",
    href: "https://www.linkedin.com/in/jrazec",
    external: true,
  },
  {
    label: "Resume",
    value: "Download Resume",
    href: "/resume.pdf",
    external: false,
  },
]

export default function HomePage() {
  const router = useRouter()
  const { isDark, toggleTheme } = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const [bootComplete, setBootComplete] = useState(false)
  const [showMainContent, setShowMainContent] = useState(false)
  const [projects, setProjects] = useState<Project[]>([])
  const [loadingProjects, setLoadingProjects] = useState(true)
  const [expandedLog, setExpandedLog] = useState<number | null>(null)
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Check if this is the first load
    const hasVisited = sessionStorage.getItem('hasVisited')
    if (hasVisited) {
      setIsFirstLoad(false)
      setBootComplete(true)
      setShowMainContent(true)
      return
    }

    // Mark as visited for subsequent navigation
    sessionStorage.setItem('hasVisited', 'true')

    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= bootSequence.length - 1) {
          clearInterval(timer)
          setTimeout(() => {
            setBootComplete(true)
            setTimeout(() => setShowMainContent(true), 800)
          }, 400)
          return prev
        }
        return prev + 1
      })
    }, 900)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects")
        if (!res.ok) throw new Error("Failed to load projects")
        const data: Project[] = await res.json()
        setProjects(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoadingProjects(false)
      }
    }

    fetchProjects()
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section')
          if (sectionId) {
            setVisibleSections(prev => new Set(prev).add(sectionId))
          }
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('[data-section]')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [showMainContent])

  const bootProgress = useMemo(
    () =>
      bootSequence.map((step, index) => ({
        ...step,
        status:
          index < activeStep
            ? "ready"
            : index === activeStep
              ? bootComplete
                ? "ready"
                : "running"
              : "pending",
      })),
    [activeStep, bootComplete]
  )

  // Loading Screen
  if (!showMainContent) {
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ${isDark ? 'bg-slate-950' : 'bg-white'
        } ${bootComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className={`w-full max-w-md mx-6 rounded-xl border p-6 font-mono text-sm transition-colors ${isDark
          ? 'border-white/10 bg-secondary/40 text-muted-foreground'
          : 'border-slate-200 bg-slate-50 text-slate-600'
          }`}>
          <div className={`flex justify-between text-xs uppercase tracking-wide ${isDark ? 'text-white/50' : 'text-slate-500'
            }`}>
            <span>Startup routine</span>
            <span>{bootComplete ? "Ready" : "Running"}</span>
          </div>
          <div className="mt-3 space-y-2">
            {bootProgress.map((step) => (
              <div
                key={step.tag}
                className={`flex items-center justify-between rounded-lg border px-3 py-2 transition-all duration-300 ${isDark
                  ? 'border-white/5 bg-black/20'
                  : 'border-slate-200 bg-white/50'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs ${isDark ? 'text-blue-300/80' : 'text-blue-600'
                    }`}>{step.tag}</span>
                  <span className="animate-pulse">{step.message}</span>
                </div>
                <span className={`text-xs ${isDark ? 'text-white/70' : 'text-slate-600'
                  }`}>
                  {step.status === "ready" && "✓"}
                  {step.status === "running" && "…"}
                  {step.status === "pending" && "—"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark
      ? 'bg-gradient-to-b from-slate-950 to-slate-900/80 text-slate-100'
      : 'bg-gradient-to-b from-slate-50 to-white text-slate-900'
      }`}>


      {/* ---------------- Navigation Header ---------------- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ${isDark
        ? 'bg-slate-950/70 border-b border-white/5 shadow-lg shadow-black/20'
        : 'bg-white/70 border-b border-slate-200/50 shadow-lg shadow-slate-200/20'
        }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className={`text-lg font-bold transition-all duration-300 hover:scale-105 ${isDark ? 'text-white hover:text-blue-400' : 'text-slate-900 hover:text-blue-600'
              }`}>
              JR
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className={`text-sm font-medium transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg ${isDark ? 'text-white/70 hover:text-blue-400 hover:bg-white/5' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100/50'
                }`}>About</a>
              <a href="#projects" className={`text-sm font-medium transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg ${isDark ? 'text-white/70 hover:text-blue-400 hover:bg-white/5' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100/50'
                }`}>Projects</a>
              <a href="#contact" className={`text-sm font-medium transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg ${isDark ? 'text-white/70 hover:text-blue-400 hover:bg-white/5' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100/50'
                }`}>Contact</a>
            </div>

            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 ${isDark
                ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20'
                : 'bg-slate-100/50 border border-slate-200/50 text-slate-900 hover:bg-slate-200/50 hover:border-slate-300'
                }`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>



      {/* ---------------- Main Content ---------------- */}
      <main className="animate-in fade-in duration-1000">



        {/* ---------------- Hero Section ---------------- */}
        <section className="min-h-screen flex flex-col relative">
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full py-24 sm:py-28">
            <div className={`rounded-3xl border p-6 sm:p-8 shadow-lg transition-all duration-500 hover:shadow-xl w-full ${isDark
              ? 'border-white/10 bg-card/80 shadow-[0_0_60px_rgba(16,185,129,0.08)]'
              : 'border-slate-200 bg-white/80 shadow-slate-200/50'
              }`}>
              <div className="flex flex-col gap-6 lg:flex-row lg:gap-8 lg:items-center">
                <div className="flex-1 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
                    <div className={`h-16 w-16 sm:h-20 sm:w-20 mx-auto sm:mx-0 rounded-2xl border overflow-hidden flex items-center justify-center transition-transform hover:scale-105 ${isDark
                      ? 'border-white/10 bg-gradient-to-br from-blue-400/20 to-transparent'
                      : 'border-slate-300 bg-gradient-to-br from-blue-100 to-slate-50'
                      }`}>
                      <Image src={razec_3} alt="Logo" width={80} height={80} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className={`text-xs sm:text-sm uppercase tracking-[0.2em] ${isDark ? 'text-white/60' : 'text-slate-600'
                        }`}>Software Engineer</p>
                      <h1 className={`mt-1 text-2xl sm:text-3xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                        John Razec Agno
                      </h1>
                      <p className={`text-sm sm:text-base ${isDark ? 'text-muted-foreground' : 'text-slate-600'
                        }`}>Backend & Database Specialist</p>
                    </div>
                  </div>

                  <p className={`text-base text-justify sm:text-lg leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-700'
                    }`}>
                    A curious problem solver who loves learning new things and building better systems. My leadership experience has taught me how to communicate well, support teammates, and create an environment where everyone feels comfortable contributing. I like exchanging ideas, learning from others, and building solutions together as a team.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="#projects"
                      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 ${isDark
                        ? 'bg-blue-400/90 text-slate-900 hover:bg-blue-300'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                    >
                      View Projects
                    </Link>
                    <Link
                      href="#contact"
                      className={`inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 ${isDark
                        ? 'border-white/20 text-white hover:border-white/50 hover:bg-white/5'
                        : 'border-slate-300 text-slate-900 hover:border-slate-400 hover:bg-slate-50'
                        }`}
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>

                <div className={`w-full h-full lg:max-w-96 rounded-2xl border p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02] ${isDark
                  ? 'border-white/10 bg-black/30'
                  : 'border-slate-200 bg-slate-50'
                  }`}>
                  <p className={`text-xs uppercase tracking-[0.3em] ${isDark ? 'text-blue-300/80' : 'text-slate-500'
                    }`}>User metrics</p>
                  <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4">
                    {metrics.map((metric, index) => (
                      <div key={metric.label} className={`flex items-center justify-between p-2 rounded-lg transition-all duration-300 hover:scale-105 ${isDark ? 'hover:bg-white/5' : 'hover:bg-white/50'
                        }`} style={{ animationDelay: `${index * 100}ms` }}>
                        <span className={`text-xs sm:text-sm ${isDark ? 'text-white/60' : 'text-slate-600'
                          }`}>{metric.label}</span>
                        <span className={`text-sm sm:text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'
                          }`}>{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ChevronDown at bottom - only visible on desktop */}
          <div className="hidden lg:flex items-center justify-center pb-8 absolute bottom-0 left-0 right-0">
            <a
              href="#about"
              className={`group inline-flex items-center justify-center p-4 transition-all duration-300 hover:scale-110 ${isDark
                ? 'text-white/70 hover:text-blue-400'
                : 'text-slate-600 hover:text-blue-600'
                }`}
              onClick={(e) => {
                e.preventDefault()
                const target = document.querySelector('#about')
                target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              aria-label="Scroll down"
            >
              <ChevronDown className="animate-bounce" size={24} />
            </a>
          </div>
        </section>

        {/* ---------------- System Overview Section ---------------- */}
        <section
          data-section="about"
          className={`my-0 lg:my-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visibleSections.has('about')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}
          id="about"
        >
          <div className="h-0 lg:h-20"></div>
          <div className="grid gap-6 lg:grid-cols-4">
            {/* Social Links Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-3">
                      <a
                        href="https://www.linkedin.com/in/jrazec"
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 hover:scale-105 group ${isDark
                          ? 'border-white/10 bg-white/5 text-white/70 hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-400'
                          : 'border-slate-200 bg-white/50 text-slate-600 hover:border-blue-600/50 hover:bg-blue-50 hover:text-blue-600'
                          }`}
                      >
                        <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-400/20 group-hover:bg-blue-400/30' : 'bg-blue-100 group-hover:bg-blue-200'
                          }`}>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium">LinkedIn</div>
                        </div>
                      </a>

                      <a
                        href="https://github.com/jrazec"
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 hover:scale-105 group ${isDark
                          ? 'border-white/10 bg-white/5 text-white/70 hover:border-gray-400/50 hover:bg-gray-400/10 hover:text-gray-300'
                          : 'border-slate-200 bg-white/50 text-slate-600 hover:border-gray-600/50 hover:bg-gray-50 hover:text-gray-700'
                          }`}
                      >
                        <div className={`p-2 rounded-lg ${isDark ? 'bg-gray-400/20 group-hover:bg-gray-400/30' : 'bg-gray-100 group-hover:bg-gray-200'
                          }`}>
                          <Github className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">GitHub</div>
                        </div>
                      </a>

                      <a
                        href="mailto:johnrazeca@gmail.com"
                        className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 hover:scale-105 group ${isDark
                          ? 'border-white/10 bg-white/5 text-white/70 hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-400'
                          : 'border-slate-200 bg-white/50 text-slate-600 hover:border-blue-600/50 hover:bg-blue-50 hover:text-blue-600'
                          }`}
                      >
                        <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-400/20 group-hover:bg-blue-400/30' : 'bg-blue-100 group-hover:bg-blue-200'
                          }`}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Email</div>
                        </div>
                      </a>
                    </div>
                  </div>

              {/* Main Content */}
              <div className={`lg:col-span-3 space-y-6 rounded-3xl border p-6 sm:p-8 transition-all duration-500 hover:shadow-lg relative overflow-hidden group ${isDark
                ? 'border-white/10 bg-blue-400/10'
                : 'border-slate-200 bg-white/70 hover:shadow-slate-200/50'
                }`}>


                {/* Content */}
                <div className="relative z-10">
                  <div>
                    <p className={`text-xs uppercase tracking-[0.25em] ${isDark ? 'text-blue-300/70' : 'text-blue-600'
                      }`}>System Overview</p>
                    <h3 className={`mt-2 text-2xl sm:text-3xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'
                      }`}>About me!</h3>
                  </div>

                  <p className={`text-base sm:text-md leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-700'
                    }`}>
                    I really love learning new things! Boosted by curiosity and definitely fueled by coffee, I'm always eager to explore new stuff. Whether building things from scratch
                  </p>
                </div>
              </div>
            </div>
        </section>
        <section
          data-section="hobbies"
          className={`my-8 sm:my-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visibleSections.has('hobbies')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}
        >
          <div
            className={`relative rounded-3xl border p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-lg ${isDark ? 'border-white/10 bg-card/70' : 'border-slate-200 bg-white/70'
              }`}
          >
            {/* Blue overlay */}
            <div
              className={`absolute inset-0 ${isDark ? 'bg-blue-400/5' : 'bg-blue-600/5'}`}
              aria-hidden="true"
            />

            {/* Background Carousel */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
              <div className="absolute inset-0">
                <Image
                  src={razec_1}
                  alt="Background A"
                  fill
                  className="object-cover"
                  style={{ animation: 'fadeCycle 12s infinite' } as React.CSSProperties}
                />
              </div>
              <div className="absolute inset-0">
                <Image
                  src={razec_2}
                  alt="Background B"
                  fill
                  className="object-cover"
                  style={{ animation: 'fadeCycle 12s infinite', animationDelay: '4s' } as React.CSSProperties}
                />
              </div>
              <div className="absolute inset-0">
                <Image
                  src={razec_3}
                  alt="Background C"
                  fill
                  className="object-cover"
                  style={{ animation: 'fadeCycle 12s infinite', animationDelay: '8s' } as React.CSSProperties}
                />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p className={`text-xs uppercase tracking-[0.3em] ${isDark ? 'text-blue-300/70' : 'text-blue-600'}`}>
                Off-duty log
              </p>
              <h3 className={`mt-2 text-xl sm:text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Beyond the keyboard
              </h3>
              <p className={`mt-3 text-sm sm:text-base leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-700'}`}>
                When I’m not coding, I love watching tech stuff. I’ve recently enjoyed creating 2D pixel art,
                and right now I’m playing the ukulele and learning more. I literally love discovering something new. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, molestias quod! Doloribus, hic adipisci. Temporibus, distinctio autem. Vel consectetur quis minus harum aliquam nostrum quos tenetur aspernatur, repudiandae doloremque. Eius! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto debitis asperiores deleniti, magni placeat facilis cupiditate minus ea recusandae voluptatem odio maiores laborum tempora illum! Eligendi earum mollitia adipisci excepturi.
                and right now I’m playing the ukulele and learning more. I literally love discovering something new. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, molestias quod! Doloribus, hic adipisci. Temporibus, distinctio autem. Vel consectetur quis minus harum aliquam nostrum quos tenetur aspernatur, repudiandae doloremque. Eius! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto debitis asperiores deleniti, magni placeat facilis cupiditate minus ea recusandae voluptatem odio maiores laborum tempora illum! Eligendi earum mollitia adipisci excepturi.
              </p>
            </div>
          </div>

          {/* Keyframes for simple crossfade */}
          <style jsx>{`
            @keyframes fadeCycle {
              0% { opacity: 1; }
              30% { opacity: 1; }
              33% { opacity: 0; }
              97% { opacity: 0; }
              100% { opacity: 1; }
            }
          `}</style>
        </section>

        {/* ---------------- Activity Timeline Section ---------------- */}
        <section
          data-section="timeline"
          className={`my-8 sm:my-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl border p-6 sm:p-8 transition-all duration-700 ${visibleSections.has('timeline')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            } ${isDark
              ? 'border-white/10 bg-card/70'
              : 'border-slate-200 bg-white/70'
            }`}>
          <p className={`text-xs uppercase tracking-[0.4em] ${isDark ? 'text-white/40' : 'text-slate-500'
            }`}>Logs & Activity History</p>
          <h2 className={`mt-2 text-xl sm:text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'
            }`}>Career Timeline</h2>

          <div className="mt-6 sm:mt-8 relative">
            {/* Vertical line */}
            <div className={`absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 ${isDark ? 'bg-blue-400/30' : 'bg-blue-600/30'
              }`}></div>

            <div className="space-y-6 sm:space-y-8">
              {logs.map((log, index) => (
                <div key={index} className="relative animate-in slide-in-from-left duration-500" style={{ animationDelay: `${index * 200}ms` }}>
                  {/* Timeline dot */}
                  <div className={`absolute left-2 sm:left-4 w-4 h-4 rounded-full border-4 transition-all duration-300 ${expandedLog === index
                    ? isDark ? 'bg-blue-400 border-blue-400' : 'bg-blue-600 border-blue-600'
                    : isDark ? 'bg-slate-800 border-blue-400/50' : 'bg-white border-blue-600/50'
                    }`}></div>

                  <div className="ml-8 sm:ml-12">
                    <button
                      onClick={() => setExpandedLog(expandedLog === index ? null : index)}
                      className={`w-full text-left rounded-2xl border p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02] ${expandedLog === index
                        ? isDark
                          ? 'border-blue-400/50 bg-blue-400/10 shadow-lg shadow-blue-400/20'
                          : 'border-blue-600/50 bg-blue-50 shadow-lg shadow-blue-200/50'
                        : isDark
                          ? 'border-white/10 bg-black/30 hover:border-white/20'
                          : 'border-slate-200 bg-white/50 hover:border-slate-300'
                        }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <h3 className={`text-base sm:text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'
                              }`}>{log.title}</h3>
                            <span className={`text-xs font-mono px-2 py-1 rounded ${isDark
                              ? 'bg-white/10 text-white/70'
                              : 'bg-slate-100 text-slate-600'
                              }`}>{log.period}</span>
                          </div>
                          <p className={`text-sm mt-1 ${isDark ? 'text-white/60' : 'text-slate-600'
                            }`}>{log.org}</p>
                        </div>
                        <ChevronDown className={`transition-transform duration-300 ${expandedLog === index ? 'rotate-180' : ''
                          } ${isDark ? 'text-white/50' : 'text-slate-500'}`} size={20} />
                      </div>
                    </button>

                    {expandedLog === index && (
                      <div className={`mt-4 rounded-xl border p-4 sm:p-6 animate-in slide-in-from-top-2 duration-300 ${isDark
                        ? 'border-white/10 bg-black/20'
                        : 'border-slate-200 bg-white/80'
                        }`}>
                        <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-white/70' : 'text-slate-700'
                          }`}>{log.description}</p>

                        <div>
                          <p className={`text-xs uppercase tracking-[0.3em] mb-3 ${isDark ? 'text-blue-300/70' : 'text-blue-600'
                            }`}>Key Achievements</p>
                          <ul className="space-y-2">
                            {log.achievements.map((achievement, i) => (
                              <li key={i} className={`flex items-start gap-2 text-sm ${isDark ? 'text-white/80' : 'text-slate-800'
                                }`}>
                                <span className={`w-1 h-1 rounded-full mt-2 flex-shrink-0 ${isDark ? 'bg-blue-400' : 'bg-blue-600'
                                  }`}></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Projects & Tech Stack Section ---------------- */}
        <div
          data-section="projects"
          className={`grid sm:my-28 gap-6 lg:gap-10 lg:grid-cols-[2fr,1fr] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visibleSections.has('projects')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}
        >


          {/* ---------------- Projects Section ---------------- */}
          <section id="projects" className={`rounded-3xl border p-6 sm:p-8 ${isDark
            ? 'border-white/10 bg-card/80'
            : 'border-slate-200 bg-white/80'
            }`}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className={`text-xs uppercase tracking-[0.4em] ${isDark ? 'text-white/40' : 'text-slate-500'
                  }`}>Projects</p>
                <h2 className={`mt-2 text-2xl sm:text-3xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'
                  }`}>System Deployments</h2>
              </div>
              <span className={`text-xs sm:text-sm ${isDark ? 'text-white/60' : 'text-slate-600'
                }`}>Source · /api/projects</span>
            </div>

            <div className="mt-6 sm:mt-8 space-y-4">
              {loadingProjects && (
                <div className={`animate-pulse rounded-2xl border p-4 sm:p-6 text-sm ${isDark
                  ? 'border-white/10 bg-white/5 text-white/60'
                  : 'border-slate-200 bg-slate-50 text-slate-500'
                  }`}>
                  Fetching project logs…
                </div>
              )}

              {!loadingProjects &&
                projects.map((project, index) => (
                  <div
                    key={project.slug}
                    onClick={() => router.push(`/projects/${project.slug}`)}
                    className={`group cursor-pointer rounded-2xl border p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${isDark
                      ? 'border-white/10 bg-black/30 shadow-[0_0_30px_rgba(15,118,110,0.2)] hover:border-blue-400/30'
                      : 'border-slate-200 bg-white/50 hover:border-blue-300 hover:shadow-blue-100/20'
                      }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex-1">
                        <p className={`text-xs uppercase tracking-[0.3em] ${isDark ? 'text-blue-300/70' : 'text-blue-600'
                          }`}>{project.year}</p>
                        <h3 className={`text-lg sm:text-2xl font-semibold group-hover:text-blue-400 transition-colors ${isDark ? 'text-white' : 'text-slate-900'
                          }`}>{project.name}</h3>
                        <p className={`text-sm ${isDark ? 'text-white/60' : 'text-slate-600'
                          }`}>{project.subtitle}</p>
                      </div>
                      <ExternalLink size={16} className={`transition-transform group-hover:scale-110 ${isDark ? 'text-white/50' : 'text-slate-500'
                        }`} />
                    </div>

                    <p className={`mt-3 text-sm line-clamp-2 ${isDark ? 'text-white/70' : 'text-slate-700'
                      }`}>{project.summary}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-full border px-2 py-1 text-xs transition-all duration-200 hover:scale-105 ${isDark
                            ? 'border-white/10 bg-white/5 text-white/80'
                            : 'border-slate-200 bg-slate-50 text-slate-700'
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className={`rounded-full border px-2 py-1 text-xs ${isDark
                          ? 'border-white/10 bg-white/5 text-white/60'
                          : 'border-slate-200 bg-slate-50 text-slate-500'
                          }`}>
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </section>

          {/* ---------------- Tech Stack Section ---------------- */}
          <aside className={`rounded-3xl border p-4 sm:p-6 ${isDark
            ? 'border-white/10 bg-card/70'
            : 'border-slate-200 bg-white/70'
            }`}>
            <p className={`text-xs uppercase tracking-[0.4em] ${isDark ? 'text-white/40' : 'text-slate-500'
              }`}>Tech stack</p>
            <div className="mt-4 sm:mt-5 space-y-4 sm:space-y-5">
              {techStack.map((group, index) => (
                <div key={group.title} className="animate-in fade-in duration-500" style={{ animationDelay: `${index * 200}ms` }}>
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'
                    }`}>{group.title}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item, itemIndex) => (
                      <span
                        key={item}
                        className={`rounded-full border px-2 sm:px-3 py-1 text-xs transition-all duration-300 hover:scale-105 ${isDark
                          ? 'border-white/15 bg-white/5 text-white/80 hover:bg-white/10'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-white'
                          }`}
                        style={{ animationDelay: `${(index * 200) + (itemIndex * 50)}ms` }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>





        {/* ---------------- Contact Section ---------------- */}
        <section
          data-section="contact"
          id="contact"
          className={`my-8 sm:my-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl border p-6 sm:p-8 transition-all duration-700 ${visibleSections.has('contact')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            } ${isDark
              ? 'border-white/10 bg-card/70'
              : 'border-slate-200 bg-white/70'
            }`}>
          <p className={`text-xs uppercase tracking-[0.4em] ${isDark ? 'text-white/40' : 'text-slate-500'
            }`}>Ping the System</p>
          <h2 className={`mt-2 text-xl sm:text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'
            }`}>Let's Connect</h2>
          <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-700'
            }`}>
            Ready to discuss a project, collaboration, or just want to say hello? Drop me a line or grab my resume.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:johnrazeca@gmail.com?subject=Hello from your portfolio!"
              className={`group rounded-2xl border p-6 transition-all duration-300 hover:scale-105 ${isDark
                ? 'border-white/10 bg-black/30 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-400/20'
                : 'border-slate-200 bg-white/50 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-200/50'
                }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-400/20' : 'bg-blue-100'
                  }`}>
                  <svg className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-[0.3em] ${isDark ? 'text-blue-300/70' : 'text-blue-600'
                    }`}>Send Email</p>
                  <p className={`text-sm font-semibold group-hover:text-blue-400 transition-colors ${isDark ? 'text-white' : 'text-slate-900'
                    }`}>Get in Touch</p>
                </div>
              </div>
              <p className={`text-xs ${isDark ? 'text-white/60' : 'text-slate-600'
                }`}>johnrazeca@gmail.com</p>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className={`group rounded-2xl border p-6 transition-all duration-300 hover:scale-105 ${isDark
                ? 'border-white/10 bg-black/30 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-400/20'
                : 'border-slate-200 bg-white/50 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-200/50'
                }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-400/20' : 'bg-blue-100'
                  }`}>
                  <svg className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-[0.3em] ${isDark ? 'text-blue-300/70' : 'text-blue-600'
                    }`}>Download</p>
                  <p className={`text-sm font-semibold group-hover:text-blue-400 transition-colors ${isDark ? 'text-white' : 'text-slate-900'
                    }`}>Resume PDF</p>
                </div>
              </div>
              <p className={`text-xs ${isDark ? 'text-white/60' : 'text-slate-600'
                }`}>View my complete experience</p>
            </a>
          </div>
        </section>
      </main>



      {/* ---------------- Footer ---------------- */}
      <footer className={`border-t mt-16 ${isDark ? 'border-white/10 bg-slate-950/50' : 'border-slate-200 bg-slate-50/50'
        }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className={`text-sm ${isDark ? 'text-white/60' : 'text-slate-600'
              }`}>
              © 2025 | John Razec Agno
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/jrazec"
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${isDark
                  ? 'text-white/40 hover:text-blue-400 hover:bg-blue-400/10'
                  : 'text-slate-400 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="https://github.com/jrazec"
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${isDark
                  ? 'text-white/40 hover:text-gray-300 hover:bg-gray-400/10'
                  : 'text-slate-400 hover:text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="mailto:johnrazeca@gmail.com"
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${isDark
                  ? 'text-white/40 hover:text-blue-400 hover:bg-blue-400/10'
                  : 'text-slate-400 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

