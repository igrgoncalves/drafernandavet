<script setup>
const route = useRoute()
const slug = route.params.slug

definePageMeta({
  layout: 'default'
})

// Mock post data
const post = {
  title: 'O que é Medicina Veterinária Integrativa?',
  date: '15 Mai 2026',
  category: 'Saúde',
  image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1000&auto=format&fit=crop',
  content: `
    <p>A Medicina Veterinária Integrativa não é uma alternativa à medicina convencional, mas sim uma aliada poderosa. Ela foca no animal como um todo, considerando não apenas os sintomas físicos, mas também o comportamento, o ambiente e o estado emocional.</p>
    <p>Ao unir o melhor dos dois mundos — diagnóstico preciso e tratamentos convencionais com terapias complementares como acupuntura e fisiatria — conseguimos resultados muito mais profundos e duradouros.</p>
    <h3>Os pilares do cuidado integrado:</h3>
    <ul>
      <li><strong>Individualidade:</strong> Cada animal é único e seu tratamento também deve ser.</li>
      <li><strong>Prevenção:</strong> Agir antes que a doença se instale.</li>
      <li><strong>Conforto:</strong> O controle da dor é prioridade absoluta.</li>
    </ul>
    <p>Neste blog, vamos explorar como essas técnicas podem ajudar seu pet a viver mais e melhor.</p>
  `
}

useSeoMeta({
  title: `${post.title} | Dicas da Vet`,
  description: 'Entenda como a união de terapias pode transformar a vida do seu pet.'
})
</script>

<template>
  <main class="post-detail-page">
    <section class="page-hero section">
      <div class="container text-center reveal">
        <NuxtLink to="/blog" class="back-link">&larr; Voltar para o Blog</NuxtLink>
        <span class="post-category">{{ post.category }}</span>
        <h1>{{ post.title }}</h1>
        <p class="post-date">Publicado em {{ post.date }}</p>
      </div>
    </section>

    <article class="post-article section">
      <div class="container container-narrow">
        <div class="post-main-image reveal">
          <img :src="post.image" :alt="post.title" />
        </div>
        
        <div class="post-body reveal" v-html="post.content"></div>
        
        <div class="post-footer reveal">
          <AppCard class="share-card">
            <h4>Gostou deste conteúdo?</h4>
            <p>Compartilhe com outros tutores ou agende uma consultoria para tirar suas dúvidas.</p>
            <AppButton to="/contato" variant="primary">Falar com a Dra. Fernanda</AppButton>
          </AppCard>
        </div>
      </div>
    </article>
  </main>
</template>

<style scoped>
.page-hero {
  padding-top: 10rem;
  background-color: var(--color-bg);
}

.container-narrow {
  max-width: 800px;
}

.back-link {
  display: inline-block;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-accent);
}

.post-category {
  display: block;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1px;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.post-date {
  font-size: 0.875rem;
  color: var(--color-text-light);
  margin-top: 1rem;
}

.post-main-image {
  margin-bottom: 4rem;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.post-main-image img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
}

.post-body {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--color-text);
}

.post-body :deep(p) {
  margin-bottom: 2rem;
}

.post-body :deep(h3) {
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
}

.post-body :deep(ul) {
  margin-bottom: 2rem;
  padding-left: 1.5rem;
}

.post-body :deep(li) {
  margin-bottom: 1rem;
}

.post-footer {
  margin-top: 5rem;
  padding-top: 5rem;
  border-top: 1px solid var(--color-border);
}

.share-card {
  text-align: center;
  background: var(--color-bg);
}

.share-card h4 {
  margin-bottom: 1rem;
}

.share-card p {
  margin-bottom: 2rem;
}
</style>
