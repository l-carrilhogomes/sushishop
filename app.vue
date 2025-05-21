<script setup>
import Header from "~/components/sections/Header.vue";
import CarteSection from "~/components/sections/CarteSection.vue";
import HistoireSection from "~/components/sections/HistoireSection.vue";
import ContactSection from "~/components/sections/ContactSection.vue";
import { VueLenis } from "lenis/vue";
</script>

<template>
  <VueLenis root />
  <Header />
  <CarteSection />
  <HistoireSection />
  <ContactSection />
</template>
