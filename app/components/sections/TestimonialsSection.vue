<template>
  <section class="testimonials-section section">
    <div class="container">
      <div class="section-header text-center reveal">
        <h2 class="section-title">Confiança de <span>Tutores e Proprietários</span></h2>
        <p class="section-desc">Histórias de superação e bem-estar através da medicina integrativa.</p>
      </div>

      <div 
        ref="scrollContainer"
        class="testimonials-grid"
        @scroll.passive="onScroll"
      >
        <AppCard v-for="t in testimonials" :key="t.author" class="testimonial-card reveal">
          <div class="quote-icon"><Icon name="ph:quotes-fill" /></div>
          <p class="quote-text">{{ t.text }}</p>
          <div class="author-info">
            <strong>{{ t.author }}</strong>
            <span>{{ t.pet }}</span>
          </div>
        </AppCard>
      </div>

      <!-- Mobile Dots Indicator -->
      <div class="carousel-dots" aria-hidden="true">
        <button
          v-for="(t, idx) in testimonials"
          :key="idx"
          class="carousel-dot"
          :class="{ active: activeDot === idx }"
          @click="scrollToIndex(idx)"
          :aria-label="`Depoimento de ${t.author}`"
        />
      </div>

      <div class="success-case reveal">
        <div class="case-content">
          <span class="case-badge">Caso de Sucesso</span>
          <h3>Recuperação de Mobilidade e Comportamento</h3>
          <p>
            Um exemplo real de como a avaliação física minuciosa (ortopédica e neurológica) aliada à acupuntura e reabilitação transformou a vida de um paciente que apresentava quadros de agressividade por dor crônica.
          </p>
          <AppButton to="/blog" variant="outline" size="sm">Ler Caso Completo</AppButton>
        </div>
        <div class="case-image">
          <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1000&auto=format&fit=crop" alt="Caso de Sucesso" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    text: "A Dra. Fernanda mudou a forma como entendemos nosso cão. Ele estava apático e descobrimos que era dor, não apenas velhice.",
    author: "Mariana Silva",
    pet: "Tutora do Thor (Golden Retriever)"
  },
  {
    text: "O trabalho com meus cavalos de esporte foi excepcional. Melhora visível no rendimento e na disposição física.",
    author: "Ricardo Mendes",
    pet: "Proprietário de Equinos"
  },
  {
    text: "A consultoria online de comportamento nos ajudou a criar um ambiente muito mais saudável para nossos gatos.",
    author: "Carla Ferreira",
    pet: "Tutora de Gatos"
  }
]

const scrollContainer = ref(null)
const activeDot = ref(0)

const onScroll = () => {
  if (!scrollContainer.value) return
  const el = scrollContainer.value
  const card = el.querySelector('.testimonial-card')
  if (!card) return
  const cardWidth = card.offsetWidth + 16
  const index = Math.round(el.scrollLeft / cardWidth)
  activeDot.value = Math.max(0, Math.min(testimonials.length - 1, index))
}

const scrollToIndex = (index) => {
  if (!scrollContainer.value) return
  const el = scrollContainer.value
  const cards = el.querySelectorAll('.testimonial-card')
  if (cards[index]) {
    cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    activeDot.value = index
  }
}
</script>

<style scoped>
.testimonials-section {
  background-color: var(--color-white);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 5rem;
}

.testimonial-card {
  display: flex;
  flex-direction: column;
}

.quote-icon {
  font-size: 2.5rem;
  color: var(--color-accent-light);
  margin-bottom: 1rem;
}

.quote-text {
  font-style: italic;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.author-info strong {
  display: block;
  color: var(--color-primary);
  font-size: 1.125rem;
}

.author-info span {
  font-size: 0.875rem;
  color: var(--color-text-light);
}

.success-case {
  background: var(--color-bg-warm);
  border: 1px solid var(--color-border);
  border-radius: 30px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

.case-content {
  padding: 4rem;
}

.case-badge {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: var(--color-accent);
  color: var(--color-white);
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.case-content h3 {
  margin-bottom: 1.5rem;
}

.case-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 400px;
}

.carousel-dots {
  display: none;
}

@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  .success-case {
    grid-template-columns: 1fr;
  }
  .case-image {
    order: -1;
  }
  .case-content {
    padding: 2.5rem;
  }
}

@media (max-width: 768px) {
  .testimonials-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding: 0.5rem 1.5rem 1rem;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    scrollbar-width: none;
  }

  .testimonials-grid::-webkit-scrollbar {
    display: none;
  }

  .testimonial-card {
    flex: 0 0 85%;
    max-width: 85%;
    scroll-snap-align: center;
    padding: 1.75rem 1.5rem;
  }

  .quote-icon {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }

  .quote-text {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }

  .carousel-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 3rem;
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

  .case-content {
    padding: 2rem 1.5rem;
  }
}
</style>
