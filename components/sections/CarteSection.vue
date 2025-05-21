<script setup>
import { motion } from "motion-v";
import { Star } from "lucide-vue-next";
</script>
<template>
  <section id="carte" class="flex flex-col gap-4 bg-[#0a0a0a] py-10">
    <h2 class="text-4xl font-bold text-center text-white mt-10">La carte</h2>
    <div class="mx-auto w-4/5 sm:w-3/5">
      <h2 class="text-2xl font-bold mb-2 text-white">Les Bowls</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div
          :whileHover="{ scale: 1.02 }"
          class="flex flex-col gap-2 bg-white p-4 rounded-lg relative"
        >
          <div
            class="flex flex-row gap-1 items-center absolute top-5 right-5 bg-yellow-400 px-2 py-1 rounded-lg z-10"
          >
            <Star fill="white" class="w-4 h-4 text-white" />
            <p class="text-white font-semibold text-sm">Best-seller</p>
          </div>
          <img src="/carte/bowl/1.jpg" class="w-full object-cover rounded-lg" />
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-gray-900">Bowl 1</h3>
            <p class="text-xl font-bold text-gray-900">15€</p>
          </div>
          <p class="text-center text-sm text-gray-600">
            Maïs, choux rouges, tomates cerises, croutons, céréales
          </p>
          <motion.button
            :whileHover="{ scale: 1.02 }"
            class="bg-[#0a0a0a] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0a0a0a]/90 transition-all duration-300"
          >
            Ajouter au panier
          </motion.button>
        </motion.div>
        <motion.div
          :whileHover="{ scale: 1.02 }"
          class="flex flex-col gap-2 bg-white p-4 rounded-lg"
        >
          <img src="/carte/bowl/2.jpg" class="w-full object-cover rounded-lg" />
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-gray-900">Bowl 2</h3>
            <p class="text-xl font-bold text-gray-900">15€</p>
          </div>
          <p class="text-center text-sm text-gray-600">
            Saumon, riz, algues, edamame, avocat, sésame, sauce soja
          </p>
          <motion.button
            :whileHover="{ scale: 1.02 }"
            class="bg-[#0a0a0a] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0a0a0a]/90 transition-all duration-300"
          >
            Ajouter au panier
          </motion.button>
        </motion.div>
        <motion.div
          :whileHover="{ scale: 1.02 }"
          class="flex flex-col gap-2 bg-white p-4 rounded-lg"
        >
          <img src="/carte/bowl/3.jpg" class="w-full object-cover rounded-lg" />
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-gray-900">Bowl 3</h3>
            <p class="text-xl font-bold text-gray-900">15€</p>
          </div>
          <p class="text-center text-sm text-gray-600">
            Crevettes, algues, choux blanc, sésame, champignons, tomates
          </p>
          <motion.button
            :whileHover="{ scale: 1.02 }"
            class="bg-[#0a0a0a] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0a0a0a]/90 transition-all duration-300"
          >
            Ajouter au panier
          </motion.button>
        </motion.div>
      </div>
      <h2 class="text-2xl font-bold mb-2 text-white mt-10">Les Sushis</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div
          :whileHover="{ scale: 1.02 }"
          class="flex flex-col gap-2 bg-white p-4 rounded-lg"
        >
          <img
            src="/carte/sushi/1.jpg"
            class="w-full h-80 object-cover rounded-lg"
          />
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-gray-900">Sushi 1</h3>
            <p class="text-xl font-bold text-gray-900">15€</p>
          </div>
          <p class="text-center text-sm text-gray-600">Algues, riz, saumon</p>
          <motion.button
            :whileHover="{ scale: 1.02 }"
            class="bg-[#0a0a0a] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0a0a0a]/90 transition-all duration-300"
          >
            Ajouter au panier
          </motion.button>
        </motion.div>
        <motion.div
          :whileHover="{ scale: 1.02 }"
          class="flex flex-col gap-2 bg-white p-4 rounded-lg"
        >
          <img
            src="/carte/sushi/2.jpg"
            class="w-full h-80 object-cover rounded-lg"
          />
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-gray-900">Sushi 2</h3>
            <p class="text-xl font-bold text-gray-900">15€</p>
          </div>
          <p class="text-center text-sm text-gray-600">
            Riz, saumon, fromage, algues, poudre spicy
          </p>
          <motion.button
            :whileHover="{ scale: 1.02 }"
            class="bg-[#0a0a0a] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0a0a0a]/90 transition-all duration-300"
          >
            Ajouter au panier
          </motion.button>
        </motion.div>
        <motion.div
          :whileHover="{ scale: 1.02 }"
          class="flex flex-col gap-2 bg-white p-4 rounded-lg relative"
        >
          <div
            class="flex flex-row gap-1 items-center absolute top-5 right-5 bg-yellow-400 px-2 py-1 rounded-lg z-10"
          >
            <Star fill="white" class="w-4 h-4 text-white" />
            <p class="text-white text-sm font-semibold">Best-seller</p>
          </div>
          <img
            src="/carte/sushi/3.jpg"
            class="w-full h-80 object-cover rounded-lg"
          />
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-gray-900">Sushi 3</h3>
            <p class="text-xl font-bold text-gray-900">15€</p>
          </div>
          <p class="text-center text-sm text-gray-600">
            Riz, sésame, thon, avocat, mayonnaise spicy
          </p>
          <motion.button
            :whileHover="{ scale: 1.02 }"
            class="bg-[#0a0a0a] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0a0a0a]/90 transition-all duration-300"
          >
            Ajouter au panier
          </motion.button>
        </motion.div>
      </div>
    </div>
  </section>
</template>
