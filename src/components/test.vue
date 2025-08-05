<template>
  <div
    class="cursor-pointer select-none p-2 flex items-center justify-center"
    @mouseenter="animateIcon"
    @mouseleave="resetIcon"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="stroke"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      v-bind="$attrs"
    >
      <path
        ref="path1"
        d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"
        :style="path1Style"
        class="transition-all duration-300"
      />
      <path
        ref="path2" 
        d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"
        :style="path2Style"
        class="transition-all duration-[400ms]"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Props
const props = defineProps({
  width: {
    type: Number,
    default: 28
  },
  height: {
    type: Number,
    default: 28
  },
  strokeWidth: {
    type: Number,
    default: 2
  },
  stroke: {
    type: String,
    default: '#ffffff'
  }
})

// Estado reactivo para las animaciones
const isAnimating = ref(false)

// Estilos computados para las animaciones
const path1Style = computed(() => ({
  strokeDasharray: '100',
  strokeDashoffset: isAnimating.value ? '0' : '100',
  opacity: isAnimating.value ? '1' : '0',
  transitionDelay: isAnimating.value ? '100ms' : '0ms'
}))

const path2Style = computed(() => ({
  strokeDasharray: '100', 
  strokeDashoffset: isAnimating.value ? '0' : '100',
  opacity: isAnimating.value ? '1' : '0',
  transitionDelay: isAnimating.value ? '200ms' : '0ms'
}))

// Métodos para animar
const animateIcon = () => {
  isAnimating.value = true
}

const resetIcon = () => {
  isAnimating.value = false
}
</script>

<style scoped>
path {
  transition: stroke-dashoffset 0.3s ease, opacity 0.3s ease;
}
</style>