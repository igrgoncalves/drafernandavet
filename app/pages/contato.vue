<script setup>
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Contato | Dra. Fernanda Moreno - Medicina Veterinária Integrativa',
  description: 'Entre em contato para agendar uma consulta presencial ou online. Atendimento em São Paulo e Vale do Paraíba.'
})

const activeDot = ref(0)
const scrollContainer = ref(null)

const onScroll = () => {
  if (!scrollContainer.value) return
  const el = scrollContainer.value
  const card = el.firstElementChild
  if (!card) return
  const cardWidth = card.offsetWidth + 16
  const index = Math.round(el.scrollLeft / cardWidth)
  activeDot.value = Math.max(0, Math.min(2, index))
}

const scrollToIndex = (index) => {
  if (!scrollContainer.value) return
  const cards = scrollContainer.value.children
  if (cards[index]) {
    cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    activeDot.value = index
  }
}
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
      <AmbientPawsTrail species="cat" variant="diagonal-up" :opacity="0.05" />
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Locais de <span>Atendimento</span></h2>
          <p class="section-desc">Atuação flexível para levar o cuidado onde o seu animal estiver.</p>
        </div>

        <div 
          ref="scrollContainer"
          class="logistics-grid"
          @scroll.passive="onScroll"
        >
          <AppCard class="logistics-card" :hover="true">
            <Icon name="ph:house-fill" class="card-main-icon" />
            <h4>Modalidade Domiciliar (Volante)</h4>
            <p>Conforto e menos estresse para o animal, atendendo diretamente na sua residência.</p>
            <ul class="card-details-list">
              <li>
                <Icon name="ph:map-pin-fill" class="detail-icon" />
                <span>São Paulo (Foco na Zona Leste)</span>
              </li>
              <li>
                <Icon name="ph:map-pin-fill" class="detail-icon" />
                <span>Região do Vale do Paraíba / Alto Tietê</span>
              </li>
            </ul>
          </AppCard>

          <AppCard class="logistics-card" :hover="true">
            <Icon name="ph:first-aid-kit-fill" class="card-main-icon" />
            <h4>Fisio Care Pet</h4>
            <p>Atendimento presencial em infraestrutura completa de reabilitação e fisioterapia veterinária na Zona Leste de SP.</p>
            <ul class="card-details-list">
              <li>
                <Icon name="ph:map-pin-fill" class="detail-icon" />
                <span>Rua Alonso Calhamares, 363 — Penha, SP</span>
              </li>
              <li>
                <Icon name="ph:phone-fill" class="detail-icon" />
                <span>(11) 99591-1206 / (11) 95303-1449</span>
              </li>
              <li>
                <Icon name="ph:globe-fill" class="detail-icon" />
                <a href="https://fisiocarepet.com.br" target="_blank" rel="noopener">fisiocarepet.com.br</a>
              </li>
            </ul>
          </AppCard>

          <AppCard class="logistics-card" :hover="true">
            <Icon name="ph:monitor-fill" class="card-main-icon" />
            <h4>Consultoria Online</h4>
            <p>Especializada para a área de comportamento, permitindo suporte a tutores em qualquer localização.</p>
            <ul class="card-details-list">
              <li>
                <Icon name="ph:video-camera-fill" class="detail-icon" />
                <span>Atendimento remoto por videochamada</span>
              </li>
              <li>
                <Icon name="ph:globe-hemisphere-west-fill" class="detail-icon" />
                <span>Suporte a tutores em qualquer localização</span>
              </li>
            </ul>
          </AppCard>
        </div>

        <div class="carousel-dots" aria-hidden="true">
          <button
            v-for="(_, idx) in 3"
            :key="idx"
            class="carousel-dot"
            :class="{ active: activeDot === idx }"
            @click="scrollToIndex(idx)"
            :aria-label="`Ir para local ${idx + 1}`"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.logistics-section {
  position: relative;
  background-color: var(--color-bg-warm);
  overflow: hidden;
}

.logistics-section .container {
  position: relative;
  z-index: 2;
}

.logistics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  align-items: stretch;
}

.logistics-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.logistics-card .card-main-icon {
  font-size: 3rem;
  color: var(--color-accent);
  margin-bottom: 1.5rem;
  display: inline-flex;
}

.logistics-card h4 {
  margin-bottom: 1rem;
  color: var(--color-primary);
  font-size: 1.25rem;
  font-weight: 600;
}

.logistics-card p {
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.card-details-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: left;
  margin-top: auto;
  padding-top: 1.25rem;
  border-top: 1px dashed rgba(185, 116, 98, 0.2);
}

.card-details-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.875rem;
  color: var(--color-text-light);
  line-height: 1.45;
}

.card-details-list .detail-icon {
  font-size: 1.15rem;
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.card-details-list a {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 3px;
  word-break: break-all;
  transition: color 0.2s ease;
}

.card-details-list a:hover {
  color: var(--color-accent);
}

.carousel-dots {
  display: none;
}

@media (max-width: 1024px) {
  .logistics-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 768px) {
  .carousel-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
  }

  .carousel-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(114, 30, 18, 0.2);
    border: none;
    padding: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .carousel-dot.active {
    width: 22px;
    border-radius: 10px;
    background: var(--color-primary);
  }

  .logistics-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 1rem;
    padding: 0.5rem 1.5rem 1rem;
    margin: 2.5rem -1.5rem 0;
    max-width: none;
    scrollbar-width: none;
  }

  .logistics-grid::-webkit-scrollbar {
    display: none;
  }

  .logistics-card {
    flex: 0 0 85%;
    max-width: 85%;
    scroll-snap-align: center;
  }
}
</style>
