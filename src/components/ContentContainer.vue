<template>
  <div class="content-container">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
}
</style>
