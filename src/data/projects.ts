```tsx
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  github: string;
  live: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "TalentLens AI",
    description:
      "AI-powered recruitment copilot that parses resumes, matches candidates with job descriptions, generates interview questions, and provides intelligent recruitment assistance using Gemini AI.",

    techStack: [
      "React",
      "TypeScript",
      "Express",
      "Gemini API",
      "Tailwind CSS",
      "Render"
    ],

    features: [
      "AI Resume Parsing",
      "Candidate Matching",
      "Interview Question Generation",
      "AI Recruitment Chat"
    ],

    github: "https://github.com/b8024757-droid/GenAI-Copilot",

    live: "https://genai-copilot.onrender.com",

    featured: true,
  },

  {
    id: 2,

    title: "Django Job Portal",

    description:
      "Job portal allowing recruiters to post jobs and candidates to apply with profile management.",

    techStack: [
      "Django",
      "Python",
      "SQLite"
    ],

    features: [
      "Job Posting",
      "Candidate Portal",
      "Authentication"
    ],

    github: "https://github.com/b8024757-droid/Django-Job-Portal.git",

    live: "https://django-job-portal-o1dv.onrender.com",
  },

  {
    id: 3,

    title: "Secure Chat Platform",

    description:
      "Real-time secure messaging platform with authentication and encrypted communication.",

    techStack: [
      "React",
      "Spring Boot",
      "WebSocket"
    ],

    features: [
      "Real-time Chat",
      "Authentication",
      "Encryption"
    ],

    github: "https://github.com/b8024757-droid/Secure-Chat-Platform.git",

    live: "https://secure-chat-platform.onrender.com/",
  },

  {
    id: 4,

    title: "ONYX — The Second Brain",

    description:
      "A production-ready AI-powered second brain designed to organize, retrieve, and intelligently interact with your knowledge.",

    techStack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Socketio",
      "Redis"
    ],

    features: [
      "File Upload",
      "Activity Timeline",
      "Role-based Access",
      "Analytics Dashboard"
    ],

    github: "https://github.com/b8024757-droid/Onyx-Production-Ready.git",

    live: "https://onyx-production-ready.onrender.com/",
  },

  {
    id: 5,
    title: "Learning Management System",

    description:
      "Online learning platform with authentication, course management, student dashboard and progress tracking.",

    techStack: ["React", "Node.js", "MongoDB"],

    features: [
      "Authentication",
      "Course Management",
      "Student Dashboard"
    ],

    github: "",

    live: "",
  },

  {
    id: 6,

    title: "E-Commerce Platform",

    description:
      "Shopify Lite",

    techStack: ["React", "Node", "MySql", "stripe"],

    features: [
      "product management",
      "order tracking",
      "Reviews"
    ],

    github: "",

    live: "",
  },

  {
    id: 7,

    title: "Project Management System",

    description:
      "Task and project management platform with team collaboration, progress tracking and reporting.",

    techStack: [
      "React",
      "Node.js",
      "MongoDB"
    ],

    features: [
      "Task Management",
      "Teams",
      "Analytics"
    ],

    github: "",

    live: "",
  },
];
```
