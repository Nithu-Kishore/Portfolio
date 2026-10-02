export const siteConfig = {
  name: "Nithu S Kishore",
  title: "Nithu S Kishore · Product Designer",
  description:
    "Product designer. I design for people who are too busy to think, starting with doctors.",
  email: "skishorenithu@gmail.com",
  resumeHref: "/Nithu-S-Kishore-Resume.pdf",
  resumeFilename: "Nithu-S-Kishore-Resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/nithu-s-kishore/",
    behance: "https://www.behance.net/nithuskishore",
    medium: "https://medium.com/@uiuxnithu",
  },
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Lab", href: "#lab" },
  { label: "Writing", href: "#writing" },
];

export const identity = {
  name: "Nithu S Kishore",
  headline: {
    lead: "Product designer.",
    rest:
      " I design for people who are too busy to think, starting with doctors.",
  },
  status: "Open to product roles · India and remote",
  about: {
    title: "About",
    paragraphs: [
      {
        bold:
          "I started as an engineer, automating repetitive work out of people's days. Now I design so they don't have to think about it at all.",
        rest:
          " After two years at TCS and an M.Des from NIFT Kannur, I designed a vehicle service app at Wrenchly, then worked on DocHours at Zennode Technologies. Today I freelance, write about cognitive load on Medium and build small tools with AI.",
      },
      {
        bold: "",
        rest: "Outside work I travel, talk to cats, think, and unlearn. Based in Kochi.",
      },
    ],
  },
};

export const workSection = {
  title: "Work",
  lead: {
    href: "/work/dochours",
    image: "/images/dochours/final-getting-started.jpg",
    imageAlt: "DocHours dashboard with the Getting Started panel for new clinics",
    meta: "DocHours · SaaS healthcare · Sole designer · 1.5 months",
    title: "Getting new clinics from sign-up to their first appointment",
    description:
      "New users hit empty dropdowns and gave up. I designed a Getting Started experience that surfaces the setup they didn't know they needed.",
    cta: "Read case study",
  },
  soon: [
    {
      ariaLabel: "Anganwadi case study coming soon",
      meta: "Anganwadi · Public health · M.Des",
      title: "Digitizing Anganwadi systems",
      chip: "Case study in progress",
    },
    {
      ariaLabel: "Career Next case study coming soon",
      meta: "Career Next · Community app",
      title: "An interactive community for career growth",
      chip: "Case study in progress",
    },
  ],
};

export const experience = [
  {
    logo: { type: "letter" as const, value: "F" },
    role: "Product designer",
    org: "Freelance",
    date: "Aug 2026 – now",
    description: "Designing a D2C e-commerce store for a peanut butter brand.",
  },
  {
    logo: { type: "image" as const, src: "/logos/logo-zennode.png", variant: "default" as const },
    role: "Junior product designer",
    org: "Zennode Technologies · Full-time",
    date: "Aug 2025 – Jul 2026 · 1 yr",
    description:
      "Owned onboarding, empty-state and consultation flows on DocHours, a SaaS healthcare platform.",
  },
  {
    logo: { type: "image" as const, src: "/logos/logo-wrenchly.png", variant: "flat" as const },
    role: "Product design intern",
    org: "Wrenchly Services · Internship",
    date: "Jan 2025 – May 2025 · 5 mos",
    description: "Designed the vehicle service booking flow end to end, from booking to delivery.",
  },
  {
    logo: { type: "image" as const, src: "/logos/logo-kreative.png", variant: "default" as const },
    role: "Graphic design intern",
    org: "Kreative Clan · Internship",
    date: "Jun 2024 – Aug 2024 · 3 mos",
    description: "Designed marketing creatives for international exhibition campaigns.",
  },
  {
    logo: { type: "image" as const, src: "/logos/logo-tcs.webp", variant: "tcs" as const },
    role: "RPA developer",
    tag: "Engineering",
    org: "Tata Consultancy Services · Full-time",
    date: "Apr 2021 – Jun 2023 · 2 yrs 3 mos",
    description: "Built Automation Anywhere bots for enterprise clients, from requirements to deployment.",
  },
];

export const writingTile = {
  id: "writing",
  title: "My writing",
  meta: "Medium · 5 articles",
  moreHref: "https://medium.com/@uiuxnithu",
  description:
    "Short essays on memory, attention and the small moments where products make people think.",
  cards: [
    {
      href: "https://medium.com/@uiuxnithu/the-real-ux-problem-starts-before-you-hit-upload-record-e982fe4de7e3",
      title: "The real UX problem starts before you hit “Upload record”",
      meta: "Jun 2026 · 2 min",
      art: "article-1" as const,
    },
    {
      href: "https://medium.com/@uiuxnithu/designing-for-forgetful-humans-why-ux-should-not-depend-on-memory-1e53fe8d4cfd",
      title: "Designing for forgetful humans",
      meta: "Mar 2026 · 2 min",
      art: "article-2" as const,
    },
  ],
};

export const labTile = {
  id: "lab",
  title: "AI experiments",
  meta: "Built with Lovable · 2 projects",
  description:
    "Small tools I build with AI: an audit that only flags what it can prove, and a sketchbook where crayon lines keep moving.",
  cards: [
    {
      href: "https://ux-lenss.lovable.app",
      title: "UXLens: an evidence-first UX audit",
      meta: "Live · try it",
      image: "/images/uxlens.png",
      imageAlt: "UXLens start screen: Evidence-first heuristic UX audit, with an upload screenshot button",
    },
    {
      href: "https://crayon-breathe-art.lovable.app",
      title: "Crayon Alive: a living sketchbook",
      meta: "Live · try it",
      image: "/images/crayon-alive.webp",
      imageAlt: "Crayon Alive sketchbook with a paper canvas, crayon colours and animation controls",
    },
  ],
};

export const contact = {
  title: "Contact",
  lede: "Open to product design roles, in India or remote. Email is the fastest way to reach me.",
  exploreLabel: "Explore more",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nithu-s-kishore/", external: true },
    { label: "Behance", href: "https://www.behance.net/nithuskishore", external: true },
    { label: "Medium", href: "https://medium.com/@uiuxnithu", external: true },
    { label: "Resume", href: "/Nithu-S-Kishore-Resume.pdf", download: true },
  ],
  copyright: "© 2026 Nithu S Kishore",
};
