import Lenis from 'lenis'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Scroll to top on route change
    const router = useRouter()
    router.afterEach(() => {
      lenis.scrollTo(0, { immediate: true })
    })

    nuxtApp.provide('lenis', lenis)
  }
})
