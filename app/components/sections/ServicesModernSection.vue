<template>
  <section class="services-section section">
    <div class="container">
      <div class="section-header text-center reveal">
        <h2 class="section-title">Nossos <span>Serviços</span></h2>
        <p class="section-desc">
          Abordagem especializada para diferentes perfis de pacientes, garantindo cuidado específico e resultados profundos.
        </p>
      </div>

      <div class="services-vertical-grid">
        <div 
          v-for="service in services" 
          :key="service.title" 
          class="service-vertical-card reveal"
          :style="{ backgroundImage: `url(${service.image})` }"
        >
          <div class="card-overlay"></div>
          <div class="card-content">
            <div class="card-text">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
            <AppButton :to="service.link" variant="outline" size="sm" class="btn-white">
              Ver Detalhes
            </AppButton>
          </div>
        </div>
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

/* Estilização do botão para contraste no fundo escuro */
.btn-white {
  border-color: rgba(255, 255, 255, 0.5) !important;
  color: var(--color-white) !important;
  align-self: flex-start;
}

.btn-white:hover {
  background-color: var(--color-white) !important;
  color: var(--color-primary) !important;
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
  .service-vertical-card {
    height: 400px;
  }
  
  .card-content {
    padding: 2rem 1.5rem;
  }
  
  .card-text h3 {
    font-size: 1.5rem;
  }
}
</style>
