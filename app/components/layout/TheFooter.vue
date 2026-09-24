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

      <div class="footer-nav">
        <h4>Especialidades</h4>
        <ul>
          <li><NuxtLink to="/servicos/pequenos-animais">Pequenos Animais</NuxtLink></li>
          <li><NuxtLink to="/servicos/caes-atletas">Cães Atletas</NuxtLink></li>
          <li><NuxtLink to="/servicos/equinos">Equinos</NuxtLink></li>
          <li><NuxtLink to="/servicos#arsenal">Arsenal Terapêutico</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h4>Atendimento</h4>
        <ul>
          <li>
            <Icon name="ph:map-pin" />
            <span>São Paulo (ZL) & Vale do Paraíba</span>
          </li>
          <li>
            <Icon name="ph:phone" />
            <a href="https://wa.me/5511966176405" target="_blank" class="contact-link">+55 11 96617-6405</a>
          </li>
          <li>
            <Icon name="ph:calendar-check-fill" />
            <NuxtLink to="/contato" class="contact-link highlight">Agendar Consulta</NuxtLink>
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
  background: linear-gradient(180deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: rgba(255, 255, 255, 0.85);
  padding-top: 5rem;
  margin-top: auto;
  border-top: 1px solid rgba(220, 159, 137, 0.2);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.8fr 1fr 1.2fr 1.4fr;
  gap: 3.5rem;
  margin-bottom: 4rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 1.5rem;
  display: block;
}

.logo-text span {
  color: var(--color-accent-light);
}

.brand-desc {
  font-size: 0.9375rem;
  max-width: 320px;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 1rem;
  font-size: 1.25rem;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--color-accent-light);
  transition: var(--transition-smooth);
}

.social-links a:hover {
  background: var(--color-accent);
  color: var(--color-white);
  border-color: var(--color-accent);
  transform: translateY(-3px);
}

h4 {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: var(--color-white);
  font-weight: 600;
  letter-spacing: 0.5px;
}

.footer-nav ul, .footer-contact ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-nav a {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.75);
  transition: var(--transition-smooth);
}

.footer-nav a:hover {
  color: var(--color-white);
  padding-left: 6px;
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.8);
}

.contact-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: var(--transition-smooth);
}

.contact-link:hover {
  color: var(--color-white);
}

.contact-link.highlight {
  font-weight: 600;
  color: var(--color-accent-light);
  border-bottom: 1px solid var(--color-accent-light);
  padding-bottom: 2px;
}

.contact-link.highlight:hover {
  color: var(--color-white);
  border-color: var(--color-white);
}

.footer-contact .iconify {
  font-size: 1.25rem;
  color: var(--color-accent-light);
  flex-shrink: 0;
}

.footer-bottom {
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.55);
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
