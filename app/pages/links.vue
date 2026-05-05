<script setup lang="ts">
definePageMeta({
  layout: false
})

const currentDate = new Date()
const currentMonth = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(currentDate)
const currentDay = currentDate.getDate()

const isFewSlots = currentDay >= 14
const badgeText = isFewSlots ? `Agendamento para ${currentMonth} poucas vagas` : `Agendamento para ${currentMonth} disponível`
const badgeClass = isFewSlots ? 'warning' : 'success'

// Links organizados por grupos
const mainLinks = [
  {
    title: 'WhatsApp',
    subtitle: 'Clique para conversar agora',
    badge: badgeText,
    badgeClass: badgeClass,
    url: 'https://wa.me/5511966176405',
    icon: 'ph:whatsapp-logo-duotone'
  },
  {
    title: 'Instagram',
    subtitle: 'Dra. Fernanda Moreno | @meuvinculovet',
    url: 'https://instagram.com/meuvinculovet',
    icon: 'ph:instagram-logo-duotone'
  },
  {
    title: 'Website Oficial',
    subtitle: 'Conheça nossa Metodologia',
    url: '/',
    icon: 'ph:globe-duotone'
  }
]

const shopLinks = [
  {
    title: 'Shopee',
    subtitle: 'Minha Loja',
    url: 'https://br.shp.ee/9x8LoUW4',
    icon: 'ph:bag-duotone',
    class: 'link-shopee'
  },
  {
    title: 'Mercado Livre',
    subtitle: 'Minhas Indicações',
    url: 'https://www.mercadolivre.com.br/social/mofe5595439/lists',
    icon: 'ph:shopping-cart-duotone',
    class: 'link-mercadolivre'
  }
]

// Background Slider Logic
const bgImages = [
  'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1920&auto=format&fit=crop', // Dog
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1920&auto=format&fit=crop', // Cat
  'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1920&auto=format&fit=crop'  // Horse
]
const currentBgIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    currentBgIndex.value = (currentBgIndex.value + 1) % bgImages.length
  }, 5000)
})

const partnerLinks = [
  {
    title: 'Bicho Orgânico',
    subtitle: 'Cupom: MVP10',
    code: 'MVP10',
    url: 'https://www.bichoorganico.com.br/',
    icon: 'ph:leaf-duotone'
  },
  {
    title: 'Petz',
    subtitle: 'Cupom: LARAETECA',
    code: 'LARAETECA',
    url: 'https://www.petz.com.br/?gad_source=1',
    icon: 'ph:storefront-duotone'
  }
]

// Funcionalidades
const copyStatus = ref('')
const copyToClipboard = (code: string) => {
  navigator.clipboard.writeText(code)
  copyStatus.value = `Cupom ${code} copiado!`
  setTimeout(() => copyStatus.value = '', 3000)
}

const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Dra. Fernanda Moreno - Links',
        text: 'Acesse os canais oficiais da Dra. Fernanda Moreno',
        url: window.location.href,
      })
    } catch (err) {
      console.error('Erro ao compartilhar:', err)
    }
  } else {
    copyToClipboard(window.location.href)
    copyStatus.value = 'Link da página copiado!'
  }
}

const saveContact = () => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Dra. Fernanda Moreno
ORG:Medicina Veterinária Integrativa
TEL;TYPE=CELL,VOICE:+5511966176405
EMAIL:contato@meuvinculo.vet
URL;TYPE=Website:https://meuvinculo.vet
URL;TYPE=Instagram:https://instagram.com/meuvinculovet
END:VCARD`
  
  const blob = new Blob([vcard], { type: 'text/vcard' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', 'DraFernandaMoreno.vcf')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

useHead({
  title: 'Links | Dra. Fernanda Moreno',
  meta: [
    { name: 'description', content: 'Acesse os canais oficiais da Dra. Fernanda Moreno - Medicina Veterinária Integrativa.' }
  ]
})
</script>

<template>
  <main class="links-page">
    <!-- Background Imersivo com Slider -->
    <div class="bg-overlay"></div>
    <div class="bg-slider">
      <Transition name="fade-bg">
        <div 
          :key="currentBgIndex" 
          class="bg-image" 
          :style="{ backgroundImage: `url(${bgImages[currentBgIndex]})` }"
        ></div>
      </Transition>
    </div>
    <div class="bg-animated-glow"></div>

    <!-- Top Actions -->
    <div class="top-actions reveal-fade">
      <button @click="handleShare" class="action-btn" aria-label="Compartilhar">
        <Icon name="ph:share-network-duotone" size="24" />
      </button>
      <button @click="saveContact" class="action-btn" aria-label="Salvar Contato">
        <Icon name="ph:user-plus-duotone" size="24" />
      </button>
    </div>

    <!-- Toast Notification -->
    <Transition name="toast">
      <div v-if="copyStatus" class="copy-toast">
        {{ copyStatus }}
      </div>
    </Transition>

    <div class="container-links">
      <!-- Perfil -->
      <header class="profile-section reveal-up" style="--delay: 0.1s">
        <div class="avatar-wrapper">
          <img src="https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=200&h=200&auto=format&fit=crop" alt="Dra. Fernanda Moreno" class="avatar" />
          <div class="status-indicator">
            <span class="pulse"></span>
          </div>
        </div>
        <h1 class="profile-name">Dra. Fernanda Moreno</h1>
        <p class="profile-bio">Medicina Veterinária Integrativa</p>
      </header>

      <!-- Blocos de Links -->
      <div class="links-wrapper">
        
        <!-- Bloco 1: Principais -->
        <section class="links-group">
          <a 
            v-for="(link, index) in mainLinks" 
            :key="link.url" 
            :href="link.url" 
            class="link-card reveal-up"
            :style="{ '--delay': `${0.2 + (index * 0.1)}s` }"
            target="_blank"
          >
            <div class="link-glow"></div>
            <div class="link-icon">
              <Icon :name="link.icon" size="24" />
            </div>
            <div class="link-content">
              <span class="link-title">{{ link.title }}</span>
              <span class="link-subtitle">{{ link.subtitle }}</span>
              <div v-if="link.badge" :class="['link-badge', link.badgeClass || 'success']">
                <span class="dot"></span>
                {{ link.badge }}
              </div>
            </div>
            <div class="link-arrow">
              <Icon name="ph:caret-right-bold" size="16" />
            </div>
          </a>
        </section>

        <!-- Bloco 2: Parcerias -->
        <section class="links-group">
          <h2 class="group-title reveal-fade" style="--delay: 0.5s">Parcerias e Cupons</h2>
          <div 
            v-for="(link, index) in partnerLinks" 
            :key="link.url" 
            class="link-card reveal-up"
            :style="{ '--delay': `${0.6 + (index * 0.1)}s` }"
          >
            <div class="link-glow"></div>
            <div class="link-icon">
              <Icon :name="link.icon" size="24" />
            </div>
            <div class="link-content">
              <span class="link-title">{{ link.title }}</span>
              <span class="link-subtitle">{{ link.subtitle }}</span>
              <div v-if="link.badge" :class="['link-badge', link.badgeClass || 'success']">
                <span class="dot"></span>
                {{ link.badge }}
              </div>
            </div>
            <div class="link-actions">
              <button @click="copyToClipboard(link.code)" class="btn-copy" title="Copiar Cupom">
                <Icon name="ph:copy-duotone" size="20" />
              </button>
              <a :href="link.url" target="_blank" class="btn-go">
                <Icon name="ph:arrow-square-out-duotone" size="20" />
              </a>
            </div>
          </div>
        </section>

        <!-- Divisória Minimalista -->
        <hr class="links-divider reveal-fade" style="--delay: 0.8s" />

        <!-- Bloco 3: E-commerce (Lado a Lado) -->
        <section class="links-grid">
          <a 
            v-for="(link, index) in shopLinks" 
            :key="link.url" 
            :href="link.url" 
            :class="['link-card-small', link.class, 'reveal-up']"
            :style="{ '--delay': `${0.9 + (index * 0.1)}s` }"
            target="_blank"
          >
            <div class="link-glow"></div>
            <div class="link-icon-small">
              <Icon :name="link.icon" size="20" />
            </div>
            <div class="link-content">
              <span class="link-title">{{ link.title }}</span>
              <span class="link-subtitle">{{ link.subtitle }}</span>
              <div v-if="link.badge" :class="['link-badge', link.badgeClass || 'success']">
                <span class="dot"></span>
                {{ link.badge }}
              </div>
            </div>
          </a>
        </section>

      </div>

      <!-- Footer -->
      <footer class="links-footer reveal-fade" style="--delay: 1.1s">
        <p>© {{ new Date().getFullYear() }} Dra. Fernanda Moreno</p>
        <p class="footer-sub">meuvinculo.vet</p>
      </footer>
    </div>
  </main>
</template>

<style scoped>
.links-page {
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem 1.5rem;
  overflow-x: hidden;
  color: #fff;
}

/* Background Slider Styles */
.bg-slider {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}

.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.fade-bg-enter-active, .fade-bg-leave-active {
  transition: opacity 1.5s ease-in-out;
}

.fade-bg-enter-from, .fade-bg-leave-to {
  opacity: 0;
}

.bg-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(50, 10, 5, 0.7) 0%, rgba(114, 30, 18, 0.8) 100%);
  backdrop-filter: blur(4px);
  z-index: -1;
}

.container-links {
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  z-index: 1;
}

/* Profile Section */
.profile-section {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.5rem;
}

.avatar-wrapper {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  padding: 3px;
  /* Original Green Gradient
  background: linear-gradient(45deg, #A8C69F, #fff);
  */
  background: linear-gradient(45deg, #dc9f89, #fff);
  margin-bottom: 1.25rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
}

.profile-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.35rem;
  letter-spacing: -0.02em;
}

.profile-bio {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.75rem;
}

.profile-tag {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.35rem 0.9rem;
  border-radius: 100px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Links Wrapper */
.links-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.links-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.group-title {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  font-weight: 600;
}

/* Layout Classes */
.links-divider {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  margin: 0.5rem 0;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.reveal-up {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  animation-delay: var(--delay, 0s);
}

.reveal-fade {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  animation-delay: var(--delay, 0s);
}

/* Background Animation */
.bg-animated-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(185, 116, 98, 0.15), transparent 50%);
  z-index: -1;
  animation: moveGlow 15s infinite alternate ease-in-out;
}

@keyframes moveGlow {
  0% { transform: translate(-10%, -10%) scale(1); }
  100% { transform: translate(10%, 10%) scale(1.2); }
}

/* Top Actions */
.top-actions {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  gap: 0.75rem;
  z-index: 100;
}

.action-btn {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

/* Toast Notification */
.copy-toast {
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  z-index: 1000;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.toast-enter-active, .toast-leave-active { transition: all 0.3s ease; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translate(-50%, -20px); }

/* Profile Improvements */
.avatar-wrapper {
  position: relative;
}

.status-indicator {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 14px;
  height: 14px;
  background: #4ade80;
  border: 2px solid #fff;
  border-radius: 50%;
  z-index: 2;
}

.pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #4ade80;
  border-radius: 50%;
  opacity: 0.6;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(2.5); opacity: 0; }
}

.dot {
  width: 6px;
  height: 6px;
  background: currentColor;
  border-radius: 50%;
}

.link-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  margin-top: 0.4rem;
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.link-badge.success {
  background: rgba(74, 222, 128, 0.2);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.3);
}

.link-badge.warning {
  background: rgba(251, 146, 60, 0.2);
  color: #fb923c;
  border: 1px solid rgba(251, 146, 60, 0.3);
}

/* Link Glow Effect */
.link-card, .link-card-small {
  position: relative;
  overflow: hidden;
}

.link-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.15) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.link-card:hover .link-glow, .link-card-small:hover .link-glow {
  opacity: 1;
}

/* Partner Actions */
.link-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-copy, .btn-go {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-copy:hover, .btn-go:hover {
  background: var(--color-accent);
  border-color: transparent;
  transform: scale(1.05);
}

/* E-commerce Grid */
.links-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

/* Link Cards */
.link-card, .link-card-small {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1.25rem;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
  color: inherit;
}

.link-card {
  gap: 1.25rem;
  padding: 1.1rem 1.25rem;
}

.link-card-small {
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem 1rem;
  text-align: center;
}

.link-card:hover, .link-card-small:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.4);
}

/* Specific Colors for E-commerce */
.link-shopee {
  background: rgba(238, 77, 45, 0.25);
  border-color: rgba(238, 77, 45, 0.4);
}
.link-shopee:hover {
  background: rgba(238, 77, 45, 0.4);
}

.link-mercadolivre {
  background: rgba(255, 230, 0, 0.15);
  border-color: rgba(255, 230, 0, 0.3);
}
.link-mercadolivre:hover {
  background: rgba(255, 230, 0, 0.3);
}

.link-icon, .link-icon-small {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  color: #fff;
}

.link-icon {
  width: 44px;
  height: 44px;
}

.link-icon-small {
  width: 40px;
  height: 40px;
}

.link-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.link-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.1rem;
}

.link-subtitle {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
}

.link-arrow {
  opacity: 0.5;
}

/* Footer */
.links-footer {
  text-align: center;
  margin-top: 1rem;
  opacity: 0.6;
}

.links-footer p {
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
  color: #fff;
}

.footer-sub {
  font-weight: 600;
  letter-spacing: 0.05em;
}

/* Mobile Optimizations */
@media (max-width: 480px) {
  .links-page {
    padding: 2rem 1rem;
  }
  
  .link-card {
    padding: 1rem;
    gap: 1rem;
  }

  .link-title {
    font-size: 0.95rem;
  }
}
</style>
