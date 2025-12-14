"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github, Moon, Sun, ChevronLeft, ChevronRight } from "lucide-react"
import type { Project } from "@/lib/projects"
import { useTheme } from "@/app/theme-provider"
import { useState } from "react"

interface ProjectPageClientProps {
  project: Project
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  const { isDark, toggleTheme } = useTheme()
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (project.carousel && project.carousel.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % project.carousel!.length)
    }
  }

  const prevSlide = () => {
    if (project.carousel && project.carousel.length > 0) {
      setCurrentSlide((prev) => (prev - 1 + project.carousel!.length) % project.carousel!.length)
    }
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark
        ? 'bg-gradient-to-b from-slate-950 to-slate-900/80 text-slate-100'
        : 'bg-gradient-to-b from-slate-50 to-white text-slate-900'
      }`}>
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-40 p-3 rounded-full transition-all duration-300 hover:scale-110 ${isDark
            ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
            : 'bg-slate-900/10 border border-slate-300 text-slate-900 hover:bg-slate-900/20'
          }`}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Back Button */}
        <Link
          href="/#projects"
          className={`inline-flex items-center gap-2 mb-8 text-sm transition-colors ${isDark ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <header className="mb-8 animate-in slide-in-from-bottom-4 duration-700">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <span className={`text-xs uppercase tracking-[0.3em] font-mono ${isDark ? 'text-blue-300/70' : 'text-blue-600'
              }`}>
              {project.year}
            </span>
            <span className={`hidden sm:block w-px h-4 ${isDark ? 'bg-white/20' : 'bg-slate-300'
              }`}></span>
            <span className={`text-xs uppercase tracking-[0.3em] ${isDark ? 'text-white/50' : 'text-slate-500'
              }`}>
              System Deployment
            </span>
          </div>

          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'
            }`}>
            {project.name}
          </h1>

          <p className={`text-lg sm:text-xl mb-6 leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-700'
            }`}>
            {project.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.liveUrl}
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 ${isDark
                  ? 'bg-blue-400/90 text-slate-900 hover:bg-blue-300'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
            >
              <ExternalLink size={16} />
              Live Preview
            </a>
            <a
              href={project.repoUrl}
              className={`inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 ${isDark
                  ? 'border-white/20 text-white hover:border-white/50 hover:bg-white/5'
                  : 'border-slate-300 text-slate-900 hover:border-slate-400 hover:bg-slate-50'
                }`}
            >
              <Github size={16} />
              GitHub Repo
            </a>
          </div>
        </header>

        {/* Project Content */}
        <div className="grid gap-8 lg:gap-12">
          {/* Main Content */}
          <section className={`rounded-3xl border p-6 sm:p-8 animate-in slide-in-from-bottom-4 duration-700 delay-200 ${isDark
              ? 'border-white/10 bg-card/70'
              : 'border-slate-200 bg-white/70'
            }`}>
            <h2 className={`text-xl sm:text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'
              }`}>Project Overview</h2>
            <p className={`leading-relaxed mb-6 ${isDark ? 'text-white/80' : 'text-slate-800'
              }`}>
              {project.summary}
            </p>


            {/* Carousel Section */}
            {project.carousel && project.carousel.length > 0 && (
              <section className={`rounded-3xl border p-1 sm:p-2 animate-in slide-in-from-bottom-4 duration-700 delay-250 mb-5 ${isDark
                  ? 'border-white/10 bg-card/10'
                  : 'border-slate-200 bg-white/10'
                }`}>


                <div className="relative">
                  {/* Main carousel container */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden">
                    {project.carousel.map((item, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                          }`}
                      >
                        {item.type === 'image' ? (
                          <Image
                            src={item.src}
                            alt={item.alt || `${project.name} screenshot ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          (() => {
                            const src = item.src as string

                              if (item.src === "bsuniverse") {
                                return (
                                <iframe
                                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FTechISBatStateUTNEULipa%2Fvideos%2F3084336855038712%2F&show_text=false&width=560&t=0&autoplay=1&mute=1"
                                  className="w-full h-full"
                                  style={{ border: "none", overflow: "hidden" }}
                                  allowFullScreen
                                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                ></iframe>
                                )
                              }
                              const isYouTube =
                                src.includes("youtube.com") || src.includes("youtu.be")

                              if (isYouTube) {
                              // Normalize to embed URL with autoplay, mute, and JS API enabled
                              let embedSrc = src
                              if (src.includes("watch?v=")) {
                                const videoId = src.split("watch?v=")[1].split("&")[0]
                                embedSrc = `https://www.youtube.com/embed/${videoId}`
                              } else if (src.includes("youtu.be/")) {
                                const videoId = src.split("youtu.be/")[1].split("?")[0]
                                embedSrc = `https://www.youtube.com/embed/${videoId}`
                              }

                              // Append player params
                              const params = new URLSearchParams({
                                autoplay: "1",
                                mute: "1",
                                controls: "1",
                                rel: "0",
                                modestbranding: "1",
                                playsinline: "1",
                                enablejsapi: "1"
                              })

                              const fullSrc = `${embedSrc}?${params.toString()}`
                              
                            
                              return (
                                <iframe
                                  src={fullSrc}
                                  title={item.alt || `${project.name} video ${index + 1}`}
                                  className="w-full h-full"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen
                                  referrerPolicy="strict-origin-when-cross-origin"
                                  onLoad={(e) => {
                                    // Set playback rate to 2x via YouTube IFrame API command
                                    const msg = JSON.stringify({
                                      event: "command",
                                      func: "setPlaybackRate",
                                      args: [2]
                                    })
                                    e.currentTarget.contentWindow?.postMessage(msg, "*")
                                  }}
                                />
                              )
                            }

                            return (
                              <video
                                src={src}
                                controls
                                className="w-full h-full object-cover"
                                poster={item.alt}
                              >
                                Your browser does not support the video tag.
                              </video>
                            )
                          })()
                        )}
                      </div>
                    ))}

                    {/* Navigation arrows */}
                    {project.carousel.length > 1 && (
                      <>
                        <button
                          onClick={prevSlide}
                          className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 hover:scale-110 ${isDark
                              ? 'bg-black/50 hover:bg-black/70 text-white border border-white/20'
                              : 'bg-white/70 hover:bg-white text-slate-900 border border-slate-300'
                            }`}
                          aria-label="Previous slide"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextSlide}
                          className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 hover:scale-110 ${isDark
                              ? 'bg-black/50 hover:bg-black/70 text-white border border-white/20'
                              : 'bg-white/70 hover:bg-white text-slate-900 border border-slate-300'
                            }`}
                          aria-label="Next slide"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Slide indicators */}
                  {project.carousel.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                      {project.carousel.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                              ? isDark
                                ? 'bg-blue-400 w-8'
                                : 'bg-blue-600 w-8'
                              : isDark
                                ? 'bg-white/30 hover:bg-white/50'
                                : 'bg-slate-300 hover:bg-slate-400'
                            }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Caption */}
                  {project.carousel[currentSlide]?.alt && (
                    <p className={`text-sm text-center mt-4 ${isDark ? 'text-white/60' : 'text-slate-600'
                      }`}>
                      {project.carousel[currentSlide].alt}
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* Detailed Description */}
            <div className="prose max-w-none">
              <p className={`leading-relaxed text-justify ${isDark ? 'text-white/70' : 'text-slate-700'
                }`}>
                {project.detailedDescription || "This project involved designing and implementing a robust backend system tailored to meet specific operational needs. The architecture was carefully planned to ensure scalability, maintainability, and high availability."}
              </p>

              <p className={`leading-relaxed mt-4 text-justify ${isDark ? 'text-white/70' : 'text-slate-700'
                }`}>
                {project.detailedDescription2 || "Key components included RESTful API development, database schema design, and integration with third-party services. Emphasis was placed on security best practices, including authentication, authorization, and data validation."}
              </p>
            </div>
          </section>


          {/* Technical Details Grid */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {/* Tech Stack */}
            <div className={`rounded-3xl border p-6 animate-in slide-in-from-left duration-700 delay-300 ${isDark
                ? 'border-white/10 bg-black/30'
                : 'border-slate-200 bg-white/50'
              }`}>
              <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'
                }`}>
                <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'
                  }`}></span>
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:scale-105 ${isDark
                        ? 'border-white/15 bg-white/5 text-white/80 hover:bg-white/10'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-white'
                      }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact & Metrics */}
            {project.impact.length > 0 && (
              <div className={`rounded-3xl border p-6 animate-in slide-in-from-right duration-700 delay-400 ${isDark
                  ? 'border-white/10 bg-black/30'
                  : 'border-slate-200 bg-white/50'
                }`}>
                <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                  <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'
                    }`}></span>
                  Impact & Results
                </h3>
                <ul className="space-y-3">
                  {project.impact.map((impact, index) => (
                    <li key={index} className={`flex items-start gap-3 text-sm ${isDark ? 'text-white/80' : 'text-slate-800'
                      }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${isDark ? 'bg-blue-400' : 'bg-blue-600'
                        }`}></span>
                      {impact}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Proofs/Testimonies Section */}
          {project.proofs && project.proofs.length > 0 && (
            <section className={`rounded-3xl border p-6 sm:p-8 animate-in slide-in-from-bottom-4 duration-700 delay-450 ${isDark
                ? 'border-white/10 bg-black/30'
                : 'border-slate-200 bg-white/50'
              }`}>
              <h3 className={`text-lg font-semibold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'
                }`}>
                <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'
                  }`}></span>
                Proofs & Testimonies
              </h3>

              <div className={`grid gap-6 ${project.proofs.length === 1 ? 'grid-cols-1' :
                  project.proofs.length === 2 ? 'sm:grid-cols-2' :
                    'sm:grid-cols-2 lg:grid-cols-3'
                }`}>
                {project.proofs.map((proof, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:scale-105 ${isDark
                        ? 'border-white/10 bg-black/20'
                        : 'border-slate-200 bg-white'
                      }`}
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={proof.src}
                        alt={proof.caption || `Proof ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {proof.caption && (
                      <div className="p-4">
                        <p className={`text-sm ${isDark ? 'text-white/70' : 'text-slate-700'
                          }`}>
                          {proof.caption}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Features Section */}
          <section className={`rounded-3xl border p-6 sm:p-8 animate-in slide-in-from-bottom-4 duration-700 delay-500 ${isDark
              ? 'border-white/10 bg-card/70'
              : 'border-slate-200 bg-white/70'
            }`}>
            <h2 className={`text-xl sm:text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-slate-900'
              }`}>Key Features</h2>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border p-4 transition-all duration-300 hover:scale-105 ${isDark
                      ? 'border-white/10 bg-black/20 hover:bg-black/30'
                      : 'border-slate-200 bg-white/50 hover:bg-white hover:shadow-md'
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className={`font-semibold mb-2 text-sm ${isDark ? 'text-white' : 'text-slate-900'
                    }`}>{feature.title}</h3>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-white/60' : 'text-slate-600'
                    }`}>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation */}
          <div className={`flex justify-between items-center pt-8 border-t ${isDark ? 'border-white/10' : 'border-slate-200'
            }`}>
            <Link
              href="/#projects"
              className={`inline-flex items-center gap-2 text-sm transition-colors ${isDark ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              <ArrowLeft size={16} />
              All Projects
            </Link>

            <div className="flex gap-4">
              <a
                href="#"
                className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${isDark
                    ? 'bg-blue-400/10 border-blue-400/30 text-blue-300 hover:bg-blue-400/20'
                    : 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100'
                  }`}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
              <a
                href="#"
                className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${isDark
                    ? 'border-white/20 text-white/80 hover:border-white/50 hover:bg-white/5'
                    : 'border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50'
                  }`}
              >
                <Github size={14} />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}