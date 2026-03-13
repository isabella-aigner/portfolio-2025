<template>
  <div class="cv-timeline-row grid grid-cols-[380fr_772fr] max-[900px]:grid-cols-1 gap-10 items-start">
    <div class="cv-row-aside flex flex-col gap-3 pt-[2px] max-[900px]:hidden">
      <slot name="aside" />
    </div>
    <slot />
  </div>
</template>
