# 🚀 Kuldeep Amreliya — Portfolio

> An Awwwards-inspired personal portfolio showcasing my work as an AI/ML Engineer and Full-Stack Developer.

🌐 **Live Demo:** https://kuldeep-portfolio-rouge.vercel.app

---

# ✨ Overview

This portfolio is built with a modern, minimal, and editorial-inspired design featuring smooth animations, interactive UI elements, and responsive layouts. It highlights my projects, technical skills, professional experience, and education.

## Features

* 🎨 Awwwards-inspired modern UI
* ⚡ Smooth scrolling with Lenis
* ✨ Beautiful animations using Framer Motion
* 📱 Fully responsive design
* 💼 Dedicated Projects section
* 🧠 AI/ML & Full-Stack focused portfolio
* 📄 Resume download
* 📬 Contact section with social links

---

# 🛠 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Framer Motion
* Lenis Smooth Scroll

### Typography

* Clash Display
* Satoshi
* Fraunces
* JetBrains Mono

### Deployment

* Vercel

---

# 📂 Project Structure

```text
frontend/
│
├── public/
│   ├── images/
│   └── resume/
│
├── src/
│   ├── components/
│   ├── lib/
│   │   └── data.js
│   ├── pages/
│   └── App.js
│
├── package.json
└── ...
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/kuldeep-amreliya/portfolio.git
cd portfolio/frontend
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

---

# 📦 Production Build

Generate an optimized production build:

```bash
npm run build
```

The production files will be generated inside:

```text
frontend/build/
```

These files can be deployed to any static hosting platform.

---

# 🌍 Deployment

The portfolio is deployed on **Vercel**.

**Live Website**

https://kuldeep-portfolio-rouge.vercel.app

To deploy manually:

```bash
npm run build
vercel --prod
```

If connected to GitHub, Vercel will automatically redeploy whenever changes are pushed to the `main` branch.

---

# ✏️ Customization

Most portfolio content is managed from a single file:

```text
frontend/src/lib/data.js
```

## Profile

Update:

* Name
* Roles
* Tagline
* Location
* Email
* Phone
* LinkedIn
* GitHub
* Resume URL

---

## Projects

The portfolio currently includes:

### Groot — RAG Document Intelligence

**Tech Stack**

* React.js
* FastAPI
* LangGraph
* FAISS
* PostgreSQL
* Redis
* Qwen 2.5

---

### Fit Readout — Resume × JD Matcher

**Tech Stack**

* React
* Vite
* FastAPI
* Groq LLaMA

---

### CineMind — Movie Recommendation System

**Tech Stack**

* React
* FastAPI
* scikit-learn
* TMDB API

Simply edit the `PROJECTS` array inside `data.js` to update or add new projects.

---

## Skills

Skills are grouped into:

* Languages
* Backend
* Frontend
* AI & GenAI
* Data
* Speech
* Tools

---

## Experience

### AI/ML Engineer Intern

**E-Procurement Technologies Ltd. (Tender Tiger)**

Jan 2026 – Jul 2026

---

### Data & AI Intern

**CSRBOX**

2025

---

## Education

### Bachelor of Engineering (Information Technology)

SAL College of Engineering

Gujarat Technological University (GTU)

2022 – 2026

**CGPA:** 8.68

---

### Higher Secondary Certificate (H.S.C.)

Dipak Shikshan Sankul

---

### Secondary School Certificate (S.S.C.)

Dipak Shikshan Sankul

---

# 🖼 Replacing Images

## Portrait Images

Replace the following files:

```text
frontend/public/images/

portrait-a.jpeg
portrait-b.jpeg
portrait-wide.jpeg
```

Or update their paths in `data.js`.

---

## Resume

Replace:

```text
frontend/public/resume/Kuldeep_Amreliya_FullStack.pdf
```

If the filename changes, update `resumeUrl` in `data.js`.

---

## Project Images

Project images are currently loaded from Unsplash URLs.

Replace the `image` property inside the `PROJECTS` array with your own screenshots whenever desired.

---

# 📬 Contact

📍 Ahmedabad, Gujarat, India

---

# 📄 License

This project is intended for personal portfolio use.

Feel free to fork it for learning purposes, but please provide appropriate attribution if you reuse significant parts of the design or code.

---

⭐ If you like this portfolio, consider giving the repository a **star**.
