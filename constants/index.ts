import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaEnvelope } from "react-icons/fa";

// ===== SKILL CATEGORIES (text-based tags instead of images) =====
export const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["Python", "C++", "C", "SQL"],
  },
  {
    title: "Backend & Frameworks",
    skills: ["FastAPI", "Flask", "REST APIs", "AsyncIO", "Uvicorn"],
  },
  {
    title: "Machine Learning",
    skills: [
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Diffusion Models",
    ],
  },
  {
    title: "Data & Databases",
    skills: ["SQLite", "PostgreSQL", "SQL", "Data Analysis"],
  },
  {
    title: "Computer Vision & Visualization",
    skills: ["OpenCV", "Matplotlib", "Seaborn"],
  },
  {
    title: "Core Concepts",
    skills: [
      "DSA",
      "System Design",
      "Cloud Computing",
      "Machine Learning",
      "Data Science & Analytics",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git/GitHub",
      "Docker",
      "Jupyter Notebook",
      "Google Colab",
    ],
  },
] as const;

// Keep legacy arrays empty for compatibility (skills.tsx will use SKILL_CATEGORIES)
export const SKILL_DATA = [] as const;
export const FRONTEND_SKILL = [] as const;
export const BACKEND_SKILL = [] as const;
export const FULLSTACK_SKILL = [] as const;
export const OTHER_SKILL = [] as const;

// ===== SOCIALS =====
export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/shivvrai",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/yashmitrai01",
  },
] as const;

// ===== PROJECTS =====
export const PROJECTS = [
  {
    title: "Conditional DDPM on MNIST",
    description:
      "Implemented a class-conditional Denoising Diffusion Probabilistic Model to generate MNIST digits using classifier-free guidance. Built the entire DDPM pipeline from scratch with progressive noise scheduling, conditional sampling control, and complete visualization utilities.",
    image: "/projects/project-1.png",
    link: "https://github.com/shivvrai/ddpm_mnist",
    tech: "Python, TensorFlow/Keras, NumPy, Matplotlib",
  },
  {
    title: "Library Management System",
    description:
      "Full-stack backend system with role-based access control, JWT authentication, and complete book transaction management. Features admin dashboards, search, statistics, reporting APIs, and concurrency-safe operations.",
    image: "/projects/project-2.png",
    link: "https://library-management-system-fnjr.vercel.app",
    tech: "Python, FastAPI, SQLite, JWT, Pydantic",
  },
  {
    title: "Road Accident Detection Framework",
    description:
      "Intelligent system for real-time accident detection from live video feeds with emergency alerts. Detects abnormal vehicle motion and collision patterns with instant audio alerts and Twilio API integration for emergency SMS/calls.",
    image: "/projects/project-3.png",
    link: "https://github.com/shivvrai/Accident-detection",
    tech: "Python, OpenCV, TensorFlow/Keras, Twilio",
  },
  {
    title: "Airline Grievance Data Analysis",
    description:
      "Exploratory Data Analysis on airline grievance data to uncover complaint trends, resolution rates, and customer satisfaction patterns. Features visual dashboards with pie charts, bar graphs, heatmaps, and correlation analysis.",
    image: "/projects/project-4.png",
    link: "https://github.com/shivvrai/Airline_data_visulaization",
    tech: "Python, Pandas, NumPy, Matplotlib, Seaborn",
  },
  {
    title: "Sorting Algorithm Visualizer",
    description:
      "Interactive educational tool with step-by-step sorting execution and performance analysis. Visualizes Bubble, Selection, Insertion, Merge, Quick, Heap, and Counting sorts with real-time metrics tracking.",
    image: "/projects/project-5.png",
    link: "https://sorting-algorithm-visualizerv.vercel.app/",
    tech: "Python, FastAPI, HTML/CSS/JS, REST APIs",
  },
] as const;

// ===== ACHIEVEMENTS =====
export const ACHIEVEMENTS = [
  {
    icon: "🏆",
    title: "High CGPA — 8.84/10",
    description:
      "Maintained a CGPA of 8.84/10, demonstrating consistent academic performance and discipline.",
    meta: "Lovely Professional University",
    link: null,
  },
  {
    icon: "🧮",
    title: "Maths Olympiad — Zonal Rank 54",
    description:
      "Secured Zonal Rank 54 in the International Mathematics Olympiad, demonstrating exceptional mathematical reasoning and problem-solving ability.",
    meta: "Mathematics • Olympiad • Zonal Level",
    link: null,
  },
  {
    icon: "☁️",
    title: "Elite Certification — Cloud Computing (NPTEL)",
    description:
      "Achieved Elite status in NPTEL Cloud Computing, covering distributed systems, virtualization, and cloud architecture fundamentals.",
    meta: "NPTEL • Cloud Computing • Distributed Systems",
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S153730322704257923.pdf",
  },
  {
    icon: "🎯",
    title: "JEE Mains & Advanced — 97 Percentile",
    description:
      "Scored 97 percentile in JEE Mains and Advanced, ranking among the top 3% of over 1 million candidates nationwide.",
    meta: "JEE Mains • JEE Advanced • Top 3%",
    link: null,
  },
  {
    icon: "📊",
    title: "DSA Practice — 400+ Problems",
    description:
      "Solved 400+ problems across platforms, focusing on optimized solutions and deep understanding of time and space complexity.",
    meta: "LeetCode • DSA • Optimization",
    link: null,
  },
] as const;

// ===== EDUCATION =====
export const EDUCATION_DATA = {
  degree: "Bachelor of Technology in Computer Science",
  institution: "Lovely Professional University (LPU), Punjab",
  cgpa: "8.84/10",
  specialization: "Pursuing specialization in AI & Machine Learning",
  coursework: [
    "📊 Data Structures & Algorithms",
    "🤖 Machine Learning Fundamentals",
    "🧠 Deep Learning & Neural Networks",
    "🏗️ System Design & Architecture",
    "💾 Database Management Systems",
    "☁️ Cloud Computing",
  ],
} as const;

// ===== FOOTER =====
export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/shivvrai",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/yashmitrai01",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email Me",
        icon: FaEnvelope,
        link: "mailto:yasmitrai01@gmail.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Resume",
        icon: null,
        link: "/CV.pdf",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:yasmitrai01@gmail.com",
      },
    ],
  },
] as const;

// ===== NAV LINKS =====
export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Achievements",
    link: "#achievements",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Education",
    link: "#education",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/shivvrai",
};
