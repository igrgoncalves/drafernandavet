<script setup>
defineProps({
  to: { type: String, default: null },
  href: { type: String, default: null },
  variant: { type: String, default: 'primary' }, // primary, secondary, outline, ghost
  size: { type: String, default: 'md' },        // sm, md, lg
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false }
})
</script>

<template>
  <component
    :is="to ? 'NuxtLink' : (href ? 'a' : 'button')"
    :to="to"
    :href="href"
    :class="['app-button', `btn-${variant}`, `btn-${size}`, { 'btn-loading': loading }]"
    :disabled="disabled || loading"
  >
    <span v-if="loading" class="spinner"></span>
    <slot v-else />
  </component>
</template>

<style scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-main);
  font-weight: 500;
  border-radius: 50px;
  cursor: pointer;
  transition: var(--transition-smooth);
  border: 2px solid transparent;
  gap: 0.5rem;
  white-space: nowrap;
  outline: none;
}

.app-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Variants */
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}
.btn-primary:hover:not(:disabled) {
  background-color: var(--color-primary-light);
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: var(--color-accent);
  color: var(--color-white);
}
.btn-secondary:hover:not(:disabled) {
  background-color: var(--color-accent-light);
  transform: translateY(-2px);
}

.btn-outline {
  background-color: transparent;
  border-color: var(--color-primary);
  color: var(--color-primary);
}
.btn-outline:hover:not(:disabled) {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.btn-ghost {
  background-color: transparent;
  color: var(--color-primary);
}
.btn-ghost:hover:not(:disabled) {
  background-color: rgba(114, 30, 18, 0.05);
}

/* Sizes */
.btn-sm { padding: 0.5rem 1.25rem; font-size: 0.875rem; }
.btn-md { padding: 0.75rem 2rem; font-size: 1rem; }
.btn-lg { padding: 1rem 2.5rem; font-size: 1.125rem; }

/* Spinner */
.spinner {
  width: 1.2rem;
  height: 1.2rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
