<script setup>
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Serviços | Dra. Fernanda Moreno - Medicina Veterinária Integrativa',
  description: 'Conheça nossos serviços de Reabilitação, Acupuntura, Fisiatria e Comportamento para Cães, Gatos e Cavalos.'
})

const services = [
  {
    title: 'Pequenos Animais',
    slug: 'pequenos-animais',
    icon: 'ph:dog-fill',
    desc: 'Atendimento focado em reabilitação física (pós-operatório, alterações de marcha, dor) e resolução de demandas comportamentais para cães e gatos.'
  },
  {
    title: 'Cães Atletas',
    slug: 'caes-atletas',
    icon: 'ph:lightning-fill',
    desc: 'Prevenção de lesões, melhora da estrutura física, fortalecimento muscular e desenvolvimento da propriocepção para cães de esporte e trabalho.'
  },
  {
    title: 'Equinos',
    slug: 'equinos',
    icon: 'ph:horse-fill',
    desc: 'Reabilitação de lesões, preparo físico e otimização do rendimento reprodutivo em cavalos de esporte, trabalho e criação.'
  }
]

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

<template>
  <main class="servicos-page">
    <PageHeader 
      title="Nossos <span>Serviços</span>"
      subtitle="Uma abordagem integrativa que une medicina convencional e terapias complementares para o bem-estar pleno do seu animal."
      badge="Especialidades"
      imageSrc="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=1000&auto=format&fit=crop"
    />

    <!-- Áreas de Atuação -->
    <ServicesModernSection />

    <TherapiesSection />

    <!-- Consulta Inicial -->
    <section class="consult-section section">
      <div class="container">
        <div class="consult-box reveal">
          <div class="consult-content">
            <h3>Tudo começa com uma Avaliação Aprofundada</h3>
            <p>
              Antes de qualquer tratamento, realizamos um exame físico minucioso (palpação, ortopédico, neurológico, marcha e postura) para entender a causa real do problema.
            </p>
            <AppButton to="/contato" variant="primary">Agendar Avaliação</AppButton>
          </div>
          <div class="consult-image">
            <img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1000&auto=format&fit=crop" alt="Avaliação Veterinária" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.services-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.service-item {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 3rem;
  align-items: center;
}

.service-icon {
  font-size: 4rem;
  color: var(--color-accent);
}

.service-info h3 {
  margin-bottom: 1rem;
}

.service-info p {
  margin-bottom: 2rem;
  max-width: 800px;
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

.consult-box {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  background: var(--color-primary);
  color: var(--color-white);
  border-radius: 30px;
  overflow: hidden;
  align-items: center;
}

.consult-content {
  padding: 5rem;
}

.consult-content h3 {
  color: var(--color-white);
  margin-bottom: 2rem;
}

.consult-content p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
}

.consult-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 400px;
}

@media (max-width: 1024px) {
  .consult-box {
    grid-template-columns: 1fr;
  }
  .consult-image {
    order: -1;
  }
  .consult-content {
    padding: 3rem 2rem;
  }
}

@media (max-width: 768px) {
  .service-item {
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;
    gap: 1rem;
  }
}
</style>
