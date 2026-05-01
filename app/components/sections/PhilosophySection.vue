<template>
  <section class="philosophy-section section">
    <div class="container philosophy-grid">
      <div class="philosophy-image reveal">
        <div class="image-stack">
          <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000&auto=format&fit=crop" alt="Bem-estar Animal" class="img-main" />
          <div class="accent-box"></div>
        </div>
      </div>
      
      <div class="philosophy-content reveal">
        <h2 class="section-title">A Filosofia do <span>Cuidado Integrado</span></h2>
        <p class="highlight">
          Corpo e mente não funcionam de forma isolada. Unimos comportamento, saúde física e bem-estar em uma abordagem verdadeiramente integrada.
        </p>
        <p>
          Muitas vezes, alterações comportamentais mascaram dores, desconfortos ou limitações físicas. Da mesma forma, o estado emocional e o ambiente podem agravar condições clínicas.
        </p>
        <p>
          Nosso propósito vai além de tratar sintomas: focamos na investigação profunda das causas para promover funcionalidade, equilíbrio e relações mais saudáveis entre animais e tutores.
        </p>
        
        <div class="philosophy-features">
          <div class="feature-item">
            <Icon name="ph:heart-beat-fill" class="feature-icon" />
            <div>
              <h4>Saúde Física</h4>
              <p>Reabilitação, controle de dor e fortalecimento muscular.</p>
            </div>
          </div>
          <div class="feature-item">
            <Icon name="ph:brain-fill" class="feature-icon" />
            <div>
              <h4>Equilíbrio Emocional</h4>
              <p>Análise comportamental baseada em métodos éticos e positivos.</p>
            </div>
          </div>
        </div>

        <AppButton to="/sobre" variant="ghost">Conheça nossa Metodologia &rarr;</AppButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.philosophy-section {
  background-color: var(--color-white);
}

.philosophy-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: center;
  gap: 6rem;
}

.image-stack {
  position: relative;
  padding: 2rem;
}

.img-main {
  width: 100%;
  border-radius: 30px;
  box-shadow: var(--shadow-md);
  position: relative;
  z-index: 2;
}

.accent-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 70%;
  background-color: var(--color-accent-light);
  border-radius: 30px;
  z-index: 1;
  opacity: 0.3;
}

.highlight {
  font-size: 1.5rem;
  color: var(--color-primary);
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 2rem;
}

.philosophy-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 3rem 0;
}

.feature-item {
  display: flex;
  gap: 1rem;
}

.feature-icon {
  font-size: 2rem;
  color: var(--color-accent);
  flex-shrink: 0;
}

.feature-item h4 {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}

.feature-item p {
  font-size: 0.875rem;
  margin-bottom: 0;
}

@media (max-width: 1024px) {
  .philosophy-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  
  .philosophy-image {
    order: 2;
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .philosophy-features {
    grid-template-columns: 1fr;
  }
}
</style>
