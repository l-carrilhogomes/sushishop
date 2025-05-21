<script setup>
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
  <button
    class="bg-yellow-400 text-[#0a0a0a] font-bold px-6 py-2 rounded-lg transition-colors duration-300"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>
