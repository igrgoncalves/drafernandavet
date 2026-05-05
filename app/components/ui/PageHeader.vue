<template>
  <section class="page-header">
    <div class="container header-container">
      <div class="header-grid">
        <!-- Coluna de Texto -->
        <div class="header-content reveal">
          <span class="badge" v-if="badge">{{ badge }}</span>
          <h1 v-html="title"></h1>
          <p class="subtitle" v-if="subtitle">{{ subtitle }}</p>
          
          <div class="header-actions" v-if="$slots.actions">
            <slot name="actions"></slot>
          </div>
        </div>

        <!-- Coluna da Imagem -->
        <div class="header-visual reveal" v-if="imageSrc">
          <div class="image-wrapper">
            <img :src="imageSrc" :alt="title.replace('<span>', '').replace('</span>', '')" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  },
  imageSrc: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.page-header {
  padding: 10rem 0 5rem;
  background-color: var(--color-bg);
  overflow: hidden;
}

.header-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 5rem;
  align-items: center;
}

.header-content {
  display: flex;
  flex-direction: column;
}

.badge {
  display: inline-block;
  align-self: flex-start;
  padding: 0.5rem 1.25rem;
  background: rgba(114, 30, 18, 0.05);
  color: var(--color-primary);
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

:deep(h1 span) {
  color: var(--color-accent);
}

.subtitle {
  font-size: 1.125rem;
  color: var(--color-text-light);
  line-height: 1.6;
  max-width: 540px;
}

.header-actions {
  margin-top: 3rem;
}

.image-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  aspect-ratio: 4/3;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Responsividade */
@media (max-width: 1024px) {
  .header-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }

  .header-content {
    align-items: center;
  }

  .badge {
    align-self: center;
  }

  .subtitle {
    margin: 0 auto;
  }

  .image-wrapper {
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 8rem 0 4rem;
  }
  
  .image-wrapper {
    aspect-ratio: 16/9;
  }
}
</style>
