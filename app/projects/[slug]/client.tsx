"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Moon, Sun } from "lucide-react"
import type { Project } from "@/lib/projects"
import { useTheme } from "@/app/theme-provider"

interface ProjectPageClientProps {
  project: Project
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-b from-slate-950 to-slate-900/80 text-slate-100' 
        : 'bg-gradient-to-b from-slate-50 to-white text-slate-900'
    }`}>
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-40 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
          isDark 
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
          className={`inline-flex items-center gap-2 mb-8 text-sm transition-colors ${
            isDark ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <header className="mb-8 animate-in slide-in-from-bottom-4 duration-700">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <span className={`text-xs uppercase tracking-[0.3em] font-mono ${
              isDark ? 'text-blue-300/70' : 'text-blue-600'
            }`}>
              {project.year}
            </span>
            <span className={`hidden sm:block w-px h-4 ${
              isDark ? 'bg-white/20' : 'bg-slate-300'
            }`}></span>
            <span className={`text-xs uppercase tracking-[0.3em] ${
              isDark ? 'text-white/50' : 'text-slate-500'
            }`}>
              System Deployment
            </span>
          </div>
          
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {project.name}
          </h1>
          
          <p className={`text-lg sm:text-xl mb-6 leading-relaxed ${
            isDark ? 'text-white/70' : 'text-slate-700'
          }`}>
            {project.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-blue-400/90 text-slate-900 hover:bg-blue-300' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <ExternalLink size={16} />
              Live Preview
            </a>
            <a
              href="#"
              className={`inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                isDark 
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
          <section className={`rounded-3xl border p-6 sm:p-8 animate-in slide-in-from-bottom-4 duration-700 delay-200 ${
            isDark 
              ? 'border-white/10 bg-card/70' 
              : 'border-slate-200 bg-white/70'
          }`}>
            <h2 className={`text-xl sm:text-2xl font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>Project Overview</h2>
            <p className={`leading-relaxed mb-6 ${
              isDark ? 'text-white/80' : 'text-slate-800'
            }`}>
              {project.summary}
            </p>
            
            {/* Detailed Description */}
            <div className="prose max-w-none">
              <p className={`leading-relaxed ${
                isDark ? 'text-white/70' : 'text-slate-700'
              }`}>
                This project represents a comprehensive approach to modern {project.name.toLowerCase()} development, 
                focusing on scalability, performance, and user experience. The architecture follows best practices 
                for backend development, ensuring robust data handling and efficient processing.
              </p>
              
              <p className={`leading-relaxed mt-4 ${
                isDark ? 'text-white/70' : 'text-slate-700'
              }`}>
                Key technical decisions were made to optimize for both development velocity and system reliability. 
                The implementation showcases advanced patterns in API design, database optimization, and deployment automation.
              </p>
            </div>
          </section>

          {/* Technical Details Grid */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {/* Tech Stack */}
            <div className={`rounded-3xl border p-6 animate-in slide-in-from-left duration-700 delay-300 ${
              isDark 
                ? 'border-white/10 bg-black/30' 
                : 'border-slate-200 bg-white/50'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                <span className={`w-2 h-2 rounded-full ${
                  isDark ? 'bg-blue-400' : 'bg-blue-600'
                }`}></span>
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:scale-105 ${
                      isDark 
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
              <div className={`rounded-3xl border p-6 animate-in slide-in-from-right duration-700 delay-400 ${
                isDark 
                  ? 'border-white/10 bg-black/30' 
                  : 'border-slate-200 bg-white/50'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${
                    isDark ? 'bg-blue-400' : 'bg-blue-600'
                  }`}></span>
                  Impact & Results
                </h3>
                <ul className="space-y-3">
                  {project.impact.map((impact, index) => (
                    <li key={index} className={`flex items-start gap-3 text-sm ${
                      isDark ? 'text-white/80' : 'text-slate-800'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                        isDark ? 'bg-blue-400' : 'bg-blue-600'
                      }`}></span>
                      {impact}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Features Section */}
          <section className={`rounded-3xl border p-6 sm:p-8 animate-in slide-in-from-bottom-4 duration-700 delay-500 ${
            isDark 
              ? 'border-white/10 bg-card/70' 
              : 'border-slate-200 bg-white/70'
          }`}>
            <h2 className={`text-xl sm:text-2xl font-semibold mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>Key Features</h2>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Scalable Architecture", description: "Built with microservices pattern for horizontal scaling" },
                { title: "Real-time Updates", description: "WebSocket integration for live data synchronization" },
                { title: "API-First Design", description: "RESTful endpoints with comprehensive documentation" },
                { title: "Database Optimization", description: "Efficient queries and proper indexing strategies" },
                { title: "Security Focused", description: "JWT authentication and input validation" },
                { title: "Performance Monitoring", description: "Integrated logging and metrics collection" }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className={`rounded-2xl border p-4 transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'border-white/10 bg-black/20 hover:bg-black/30' 
                      : 'border-slate-200 bg-white/50 hover:bg-white hover:shadow-md'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className={`font-semibold mb-2 text-sm ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>{feature.title}</h3>
                  <p className={`text-xs leading-relaxed ${
                    isDark ? 'text-white/60' : 'text-slate-600'
                  }`}>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation */}
          <div className={`flex justify-between items-center pt-8 border-t ${
            isDark ? 'border-white/10' : 'border-slate-200'
          }`}>
            <Link
              href="/#projects"
              className={`inline-flex items-center gap-2 text-sm transition-colors ${
                isDark ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ArrowLeft size={16} />
              All Projects
            </Link>
            
            <div className="flex gap-4">
              <a
                href="#"
                className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-blue-400/10 border-blue-400/30 text-blue-300 hover:bg-blue-400/20' 
                    : 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100'
                }`}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
              <a
                href="#"
                className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isDark 
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