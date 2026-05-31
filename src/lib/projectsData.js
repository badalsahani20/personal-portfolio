import AiAnalyzer from '../assets/AiResumeAnalyzer.png'
import ChefMistral from '../assets/Chef-Mistral.png'
import WeatherApp from '../assets/weather-app.png'

// Notesify actual screenshots imports
import DashBoardEmpty from '../assets/notesify/DashBoard & Empty State.png'
import EditorContextualAi from '../assets/notesify/Editor & Contextual Ai Preview.png'
import EditorPreview from '../assets/notesify/Editor Preview.png'
import FolderStructure from '../assets/notesify/Folder Structure Preview.png'
import GenerateNotes from '../assets/notesify/GenerateNotes.png'
import IrisGlobalAiAssist from '../assets/notesify/Iris Global Ai Assist.png'
import IrisGlobalAiPage from '../assets/notesify/Iris Global Ai Page.png'
import NotesEditorPreview from '../assets/notesify/Notes & Editor Preview.png'
import ProfilePreview from '../assets/notesify/Profile Preview.png'

export const projectsData = [
    {
        id: "notesify",
        title: "Notesify",
        description: "A production-grade, full-stack notes application built on the MERN stack — featuring a professional rich-text editor, multi-provider AI orchestration, optimistic concurrency control, and banking-level authentication patterns.",
        image: NotesEditorPreview,
        tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Redis", "Gemini AI"],
        url: "https://notesify.in",
        gitHubUrl: "https://github.com/badalsahani20/fullstack-notes-app",
        brandColor: "139, 92, 246", // Violet (RGB representation for dynamic glow)
        overview: "Notesify is a production-grade SaaS learning platform built to show robust, non-trivial full-stack engineering decisions. Designed to turn document uploads and articles into deeply customized study materials, Notesify allows users to generate tailored notes utilizing custom Iris AI tones, multiple structures (Detailed Notes, Revision Crash Sheets, Concepts + Intuition, and Interview Prep), and study depths (Quick, Standard, and Deep-Dive). It also synthesizes interactive quizzes and flashcards, handling state changes immediately using React Query's optimistic UI pipeline.",
        challenges: "Key challenges included preventing multi-session edits from overwriting each other, high latency on custom AI parameters, and secure authentication. We solved this by implementing Optimistic Concurrency Control (OCC) at the model layer, building SHA-256 content-hashed AI caching to bypass repetitive LLM API invocations, and integrating Google OAuth paired with refresh token rotation and Old Token Replay detection.",
        techStackDetails: [
            { name: "MERN Stack + TanStack Query", desc: "React and TanStack React Query handle lightning-fast optimistic UI cache states, ensuring instant state updates, while MongoDB serves as our primary OCC-versioned data store." },
            { name: "Upstash Redis Caching", desc: "Serves GET folder/note data in sub-10ms. Employs aggressive cache invalidation on mutations and automated self-healing scripts for cache drift." },
            { name: "Multi-Provider AI Orchestration", desc: "Iris AI dynamically routes prompt requests across DeepSeek, Groq (LLaMA 3), and Gemini with cascading failovers to guarantee 100% uptime." },
            { name: "TipTap & Google OAuth", desc: "Rich TipTap/ProseMirror editor extension featuring inline Ghostwriters, instant markdown/code block auto-detection, and unified secure social signup linking via Google OIDC." }
        ],
        modules: [
            { name: "Optimistic Concurrency Control (OCC)", desc: "Tracks Mongoose document versions at the database model layer. Concurrent session collision triggers a 409 Conflict, initiating client-side state merging instead of raw overwriting." },
            { name: "Production-Grade Authentication", desc: "Secures user sessions via refresh token rotation (RTR) on each request, old token replay detection with immediate session sweeping, and a 5-device limit." },
            { name: "Self-Healing Redis Caching", desc: "Serves GET folders and GET notes requests in sub-10ms via Upstash Redis. Identifies cache drifts and auto-refetches/re-seeds missing entries from MongoDB." },
            { name: "SHA-256 AI Content Caching", desc: "Content-hashes incoming prompt inputs using SHA-256 to serve cached suggestions instantly, eliminating redundant LLM API invocations and cutting down billing overheads." },
            { name: "Multi-Provider AI Orchestrator", desc: "Iris AI dynamically routes text requests across DeepSeek, Groq (LLaMA 3), and Gemini with cascading fallbacks to guarantee uptime." },
            { name: "Token-Aware History Compression", desc: "Chat sequences exceeding 20 messages trigger background rolling summarizations into snapshots to preserve memory under strict context boundaries." },
            { name: "Hybrid Search Pipelines", desc: "Integrates MongoDB full-text index ranking with regex-based fallbacks to prevent zero-result states." }
        ],
        features: [
            { name: "Landing Page & Dashboard Hub", desc: "A gorgeous, responsive glassmorphic landing page and personalized dashboard showcasing recent notes activity, revision stats, and active study goals." },
            { name: "Rich Notes & Quiz Editor", desc: "AI-integrated text editor to draft notes, parse PDF/TXT document uploads, and synthesize dynamic quizzes with custom structures." },
            { name: "Iris AI Custom Notes Builder", desc: "Tailor notes by selecting custom explanation tones, structural layouts (Detailed Note, Revision Crash Sheet, Concepts + Intuition, and Interview Prep), and study depths (Quick, Standard, or Deep-Dive)." },
            { name: "AI Quizzes & Flashcards", desc: "Generate custom, interactive multiple-choice quizzes and study flashcard decks directly from your notes to accelerate revision and test retrieval." },
            { name: "Optimistic UI (TanStack Query)", desc: "Synchronizes user changes instantly in the client browser with TanStack React Query, making edits, deletions, and folder creations feel instantaneous while background tasks sync." },
            { name: "Iris AI Inline Ghostwriter", desc: "A custom TipTap editor extension displaying completions in translucent inline text before acceptance, paired with dynamic thought-block reasoning widgets." },
            { name: "Google OAuth & Social Linking", desc: "High-end social signup utilizing Google OAuth (OIDC) with automatic profile merging if emails match existing local profiles." },
            { name: "Markdown & Code Auto-Detection", desc: "ProseMirror text editor configurations that identify and convert pasted markdown structures or code blocks into rich-text Highlights." }
        ],
        screenshots: [
            { label: "Notes & Editor Preview", url: NotesEditorPreview },
            { label: "DashBoard & Empty State", url: DashBoardEmpty },
            { label: "GenerateNotes", url: GenerateNotes },
            { label: "Editor Preview", url: EditorPreview },
            { label: "Folder Structure Preview", url: FolderStructure },
            { label: "Editor & Contextual Ai Preview", url: EditorContextualAi },
            { label: "Iris Global Ai Assist", url: IrisGlobalAiAssist },
            { label: "Iris Global Ai Page", url: IrisGlobalAiPage },
            { label: "Profile Preview", url: ProfilePreview }
        ]
    },
    {
        id: "ai-resume-analyzer",
        title: "AI Resume Analyzer",
        description: "AI-powered resume analysis tool that evaluates your resume for ATS compatibility, content quality, tone, structure, and skills. It provides an overall score with actionable improvement suggestions.",
        image: AiAnalyzer,
        tags: ['React', 'Tailwind', 'Puter.js'],
        url: "https://skill-scanner-beta.vercel.app",
        gitHubUrl: "https://github.com/badalsahani20/ai-resume-analyzer",
        brandColor: "16, 185, 129", // Emerald Green
        overview: "AI Resume Analyzer is a powerful web utility designed to level the playing field for job seekers. It uses advanced language algorithms to evaluate resumes against strict Applicant Tracking System (ATS) parsing rules, helping candidates detect formatting bugs, key skills gaps, and optimize phrasing.",
        challenges: "Designing an interactive interface that processes files locally and parses PDF text seamlessly inside the browser. We utilized Puter.js and local Web Workers to extract resume content instantly without needing high-latency server roundtrips, reducing analysis times from 10 seconds to less than 1.5 seconds.",
        techStackDetails: [
            { name: "React", desc: "Fast virtual DOM rendering for real-time grade updates as users tweak inputs." },
            { name: "Puter.js", desc: "Provides high-throughput backend services and sandboxed cloud features directly in the client." },
            { name: "Tailwind CSS", desc: "Utility-first CSS framework enabling pixel-perfect glassmorphism cards and metrics gauges." }
        ],
        features: [
            { name: "ATS Compatibility Scan", desc: "Scores the uploaded resume based on typical applicant tracking system parsing limitations." },
            { name: "Actionable Recommendations", desc: "Generates explicit, line-by-line feedback on tone, grammar, structural issues, and power verbs." },
            { name: "Skills Gap Matrix", desc: "Compares resume contents against standard industry job profiles to identify missing keywords." }
        ],
        screenshots: [
            { label: "Resume Analysis Dashboard", url: AiAnalyzer }
        ]
    },
    {
        id: "ai-chef",
        title: "AI Chef",
        description: "Chef Mistral – your AI-powered kitchen assistant that turns pantry ingredients into delicious recipes.",
        image: ChefMistral,
        tags: ["React", "CSS"],
        url: "https://recipe-generator-9ggdvrn79-badalsahani20s-projects.vercel.app",
        gitHubUrl: "https://github.com/badalsahani20/Recipe-Generator",
        brandColor: "245, 158, 11", // Amber Orange
        overview: "AI Chef is a fast, fun kitchen sidekick built to minimize food waste. By typing in a random list of leftovers or ingredients currently sitting in your fridge, AI Chef automatically generates instructions, nutrition information, and prep times for appetizing meals.",
        challenges: "Crafting a highly responsive UI with standard CSS transitions that loads fluidly and animates food tags dynamically as users type ingredients. We focused on micro-animations to ensure adding, editing, and deleting items felt interactive and satisfying.",
        techStackDetails: [
            { name: "React", desc: "React hooks and states allow seamless list management of ingredient inputs." },
            { name: "Vanilla CSS", desc: "Custom themes and micro-animations styled purely with native stylesheet selectors." }
        ],
        features: [
            { name: "Ingredient Tagging System", desc: "Interactive inputs to log existing kitchen ingredients with animated delete transitions." },
            { name: "Instant Recipe Synthesis", desc: "Queries language models to create recipes containing strictly the active ingredients." }
        ],
        screenshots: [
            { label: "Kitchen Ingredient Console", url: ChefMistral }
        ]
    },
    {
        id: "weather-app",
        title: "Weather App",
        description: "Interactive application built with HTML, CSS, and JavaScript that fetches real-time weather data using the OpenWeatherMap API.",
        image: WeatherApp,
        tags: ["HTML", "CSS", "JAVASCRIPT"],
        url: "https://weather-app-zggx.vercel.app",
        gitHubUrl: "https://github.com/badalsahani20/WeatherApp",
        brandColor: "59, 130, 246", // Blue
        overview: "Weather App is a clean, minimal dashboard providing real-time weather details and forecast updates globally. Built to showcase robust API handling, unit conversion, and dynamic styling that responds automatically to current weather conditions.",
        challenges: "Implementing graceful error handling and loaders for slow networks or invalid city names. We integrated cached API responses to save bandwidth and prevent hit throttling, paired with custom SVG animation states.",
        techStackDetails: [
            { name: "JavaScript ES6", desc: "Utilizes native Fetch APIs, async/await structures, and structured DOM mutations." },
            { name: "OpenWeather API", desc: "Supplies instantaneous meteorological stats including humidity, wind, and UV indexes globally." }
        ],
        features: [
            { name: "Global Location Search", desc: "Allows lookup of weather conditions for thousands of cities with autocompletion." },
            { name: "Dynamic Weather Themes", desc: "Changes background gradients and iconography based on sunny, rainy, or snowy states." }
        ],
        screenshots: [
            { label: "Weather Summary View", url: WeatherApp }
        ]
    }
];
