<script setup lang="ts">
const error = useError()
const countdown = ref(15)

const handleClearError = () => {
  clearError({ redirect: '/' })
}

onMounted(() => {
  const timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
      handleClearError()
    }
  }, 1000)

  onUnmounted(() => clearInterval(timer))
})
</script>

<template>
  <div class="error-page">
    <!-- Huge Background 404 -->
    <div class="massive-bg-404">404</div>

    <div class="error-grid">
      
      <!-- Left: Animals Orchestra -->
      <div class="visual-side">
        <div class="animals-orchestra">
          <div class="animal-stage horse">
            <div class="tear-stream">
              <span class="tear t1"></span>
              <span class="tear t2"></span>
            </div>
            <Icon name="ph:horse-duotone" class="animal-full" />
            <span class="animal-speech">Pé de Pano?</span>
          </div>
          <div class="animal-stage cat">
            <div class="tear-stream">
              <span class="tear t1"></span>
              <span class="tear t2"></span>
            </div>
            <Icon name="ph:cat-duotone" class="animal-full" />
            <span class="animal-speech">Miau?</span>
          </div>
          <div class="animal-stage dog">
            <div class="tear-stream">
              <span class="tear t1"></span>
              <span class="tear t2"></span>
            </div>
            <Icon name="ph:dog-duotone" class="animal-full" />
            <span class="animal-speech">Au au?</span>
          </div>
        </div>
      </div>

      <!-- Right: Content & Action -->
      <div class="content-side">
        <div class="text-group">
          <h1 class="main-title">Onde eles foram parar?</h1>
          <p class="sub-message">
            Nossos amigos estão desolados! Eles procuraram em todos os cantos, mas essa página parece ter fugido do pasto.
          </p>
        </div>

        <div class="timer-orchestra">
          <div class="timer-header">
            <Icon name="ph:clock-countdown-duotone" size="24" class="timer-icon" />
            <span class="timer-label">Voltando para casa em <strong>{{ countdown }}s</strong></span>
          </div>
          
          <div class="countdown-bar-wrapper">
            <div class="bar-progress" :style="{ width: `${(countdown / 15) * 100}%` }"></div>
          </div>
          
          <p class="timer-subtext">Não se preocupe, estamos preparando o caminho de volta.</p>
        </div>

        <div class="actions-row">
          <button @click="handleClearError" class="action-button">
            <Icon name="ph:house-line-duotone" size="20" />
            <span>Leve-me de volta agora</span>
          </button>
        </div>
      </div>

    </div>

    <!-- Animated Background Paws -->
    <div class="bg-paws">
      <Icon v-for="i in 15" :key="i" name="ph:paw-print-fill" class="p-icon" />
    </div>
  </div>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
  width: 100%;
  background-color: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  padding: 2rem;
}

/* Massive Background Text */
.massive-bg-404 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(15rem, 50vw, 45rem);
  font-weight: 900;
  color: var(--color-primary);
  opacity: 0.04;
  line-height: 1;
  letter-spacing: -0.05em;
  user-select: none;
  pointer-events: none;
  z-index: 0;
  white-space: nowrap;
}

.error-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 5rem;
  max-width: 1300px;
  width: 100%;
  align-items: center;
  z-index: 10;
  position: relative;
}

/* Visual Side */
.visual-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.animals-orchestra {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 3rem;
  position: relative;
  width: 100%;
  max-width: 100%;
}

.animal-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  animation: sorrow 6s ease-in-out infinite;
}

.animal-stage.horse { animation-delay: 0s; }
.animal-stage.cat { animation-delay: 1s; }
.animal-stage.dog { animation-delay: 2s; }

.animal-full {
  color: var(--color-primary);
  filter: drop-shadow(0 25px 40px rgba(114, 30, 18, 0.15));
  transition: all 0.5s ease;
}

.animal-stage.horse .animal-full { font-size: 16rem; }
.animal-stage.cat .animal-full { font-size: 9rem; }
.animal-stage.dog .animal-full { font-size: 12rem; }

.animal-speech {
  margin-top: 1.5rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: rgba(255, 255, 255, 0.65);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(185, 116, 98, 0.2);
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  white-space: nowrap;
}

/* Tears */
.tear-stream {
  position: absolute;
  top: 30%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  pointer-events: none;
}

.tear {
  width: 12px;
  height: 18px;
  background: #74c0fc;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  opacity: 0;
  animation: fall 3s infinite;
}

.t1 { animation-delay: 0s; }
.t2 { animation-delay: 1.5s; }

@keyframes fall {
  0% { transform: translateY(0) scale(0); opacity: 0; }
  20% { opacity: 1; transform: translateY(15px) scale(1); }
  100% { transform: translateY(100px) scale(0.4); opacity: 0; }
}

@keyframes sorrow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(20px) rotate(-3deg); }
}

/* Content Side */
.content-side {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.main-title {
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  color: var(--color-primary);
  margin-bottom: 1.25rem;
  line-height: 1.1;
  font-weight: 700;
}

.sub-message {
  font-size: 1.2rem;
  color: var(--color-text-light);
  max-width: 500px;
  line-height: 1.6;
}

/* Timer Bar Section */
.timer-orchestra {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 400px;
  width: 100%;
}

.timer-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-primary);
}

.timer-label {
  font-size: 1.1rem;
  font-weight: 500;
}

.countdown-bar-wrapper {
  width: 100%;
  height: 10px;
  background: rgba(114, 30, 18, 0.08);
  border-radius: 100px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
}

.bar-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent), var(--color-primary));
  transition: width 1s linear;
}

.timer-subtext {
  font-size: 0.9rem;
  color: var(--color-text-light);
  font-style: italic;
}

/* Button */
.action-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--color-primary);
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 100px;
  border: none;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 15px 40px rgba(114, 30, 18, 0.25);
  max-width: 100%;
}

.action-button:hover {
  transform: scale(1.05) translateY(-5px);
  background-color: var(--color-primary-light);
  box-shadow: 0 20px 50px rgba(114, 30, 18, 0.35);
}

/* Background Paws */
.bg-paws {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.p-icon {
  position: absolute;
  color: var(--color-accent);
  opacity: 0.05;
  font-size: 3.5rem;
}

/* Responsive: Tablets (<= 1024px) */
@media (max-width: 1024px) {
  .error-page {
    padding: 3rem 1.5rem;
    height: auto;
    min-height: 100vh;
  }

  .error-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3.5rem;
  }
  
  .visual-side { order: 1; }
  .content-side { 
    order: 2; 
    align-items: center; 
    text-align: center;
    gap: 2rem;
  }
  
  .animals-orchestra { 
    gap: 1.5rem; 
  }

  .animal-stage.horse .animal-full { font-size: 9rem; }
  .animal-stage.cat .animal-full { font-size: 5.5rem; }
  .animal-stage.dog .animal-full { font-size: 7rem; }

  .sub-message {
    margin: 0 auto;
  }

  .timer-orchestra {
    margin: 0 auto;
    align-items: center;
  }

  .timer-header {
    justify-content: center;
  }

  .actions-row {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

/* Responsive: Mobile Screens (<= 640px) */
@media (max-width: 640px) {
  .error-page {
    padding: 2.5rem 1.25rem 3rem;
    justify-content: flex-start;
  }

  .error-grid {
    gap: 2rem;
  }

  .animals-orchestra {
    gap: clamp(0.5rem, 3vw, 1.25rem);
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
  }

  .animal-stage.horse .animal-full { font-size: clamp(4.5rem, 18vw, 6.5rem); }
  .animal-stage.dog .animal-full { font-size: clamp(3.5rem, 14vw, 5rem); }
  .animal-stage.cat .animal-full { font-size: clamp(2.6rem, 10vw, 3.8rem); }

  .animal-speech {
    margin-top: 0.75rem;
    font-size: 0.7rem;
    padding: 0.25rem 0.6rem;
    letter-spacing: 0.05em;
  }

  .tear {
    width: 8px;
    height: 12px;
  }

  @keyframes fall {
    0% { transform: translateY(0) scale(0); opacity: 0; }
    20% { opacity: 1; transform: translateY(8px) scale(1); }
    100% { transform: translateY(50px) scale(0.4); opacity: 0; }
  }

  .content-side {
    gap: 1.75rem;
    width: 100%;
  }

  .main-title {
    font-size: clamp(1.6rem, 6.5vw, 2.2rem);
    margin-bottom: 0.75rem;
  }

  .sub-message {
    font-size: 0.95rem;
    line-height: 1.5;
    padding: 0 0.5rem;
  }

  .timer-orchestra {
    max-width: 320px;
    gap: 0.75rem;
  }

  .timer-header {
    gap: 0.6rem;
  }

  .timer-label {
    font-size: 0.95rem;
  }

  .timer-subtext {
    font-size: 0.8rem;
  }

  .action-button {
    width: 100%;
    max-width: 320px;
    padding: 1rem 1.25rem;
    font-size: 1rem;
    gap: 0.75rem;
    box-shadow: 0 10px 25px rgba(114, 30, 18, 0.2);
  }

  .action-button:hover {
    transform: none;
  }

  .massive-bg-404 {
    font-size: clamp(8rem, 30vw, 14rem);
    opacity: 0.03;
  }
}

/* Extra Small Phones (<= 380px) */
@media (max-width: 380px) {
  .animals-orchestra {
    gap: 0.35rem;
  }

  .animal-stage.horse .animal-full { font-size: 4rem; }
  .animal-stage.dog .animal-full { font-size: 3.2rem; }
  .animal-stage.cat .animal-full { font-size: 2.3rem; }

  .animal-speech {
    font-size: 0.65rem;
    padding: 0.2rem 0.45rem;
  }
}
</style>
