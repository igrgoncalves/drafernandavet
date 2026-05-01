<template>
  <footer class="the-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <NuxtLink to="/" class="logo">
          <span class="logo-text">Dra. Fernanda <span>Moreno</span></span>
        </NuxtLink>
        <p class="brand-desc">
          Medicina Veterinária Integrativa focada no equilíbrio entre corpo e mente. 
          Longevidade e bem-estar para o seu melhor amigo.
        </p>
        <div class="social-links">
          <a href="https://instagram.com/meuvinculovet" target="_blank" aria-label="Instagram">
            <Icon name="ph:instagram-logo" />
          </a>
          <a href="https://wa.me/5511966176405" target="_blank" aria-label="WhatsApp">
            <Icon name="ph:whatsapp-logo" />
          </a>
        </div>
      </div>

      <div class="footer-nav">
        <h4>Navegação</h4>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/sobre">Sobre</NuxtLink></li>
          <li><NuxtLink to="/servicos">Serviços</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/contato">Contato</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h4>Atendimento</h4>
        <ul>
          <li>
            <Icon name="ph:map-pin" />
            <span>São Paulo (Zona Leste) & Vale do Paraíba</span>
          </li>
          <li>
            <Icon name="ph:phone" />
            <span>+55 11 96617-6405</span>
          </li>
          <li>
            <Icon name="ph:envelope" />
            <span>contato@drafernandavet.com.br</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container bottom-content">
        <p>&copy; {{ new Date().getFullYear() }} Dra. Fernanda Moreno. Todos os direitos reservados.</p>
        <p>Desenvolvido com carinho.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.the-footer {
  background-color: var(--color-white);
  border-top: 1px solid var(--color-border);
  padding-top: 5rem;
  margin-top: auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 4rem;
  margin-bottom: 5rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  display: block;
}

.logo-text span {
  color: var(--color-accent);
}

.brand-desc {
  font-size: 0.9375rem;
  max-width: 320px;
  margin-bottom: 2rem;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  font-size: 1.5rem;
  color: var(--color-primary);
}

.social-links a:hover {
  color: var(--color-accent);
  transform: translateY(-3px);
}

h4 {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: var(--color-primary);
}

.footer-nav ul, .footer-contact ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-nav a {
  font-size: 0.9375rem;
  color: var(--color-text-light);
}

.footer-nav a:hover {
  color: var(--color-primary);
  padding-left: 5px;
}

.footer-contact li {
  display: flex;
  gap: 1rem;
  font-size: 0.9375rem;
  color: var(--color-text-light);
}

.footer-contact .iconify {
  font-size: 1.25rem;
  color: var(--color-accent);
  flex-shrink: 0;
}

.footer-bottom {
  padding: 2rem 0;
  border-top: 1px solid var(--color-border);
  font-size: 0.875rem;
  color: var(--color-text-light);
}

.bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .bottom-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
