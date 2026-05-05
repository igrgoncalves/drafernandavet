<template>
  <a 
    href="https://wa.me/5511966176405" 
    target="_blank" 
    class="whatsapp-float"
    aria-label="Fale conosco no WhatsApp"
  >
    <div class="pulse-ring"></div>
    <div class="icon-container">
      <Icon name="ph:whatsapp-logo-duotone" size="32" />
    </div>
    <span class="tooltip">Agende uma consulta</span>
  </a>
</template>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #25d366; /* WhatsApp Green for instant recognition */
  color: white;
  border-radius: 50%;
  box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
}

.whatsapp-float:hover {
  transform: scale(1.1) translateY(-5px);
  box-shadow: 0 15px 35px rgba(37, 211, 102, 0.4);
}

.icon-container {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Pulse Animation */
.pulse-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #25d366;
  border-radius: 50%;
  opacity: 0.6;
  z-index: 1;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}

/* Tooltip */
.tooltip {
  position: absolute;
  left: 75px;
  background-color: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
  pointer-events: none;
  box-shadow: var(--shadow-md);
}

.whatsapp-float:hover .tooltip {
  opacity: 1;
  transform: translateX(0);
}

.tooltip::after {
  content: '';
  position: absolute;
  left: -5px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  width: 10px;
  height: 10px;
  background-color: var(--color-primary);
}

/* Mobile Adjustments */
@media (max-width: 768px) {
  .whatsapp-float {
    bottom: 1.5rem;
    left: 1.5rem;
    width: 54px;
    height: 54px;
  }
  
  .tooltip {
    display: none; /* Hide tooltip on mobile for cleaner look */
  }
}
</style>
