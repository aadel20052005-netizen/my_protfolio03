# Ahmed Adel — Machine Learning Engineer & Data Scientist Portfolio

A modern, responsive single-page portfolio built with Vite + React 18 + TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts automatically. For a production build:

```bash
npm run build
npm run preview
```

## Assets

Place the following files in `/public`:

- `profile.jpg` — Profile photo for the hero section
- `Ahmed_Adel_CV.pdf` — CV linked from all "Download CV" buttons
- `project1.jpg` — Screenshot for "Employee Management System"
- `project2.jpg` — Screenshot for "DVD Rental Data Analysis"
- `project3.jpg` — Screenshot for "Company Database Schema Analysis"

If any image is missing, the site displays a tasteful gradient placeholder automatically — no broken image icons.

## Tech Stack

- **Vite + React 18 + TypeScript** (strict mode)
- **Tailwind CSS** with CSS-variable design tokens and `darkMode: 'class'`
- **Framer Motion** for animations (respects `prefers-reduced-motion`)
- **lucide-react** for icons
- **Inter** (body) + **Space Grotesk** (headings) via Google Fonts

## Features

- Dark/light theme with system preference detection, persisted to localStorage, no flash on load
- Smooth-scroll anchor navigation with active-section highlighting
- Animated hero with cycling role text and glowing profile photo
- Count-up stats triggered on scroll
- Project showcase with hover effects and tech badges
- Skills grid with categorized tech stack and certifications
- Contact section with direct links (no fake form)
- Stylized footer featuring the signature quote
- Floating scroll-to-top button
- Fully responsive (360px → 1440px), WCAG AA contrast, keyboard navigable
