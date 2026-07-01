import civicshq from "../assets/civicshq.png";
import pasteproof from "../assets/pasteproof-128.png";
import freddie_mac_logo from "../assets/FreddieMacLogo.svg";
import jasaron from "../assets/jasaron_learning.png";
import ibm_logo from "../assets/IBM_logo.svg";

import civicshq_01 from "../assets/screenshots/civicshq/01-home.png";
import civicshq_02 from "../assets/screenshots/civicshq/02-bills.png";
import civicshq_03 from "../assets/screenshots/civicshq/03-politicians.png";
import civicshq_04 from "../assets/screenshots/civicshq/04-my-district.png";
import civicshq_05 from "../assets/screenshots/civicshq/05-match.png";

import anithrift from "../assets/anithrift.png";
import anithrift_01 from "../assets/screenshots/anithrift/01-home.png";
import anithrift_02 from "../assets/screenshots/anithrift/02-sell.png";
import anithrift_03 from "../assets/screenshots/anithrift/03-signin.png";
import anithrift_04 from "../assets/screenshots/anithrift/04-about.png";
import anithrift_05 from "../assets/screenshots/anithrift/05-forum.png";

import pasteproof_01 from "../assets/screenshots/pasteproof/01-home.png";
import pasteproof_02 from "../assets/screenshots/pasteproof/02-pricing.png";
import pasteproof_03 from "../assets/screenshots/pasteproof/03-playground.png";
import pasteproof_04 from "../assets/screenshots/pasteproof/04-browser-extension.png";
import pasteproof_05 from "../assets/screenshots/pasteproof/05-api-slack.png";

import freddie_01 from "../assets/screenshots/freddie_mac/01-home.png";
import freddie_02 from "../assets/screenshots/freddie_mac/02-working-with-us.png";
import freddie_03 from "../assets/screenshots/freddie_mac/03-tools-learning.png";
import freddie_04 from "../assets/screenshots/freddie_mac/04-news-insights.png";
import freddie_05 from "../assets/screenshots/freddie_mac/05-mortgage-products.png";

import jasaron_03 from "../assets/screenshots/jasaron/03-services.png";
import jasaron_04 from "../assets/screenshots/jasaron/04-book-session.png";
import jasaron_05 from "../assets/screenshots/jasaron/05-contact.png";

import ibm_01 from "../assets/screenshots/ibm/01-ibmsearch.png";
import ibm_02 from "../assets/screenshots/ibm/02-search-results.png";
import ibm_03 from "../assets/screenshots/ibm/03-support-portal.png";
import ibm_04 from "../assets/screenshots/ibm/04-fix-central.png";
import ibm_05 from "../assets/screenshots/ibm/05-documentation.png";
export const tools = [
  {
    id: "react",
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Component-driven UIs with hooks, context, and performance tuning.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "Typed JavaScript for safer, more maintainable codebases.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description: "SSR, routing, and full-stack React apps at scale.",
  },
  {
    id: "node",
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "APIs, tooling, and server-side logic in JavaScript.",
  },
  {
    id: "drupal",
    name: "Drupal",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg",
    description: "Enterprise CMS builds, migrations, and content pipelines.",
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    description: "Utility-first styling for rapid, consistent interfaces.",
  },
  {
    id: "firebase",
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    description: "Auth, realtime data, and serverless backends.",
  },
  {
    id: "figma",
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    description: "Design handoff, prototyping, and design systems.",
  },
  {
    id: "php",
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    description: "Backend scripting for CMS and custom web apps.",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description: "Relational data modeling and query optimization.",
  },
  {
    id: "git",
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description: "Version control, branching strategies, and code review.",
  },
  {
    id: "wordpress",
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    description: "Custom themes, plugins, and content workflows.",
  },
  {
    id: "supabase",
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    description: "Postgres backend with auth, storage, and realtime APIs.",
  },
  {
    id: "stripe",
    name: "Stripe",
    icon: "https://cdn.simpleicons.org/stripe/635BFF",
    description: "Payments, subscriptions, and checkout flows.",
  },
  {
    id: "cloudflare",
    name: "Cloudflare",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
    description: "Edge hosting, DNS, and performance/security for web apps.",
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: "https://cdn.simpleicons.org/vercel/FFFFFF",
    description: "Deploy, preview, and scale frontend apps at the edge.",
  },
  {
    id: "claude",
    name: "Claude",
    icon: "https://cdn.simpleicons.org/anthropic/D97757",
    description: "AI-assisted development, debugging, and workflow automation.",
  },
  {
    id: "cursor",
    name: "Cursor",
    icon: "https://cdn.simpleicons.org/cursor/6a9ae6",
    description: "AI-powered IDE for faster iteration and codebase navigation.",
  },
];

export const techStack = [
  "react",
  "typescript",
  "nextjs",
  "node",
  "tailwind",
  "firebase",
  "drupal",
  "figma",
].map((id) => {
  const tool = tools.find((t) => t.id === id);
  return { name: tool.name, icon: tool.icon };
});

export const data = [
  {
    id: 1,
    name: "CivicHQ",
    slug: "civicshq",
    shortCode: "CVHQ",
    category: "Civic Tech",
    image: civicshq,
    url: "https://civicshq.com",
    github: "https://github.com/abryantdev/CivicsHQ",
    live: true,
    color: "#1a5c45",
    labelColor: "#2d8a66",
    tags: ["Next.js", "TypeScript", "Civic Data"],
    screenshots: [
      { src: civicshq_01, alt: "Civic dashboard" },
      { src: civicshq_02, alt: "Legislation feed" },
      { src: civicshq_03, alt: "Politician lookup" },
      { src: civicshq_04, alt: "District lookup" },
      { src: civicshq_05, alt: "Match score" },
    ],
    highlights: [
      "Federal and state legislative tracker with AI summaries",
      "Politician profiles and district lookup by address or ZIP",
      "Match score tool to compare your views with representatives",
    ],
    description:
      "Public utility platform for civic engagement. Track 8,000+ active bills, browse politician profiles, look up your district, and explore legislative match scores — no account required.",
  },
  {
    id: 2,
    name: "Pasteproof",
    slug: "pasteproof",
    shortCode: "PSTP",
    category: "SaaS",
    image: pasteproof,
    url: "https://pasteproof.com",
    color: "#6a9ae6",
    labelColor: "#7fb6f4",
    tags: ["React", "Node.js", "Auth"],
    screenshots: [
      { src: pasteproof_01, alt: "Homepage" },
      { src: pasteproof_02, alt: "Pricing" },
      { src: pasteproof_03, alt: "Interactive playground" },
      { src: pasteproof_04, alt: "Browser extension" },
      { src: pasteproof_05, alt: "APIs & Slack" },
    ],
    highlights: [
      "Secure user authentication and data management",
      "Modern React frontend with responsive UI",
      "Built for scale across devices",
    ],
    description:
      "Full-stack app with secure authentication, responsive UI, and a modern React frontend built for scale.",
  },
  {
    id: 3,
    name: "Freddie Mac",
    slug: "freddie-mac",
    shortCode: "FDMC",
    category: "Enterprise",
    image: freddie_mac_logo,
    url: "https://sf.freddiemac.com",
    color: "#5c8a6e",
    labelColor: "#8bc4a0",
    tags: ["Drupal", "PHP", "CI/CD"],
    screenshots: [
      { src: freddie_01, alt: "Homepage" },
      { src: freddie_02, alt: "Working with Us" },
      { src: freddie_03, alt: "Technology & learning" },
      { src: freddie_04, alt: "News & insights" },
      { src: freddie_05, alt: "Mortgage products" },
    ],
    highlights: [
      "100% uptime on a mission-critical web ecosystem",
      "Led platform migration from legacy systems",
      "End-to-end Drupal content deployment pipeline",
    ],
    description:
      "Mission-critical web ecosystem with 100% uptime, platform migration, and end-to-end Drupal content deployment.",
  },
  {
    id: 4,
    name: "Jasaron",
    slug: "jasaron",
    shortCode: "JSRN",
    category: "Education",
    image: jasaron,
    live: false,
    color: "#e8a838",
    labelColor: "#ffd166",
    tags: ["HTML5", "CSS3", "UX"],
    screenshots: [
      { src: jasaron, alt: "Homepage" },
      { src: jasaron_03, alt: "Services" },
      { src: jasaron_04, alt: "Book a session" },
      { src: jasaron_05, alt: "Contact us" },
    ],
    highlights: [
      "Responsive educational interfaces aligned to client goals",
      "Full client website maintenance and optimization",
      "UX-driven usability improvements from market research",
    ],
    description:
      "Responsive educational interfaces, client site maintenance, and UX-driven usability improvements.",
  },
  {
    id: 5,
    name: "IBM Search",
    slug: "ibm-search",
    shortCode: "IBMQ",
    category: "Enterprise",
    image: ibm_logo,
    url: "https://www.ibm.com/support/pages/ibmsearch",
    color: "#4a6670",
    labelColor: "#6a9ae6",
    tags: ["Drupal", "PHP", "Search"],
    screenshots: [
      { src: ibm_01, alt: "IBM Search" },
      { src: ibm_02, alt: "Search results" },
      { src: ibm_03, alt: "Support portal" },
      { src: ibm_04, alt: "Fix Central" },
      { src: ibm_05, alt: "Documentation" },
    ],
    highlights: [
      "Diagnostic scripts for Drupal content reconciliation",
      "Advanced search query capabilities in Drupal",
      "Nuanced content discovery for end users",
    ],
    description:
      "Diagnostic scripts for Drupal content reconciliation and advanced search query capabilities.",
  },
  {
    id: 6,
    name: "AniThrift",
    slug: "anithrift",
    shortCode: "ATHF",
    category: "E-Commerce",
    image: anithrift,
    url: "https://anithrift.netlify.app/",
    color: "#c44dff",
    labelColor: "#ff6bcb",
    tags: ["TypeScript", "Stripe", "Firebase"],
    screenshots: [
      { src: anithrift_01, alt: "Homepage" },
      { src: anithrift_02, alt: "Create listing" },
      { src: anithrift_03, alt: "Sign in" },
      { src: anithrift_04, alt: "About us" },
      { src: anithrift_05, alt: "Community forum" },
    ],
    highlights: [
      "Stripe checkout and Firebase-authenticated messaging",
      "Firestore-backed chat threads for buyers and sellers",
      "Listing workflows for community-driven inventory",
    ],
    description:
      "Passion project blending anime fandom with sustainable resale. Stripe checkout, Firebase auth, and Firestore messaging connect buyers and sellers.",
  },
];

export const CONTACT_EMAIL = "abryantdev@gmail.com";

export const contactMailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Portfolio inquiry"
)}&body=${encodeURIComponent("Hi Aaron,\n\n")}`;
