<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  ctaHref?: string;
  ctaLabel?: string;
  ctaExternal?: boolean;
}>();
</script>

<template>
  <section class="subpage-header">
    <div class="absolute top-0 left-0 pointer-events-none">
      <img src="/assets/images/bg.png" alt="" />
    </div>
    <div class="absolute top-[-50px] right-0 pointer-events-none">
      <img src="/assets/images/header-lines.svg" alt="" />
    </div>
    <div class="page-inner relative z-10">
      <h1 class="subpage-title">{{ title }}</h1>
      <p class="subpage-subtitle">{{ subtitle }}</p>
      <a
        v-if="ctaHref"
        :href="ctaHref"
        :target="ctaExternal ? '_blank' : undefined"
        :rel="ctaExternal ? 'noopener noreferrer' : undefined"
        class="subpage-cta"
      >
        {{ ctaLabel }}
      </a>
    </div>
  </section>
</template>

<style>
.subpage-header {
  background: #0D1A2C;
  padding: 48px 0 44px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

@media (max-width: 768px) {
  .subpage-header { padding: 36px 0 32px; }
}

.subpage-header .subpage-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.625rem;
  line-height: 1.15;
}

@media (max-width: 768px) {
  .subpage-header .subpage-title { font-size: 2.25rem; }
}

.subpage-header .subpage-subtitle {
  font-size: 1.125rem;
  color: rgba(216,235,255,0.7);
  margin: 0 auto 1.75rem;
  max-width: 520px;
  line-height: 1.6;
}

.subpage-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 8px;
  background: #429EC8;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;
}

.subpage-cta:hover { opacity: 0.85; }
</style>
