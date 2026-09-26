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
  "😂 Tell me a programmer joke",
  "🤔 Ask a tricky tech question",
  "💼 How can I hire Rahul?"
];

// Programmer & Tech Jokes Collection
export const TECH_JOKES = [
  {
    setup: "Why do programmers prefer dark mode?",
    punchline: "Because light attracts bugs! 🪲"
  },
  {
    setup: "How many programmers does it take to change a light bulb?",
    punchline: "None. It's a hardware problem! 💡"
  },
  {
    setup: "Why was the JavaScript developer sad?",
    punchline: "Because they didn't `null` how to `Boolean` their feelings... and their code had too many `Promise`s that were never resolved! 😢"
  },
  {
    setup: "How do you generate a truly random string?",
    punchline: "Put a beginner in front of Vim and tell them to exit! `:wq` ⌨️"
  },
  {
    setup: "Why do Java developers wear glasses?",
    punchline: "Because they don't C#! 👓"
  },
  {
    setup: "What's the object-oriented way to become wealthy?",
    punchline: "Inheritance. 💰"
  },
  {
    setup: "A SQL query walks into a bar, strolls up to two tables and asks...",
    punchline: "“Mind if I JOIN you?” 🍺"
  },
  {
    setup: "Why did the software engineer go broke?",
    punchline: "Because they cleaned out all their cache! 💳"
  },
  {
    setup: "There are 10 types of people in the world:",
    punchline: "Those who understand binary, and those who don't. 🔢"
  },
  {
    setup: "Why did the CSS developer leave the fancy restaurant?",
    punchline: "Because they couldn't center their table! `display: flex; justify-content: center;` 🍽️"
  },
  {
    setup: "What is a programmer's favorite watering hole?",
    punchline: "Foo Bar. 🍻"
  },
  {
    setup: "Why was the JavaScript function so stressed out?",
    punchline: "Because it had way too many arguments and couldn't find its closure! 🧘"
  },
  {
    setup: "What do you call 8 hobbits standing in a line?",
    punchline: "A hobbyte. 🧝‍♂️"
  },
  {
    setup: "Why did the Git commit get rejected on Valentine's Day?",
    punchline: "It had too many commitment issues and couldn't resolve its merge conflicts! 💔"
  },
  {
    setup: "How does a full-stack developer drink their morning espresso?",
    punchline: "They take a sip, overflow the stack, dump core, and restart the process! ☕"
  },
  {
    setup: "Why did the Android app go to therapy?",
    punchline: "It suffered from an existential identity crisis during configuration changes and kept destroying its own Activity! 📱"
  },
  {
    setup: "What's the difference between a bug and a feature?",
    punchline: "A feature is just a bug that made it through the release cycle with marketing documentation! 🚀"
  },
  {
    setup: "Why was the database administrator so calm during the server crash?",
    punchline: "Because they had already normalized all their stress into 3rd Normal Form! 🗄️"
  }
];

// Tricky Riddles & Brain Teasers
export const TECH_RIDDLES = [
  {
    riddle: "I have branches, but no leaves, trunk, or fruit. I can merge, checkout, and rebase, yet I live in a terminal. What am I?",
    answer: "A **Git branch**! 🌿"
  },
  {
    riddle: "I am taken from a mine and shut up in a case. I produce numbers that aren't quite numbers, and when you add `0.1 + 0.2`, I give you `0.30000000000000004`. What am I?",
    answer: "The **JavaScript IEEE 754 Floating-Point Engine**! 🔢"
  },
  {
    riddle: "I have no voice, but I communicate with billions. A single missing semicolon or mismatched bracket can bring down my whole kingdom. What am I?",
    answer: "A **Computer Program / Source Code**! 💻"
  },
  {
    riddle: "I'm constantly running, but I never get tired. I catch your clicks, listen to your events, and prevent your Node.js server from freezing under load. What am I?",
    answer: "The **JavaScript Event Loop**! 🔄"
  },
  {
    riddle: "I can be public, private, or protected, but I'm no government secret. I instantiate objects and bind methods together. What am I?",
    answer: "An **Object-Oriented Class**! 🏛️"
  }
];

let jokeCursor = 0;
let riddleCursor = 0;

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
 * Core Natural Language Engine
 */
export function generateAiResponse(userMessage, conversationHistory = []) {
  const rawText = userMessage || "";
  const query = cleanText(rawText);

  if (!query) {
    return {
      text: "Hello! I am Rahul's interactive AI assistant. Ask me anything about his projects, technical skills, background, or how to hire him.",
      suggestions: INITIAL_SUGGESTIONS
    };
  }

  // =========================================================================
  // 1. PROGRAMMER JOKES INTENT
  // =========================================================================
  if (
    /joke|jokes|make me laugh|funny|crack a joke|tell (me )?a joke|humor|pun|puns|laugh|haha|lol|lmao/.test(query)
  ) {
    const joke = TECH_JOKES[jokeCursor % TECH_JOKES.length];
    jokeCursor++;

    return {
      text: `### 😂 **Here's a fresh developer joke for you:**\n\n` +
        `**${joke.setup}**\n\n` +
        `> **${joke.punchline}**\n\n` +
        `*Need another laugh, or shall we get down to serious engineering?*`,
      suggestions: [
        "😂 Tell me another joke",
        "🤔 Ask me a tricky question",
        "🚀 Show Rahul's top projects",
        "🛠 What is Rahul's tech stack?"
      ]
    };
  }

  // =========================================================================
  // 2. TRICKY QUESTIONS, RIDDLES & BRAIN TEASERS
  // =========================================================================

  // General riddle / tricky question request
  if (
    /riddle|riddles|brain teaser|puzzle|tricky question|trick question|ask me a question|ask me something tricky/.test(query)
  ) {
    const item = TECH_RIDDLES[riddleCursor % TECH_RIDDLES.length];
    riddleCursor++;

    return {
      text: `### 🧩 **Developer Riddle Time!**\n\n` +
        `**"${item.riddle}"**\n\n` +
        `---\n` +
        `💡 **The Answer:** ${item.answer}\n\n` +
        `*Did you figure it out before reading the answer?*`,
      suggestions: [
        "🤔 Give me another riddle",
        "😂 Tell me a programmer joke",
        "🚀 Show Rahul's top projects",
        "💼 How to hire Rahul?"
      ]
    };
  }

  // Tricky Question: "Why should I hire Rahul instead of others / someone else?"
  if (
    /why (should i|would i|to) hire rahul|why hire rahul|why rahul|hire rahul over others|why should we hire you|why hire you/.test(query)
  ) {
    return {
      text: `### 🎯 **Why Rahul Misal Stands Out as Your Top Engineering Choice**\n\n` +
        `Here is why hiring Rahul directly accelerates your product roadmaps:\n\n` +
        `1. **Extreme Shipping Velocity:** Over **20+ deployed applications** spanning Web, Native Android, and Desktop—not theoretical prototypes, but live, production-tested software.\n` +
        `2. **True Full-Stack & Native Depth:** Fluent in **Next.js 15 (App Router)**, **React**, **Node.js/Express**, and **Native Kotlin / Compose Multiplatform (KMP)**. He bridges mobile and web without context switching.\n` +
        `3. **Search & SEO Dominance:** His platform **UdemyWala** ranked **#1 globally on Google Search** with zero paid marketing, driven purely by technical SEO, Schema.org microdata, and Core Web Vitals optimization.\n` +
        `4. **Enterprise Security Standards:** Every build enforces hardened HTTP security (Strict CSP, HSTS Preload, zero-injection validation, rate limiting).\n` +
        `5. **Self-Directed Autonomy:** Rahul takes high-level business requirements and turns them into pixel-perfect, resilient applications with clean git history.\n\n` +
        `Would you like to schedule a call or review his portfolio repositories?`,
      suggestions: [
        "💼 How can I hire Rahul?",
        "📱 See his Kotlin/Android apps",
        "🚀 See #1 ranked UdemyWala",
        "💬 Chat directly on WhatsApp"
      ]
    };
  }

  // Tricky Question: "Are you sentient / real AI / alive / conscious / who made you?"
  if (
    /are you (sentient|real|alive|human|conscious|thinking)|who made you|who built you|are you real ai/.test(query)
  ) {
    return {
      text: `### 🤖 **Am I Sentient?**\n\n` +
        `I am **CodesRahul AI**, an interactive natural language intelligence engine custom-built for Rahul Misal's portfolio!\n\n` +
        `• **Conscious?** I know that \`0.1 + 0.2 !== 0.3\` in JavaScript, I know how to center a \`div\` without crying, and I know Rahul writes world-class code. That makes me pretty sentient in my book! 😉\n` +
        `• **My Creator:** Designed and engineered by **Rahul Misal** himself to give recruiters and clients an instant, engaging way to discover his work.\n\n` +
        `Unlike external bots that hallucinate, every answer I give you is backed by verified project schemas, git commits, and technical benchmarks.`,
      suggestions: [
        "😂 Tell me a programmer joke",
        "🤔 Ask another tricky question",
        "🚀 What are Rahul's best projects?",
        "💼 How can I hire Rahul?"
      ]
    };
  }

  // Tricky Question: "Can you hack NASA / hack Wi-Fi / hack Facebook?"
  if (/can you hack|hack nasa|hack wifi|hack instagram|hack facebook|hack account/.test(query)) {
    return {
      text: `### 🕶️ **Can I Hack NASA?**\n\n` +
        `Only if I write \`<style>body { color: #00ff00; font-family: monospace; }</style>\` and type really fast in a dark room! 😎\n\n` +
        `Jokes aside, Rahul is a **white-hat engineer** who builds defensive security into all his platforms:\n` +
        `• Enterprise **Content Security Policy (CSP)** and HSTS Preloading\n` +
        `• Strict JWT authentication & role-based access control (RBAC)\n` +
        `• SQL/NoSQL injection prevention & parameterized schemas\n\n` +
        `If you need your apps **fortified against attacks**, Rahul is the engineer to call!`,
      suggestions: [
        "🛠 Tell me about his security skills",
        "🚀 Show me UdemyWala's security setup",
        "😂 Tell me another joke",
        "💼 Hire Rahul for a secure app"
      ]
    };
  }

  // Tricky Question: "Tabs or spaces?"
  if (/tabs or spaces|spaces or tabs/.test(query)) {
    return {
      text: `### ⚔️ **The Ultimate Debate: Tabs or Spaces?**\n\n` +
        `Ah, the holy war of Silicon Valley!\n\n` +
        `• **Spaces (2):** Rahul's go-to for **JavaScript, TypeScript, and React**—guarantees consistent visual rendering across GitHub, IDEs, and code reviews.\n` +
        `• **Spaces (4):** The official standard for **Kotlin and Python**.\n` +
        `• **Tabs:** Great for accessibility and personalized tab-width preferences.\n\n` +
        `The real winner? **Prettier and ESLint configured in a pre-commit hook** so the team never has to argue about it! 🛠️`,
      suggestions: [
        "😂 Tell me a joke",
        "🤔 Ask another tricky question",
        "🛠 What is Rahul's tech stack?",
        "🚀 Show his code projects"
      ]
    };
  }

  // Tricky Question: "Why do programmers prefer dark mode?"
  if (/dark mode|why do programmers (like|prefer) dark mode/.test(query)) {
    return {
      text: `### 🌙 **Why Do Programmers Love Dark Mode?**\n\n` +
        `1. **The Classic Truth:** Because light attracts bugs! 🪲\n` +
        `2. **Circadian Rhythm:** Rahul frequently codes late into the night, and dark mode reduces eye fatigue.\n` +
        `3. **OLED Efficiency:** True pitch-black pixels shut off on OLED displays, conserving battery life during heavy compile sessions.\n` +
        `4. **Aesthetic Factor:** Vibrant syntax highlighting looks undeniably sharper against a deep dark canvas!\n\n` +
        `*Notice how this portfolio defaults to an immaculate, custom dark glassmorphic theme? Rahul knows what looks good.*`,
      suggestions: [
        "😂 Tell me a joke",
        "🛠 Show Rahul's frontend skills",
        "🚀 See his Next.js projects"
      ]
    };
  }

  // Tricky Question: "What is 0.1 + 0.2?"
  if (/0\.1\s*\+\s*0\.2|floating point|float precision/.test(query)) {
    return {
      text: `### 🔢 **What is \`0.1 + 0.2\` in JavaScript?**\n\n` +
        `In pure mathematics: **\`0.3\`**.\n\n` +
        `In JavaScript (and all languages using **IEEE 754 double-precision binary floating-point**):\n` +
        `\`\`\`javascript\n0.1 + 0.2 === 0.30000000000000004 // true! 🤯\n\`\`\`\n\n` +
        `Because numbers in binary cannot precisely represent base-10 fractions like 0.1, you get tiny rounding errors.\n\n` +
        `**How Rahul handles this in production:**\n` +
        `For monetary/financial systems, Rahul stores currency in whole integer cents (e.g. \`1000\` instead of \`10.00\`) or uses precision libraries like \`decimal.js\` or \`BigInt\`!`,
      suggestions: [
        "🤔 Ask another tricky question",
        "🛠 What is typeof NaN?",
        "😂 Tell me a programmer joke",
        "🚀 See Rahul's JavaScript projects"
      ]
    };
  }

  // Tricky Question: "What is typeof NaN?"
  if (/typeof nan|type of nan/.test(query)) {
    return {
      text: `### 🤪 **What is \`typeof NaN\`?**\n\n` +
        `\`\`\`javascript\ntypeof NaN; // Returns "number"!\n\`\`\`\n\n` +
        `Welcome to JavaScript, where **"Not a Number" is literally of type "number"**! 😂\n\n` +
        `Also fun fact:\n` +
        `\`\`\`javascript\nNaN === NaN; // Returns false!\n\`\`\`\n\n` +
        `That's why senior developers like Rahul always check for valid numbers using \`Number.isNaN(val)\` instead of equality checks!`,
      suggestions: [
        "🤔 Ask another tricky question",
        "😂 Tell me a programmer joke",
        "🛠 What is Rahul's JavaScript experience?"
      ]
    };
  }

  // Tricky Question: "[] + [] vs [] + {} vs {} + []"
  if (/\[\]\s*\+\s*\[\]|\[\]\s*\+\s*\{\}|\{\}\s*\+\s*\[\]|type coercion/.test(query)) {
    return {
      text: `### 🤯 **JavaScript Type Coercion Magic!**\n\n` +
        `Prepare yourself for peak JS trivia:\n\n` +
        `1. \`[] + []\` ➡️ **\`""\`** (Both arrays convert to empty strings and concatenate)\n` +
        `2. \`[] + {}\` ➡️ **\`"[object Object]"\`** (Array becomes \`""\`, object converts to string)\n` +
        `3. \`{} + []\` ➡️ **\`0\`** in older consoles (evaluated as an empty code block followed by unary plus on empty array) or **\`"[object Object]"\`** in expressions!\n\n` +
        `This is precisely why Rahul writes **TypeScript** with strict type checking enabled across his projects! 🛡️`,
      suggestions: [
        "🤔 Ask another tricky question",
        "😂 Tell me a joke",
        "🚀 Show Rahul's TypeScript projects"
      ]
    };
  }

  // Tricky Question: "How to exit Vim?"
  if (/exit vim|quit vim|how to exit vim|how do you exit vim|leave vim/.test(query)) {
    return {
      text: `### ⌨️ **How Do You Exit Vim?**\n\n` +
        `Legend says some developers are still trapped inside Vim since 2018!\n\n` +
        `Here is the official escape sequence:\n` +
        `1. Press the \`Esc\` key (a couple of times to be safe).\n` +
        `2. Type **\`:wq\`** and press \`Enter\` (save and quit).\n` +
        `3. Or type **\`:q!\`** and press \`Enter\` (discard changes and quit forcefully).\n` +
        `4. Quick shortcut: Press \`Shift + ZZ\`!\n\n` +
        `*(Or reboot your computer, we won't judge!)* 😂`,
      suggestions: [
        "😂 Tell me a joke",
        "🤔 Ask another tricky question",
        "🛠 What dev tools does Rahul use?"
      ]
    };
  }

  // Tricky Question: "How to center a div?"
  if (/center a div|how to center a div|center div/.test(query)) {
    return {
      text: `### 🎨 **How to Center a Div in CSS (The 2026 Way)**\n\n` +
        `Gone are the dark ages of \`margin: auto\` hacks and negative margins!\n\n` +
        `**Option 1: Modern CSS Grid (Simplest)**\n` +
        `\`\`\`css\n.container {\n  display: grid;\n  place-items: center;\n}\n\`\`\`\n\n` +
        `**Option 2: Modern Flexbox**\n` +
        `\`\`\`css\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\`\`\`\n\n` +
        `**Option 3: Tailwind CSS (Rahul's favorite)**\n` +
        `\`\`\`html\n<div class="flex items-center justify-center min-h-screen">...</div>\n\`\`\`\n\n` +
        `Rahul has mastered responsive CSS architectures for clean, zero-overflow viewports.`,
      suggestions: [
        "😂 Tell me a CSS joke",
        "🛠 Show frontend skills",
        "🚀 Show web projects"
      ]
    };
  }

  // Tricky Question: "Will AI replace software engineers / developers?"
  if (/will ai replace (developers|programmers|engineers|humans)|ai replacing software engineers/.test(query)) {
    return {
      text: `### 🧠 **Will AI Replace Software Engineers?**\n\n` +
        `**Short answer:** AI won't replace software engineers, but software engineers who master AI workflows will replace those who don't!\n\n` +
        `Here is why senior developers like Rahul remain indispensable:\n` +
        `1. **System Architecture & Trade-offs:** AI generates isolated snippets; human engineers design distributed resilience, database indexing, and latency budgets.\n` +
        `2. **Real-World Business Context:** Translating messy client ambiguity into concrete engineering specifications.\n` +
        `3. **Security & Edge Cases:** AI often hallucinates security vulnerabilities (like missing auth or SQL injection); experienced engineers catch them before deployment.\n` +
        `4. **Speed Multiplier:** Rahul leverages modern AI tools to ship features 3x faster without compromising code quality.`,
      suggestions: [
        "💼 Why hire Rahul?",
        "🚀 See his WhatsApp AI Automation project",
        "😂 Tell me a programmer joke"
      ]
    };
  }

  // Tricky Question: "Can you write code for me?"
  if (/can you write code|write code for me|code something for me|generate code/.test(query)) {
    return {
      text: `### 💻 **Can I Write Code For You?**\n\n` +
        `I can explain any technical concept or architecture pattern Rahul uses!\n\n` +
        `However, for **production-grade codebases, bespoke mobile apps, and scalable web platforms**, you'll want the real deal: **Rahul Misal** himself.\n\n` +
        `Rahul provides turnkey software engineering services from architecture design to deployment. Tap below to discuss your project requirements!`,
      suggestions: [
        "💼 Hire Rahul for a project",
        "📱 See his Kotlin & Android apps",
        "🌐 See his Web & Next.js projects",
        "💬 Message Rahul on WhatsApp"
      ]
    };
  }

  // Tricky Question: "What is the meaning of life? / 42"
  if (/meaning of life|what is 42|life universe and everything/.test(query)) {
    return {
      text: `### 🌌 **The Meaning of Life**\n\n` +
        `According to the Deep Thought supercomputer: **42**.\n\n` +
        `According to a software engineer:\n` +
        `• Writing clean, maintainable code\n` +
        `• Shipping side projects that people actually love using\n` +
        `• Centering divs on the first try\n` +
        `• And never, ever pushing uncommitted code right before a Friday evening deploy! 🚀`,
      suggestions: [
        "😂 Tell me a joke",
        "🤔 Ask another tricky question",
        "🚀 Show Rahul's top projects"
      ]
    };
  }

  // Tricky Question: "What is your IQ / are you smart?"
  if (/what is your iq|are you smart|how smart are you/.test(query)) {
    return {
      text: `### 💡 **How Smart Am I?**\n\n` +
        `Smart enough to instantly analyze Rahul's **20+ repositories**, answer technical architecture questions in under 100 milliseconds, and tell you why you should hire him for your next big project!\n\n` +
        `Test my knowledge—ask me about Kotlin Coroutines, Next.js App Router, or how UdemyWala hit #1 on Google!`,
      suggestions: [
        "🚀 How did UdemyWala hit #1 on Google?",
        "📱 Tell me about his Kotlin apps",
        "😂 Tell me a programmer joke"
      ]
    };
  }

  // Tricky Question: "Can you pass the Turing Test?"
  if (/turing test|can you pass the turing test/.test(query)) {
    return {
      text: `### 🧪 **The Turing Test Challenge**\n\n` +
        `If the test is having witty conversations, analyzing full-stack codebases, and cracking self-deprecating developer jokes without crashing... I'd say I passed with flying colors!\n\n` +
        `Try me with a tricky programming question or ask about Rahul's engineering background!`,
      suggestions: [
        "🤔 Ask a tricky question",
        "😂 Tell me a joke",
        "🚀 Show Rahul's top projects"
      ]
    };
  }

  // Framework debate: React vs Vue / Next.js vs Vite / Kotlin vs Java
  if (/react vs vue|vue vs react|next vs vite|vite vs next|kotlin vs java|java vs kotlin/.test(query)) {
    return {
      text: `### ⚖️ **Technology Comparison & Engineering Perspective**\n\n` +
        `Here is Rahul's take on choosing the right tool for the job:\n\n` +
        `• **Next.js vs Vite:** Vite is unbeatable for snappy single-page client apps (like TaskFlow); Next.js 15 is king for SEO-critical platforms and server-side rendering (like UdemyWala).\n` +
        `• **Kotlin vs Java:** Kotlin wins hands down for modern Android. Coroutines eliminate callback hell, and Compose makes declarative UIs 10x faster to build than XML.\n` +
        `• **React vs Vue:** React's vast ecosystem and TypeScript synergy make it ideal for high-scale enterprise applications.\n\n` +
        `Rahul selects tech stacks based on performance, team maintainability, and user requirements.`,
      suggestions: [
        "🛠 What is Rahul's full tech stack?",
        "🚀 Show his Next.js projects",
        "📱 Show his Kotlin apps"
      ]
    };
  }

  // Secret / Easter Egg
  if (/secret|easter egg|tell me a secret/.test(query)) {
    return {
      text: `### 🤫 **Developer Easter Egg Unlocked!**\n\n` +
        `Did you know that Rahul's **UdemyWala platform** was built to solve a personal frustration with expired promo codes?\n\n` +
        `He engineered an automated crawler and microdata engine that pushed it to **#1 on Google Search worldwide**, outranking massive competitor sites with zero marketing spend!\n\n` +
        `*True engineering is about finding real-world friction and fixing it with code.*`,
      suggestions: [
        "🚀 Tell me more about UdemyWala",
        "😂 Tell me a joke",
        "💼 How to hire Rahul"
      ]
    };
  }

  // =========================================================================
  // 3. GREETINGS & INTRODUCTIONS
  // =========================================================================
  if (/^(hi|hello|hey|greetings|hola|namaste|good morning|good afternoon|good evening|yo)\b/.test(query)) {
    return {
      text: `Hello! 👋 I'm **CodesRahul AI**, Rahul Misal's personal interactive portfolio assistant.\n\nI can tell you all about his **20+ shipped applications**, **Android & MERN stack expertise**, **freelance availability**, or connect you directly with him.\n\nWhat would you like to explore?`,
      suggestions: [
        "🚀 Tell me about his best projects",
        "🛠 What are his strongest technical skills?",
        "😂 Tell me a programmer joke",
        "💼 How can I hire Rahul?"
      ]
    };
  }

  // =========================================================================
  // 4. WHO IS RAHUL / ABOUT ME / BIO
  // =========================================================================
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

  // =========================================================================
  // 5. SPECIFIC PROJECT LOOKUPS
  // =========================================================================

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
        `• **Key Highlights:** 1-tap presets for Netflix, Spotify, iCloud, budget analytics, and high-performance Supabase sync.\n\n` +
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

  // =========================================================================
  // 6. ANDROID & MOBILE DEVELOPMENT QUERIES
  // =========================================================================
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

  // =========================================================================
  // 7. TECHNICAL STACK & SKILLS
  // =========================================================================
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

  // =========================================================================
  // 8. ALL PROJECTS / PORTFOLIO SHOWCASE
  // =========================================================================
  if (/projects|work|portfolio|showcase|apps|what have you built|list projects/.test(query)) {
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

  // =========================================================================
  // 9. HIRING, FREELANCE, RATES & AVAILABILITY
  // =========================================================================
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

  // =========================================================================
  // 10. CONTACT INFORMATION & SOCIAL LINKS
  // =========================================================================
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

  // =========================================================================
  // 11. RESUME / CV
  // =========================================================================
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

  // =========================================================================
  // 12. DYNAMIC TECH MATCHING (Fallback to projects matching)
  // =========================================================================
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

  // =========================================================================
  // 13. INTELLIGENT DEFAULT FALLBACK
  // =========================================================================
  return {
    text: `I understand you're asking about **"${userMessage}"**!\n\n` +
      `Rahul is a Full Stack and Android engineer specializing in **Next.js, React, Kotlin, Node.js, and Supabase** with 20+ applications shipped.\n\n` +
      `Here are some topics I can answer immediately:\n` +
      `• Details on his **20+ projects** (e.g., Renewo, UdemyWala, TaskFlow, OmenControl)\n` +
      `• His **technical skillset** across mobile, web, and systems\n` +
      `• **Tricky developer questions** & fun tech riddles\n` +
      `• **Programmer jokes** to brighten your day\n` +
      `• How to **hire Rahul** or contact him directly\n\n` +
      `What would you like to explore?`,
    suggestions: [
      "🚀 Show top projects",
      "😂 Tell me a programmer joke",
      "🤔 Ask a tricky tech question",
      "📱 Tell me about his Android apps",
      "💼 How can I hire Rahul?"
    ]
  };
}
