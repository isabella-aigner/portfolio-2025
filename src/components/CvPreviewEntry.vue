<script setup lang="ts">
withDefaults(defineProps<{
  title?: string;
  date?: string;
  label?: string;
  items?: string[];
  logo?: string;
  logoAlt?: string;
  dotText?: string;
  dotFh?: boolean;
  logos?: { src: string; alt: string; sm?: boolean }[];
  empty?: boolean;
}>(), {
  empty: false,
  dotFh: false,
});
</script>

<template>
  <div class="cv-entry" :class="{ 'cv-entry--empty': empty }">
    <div v-if="logos?.length" class="cv-entry-dot-stack">
      <div
        v-for="l in logos"
        :key="l.src"
        class="cv-entry-dot"
        :class="{ 'cv-entry-dot--sm': l.sm }"
      >
        <img :src="l.src" :alt="l.alt" class="cv-dot-logo" />
      </div>
    </div>
    <div
      v-else-if="!empty"
      class="cv-entry-dot"
      :class="{ 'cv-entry-dot--fh': dotFh }"
    >
      <img v-if="logo" :src="logo" :alt="logoAlt || ''" class="cv-dot-logo" />
      <span v-if="dotText" class="cv-dot-text">{{ dotText }}</span>
    </div>
    <div v-if="!empty" class="cv-entry-details">
      <h3 class="cv-entry-title">{{ title }}</h3>
      <div v-if="date" class="cv-entry-date">📅 {{ date }}</div>
      <p v-if="label" class="cv-entry-label">{{ label }}</p>
      <ul v-if="items?.length" class="cv-entry-list">
        <li v-for="item in items" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style>
.cv-entry {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding-bottom: 32px;
  position: relative;
  z-index: 1;
}

.cv-entry--empty {
  visibility: hidden;
  pointer-events: none;
  min-height: 0;
  padding-bottom: 0;
}

.cv-entry .cv-entry-dot {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #1D2B40;
  border: 1.5px solid rgba(150, 166, 198, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 8px;
  z-index: 2;
  position: relative;
}

.cv-entry .cv-entry-dot--fh {
  background: rgba(0, 140, 160, 0.2);
  border-color: rgba(0, 190, 210, 0.4);
}

.cv-entry .cv-entry-dot--sm {
  width: 36px;
  height: 36px;
  padding: 7px;
}

.cv-entry .cv-entry-dot-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.cv-entry .cv-dot-logo {
  width: 100%;
  height: auto;
  display: block;
  filter: brightness(0) invert(1);
  opacity: 0.85;
}

.cv-entry .cv-dot-text {
  font-size: 0.6875rem;
  font-weight: 700;
  color: rgba(0, 210, 230, 0.9);
  letter-spacing: 0.05em;
}

.cv-entry .cv-entry-details {
  flex: 1;
  padding-top: 2px;
}

.cv-entry .cv-entry-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 6px;
  line-height: 1.3;
}

.cv-entry .cv-entry-date {
  font-size: 0.8125rem;
  color: #839CB5;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.cv-entry .cv-entry-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #429EC8;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 6px;
}

.cv-entry .cv-entry-list {
  margin: 0;
  padding-left: 1.2rem;
  list-style: disc;
}

.cv-entry .cv-entry-list li {
  font-size: 0.875rem;
  color: rgba(216,235,255,0.75);
  line-height: 1.55;
  margin-bottom: 5px;
}

.cv-entry .cv-entry-list li:last-child { margin-bottom: 0; }
</style>
