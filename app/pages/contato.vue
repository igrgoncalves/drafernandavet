<script setup>
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Contato | Dra. Fernanda Moreno - Medicina Veterinária Integrativa',
  description: 'Entre em contato para agendar uma consulta presencial ou online. Atendimento em São Paulo e Vale do Paraíba.'
})
</script>

<template>
  <main class="contato-page">
    <PageHeader 
      title="Vamos <span>Conversar</span>?"
      subtitle="Escolha o melhor canal para tirar suas dúvidas ou agendar uma avaliação para o seu animal. Atendimento presencial e online."
      badge="Contato"
      imageSrc="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=1000&auto=format&fit=crop"
    />

    <ContactSection />

    <section class="logistics-section section reveal">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Locais de <span>Atendimento</span></h2>
          <p class="section-desc">Atuação flexível para levar o cuidado onde o seu animal estiver.</p>
        </div>

        <div class="logistics-grid">
          <AppCard class="logistics-card">
            <Icon name="ph:house-fill" />
            <h4>Modalidade Domiciliar (Volante)</h4>
            <p>Conforto e menos estresse para o animal, atendendo diretamente na sua residência.</p>
            <ul>
              <li>São Paulo (Foco na Zona Leste)</li>
              <li>Região do Vale do Paraíba / Alto Tietê</li>
            </ul>
          </AppCard>

          <AppCard class="logistics-card">
            <Icon name="ph:hospital-fill" />
            <h4>Clínicas Parceiras</h4>
            <p>Atendimento em infraestrutura completa de clínicas veterinárias parceiras nas mesmas regiões.</p>
          </AppCard>

          <AppCard class="logistics-card">
            <Icon name="ph:monitor-fill" />
            <h4>Consultoria Online</h4>
            <p>Especializada para a área de comportamento, permitindo suporte a tutores em qualquer localização.</p>
          </AppCard>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.logistics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
}

.logistics-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logistics-card .iconify {
  font-size: 3rem;
  color: var(--color-accent);
  margin-bottom: 1.5rem;
}

.logistics-card h4 {
  margin-bottom: 1rem;
}

.logistics-card ul {
  text-align: left;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--color-text-light);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.logistics-card li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logistics-card li::before {
  content: '•';
  color: var(--color-accent);
  font-weight: bold;
}

@media (max-width: 1024px) {
  .logistics-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
