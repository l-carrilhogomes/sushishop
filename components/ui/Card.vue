<script setup>
import { motion } from "motion-v";
import { Star } from "lucide-vue-next";
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bestSeller: {
    type: Boolean,
    required: false,
  },
});
</script>
<template>
  <motion.div
    :whileHover="{ scale: 1.02 }"
    class="flex flex-col gap-2 bg-white p-4 rounded-lg relative"
  >
    <div
      v-if="bestSeller"
      class="flex flex-row gap-1 items-center absolute top-5 right-5 bg-yellow-400 px-2 py-1 rounded-lg z-10"
    >
      <Star fill="white" class="w-4 h-4 text-white" />
      <p class="text-white font-semibold text-sm">Best-seller</p>
    </div>
    <img :src="image" class="w-full object-cover rounded-lg" />
    <div class="flex justify-between items-center">
      <h3 class="text-lg font-bold text-gray-900">{{ title }}</h3>
      <p class="text-xl font-bold text-gray-900">{{ price }}€</p>
    </div>
    <p class="text-center text-sm text-gray-600 mb-2">
      {{ description }}
    </p>
    <motion.button
      :whileHover="{ scale: 1.02 }"
      class="bg-[#0a0a0a] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0a0a0a]/90 transition-all duration-300"
    >
      Ajouter au panier
    </motion.button>
  </motion.div>
</template>
