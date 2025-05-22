<script setup>
import { ref } from "vue";
import { ShoppingCart } from "lucide-vue-next";
import CartModal from "~/components/ui/CartModal.vue";
import { useCart } from "~/stores/cart";

const isCartOpen = ref(false);
const cart = useCart();

const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value;
};
</script>

<template>
  <div class="fixed bottom-8 right-8 z-40">
    <button
      @click="toggleCart"
      class="bg-[#F5C518] text-[#0a0a0a] p-4 rounded-full shadow-lg hover:bg-[#FFBD00] transition-all duration-300 relative"
    >
      <ShoppingCart class="w-6 h-6" />
      <div
        v-if="cart.cartItemsCount > 0"
        class="absolute -top-2 -right-2 bg-white text-[#0a0a0a] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
      >
        {{ cart.cartItemsCount }}
      </div>
    </button>
  </div>
  <CartModal :isOpen="isCartOpen" @close="isCartOpen = false" />
</template>
