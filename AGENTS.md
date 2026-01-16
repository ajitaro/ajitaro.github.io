Create a modern, high-performance personal portfolio website for a Mobile Engineer
named Fitriaji Taqiy Robbaanii (aji).

The website should focus on clarity, professional presentation, and smooth
scroll-based animations using GSAP and ScrollTrigger.

Goal:
- Present a strong professional profile as a Mobile Engineer (React Native)
- Highlight real-world impact, performance improvements, and production experience
- Clean, minimal, developer-focused design (not flashy)

Tech Stack:
- Framework: React + Vite or Next.js (App Router preferred)
- Styling: Tailwind CSS
- Animation: GSAP + ScrollTrigger
- Responsive: Mobile-first, fully responsive
- Data source: Static data (JSON / constants), no CMS, no backend

--------------------------------------------------

PAGE STRUCTURE & CONTENT

1. HERO SECTION
- Large heading: "Fitriaji Taqiy Robbaanii"
- Role subtitle: "Mobile Engineer (React Native)"
- Short summary:
  "Mobile Engineer with 4+ years of experience building and scaling high-traffic
   e-commerce applications. Specialized in performance optimization, CI/CD automation,
   and OTA delivery using CodePush."
- CTA buttons:
  - "View Experience"
  - "View Projects"

Animations:
- Staggered text fade-in on page load
- Subtle parallax movement on scroll

--------------------------------------------------

2. EXPERIENCE SECTION (SCROLL TIMELINE)
Display experiences in a vertical timeline.
Each item animates into view using GSAP ScrollTrigger.

Experience Data:
- Ruparupa — Mobile Technology Engineer (Sep 2025 – Present)
  • Built a short-video feed experience similar to TikTok FYP / Instagram Reels
  • Led adoption of TypeScript and a feature-driven architecture

- Ruparupa — Mobile Technology Developer (Oct 2021 – Sep 2025)
  • Optimized Product Catalogue load time (~10s → ~1s)
  • Optimized Checkout load time (~12s → ~1s)
  • Built a full CI/CD OTA delivery system using CodePush
  • Tech stack: React Native, Node.js, Express, MySQL, Docker, AWS, CircleCI, Fastlane

- Ruparupa — Mobile Technology Developer Intern (Oct 2020 – Oct 2021)
  • Feature development and bug fixing
  • Collaboration with QA and senior engineers

Animations:
- Slide-up + fade-in per timeline item
- Timeline progress indicator animated by scroll position

--------------------------------------------------

3. PROJECTS SECTION
Showcase key projects using animated cards.

Main Project:
- Pabildu — SaaS Education Platform
  • Tuition management system for schools
  • Backend: Django, Django Tenants, PostgreSQL
  • Mobile integration: React Native (barcode scanning)
  • Real-time features using Django Channels

Animations:
- Staggered card reveal on scroll
- Hover interactions (scale, shadow, glow)

--------------------------------------------------

4. SKILLS SECTION
Group skills into categories with animated reveals.

Skill Groups:
- Languages: JavaScript, TypeScript, Python
- Mobile: React Native, React, Redux Toolkit, Zustand
- Performance & Release: Performance Optimization, CodePush, Fastlane, CI/CD (CircleCI)
- Backend & API: Node.js, Express, Django, REST API, WebSocket
- Cloud & DevOps: AWS (S3, CloudFront), Docker

Animations:
- Sequential pop-in or fade-up per skill group on scroll

--------------------------------------------------

5. EDUCATION & TEACHING
- Universitas Prasetiya Mulya — Bachelor’s Degree in Software Engineering (GPA 3.5)
- Coding Teacher:
  • Taught HTML, CSS, and JavaScript fundamentals to elementary school students

Animations:
- Simple fade-in on scroll

--------------------------------------------------

6. CONTACT SECTION
- Email: ftaqiy@gmail.com
- Social links: LinkedIn and GitHub
- CTA text:
  "Let’s build high-performance products together."

Footer:
- Minimal design
- Dark-mode friendly

--------------------------------------------------

ANIMATION GUIDELINES:
- Use GSAP timelines per section
- All animations must be scroll-driven using ScrollTrigger
- Keep animations smooth, subtle, and performance-friendly
- Avoid layout shifts; prefer transform and opacity
- Respect prefers-reduced-motion

CODE QUALITY REQUIREMENTS:
- Modular and reusable components
- Clean folder structure
- Reusable GSAP animation hooks
- Well-commented GSAP timelines
- Production-ready, deployable code

EXPECTED OUTPUT:
- Full source code
- GSAP + ScrollTrigger setup examples
- Best practices for scroll animations
- Ready-to-deploy project
