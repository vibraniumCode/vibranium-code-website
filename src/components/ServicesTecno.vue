<template>
  <section class="bg-[#1d232a] pb-8 px-10">
    <!-- Indicadores y navegación -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-white font-bold font-inter text-5xl">Nuestros Servicios</h2>
      
      <!-- Navegación -->
      <div class="flex gap-2">
        <button 
          @click="prevService"
          class="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200"
        >
          <svg class="w-5 h-5 text-white rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
        <button 
          @click="nextService"
          class="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200"
        >
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Carrusel Container -->
    <div class="relative overflow-hidden">
      <div 
        class="flex transition-transform duration-500 ease-out"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
      >
        <!-- Card de servicio (template para cada una) -->
        <div 
          v-for="(service, index) in services" 
          :key="service.id"
          class="w-full flex-shrink-0 flex"
        >
          <!-- Card Principal (Expandida) -->
          <div 
            :class="[
              'rounded-xl flex p-2 gap-2 transition-all duration-300 ease-out flex-[2]',
              service.bgColor
            ]"
            @mouseenter="handleCardHover(index)"
          >
            <!-- Columna izquierda -->
            <div class="w-[400px] flex flex-col m-6 flex-shrink-0">
              <button 
                type="button" 
                :class="[
                  'font-medium rounded-lg text-sm p-5 inline-flex items-center mb-4 w-fit transition-colors duration-150',
                  service.buttonClass
                ]"
              >
                <component :is="service.icon" class="w-5 h-5" />
              </button>

              <h3 :class="['font-bold font-inter text-4xl mb-4', service.textColor]">
                {{ service.title }}
              </h3>
              <p :class="['max-w-md font-inter text-lg mb-6', service.textColor]">
                {{ service.description }}
              </p>

              <div class="flex items-center gap-4 mt-40">
                <button class="px-6 py-3 bg-[#653bd4] hover:bg-[#5c2ed9] text-white font-medium rounded-lg transition-colors duration-150">
                  Conocer más
                </button>
                <span :class="service.spanColor">{{ service.cta }}</span>
              </div>
            </div>

            <!-- Columna derecha (Imagen principal) -->
            <div class="flex-1 flex justify-center items-center overflow-hidden">
              <img 
                :src="service.image"
                :alt="service.title" 
                class="rounded-lg w-full h-[390px] object-cover transition-transform duration-300 hover:scale-105"
                loading="eager"
              />
            </div>
          </div>

          <!-- Cards secundarias (preview) -->
          <div class="flex flex-col gap-2 ml-4">
            <div 
              v-for="(previewService, previewIndex) in getPreviewServices(index)" 
              :key="previewService.id"
              :class="[
                'rounded-lg flex items-center p-3 cursor-pointer transition-all duration-200 hover:scale-105 flex-1',
                previewService.bgColor,
                'opacity-70 hover:opacity-100'
              ]"
              @click="setActiveService(getActualIndex(index, previewIndex))"
            >
              <div class="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 mr-3">
                <img 
                  :src="previewService.image" 
                  :alt="previewService.title"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 :class="['font-inter font-semibold text-sm', previewService.textColor]">
                  {{ previewService.title }}
                </h4>
                <p :class="['font-inter text-xs opacity-80', previewService.textColor]">
                  {{ previewService.shortDesc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Indicadores de posición -->
    <div class="flex justify-center mt-8 gap-2">
      <button 
        v-for="(service, index) in services" 
        :key="index"
        @click="setActiveService(index)"
        :class="[
          'w-3 h-3 rounded-full transition-all duration-200',
          activeIndex === index ? 'bg-[#653bd4] scale-125' : 'bg-white/30 hover:bg-white/50'
        ]"
      />
    </div>

    <!-- Auto-play toggle -->
    <div class="flex justify-center mt-4">
      <button 
        @click="toggleAutoPlay"
        :class="[
          'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
          isAutoPlaying ? 'bg-[#653bd4] text-white' : 'bg-white/10 text-white hover:bg-white/20'
        ]"
      >
        {{ isAutoPlaying ? 'Pausar' : 'Auto-play' }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Service {
  id: number
  title: string
  description: string
  shortDesc: string
  image: string
  bgColor: string
  textColor: string
  buttonClass: string
  spanColor: string
  cta: string
  icon: any
}

// Iconos SVG como componentes
const ArrowIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
  `
}

const activeIndex = ref(0)
const isAutoPlaying = ref(true)
let autoPlayInterval: NodeJS.Timeout | null = null

// Datos de los servicios
const services: Service[] = [
  {
    id: 1,
    title: 'Software a medida',
    description: 'Desarrollamos aplicaciones personalizadas que se adaptan exactamente a tu negocio. Desde sistemas de gestión interna hasta soluciones innovadoras a medida.',
    shortDesc: 'Apps personalizadas',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop&auto=format&q=75',
    bgColor: 'bg-[#121316]',
    textColor: 'text-white',
    buttonClass: 'text-black bg-white hover:bg-gray-300',
    spanColor: 'text-gray-300',
    cta: 'Transformá tu negocio hoy',
    icon: ArrowIcon
  },
  {
    id: 2,
    title: 'Desarrollo Web',
    description: 'Creamos sitios web modernos, rápidos y optimizados para atraer clientes y reflejar la identidad de tu marca profesionalmente.',
    shortDesc: 'Sitios web modernos',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=75',
    bgColor: 'bg-[#c8bed2]',
    textColor: 'text-[#121316]',
    buttonClass: 'text-white bg-[#121316] hover:bg-gray-600',
    spanColor: 'text-gray-700',
    cta: 'Creá tu presencia online',
    icon: ArrowIcon
  },
  {
    id: 3,
    title: 'Apps Móviles',
    description: 'Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android, con diseños intuitivos y funcionalidades avanzadas.',
    shortDesc: 'Apps iOS y Android',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&auto=format&q=75',
    bgColor: 'bg-gradient-to-br from-[#667eea] to-[#764ba2]',
    textColor: 'text-white',
    buttonClass: 'text-[#667eea] bg-white hover:bg-gray-100',
    spanColor: 'text-white/80',
    cta: 'Llevá tu app al móvil',
    icon: ArrowIcon
  },
  {
    id: 4,
    title: 'E-commerce',
    description: 'Tiendas online completas con gestión de inventario, pasarelas de pago seguras y herramientas de marketing digital integradas.',
    shortDesc: 'Tiendas online completas',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format&q=75',
    bgColor: 'bg-gradient-to-br from-[#f093fb] to-[#f5576c]',
    textColor: 'text-white',
    buttonClass: 'text-[#f5576c] bg-white hover:bg-gray-100',
    spanColor: 'text-white/80',
    cta: 'Vendé online hoy',
    icon: ArrowIcon
  }
]

// Obtener servicios de preview (los que no están activos)
const getPreviewServices = (currentIndex: number) => {
  const otherServices = services.filter((_, index) => index !== currentIndex)
  return otherServices.slice(0, 3) // Máximo 3 previews
}

const getActualIndex = (currentIndex: number, previewIndex: number) => {
  const otherIndices = services
    .map((_, index) => index)
    .filter(index => index !== currentIndex)
  return otherIndices[previewIndex]
}

// Navegación
const nextService = () => {
  activeIndex.value = (activeIndex.value + 1) % services.length
}

const prevService = () => {
  activeIndex.value = activeIndex.value === 0 ? services.length - 1 : activeIndex.value - 1
}

const setActiveService = (index: number) => {
  activeIndex.value = index
}

const handleCardHover = (index: number) => {
  // Efecto adicional en hover si es necesario
}

// Auto-play
const startAutoPlay = () => {
  if (autoPlayInterval) clearInterval(autoPlayInterval)
  autoPlayInterval = setInterval(() => {
    nextService()
  }, 4000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

const toggleAutoPlay = () => {
  isAutoPlaying.value = !isAutoPlaying.value
  if (isAutoPlaying.value) {
    startAutoPlay()
  } else {
    stopAutoPlay()
  }
}

// Lifecycle
onMounted(() => {
  // Preload de todas las imágenes
  services.forEach(service => {
    const img = new Image()
    img.src = service.image
  })
  
  if (isAutoPlaying.value) {
    startAutoPlay()
  }
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}

/* Optimizaciones de rendimiento */
.transition-transform {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
  will-change: transform;
}

.transition-all {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
  will-change: flex, opacity, width, transform;
}
</style>