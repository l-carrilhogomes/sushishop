import { defineStore } from "pinia";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export const useCart = defineStore("cartStore", {
  state: () => ({
    cartItems: [] as CartItem[],
  }),

  getters: {
    cartTotal: (state) => {
      return state.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },

    cartItemsCount: (state) => {
      return state.cartItems.reduce((count, item) => {
        return count + item.quantity;
      }, 0);
    },
  },

  actions: {
    addToCart(item: CartItem) {
      const existingItem = this.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartItems.push({
          ...item,
          quantity: 1,
        });
      }
    },

    removeFromCart(itemId: number) {
      const index = this.cartItems.findIndex((item) => item.id === itemId);
      if (index > -1) {
        this.cartItems.splice(index, 1);
      }
    },

    updateQuantity(itemId: number, quantity: number) {
      const item = this.cartItems.find((item) => item.id === itemId);
      if (item) {
        item.quantity = quantity;
      }
    },

    clearCart() {
      this.cartItems = [];
    },
  },
});
