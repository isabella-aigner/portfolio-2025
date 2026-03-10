<script setup lang="ts">
import ScrollReveal from "../components/ScrollReveal.vue";

const timelineEntries = [
  {
    title: "Frontend Developer, UI/UX & Grafik Design",
    company: "redlink",
    period: "April 2022 - Present",
    sectionLabel: "Verantwortlichkeiten",
    details: [
      "Erstellung und Konzipierung von interaktiven Software-Lösungen",
      "Umsetzung, Testing und Weiterentwicklung von Applikationen",
    ],
  },
  {
    title: "Ausbildung: MTD (Hagenberg)",
    company: "",
    period: "Okt. 2018 - Jan. 2022",
    sectionLabel: "Schwerpunkte",
    details: [
      "Nachgezogene Ausbildung, um die Technologiekompetenz mit aufzunehmen und zu schärfen. Schwerpunkte: Web- & Frontend-Entwicklung",
    ],
  },
  {
    title: "Grafikdesign & Marketingmitarbeiterin",
    company: "",
    period: "Feb. 2015 - April 2017",
    sectionLabel: "Verantwortlichkeiten",
    details: [
      "Modernisierung und Entwicklung eines neuen Corporate Designs und Umsetzung der Geschäftsdrucksorten",
    ],
  },
];

const softSkillCards = [
  {
    icon: "pi pi-star",
    title: "Qualitätsfokus & Auge für Detail",
    desc: "Höchste Ansprüche an Präzision und Sorgfalt, um exzellente Ergebnisse sicherzustellen.",
  },
  {
    icon: "pi pi-comments",
    title: "Kommunikations- & Kritikfähigkeit",
    desc: "Offen, klar und konstruktiv kommunizieren, um Vertrauen zu stärken und kontinuierlich besser zu werden.",
  },
  {
    icon: "pi pi-lightbulb",
    title: "Lernbereitschaft & Kreatives Denken",
    desc: "Neue Ansätze entwickeln und kontinuierlich Wissen erweitern, um innovative Lösungen zu schaffen.",
  },
];
</script>

<template>
  <div class="career-page">

    <!-- Page Header -->
    <section class="career-header">
      <div class="career-header-inner">
        <ScrollReveal>
          <h1 class="career-title">Werdegang</h1>
          <p class="career-subtitle">Meine Reise: Design, Code und Kreativität</p>
        </ScrollReveal>
      </div>
    </section>

    <!-- Bio Card -->
    <section class="career-bio-section">
      <div class="career-bio-inner">
        <ScrollReveal>
          <div class="career-bio-card">
            <h2 class="career-bio-title">
              Design & Development – meine Leidenschaft für digitale Erlebnisse
            </h2>
            <p class="career-bio-text">
              Mit einer Leidenschaft für Design und Technologie kombiniere ich kreative und technische Expertise,
              um innovative Lösungen zu entwickeln. Von der ersten Idee bis zur fertigen Umsetzung begleite ich
              Projekte mit Sorgfalt, Neugier und einem Auge für Details, die den Unterschied machen.
            </p>
            <a
              class="career-cv-btn"
              href="/cv-isabella-aigner.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lebenslauf herunterladen
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Timeline -->
    <section class="career-timeline-section">
      <div class="career-timeline-inner">
        <ScrollReveal>
          <h2 class="career-section-heading">Berufserfahrung</h2>
        </ScrollReveal>

        <div class="career-timeline">
          <ScrollReveal
            v-for="(entry, index) in timelineEntries"
            :key="entry.title + index"
            :delay="index * 100"
            direction="right"
          >
            <div class="career-timeline-item">
              <div class="career-timeline-dot"></div>
              <div class="career-timeline-content">
                <div class="career-timeline-header">
                  <h3 class="career-timeline-title">{{ entry.title }}</h3>
                  <span v-if="entry.company" class="career-timeline-company">{{ entry.company }}</span>
                  <span class="career-timeline-period">{{ entry.period }}</span>
                </div>
                <div class="career-timeline-details">
                  <p class="career-timeline-section-label">{{ entry.sectionLabel }}</p>
                  <ul>
                    <li v-for="detail in entry.details" :key="detail">{{ detail }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Soft Skills Cards -->
    <section class="soft-skills-section">
      <div class="soft-skills-inner">
        <div class="soft-skills-grid">
          <ScrollReveal
            v-for="(card, index) in softSkillCards"
            :key="card.title"
            :delay="index * 100"
            direction="up"
          >
            <div class="soft-skill-card">
              <div class="soft-skill-icon">
                <i :class="card.icon"></i>
              </div>
              <h3 class="soft-skill-title">{{ card.title }}</h3>
              <p class="soft-skill-desc">{{ card.desc }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped lang="scss">
.career-page {
  background: #0D1A2C;
  min-height: 100vh;
}

.career-header {
  background: #0D1A2C;
  padding: 5rem 2rem 3rem;

  .career-header-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .career-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 0.75rem;
  }

  .career-subtitle {
    font-size: 1.125rem;
    color: #D8EBFF;
    margin: 0;
  }
}

.career-bio-section {
  background: #122033;
  padding: 4rem 2rem;

  .career-bio-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .career-bio-card {
    max-width: 800px;
  }

  .career-bio-title {
    font-size: 1.75rem;
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 1.25rem;
    line-height: 1.3;
  }

  .career-bio-text {
    font-size: 1rem;
    color: #D8EBFF;
    line-height: 1.7;
    margin: 0 0 2rem;
  }

  .career-cv-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #429EC8;
    color: #ffffff;
    font-size: 0.95rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.85;
    }
  }
}

.career-timeline-section {
  background: #0D1A2C;
  padding: 5rem 2rem;

  .career-timeline-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .career-section-heading {
    font-size: 2rem;
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 3rem;
  }
}

.career-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-left: 2px solid rgba(66, 158, 200, 0.3);
  padding-left: 2rem;
  margin-left: 1rem;
}

.career-timeline-item {
  position: relative;
  padding-bottom: 3rem;

  &:last-child {
    padding-bottom: 0;
  }
}

.career-timeline-dot {
  position: absolute;
  left: -2.6rem;
  top: 0.25rem;
  width: 14px;
  height: 14px;
  background: #429EC8;
  border-radius: 50%;
  border: 2px solid #0D1A2C;
}

.career-timeline-content {
  background: #122033;
  border-radius: 12px;
  padding: 1.5rem;
}

.career-timeline-header {
  margin-bottom: 1rem;

  .career-timeline-title {
    font-size: 1.15rem;
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 0.35rem;
  }

  .career-timeline-company {
    display: block;
    font-size: 0.9rem;
    font-weight: 500;
    color: #429EC8;
    margin-bottom: 0.25rem;
  }

  .career-timeline-period {
    font-size: 0.85rem;
    color: #D8EBFF;
    opacity: 0.7;
  }
}

.career-timeline-details {
  .career-timeline-section-label {
    font-size: 0.8rem;
    font-weight: 600;
    color: #D8EBFF;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0 0 0.5rem;
  }

  ul {
    margin: 0;
    padding-left: 1.2rem;

    li {
      color: #D8EBFF;
      font-size: 0.9rem;
      line-height: 1.6;
      margin-bottom: 0.3rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
