import { createI18n } from "vue-i18n";

const messages = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      personalProjects: "Personal Projects",
      contact: "Contact",
      career: "Career",
    },
    home: {
      greeting: "Hi, I'm Isabella Aigner",
      subtitle: "Frontend Developer & UI/UX Designer",
      viewWork: "View My Work",
      skills: "My Skills",
      skillsList: {
        frontend: "Frontend Development",
        uiux: "UI/UX Design",
        responsive: "Responsive Design",
        design: "Graphic Design",
      },
    },
    projects: {
      title: "My Projects",
      viewProject: "View Project",
    },
    personalProjects: {
      title: "Personal Projects",
      viewProject: "View Project",
      hobbies: {
        title: "My Hobbies & Interests",
        description:
          "Beyond coding and design, I am passionate about various activities that keep me creative and energized.",
        items: [
          {
            title: "Photography",
            icon: "pi pi-camera",
            description:
              "Capturing moments and exploring visual storytelling through digital photography.",
          },
          {
            title: "Digital Art",
            icon: "pi pi-palette",
            description:
              "Creating digital illustrations and exploring different artistic styles.",
          },
          {
            title: "Reading",
            icon: "pi pi-book",
            description:
              "Exploring tech literature, design books, and science fiction.",
          },
          {
            title: "Hiking",
            icon: "pi pi-map",
            description:
              "Exploring nature trails and enjoying outdoor activities.",
          },
        ],
      },
    },
    contact: {
      title: "Get in Touch",
      message:
        "I'm always interested in hearing about new projects and opportunities.",
    },
    career: {
      title: "Career Path",
      intro:
        "My career path has been shaped by continuous learning and diverse experiences in software development and design.",
      education: {
        title: "Education",
        items: [
          {
            period: "2019 - 2024",
            title: "HTL Leonding",
            subtitle: "Information Technology",
            description:
              "Specialized in software development with focus on web technologies and application development. Completed various team projects and gained practical experience in agile development methods.",
          },
          {
            period: "2015 - 2019",
            title: "NMS Ottensheim",
            subtitle: "Digital Arts Focus",
            description:
              "Foundation in digital design and creative technologies. Developed strong problem-solving skills and creative thinking abilities.",
          },
        ],
      },
      experience: {
        title: "Work Experience",
        items: [
          {
            period: "Feb. 2021 - Aug. 2021",
            title: "Frontend Developer Intern",
            company: "Elements New Media Solutions",
            description:
              "Internship in web development focusing on frontend technologies. Worked on client projects and gained practical experience in modern web development practices.",
          },
          {
            period: "2023",
            title: "Frontend Developer Intern",
            company: "KEBA AG",
            description:
              "Developed and maintained web applications using Vue.js and TypeScript. Collaborated with the development team on various projects and gained practical experience in industrial automation solutions.",
          },
          {
            period: "2022",
            title: "Frontend Developer Intern",
            company: "KEBA AG",
            description:
              "Worked on frontend development projects using modern web technologies. Gained experience in responsive design and user interface development.",
          },
        ],
      },
    },
  },
  de: {
    nav: {
      home: "Start",
      projects: "Projekte",
      personalProjects: "Freie Projekte",
      contact: "Kontakt",
      career: "Werdegang",
    },
    home: {
      greeting: "Hi, ich bin Isabella Aigner",
      subtitle: "Frontend-Entwicklerin & UI/UX-Designerin",
      viewWork: "Projekte ansehen",
      skills: "Meine Fähigkeiten",
      skillsList: {
        frontend: "Frontend-Entwicklung",
        uiux: "UI/UX-Design",
        responsive: "Responsive Design",
        design: "Grafikdesign",
      },
    },
    projects: {
      title: "Meine Projekte",
      viewProject: "Projekt ansehen",
    },
    personalProjects: {
      title: "Freie Projekte",
      viewProject: "Projekt ansehen",
      hobbies: {
        title: "Meine Hobbys & Interessen",
        description:
          "Neben Programmierung und Design beschäftige ich mich mit verschiedenen Aktivitäten, die mich kreativ und energiegeladen halten.",
        items: [
          {
            title: "Fotografie",
            icon: "pi pi-camera",
            description:
              "Momente einfangen und visuelle Geschichten durch digitale Fotografie erzählen.",
          },
          {
            title: "Digitale Kunst",
            icon: "pi pi-palette",
            description:
              "Erstellen digitaler Illustrationen und Erkunden verschiedener künstlerischer Stile.",
          },
          {
            title: "Lesen",
            icon: "pi pi-book",
            description:
              "Erkunden von Tech-Literatur, Design-Büchern und Science-Fiction.",
          },
          {
            title: "Wandern",
            icon: "pi pi-map",
            description:
              "Naturpfade erkunden und Outdoor-Aktivitäten genießen.",
          },
        ],
      },
    },
    contact: {
      title: "Kontakt aufnehmen",
      message: "Ich freue mich immer über neue Projekte und Möglichkeiten.",
    },
    career: {
      title: "Werdegang",
      intro:
        "Mein Werdegang wurde durch kontinuierliches Lernen und vielfältige Erfahrungen in der Softwareentwicklung und im Design geprägt.",
      education: {
        title: "Ausbildung",
        items: [
          {
            period: "2019 - 2024",
            title: "HTL Leonding",
            subtitle: "Informationstechnologie",
            description:
              "Spezialisierung auf Softwareentwicklung mit Schwerpunkt auf Webtechnologien und Anwendungsentwicklung. Durchführung verschiedener Teamprojekte und praktische Erfahrung in agilen Entwicklungsmethoden.",
          },
          {
            period: "2015 - 2019",
            title: "NMS Ottensheim",
            subtitle: "Schwerpunkt Digitale Künste",
            description:
              "Grundlagen im digitalen Design und kreativen Technologien. Entwicklung von Problemlösungsfähigkeiten und kreativem Denken.",
          },
        ],
      },
      experience: {
        title: "Berufserfahrung",
        items: [
          {
            period: "Feb. 2021 - Aug. 2021",
            title: "Frontend Developer Praktikum",
            company: "Elements New Media Solutions",
            description:
              "Praktikum im Bereich Web-Development mit Fokus auf Frontend. Arbeit an Kundenprojekten und Sammlung praktischer Erfahrung in modernen Webtechnologien.",
          },
          {
            period: "2023",
            title: "Frontend Developer Praktikum",
            company: "KEBA AG",
            description:
              "Entwicklung und Wartung von Webanwendungen mit Vue.js und TypeScript. Zusammenarbeit mit dem Entwicklungsteam an verschiedenen Projekten und praktische Erfahrung in industriellen Automatisierungslösungen.",
          },
          {
            period: "2022",
            title: "Frontend Developer Praktikum",
            company: "KEBA AG",
            description:
              "Arbeit an Frontend-Entwicklungsprojekten mit modernen Webtechnologien. Erfahrung in responsivem Design und Entwicklung von Benutzeroberflächen.",
          },
        ],
      },
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "de",
  fallbackLocale: "en",
  messages,
});
