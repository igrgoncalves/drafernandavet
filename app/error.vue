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
  overflow: hidden;
  position: relative;
  padding: 2rem;
}

/* Massive Background Text */
.massive-bg-404 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(25rem, 80vw, 50rem);
  font-weight: 900;
  color: var(--color-primary);
  opacity: 0.05;
  line-height: 1;
  letter-spacing: -0.05em;
  user-select: none;
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
}

.animals-orchestra {
  display: flex;
  align-items: flex-end;
  gap: 3rem;
  position: relative;
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
  background: rgba(255, 255, 255, 0.5);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(185, 116, 98, 0.2);
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
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
  gap: 3rem;
}

.main-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: var(--color-primary);
  margin-bottom: 1.25rem;
  line-height: 1;
}

.sub-message {
  font-size: 1.25rem;
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
  gap: 1.25rem;
  background-color: var(--color-primary);
  color: white;
  padding: 1.5rem 3rem;
  border-radius: 100px;
  border: none;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 15px 40px rgba(114, 30, 18, 0.25);
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

/* Mobile Layout */
@media (max-width: 1024px) {
  .error-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 4rem;
  }
  
  .visual-side { order: 1; }
  .content-side { order: 2; align-items: center; }
  
  .animals-orchestra { gap: 1.5rem; }
  .animal-stage.horse .animal-full { font-size: 11rem; }
  .animal-stage.cat .animal-full { font-size: 6.5rem; }
  .animal-stage.dog .animal-full { font-size: 8.5rem; }
  
  .massive-bg-404 { font-size: 30rem; }
}
</style>
