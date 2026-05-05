<template>
  <section class="hero-section">
    <div class="container hero-container">
      <div class="hero-content reveal">
        <span class="badge">Medicina Veterinária Integrativa</span>
        
        <div class="text-slider-wrapper">
          <Transition name="text-slide" mode="out-in">
            <div :key="currentSlide" class="text-slide-item">
              <h1 v-html="slides[currentSlide].title"></h1>
              <p>{{ slides[currentSlide].description }}</p>
            </div>
          </Transition>
        </div>

        <div class="hero-actions">
          <AppButton to="/contato" variant="primary" size="lg">Agendar Consulta</AppButton>
          <AppButton to="/servicos" variant="outline" size="lg">Ver Serviços</AppButton>
        </div>
      </div>
      
      <div class="hero-image-slider reveal">
        <div class="slider-wrapper">
          <TransitionGroup name="slide-blur">
            <div 
              v-for="(slide, index) in slides" 
              :key="slide.id" 
              v-show="currentSlide === index"
              class="slide-item"
            >
              <img :src="slide.image" :alt="slide.alt" />
            </div>
          </TransitionGroup>
          
          <div class="experience-badge">
            <span class="number">CRMV</span>
            <span class="text">Ativo & Dedicado</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const currentSlide = ref(0)
const slides = [
  {
    id: 1,
    title: 'Cuidado Integral para <span>Corpo e Mente</span> do seu Animal',
    description: 'Abordagem ética e individualizada que une comportamento e saúde física para promover longevidade aos seus melhores amigos.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop',
    alt: 'Cuidado Veterinário Integrativo'
  },
  {
    id: 2,
    title: 'Performance e Bem-estar para <span>Equinos Atletas</span>',
    description: 'Medicina integrativa aplicada ao esporte e reprodução, focando em reabilitação de lesões e otimização do rendimento físico.',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1000&auto=format&fit=crop',
    alt: 'Acupuntura e Reabilitação Equina'
  }
]

let timer = null

onMounted(() => {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 6000) // 6 segundos para dar tempo de ler o texto
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.hero-section {
  padding: 10rem 0 5rem;
  background: linear-gradient(135deg, #fdfbf7 0%, #f5f1e8 100%);
  overflow: hidden;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 4rem;
}

.badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: rgba(114, 30, 18, 0.1);
  color: var(--color-primary);
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* Text Slider Styles */
.text-slider-wrapper {
  min-height: 200px; /* Evita que o layout pule na troca de texto */
  display: flex;
  align-items: center;
}

h1 {
  margin-bottom: 1.5rem;
}

:deep(h1 span) {
  color: var(--color-accent);
}

p {
  font-size: 1.125rem;
  max-width: 550px;
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
}

/* Slider Logic */
.hero-image-slider {
  position: relative;
  width: 100%;
}

.slider-wrapper {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  aspect-ratio: 4/5;
  background-color: var(--color-border);
}

.slide-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slide-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.experience-badge {
  position: absolute;
  bottom: 2rem;
  right: -1rem;
  background: var(--color-white);
  padding: 1rem 1.5rem;
  border-radius: 20px;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 10;
}

.experience-badge .number {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-primary);
}

.experience-badge .text {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-text-light);
  text-transform: uppercase;
}

/* Transição das Imagens (Blur & Slide) */
.slide-blur-enter-active,
.slide-blur-leave-active {
  transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-blur-enter-from {
  opacity: 0;
  transform: translateX(40px);
  filter: blur(15px);
}

.slide-blur-leave-to {
  opacity: 0;
  transform: translateX(-40px);
  filter: blur(15px);
}

/* Transição dos Textos */
.text-slide-enter-active,
.text-slide-leave-active {
  transition: all 0.8s ease;
}

.text-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.text-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .text-slider-wrapper {
    justify-content: center;
    min-height: 160px;
  }
  
  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .slider-wrapper {
    max-width: 450px;
    margin: 0 auto;
  }
  
  .experience-badge {
    right: 1rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 8rem 0 4rem;
  }
  
  .text-slider-wrapper {
    min-height: 180px;
  }
  
  .hero-actions {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }
}
</style>
