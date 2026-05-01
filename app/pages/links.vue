<script setup lang="ts">
definePageMeta({
  layout: false
})

// Links organizados por grupos
const mainLinks = [
  {
    title: 'WhatsApp',
    subtitle: 'Agendamentos e Dúvidas',
    url: 'https://wa.me/5511966176405',
    icon: 'ph:whatsapp-logo-duotone'
  },
  {
    title: 'Instagram',
    subtitle: '@meuvinculovet',
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
    subtitle: 'Indicações Pet',
    url: 'https://www.mercadolivre.com.br/social/mofe5595439/lists',
    icon: 'ph:shopping-cart-duotone',
    class: 'link-mercadolivre'
  }
]

const partnerLinks = [
  {
    title: 'Bicho Orgânico (Cupom: MVP10)',
    subtitle: 'Alimentação Natural',
    url: 'https://www.bichoorganico.com.br/',
    icon: 'ph:leaf-duotone'
  },
  {
    title: 'Petz (Cupom: LARAETECA)',
    subtitle: 'Desconto em todo o site',
    url: 'https://www.petz.com.br/?gad_source=1',
    icon: 'ph:storefront-duotone'
  }
]

useHead({
  title: 'Links | Dra. Fernanda Moreno',
  meta: [
    { name: 'description', content: 'Acesse os canais oficiais da Dra. Fernanda Moreno - Medicina Veterinária Integrativa.' }
  ]
})
</script>

<template>
  <main class="links-page">
    <!-- Background Imersivo -->
    <div class="bg-overlay"></div>
    <div class="bg-image"></div>

    <div class="container-links">
      <!-- Perfil -->
      <header class="profile-section">
        <div class="avatar-wrapper">
          <img src="https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=200&h=200&auto=format&fit=crop" alt="Dra. Fernanda Moreno" class="avatar" />
        </div>
        <h1 class="profile-name">Dra. Fernanda Moreno</h1>
        <p class="profile-bio">Medicina Veterinária Integrativa</p>
        <span class="profile-tag">Pequenos Animais & Equinos</span>
      </header>

      <!-- Blocos de Links -->
      <div class="links-wrapper">
        
        <!-- Bloco 1: Principais -->
        <section class="links-group">
          <a 
            v-for="link in mainLinks" 
            :key="link.url" 
            :href="link.url" 
            class="link-card"
            target="_blank"
          >
            <div class="link-icon">
              <Icon :name="link.icon" size="24" />
            </div>
            <div class="link-content">
              <span class="link-title">{{ link.title }}</span>
              <span class="link-subtitle">{{ link.subtitle }}</span>
            </div>
            <div class="link-arrow">
              <Icon name="ph:caret-right-bold" size="16" />
            </div>
          </a>
        </section>

        <!-- Bloco 2: E-commerce (Lado a Lado) -->
        <section class="links-grid">
          <a 
            v-for="link in shopLinks" 
            :key="link.url" 
            :href="link.url" 
            :class="['link-card-small', link.class]"
            target="_blank"
          >
            <div class="link-icon-small">
              <Icon :name="link.icon" size="20" />
            </div>
            <div class="link-content">
              <span class="link-title">{{ link.title }}</span>
              <span class="link-subtitle">{{ link.subtitle }}</span>
            </div>
          </a>
        </section>

        <!-- Bloco 3: Parcerias -->
        <section class="links-group">
          <h2 class="group-title">Parcerias e Cupons</h2>
          <a 
            v-for="link in partnerLinks" 
            :key="link.url" 
            :href="link.url" 
            class="link-card"
            target="_blank"
          >
            <div class="link-icon">
              <Icon :name="link.icon" size="24" />
            </div>
            <div class="link-content">
              <span class="link-title">{{ link.title }}</span>
              <span class="link-subtitle">{{ link.subtitle }}</span>
            </div>
            <div class="link-arrow">
              <Icon name="ph:caret-right-bold" size="16" />
            </div>
          </a>
        </section>

      </div>

      <!-- Footer -->
      <footer class="links-footer">
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

/* Background Effects */
.bg-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1920&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  z-index: -2;
}

.bg-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(20, 30, 22, 0.7) 0%, rgba(74, 93, 78, 0.8) 100%);
  backdrop-filter: blur(4px);
  z-index: -1;
}

.container-links {
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 1;
}

/* Profile Section */
.profile-section {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-wrapper {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(45deg, #A8C69F, #fff);
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

