<script setup>
import ServicesModernSection from '~/components/sections/ServicesModernSection.vue'
import TherapiesSection from '~/components/sections/TherapiesSection.vue'

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Home | Dra. Fernanda Moreno - Medicina Veterinária Integrativa',
  description: 'Cuidado integral que une corpo e mente para cães, gatos e cavalos. Acupuntura, Fisiatria e Comportamento.'
})
</script>

<template>
  <main>
    <HeroSection />
    <PhilosophySection />
    <ServicesModernSection />
    <TherapiesSection />
    <TestimonialsSection />
    <FAQSection />
    <ContactSection />
  </main>
</template>
