<script setup>
import { motion } from "motion-v";
defineProps({
  label: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
    default: () => {},
    required: false,
  },
});
</script>

<template>
  <motion.button
    class="bg-[#F5C518] text-[#0a0a0a] font-bold px-6 py-2 rounded-lg transition-colors duration-300 hover:bg-[#FFBD00] transition-all duration-300"
    @click="onClick"
    :whileHover="{ scale: 1.02 }"
  >
    {{ label }}
  </motion.button>
</template>
