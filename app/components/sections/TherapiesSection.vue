<template>
  <section class="arsenal-section section" id="arsenal">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">Nosso <span>Arsenal Terapêutico</span></h2>
        <p class="section-desc">Protocolos individualizados utilizando o que há de mais moderno na medicina integrativa para controle de dor e reabilitação.</p>
      </div>

      <div class="therapies-grid">
        <AppCard v-for="t in therapies" :key="t.name" hover class="therapy-modern-card">
          <div class="therapy-header">
            <div class="therapy-icon-box">
              <Icon :name="t.icon" />
            </div>
            <h4>{{ t.name }}</h4>
          </div>
          <div class="therapy-body">
            <p class="therapy-desc">{{ t.description }}</p>
            <div class="therapy-function">
              <span class="label">Função:</span>
              <span class="value">{{ t.function }}</span>
            </div>
          </div>
        </AppCard>
      </div>
    </div>
  </section>
</template>

<script setup>
const therapies = [
  { 
    name: 'Acupuntura', 
    icon: 'ph:needle-fill',
    description: 'Aplicação de agulhas em pontos específicos para restaurar o equilíbrio energético e físico.',
    function: 'Alívio de dor crônica e modulação do sistema nervoso.'
  },
  { 
    name: 'Laserterapia', 
    icon: 'ph:flashlight-fill',
    description: 'Uso de luz infravermelha para bioestimulação celular e reparação de tecidos.',
    function: 'Aceleração de cicatrização e redução de processos inflamatórios.'
  },
  { 
    name: 'Eletroterapia', 
    icon: 'ph:wave-sine-fill',
    description: 'Estímulos elétricos controlados para promover analgesia ou contração muscular.',
    function: 'Controle de dor aguda e fortalecimento em casos de atrofia.'
  },
  { 
    name: 'Moxabustão', 
    icon: 'ph:fire-fill',
    description: 'Aquecimento de pontos de acupuntura através da queima da erva artemísia.',
    function: 'Tratamento de doenças crônicas e expulsão de "frio" e umidade.'
  },
  { 
    name: 'Cinesioterapia', 
    icon: 'ph:activity-fill',
    description: 'Terapia baseada em movimentos e exercícios terapêuticos assistidos.',
    function: 'Melhora de amplitude de movimento, equilíbrio e propriocepção.'
  },
  { 
    name: 'Aromaterapia', 
    icon: 'ph:leaf-fill',
    description: 'Uso de óleos essenciais puros para promover bem-estar emocional e físico.',
    function: 'Redução de estresse, ansiedade e suporte em tratamentos clínicos.'
  },
  { 
    name: 'Eletroacupuntura', 
    icon: 'ph:lightning-fill',
    description: 'Associação de estímulos elétricos às agulhas de acupuntura para potencializar o efeito.',
    function: 'Analgesia profunda e estímulo de nervos periféricos.'
  }
]
</script>

<style scoped>
.arsenal-section {
  background-color: var(--color-white);
}

.therapies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.therapy-modern-card {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 100%;
}

.therapy-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.therapy-icon-box {
  width: 48px;
  height: 48px;
  background: var(--color-bg);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 1.5rem;
  transition: var(--transition-smooth);
}

.therapy-modern-card:hover .therapy-icon-box {
  background: var(--color-primary);
  color: var(--color-white);
  transform: scale(1.1) rotate(5deg);
}

.therapy-header h4 {
  margin-bottom: 0;
  font-size: 1.25rem;
}

.therapy-desc {
  font-size: 0.9375rem;
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.therapy-function {
  margin-top: auto;
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-border);
}

.therapy-function .label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 0.25rem;
  letter-spacing: 0.5px;
}

.therapy-function .value {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-primary);
}
</style>
