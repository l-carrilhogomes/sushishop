<script setup>
import { motion } from "motion-v";
import { Star } from "lucide-vue-next";
import { ShoppingCart } from "lucide-vue-next";
import { useCart } from "~/stores/cart";

const cart = useCart();

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
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

const addToCart = () => {
  cart.addToCart({
    id: props.id,
    name: props.title,
    price: props.price,
    image: props.image,
    quantity: 1,
  });
};
</script>
<template>
  <motion.div
    :whileHover="{ scale: 1.02 }"
    class="flex flex-col gap-2 bg-white p-4 rounded-lg relative"
  >
    <div
      v-if="bestSeller"
      class="flex flex-row gap-1 items-center absolute top-5 right-5 bg-[#F5C518] px-2 py-1 rounded-lg z-10"
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
      @click="addToCart"
      :whileHover="{ scale: 1.02 }"
      class="bg-[#F5C518] text-[#0a0a0a] px-4 py-2 rounded-lg font-semibold hover:bg-[#FFBD00] transition-all duration-300 flex flex-row gap-2 items-center justify-center"
    >
      <ShoppingCart class="w-5 h-5" />
      Ajouter au panier
    </motion.button>
  </motion.div>
</template>
