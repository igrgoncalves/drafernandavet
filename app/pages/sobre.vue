<script setup>
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Sobre Mim | Dra. Fernanda Moreno - Medicina Veterinária Integrativa',
  description: 'Conheça a trajetória, os fundamentos científicos e a filosofia de cuidado integral da Dra. Fernanda Moreno.'
})

const academicBackground = [
  { 
    title: 'Medicina Veterinária', 
    institution: 'Universidade São Judas Tadeu (USJT)',
    desc: 'Base clínica e cirúrgica sólida para pequenos animais e equinos.',
    icon: 'ph:graduation-cap-fill' 
  },
  { 
    title: 'Fisiatria Veterinária', 
    institution: 'Fisio Care Pet Academy',
    desc: 'Especialização em reabilitação física, controle de dor e fisioterapia avançada.',
    icon: 'ph:activity-fill' 
  },
  { 
    title: 'Acupuntura Veterinária', 
    institution: 'Pós-graduação',
    desc: 'Visão integrativa e energética para reequilíbrio do organismo.',
    icon: 'ph:needle-fill' 
  },
  { 
    title: 'Comportamento Animal', 
    institution: 'Tudo de Cão',
    desc: 'Especialização em análise comportamental e adestramento positivo.',
    icon: 'ph:dog-fill' 
  },
  { 
    title: 'Psicofarmacologia', 
    institution: 'INSPA Animal',
    desc: 'Estudo aprofundado das interações químicas no sistema nervoso e comportamento.',
    icon: 'ph:pill-fill' 
  },
  { 
    title: 'Aromaterapia Animal', 
    institution: 'Certificação ABRATH',
    desc: 'Uso terapêutico de óleos essenciais para suporte físico e emocional.',
    icon: 'ph:leaf-fill' 
  }
]

const pillars = [
  {
    title: 'Individualidade',
    desc: 'Nenhum protocolo é repetido. Cada animal tem sua história, rotina e necessidades únicas.',
    icon: 'ph:fingerprint-simple-fill'
  },
  {
    title: 'Ciência & Empatia',
    desc: 'Unimos o rigor científico das melhores instituições com o acolhimento que o tutor precisa.',
    icon: 'ph:microscope-fill'
  },
  {
    title: 'Equilíbrio',
    desc: 'O objetivo final é sempre a homeostase: o equilíbrio perfeito entre o físico e o mental.',
    icon: 'ph:scales-fill'
  }
]

const journeySteps = [
  {
    title: 'Primeiro Contato',
    desc: 'Uma triagem inicial para entendermos as queixas principais e alinhar as expectativas do tutor.'
  },
  {
    title: 'Avaliação Sistêmica',
    desc: 'Um olhar 360º: avaliação ortopédica, neurológica, análise de marcha e histórico comportamental.'
  },
  {
    title: 'Desenho do Plano',
    desc: 'Criação de um protocolo que integra as terapias necessárias para o caso específico.'
  },
  {
    title: 'Evolução Contínua',
    desc: 'Acompanhamento próximo com ajustes constantes para garantir a melhor qualidade de vida.'
  }
]
</script>

<template>
  <main class="sobre-page">
    <!-- Header de Autoridade -->
    <section class="sobre-header section">
      <div class="container">
        <div class="header-grid">
          <div class="header-text reveal">
            <span class="badge">Nossa Essência</span>
            <h1>Cuidado que entende a <span>conexão</span> entre corpo e mente.</h1>
            <p class="lead">
              A trajetória da Dra. Fernanda Moreno é guiada por um propósito claro: não tratar apenas a doença, mas sim o indivíduo em sua totalidade.
            </p>
          </div>
          <div class="header-visual reveal">
            <div class="profile-frame">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop" alt="Dra. Fernanda Moreno" />
              <div class="floating-badge">
                <Icon name="ph:seal-check-fill" />
                <span>CRMV Ativo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Manifesto / Filosofia Profunda -->
    <section class="manifesto-section section">
      <div class="container">
        <div class="manifesto-card reveal">
          <div class="manifesto-content">
            <h2 class="section-title">Por que a <span>Medicina Integrativa?</span></h2>
            <div class="text-columns">
              <p>
                Muitas vezes, uma agressividade repentina em um cão é, na verdade, uma resposta à dor crônica. Um gato apático pode estar sofrendo de um desequilíbrio ambiental que afeta sua imunidade. Na medicina convencional, esses pontos nem sempre se cruzam.
              </p>
              <p>
                A <strong>Medicina Integrativa</strong> é o elo perdido. Ela nos permite investigar as causas profundas através de exames físicos minuciosos (ortopédicos e neurológicos) aliados à análise comportamental. Meu papel é ser a tradutora das necessidades do seu animal.
              </p>
            </div>
            
            <div class="pillars-grid">
              <div v-for="pillar in pillars" :key="pillar.title" class="pillar-item">
                <Icon :name="pillar.icon" />
                <h4>{{ pillar.title }}</h4>
                <p>{{ pillar.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bagagem Acadêmica (A alma científica) -->
    <section class="academic-path section">
      <AmbientPawsTrail species="dog" variant="diagonal-down" :opacity="0.05" />
      <div class="container">
        <div class="section-header text-center reveal">
          <h2 class="section-title">Fundamento <span>Acadêmico</span></h2>
          <p class="section-desc">Excelência técnica construída nas melhores instituições de ensino veterinário.</p>
        </div>

        <div class="academic-modern-grid">
          <div v-for="study in academicBackground" :key="study.title" class="academic-card reveal">
            <div class="card-icon">
              <Icon :name="study.icon" />
            </div>
            <div class="card-info">
              <span class="institution">{{ study.institution }}</span>
              <h4>{{ study.title }}</h4>
              <p>{{ study.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- A Jornada do Paciente (Timeline Visual) -->
    <section class="journey-timeline section">
      <div class="container">
        <div class="section-header text-center reveal">
          <h2 class="section-title">A Jornada do <span>Seu Melhor Amigo</span></h2>
          <p class="section-desc">Entenda como transformamos o diagnóstico em bem-estar passo a passo.</p>
        </div>

        <div class="timeline-container">
          <div v-for="(step, index) in journeySteps" :key="index" class="timeline-step reveal">
            <div class="step-marker">{{ index + 1 }}</div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Clínica Parceira: Fisio Care Pet -->
    <section class="parceira-section section">
      <div class="container">
        <div class="parceira-card reveal">
          <div class="parceira-badge">
            <Icon name="ph:map-pin-fill" />
            <span>Atendimento Presencial</span>
          </div>
          <div class="parceira-grid">
            <div class="parceira-info">
              <h2 class="section-title">Onde me <span>encontrar</span></h2>
              <p class="parceira-desc">
                Para consultas e sessões presenciais, atendo na <strong>Fisio Care Pet</strong> — referência em reabilitação e fisioterapia veterinária na Zona Leste de São Paulo.
              </p>
              <ul class="parceira-details">
                <li>
                  <Icon name="ph:buildings-fill" />
                  <span><strong>Fisio Care Pet</strong> — Zona Leste</span>
                </li>
                <li>
                  <Icon name="ph:map-pin-fill" />
                  <span>Rua Alonso Calhamares, 363 (Pet Shop Bicho Solto) — Penha, SP</span>
                </li>
                <li>
                  <Icon name="ph:phone-fill" />
                  <span>(11) 99591-1206 / (11) 95303-1449</span>
                </li>
                <li>
                  <Icon name="ph:globe-fill" />
                  <a href="https://fisiocarepet.com.br" target="_blank" rel="noopener">fisiocarepet.com.br</a>
                </li>
              </ul>
              <AppButton to="/contato" variant="primary" size="md">Agendar na Clínica</AppButton>
            </div>
            <div class="parceira-logo-wrap">
              <div class="logo-frame">
                <Icon name="ph:first-aid-kit-fill" class="clinic-icon" />
                <div class="clinic-name">
                  <span class="clinic-main">Fisio Care</span>
                  <span class="clinic-sub">Pet Academy</span>
                </div>
                <p class="clinic-region">Zona Leste · São Paulo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final Inspirador -->
    <section class="final-cta section reveal">
      <div class="container">
        <div class="cta-banner">
          <div class="cta-text">
            <h2>Vamos elevar a qualidade de vida do seu animal?</h2>
            <p>Seja para reabilitação, esporte ou comportamento, a solução começa com um olhar integrado.</p>
            <AppButton to="/contato" variant="primary" size="lg">Agendar Avaliação Integrativa</AppButton>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.sobre-page {
  background-color: var(--color-bg);
}

/* Header */
.sobre-header {
  padding-top: 9rem;
  padding-bottom: 4rem;
}

.header-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.header-text .badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: rgba(194, 142, 108, 0.1);
  color: var(--color-accent);
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

.lead {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--color-primary);
  font-weight: 500;
  margin-top: 1.5rem;
}

.profile-frame {
  position: relative;
  max-width: 420px;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

.profile-frame img {
  width: 100%;
  border-radius: 30px;
  box-shadow: var(--shadow-md);
  border: 8px solid var(--color-white);
  transition: var(--transition-smooth);
}

.profile-frame:hover img {
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.floating-badge {
  position: absolute;
  bottom: 1.5rem;
  right: -1.5rem;
  background: var(--color-primary);
  color: var(--color-white);
  padding: 1rem 1.5rem;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: var(--shadow-lg);
  font-size: 0.875rem;
  z-index: 2;
  transition: all 0.3s ease;
}

.floating-badge:hover {
  background: var(--color-accent);
  transform: scale(1.05);
}

.floating-badge .iconify { font-size: 1.5rem; }

/* Manifesto */
.manifesto-section {
  background: var(--color-white);
}

.manifesto-card {
  background: var(--color-bg-warm);
  border: 1px solid var(--color-border);
  border-radius: 30px;
  padding: 2.5rem 3rem;
  transition: var(--transition-smooth);
}

.manifesto-card:hover {
  background: #f5e8e3;
}

.text-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.text-columns p {
  font-size: 1rem;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  border-top: 1px solid var(--color-border);
  padding-top: 2rem;
}

.pillar-item {
  transition: var(--transition-smooth);
}

.pillar-item:hover {
  transform: translateY(-5px);
}

.pillar-item .iconify {
  font-size: 2.5rem;
  color: var(--color-accent);
  margin-bottom: 1rem;
  transition: 0.5s ease;
}

.pillar-item:hover .iconify {
  transform: rotate(360deg);
}

.pillar-item h4 {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.pillar-item p {
  font-size: 0.875rem;
}

/* Academic Modern Grid */
.academic-path {
  position: relative;
  background-color: var(--color-bg-warm);
  overflow: hidden;
}

.academic-path .container {
  position: relative;
  z-index: 2;
}

.academic-modern-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.academic-card {
  background: var(--color-white);
  padding: 1.75rem;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  display: flex;
  gap: 1.25rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.academic-card:hover {
  border-color: var(--color-accent-light);
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(114, 30, 18, 0.1);
}

.card-icon {
  width: 42px;
  height: 42px;
  background: var(--color-bg);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 1.25rem;
  flex-shrink: 0;
  transition: 0.3s ease;
}

.academic-card:hover .card-icon {
  background: var(--color-primary);
  color: var(--color-white);
}

/* Timeline */
.timeline-container {
  max-width: 800px;
  margin: 2rem auto 0;
  position: relative;
}

.timeline-container::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  width: 2px;
  height: 100%;
  background: var(--color-border);
}

.timeline-step {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  position: relative;
}

.step-marker {
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  z-index: 2;
  flex-shrink: 0;
  font-size: 0.875rem;
  transition: 0.3s ease;
}

.timeline-step:hover .step-marker {
  background: var(--color-accent);
  transform: scale(1.2);
}

.step-content h3 { 
  font-size: 1.25rem;
  margin-bottom: 0.25rem; 
}

.step-content p {
  font-size: 0.9375rem;
}

/* Parceira */
.parceira-section {
  background: var(--color-bg-warm);
}

.parceira-card {
  background: var(--color-white);
  border-radius: 30px;
  border: 1px solid var(--color-border);
  padding: 2.5rem 3rem;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.4s ease;
}

.parceira-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, var(--color-primary), var(--color-accent));
  border-radius: 4px 0 0 4px;
}

.parceira-card:hover {
  box-shadow: 0 16px 40px rgba(114, 30, 18, 0.1);
}

.parceira-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  background: rgba(114, 30, 18, 0.08);
  color: var(--color-primary);
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
}

.parceira-badge .iconify {
  font-size: 0.9rem;
}

.parceira-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: center;
}

.parceira-desc {
  font-size: 1rem;
  line-height: 1.7;
  margin: 1rem 0 2rem;
  color: var(--color-text-light);
}

.parceira-details {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.parceira-details li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9375rem;
  color: var(--color-text);
}

.parceira-details .iconify {
  color: var(--color-accent);
  font-size: 1.1rem;
  flex-shrink: 0;
}

.parceira-details a {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s;
}

.parceira-details a:hover {
  color: var(--color-accent);
}

.logo-frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 2.5rem 3rem;
  background: var(--color-bg);
  border-radius: 24px;
  border: 2px dashed var(--color-border);
  min-width: 200px;
  transition: 0.4s ease;
}

.logo-frame:hover {
  border-color: var(--color-accent);
  background: rgba(185, 116, 98, 0.05);
}

.clinic-icon {
  font-size: 3.5rem;
  color: var(--color-primary);
}

.clinic-name {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.1;
}

.clinic-main {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-primary);
  letter-spacing: -0.02em;
}

.clinic-sub {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.clinic-region {
  font-size: 0.75rem;
  color: var(--color-text-light);
  margin: 0;
}

/* Final CTA */
.cta-banner {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  border-radius: 30px;
  padding: 3rem;
  text-align: center;
  color: var(--color-white);
  transition: transform 0.4s ease;
}

.cta-banner:hover {
  transform: scale(1.02);
}

.cta-banner h2 { font-size: 1.75rem; color: var(--color-white); }
.cta-banner p { margin-bottom: 2rem; font-size: 1.125rem; color: rgba(255,255,255,0.9); }

@media (max-width: 1024px) {
  .header-grid, .text-columns, .pillars-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .manifesto-card, .cta-banner {
    padding: 2rem 1.5rem;
  }
  
  .sobre-header {
    padding-top: 7rem;
    padding-bottom: 3rem;
  }

  .header-visual { order: -1; margin: 0 auto; }

  .parceira-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .parceira-card {
    padding: 2rem 1.5rem;
  }

  .logo-frame {
    margin: 0 auto;
  }
}
</style>
