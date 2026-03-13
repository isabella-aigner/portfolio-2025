<script setup lang="ts">
withDefaults(defineProps<{
  heading: string;
  sub: string;
  period: string;
  label?: string;
  details?: string[];
  variant?: 'work' | 'edu';
}>(), {
  variant: 'work',
});
</script>

<template>
  <div class="cv-career-entry">
    <div class="cv-career-icon" :class="variant === 'work' ? 'cv-career-icon--work' : 'cv-career-icon--edu'">
      <!-- Work: briefcase -->
      <svg v-if="variant === 'work'" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 7H4C2.9 7 2 7.9 2 9v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z" fill="currentColor" opacity="0.9"/>
        <path d="M16 7V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2" stroke="currentColor" stroke-width="1.5" fill="none"/>
      </svg>
      <!-- Education: graduation cap -->
      <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
      </svg>
    </div>

    <div class="cv-career-card">
      <h3 class="cv-career-position">{{ heading }}</h3>
      <div class="cv-career-meta">
        <span class="cv-career-company">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path v-if="variant === 'work'" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            <path v-else d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
          </svg>
          {{ sub }}
        </span>
        <span class="cv-career-period">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
          </svg>
          {{ period }}
        </span>
      </div>
      <template v-if="details && details.length">
        <p v-if="label" class="cv-career-label">{{ label }}</p>
        <ul class="cv-career-details">
          <li v-for="d in details" :key="d">{{ d }}</li>
        </ul>
      </template>
    </div>
  </div>
</template>

<style>
.cv-career-entry {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding-bottom: 20px;
  position: relative;
  z-index: 1;
}

.cv-career-entry:last-child { padding-bottom: 0; }

.cv-career-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  background: #1D2B40;
  border: 1.5px solid rgba(150, 166, 198, 0.25);
  box-shadow: 0 0 0 3px #0D1A2C;
}

.cv-career-icon--work {
  background: rgba(66, 158, 200, 0.12);
  border-color: rgba(66, 158, 200, 0.35);
  color: #429EC8;
}

.cv-career-icon--edu {
  background: rgba(0, 140, 160, 0.2);
  border-color: rgba(0, 190, 210, 0.4);
  color: rgba(0, 210, 230, 0.9);
  box-shadow: 0 0 0 3px #0a1420;
}

.cv-career-card {
  flex: 1;
  background: #1D2B40;
  border-radius: 10px;
  padding: 18px 22px;
  margin-top: 4px;
  border: 1px solid rgba(150, 166, 198, 0.08);
  transition: border-color 0.2s;
}

.cv-career-card:hover { border-color: rgba(66, 158, 200, 0.2); }

.cv-career-position {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 8px;
  line-height: 1.3;
}

.cv-career-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  margin-bottom: 4px;
}

.cv-career-company,
.cv-career-period {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.875rem;
  color: #839CB5;
}

.cv-career-company svg,
.cv-career-period svg { flex-shrink: 0; }

.cv-career-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #429EC8;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 12px 0 6px;
}

.cv-career-details {
  margin: 0;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cv-career-details li {
  font-size: 0.9rem;
  color: rgba(216,235,255,0.75);
  line-height: 1.55;
}
</style>
