<script setup>
import { ref } from "vue";
import { Menu, X } from "lucide-vue-next";
import Button from "~/components/ui/Button.vue";
import { useLenis } from "lenis/vue";
const isMenuOpen = ref(false);

const lenis = useLenis();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="bg-[url('/header.jpg')] bg-cover bg-center h-screen">
    <div class="flex flex-col sm:flex-row justify-around items-center py-4">
      <div class="flex flex-col items-center gap-2">
        <h1 class="text-white text-2xl font-bold">
          <span class="text-yellow-400">Sushi</span>Shop
        </h1>
        <div class="sm:hidden">
          <button v-if="!isMenuOpen" @click="toggleMenu" class="text-white">
            <Menu />
          </button>
          <button v-else @click="toggleMenu" class="text-white">
            <X />
          </button>
        </div>
      </div>
      <nav class="sm:hidden" v-if="isMenuOpen">
        <ul class="flex flex-col sm:flex-row gap-4 text-white font-semibold">
          <li>
            <NuxtLink
              class="hover:text-yellow-400 cursor-pointer"
              @click="lenis.scrollTo('#')"
              >Accueil</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="hover:text-yellow-400 cursor-pointer"
              @click="lenis.scrollTo('#carte')"
              >La carte</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="hover:text-yellow-400 cursor-pointer"
              @click="lenis.scrollTo('#histoire')"
              >Notre histoire</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="hover:text-yellow-400 cursor-pointer"
              @click="lenis.scrollTo('#contact')"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <nav class="sm:flex hidden">
        <ul class="flex flex-col sm:flex-row gap-4 text-white font-semibold">
          <li>
            <NuxtLink class="hover:text-yellow-400 cursor-pointer" href=""
              >Accueil</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="hover:text-yellow-400 cursor-pointer"
              @click="lenis.scrollTo('#carte')"
              >La carte</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="hover:text-yellow-400 cursor-pointer"
              @click="lenis.scrollTo('#histoire')"
              >Notre histoire</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="hover:text-yellow-400 cursor-pointer"
              @click="lenis.scrollTo('#contact')"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <div>
        <Button label="Commander" />
      </div>
    </div>
    <div class="flex flex-col items-center justify-center mt-14 sm:mt-48">
      <h1 class="text-white sm:text-4xl text-2xl font-bold text-center">
        Découvrez l'art du <span class="text-yellow-400">sushi japonais</span>
      </h1>
      <p class="text-white sm:text-xl text-lg text-center">
        Une expérience culinaire unique avec les meilleurs ingrédients frais
      </p>
      <div class="flex flex-row gap-4 sm:mt-4 mt-8">
        <Button label="Commander" />
        <Button label="Voir la carte" />
      </div>
    </div>
  </header>
</template>
