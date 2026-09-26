import projectsData from "../data/projects.json";

// Verified knowledge base about Rahul Misal
export const RAHUL_PROFILE = {
  name: "Rahul Misal",
  handle: "CodesRahul",
  title: "Full Stack Software Engineer & Native Android Developer",
  experience: "3+ years of active software engineering experience with 20+ shipped applications",
  location: "Pune, Maharashtra, India (Available for local/hybrid in Pune and 100% remote worldwide)",
  email: "codesrahul96@gmail.com",
  phone: "+91 88051 59425",
  whatsappUrl: "https://wa.me/918805159425",
  github: "https://github.com/codesrahul96",
  linkedin: "https://linkedin.com/in/codesrahul",
  blog: "https://blogsify.vercel.app/",
  education: "B.Sc. in Computer Science (2017 - 2020) from Savitribai Phule Pune University",
  availability: "Available for freelance projects, contractual software engineering, and full-time senior development roles.",
  skills: {
    frontend: ["React", "Next.js 15 (App Router)", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Vite", "Redux Toolkit", "Context API"],
    mobile: ["Native Android", "Kotlin", "Jetpack Compose", "Compose Multiplatform (KMP)", "Android Studio", "React Native"],
    backend: ["Node.js", "Express.js", "MongoDB & Mongoose", "MySQL", "RESTful APIs", "WebSockets (Socket.IO)", "JWT Authentication", "Supabase", "Firebase"],
    devopsAndTools: ["Git & GitHub Workflows", "Docker", "Linux (Debian/Ubuntu)", "Vercel & Render", "Postman API Testing", "Technical SEO (#1 Google Ranking Architecture)", "Enterprise Web Security (CSP, HSTS Preload)"]
  }
};

// Flattened list of projects from projects.json
const projects = Array.isArray(projectsData) ? projectsData : [];

// Initial Suggested Prompts
export const INITIAL_SUGGESTIONS = [
  "🚀 What are Rahul's top projects?",
  "📱 Tell me about his Android & Kotlin apps",
  "🛠 What is his primary tech stack?",
  "💼 How can I hire or contact Rahul?",
  "📍 Where is he located and is he open for remote work?"
];

/**
 * Normalizes text for matching: lowercase, removes punctuation and excess whitespace.
 */
function cleanText(text) {
  return (text || "")
    .toLowerCase()
    .replace(/[^\w\s+]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Calculates keyword overlap score.
 */
function getMatchScore(query, keywords) {
  const queryTokens = cleanText(query).split(" ");
  let matches = 0;
  for (const kw of keywords) {
    const cleanKw = cleanText(kw);
    if (query.includes(cleanKw)) {
      matches += 3;
    } else if (queryTokens.includes(cleanKw)) {
      matches += 2;
    }
  }
  return matches;
}

/**
 * Searches for projects by keyword or tech.
 */
function searchProjects(query) {
  const q = cleanText(query);
  return projects.filter((p) => {
    const titleMatch = cleanText(p.title).includes(q) || q.includes(cleanText(p.title));
    const catMatch = cleanText(p.category).includes(q) || q.includes(cleanText(p.category));
    const techMatch = p.technologies.some((t) => {
      const cleanT = cleanText(t);
      return cleanT.includes(q) || q.includes(cleanT);
    });
    const descMatch = cleanText(p.description).includes(q);
    return titleMatch || catMatch || techMatch || descMatch;
  });
}

/**
 * Core Offline Natural Language Engine
 */
export function generateAiResponse(userMessage, conversationHistory = []) {
  const query = cleanText(userMessage);

  if (!query) {
    return {
      text: "Hello! I am Rahul's offline AI assistant. Ask me anything about his projects, technical skills, background, or how to hire him.",
      suggestions: INITIAL_SUGGESTIONS
    };
  }

  // 1. GREETINGS & INTRODUCTIONS
  if (/^(hi|hello|hey|greetings|hola|namaste|good morning|good afternoon|good evening|yo)\b/.test(query)) {
    return {
      text: `Hello! 👋 I'm **CodesRahul AI**, Rahul Misal's personal offline portfolio assistant.\n\nI can tell you all about his **20+ shipped applications**, **Android & MERN stack expertise**, **freelance availability**, or connect you directly with him.\n\nWhat would you like to explore?`,
      suggestions: [
        "🚀 Tell me about his best projects",
        "🛠 What are his strongest technical skills?",
        "📱 Has he built any mobile apps?",
        "💼 How can I hire Rahul?"
      ]
    };
  }

  // 2. WHO IS RAHUL / ABOUT ME / BIO
  if (
    /who is rahul|about rahul|tell me about (yourself|him|rahul)|who are you|background|bio|profile/.test(query)
  ) {
    return {
      text: `**Rahul Misal** is a **Full Stack Software Engineer & Native Android Developer** based in Pune, India.\n\n` +
        `• **Experience:** 3+ years architecting scalable full-stack web platforms and native mobile apps.\n` +
        `• **Shipped:** Over **20+ applications** including production MERN systems, Next.js platforms, and Kotlin/KMP apps.\n` +
        `• **Education:** B.Sc. in Computer Science from **Savitribai Phule Pune University** (2017–2020).\n` +
        `• **Focus:** Enterprise security hardening, technical SEO (#1 Google ranking), and intuitive UI/UX.\n\n` +
        `He is currently available for freelance engagements, technical consulting, and development roles worldwide!`,
      suggestions: [
        "📱 Tell me about his Android apps",
        "🚀 Show me UdemyWala and Renewo",
        "💼 What services does he offer?",
        "📩 Get in touch with Rahul"
      ]
    };
  }

  // 3. SPECIFIC PROJECT LOOKUPS
  // Renewo
  if (/renewo|subscription manager|sub manager/.test(query)) {
    const renewo = projects.find((p) => p.title.toLowerCase().includes("renewo")) || {
      title: "Renewo – Subscription Manager",
      description: "A cross-platform subscription manager built with Kotlin Multiplatform (Compose Multiplatform) and Supabase.",
      technologies: ["Kotlin", "Compose Multiplatform", "Supabase", "KMP", "Android", "Desktop"],
      github: "https://github.com/CodesRahul96/Renewo_App.git",
      demo: "https://github.com/CodesRahul96/Renewo_App/releases"
    };

    return {
      text: `### 📱 **${renewo.title}**\n\n` +
        `${renewo.description}\n\n` +
        `• **Tech Stack:** ${renewo.technologies.join(", ")}\n` +
        `• **Target Platforms:** Android & Desktop\n` +
        `• **Key Highlights:** 1-tap presets for Netflix, Spotify, iCloud, budget analytics, and offline-first Supabase sync.\n\n` +
        `🔗 [View GitHub Repository](${renewo.github}) | [Download App Releases](${renewo.demo})`,
      suggestions: [
        "📱 Show more Android projects",
        "🎮 Tell me about OmenControl",
        "📺 Tell me about Crunchyroll Desktop",
        "🚀 Show all web development projects"
      ]
    };
  }

  // UdemyWala
  if (/udemywala|udemy|coupons|course platform/.test(query)) {
    const udemy = projects.find((p) => p.title.toLowerCase().includes("udemywala")) || {};
    return {
      text: `### 🎓 **UdemyWala — #1 Ranked Search Engine Platform**\n\n` +
        `${udemy.description || "A high-performance course & coupon discovery platform engineered for search dominance."}\n\n` +
        `• **Achievements:** Ranked **#1 on Google Search** with Google AI Overview citations.\n` +
        `• **Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Schema.org microdata, SWR automated caching.\n` +
        `• **Security:** Enterprise HTTP security (strict CSP, HSTS Preload, Clickjacking protection).\n\n` +
        `🔗 [Visit Live Site](${udemy.demo || "https://udemywala.xyz/"}) | [View Source Code](${udemy.github || "https://github.com/CodesRahul96/UdemyWala.git"})`,
      suggestions: [
        "🚀 Tell me about TaskFlow",
        "📱 Tell me about Renewo",
        "🌐 Show all Web Development projects",
        "💼 How can I hire Rahul for Next.js?"
      ]
    };
  }

  // Crunchyroll Desktop
  if (/crunchyroll|anime app|electron/.test(query)) {
    const cr = projects.find((p) => p.title.toLowerCase().includes("crunchyroll")) || {};
    return {
      text: `### 📺 **Crunchyroll Desktop for Linux**\n\n` +
        `${cr.description || "A high-performance desktop streaming client for Linux systems."}\n\n` +
        `• **Category:** Desktop App\n` +
        `• **Tech Stack:** Electron, Node.js, Linux Desktop Integration, JavaScript\n` +
        `• **Features:** GPU hardware acceleration, rich MPRIS media control support, minimal system resource footprint.\n\n` +
        `🔗 [View Source Code](${cr.github || "https://github.com/CodesRahul96/Crunchyroll-Linux-Desktop.git"})`,
      suggestions: [
        "🎮 Tell me about OmenControl for Linux",
        "📱 Show me Android apps",
        "🛠 What desktop tech does he use?",
        "🚀 See all projects"
      ]
    };
  }

  // OmenControl
  if (/omen|omencontrol|hp omen|fan control|rgb/.test(query)) {
    const omen = projects.find((p) => p.title.toLowerCase().includes("omencontrol")) || {};
    return {
      text: `### 🎮 **OmenControl for Linux (OMEN SPACE)**\n\n` +
        `${omen.description || "Open-source GTK4/Python hardware control utility for HP Omen gaming laptops on Linux."}\n\n` +
        `• **Category:** Desktop App / Systems Engineering\n` +
        `• **Tech Stack:** Python, GTK4, Libadwaita, Linux Kernel Modules, ACPI WMI\n` +
        `• **Features:** Real-time dual-fan curve tuning, dynamic RGB lighting controls, performance presets (Quiet, Balanced, Performance).\n\n` +
        `🔗 [View on GitHub](${omen.github || "https://github.com/CodesRahul96/OmenControl-Linux.git"})`,
      suggestions: [
        "📺 Tell me about Crunchyroll Desktop",
        "📱 Tell me about Renewo App",
        "🛠 Does Rahul know Python?",
        "💼 How to hire Rahul?"
      ]
    };
  }

  // TaskFlow
  if (/taskflow|kanban|socket|task management/.test(query)) {
    const tf = projects.find((p) => p.title.toLowerCase().includes("taskflow")) || {};
    return {
      text: `### 📋 **TaskFlow — Real-Time Collaboration & Productivity**\n\n` +
        `${tf.description || "An enterprise Kanban productivity suite with live multi-user collaboration."}\n\n` +
        `• **Tech Stack:** React (Vite), Node.js, Express, MongoDB, Socket.IO, JWT, Firebase.\n` +
        `• **Features:** Drag-and-drop task boards, instant real-time synchronization via WebSockets, Google OAuth, hardened authorization.\n\n` +
        `🔗 [Open Live App](${tf.demo || "https://taskflow.indevs.in/"}) | [View Source Code](${tf.github || "https://github.com/CodesRahul96/TaskFlow.git"})`,
      suggestions: [
        "💬 Tell me about WhatsApp Automation",
        "📝 Tell me about Blogsify",
        "🛠 What is his MERN experience?",
        "📩 Contact Rahul for a web project"
      ]
    };
  }

  // WhatsApp Automation Platform
  if (/whatsapp|crm|automation|bot/.test(query)) {
    const wa = projects.find((p) => p.title.toLowerCase().includes("whatsapp")) || {};
    return {
      text: `### 💬 **WhatsApp Automation Platform**\n\n` +
        `${wa.description || "A production multi-agent WhatsApp customer support and broadcast marketing engine."}\n\n` +
        `• **Tech Stack:** Next.js 16, TypeScript, Prisma ORM, Meta WhatsApp Cloud API, Google Gemini AI.\n` +
        `• **Highlights:** Real-time team inbox, automated 24/7 AI conversational responses with human agent handoff, broadcast campaigns, and developer REST API.\n\n` +
        `🔗 [View on GitHub](${wa.github || "https://github.com/CodesRahul96/whatsapp-automation.git"})`,
      suggestions: [
        "🎓 Tell me about UdemyWala",
        "🚀 Show me all web projects",
        "📱 Show me Android apps",
        "💼 Hire Rahul for an API or Web project"
      ]
    };
  }

  // 4. ANDROID & MOBILE DEVELOPMENT QUERIES
  if (/android|kotlin|mobile|kmp|compose|jetpack|playnox|app developer/.test(query)) {
    const androidProjects = searchProjects("android").concat(searchProjects("kotlin"));
    const uniqueAndroid = Array.from(new Set(androidProjects.map(p => p.id)))
      .map(id => androidProjects.find(p => p.id === id));

    return {
      text: `### 📱 **Rahul's Mobile & Android Engineering**\n\n` +
        `Rahul specializes in native Android and modern cross-platform development:\n\n` +
        `• **Languages & Tooling:** Kotlin, Jetpack Compose, Compose Multiplatform (KMP), Android Studio, Java, React Native.\n` +
        `• **Architecture:** MVVM, Clean Architecture, Coroutines, StateFlow, Retrofit, Room DB, Supabase/Firebase Auth.\n\n` +
        `**Featured Mobile Apps:**\n` +
        uniqueAndroid.slice(0, 3).map(p => `• **${p.title}** (${p.technologies.slice(0, 4).join(", ")}) — [GitHub](${p.github})`).join("\n") +
        `\n\nWould you like details on a specific mobile application?`,
      suggestions: [
        "📱 Tell me about Renewo",
        "🎬 Tell me about PlayNox",
        "📺 Tell me about ExclusiveTV",
        "💼 Hire Rahul for an Android app"
      ]
    };
  }

  // 5. TECHNICAL STACK & SKILLS
  if (/tech|stack|skills|technologies|languages|frameworks|database|tools|what (do|can) you (use|know)/.test(query)) {
    return {
      text: `### 🛠 **Rahul's Core Technical Arsenal**\n\n` +
        `**Frontend & Web:**\n` +
        `• React, Next.js 15 (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS, Vite, Redux Toolkit, HTML5/CSS3.\n\n` +
        `**Mobile & Desktop:**\n` +
        `• Kotlin, Jetpack Compose, Compose Multiplatform (KMP), Android Studio, React Native, Electron, GTK4/Python.\n\n` +
        `**Backend & Databases:**\n` +
        `• Node.js, Express.js, MongoDB (Mongoose), MySQL, REST APIs, WebSockets (Socket.IO), Supabase, Firebase, JWT Auth.\n\n` +
        `**DevOps & Security:**\n` +
        `• Docker, Linux, Technical SEO (#1 ranking), Enterprise HTTP Security (CSP, HSTS Preload), Git/GitHub CI/CD.\n\n` +
        `Every project follows clean code architecture, type safety, and optimal performance benchmarks.`,
      suggestions: [
        "🚀 Show me his Next.js projects",
        "📱 Show me his Kotlin projects",
        "💻 Tell me about his backend experience",
        "💼 Let's discuss a project"
      ]
    };
  }

  // 6. ALL PROJECTS / PORTFOLIO SHOWCASE
  if (/projects|work|portfolio|showcase|apps|what have you built|list projects/.test(query)) {
    const webCount = projects.filter(p => p.category?.includes("Web")).length;
    const appCount = projects.filter(p => p.category?.toLowerCase().includes("app")).length;

    return {
      text: `### 🚀 **Rahul's Shipped Projects (${projects.length} Total)**\n\n` +
        `Rahul has engineered **${projects.length} full-scale applications** spanning Web, Mobile, and Desktop:\n\n` +
        `• **Featured Web:** [UdemyWala](${projects[0]?.demo}) (#1 Google ranking), [TaskFlow](${projects[1]?.demo}) (Real-time Kanban), [Blogsify](${projects[2]?.demo}) (MERN Blog).\n` +
        `• **Featured Mobile/Android:** **Renewo** (KMP Subscription Manager), **PlayNox** (Android Media Player), **FreeLiveTV**.\n` +
        `• **Featured Desktop:** **Crunchyroll Desktop for Linux** (Electron), **OmenControl** (GTK4/Python HP Omen utility).\n\n` +
        `You can filter and interact with all projects on the dedicated [Projects Page](/projects)!`,
      suggestions: [
        "📱 Tell me about Renewo",
        "🎓 Tell me about UdemyWala",
        "📋 Tell me about TaskFlow",
        "💼 How to hire Rahul?"
      ]
    };
  }

  // 7. HIRING, FREELANCE, RATES & AVAILABILITY
  if (/hire|freelance|contract|cost|rate|pricing|quote|timeline|available|job|work with rahul|turnaround/.test(query)) {
    return {
      text: `### 💼 **Hiring & Freelance Availability**\n\n` +
        `Rahul is **currently available** for freelance engagements, bespoke application builds, and engineering roles!\n\n` +
        `• **Services Offered:**\n` +
        `  1. Full-Stack Web Development (Next.js 15, React, Node.js, MERN)\n` +
        `  2. Native Android & KMP Mobile Apps (Kotlin, Jetpack Compose, Supabase)\n` +
        `  3. UI/UX Architecture & Technical SEO Optimization\n` +
        `  4. Custom REST & WebSocket Backend APIs\n\n` +
        `• **Turnaround:** Typically responds within **24 hours**.\n` +
        `• **Delivery:** Fast, modular, and backed by clean git commits and documentation.\n\n` +
        `Ready to start? Send a direct message or schedule a consultation:`,
      suggestions: [
        "📩 Open Contact Page",
        "💬 Chat on WhatsApp (+91 88051 59425)",
        "📧 Copy Rahul's Email",
        "🚀 See past client work"
      ]
    };
  }

  // 8. CONTACT INFORMATION & SOCIAL LINKS
  if (/contact|email|phone|whatsapp|call|reach|message|linkedin|github|location|address|where/.test(query)) {
    return {
      text: `### 📬 **Direct Contact Information**\n\n` +
        `You can connect with Rahul directly via any of these channels:\n\n` +
        `• **Email:** [codesrahul96@gmail.com](mailto:${RAHUL_PROFILE.email})\n` +
        `• **Phone & WhatsApp:** [+91 88051 59425](tel:${RAHUL_PROFILE.phone}) | [Open WhatsApp Chat](${RAHUL_PROFILE.whatsappUrl})\n` +
        `• **GitHub:** [github.com/codesrahul96](${RAHUL_PROFILE.github})\n` +
        `• **LinkedIn:** [linkedin.com/in/codesrahul](${RAHUL_PROFILE.linkedin})\n` +
        `• **Location:** Pune, Maharashtra, India (IST / UTC+5:30) — *Worldwide remote delivery*.\n\n` +
        `You can also submit an inquiry directly through the [Contact Page](/contact).`,
      suggestions: [
        "💬 Message on WhatsApp now",
        "🚀 Show me his top projects",
        "🛠 What is his tech stack?",
        "💼 What are his freelance rates?"
      ]
    };
  }

  // 9. RESUME / CV
  if (/resume|cv|curriculum vitae|experience certificate/.test(query)) {
    return {
      text: `### 📄 **Rahul Misal's Resume & Background**\n\n` +
        `• **Title:** Full Stack Software Engineer & Android Developer\n` +
        `• **Experience:** 3+ Years Building Production Systems\n` +
        `• **Education:** B.Sc. Computer Science (Savitribai Phule Pune University)\n` +
        `• **Key Strengths:** Scalable MERN Platforms, Kotlin/Jetpack Compose, Next.js 15, Technical SEO, Enterprise Web Security.\n\n` +
        `You can view his complete journey, timeline, and education on the [About Page](/about), or contact him directly at [codesrahul96@gmail.com](mailto:${RAHUL_PROFILE.email}) for his official PDF resume.`,
      suggestions: [
        "📖 View About Page",
        "🚀 View 20+ Shipped Projects",
        "📩 Contact Rahul directly",
        "🛠 See Technical Skills"
      ]
    };
  }

  // 10. SPECIFIC TECH MATCHING (Fallback to dynamic matching)
  const techMatches = searchProjects(query);
  if (techMatches.length > 0) {
    const topThree = techMatches.slice(0, 3);
    return {
      text: `Yes! Rahul has practical, production experience with that technology. Here are projects where he engineered solutions with it:\n\n` +
        topThree.map(p => `• **${p.title}** (${p.category}): ${p.description.slice(0, 140)}... [GitHub](${p.github})`).join("\n\n") +
        `\n\nWould you like more details on any of these?`,
      suggestions: topThree.map(p => `Tell me about ${p.title.split("–")[0].trim()}`).concat(["🛠 Show full tech stack", "💼 Hire Rahul for this"])
    };
  }

  // 11. GENERAL INTELLIGENT FALLBACK
  return {
    text: `I understand you're asking about **"${userMessage}"**!\n\n` +
      `Rahul is a Full Stack and Android engineer specializing in **Next.js, React, Kotlin, Node.js, and Supabase** with 20+ applications shipped.\n\n` +
      `Here are some topics I can answer immediately:\n` +
      `• Details on his **20+ projects** (e.g., Renewo, UdemyWala, TaskFlow, OmenControl)\n` +
      `• His **technical skillset** across mobile, web, and cloud\n` +
      `• How to **hire Rahul** for your next web or mobile app\n` +
      `• Direct **contact details** (Email, WhatsApp, GitHub, LinkedIn)\n\n` +
      `What would you like to know?`,
    suggestions: [
      "🚀 Show top projects",
      "📱 Tell me about his Android apps",
      "🛠 What is his tech stack?",
      "📩 How can I contact Rahul?"
    ]
  };
}
