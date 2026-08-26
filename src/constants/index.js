import { mindcoder, techsaga, codebetter, ciss, p1, p2, p3, p4, p5, p6, p7, p8, p9, 
    E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14,
    y1, y2, y3, y4, y5, y6, y7, y8, y9,
    
 } from "../assets/images";

import {
    car,
    contact,
    css,
    estate,
    express,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    java,
    swift,
    you,
    profile,
    excellence,
    heal

} from "../assets/icons";

// constants/index.js

export const skills = [
  // Programming Languages
  { name: "Python", category: "programming", iconName: "python", color: "#3776AB", level: "Primary Teaching" },
  { name: "JavaScript", category: "programming", iconName: "javascript", color: "#F7DF1E", level: "Intermediate" },
  { name: "C / C++", category: "programming", iconName: "cplusplus", color: "#00599C", level: "Foundational" },

  // Databases & Systems
  { name: "SQL & RDBMS", category: "database", iconName: "database", color: "#F29111", level: "Core Subject" },
  { name: "Database Design", category: "database", iconName: "dbdesign", color: "#00758F", level: "Normalization & Queries" },
  { name: "Git / GitHub", category: "database", iconName: "git", color: "#F05032", level: "Version Control" },

  // Web Technologies
  { name: "HTML5", category: "web", iconName: "html5", color: "#E34F26", level: "Advanced" },
  { name: "CSS3 / Tailwind", category: "web", iconName: "css3", color: "#1572B6", level: "Advanced" },
  { name: "React.js", category: "web", iconName: "react", color: "#61DAFB", level: "Frontend" },

  // Core CS & Pedagogy
  { name: "Computer Fundamentals", category: "core", iconName: "computer", color: "#4A5568", level: "Lectures & Labs" },
  { name: "Data Structures", category: "core", iconName: "dsa", color: "#805AD5", level: "Academic Theory" },
  { name: "MS Office Suite", category: "core", iconName: "msoffice", color: "#D83B01", level: "Lab Training" },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/rachanasen346',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rachana-sen/',
    }
];

export const navLinks = [
  { id: "home", title: "Home", path: "home" },
  { id: "about", title: "About", path: "about" },
  { id: "experience", title: "Teaching & Experience", path: "experience" },
  { id: "skills", title: "Skills", path: "skills" },
  { id: "projects", title: "Projects", path: "projects" },
  { id: "contact", title: "Contact", path: "contact" },
];

// constants/index.js

export const academicProjects = [
  {
    id: "student-management",
    emoji: "🎓",
    name: "Student Academic Management System",
    description: "Full-stack web application designed for managing student records, attendance tracking, and grading metrics with normalized relational database structures.",
    tags: ["React", "SQL", "JavaScript", "CSS3"],
    github: "https://github.com",
    link: "https://example.com"
  },
  {
    id: "online-examination-portal",
    emoji: "📝",
    name: "Online Examination & Quiz Portal",
    description: "Interactive assessment platform facilitating timed MCQ evaluations, automated score calculation, and performance analytics.",
    tags: ["JavaScript", "HTML5", "CSS3", "SQL"],
    github: "https://github.com",
    link: "https://example.com"
  }
];

export const pythonProjects = [
  {
    id: "python-crud-app",
    emoji: "🐍",
    name: "Database-Driven Python Application",
    description: "Desktop/CLI-based management system implementing CRUD database operations using Python and SQLite/MySQL backends.",
    tags: ["Python", "SQL", "SQLite", "Data Handling"],
    github: "https://github.com",
    link: "https://example.com"
  },
  {
    id: "data-analysis-scripts",
    emoji: "📊",
    name: "Automated Student Assessment Analyzer",
    description: "Python automation scripts developed to parse Excel tabular grade sheets and compute batch performance distributions.",
    tags: ["Python", "MS Excel", "Data Processing"],
    github: "https://github.com",
    link: "https://example.com"
  }
];

// constants/index.js

export const experiences = [
  {
    title: "Associate Trainer",
    company_name: "AISECT Regional Office",
    location: "Rewa, Madhya Pradesh",
    type: "teaching",
    tag: "Instruction & Mentorship",
    iconBg: "#2563EB",
    date: "August 2025 – Present",
    points: [
      "Deliver classroom lectures and practical lab sessions on Computer Fundamentals, MS Office, and Python Programming.",
      "Design hands-on coding assignments and conduct continuous technical assessments to evaluate student learning outcomes.",
      "Mentor students on relational database queries (SQL) and fundamental web development (HTML, CSS, JavaScript).",
      "Bridge theoretical computer science concepts with real-world software implementation."
    ],
    skills: ["Python", "SQL", "Pedagogy", "Curriculum Delivery", "Lab Instruction"]
  },
  {
    title: "10-Day Technical & Pedagogical Workshop",
    company_name: "Mandsaur University (MIT)",
    location: "Mandsaur, Madhya Pradesh",
    type: "workshop",
    tag: "Professional Training",
    iconBg: "#059669",
    date: "September 2024",
    points: [
      "Attended an intensive hands-on workshop on emerging computing technologies and contemporary academic teaching methodologies.",
      "Engaged in technical sessions on advanced computing applications and modern pedagogical frameworks."
    ],
    skills: ["Academic Pedagogy", "Emerging Technologies", "Curriculum Design"]
  },
  {
    title: "Master of Computer Applications (MCA)",
    company_name: "Dr. A.P.J. Abdul Kalam University",
    location: "Indore, Madhya Pradesh",
    type: "education",
    tag: "Post-Graduation",
    iconBg: "#7C3AED",
    date: "Graduated 2024",
    points: [
      "Completed comprehensive post-graduate curriculum covering Advanced DBMS, Object-Oriented Programming, and Operating Systems.",
      "Developed end-to-end academic database and software projects with normalized schema architectures."
    ],
    skills: ["DBMS", "Advanced Software Engineering", "Data Structures", "System Design"]
  },
  {
    title: "Bachelor of Science in Computer Science (B.Sc. CS)",
    company_name: "Maharaja Agrasen International College",
    location: "Raipur, Chhattisgarh",
    type: "education",
    tag: "Graduation",
    iconBg: "#475569",
    date: "Graduated 2020",
    points: [
      "Built foundational knowledge in Computer Architecture, Programming in C/C++, and Mathematics for Computing."
    ],
    skills: ["Computer Architecture", "C/C++", "Foundational CS"]
  }
];

