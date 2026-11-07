export const PROFILE = {
  name: "Yashika Varshney",
  shortName: "yashie",
  jobTitle: "Product Designer",
  description:
    "Yashika Varshney is a product designer and creative thinker. Explore her work in enterprise UX, design systems, motion, and AI-assisted design.",
  email: "yashikavarshney.yv@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/yashika-varshney/",
    "https://www.behance.net/yashikavarshney2",
    "https://dribbble.com/yashie_uiux",
    "https://www.instagram.com/uiux.yashie/",
  ],
  socialLinks: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/yashika-varshney/",
      handle: "yashika-varshney",
    },
    {
      label: "Behance",
      url: "https://www.behance.net/yashikavarshney2",
      handle: "yashikavarshney2",
    },
    {
      label: "Dribbble",
      url: "https://dribbble.com/yashie_uiux",
      handle: "yashie_uiux",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/uiux.yashie/",
      handle: "uiux.yashie",
    },
  ],
  skills: [
    "Product design",
    "Enterprise UX",
    "Design systems",
    "Motion design",
    "Lottie",
    "AI-assisted design",
    "Rapid prototyping",
    "Visual exploration",
  ],
  projects: [
    {
      id: "emtdesk",
      title: "EMTDesk",
      category: "B2B corporate travel",
      description: "One console, two very different jobs.",
      image: "/media/fe1926be652f37cc96b21d87fcfa076f.webp",
      imageAlt: "EMTDesk admin dashboard",
      problem:
        "Every client had a different setup, and one rigid dashboard could not cover the spread.",
      approach:
        "Use the same grid and widget language for admins and employees, with different scopes. Modules switch on and off as interchangeable strips without breaking the page.",
      outcome:
        "One console for travel managers and travellers, with fourteen reports in one widget language.",
    },
    {
      id: "qms",
      title: "QMS",
      category: "Enterprise UX · Query to booking",
      description: "Bring the journey from query to booking into one view.",
      image: "/media/3983074703fa197c3561fec285fcc316.webp",
      imageAlt: "QMS dashboard — the command centre",
      problem: "A query lived in six places and belonged to no one.",
      approach:
        "Rules-based routing, one query view, and a default screen for each of five roles. Profiles, calls, tickets, and bookings come together in one view.",
      outcome:
        "Four spreadsheets and a phone call became one progressive package builder.",
    },
    {
      id: "emt-analytics",
      title: "EMT Analytics",
      category: "Lead UI/UX designer · 9 modules · 6 teams",
      description: "Turn data into insights and a shared understanding.",
      image: "/media/5e572533d248e9498d611f44a0cd5749.webp",
      imageAlt:
        "EMT Analytics dashboard with global filters, KPI row and active-user trend",
      problem: "Everyone had data. Nobody had the same answer.",
      approach:
        "Organize the review around four questions: what is happening, why is it happening, which users are affected, and what should happen next?",
      outcome:
        "One source of truth. Reporting collapsed to minutes, and drop-off became visible.",
    },
  ],
} as const;
