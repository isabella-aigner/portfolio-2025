<template>
  <div class="cv-timeline-row">
    <div class="cv-row-aside">
      <slot name="aside" />
    </div>
    <slot />
  </div>
</template>

<style>
.cv-timeline-row {
  display: grid;
  grid-template-columns: 380fr 772fr;
  gap: 40px;
  align-items: flex-start;
}

@media (max-width: 900px) {
  .cv-timeline-row { grid-template-columns: 1fr; }
  .cv-timeline-row .cv-row-aside { display: none; }
}

.cv-row-aside {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 2px;
}
</style>
