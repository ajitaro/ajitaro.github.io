import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const HERO = {
    name: "Fitriaji Taqiy Robbaanii",
    role: "Software Engineer",
    summary: "Software Engineer with 4+ years of experience building and scaling high-traffic e-commerce applications. Specialized in performance optimization, CI/CD automation, and OTA delivery using CodePush.",
    cta: {
        experience: "View Experience",
        projects: "View Projects"
    }
};

export const EXPERIENCE = [
    {
        company: "Ruparupa",
        role: "Mobile Technology Engineer",
        period: "Sep 2025 - Present",
        description: [
            "Built a short-video feed experience similar to TikTok FYP / Instagram Reels",
            "Led a mobile apps team effort to adopt TypeScript, improving code quality and reducing bugs"
        ]
    },
    {
        company: "Ruparupa",
        role: "Mobile Technology Developer",
        period: "Oct 2021 - Sep 2025",
        description: [
            "Optimized Product Catalogue load time (~10s → ~1s)",
            "Optimized Checkout load time (~12s → ~1s)",
            "Built a full CI/CD OTA delivery system using CodePush",
            "Tech stack: React Native, Node.js, Express, MySQL, Docker, AWS, CircleCI, Fastlane"
        ]
    },
    {
        company: "Ruparupa",
        role: "Mobile Technology Developer Intern",
        period: "Oct 2020 - Oct 2021",
        description: [
            "Feature development and bug fixing",
            "Collaboration with QA and senior engineers"
        ]
    },
    {
        company: "educourse.id",
        role: "Software Engineer",
        period: "Aug 2019 - Oct 2020",
        description: [
            "Developed full-stack mobile applications for various industries",
            "Built a housing application",
            "Built a Learning Management System (LMS)",
            "Built a laundry management system",
            "Tech stack: React Native, Django"
        ]
    }
];

export const PROJECTS = [
    {
        name: "Pabildu",
        type: "SaaS Education Platform",
        description: "Tuition management system for schools",
        url: "https://pabildu.com",
        tech: ["Django", "Django Tenants", "PostgreSQL", "React Native", "Django Channels", "Websocket"],
        details: [
            "School fee (SPP) management system for tracking student payments",
            "Payment input, reporting, and transaction monitoring in one dashboard",
            "Supports multi-school (multi-tenant) architecture",
            "Real-time transaction updates",
            "Built with a focus on security and deployment readiness"
        ]
    },
    {
        name: "Kuciose",
        type: "SaaS Mini ERP",
        description: "Mini ERP for small businesses",
        url: "",
        tech: ["Django", "Django Tenants", "Django Rest Framework", "PostgreSQL", "React Native"],
        details: [
            "All-in-one ERP platform for managing core business operations",
            "Modular system covering finance, sales, purchasing, and inventory",
            "Centralized master data and authentication services",
            "Monorepo architecture with shared core services",
            "Designed to improve efficiency and data consistency"
        ]
    }
];

export const SKILLS = [
    {
        category: "Languages",
        items: ["JavaScript", "TypeScript", "Python"]
    },
    {
        category: "Mobile",
        items: ["React Native", "React", "Redux Toolkit", "Zustand", "React Query"]
    },
    {
        category: "Performance & Release",
        items: ["Performance Optimization", "CodePush", "Fastlane", "CI/CD (CircleCI)"]
    },
    {
        category: "Backend & API",
        items: ["Node.js", "Express", "Django", "REST API", "WebSocket"]
    },
    {
        category: "Cloud & DevOps",
        items: ["AWS (S3, CloudFront)", "Docker"]
    }
];

export const EDUCATION = [
    {
        institution: "Universitas Prasetiya Mulya",
        degree: "Bachelor’s Degree in Software Engineering",
        gpa: "3.5",
        extra: []
    }
];

export const CONTACT = {
    email: "ftaqiy@gmail.com",
    social: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/ajitaro", icon: FaLinkedin },
        { name: "GitHub", url: "https://github.com/ajitaro", icon: FaGithub },
        { name: "Email", url: "mailto:ftaqiy@gmail.com", icon: FaEnvelope },
    ],
    cta: "Let’s build high-performance products together."
};
