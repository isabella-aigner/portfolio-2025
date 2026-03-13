<script setup lang="ts">
defineProps<{
  num: string;
  label: string;
}>();
</script>

<template>
  <div class="stat-card">
    <span class="stat-num">{{ num }}</span>
    <span class="stat-lbl">{{ label }}</span>
  </div>
</template>

<style>
.stat-card {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #0D1A2C;
  border: 1px solid rgba(216,235,255,0.1);
  border-radius: 8px;
  padding: 24px 30px;
}

.stat-card .stat-num {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
  white-space: nowrap;
}

.stat-card .stat-lbl {
  font-size: 1.875rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
}

@media (max-width: 768px) {
  .stat-card .stat-num { font-size: 2rem; }
  .stat-card .stat-lbl { font-size: 1.25rem; }
}
</style>
