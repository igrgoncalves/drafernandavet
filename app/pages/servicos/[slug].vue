<script setup>
const route = useRoute()
const slug = route.params.slug

definePageMeta({
  layout: 'default'
})

// Mock data for specific services
const serviceData = {
  'pequenos-animais': {
    title: 'Pequenos Animais',
    desc: 'Cuidado integrado focado em cães e gatos, unindo reabilitação física e comportamento.',
    content: 'No atendimento de cães e gatos, o trabalho abrange a reabilitação física e a resolução de demandas comportamentais. A Dra. Fernanda acompanha pós-operatórios, alterações de marcha, dores musculoesqueléticas e quadros de apatia.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop'
  },
  'caes-atletas': {
    title: 'Cães Atletas',
    desc: 'Prevenção de lesões e otimização da performance esportiva.',
    content: 'Atuação dedicada a cães atletas, focada na prevenção de lesões, melhora da estrutura física, fortalecimento muscular e desenvolvimento da propriocepção, garantindo eficiência de movimento e longevidade esportiva.',
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1000&auto=format&fit=crop'
  },
  'equinos': {
    title: 'Equinos',
    desc: 'Medicina integrativa para cavalos de esporte, trabalho e reprodução.',
    content: 'A linha de raciocínio integrativa é aplicada ao atendimento de cavalos, focando nas demandas de esporte, trabalho e reprodução. A atuação engloba a reabilitação de lesões, o preparo físico e a melhora de rendimento.',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1000&auto=format&fit=crop'
  }
}

const service = serviceData[slug] || {
  title: 'Serviço Não Encontrado',
  desc: 'Desculpe, este serviço ainda não foi detalhado.',
  content: 'Por favor, entre em contato para mais informações.',
  image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop'
}

useSeoMeta({
  title: `${service.title} | Dra. Fernanda Moreno`,
  description: service.desc
})
</script>

<template>
  <main class="service-detail-page">
    <section class="page-hero section">
      <div class="container text-center reveal">
        <NuxtLink to="/servicos" class="back-link">&larr; Voltar para Serviços</NuxtLink>
        <h1>{{ service.title }}</h1>
        <p class="subtitle">{{ service.desc }}</p>
      </div>
    </section>

    <section class="service-content section">
      <div class="container content-grid">
        <div class="text-content reveal">
          <p class="lead">{{ service.content }}</p>
          <div class="extra-info">
            <h3>Como ajudamos:</h3>
            <ul>
              <li>Exame físico aprofundado e palpação completa.</li>
              <li>Avaliação de marcha e postura.</li>
              <li>Uso de terapias integrativas (Acupuntura, Laser, etc).</li>
              <li>Foco em adestramento positivo e respeito à individualidade.</li>
            </ul>
          </div>
          <AppButton href="https://wa.me/5511966176405" target="_blank" variant="primary" size="lg">Agendar Avaliação para {{ service.title }}</AppButton>
        </div>
        
        <div class="image-content reveal">
          <AppCard padding="false">
            <img :src="service.image" :alt="service.title" />
          </AppCard>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.page-hero {
  padding-top: 10rem;
  background-color: var(--color-bg);
}

.back-link {
  display: inline-block;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-accent);
}

.content-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 6rem;
  align-items: flex-start;
}

.lead {
  font-size: 1.25rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  color: var(--color-text);
}

.extra-info {
  margin-bottom: 3rem;
  padding: 2.5rem;
  background: var(--color-bg);
  border-radius: 20px;
}

.extra-info h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.extra-info ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.extra-info li {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.extra-info li::before {
  content: '✓';
  color: var(--color-success);
  font-weight: bold;
}

.image-content img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  .image-content {
    order: -1;
  }
}
</style>
