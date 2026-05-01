<script setup>
defineProps({
  padding: { type: Boolean, default: true },
  hover: { type: Boolean, default: false }
})
</script>

<template>
  <div :class="['app-card', { 'card-padding': padding, 'card-hover': hover }]">
    <slot />
  </div>
</template>

<style scoped>
.app-card {
  background: var(--color-white);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-smooth);
  overflow: hidden;
}

.card-padding {
  padding: 2rem;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary-light);
}

@media (max-width: 768px) {
  .card-padding {
    padding: 1.5rem;
  }
}
</style>
