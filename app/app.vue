<script setup lang="ts">
const { revealElements } = useReveal()
const route = useRoute()

// Re-run reveal logic on mount and on every route change
onMounted(() => {
  revealElements()
})

watch(() => route.path, () => {
  // Small delay to wait for page transition
  setTimeout(() => {
    revealElements()
  }, 100)
})
</script>

<template>
  <div class="app-wrapper">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    
    <!-- Global Floating WhatsApp Button (Hidden on /links) -->
    <AppWhatsApp v-if="route.path !== '/links'" />
  </div>
</template>

<style>
.app-wrapper {
  position: relative;
  min-height: 100vh;
}
</style>
