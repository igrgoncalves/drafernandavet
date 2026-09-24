<template>
  <section class="services-section section">
    <div class="container">
      <div class="section-header text-center reveal">
        <h2 class="section-title">Nossos <span>Serviços</span></h2>
        <p class="section-desc">
          Abordagem especializada para diferentes perfis de pacientes, garantindo cuidado específico e resultados profundos.
        </p>
      </div>

      <div 
        ref="scrollContainer"
        class="services-vertical-grid"
        @scroll.passive="onScroll"
      >
        <NuxtLink 
          v-for="service in services" 
          :key="service.title" 
          :to="service.link"
          class="service-vertical-card reveal"
          :style="{ backgroundImage: `url(${service.image})` }"
        >
          <div class="card-overlay"></div>
          <div class="card-content">
            <div class="card-text">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
            <div class="btn-detail-wrapper">
              <span class="btn-fake-pill">
                <span>Ver Detalhes</span>
                <Icon name="ph:arrow-right-bold" />
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Mobile Dots Indicator -->
      <div class="carousel-dots" aria-hidden="true">
        <button
          v-for="(service, idx) in services"
          :key="idx"
          class="carousel-dot"
          :class="{ active: activeDot === idx }"
          @click="scrollToIndex(idx)"
          :aria-label="`Ir para ${service.title}`"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Pequenos Animais',
    description: 'Reabilitação física e comportamento para cães e gatos de todas as idades.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop',
    link: '/servicos/pequenos-animais'
  },
  {
    title: 'Cães Atletas',
    description: 'Performance, prevenção de lesões e longevidade para cães de esporte.',
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1000&auto=format&fit=crop',
    link: '/servicos/caes-atletas'
  },
  {
    title: 'Equinos',
    description: 'Medicina integrativa para cavalos de esporte, trabalho e reprodução.',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1000&auto=format&fit=crop',
    link: '/servicos/equinos'
  }
]

const scrollContainer = ref(null)
const activeDot = ref(0)

const onScroll = () => {
  if (!scrollContainer.value) return
  const el = scrollContainer.value
  const card = el.querySelector('.service-vertical-card')
  if (!card) return
  const cardWidth = card.offsetWidth + 16
  const index = Math.round(el.scrollLeft / cardWidth)
  activeDot.value = Math.max(0, Math.min(services.length - 1, index))
}

const scrollToIndex = (index) => {
  if (!scrollContainer.value) return
  const el = scrollContainer.value
  const cards = el.querySelectorAll('.service-vertical-card')
  if (cards[index]) {
    cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    activeDot.value = index
  }
}
</script>

<style scoped>
.services-section {
  background-color: var(--color-white);
}

.section-header {
  margin-bottom: 4rem;
}

.services-vertical-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  height: 600px; /* Altura fixa para os cards verticais */
}

.service-vertical-card {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: var(--transition-smooth);
  box-shadow: var(--shadow-md);
  cursor: pointer;
  text-decoration: none;
}

.service-vertical-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

/* Degradê verde na parte inferior */
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 40%,
    rgba(114, 30, 18, 0.6) 70%,
    rgba(114, 30, 18, 0.95) 100%
  );
  z-index: 1;
  transition: var(--transition-smooth);
}

.service-vertical-card:hover .card-overlay {
  background: linear-gradient(
    to bottom,
    transparent 20%,
    rgba(114, 30, 18, 0.7) 60%,
    rgba(114, 30, 18, 0.98) 100%
  );
}

.card-content {
  position: relative;
  z-index: 2;
  padding: 3rem 2rem;
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.card-text h3 {
  color: var(--color-white);
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.card-text p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0;
}

/* Estilização do botão em formato pílula */
.btn-detail-wrapper {
  margin-top: 0.5rem;
}

.btn-fake-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 50px;
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  color: var(--color-white);
  transition: var(--transition-smooth);
}

.service-vertical-card:hover .btn-fake-pill {
  background-color: var(--color-white);
  color: var(--color-primary);
  border-color: var(--color-white);
  transform: translateX(4px);
}

.carousel-dots {
  display: none;
}

@media (max-width: 1024px) {
  .services-vertical-grid {
    height: auto;
    grid-template-columns: 1fr;
  }
  
  .service-vertical-card {
    height: 450px;
  }
}

@media (max-width: 768px) {
  .section-header {
    margin-bottom: 2.5rem;
  }

  .services-vertical-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 1rem;
    height: auto;
    padding: 0.5rem 1.5rem 1rem;
    margin: 0 -1.5rem;
    scrollbar-width: none;
  }

  .services-vertical-grid::-webkit-scrollbar {
    display: none;
  }

  .service-vertical-card {
    flex: 0 0 85%;
    max-width: 85%;
    height: 360px;
    scroll-snap-align: center;
    border-radius: 24px;
  }

  .card-content {
    padding: 1.75rem 1.25rem;
    gap: 1rem;
  }

  .card-text h3 {
    font-size: 1.35rem;
    margin-bottom: 0.35rem;
  }

  .card-text p {
    font-size: 0.9rem;
    line-height: 1.45;
  }

  .btn-fake-pill {
    padding: 0.45rem 1rem;
    font-size: 0.8rem;
  }

  .carousel-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.25rem;
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
}
</style>
