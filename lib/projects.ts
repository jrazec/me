import { StaticImageData } from "next/image";
import bk from "../public/bk.jpeg";
import bk_gallery from "../public/bk-gallery.png";
import bk_analytics from "../public/bk-analytics.png";
import bk_modal1 from "../public/bk-modal1.png";
import bk_modal2 from "../public/bk-modal2.png";
import bk_gis1 from "../public/bk-gis1.png";
import bk_gis2 from "../public/bk-gis2.png";
import bk_metrics from "../public/bk-metrics.png";

import qroom0 from "../public/qroom0.png";
import qroom1 from "../public/qroom1.png";
import qroom2 from "../public/qroom2.png";
import qroom3 from "../public/qroom3.jpeg";
import qroom4 from "../public/qroom4.jpeg";
import qroom5 from "../public/qroom5.png";
import qroom6 from "../public/qroom6.jpeg";
import qroom7 from "../public/qroom7.jpeg";
import qroom8 from "../public/qroom8.jpeg";
import qroom9 from "../public/qroom9.png";
import qroom10 from "../public/qroom10.png";
import qroom11 from "../public/qroom11.png";
import qroom13 from "../public/qroom13.png";

import bsu_proof1 from "../public/bsu_proof1.jpeg";
import bsu_proof2 from "../public/bsu_proof2.jpeg";

import bsu_tcc_1 from "../public/bsu_tcc_1.png";
import bsu_tcc_2 from "../public/bsu_tcc_2.png";
import bsu_tcc_3 from "../public/bsu_tcc_3.png";
import bsu_tcc_4 from "../public/bsu_tcc_4.png";
import bsu_tcc_5 from "../public/bsu_tcc_5.png";
import bsu_tcc_6 from "../public/bsu_tcc_6.png";
import bsu_tcc_7 from "../public/bsu_tcc_7.png";
import bsu_tcc_8 from "../public/bsu_tcc_8.png";
import bsu_tcc_9 from "../public/bsu_tcc_9.png";
import bsu_tcc_10 from "../public/bsu_tcc_10.png";
import tneu_1 from "../public/tneu1.png";
import tneu_2 from "../public/tneu2.png";
import tneu_3 from "../public/tneu3.png";

import tcc_1 from "../public/tcc_1.png";
import tcc_2 from "../public/tcc_2.png";
import tcc_3 from "../public/tcc_3.png";
import tcc_4 from "../public/tcc_4.png";
import unnamed from "../public/unnamed.gif";

import techs from "../public/techs.jpeg";

import j1 from "../public/j1.jpeg";
import j2 from "../public/j2.jpeg";
import j3 from "../public/j3.jpeg";
import j4 from "../public/j4.jpeg";
import j5 from "../public/j5.jpeg";
import j6 from "../public/j6.jpeg";
import j7 from "../public/j7.jpeg";
import j8 from "../public/j8.jpeg";
import j9 from "../public/j9.jpeg";
import j10 from "../public/j10.jpeg";

import hiho from "../public/hiho.jpeg";
export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  year: string;
  summary: string;
  tech: string[];
  impact: string[];
  detailedDescription?: string;
  detailedDescription2?: string;
  detailedDescription3?: string;
  collaborators?: string[];
  carousel?: Array<{
    type: "image" | "video";
    src: string | StaticImageData;
    alt?: string;
    vid?: React.ReactNode;
  }>;
  proofs?: Array<{
    src: string | StaticImageData;
    caption?: string;
  }>;
  features: Array<{
    title: string;
    description: string;
  }>;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  // ------- BaraKollect -------
  {
    slug: "barakollect",
    name: "BaraKollect",
    subtitle: "Digital Bean Repository & Vision Pipeline",
    year: "Aug 2025 - Dec 2025",
    summary:
      "Liberica/Barako bean repository with YOLOv11 vision, ArUco calibration, GIS via PostGIS, and optimized Supabase storage.",
    tech: [
      "React/TS",
      "Django/Python",
      "Supabase",
      "PostGIS",
      "YOLOv11",
      "Git",
      "Railway",
      "Vercel",
    ],

    impact: [
      "Reduced batch load time from 9s to 55ms",
      "Achieved 88.2% mAP50-95 across the CV pipeline with 8.9ms inference time",
      "Enabled millimeter-level morphological measurements using ArUco markers",
    ],
    features: [
      {
        title: "Precision Bean Measurement",
        description:
          "YOLOv11 + watershed + ArUco for millimeter-accurate morphology.",
      },
      {
        title: "Role-Based Data Ecosystem",
        description:
          "Three roles with RLS-secured access for submissions, annotations, and analytics.",
      },
      {
        title: "Optimized Image Pipeline",
        description:
          "Raw SQL and batched queries cut batch loads from 9s to 55ms.",
      },
      {
        title: "Geospatial Farm Mapping",
        description:
          "PostGIS maps show farms, sample origins, and quality spread.",
      },
      {
        title: "Research-Grade Annotation Tools",
        description:
          "Built-in validation, labeling, and morphology tools for clean datasets.",
      },
      {
        title: "Scalable REST Architecture",
        description:
          "30+ Supabase endpoints for uploads, metadata, analytics, and roles.",
      },
      {
        title: "Submission Tracking for Farmers",
        description: "Dashboard to track uploads, history, and validation.",
      },
      {
        title: "Dataset Quality Control",
        description:
          "Admin review, metadata fixes, exports, and integrity checks.",
      },
      {
        title: "Research Analytics Dashboard",
        description:
          "Stats, measurements, and visuals for morphology and ag insights.",
      },
    ],
    detailedDescription:
      "BaraKollect is a full-stack imaging and analytics platform designed to help farmers, researchers, and administrators collaborate around coffee bean quality assessment. Farmers upload calibrated bean images, which are automatically processed and stored alongside geographic farm data. Researchers use the platform to validate submissions, annotate morphological traits, and generate analytics that support academic and industry studies. Administrators oversee system health, manage user roles, and maintain data quality across the entire pipeline—creating an ecosystem where ground-level farming data becomes structured, research-ready information.",
    detailedDescription2:
      "Beyond its user-facing workflows, the platform’s architecture is optimized for speed, accuracy, and scalability. It integrates a high-accuracy YOLOv11 detection pipeline with watershed segmentation and ArUco calibration to produce millimeter-level measurements regardless of camera or distance. Supabase’s RLS-secured schema handles access control across three roles, supported by 16 normalized tables and 30+ REST endpoints built for multi-tenant workflows. The system powers fast data retrieval using raw SQL joins and batched ORM queries, enabling researchers to analyze large bean datasets efficiently while giving farmers instant feedback on their submissions.",
    carousel: [
      { type: "image", src: bk, alt: "BaraKollect Dashboard" },
      { type: "image", src: bk_gallery, alt: "Beans Gallery Section" },
      { type: "image", src: bk_analytics, alt: "Analytics Section" },
      {
        type: "image",
        src: bk_modal1,
        alt: "Extracted Morphological Features",
      },
      { type: "image", src: bk_modal2, alt: "Morphological Analysis" },
      { type: "image", src: bk_gis1, alt: "GIS Map Feature" },
      { type: "image", src: bk_gis2, alt: "Location Based Analysis" },
      {
        type: "video",
        src: "https://youtube.com/embed/aEve-f2vqss",
        alt: "BaraKollect Demo",
      },
    ],
    proofs: [{ src: bk_metrics, caption: "88% mAP50–95, 8.9ms inference" }],
    liveUrl: "https://barakollect.com",
    repoUrl: "https://github.com/jrazec/barakollect",
  },

  // ------- QRoom -------
  {
    slug: "qroom",
    name: "QRoom",
    subtitle: "QR-based Classroom Management + AI Feedback",
    year: "Nov 2024 - Dec 2024",
    summary:
      "Real-time, centralized and QR-based room management system with AI-assisted analysis",
    tech: ["React", "Node.js", "Gemini API"],

    features: [
      {
        title: "QR Code Room Access",
        description: "Scan QR codes to check in/out of rooms and log usage.",
      },
      {
        title: "AI-Powered Anomaly Detection",
        description: "Google Gemini analyzes room data for irregularities.",
      },
      {
        title: "Real-Time Analytics Dashboard",
        description:
          "Visualize room availability, room usage patterns and utilization insights.",
      },
      {
        title: "User Role Management",
        description: "Different access levels for admins, staff, and users.",
      },
    ],
    liveUrl: "https://qroom-omega.vercel.app/",
    repoUrl: "https://github.com/jrazec/qroom/",
    impact: [
      "Deployed for 40+ rooms with real-time room availability tracking",
      "Centralized room scheduling reducing student-proctor-room conflicts",
    ],
    detailedDescription:
      "This project was developed to address common issues in room utilization such as schedule conflicts, lack of real-time visibility, and delayed reporting of room-related problems. Traditional room management processes often rely on manual coordination, making it difficult for students, faculty, and administrators to quickly access accurate room information. The system centralizes room data and schedules, allowing users to instantly view room availability and details by scanning QR codes placed in each room.",
    detailedDescription2:
      "The platform implements role-based access to support different user responsibilities, enabling administrators and faculty to manage rooms, schedules, and occupancy efficiently while regular users can view room information and submit reports. An AI-powered feedback mechanism integrated via the Gemini API analyzes user-submitted reports such as cleanliness or equipment issues, helping prioritize maintenance actions. By combining QR-based access, structured scheduling, and intelligent feedback analysis, the system improves operational efficiency and overall room management reliability.",
    carousel: [
      { type: "image", src: qroom0, alt: "QRoom Admin Dashboard" },
      { type: "image", src: qroom1, alt: "QRoom Student/Proctor Dashboard" },
      { type: "image", src: qroom2, alt: "User Schedule Section" },
      { type: "image", src: qroom3, alt: "User Schedule Description" },
      {
        type: "image",
        src: qroom5,
        alt: "Room Schedule and Occupancy Section",
      },
      { type: "image", src: qroom6, alt: "Building Search Section" },
      { type: "image", src: qroom4, alt: "Room Search Section" },
      { type: "image", src: qroom8, alt: "AI-Powered Room Analysis" },
      { type: "image", src: qroom7, alt: "Chat Report Section" },
      { type: "image", src: qroom9, alt: "Centralized Room Scheduling" },
      {
        type: "image",
        src: qroom10,
        alt: "Real-Time Room Availability Dashboard",
      },
      { type: "image", src: qroom11, alt: "Room Reports Section" },
      { type: "image", src: qroom13, alt: "Account Management" },
    ],
    proofs: [],
  },

  // ------- BSU RPG Projects -------

  // ------- BSUniverse Cross-Platform Version -------
  {
    slug: "bsuniverse",
    name: "BSUniverse!",
    subtitle:
      "Pokemon-inspired RPG of BatStateU Lipa Campus [Cross-Platform Version]",
    year: "June 2025",
    features: [
      {
        title: "Cross-Platform Compatibility",
        description:
          "Unified backend supporting desktop, web, and mobile platforms.",
      },
      {
        title: "Seamless User Experience",
        description: "Consistent gameplay and features across all devices.",
      },
      {
        title: "Responsive Design",
        description: "Optimized UI for various screen sizes and resolutions.",
      },
    ],
    summary:
      "Quest-driven 2D RPG featuring NPC interactions, persistent data management, and cross-platform deployment.",
    tech: ["Flutter", "Flame Engine", "Firebase", "Tiled"],
    impact: ["100+ beta testers", "96.4% satisfaction rating"],
    detailedDescription:
      "BSU-niverse is a Pokémon-inspired 2D role-playing game that originated as our sophomore-year final project for Database Management Systems, initially titled The Campus Chronicles and developed as a C#.NET desktop application using drag-and-drop components. As our skills progressed, the project was reworked in Advanced DBMS into a web-based system using Kaboom.js for the game frontend, Node.js for the backend, and EJS for templating, emphasizing improved database integration and system architecture. Eventually, the game was recreated for our Application Development course using Flutter with the Flame game engine, focusing on cross-platform support, cleaner architecture, and better performance. This project reflects an iterative development journey that demonstrates adaptability, continuous learning, and the practical application of database concepts, full-stack development, and game development across multiple technologies.",
    detailedDescription2: " ",
    carousel: [
      {
        type: "video",
        src: "https://youtu.be/7yjdNrOkcuQ",
        alt: "BSUniverse Gameplay",
      },
    ],
    liveUrl: "https://github.com/jrazec/bsu-niverse",
    repoUrl: "https://github.com/jrazec/bsu-niverse",
    proofs: [bsu_proof1, bsu_proof2],
  },

  // ------- BSUfied Web Version -------
  {
    slug: "bsufied",
    name: "BSUfied",
    subtitle: "Pokemon-inspired RPG of BatStateU Lipa Campus [Web Version]",
    year: "March 2024",
    summary:
      "Web-based 2D campus guide with tasks, exploration, and admin analytics.",
    tech: [
      "HTML/CSS",
      "Javascript",
      "Node.js",
      "Kaboom.js",
      "Bootstrap",
      "MySQL",
      "EJS",
    ],
    impact: ["100+ beta testers", "96.4% satisfaction rating"],
    features: [
      {
        title: "2D Campus Exploration",
        description: "Navigate a pixel-art version of BatStateU Lipa Campus.",
      },
      {
        title: "Task Completion System",
        description:
          "Engage with NPCs to complete quests and learn about campus.",
      },
      {
        title: "Admin Analytics Dashboard",
        description: "Tools for monitoring user activity and game performance.",
      },
      {
        title: "Character Customization",
        description: "Choose outfits and accessories for your in-game avatar.",
      },
      {
        title: "Progress Tracking",
        description: "View completed tasks and overall game achievements.",
      },
    ],
    detailedDescription:
      "This application serves as a gamified assessment tool, primarily designed for freshmen at Batangas State University Lipa Campus. It brings the excitement of Pokémon into the realm of educational assessment, providing an interactive and enjoyable way for students to engage with the university premises. Students can wander around the whole campus, familiarizing different rooms, offices, and school laboratories. This game serves as the web extension of our previous game, maintaining the core concept where users must search for a specific room and solve a question or puzzle to advance. By bringing the game online, we've expanded its accessibility and functionality, while still preserving the essence of exploration and problem-solving from the original version. The game also features a comprehensive admin side, which provides a range of tools to monitor and manage users. Administrators can check user activity, analyze player performance, and gather data on how players interact with the game",
    detailedDescription2:
      "In addition, the admin has full CRUD (Create, Read, Update, Delete) capabilities within the system. This means the admin can create new user profiles, update existing ones, delete entries, and modify the game’s database as needed. These features give administrators complete control over the management of both user data and the game environment, enabling efficient maintenance and customization.",
    carousel: [
      { type: "video", src: "bsuniverse", alt: "BSUniverse Gameplay" },
      { type: "image", src: tcc_1, alt: "Landing page" },
      { type: "image", src: tcc_2, alt: "BSU RPG Map" },
      { type: "image", src: tcc_3, alt: "Admin dashboard" },
      { type: "image", src: tcc_4, alt: "Admin - Creation of Quest" },
    ],
    liveUrl: "https://github.com/jrazec/tcc_web_app",
    repoUrl: "https://github.com/jrazec/tcc_web_app",
    proofs: [bsu_proof1, bsu_proof2],
  },

  // ------- BSU-TNEU Lipa RPG -------
  {
    slug: "bsu-rpg",
    name: "BSU-TNEU Lipa RPG",
    subtitle: "Pokemon-inspired RPG of BatStateU Lipa Campus [Desktop Version]",
    year: "December 2023",
    summary:
      "Gamified campus exploration and assessment for freshmen with NPC tasks and admin tools v2",
    tech: ["C#", "Windows Forms", "XAMPP", "MySQL"],
    features: [
      {
        title: " Location-Based Quests",
        description: "Explore campus and complete tasks assigned by NPCs.",
      },
      {
        title: "Character Customization",
        description:
          "Personalize your avatar with uniforms, PE attire, and org shirts.",
      },
      {
        title: "Admin Management Panel",
        description: "Monitor player progress and manage the game database.",
      },
      {
        title: "Interactive Campus Map",
        description:
          "Navigate the campus with an in-game map highlighting key locations.",
      },
      {
        title: "Progress Tracking",
        description: "Track completed tasks and overall game progress.",
      },
    ],
    impact: ["100+ beta testers", "96.4% satisfaction rating"],
    detailedDescription:
      "A project developed in my sophomore year and was created due to freshman dilemmas. Navigating a new university campus poses a significant challenge for incoming freshmen or first-year students—specifically, in Batangas State University-TNEU Lipa Campus. The intricate maze of classrooms, offices, and facilities often becomes an intimidating obstacle in their early academic journey. The unfamiliar layout can easily overwhelm newcomers, hindering their ability to accustom and find their way around swiftly. Recognizing this concern, our initiative aims to tackle this challenge head-on by devising an innovative solution—the group has conceptualized and developed a game tailored to assist incoming students in navigating the campus confidently and seamlessly. Through interactive gameplay, students can explore virtual representations of classrooms, offices, and key locations, allowing them to navigate the campus virtually before stepping foot on the campus grounds. This immersive experience aims to ease the transition and equip students with a visual understanding of the campus layout, helping them feel more optimistic and prepared as they begin their academic journey.",
    detailedDescription2:
      "The game is exclusively designed to benefit incoming freshmen at Batangas State University Lipa, but can also cater to students of different year levels. It is important to note that while we aim to support these specific students, our app does come with certain limitations. Time and manpower constraints have influenced the scope of our project, impacting various aspects of the app. These limitations manifest in areas such as operating system compatibility, real-time connectivity features, user experience enhancements, and the complexity of administrative controls. While we strive for a comprehensive solution, these constraints have shaped the boundaries of our current development.",
    detailedDescription3:
      "Includes admin panel for database management and player monitoring.",
    collaborators: ["jrazec", "auclinn", "crlsbrook"],
    carousel: [
      { type: "image", src: unnamed, alt: "BSUniverse Gameplay" },
      { type: "image", src: bsu_tcc_1, alt: "BSU RPG Main Menu" },
      { type: "image", src: bsu_tcc_2, alt: "BSU RPG Map" },
      { type: "image", src: bsu_tcc_3, alt: "BSU RPG Character Customization" },
      { type: "image", src: tneu_1, alt: "BSU RPG NPC interaction" },
      { type: "image", src: tneu_2, alt: "BSU RPG Quest Lookup" },
      { type: "image", src: tneu_3, alt: "BSU RPG Room Navigation" },
      { type: "image", src: bsu_tcc_4, alt: "BSU RPG Completed Quest" },
      { type: "image", src: bsu_tcc_5, alt: "BSU RPG Tasks" },
      { type: "image", src: bsu_tcc_6, alt: "Admin Dashboard" },
      { type: "image", src: bsu_tcc_7, alt: "Create Records/Backup section" },
      { type: "image", src: bsu_tcc_8, alt: "Records Section" },
      { type: "image", src: bsu_tcc_9, alt: "Account Management" },
      { type: "image", src: bsu_tcc_10, alt: "Record Deletion" },
    ],
    liveUrl: "https://github.com/jrazec/bsu-tneu_lipa_rpg/",
    repoUrl: "https://github.com/jrazec/bsu-tneu_lipa_rpg/",
    proofs: [bsu_proof1, bsu_proof2],
  },

  // ------- Java POS System -------
  {
    slug: "pos",
    name: "JabaPOS",
    subtitle: "Point of Sale System for Grocery",
    year: "May 2025",

    summary:
      "A role-based POS system that automates sales transactions, inventory tracking, and reporting to improve operational efficiency.",
    tech: ["SpringBoot", "Thymeleaf", "Java"],
    features: [
      {
        title: "Role-Based Access Control",
        description:
          "Separate access levels for admin, inventory personnel, and cashier to ensure secure and organized operations.",
      },
      {
        title: "Sales Transactions & Receipt Generation",
        description:
          "Handles checkout, billing, and automatic receipt generation for daily sales operations.",
      },
      {
        title: "Inventory Management",
        description:
          "Manage products, categories, and stock levels with automatic inventory deduction after each sale.",
      },
      {
        title: "Daily Sales & Cashier Reports",
        description:
          "Provides summarized sales reports and cashier performance insights for better decision-making.",
      },
      {
        title: "Low Stock Alerts",
        description:
          "Notifies inventory personnel when product levels are low to prevent shortages and disruptions.",
      },
      {
        title: "Manual Payment Method Tagging",
        description:
          "Allows accurate tagging of payment methods to improve financial records and data quality.",
      },
    ],

    impact: [
      "Met client requirements for POS functionalities",
      "Sales and Inventory management",
    ],
    detailedDescription: " ",
    detailedDescription2: " ",
    carousel: [
      { type: "image", src: j10, alt: "Admin - Dashboard" },
      { type: "image", src: j5, alt: "Cashier - POS Payment" },
      { type: "image", src: j3, alt: "Cashier - POS Void Mechanism" },
      { type: "image", src: j7, alt: "Cashier - POS Payment with Discounts" },
      { type: "image", src: j2, alt: "Ready to print receipt generation" },
      { type: "image", src: j4, alt: "Past Purchase Records/Log" },
      { type: "image", src: j6, alt: "Manager - Product management" },      
      { type: "image", src: j8, alt: "Manager - Order Management" },
      { type: "image", src: j9, alt: "Admin - Transaction Logs" },

    ],
    liveUrl: "https://jrazec.github.io/pos/",
    repoUrl: "https://github.com/jrazec/pos",
  },

  // ------- TechIS Official Website -------
  {
    slug: "techis",
    name: "TechIS Official Website",
    subtitle: "TechIS Student Organization Website",
    year: "August 2024",
    features: [
      {
        title: "Informational Pages",
        description:
          "Comprehensive sections detailing TechIS's mission, vision, and activities.",
      },
    ],
    summary:
      "Official website for the TechIS student organization at Batangas State University Lipa Campus.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Git"],
    impact: [
      "Increased online presence for TechIS",
      "Reached 700+ social media followers",
    ],
    detailedDescription: " ",
    detailedDescription2: " ",
    carousel: [{ type: "image", src: techs, alt: "TechIS Website Homepage" }],
    liveUrl: "https://jrazec.github.io/techis_website/",
    repoUrl: "https://github.com/jrazec/techis_website",
  },

    // ------- Portfolio -------
  {
    slug: "portfolio",
    name: "Minimalist Portfolio",
    subtitle: "Web Systems and Technologies Activity",
    year: "September 2024",

    summary:
      "Wanna see more old projects of mine when I was still learning web devv? Check this one out!",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      {
        title: "Minimalist Design",
        description:
          "Clean and simple layout to showcase projects effectively.",
      },
    ],

    impact: [
      ":>>"
    ],
    detailedDescription: " ",
    detailedDescription2: " ",
    carousel: [{ type: "image", src: hiho, alt: "Minimalist Portfolio Homepage" }],
    liveUrl: "https://jrazec.github.io/portfolio/",
    repoUrl: "https://github.com/jrazec/portfolio",
  },

];
