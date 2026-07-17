export const PHOTOS = {
  portraitWide: "/images/portrait-wide.jpeg",
  portraitA: "/images/portrait-a.jpeg",
  portraitB: "/images/portrait-b.jpeg",
};

export const PROFILE = {
  name: "Kuldeep Amreliya",
  shortName: "Kuldeep",
  roles: ["Software Engineer", "Full-Stack Developer", "AI Engineer"],
  tagline: [
    "Building intelligent",
    "systems at the edge",
    "of code & cognition.",
  ],
  location: "Ahmedabad, Gujarat — India",
  email: "kamreliya9@gmail.com",
  phone: "+91 9913583491",
  linkedin: "https://www.linkedin.com/in/k-amreliya",
  github: "https://github.com/kuldeep-amreliya",
  resumeUrl: "/resume/Kuldeep_Amreliya_FullStack.pdf",
  intro:
    "Python full-stack engineer with a bias for AI systems — I design RESTful APIs, RAG pipelines, and production-grade LLM workflows. Currently shipping enterprise GenAI at Tender Tiger.",
};

export const MANIFESTO = [
  {
    n: "01",
    title: "Systems, not screens.",
    body: "I care about the pipes as much as the paint. Clean APIs, precise data flows, and interfaces that respect the intelligence beneath them.",
  },
  {
    n: "02",
    title: "AI as a craft.",
    body: "Retrieval, agents, embeddings — tools, not magic. My work at Tender Tiger revolves around making LLMs reliable, contextual, and auditable in enterprise workflows.",
  },
  {
    n: "03",
    title: "Ship with intent.",
    body: "Every commit answers a real question. I build what needs to exist, then sharpen it — quiet products with sharp edges.",
  },
];

export const PROJECTS = [
  {
    id: "groot",
    index: "001",
    name: "Groot — RAG Document Intelligence",
    year: "2025",
    role: "Full-stack · LLM Engineering",
    stack: ["ReactJS", "FastAPI", "LangGraph", "FAISS", "PostgreSQL", "Redis", "Qwen 2.5"],
    summary:
      "Production-ready LLM assistant for multi-turn document conversations. RAG pipeline with FAISS, Postgres, Redis, OCR & spreadsheet analytics.",
    image:
      "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  },
  {
    id: "fitreadout",
    index: "002",
    name: "Fit Readout — Resume × JD Matcher",
    year: "2025",
    role: "Full-stack · Applied ML",
    stack: ["React", "Vite", "Tailwind", "FastAPI", "SQLite", "SQLAlchemy", "Groq LLaMA"],
    summary:
      "LLM-powered ATS engine — structured profile extraction, semantic skill mapping, explainable scoring, and persistent match history.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  },
  {
    id: "cinemind",
    index: "003",
    name: "CineMind — Recommendation Engine",
    year: "2024",
    role: "Full-stack · ML",
    stack: ["React", "Vite", "FastAPI", "scikit-learn", "Pandas", "TMDB"],
    summary:
      "Full-stack movie discovery — content-based recommendations, real-time search & metadata via TMDB, deployed on a lean FastAPI backend.",
    image:
      "https://images.unsplash.com/photo-1489599735734-79b4169c2a78?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  },
];

export const SKILLS = [
  {
    group: "Languages",
    items: ["Python", "SQL", "JavaScript", "HTML5", "CSS3"],
  },
  {
    group: "Backend",
    items: ["FastAPI", "Flask", "Django", "REST", "SQLAlchemy"],
  },
  { group: "Frontend", items: ["React.js", "Vite", "Tailwind CSS"] },
  {
    group: "AI · GenAI",
    items: [
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "AI Agents",
      "Prompt Eng.",
      "MCP",
      "HF Transformers",
      "scikit-learn",
    ],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "Redis", "FAISS", "ChromaDB"],
  },
  {
    group: "Speech",
    items: ["Whisper", "Faster-Whisper", "Silero VAD", "STT · TTS"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "Uvicorn"],
  },
];

export const EXPERIENCE = [
  {
    role: "AI / ML Engineer — Intern",
    company: "E-Procurement Technologies Ltd. (Tender Tiger)",
    period: "Jan 2026 — Jul 2026",
    bullets: [
      "Built RAG pipelines with LangChain, LangGraph, Qwen, FAISS & PostgreSQL for semantic retrieval and multi-turn Q&A.",
      "Shipped FastAPI services powering enterprise GenAI — document intelligence, Go/No-Go recommendations & agentic workflows.",
      "Designed an OAuth 2.0 secured MCP server with custom tool integrations for Gmail & workflow automation.",
    ],
  },
  {
    role: "Data & AI — Intern",
    company: "CSRBOX",
    period: "2025",
    bullets: [
      "Preprocessed real-world datasets with Python & Pandas; supported data-driven workflows.",
      "Built dashboards and visual reports for interpretation & presentation.",
    ],
  },
];

export const EDUCATION = [
  {
    school: "SAL College of Engineering · GTU",
    degree: "B.E. — Information Technology",
    period: "2022 — 2026",
    detail: "CGPA 8.68",
  },
  {
    school: "Dipak Shikshan Sankul",
    degree: "H.S.C.",
    period: "2022",
    detail: "",
  },
  {
    school: "Dipak Shikshan Sankul",
    degree: "S.S.C.",
    period: "2020",
    detail: "",
  },
];

export const ACHIEVEMENTS = [
  "Published Research Paper — IJSREM Journal (2025)",
  "Microsoft Data & AI Internship Program (2025)",
];
