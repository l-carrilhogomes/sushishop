<script setup>
import { useCart } from "~/stores/cart";
import { X } from "lucide-vue-next";
import { motion } from "motion-v";

const cart = useCart();

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>

<template>
  <motion.div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
    @click="closeModal"
  >
    <motion.div
      class="bg-white w-full max-w-md h-full p-6 overflow-y-auto"
      @click.stop
      :initial="{ x: '100%' }"
      :animate="{ x: 0 }"
      :exit="{ x: '100%' }"
      :transition="{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      }"
    >
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">Votre panier</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
          <X />
        </button>
      </div>

      <div v-if="cart.cartItems.length === 0" class="text-center py-8">
        <p class="text-gray-500">Votre panier est vide</p>
      </div>

      <div v-else class="space-y-4">
        <div v-for="item in cart.cartItems" :key="item.id" class="flex gap-4">
          <img
            :src="item.image"
            :alt="item.name"
            class="w-20 h-20 object-cover rounded-lg"
          />
          <div class="flex-1">
            <h3 class="font-semibold">{{ item.name }}</h3>
            <p class="text-gray-600">{{ item.price }}€</p>
            <div class="flex items-center gap-2 mt-2">
              <button
                @click="cart.updateQuantity(item.id, item.quantity - 1)"
                class="px-2 py-1 bg-gray-100 rounded"
                :disabled="item.quantity <= 1"
              >
                -
              </button>
              <span>{{ item.quantity }}</span>
              <button
                @click="cart.updateQuantity(item.id, item.quantity + 1)"
                class="px-2 py-1 bg-gray-100 rounded"
              >
                +
              </button>
              <button
                @click="cart.removeFromCart(item.id)"
                class="ml-auto text-red-500 hover:text-red-700"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>

        <div class="border-t pt-4 mt-4">
          <div class="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{{ cart.cartTotal }}€</span>
          </div>
          <button
            class="w-full mt-4 bg-[#F5C518] text-[#0a0a0a] font-bold px-6 py-2 rounded-lg transition-colors duration-300 hover:bg-[#FFBD00]"
          >
            Commander
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
</template>
