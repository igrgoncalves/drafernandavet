<script setup>
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Blog | Dra. Fernanda Moreno - Dicas da Vet',
  description: 'Artigos e dicas sobre saúde veterinária integrativa, comportamento e bem-estar animal.'
})

const posts = [
  {
    title: 'O que é Medicina Veterinária Integrativa?',
    slug: 'o-que-e-medicina-integrativa',
    date: '15 Mai 2026',
    category: 'Saúde',
    desc: 'Entenda como a união de terapias convencionais e complementares pode transformar a vida do seu pet.',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Acupuntura para Cães Idosos: Benefícios',
    slug: 'acupuntura-caes-idosos',
    date: '10 Mai 2026',
    category: 'Reabilitação',
    desc: 'Como a acupuntura ajuda no controle de dor e melhora da mobilidade em cães na terceira idade.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Ansiedade de Separação em Gatos',
    slug: 'ansiedade-separacao-gatos',
    date: '05 Mai 2026',
    category: 'Comportamento',
    desc: 'Dicas práticas de manejo ambiental para ajudar gatos que sofrem quando os tutores saem de casa.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop'
  }
]
</script>

<template>
  <main class="blog-page">
    <PageHeader 
      title="Dicas da <span>Vet</span>"
      subtitle="Artigos, orientações e novidades para ajudar você a cuidar melhor da saúde e do comportamento do seu animal."
      badge="Blog"
      imageSrc="https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=1000&auto=format&fit=crop"
    />

    <section class="blog-grid-section section">
      <div class="container">
        <div class="blog-grid">
          <NuxtLink v-for="post in posts" :key="post.slug" :to="`/blog/${post.slug}`" class="post-card-link reveal">
            <AppCard padding="false" hover class="post-card">
              <div class="post-image">
                <img :src="post.image" :alt="post.title" />
                <span class="post-category">{{ post.category }}</span>
              </div>
              <div class="post-content">
                <span class="post-date">{{ post.date }}</span>
                <h3>{{ post.title }}</h3>
                <p>{{ post.desc }}</p>
                <span class="read-more">Ler Artigo &rarr;</span>
              </div>
            </AppCard>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

.post-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.post-image {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.post-card:hover .post-image img {
  transform: scale(1.05);
}

.post-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--color-accent);
  color: var(--color-white);
  padding: 0.3rem 0.8rem;
  border-radius: 5px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.post-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.post-date {
  font-size: 0.8125rem;
  color: var(--color-text-light);
  margin-bottom: 0.75rem;
}

.post-content h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
  line-height: 1.4;
}

.post-content p {
  font-size: 0.9375rem;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.read-more {
  font-weight: 600;
  color: var(--color-accent);
  font-size: 0.875rem;
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>
