<script setup>
import { ref } from "vue";
import { Menu, X } from "lucide-vue-next";
const isMenuOpen = ref(false);

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
            <a class="hover:text-yellow-400" href="">Accueil</a>
          </li>
          <li>
            <a class="hover:text-yellow-400" href="#carte">La carte</a>
          </li>
          <li>
            <a class="hover:text-yellow-400" href="#histoire">Notre histoire</a>
          </li>
          <li><a class="hover:text-yellow-400" href="#contact">Contact</a></li>
        </ul>
      </nav>
      <nav class="sm:flex hidden">
        <ul class="flex flex-col sm:flex-row gap-4 text-white font-semibold">
          <li>
            <a class="hover:text-yellow-400" href="">Accueil</a>
          </li>
          <li>
            <a class="hover:text-yellow-400" href="#carte">La carte</a>
          </li>
          <li>
            <a class="hover:text-yellow-400" href="#histoire">Notre histoire</a>
          </li>
          <li><a class="hover:text-yellow-400" href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div>
        <button
          class="bg-yellow-400 text-[#0a0a0a] font-bold px-6 py-2 rounded-lg transition-colors duration-300 hidden sm:block"
        >
          Commander
        </button>
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
        <button
          class="bg-yellow-400 text-[#0a0a0a] font-bold px-6 py-2 rounded-lg transition-colors duration-300"
        >
          Commander
        </button>
        <button
          class="bg-yellow-400 text-[#0a0a0a] font-bold px-6 py-2 rounded-lg transition-colors duration-300"
        >
          Voir la carte
        </button>
      </div>
    </div>
  </header>
</template>
