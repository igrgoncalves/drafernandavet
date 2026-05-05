<template>
  <section class="contact-section section">
    <div class="container contact-grid">
      <div class="contact-info reveal">
        <h2 class="section-title">Inicie o Cuidado <span>Hoje Mesmo</span></h2>
        <p>Estamos prontos para entender o seu caso e traçar o melhor plano para o seu animal.</p>
        
        <div class="contact-methods">
          <div class="method-card">
            <Icon name="ph:whatsapp-logo-fill" class="method-icon whatsapp" />
            <div>
              <h4>WhatsApp</h4>
              <p>Atendimento rápido e agendamentos.</p>
              <a href="https://wa.me/5511966176405" target="_blank" class="method-link">+55 11 96617-6405</a>
            </div>
          </div>
          
          <div class="method-card">
            <Icon name="ph:instagram-logo-fill" class="method-icon instagram" />
            <div>
              <h4>Instagram</h4>
              <p>Acompanhe dicas e o dia a dia.</p>
              <a href="https://instagram.com/meuvinculovet" target="_blank" class="method-link">@meuvinculovet</a>
            </div>
          </div>
          
          <div class="method-card">
            <Icon name="ph:map-pin-fill" class="method-icon map" />
            <div>
              <h4>Regiões Atendidas</h4>
              <p>São Paulo (ZL) e Vale do Paraíba.</p>
              <span class="method-tag">Atendimento Domiciliar & Clínicas</span>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-form-container reveal">
        <AppCard class="contact-form-card">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name">Seu Nome</label>
              <input type="text" id="name" v-model="form.name" placeholder="Ex: Maria Silva" required />
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="pet">Nome do Pet</label>
                <input type="text" id="pet" v-model="form.pet" placeholder="Ex: Thor" required />
              </div>
              <div class="form-group">
                <label for="species">Espécie</label>
                <select id="species" v-model="form.species">
                  <option value="Cão">Cão</option>
                  <option value="Gato">Gato</option>
                  <option value="Cavalo">Cavalo</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="message">Como podemos ajudar?</label>
              <textarea id="message" v-model="form.message" rows="4" placeholder="Descreva brevemente o desafio ou sintoma..." required></textarea>
            </div>

            <AppButton type="submit" variant="primary" size="lg" :loading="isSubmitting">
              Enviar Mensagem
            </AppButton>
            
            <p v-if="submitted" class="success-msg">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
          </form>
        </AppCard>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = reactive({
  name: '',
  pet: '',
  species: 'Cão',
  message: ''
})

const isSubmitting = ref(false)
const submitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  submitted.value = true
  // Reset form
  Object.assign(form, { name: '', pet: '', species: 'Cão', message: '' })
  setTimeout(() => submitted.value = false, 5000)
}
</script>

<style scoped>
.contact-section {
  background-color: var(--color-white);
  position: relative;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 6rem;
  align-items: center;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
}

.method-card {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.method-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.method-icon.whatsapp { color: #25d366; }
.method-icon.instagram { color: #e1306c; }
.method-icon.map { color: var(--color-accent); }

.method-card h4 {
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
}

.method-card p {
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.method-link {
  font-weight: 600;
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-accent-light);
}

.method-tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: var(--color-bg);
  border-radius: 5px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-primary-light);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary);
}

input, select, textarea {
  padding: 0.875rem 1rem;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  font-family: var(--font-main);
  font-size: 1rem;
  outline: none;
  transition: var(--transition-smooth);
}

input:focus, select:focus, textarea:focus {
  border-color: var(--color-primary-light);
  box-shadow: 0 0 0 3px rgba(114, 30, 18, 0.1);
}

.success-msg {
  color: var(--color-success);
  font-weight: 600;
  font-size: 0.875rem;
  margin-top: 1rem;
  text-align: center;
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  
  .contact-info {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .method-card {
    text-align: left;
  }
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
