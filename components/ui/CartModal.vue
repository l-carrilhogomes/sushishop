<script setup>
import { useCart } from "~/stores/cart";
import { X } from "lucide-vue-next";
import { motion } from "motion-v";
import { computed, ref } from "vue";

const cart = useCart();
const deliveryInfo = ref({
  street: "",
  postalCode: "",
  city: "",
  phone: "",
  additionalInfo: "",
});

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

const FREE_DELIVERY = 50;
const DELIVERY_FEE = 2.99;

const fraisLivraison = computed(() => {
  return cart.cartTotal >= FREE_DELIVERY ? 0 : DELIVERY_FEE;
});

const totalAvecLivraison = computed(() => {
  return cart.cartTotal + fraisLivraison.value;
});

const handleOrder = () => {
  if (
    !deliveryInfo.value.street ||
    !deliveryInfo.value.postalCode ||
    !deliveryInfo.value.city ||
    !deliveryInfo.value.phone
  ) {
    alert("Veuillez remplir tous les champs obligatoires");
    return;
  }
  // TODO: Implement order logic
  console.log("Order placed with address:", deliveryInfo.value);
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
                @click="
                  item.quantity <= 1
                    ? cart.removeFromCart(item.id)
                    : cart.updateQuantity(item.id, item.quantity - 1)
                "
                class="px-2 py-1 bg-gray-100 rounded"
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
            <span>Sous-total</span>
            <span>{{ cart.cartTotal.toFixed(2) }}€</span>
          </div>

          <div class="flex justify-between text-sm mt-2">
            <span>Frais de livraison</span>
            <span>{{ fraisLivraison.toFixed(2) }}€</span>
          </div>

          <div
            v-if="cart.cartTotal < FREE_DELIVERY"
            class="text-sm text-gray-600 mt-2"
          >
            Plus que
            {{ (FREE_DELIVERY - cart.cartTotal).toFixed(2) }}€ pour la livraison
            gratuite !
          </div>
          <div v-else class="text-sm text-green-600 mt-2">
            Livraison gratuite !
          </div>

          <div class="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span>{{ totalAvecLivraison.toFixed(2) }}€</span>
          </div>

          <div class="mt-6 space-y-4">
            <h3 class="text-lg font-semibold text-gray-800">
              Adresse de livraison
            </h3>

            <div class="grid grid-cols-1 gap-4">
              <div>
                <label
                  for="street"
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  Adresse <span class="text-red-500">*</span>
                </label>
                <input
                  id="street"
                  v-model="deliveryInfo.street"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5C518] focus:border-transparent"
                  placeholder="123 rue de la Paix"
                />
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label
                    for="postalCode"
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Code postal <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="postalCode"
                    v-model="deliveryInfo.postalCode"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5C518] focus:border-transparent"
                    placeholder="75000"
                  />
                </div>
                <div>
                  <label
                    for="city"
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Ville <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="city"
                    v-model="deliveryInfo.city"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5C518] focus:border-transparent"
                    placeholder="Paris"
                  />
                </div>
              </div>

              <div>
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  Téléphone <span class="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  v-model="deliveryInfo.phone"
                  type="tel"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5C518] focus:border-transparent"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div>
                <label
                  for="additionalInfo"
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  Informations complémentaires
                </label>
                <textarea
                  id="additionalInfo"
                  v-model="deliveryInfo.additionalInfo"
                  rows="2"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5C518] focus:border-transparent"
                  placeholder="Code d'entrée, étage, digicode..."
                ></textarea>
              </div>
            </div>
          </div>

          <button
            @click="handleOrder"
            class="w-full mt-6 bg-[#F5C518] text-[#0a0a0a] font-bold px-6 py-2 rounded-lg transition-colors duration-300 hover:bg-[#FFBD00]"
          >
            Commander
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
</template>
