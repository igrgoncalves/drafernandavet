<script setup lang="ts">
/**
 * ============================================================================
 * AMBIENT PAWS TRAIL - RASTROS RANDOMIZADOS DE PONTA A PONTA (CÃO, GATO, CAVALO)
 * ============================================================================
 * Arquivo: app/components/ui/AmbientPawsTrail.vue
 *
 * Funcionalidades:
 * 1. ESPÉCIES RANDOMIZADAS EM CADA CAMINHADA:
 *    A cada novo ciclo, tanto a Trilha 1 quanto a Trilha 2 sorteiam aleatoriamente
 *    qual animal irá caminhar:
 *    - Cão + Cavalo
 *    - Gato + Gato
 *    - Cavalo + Cavalo
 *    - Cão + Gato, etc.
 * 
 * 2. ANATOMIA E PASSADAS ESPECÍFICAS POR ANIMAL:
 *    - Gato: passos curtos (stride 2.6%), pés bem juntos (1.1%), tamanho 24px.
 *    - Cão: passos médios (stride 3.0%), pés juntos (1.3%), tamanho 30px.
 *    - Cavalo: passos maiores (stride 3.6%), passada mais larga (1.6%), tamanho 36px.
 * 
 * 3. DE PONTA A PONTA (EDGE-TO-EDGE):
 *    Começa em uma borda (-3%) e caminha em linha reta até sair na borda oposta (103%).
 * ============================================================================
 */

type AnimalSpecies = 'cat' | 'dog' | 'horse'
const ALL_SPECIES: AnimalSpecies[] = ['dog', 'cat', 'horse']

interface Step {
  x: number     // Posição horizontal na tela (%)
  y: number     // Posição vertical na tela (%)
  rot: number   // Rotação da pata apontando para a frente (graus)
  delay: number // Tempo em segundos para tocar o chão
}

const props = withDefaults(
  defineProps<{
    species?: AnimalSpecies | 'random'
    secondarySpecies?: AnimalSpecies | 'random'
    opacity?: number
    color?: string
    dualTrail?: boolean
  }>(),
  {
    species: 'random',
    secondarySpecies: 'random',
    opacity: 0.08,
    color: 'var(--color-primary)',
    dualTrail: true
  }
)

/** Sorteia uma das três espécies aleatoriamente */
function pickRandomSpecies(): AnimalSpecies {
  return ALL_SPECIES[Math.floor(Math.random() * ALL_SPECIES.length)]
}

// Estados da Trilha 1
const trail1Species = ref<AnimalSpecies>('dog')
const trail1Steps = ref<Step[]>([])
const trail1Key = ref(1)
let trail1Timer: any = null

// Estados da Trilha 2
const trail2Species = ref<AnimalSpecies>('cat')
const trail2Steps = ref<Step[]>([])
const trail2Key = ref(100)
let trail2Timer: any = null

/**
 * Parâmetros de marcha anatômica por espécie:
 * - stepStride: avanço para a frente (%)
 * - stanceWidth: afastamento lateral entre esquerda e direita (%)
 * - cadenceSeconds: velocidade entre um passo e o próximo
 */
const SPECIES_GAIT: Record<AnimalSpecies, { stepStride: number; stanceWidth: number; cadenceSeconds: number }> = {
  cat: {
    stepStride: 2.6,    // Passos curtos e delicados
    stanceWidth: 1.1,   // Pés bem próximos
    cadenceSeconds: 0.30
  },
  dog: {
    stepStride: 3.0,    // Passos médios
    stanceWidth: 1.3,   // Pés próximos
    cadenceSeconds: 0.33
  },
  horse: {
    stepStride: 3.6,    // Passada mais longa e nobre
    stanceWidth: 1.6,   // Cascos um pouco mais afastados
    cadenceSeconds: 0.38
  }
}

/**
 * ============================================================================
 * GERADOR DE ROTA DE PONTA A PONTA
 * ============================================================================
 */
function createEdgeToEdgePath(species: AnimalSpecies): Step[] {
  // Catálogo de trajetórias retas de borda a borda
  const trajectories = [
    // 1. Diagonal subindo (canto inferior-esquerdo -> topo-direito)
    { x0: -3, y0: 80 + Math.random() * 12, x1: 103, y1: 8 + Math.random() * 15 },

    // 2. Diagonal descendo (canto superior-esquerdo -> inferior-direito)
    { x0: -3, y0: 8 + Math.random() * 15, x1: 103, y1: 80 + Math.random() * 12 },

    // 3. Reta horizontal de Esquerda para Direita
    { x0: -3, y0: 60 + Math.random() * 25, x1: 103, y1: 60 + Math.random() * 25 },

    // 4. Invertido: Direita para Esquerda subindo
    { x0: 103, y0: 80 + Math.random() * 12, x1: -3, y1: 8 + Math.random() * 15 },

    // 5. Invertido: Direita para Esquerda descendo
    { x0: 103, y0: 8 + Math.random() * 15, x1: -3, y1: 80 + Math.random() * 12 },

    // 6. Base da tela (horizontal pela borda inferior)
    { x0: -3, y0: 84 + Math.random() * 6, x1: 103, y1: 82 + Math.random() * 6 },

    // 7. Base invertida (direita para a esquerda na borda inferior)
    { x0: 103, y0: 82 + Math.random() * 6, x1: -3, y1: 84 + Math.random() * 6 }
  ]

  const t = trajectories[Math.floor(Math.random() * trajectories.length)]
  const dx = t.x1 - t.x0
  const dy = t.y1 - t.y0
  const totalDistance = Math.hypot(dx, dy)
  const angleRad = Math.atan2(dy, dx)
  const forwardAngleDeg = (angleRad * 180) / Math.PI + 90

  const nx = -Math.sin(angleRad)
  const ny = Math.cos(angleRad)

  // Obtém as medidas anatômicas da espécie atual
  const gait = SPECIES_GAIT[species] || SPECIES_GAIT.dog
  const stepCount = Math.ceil(totalDistance / gait.stepStride)
  const stepsList: Step[] = []

  for (let i = 0; i < stepCount; i++) {
    const progressRatio = i / (stepCount - 1)
    const baseX = t.x0 + progressRatio * dx
    const baseY = t.y0 + progressRatio * dy

    const side = i % 2 === 0 ? -1 : 1
    const posX = baseX + side * (gait.stanceWidth / 2) * nx
    const posY = baseY + side * (gait.stanceWidth / 2) * ny

    // Leve rotação natural dos dedos para fora (toe-out)
    const rot = forwardAngleDeg + side * 2.0

    stepsList.push({
      x: Number(posX.toFixed(2)),
      y: Number(posY.toFixed(2)),
      rot: Number(rot.toFixed(1)),
      delay: Number((i * gait.cadenceSeconds).toFixed(2))
    })
  }

  return stepsList
}

/**
 * Ciclo da Trilha 1:
 * Sorteia uma nova espécie aleatória (cão, gato ou cavalo), gera a rota e inicia
 */
function runTrail1Cycle() {
  trail1Species.value = props.species === 'random' ? pickRandomSpecies() : props.species
  const steps = createEdgeToEdgePath(trail1Species.value)
  trail1Steps.value = steps
  trail1Key.value++

  const lastStepDelay = steps.length > 0 ? steps[steps.length - 1].delay : 8
  const totalDurationSeconds = lastStepDelay + 3.0 + 2.5

  trail1Timer = setTimeout(() => {
    runTrail1Cycle()
  }, totalDurationSeconds * 1000)
}

/**
 * Ciclo da Trilha 2:
 * Sorteia independentemente uma nova espécie e uma nova rota aleatória
 */
function runTrail2Cycle() {
  trail2Species.value = props.secondarySpecies === 'random' ? pickRandomSpecies() : props.secondarySpecies
  const steps = createEdgeToEdgePath(trail2Species.value)
  trail2Steps.value = steps
  trail2Key.value++

  const lastStepDelay = steps.length > 0 ? steps[steps.length - 1].delay : 8
  const totalDurationSeconds = lastStepDelay + 3.0 + 3.0

  trail2Timer = setTimeout(() => {
    runTrail2Cycle()
  }, totalDurationSeconds * 1000)
}

onMounted(() => {
  // Inicia a Trilha 1
  runTrail1Cycle()

  // Inicia a Trilha 2 com atraso inicial para intercalar
  if (props.dualTrail) {
    setTimeout(() => {
      runTrail2Cycle()
    }, 4200)
  }
})

onUnmounted(() => {
  if (trail1Timer) clearTimeout(trail1Timer)
  if (trail2Timer) clearTimeout(trail2Timer)
})
</script>

<template>
  <div class="ambient-paws-container" aria-hidden="true">
    <!-- ================================================================== -->
    <!-- TRILHA 1 (Randomizada: Cão, Gato ou Cavalo) -->
    <!-- ================================================================== -->
    <div 
      :key="trail1Key" 
      class="trail-layer"
      :style="{
        '--paws-color': color,
        '--paws-max-opacity': opacity
      }"
    >
      <div 
        v-for="(step, idx) in trail1Steps"
        :key="`t1-${trail1Key}-${idx}`"
        class="paw-step-wrapper"
        :style="{
          left: `${step.x}%`,
          top: `${step.y}%`,
          transform: `translate(-50%, -50%) rotate(${step.rot}deg)`
        }"
      >
        <div 
          class="paw-stamp"
          :style="{
            animationDelay: `${step.delay}s`
          }"
        >
          <!-- SVG GATO -->
          <svg v-if="trail1Species === 'cat'" class="paw-svg paw-cat" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 48 C38 48 30 58 32 72 C33 81 40 86 50 86 C60 86 67 81 68 72 C70 58 62 48 50 48 Z" />
            <circle cx="25" cy="40" r="9" /><circle cx="41" cy="27" r="9" /><circle cx="59" cy="27" r="9" /><circle cx="75" cy="40" r="9" />
          </svg>

          <!-- SVG CÃO -->
          <svg v-else-if="trail1Species === 'dog'" class="paw-svg paw-dog" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 44 C37 44 26 55 28 71 C30 80 39 86 50 86 C61 86 70 80 72 71 C74 55 63 44 50 44 Z" />
            <ellipse cx="23" cy="38" rx="8" ry="12" transform="rotate(-26 23 38)" />
            <ellipse cx="41" cy="24" rx="8.5" ry="13" transform="rotate(-8 41 24)" />
            <ellipse cx="59" cy="24" rx="8.5" ry="13" transform="rotate(8 59 24)" />
            <ellipse cx="77" cy="38" rx="8" ry="12" transform="rotate(26 77 38)" />
          </svg>

          <!-- SVG CAVALO -->
          <svg v-else-if="trail1Species === 'horse'" class="paw-svg paw-horse" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 12 C26 12 15 30 15 56 C15 74 21 86 31 86 C36 86 38 78 37 67 C36 48 40 28 50 28 C60 28 64 48 63 67 C62 78 64 86 69 86 C79 86 85 74 85 56 C85 30 74 12 50 12 Z" />
            <path d="M50 40 L41 66 C40 73 44 77 50 77 C56 77 60 73 59 66 Z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- ================================================================== -->
    <!-- TRILHA 2 (Também randomizada de forma independente) -->
    <!-- ================================================================== -->
    <div 
      v-if="dualTrail"
      :key="trail2Key" 
      class="trail-layer"
      :style="{
        '--paws-color': color,
        '--paws-max-opacity': opacity * 0.9
      }"
    >
      <div 
        v-for="(step, idx) in trail2Steps"
        :key="`t2-${trail2Key}-${idx}`"
        class="paw-step-wrapper"
        :style="{
          left: `${step.x}%`,
          top: `${step.y}%`,
          transform: `translate(-50%, -50%) rotate(${step.rot}deg)`
        }"
      >
        <div 
          class="paw-stamp"
          :style="{
            animationDelay: `${step.delay}s`
          }"
        >
          <!-- SVG GATO -->
          <svg v-if="trail2Species === 'cat'" class="paw-svg paw-cat" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 48 C38 48 30 58 32 72 C33 81 40 86 50 86 C60 86 67 81 68 72 C70 58 62 48 50 48 Z" />
            <circle cx="25" cy="40" r="9" /><circle cx="41" cy="27" r="9" /><circle cx="59" cy="27" r="9" /><circle cx="75" cy="40" r="9" />
          </svg>

          <!-- SVG CÃO -->
          <svg v-else-if="trail2Species === 'dog'" class="paw-svg paw-dog" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 44 C37 44 26 55 28 71 C30 80 39 86 50 86 C61 86 70 80 72 71 C74 55 63 44 50 44 Z" />
            <ellipse cx="23" cy="38" rx="8" ry="12" transform="rotate(-26 23 38)" />
            <ellipse cx="41" cy="24" rx="8.5" ry="13" transform="rotate(-8 41 24)" />
            <ellipse cx="59" cy="24" rx="8.5" ry="13" transform="rotate(8 59 24)" />
            <ellipse cx="77" cy="38" rx="8" ry="12" transform="rotate(26 77 38)" />
          </svg>

          <!-- SVG CAVALO -->
          <svg v-else-if="trail2Species === 'horse'" class="paw-svg paw-horse" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 12 C26 12 15 30 15 56 C15 74 21 86 31 86 C36 86 38 78 37 67 C36 48 40 28 50 28 C60 28 64 48 63 67 C62 78 64 86 69 86 C79 86 85 74 85 56 C85 30 74 12 50 12 Z" />
            <path d="M50 40 L41 66 C40 73 44 77 50 77 C56 77 60 73 59 66 Z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ambient-paws-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.trail-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.paw-step-wrapper {
  position: absolute;
  transform-origin: center center;
  pointer-events: none;
}

.paw-stamp {
  opacity: 0;
  color: var(--paws-color);
  animation: pawStepOnce 3.0s cubic-bezier(0.2, 0.9, 0.4, 1) forwards;
  will-change: opacity, transform;
}

.paw-svg {
  display: block;
}

/* Tamanho de cada espécie */
.paw-cat {
  width: 24px;
  height: 24px;
}

.paw-dog {
  width: 30px;
  height: 30px;
}

.paw-horse {
  width: 36px;
  height: 36px;
}

@keyframes pawStepOnce {
  0% {
    opacity: 0;
    transform: scale(1.15);
  }
  8% {
    opacity: var(--paws-max-opacity);
    transform: scale(1);
  }
  65% {
    opacity: var(--paws-max-opacity);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.96);
  }
}
</style>
