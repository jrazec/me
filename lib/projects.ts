export type Project = {
  slug: string
  name: string
  subtitle: string
  year: string
  summary: string
  tech: string[]
  impact: string[]
}

export const projects: Project[] = [
  {
    slug: "barakollect",
    name: "BaraKollect",
    subtitle: "Digital Bean Repository & Vision Pipeline",
    year: "2025",
    summary: "Digital repository paired with a YOLOv11-driven vision pipeline that indexes bean batches, geotags them, and syncs across teams without downtime.",
    tech: ["React", "Django", "Supabase", "PostGIS", "YOLOv11"],
    impact: [
      "Reduced batch load time from 9s to 55ms",
      "Achieved 99.3% precision across the CV pipeline",
    ],
  },
  {
    slug: "qroom",
    name: "QRoom",
    subtitle: "QR-based Classroom Management + AI Feedback",
    year: "2024",
    summary: "Room scheduling, tagging, and cleanliness scanning platform with Gemini-powered anomaly reports and automated notifications.",
    tech: ["React", "Node.js", "Gemini API"],
    impact: ["Deployed for 40+ rooms with live analytics"],
  },
  {
    slug: "bsu-rpg",
    name: "BSU RPG",
    subtitle: "Cross-platform Campus Guide",
    year: "2022–2025",
    summary: "Gamified campus guide with a persistent backend connecting desktop, web, and mobile clients.",
    tech: ["C#", "Node.js", "Flutter"],
    impact: ["100+ beta testers", "96.4% satisfaction rating"],
  },
  {
    slug: "bsasdu-rpg",
    name: "BSUda RPG",
    subtitle: "Cross-platform Campus Guide",
    year: "2022–2025",
    summary: "Gamified campus guide with a persistent backend connecting desktop, web, and mobile clients.",
    tech: ["C#", "Node.js", "Flutter"],
    impact: ["100+ beta testers", "96.4% satisfaction rating"],
  },
  {
    slug: "asd-rpg",
    name: "BSaU RPG",
    subtitle: "Cross-platform Campus Guide",
    year: "2022–2025",
    summary: "Gamified campus guide with a persistent backend connecting desktop, web, and mobile clients.",
    tech: ["C#", "Node.js", "Flutter"],
    impact: ["100+ beta testers", "96.4% satisfaction rating"],
  },
  {
    slug: "bsuasd-rpg",
    name: "BSasdU RPG",
    subtitle: "Cross-platform Campus Guide",
    year: "2022–2025",
    summary: "Gamified campus guide with a persistent backend connecting desktop, web, and mobile clients.",
    tech: ["C#", "Node.js", "Flutter"],
    impact: ["100+ beta testers", "96.4% satisfaction rating"],
  },
]
