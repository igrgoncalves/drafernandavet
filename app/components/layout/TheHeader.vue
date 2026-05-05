<script setup>
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contato', path: '/contato' }
]

if (import.meta.client) {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}
</script>

<template>
  <header :class="['the-header', { 'header-scrolled': isScrolled }]">
    <div class="container">
      <div class="header-wrapper">
        <NuxtLink to="/" class="logo">
          <div class="logo-icon">
            <Icon name="ph:leaf-bold" />
          </div>
          <span class="logo-text">Dra. Fernanda <span>Moreno</span></span>
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="desktop-nav">
          <div class="nav-links-wrapper">
            <NuxtLink 
              v-for="link in navLinks" 
              :key="link.path" 
              :to="link.path"
              class="nav-link"
              active-class="active"
            >
              {{ link.name }}
              <span class="underline"></span>
            </NuxtLink>
          </div>
          <div class="nav-actions">
            <AppButton to="/contato" size="sm" variant="primary" class="cta-btn">Agendar</AppButton>
          </div>
        </nav>

        <!-- Mobile Toggle -->
        <button 
          :class="['mobile-toggle', { 'is-active': isMenuOpen }]" 
          @click="toggleMenu" 
          aria-label="Menu"
        >
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </button>

        <!-- Mobile Nav Overlay -->
        <Transition name="overlay">
          <div v-if="isMenuOpen" class="mobile-nav-overlay" @click="toggleMenu">
            <nav class="mobile-nav-content" @click.stop>
              <NuxtLink 
                v-for="link in navLinks" 
                :key="link.path" 
                :to="link.path"
                class="mobile-nav-link"
                active-class="active"
                @click="toggleMenu"
              >
                {{ link.name }}
              </NuxtLink>
              <AppButton to="/contato" variant="primary" size="lg" @click="toggleMenu">Agendar Consulta</AppButton>
            </nav>
          </div>
        </Transition>
      </div>
    </div>
  </header>
</template>

<style scoped>
.the-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 2rem 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.header-scrolled {
  padding: 1rem 0;
}

.header-wrapper {
  background: rgba(253, 251, 247, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(114, 30, 18, 0.08);
  border-radius: 100px;
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s ease;
  box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.03);
}

.header-scrolled .header-wrapper {
  background: rgba(253, 251, 247, 0.9);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.08);
  border-color: rgba(114, 30, 18, 0.15);
  padding: 0.5rem 1.5rem;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 1rem;
  transition: var(--transition-smooth);
}

.logo:hover .logo-icon {
  transform: rotate(15deg) scale(1.1);
  background: var(--color-accent);
}

.logo-text {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: -0.5px;
}

.logo-text span {
  color: var(--color-accent);
}

/* Desktop Nav */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links-wrapper {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-light);
  padding: 0.25rem 0;
  position: relative;
  transition: var(--transition-smooth);
}

.nav-link:hover, .nav-link.active {
  color: var(--color-primary);
}

.underline {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover .underline,
.nav-link.active .underline {
  width: 100%;
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  width: 24px;
  height: 18px;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.line {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-primary);
  position: absolute;
  transition: all 0.3s ease;
}

.line:nth-child(1) { top: 0; }
.line:nth-child(2) { top: 50%; transform: translateY(-50%); }
.line:nth-child(3) { bottom: 0; }

.mobile-toggle.is-active .line:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.mobile-toggle.is-active .line:nth-child(2) { opacity: 0; }
.mobile-toggle.is-active .line:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

/* Mobile Overlay */
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(253, 251, 247, 0.98);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-nav-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.mobile-nav-link {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary);
}

/* Transitions */
.overlay-enter-active, .overlay-leave-active { transition: opacity 0.4s ease; }
.overlay-enter-from, .overlay-leave-to { opacity: 0; }

@media (max-width: 1024px) {
  .desktop-nav { display: none; }
  .mobile-toggle { display: block; }
  .header-wrapper { padding: 0.75rem 1.5rem; }
}

@media (max-width: 768px) {
  .the-header { padding: 1rem 0; }
  .logo-text { font-size: 1rem; }
}
</style>
