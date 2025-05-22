<script setup>
import Header from "~/components/sections/Header.vue";
import CarteSection from "~/components/sections/MenuSection.vue";
import HistoireSection from "~/components/sections/HistoireSection.vue";
import ContactSection from "~/components/sections/ContactSection.vue";
import FloatingCartButton from "~/components/ui/FloatingCartButton.vue";
import { VueLenis } from "lenis/vue";
</script>

<template>
  <VueLenis root />
  <Header />
  <CarteSection />
  <HistoireSection />
  <ContactSection />
  <FloatingCartButton />
</template>

<style>
body {
  font-family: "Nunito Sans", sans-serif;
}
</style>
