<template>
  <section class="faq-section section">
    <div class="container">
      <div class="section-header text-center reveal">
        <h2 class="section-title">Perguntas <span>Frequentes</span></h2>
        <p class="section-desc">Esclareça suas principais dúvidas sobre o atendimento e as terapias integrativas.</p>
      </div>

      <div class="faq-accordion reveal">
        <div v-for="(item, index) in faqs" :key="index" class="faq-item" :class="{ active: activeIndex === index }">
          <button class="faq-question" @click="toggleFaq(index)">
            {{ item.question }}
            <Icon :name="activeIndex === index ? 'ph:minus' : 'ph:plus'" />
          </button>
          <div class="faq-answer">
            <div class="answer-content">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="faq-cta text-center reveal">
        <p>Ainda tem dúvidas? Estamos aqui para ajudar.</p>
        <AppButton href="https://wa.me/5511966176405" target="_blank" variant="outline">Chamar no WhatsApp</AppButton>
      </div>
    </div>
  </section>
</template>

<script setup>
const activeIndex = ref(null)

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = [
  {
    question: "A acupuntura dói no animal?",
    answer: "Na grande maioria dos casos, não. As agulhas são extremamente finas e a aplicação é feita de forma técnica e gentil. Muitos animais relaxam tanto que chegam a dormir durante a sessão."
  },
  {
    question: "Quais regiões são atendidas?",
    answer: "O atendimento presencial (volante) abrange a cidade de São Paulo (foco na Zona Leste) e a região do Vale do Paraíba / Alto Tietê."
  },
  {
    question: "Como funciona a consultoria online?",
    answer: "A consultoria online é focada na área de comportamento. Realizamos uma vídeochamada para entender a rotina, o ambiente e os desafios, traçando um plano de manejo e adestramento positivo."
  },
  {
    question: "Preciso de indicação de outro veterinário?",
    answer: "Não necessariamente, mas o trabalho integrativo funciona muito bem em conjunto com o veterinário clínico do seu animal. Se ele já tiver exames recentes, eles são fundamentais para a nossa avaliação inicial."
  },
  {
    question: "Quantas sessões são necessárias?",
    answer: "Isso varia de acordo com o quadro do paciente (agudo ou crônico) e o objetivo do tratamento. Após a primeira avaliação, definimos um protocolo individualizado com a frequência sugerida."
  }
]
</script>

<style scoped>
.faq-section {
  background-color: var(--color-bg);
}

.faq-accordion {
  max-width: 800px;
  margin: 0 auto 4rem;
}

.faq-item {
  background: var(--color-white);
  border-radius: 15px;
  margin-bottom: 1rem;
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: var(--transition-smooth);
}

.faq-item.active {
  border-color: var(--color-accent-light);
  box-shadow: var(--shadow-sm);
}

.faq-question {
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  font-family: var(--font-main);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-primary);
  text-align: left;
  cursor: pointer;
}

.faq-question .iconify {
  font-size: 1.25rem;
  color: var(--color-accent);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.faq-item.active .faq-answer {
  max-height: 300px;
}

.answer-content {
  padding: 0 2rem 2rem;
}

.answer-content p {
  margin-bottom: 0;
  font-size: 1rem;
  color: var(--color-text-light);
}

.faq-cta {
  background: var(--color-white);
  padding: 3rem;
  border-radius: 30px;
  border: 1px solid var(--color-border);
  max-width: 800px;
  margin: 0 auto;
}

.faq-cta p {
  margin-bottom: 1.5rem;
  font-weight: 500;
}
</style>
