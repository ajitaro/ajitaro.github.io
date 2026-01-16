import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const HERO = {
    name: "Fitriaji Taqiy Robbaanii",
    role: "Mobile Engineer (React Native)",
    summary: "Mobile Engineer with 4+ years of experience building and scaling high-traffic e-commerce applications. Specialized in performance optimization, CI/CD automation, and OTA delivery using CodePush.",
    cta: {
        experience: "View Experience",
        projects: "View Projects"
    }
};

export const EXPERIENCE = [
    {
        company: "Ruparupa",
        role: "Mobile Technology Engineer",
        period: "Sep 2025 – Present",
        description: [
            "Built a short-video feed experience similar to TikTok FYP / Instagram Reels",
            "Led adoption of TypeScript and a feature-driven architecture"
        ]
    },
    {
        company: "Ruparupa",
        role: "Mobile Technology Developer",
        period: "Oct 2021 – Sep 2025",
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
        period: "Oct 2020 – Oct 2021",
        description: [
            "Feature development and bug fixing",
            "Collaboration with QA and senior engineers"
        ]
    }
];

export const PROJECTS = [
    {
        name: "Pabildu",
        type: "SaaS Education Platform",
        description: "Tuition management system for schools",
        tech: ["Django", "Django Tenants", "PostgreSQL", "React Native", "Django Channels"],
        details: [
            "Mobile integration: React Native (barcode scanning)",
            "Real-time features using Django Channels"
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
        items: ["React Native", "React", "Redux Toolkit", "Zustand"]
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
    },
    {
        institution: "Coding Teacher",
        degree: "Taught HTML, CSS, and JavaScript fundamentals to elementary school students",
        gpa: "",
        extra: []
    }
];

export const CONTACT = {
    email: "ftaqiy@gmail.com",
    social: [
        { name: "LinkedIn", url: "#", icon: FaLinkedin }, // Placeholder URL
        { name: "GitHub", url: "#", icon: FaGithub }, // Placeholder URL
        { name: "Email", url: "mailto:ftaqiy@gmail.com", icon: FaEnvelope },
    ],
    cta: "Let’s build high-performance products together."
};
