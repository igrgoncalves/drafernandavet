<script setup>
const route = useRoute()
const slug = computed(() => route.params.slug)

definePageMeta({
  layout: 'default'
})

const servicesData = {
  'pequenos-animais': {
    title: 'Pequenos <span>Animais</span>',
    rawTitle: 'Pequenos Animais',
    badge: 'Cães e Gatos',
    desc: 'Cuidado integrado, alívio da dor silenciosa e reabilitação física para cães e gatos viverem com liberdade e alegria.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200&auto=format&fit=crop',
    
    // 1. Dor Silenciosa
    silentPain: {
      tag: 'Atenção aos Sinais',
      title: 'Eles sentem dor, mas nem sempre choram',
      intro: 'Por instinto primitivo de sobrevivência herdado de seus ancestrais, cães e gatos mascaram a dor para não demonstrar fraqueza. Raramente eles ganem ou uivam; em vez disso, adaptam a rotina e sofrem em silêncio.',
      signs: [
        {
          icon: 'ph:stairs-fill',
          title: 'Hesitação ao Pular',
          desc: 'Evita subir no sofá, cama ou carro, ou hesita antes de subir escadas.'
        },
        {
          icon: 'ph:paw-print-fill',
          title: 'Lambedura Excessiva',
          desc: 'Lambe ou morde compulsivamente uma pata, carpo ou articulação dolorida.'
        },
        {
          icon: 'ph:clock-countdown-fill',
          title: 'Rigidez ao Levantar',
          desc: 'Dificuldade ou lentidão nos primeiros passos logo após acordar ou repousar.'
        },
        {
          icon: 'ph:heart-break-fill',
          title: 'Mudança de Humor',
          desc: 'Apatia, isolamento, perda do apetite ou irritabilidade repentina ao toque.'
        }
      ]
    },

    // 2. Alerta: Remédio Apenas Mascara
    maskingAlert: {
      title: 'Por que apenas dar remédio NÃO resolve?',
      highlight: 'O medicamento analgésico desliga o alarme de incêndio, mas não apaga o fogo.',
      explanation: 'Quando o pet toma apenas anti-inflamatórios ou analgésicos sem reabilitação física, ele tem uma falsa sensação de cura. Sem sentir a dor pontual, ele volta a sobrecarregar a articulação ou coluna desgastada, agravando a lesão. Além disso, o uso contínuo desses fármacos sobrecarrega órgãos vitais como rins, fígado e estômago.'
    },

    // 3. Método Integrativo
    methodology: {
      title: 'Como Funciona Nosso Atendimento',
      subtitle: 'Uma abordagem integral em três etapas para identificar e tratar a verdadeira origem do incômodo.',
      steps: [
        {
          number: '01',
          title: 'Diagnóstico Minucioso',
          desc: 'Exame físico aprofundado com palpação anatômica, avaliação postural, análise da marcha e testes ortopédicos e neurológicos.'
        },
        {
          number: '02',
          title: 'Reabilitação Ativa & Equilíbrio',
          desc: 'Associação de Fisioterapia e Acupuntura para restaurar a mobilidade muscular e induzir analgesia profunda e biológica.'
        },
        {
          number: '03',
          title: 'Remédios como Apoio Pontual',
          desc: 'A medicação entra apenas como suporte controlado na crise aguda, sendo desmamada assim que as terapias integrativas assumem o controle da dor.'
        }
      ]
    },

    // 4. Tratamento Específico
    specificTreatments: {
      title: 'Tratamentos Específicos para Pets',
      subtitle: 'Protocolos personalizados, confortáveis e respeitosos para restaurar o movimento do seu cão ou gato:',
      items: [
        {
          icon: 'ph:flashlight-fill',
          title: 'Laserterapia de Alta Precisão',
          desc: 'Aplicação indolor de luz terapêutica para acelerar a regeneração celular, desinflamar nervos e aliviar dores articulares (como artroses e displasias).'
        },
        {
          icon: 'ph:needle-fill',
          title: 'Acupuntura Veterinária',
          desc: 'Estímulo de pontos biológicos que modulam o sistema nervoso, liberando endorfinas e promovendo analgesia sem toxicidade renal.'
        },
        {
          icon: 'ph:activity-fill',
          title: 'Cinesioterapia & Fortalecimento',
          desc: 'Exercícios terapêuticos assistidos com pistas proprioceptivas e pranchas de equilíbrio para devolver força às patinhas sem impacto.'
        },
        {
          icon: 'ph:house-line-fill',
          title: 'Manejo Ambiental & Comportamental',
          desc: 'Orientações sob medida para adaptar a casa (rampas, pisos antiderrapantes) e suporte comportamental integrativo com adestramento positivo.'
        }
      ]
    },

    // 5. CTA
    cta: {
      title: 'Seu pet merece viver livre de dores',
      desc: 'Atendimento humanizado em clínicas parceiras ou no conforto do seu lar (São Paulo e Vale do Paraíba). Agende uma avaliação detalhada.',
      btnText: 'Agendar Avaliação para Pequenos Animais'
    }
  },

  'caes-atletas': {
    title: 'Cães <span>Atletas</span>',
    rawTitle: 'Cães Atletas',
    badge: 'Performance & Longevidade',
    desc: 'Prevenção de lesões, ganho proprioceptivo e reabilitação de alta performance para cães de esporte, trabalho e pastoreio.',
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200&auto=format&fit=crop',

    // 1. Dor Silenciosa
    silentPain: {
      tag: 'O Instinto do Atleta',
      title: 'O cão atleta esconde a dor pelo desejo de competir',
      intro: 'Cães que praticam esportes (Agility, Mondioring, Canicross, Pastoreio) possuem altíssimo nível de adrenalina e instinto de trabalho (*drive*). Eles continuam correndo e saltando com entusiasmo, mesmo com microfissuras e contraturas severas.',
      signs: [
        {
          icon: 'ph:lightning-fill',
          title: 'Queda de Fração de Tempo',
          desc: 'Pequena perda de velocidade em pistas ou hesitação sutil em obstáculos de impulsão.'
        },
        {
          icon: 'ph:arrows-horizontal-fill',
          title: 'Assimetria nas Curvas',
          desc: 'Dificuldade para fechar curvas em uma direção específica ou mudança no padrão da passada.'
        },
        {
          icon: 'ph:target-fill',
          title: 'Disfarce pelo "Drive"',
          desc: 'O cão não se queixa durante o treino, mas apresenta rigidez incomum após o esfriamento muscular.'
        },
        {
          icon: 'ph:bed-fill',
          title: 'Recuperação Prolongada',
          desc: 'Necessidade de mais dias de descanso para voltar ao entusiasmo e agilidade habitual.'
        }
      ]
    },

    // 2. Alerta: Remédio Apenas Mascara
    maskingAlert: {
      title: 'O perigo crítico de medicar um atleta sem reabilitar',
      highlight: 'Anestesiar a dor de um atleta é a receita para o fim precoce da carreira esportiva.',
      explanation: 'Se você apenas administra analgésicos antes ou depois dos treinos, o cão perde o biofeedback natural de autoproteção. Ele saltará na potência máxima sobre uma fibra muscular ou articulação lesionada, transformando uma sobrecarga tratável em uma ruptura ligamentar grave irreversível.'
    },

    // 3. Método Integrativo
    methodology: {
      title: 'O Método de Performance Integrativa',
      subtitle: 'Ciência biomecânica e medicina preventiva para manter seu cão no topo do pódio com saúde intacta.',
      steps: [
        {
          number: '01',
          title: 'Avaliação Biomecânica Dinâmica',
          desc: 'Análise detalhada de amplitude de movimento, palpação profunda de fáscia e grupos musculares de propulsão.'
        },
        {
          number: '02',
          title: 'Fortalecimento & Fisiatria Preventiva',
          desc: 'Exercícios específicos para blindar o *core*, estabilizar ligamentos e eliminar desequilíbrios musculares entre membros.'
        },
        {
          number: '03',
          title: 'Acupuntura & Terapias de Recuperação',
          desc: 'Desbloqueio de pontos de tensão e regeneração bioenergética sem substâncias proibidas em controles de dopagem.'
        }
      ]
    },

    // 4. Tratamento Específico
    specificTreatments: {
      title: 'Tratamentos Específicos para Cães Atletas',
      subtitle: 'Técnicas modernas focadas em estabilidade, explosão física e velocidade de recuperação (*recovery*):',
      items: [
        {
          icon: 'ph:barbell-fill',
          title: 'Fortalecimento de Core & Propriocepção',
          desc: 'Treinos funcionais com obstáculos instáveis para aprimorar a consciência corporal e prevenir entorses em curvas fechadas.'
        },
        {
          icon: 'ph:wave-sine-fill',
          title: 'Recovery & Liberação Miofascial',
          desc: 'Terapias manuais e eletroestimulação para drenar o excesso de lactato muscular, desatar nós miofasciais e prevenir contraturas.'
        },
        {
          icon: 'ph:needle-fill',
          title: 'Acupuntura Desportiva & Eletroacupuntura',
          desc: 'Excelente para analgesia rápida de tecidos profundos e relaxamento de pontos-gatilho (*trigger points*) que travam o movimento.'
        },
        {
          icon: 'ph:shield-check-fill',
          title: 'Laserterapia Regenerativa',
          desc: 'Bioestimulação direta em tendões e ligamentos mais exigidos, regenerando microfissuras antes que virem lesões graves.'
        }
      ]
    },

    // 5. CTA
    cta: {
      title: 'Garanta máxima performance com longevidade',
      desc: 'Proteja o bem-estar e amplie a carreira esportiva do seu cão com um plano preventivo e regenerativo personalizado.',
      btnText: 'Agendar Avaliação para Cão Atleta'
    }
  },

  'equinos': {
    title: 'Medicina Integrativa para <span>Equinos</span>',
    rawTitle: 'Equinos',
    badge: 'Trabalho, Reprodução & Bem-Estar',
    desc: 'Cuidado integrado, alívio de dores silenciosas e bem-estar para equinos em geral, com foco especial no trabalho e na reprodução.',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1200&auto=format&fit=crop',

    // 1. Dor Silenciosa
    silentPain: {
      tag: 'A Linguagem dos Equinos',
      title: 'Eles não demonstram a dor: o sinal está na mudança de humor',
      intro: 'Por instinto natural de sobrevivência, os equinos raramente demonstram dor de forma explícita. O desconforto se manifesta principalmente no comportamento e no humor do dia a dia: irritabilidade na baia, resistência ao contato, recusa na sela ou alterações temperamentais, especialmente em animais de reprodução e trabalho.',
      signs: [
        {
          icon: 'ph:warning-circle-fill',
          title: 'Mudança de Humor e Temperamento',
          desc: 'Irritabilidade ao ser escovado, morder ou escoicear ao apertar a cilha, ou ficar retraído e agressivo sem motivo aparente.'
        },
        {
          icon: 'ph:heart-break-fill',
          title: 'Alterações Reprodutivas e Libido',
          desc: 'Garanhões que evitam a monta por dores lombares ou perdem qualidade seminal pelo estresse; matrizes irritadas que rejeitam o macho ou o manejo.'
        },
        {
          icon: 'ph:hand-palm-fill',
          title: 'Resistência ao Trabalho e Manejo',
          desc: 'Dificuldade para aceitar a sela, relutância ao iniciar o movimento ou perda de disposição nas atividades habituais de lida.'
        },
        {
          icon: 'ph:clock-countdown-fill',
          title: 'Passada Curta e Rigidez ao Sair',
          desc: 'Movimentação travada ao sair da baia, demora para aquecer o corpo ou passos mais curtos para poupar o impacto nas articulações.'
        }
      ]
    },

    // 2. Alerta: Remédio Apenas Mascara
    maskingAlert: {
      title: 'Por que apenas dar remédio não resolve a causa?',
      highlight: 'A medicação alivia temporariamente, mas não trata a dor mecânica nem devolve o equilíbrio do animal.',
      explanation: 'O uso contínuo de anti-inflamatórios sem fisioterapia mascara a dor real e pode causar úlceras gástricas frequentes em equinos. O animal continua com tensões acumuladas na coluna e bacia, o que mantém o estresse elevado e compromete diretamente sua fertilidade, a qualidade seminal e a disposição diária no trabalho.'
    },

    // 3. Método Integrativo
    methodology: {
      title: 'Como Funciona o Cuidado Integrativo para Equinos',
      subtitle: 'Atendimento no próprio haras ou propriedade, de forma calma e respeitosa, focado no bem-estar físico e emocional.',
      steps: [
        {
          number: '01',
          title: 'Avaliação Física, Postural e de Humor',
          desc: 'Análise minuciosa de pontos de dor na coluna, bacia e membros, aliada à observação do comportamento e histórico na rotina.'
        },
        {
          number: '02',
          title: 'Acupuntura e Fisioterapia no Local',
          desc: 'Técnicas integrativas suaves para soltar a musculatura, aliviar a dor profunda, estimular a circulação e acalmar o sistema nervoso.'
        },
        {
          number: '03',
          title: 'Orientações de Manejo e Rotina',
          desc: 'Dicas práticas para o dia a dia na baia, pasto e lida, garantindo que o equino mantenha o bem-estar, a fertilidade e a vitalidade.'
        }
      ]
    },

    // 4. Tratamento Específico
    specificTreatments: {
      title: 'Benefícios da Acupuntura & Fisioterapia em Equinos',
      subtitle: 'Como as práticas integrativas aprimoram a fertilidade, a qualidade reprodutiva e a vitalidade na lida:',
      items: [
        {
          icon: 'ph:horse-fill',
          title: 'Qualidade do Sêmen & Conforto do Garanhão',
          desc: 'A acupuntura reduz os níveis de cortisol (estresse) e alivia as dores lombares e pélvicas para a monta, melhorando a circulação testicular, a libido e a qualidade e motilidade do sêmen.'
        },
        {
          icon: 'ph:heart-fill',
          title: 'Melhora da Fertilidade em Éguas e Matrizes',
          desc: 'A acupuntura equilibra o sistema hormonal, melhora o aporte sanguíneo nos órgãos reprodutivos e relaxa a pelve, aumentando a fertilidade e proporcionando conforto na gestação e parto.'
        },
        {
          icon: 'ph:needle-fill',
          title: 'Benefícios da Acupuntura no Trabalho',
          desc: 'Liberação profunda de contraturas e alívio do cansaço e dores no dorso de equinos de lida, tração e passeio, restaurando a energia, a amplitude das passadas e a disposição diária.'
        },
        {
          icon: 'ph:sparkle-fill',
          title: 'Desenvolvimento e Vitalidade de Potros',
          desc: 'Acompanhamento do crescimento postural e físico dos filhotes, aliviando tensões musculares precoces e assegurando um desenvolvimento harmônico, saudável e dócil.'
        }
      ]
    },

    // 5. CTA
    cta: {
      title: 'Mais conforto, tranquilidade e saúde para seus equinos',
      desc: 'Atendimento especializado itinerante em propriedades rurais, haras e centros de criação em São Paulo e Vale do Paraíba.',
      btnText: 'Agendar Avaliação para Equinos'
    }
  }
}

const service = computed(() => {
  return servicesData[slug.value] || {
    title: 'Serviço Não Encontrado',
    rawTitle: 'Serviço',
    badge: 'Especialidades',
    desc: 'Desculpe, o serviço solicitado não está disponível.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200&auto=format&fit=crop',
    silentPain: null,
    maskingAlert: null,
    methodology: null,
    specificTreatments: null,
    cta: {
      title: 'Entre em contato conosco',
      desc: 'Estamos prontos para esclarecer todas as suas dúvidas sobre nossos serviços.',
      btnText: 'Falar no WhatsApp'
    }
  }
})

const otherServices = computed(() => {
  const all = [
    { slug: 'pequenos-animais', title: 'Pequenos Animais', icon: 'ph:paw-print-fill', desc: 'Reabilitação e controle de dor em cães e gatos' },
    { slug: 'caes-atletas', title: 'Cães Atletas', icon: 'ph:lightning-fill', desc: 'Performance esportiva e prevenção de lesões' },
    { slug: 'equinos', title: 'Equinos', icon: 'ph:horse-fill', desc: 'Trabalho, reprodução e bem-estar geral' }
  ]
  return all.filter(s => s.slug !== slug.value)
})

const activeSignDot = ref(0)
const activeStepDot = ref(0)
const activeTreatmentDot = ref(0)

const onGridScroll = (e, targetRef, count) => {
  const el = e.target
  const card = el.firstElementChild
  if (!card) return
  const cardWidth = card.offsetWidth + 16
  const idx = Math.round(el.scrollLeft / cardWidth)
  targetRef.value = Math.max(0, Math.min(count - 1, idx))
}

const scrollToGridIndex = (containerSelector, index) => {
  const container = document.querySelector(containerSelector)
  if (!container) return
  const cards = container.children
  if (cards[index]) {
    cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }
}

useSeoMeta({
  title: computed(() => `${service.value.rawTitle} | Dra. Fernanda Moreno - Medicina Integrativa`),
  description: computed(() => service.value.desc)
})
</script>

<template>
  <main class="service-detail-page">
    <!-- Header Hero -->
    <PageHeader 
      :title="service.title"
      :subtitle="service.desc"
      :badge="service.badge"
      :imageSrc="service.image"
    >
      <template #actions>
        <NuxtLink to="/servicos" class="back-link">
          <Icon name="ph:arrow-left-bold" />
          <span>Voltar para Todos os Serviços</span>
        </NuxtLink>
      </template>
    </PageHeader>

    <div v-if="service.silentPain" class="service-body">
      <!-- Seção 1: O Alerta da Dor Silenciosa -->
      <section class="section pain-section">
        <div class="container">
          <div class="section-intro text-center">
            <span class="badge-sub">{{ service.silentPain.tag }}</span>
            <h2 class="section-title">{{ service.silentPain.title }}</h2>
            <p class="section-desc">{{ service.silentPain.intro }}</p>
          </div>

          <div 
            class="signs-grid"
            @scroll.passive="(e) => onGridScroll(e, activeSignDot, service.silentPain.signs.length)"
          >
            <div 
              v-for="(sign, idx) in service.silentPain.signs" 
              :key="idx" 
              class="sign-card"
            >
              <div class="sign-icon">
                <Icon :name="sign.icon" />
              </div>
              <div class="sign-text">
                <h3>{{ sign.title }}</h3>
                <p>{{ sign.desc }}</p>
              </div>
            </div>
          </div>

          <div class="carousel-dots" aria-hidden="true">
            <button
              v-for="(_, idx) in service.silentPain.signs"
              :key="idx"
              class="carousel-dot"
              :class="{ active: activeSignDot === idx }"
              @click="scrollToGridIndex('.signs-grid', idx)"
              :aria-label="`Ir para slide ${idx + 1}`"
            />
          </div>
        </div>
      </section>

      <!-- Seção 2: O Perigo de Apenas Mascarar com Remédio -->
      <section class="section mask-warning-section">
        <div class="container">
          <div class="mask-box">
            <div class="mask-badge">
              <Icon name="ph:warning-octagon-fill" />
              <span>Ponto Fundamental</span>
            </div>
            <h3>{{ service.maskingAlert.title }}</h3>
            <p class="mask-highlight">{{ service.maskingAlert.highlight }}</p>
            <p class="mask-body">{{ service.maskingAlert.explanation }}</p>
          </div>
        </div>
      </section>

      <!-- Seção 3: Como Funciona o Método Integrativo -->
      <section class="section method-section">
        <div class="container">
          <div class="section-intro text-center">
            <span class="badge-sub">Metodologia</span>
            <h2 class="section-title">{{ service.methodology.title }}</h2>
            <p class="section-desc">{{ service.methodology.subtitle }}</p>
          </div>

          <div 
            class="method-steps-grid"
            @scroll.passive="(e) => onGridScroll(e, activeStepDot, service.methodology.steps.length)"
          >
            <div 
              v-for="step in service.methodology.steps" 
              :key="step.number" 
              class="step-card"
            >
              <div class="step-num">{{ step.number }}</div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
            </div>
          </div>

          <div class="carousel-dots" aria-hidden="true">
            <button
              v-for="(_, idx) in service.methodology.steps"
              :key="idx"
              class="carousel-dot"
              :class="{ active: activeStepDot === idx }"
              @click="scrollToGridIndex('.method-steps-grid', idx)"
              :aria-label="`Ir para etapa ${idx + 1}`"
            />
          </div>
        </div>
      </section>

      <!-- Seção 4: O Tratamento Específico -->
      <section class="section treatments-specific-section">
        <AmbientPawsTrail 
          :species="slug === 'equinos' ? 'horse' : (slug === 'pequenos-animais' ? 'cat' : 'dog')" 
          variant="diagonal-up" 
          :opacity="0.055" 
        />
        <div class="container">
          <div class="section-intro text-center">
            <span class="badge-sub">Arsenal Terapêutico</span>
            <h2 class="section-title">{{ service.specificTreatments.title }}</h2>
            <p class="section-desc">{{ service.specificTreatments.subtitle }}</p>
          </div>

          <div 
            class="treatments-grid"
            @scroll.passive="(e) => onGridScroll(e, activeTreatmentDot, service.specificTreatments.items.length)"
          >
            <div 
              v-for="(t, i) in service.specificTreatments.items" 
              :key="i" 
              class="treatment-card"
            >
              <div class="treatment-icon">
                <Icon :name="t.icon" />
              </div>
              <div class="treatment-info">
                <h3>{{ t.title }}</h3>
                <p>{{ t.desc }}</p>
              </div>
            </div>
          </div>

          <div class="carousel-dots" aria-hidden="true">
            <button
              v-for="(_, idx) in service.specificTreatments.items"
              :key="idx"
              class="carousel-dot"
              :class="{ active: activeTreatmentDot === idx }"
              @click="scrollToGridIndex('.treatments-grid', idx)"
              :aria-label="`Ir para tratamento ${idx + 1}`"
            />
          </div>
        </div>
      </section>

      <!-- Navegação Entre Especialidades -->
      <section class="section other-services-section">
        <div class="container">
          <div class="section-intro text-center">
            <span class="badge-sub">Áreas de Atuação</span>
            <h2 class="section-title">Conheça Outras Especialidades</h2>
            <p class="section-desc">Cuidado integrado especializado para cada perfil de paciente.</p>
          </div>

          <div class="other-services-grid">
            <NuxtLink 
              v-for="other in otherServices" 
              :key="other.slug" 
              :to="`/servicos/${other.slug}`"
              class="other-service-card"
            >
              <div class="other-card-icon">
                <Icon :name="other.icon" />
              </div>
              <div class="other-card-info">
                <h4>{{ other.title }}</h4>
                <p>{{ other.desc }}</p>
              </div>
              <Icon name="ph:arrow-right-bold" class="other-card-arrow" />
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Seção 5: CTA de Agendamento -->
      <section class="section cta-section">
        <div class="container">
          <div class="cta-banner">
            <div class="cta-content">
              <span class="cta-pill">Agendamento de Consultas</span>
              <h2>{{ service.cta.title }}</h2>
              <p>{{ service.cta.desc }}</p>
              <div class="cta-actions">
                <AppButton 
                  to="/contato"
                  variant="primary"
                  size="lg"
                  class="cta-btn-main"
                >
                  <Icon name="ph:calendar-check-fill" />
                  <span>{{ service.cta.btnText }}</span>
                </AppButton>
                <AppButton 
                  :href="'https://wa.me/5511966176405?text=' + encodeURIComponent('Olá Dra. Fernanda! Gostaria de agendar uma consulta para ' + service.rawTitle)" 
                  target="_blank" 
                  variant="ghost" 
                  size="lg"
                >
                  <Icon name="ph:whatsapp-logo-fill" />
                  <span>Chamar no WhatsApp</span>
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Fallback caso rota inválida -->
    <div v-else class="container section text-center">
      <p class="lead">O conteúdo solicitado não foi encontrado.</p>
      <AppButton to="/servicos" variant="primary">Voltar para Serviços</AppButton>
    </div>
  </main>
</template>

<style scoped>
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-accent);
  transition: var(--transition-smooth);
  text-decoration: none;
}

.back-link:hover {
  color: var(--color-primary);
  transform: translateX(-4px);
}

.section {
  padding: 4.5rem 0;
}

.section-intro {
  max-width: 720px;
  margin: 0 auto 3.5rem;
}

.badge-sub {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--color-accent);
  margin-bottom: 0.75rem;
  background: rgba(185, 116, 98, 0.1);
  padding: 0.35rem 1rem;
  border-radius: 50px;
}

.section-title {
  font-size: clamp(1.75rem, 3.5vw, 2.35rem);
  color: var(--color-primary);
  line-height: 1.25;
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-desc {
  font-size: 1.05rem;
  color: var(--color-text-light);
  line-height: 1.7;
}

/* 1. Sinais de Dor Silenciosa */
.pain-section {
  background-color: var(--color-white);
}

.signs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.75rem;
}

.sign-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: var(--transition-smooth);
}

.sign-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-accent-light);
  box-shadow: var(--shadow-md);
}

.sign-icon {
  width: 52px;
  height: 52px;
  background: rgba(114, 30, 18, 0.08);
  color: var(--color-primary);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  transition: var(--transition-smooth);
}

.sign-card:hover .sign-icon {
  background: var(--color-primary);
  color: var(--color-white);
  transform: scale(1.05);
}

.sign-text h3 {
  font-size: 1.15rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.sign-text p {
  font-size: 0.925rem;
  color: var(--color-text-light);
  line-height: 1.55;
}

/* 2. Caixa de Alerta de Mascarar Dor */
.mask-warning-section {
  background-color: var(--color-bg-warm);
  padding: 3.5rem 0;
}

.mask-box {
  background: linear-gradient(135deg, rgba(114, 30, 18, 0.04) 0%, rgba(185, 116, 98, 0.08) 100%);
  border: 2px dashed rgba(114, 30, 18, 0.25);
  border-radius: 24px;
  padding: 3rem 3.5rem;
  max-width: 960px;
  margin: 0 auto;
  position: relative;
}

.mask-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.mask-badge svg {
  font-size: 1.25rem;
}

.mask-box h3 {
  font-size: 1.6rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
  font-weight: 700;
}

.mask-highlight {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 1.25rem;
  line-height: 1.5;
}

.mask-body {
  font-size: 1rem;
  color: var(--color-text);
  line-height: 1.7;
}

/* 3. Metodologia: Passos */
.method-section {
  background-color: var(--color-white);
}

.method-steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.step-card {
  position: relative;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  padding: 2.75rem 2rem 2.25rem;
  transition: var(--transition-smooth);
}

.step-card:hover {
  transform: translateY(-6px);
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
}

.step-num {
  font-size: 2.75rem;
  font-weight: 800;
  color: rgba(114, 30, 18, 0.15);
  line-height: 1;
  margin-bottom: 1.25rem;
  font-family: var(--font-main);
  transition: var(--transition-smooth);
}

.step-card:hover .step-num {
  color: var(--color-accent);
}

.step-card h3 {
  font-size: 1.25rem;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.step-card p {
  font-size: 0.95rem;
  color: var(--color-text-light);
  line-height: 1.6;
}

/* 4. Tratamentos Específicos */
.treatments-specific-section {
  position: relative;
  background-color: var(--color-bg-warm);
  overflow: hidden;
}

.treatments-specific-section .container {
  position: relative;
  z-index: 2;
}

.treatments-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.treatment-card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 2.25rem;
  display: flex;
  gap: 1.75rem;
  align-items: flex-start;
  transition: var(--transition-smooth);
  box-shadow: var(--shadow-sm);
}

.treatment-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-md);
}

.treatment-icon {
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  background: rgba(185, 116, 98, 0.12);
  color: var(--color-primary);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  transition: var(--transition-smooth);
}

.treatment-card:hover .treatment-icon {
  background: var(--color-primary);
  color: var(--color-white);
}

.treatment-info h3 {
  font-size: 1.2rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.treatment-info p {
  font-size: 0.95rem;
  color: var(--color-text-light);
  line-height: 1.6;
}

/* Outras Especialidades Switcher */
.other-services-section {
  background-color: var(--color-white);
  border-top: 1px solid var(--color-border);
}

.other-services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.other-service-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 1.75rem 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  text-decoration: none;
  transition: var(--transition-smooth);
}

.other-service-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-md);
  background: var(--color-white);
}

.other-card-icon {
  width: 50px;
  height: 50px;
  background: rgba(114, 30, 18, 0.08);
  color: var(--color-primary);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  transition: var(--transition-smooth);
}

.other-service-card:hover .other-card-icon {
  background: var(--color-primary);
  color: var(--color-white);
}

.other-card-info {
  text-align: left;
  flex: 1;
}

.other-card-info h4 {
  font-size: 1.15rem;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
  font-weight: 700;
}

.other-card-info p {
  font-size: 0.875rem;
  color: var(--color-text-light);
  line-height: 1.4;
  margin-bottom: 0;
}

.other-card-arrow {
  font-size: 1.25rem;
  color: var(--color-accent);
  transition: var(--transition-smooth);
}

.other-service-card:hover .other-card-arrow {
  color: var(--color-primary);
  transform: translateX(4px);
}

/* 5. CTA Final */
.cta-section {
  padding-bottom: 6rem;
  background-color: var(--color-bg);
}

.cta-banner {
  background: linear-gradient(135deg, var(--color-primary) 0%, #4f140c 100%);
  color: var(--color-white);
  border-radius: 32px;
  padding: 4.5rem 3.5rem;
  text-align: center;
  box-shadow: 0 20px 40px -10px rgba(114, 30, 18, 0.35);
  position: relative;
  overflow: hidden;
}

.cta-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(185, 116, 98, 0.25) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 780px;
  margin: 0 auto;
}

.cta-pill {
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: var(--color-white);
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 0.4rem 1.25rem;
  border-radius: 50px;
  margin-bottom: 1.5rem;
}

.cta-banner h2 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  color: var(--color-white);
  margin-bottom: 1.25rem;
  font-weight: 700;
  line-height: 1.2;
}

.cta-banner p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.cta-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.cta-btn-main {
  background-color: var(--color-accent) !important;
  color: var(--color-white) !important;
  border-color: var(--color-accent) !important;
}

.cta-btn-main:hover {
  background-color: var(--color-accent-light) !important;
}

.cta-actions :deep(.btn-ghost) {
  color: var(--color-white) !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
}

.cta-actions :deep(.btn-ghost:hover) {
  background-color: rgba(255, 255, 255, 0.15) !important;
}

.carousel-dots {
  display: none;
}

/* Responsividade */
@media (max-width: 1024px) {
  .signs-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .method-steps-grid {
    grid-template-columns: 1fr;
  }

  .treatments-grid {
    grid-template-columns: 1fr;
  }

  .mask-box {
    padding: 2.5rem 2rem;
  }
}

@media (max-width: 768px) {
  .carousel-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.45rem;
    margin-top: 1.25rem;
  }

  .carousel-dot {
    width: 7px;
    height: 7px;
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

  /* 1. Sinais de Dor: Carrossel Snap */
  .signs-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 1rem;
    padding: 0.5rem 1.5rem 1rem;
    margin: 0 -1.5rem;
    scrollbar-width: none;
  }

  .signs-grid::-webkit-scrollbar {
    display: none;
  }

  .sign-card {
    flex: 0 0 82%;
    max-width: 82%;
    scroll-snap-align: center;
    padding: 1.75rem 1.5rem;
  }

  /* 2. Metodologia: Carrossel Snap */
  .method-steps-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 1rem;
    padding: 0.5rem 1.5rem 1rem;
    margin: 0 -1.5rem;
    scrollbar-width: none;
  }

  .method-steps-grid::-webkit-scrollbar {
    display: none;
  }

  .step-card {
    flex: 0 0 85%;
    max-width: 85%;
    scroll-snap-align: center;
    padding: 2rem 1.5rem;
  }

  /* 3. Tratamentos: Carrossel Snap */
  .treatments-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 1rem;
    padding: 0.5rem 1.5rem 1rem;
    margin: 0 -1.5rem;
    scrollbar-width: none;
  }

  .treatments-grid::-webkit-scrollbar {
    display: none;
  }

  .treatment-card {
    flex: 0 0 85%;
    max-width: 85%;
    scroll-snap-align: center;
    padding: 1.75rem 1.5rem;
    flex-direction: row;
    gap: 1.25rem;
    align-items: flex-start;
  }

  /* 4. Outras Especialidades: Carrossel Snap */
  .other-services-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 1rem;
    padding: 0.5rem 1.5rem 1rem;
    margin: 0 -1.5rem;
    scrollbar-width: none;
  }

  .other-services-grid::-webkit-scrollbar {
    display: none;
  }

  .other-service-card {
    flex: 0 0 85%;
    max-width: 85%;
    scroll-snap-align: center;
    padding: 1.5rem;
  }

  .cta-banner {
    padding: 3rem 1.5rem;
  }

  .cta-actions {
    flex-direction: column;
    width: 100%;
  }

  .cta-actions :deep(.app-button) {
    width: 100%;
  }
}
</style>
