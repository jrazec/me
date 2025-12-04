import type { Metadata } from "next"

const principles = [
  {
    title: "Architecture Notes",
    items: [
      "Design for resiliency with bounded contexts",
      "Prefer event-driven sync for long-running ops",
      "Ship infra as code and document every queue",
    ],
  },
  {
    title: "API-first Mentality",
    items: [
      "Contracts live beside code and are versioned",
      "Schema changes are gated by automated regression tests",
      "Backwards compatibility and graceful fallbacks are non-negotiable",
    ],
  },
  {
    title: "DB Schema Discipline",
    items: [
      "Naming conventions and column comments baked into migrations",
      "Observability for slow queries wired before production",
      "Zero-downtime migrations with release toggles",
    ],
  },
  {
    title: "Logging & Observability",
    items: [
      "Structured logs with correlation IDs",
      "Golden signals piped to Grafana + PagerDuty",
      "Post-incident notes feed straight into backlog",
    ],
  },
  {
    title: "Security Fundamentals",
    items: [
      "Principle of least privilege across services",
      "Keys rotate automatically and secrets never live in repos",
      "Threat modeling is part of sprint review",
    ],
  },
]

export const metadata: Metadata = {
  title: "System • Razec Backend Portfolio",
  description: "Backend engineering principles and architecture focus areas for John Razec Agno.",
}

"use client"

import Link from "next/link"
import { ArrowLeft, Moon, Sun } from "lucide-react"
import { useState } from "react"

export default function SystemPage() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-b from-slate-950 to-slate-900/80 text-slate-100' 
        : 'bg-gradient-to-b from-slate-50 to-white text-slate-900'
    }`}>
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-40 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
          isDark 
            ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20' 
            : 'bg-slate-900/10 border border-slate-300 text-slate-900 hover:bg-slate-900/20'
        }`}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-8 sm:space-y-10">
        {/* Back Button */}
        <Link
          href="/"
          className={`inline-flex items-center gap-2 mb-4 text-sm transition-colors ${
            isDark ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <header className={`rounded-3xl border p-6 sm:p-8 animate-in slide-in-from-bottom-4 duration-700 ${
          isDark 
            ? 'border-white/10 bg-card/70' 
            : 'border-slate-200 bg-white/70'
        }`}>
          <p className={`text-xs uppercase tracking-[0.4em] ${
            isDark ? 'text-white/40' : 'text-slate-500'
          }`}>System</p>
          <h1 className={`mt-3 text-2xl sm:text-3xl font-semibold ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>Backend Engineering Playbook</h1>
          <p className={`mt-4 text-sm sm:text-base ${
            isDark ? 'text-white/70' : 'text-slate-700'
          }`}>
            The /system route acts as a console snapshot of how I think: contracts first, logging obsessed, and security minded.
          </p>
        </header>

        <section className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {principles.map((principle, index) => (
            <article 
              key={principle.title} 
              className={`rounded-3xl border p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02] animate-in slide-in-from-bottom-4 duration-700 ${
                isDark 
                  ? 'border-white/10 bg-black/30 hover:border-white/20' 
                  : 'border-slate-200 bg-white/50 hover:border-slate-300 hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className={`text-xs uppercase tracking-[0.4em] ${
                isDark ? 'text-blue-300/70' : 'text-blue-600'
              }`}>{principle.title}</p>
              <ul className="mt-4 space-y-2">
                {principle.items.map((item, itemIndex) => (
                  <li key={item} className={`flex items-start gap-3 text-sm transition-all duration-200 ${
                    isDark ? 'text-white/70' : 'text-slate-700'
                  }`} style={{ animationDelay: `${(index * 100) + (itemIndex * 50)}ms` }}>
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                      isDark ? 'bg-blue-400' : 'bg-blue-600'
                    }`}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {/* Navigation */}
        <div className="flex justify-center pt-8">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 ${
              isDark 
                ? 'border-white/20 text-white hover:border-white/50 hover:bg-white/5' 
                : 'border-slate-300 text-slate-900 hover:border-slate-400 hover:bg-slate-50'
            }`}
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>
      </main>
    </div>
  )
}
