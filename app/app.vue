<script setup>
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
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
