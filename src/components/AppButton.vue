<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md';
  href?: string;
  target?: string;
}>(), {
  variant: 'outline',
  size: 'md',
});
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    class="app-btn"
    :class="[`app-btn--${variant}`, { 'app-btn--sm': size === 'sm' }]"
  ><slot /></a>
  <button
    v-else
    class="app-btn"
    :class="[`app-btn--${variant}`, { 'app-btn--sm': size === 'sm' }]"
  ><slot /></button>
</template>

<style>
.app-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: inherit;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: border-color 0.2s, color 0.2s, background 0.2s, transform 0.2s;
}

/* ── Outline ── */
.app-btn--outline {
  background: transparent;
  border: 1px solid rgba(216,235,255,0.25);
  color: #D8EBFF;
  font-size: 0.9375rem;
  padding: 8px 18px;
}

.app-btn--outline:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.app-btn--outline.app-btn--sm {
  font-size: 0.875rem;
  padding: 6px 14px;
}

/* ── Primary ── */
.app-btn--primary {
  background: #429EC8;
  border: none;
  color: #ffffff;
  font-size: 1.0625rem;
  min-width: 220px;
  height: 56px;
  padding: 0 32px;
  justify-content: center;
  pointer-events: all;
}

.app-btn--primary:hover {
  background: #5ab3d8;
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  .app-btn--primary { min-width: 262px; height: 64px; font-size: 1.125rem; }
}

/* arrow helper used inside buttons */
.app-btn .arrow { font-size: 1.1em; }
</style>
