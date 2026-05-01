<template>
  <div class="layout-default">
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<style scoped>
.layout-default {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
