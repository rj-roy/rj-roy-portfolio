export const SCENES = [
  { id: "home", label: "Home", index: "01" },
  { id: "about", label: "About", index: "02" },
  { id: "work", label: "Work", index: "03" },
  { id: "journal", label: "Journal", index: "04" },
  { id: "reel", label: "Reel", index: "05" },
  { id: "contact", label: "Contact", index: "06" },
];

export const SOCIALS = [
  { name: "GitHub", handle: "@rj-roy", href: "https://github.com/rj-roy" },
  { name: "LinkedIn", handle: "in/roy-jibon", href: "https://www.linkedin.com/in/roy-jibon/" },
  { name: "Instagram", handle: "@royjibon65", href: "https://www.instagram.com/royjibon65/" },
  { name: "Twitter", handle: "JibonRo22074491", href: "https://x.com/JibonRo22074491" },
  { name: "WhatsApp", handle: "Jibon Roy", href: "https://wa.me/+8801854102982" },
];

export const CONTACT = {
  name: "Jibon Roy",
  email: "dpjdeveloper.me@gmail.com",
  location: "Remote · Bangladesh (GMT+6)",
  role: "Full-Stack Developer",
};

export const CAPABILITIES = [
  {
    title: "Full-Stack Development",
    text: "End-to-end products with Next.js, Node.js, Express, and MongoDB.",
    icon: "layers",
  },
  {
    title: "Front-end Engineering",
    text: "Polished, accessible React interfaces with Tailwind and Framer Motion.",
    icon: "paintbrush",
  },
  {
    title: "Backend & APIs",
    text: "REST APIs, authentication, role-based access, and rate limiting.",
    icon: "server",
  },
  {
    title: "Real-time & Automation",
    text: "WebSocket notifications, data migrations, and admin tooling.",
    icon: "zap",
  },
];

export const MARQUEE_TOOLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Redux Toolkit",
  "Framer Motion",
  "Tailwind CSS",
  "Shadcn UI",
  "Chakra UI",
  "Docker",
  "Socket.io",
  "JWT",
  "Stripe",
  "Better Auth",
  "Cloudinary",
];

export const SKILLS = [
  { name: "TypeScript", icon: "code", color: "#3178C6" },
  { name: "React", icon: "atom", color: "#61DAFB" },
  { name: "Next.js", icon: "letter", letter: "N", color: "#ffffff" },
  { name: "Framer Motion", icon: "zap", color: "#a855f7" },
  { name: "Chakra UI", icon: "box", color: "#38b2ac" },
  { name: "Shadcn UI", icon: "diamond", color: "#ffffff" },
  { name: "Redux Toolkit", icon: "refresh", color: "#764ABC" },
  { name: "Figma", icon: "pen", color: "#F24E1E" },
  { name: "React Native", icon: "phone", color: "#61DAFB" },
  { name: "Expo", icon: "play", color: "#ffffff" },
  { name: "Electron", icon: "monitor", color: "#47848F" },
  { name: "Node.js", icon: "server", color: "#339933" },
  { name: "Express", icon: "terminal", color: "#9ca3af" },
  { name: "MongoDB", icon: "database", color: "#47A248" },
  { name: "PostgreSQL", icon: "database", color: "#336791" },
  { name: "Firebase", icon: "flame", color: "#FFCA28" },
  { name: "Docker", icon: "container", color: "#2496ED" },
  { name: "Socket.io", icon: "sockets", color: "#ffffff" },
];

export const WORK_FILTERS = [
  { id: "all", label: "All" },
  { id: "development", label: "Development" },
  { id: "full-stack", label: "Full Stack" },
  { id: "front-end", label: "Front-End" },
];

export function projectFilters(project) {
  const stack = (project.stack || "").toLowerCase();
  const cats = new Set(["development"]);
  if (stack.includes("full") && stack.includes("stack")) cats.add("full-stack");
  if (stack === "front-end" || stack.includes("front")) cats.add("front-end");
  return [...cats];
}

export const JOURNAL_POSTS = [
  {
    slug: "platform-architecture",
    title: "Platform Architecture",
    category: "Engineering",
    date: "Aug 2025",
    excerpt:
      "Designing user dashboards, activity feeds, referral visualizations, and NFT minting flows inside one coherent product.",
    image: "https://i.ibb.co/ZRFMCnyD/image.png",
  },
  {
    slug: "real-time-infrastructure",
    title: "Real-time Infrastructure",
    category: "Systems",
    date: "Jul 2025",
    excerpt:
      "Implementing WebSocket-driven live notifications for instant, seamless in-app interactions.",
    image: "https://i.ibb.co/5VHNxsF/image.png",
  },
  {
    slug: "e-learning-ecosystem",
    title: "E-Learning Ecosystem",
    category: "Product",
    date: "Jun 2025",
    excerpt:
      "Course management CRUD, video streaming, quizzes, and score tracking for a full e-learning platform.",
    image: "https://i.ibb.co/ccSk5p2W/image.png",
  },
  {
    slug: "admin-tools-automation",
    title: "Admin Tools & Automation",
    category: "Tooling",
    date: "Apr 2025",
    excerpt:
      "Admin dashboards for document and voucher management, plus scripts for data migration and distribution.",
    image: "https://i.ibb.co.com/yBFwwynN/image.png",
  },
];

export const RESUME_PATH = "/resume";

export const HERO = {
  accent: "Designs & builds",
  accentItalic: "digital products.",
  headline: ["Full-Stack developer building ", "scalable", ", ", "production-ready", " products"],
  tagline:
    "Engineering ideas into production-ready products. Full-Stack Developer focused on modern Secure Web applications, APIs, and scalable systems.",
  badge: "Available for new projects",
  location: "Dinajpur, Bangladesh · Remote (GMT+6)",
  resumeLabel: "Download Resume",
};

export const HOME_NAV = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Notes", href: "#notes" },
];

export const HERO_STATS = [
  { value: "07", label: "Products shipped" },
  { value: "18+", label: "Tools in the stack" },
  { value: "<24h", label: "Reply time" },
];

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    caption: "Interfaces people actually enjoy using",
    icon: "monitor",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind",
      "Framer Motion",
      "shadcn/ui",
      "Figma",
    ],
  },
  {
    title: "Backend",
    caption: "APIs, auth and business logic",
    icon: "server",
    items: [
      "Node.js",
      "Express",
      "REST API",
      "JWT",
      "Better Auth",
      "Socket.io",
      "Stripe",
      "Cloudinary",
    ],
  },
  {
    title: "Data",
    caption: "Schemas that survive real users",
    icon: "database",
    items: ["MongoDB", "PostgreSQL", "Firebase", "Redis"],
  },
  {
    title: "Ship with",
    caption: "Tooling that keeps releases boring",
    icon: "terminal",
    items: ["Git", "Docker", "Vercel", "Railway", "Netlify", "Python"],
  },
];

export const SKILL_FOOTNOTE =
  "Every project above shipped to production — deployed, monitored and iterated on with real users.";

export const PROCESS = [
  {
    num: "01",
    title: "Scope before code",
    text: "We agree on the users, the data model and the one metric that decides success — before a single component is written.",
  },
  {
    num: "02",
    title: "Build in thin slices",
    text: "Auth, core flows and the UI shell land first as small reviewable pieces, so feedback arrives while changes are still cheap.",
  },
  {
    num: "03",
    title: "Ship, then harden",
    text: "Deploy early, watch the logs, rate-limit the APIs, then keep tightening performance and accessibility release after release.",
  },
];

export const JOURNEY = [
  {
    kind: "Now",
    org: "Open to work",
    role: "Full-Stack Developer — Remote, GMT+6",
    current: true,
    points: [
      "Available for full-stack roles, freelance product builds and long-term collaboration.",
      "Every serious enquiry gets a reply within one business day.",
    ],
  },
  {
    kind: "Platform",
    org: "Forever Paws",
    role: "Full-Stack Developer — AI pet adoption platform",
    points: [
      "Role-based access for adopters, shelters and admins with protected dashboards and route guards.",
      "Gemini-powered chat assistant for natural-language pet search, plus a rate-limited Express API.",
    ],
  },
  {
    kind: "Platform",
    org: "Hire Loop",
    role: "Full-Stack Developer — AI recruitment platform",
    points: [
      "Multi-role dashboards for job seekers, startups, recruiters and admins with JWT route protection.",
      "Refactored a monolithic backend into modular config, middleware, routes and controllers.",
    ],
  },
  {
    kind: "Platform",
    org: "Startup Forge",
    role: "Full-Stack Developer — startup & collaborator marketplace",
    points: [
      "Secure Better Auth sessions with distinct founder, collaborator and admin flows.",
      "Stripe subscriptions, plan management and Cloudinary uploads wired end to end.",
    ],
  },
  {
    kind: "Education",
    org: "KBM College, Dinajpur",
    role: "BA (Honors) in Sociology — 3rd year, ongoing",
    points: [
      "Bangla is a native language; English is working proficiency for documentation and client calls.",
    ],
  },
];
