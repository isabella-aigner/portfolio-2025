type TmFunc = (key: string) => unknown;

export function getSkillPanels(tm: TmFunc) {
  const icons = ["</>", "⊞", "✦", "❋"];
  const panels = tm('shared.skillPanels') as Array<{ title: string; desc: string; tags: string[] }>;
  return panels.map((p, i) => ({ icon: icons[i], ...p }));
}

export function getSoftSkillCards(tm: TmFunc) {
  const icons = ["✦", "💬", "💡"];
  const cards = tm('shared.softSkillCards') as Array<{ title: string; desc: string }>;
  return cards.map((c, i) => ({ icon: icons[i], ...c }));
}

// Keep legacy static exports for backwards compatibility (used before i18n)
export const skillPanels = [
  {
    icon: "</>",
    title: "Frontend Development",
    desc: "Erstellung moderner, nutzerfreundlicher und performanter Weboberflächen mit Fokus auf Design und Usability.",
    tags: [
      "CSS", "HTML", "TailwindCSS", "Bootstrap", "Javascript", "VanillaJS",
      "TypeScript", "Twig", "Vue.js", "Vue CLI", "Webpack", "Vite", "Vitest",
      "node.js", "nuxt.js", "express.js", "Symphony", "PHP", "Playwright",
      "Typo3", "Stylelab", "Pimcore", "Pinia", "Web Components", "REST APIs",
      "EsLint & Prettier", "Git", "Docker", "Jira", "Agile/Scrum",
    ],
  },
  {
    icon: "⊞",
    title: "UI/UX-Design",
    desc: "Erstellung moderner, nutzerfreundlicher und performanter Weboberflächen mit Fokus auf Design und Usability.",
    tags: [
      "User Interface Design", "User Experience Design", "Wireframing",
      "Prototyping", "Adobe XD", "Figma", "Usability Testing", "Personas",
      "User Journeys", "Design Systems", "Responsive Design", "Material UI", "bolt.new",
    ],
  },
  {
    icon: "✦",
    title: "Grafik- & Branddesign",
    desc: "Erstellung moderner, nutzerfreundlicher und performanter Weboberflächen mit Fokus auf Design und Usability.",
    tags: [
      "Adobe Creative Suite", "Visual Design Prinzipien", "Brand Guidelines",
      "Corporate Design", "Corporate Identity", "Layoutdesign",
      "Typografie & Bildsprache", "Printdesign", "Webdesign", "Logodesign",
      "Konzeptentwicklung", "Produktentwicklung",
    ],
  },
  {
    icon: "❋",
    title: "Leidenschaften & Creative Skills",
    desc: "Erstellung moderner, nutzerfreundlicher und performanter Weboberflächen mit Fokus auf Design und Usability.",
    tags: [
      "3D Sculpting", "Musikkomposition", "Musizieren", "Kreatives Schreiben",
      "Kalligrafie", "Fotografie", "Illustration", "Painting",
      "Vektorgrafik-Design", "Bildbearbeitung", "Generative Art",
      "Schmuckdesign", "DYI Crafts", "Game Design", "Storytelling & Worldbuilding",
      "Prompt Engineering",
    ],
  },
];

export const softSkillCards = [
  {
    icon: "✦",
    title: "Qualitätsfokus & Auge für Detail",
    desc: "Höchste Ansprüche an Präzision und Sorgfalt, um exzellente Ergebnisse sicherzustellen.",
  },
  {
    icon: "💬",
    title: "Kommunikations- & Kritikfähigkeit",
    desc: "Offen, klar und konstruktiv kommunizieren, um Vertrauen zu stärken und kontinuierlich besser zu werden.",
  },
  {
    icon: "💡",
    title: "Lernbereitschaft & Kreatives Denken",
    desc: "Neue Ansätze entwickeln und kontinuierlich Wissen erweitern, um innovative Lösungen zu schaffen.",
  },
];
