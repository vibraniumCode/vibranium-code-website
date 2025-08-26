<template>
  <section class="bg-[#1d232a] pb-8 px-4 md:px-10">
    <div class="mb-12 pt-12">
      <div class="max-w-full mx-auto">
        <div class="flex items-start gap-8">
          <div class="flex-1">
            <div class="relative bg-gradient-to-b from-slate-900 to-slate-950 py-20 rounded-xl">
              <!-- Subtítulo -->
              <div class="text-center mb-6">
                <span class="px-3 py-1 text-sm font-semibold text-purple-400 bg-purple-900/30 rounded-full" 
                      data-aos="zoom-in-up"
                      data-aos-duration="600">
                  🚀 Experiencia Digital
                </span>
              </div>

              <!-- Título con subrayado mejorado -->
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white px-4 md:px-48" 
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-duration="800"
                data-aos-offset="0">
                Soluciones digitales a medida que generan 
                <span class="underline decoration-purple-400 decoration-4 underline-offset-4">impacto real</span>
              </h2>

              <!-- Intro -->
              <p class="mt-4 text-center text-gray-400 max-w-2xl mx-auto px-4"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="600"
                data-aos-anchor-placement="center-bottom">
                Conoce nuestras principales áreas de especialización diseñadas para
                optimizar tus procesos, impulsar tus ventas y llevar tu negocio al siguiente nivel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Carrusel Container -->
    <div class="relative overflow-hidden max-w-full mx-auto"
         data-aos="fade-up"
         data-aos-delay="900"
         data-aos-duration="800">
      <div 
        class="flex transition-transform duration-500 ease-out"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
        @mouseleave="handleMouseLeave"
      >
        <!-- Card de servicio (se repite para cada servicio) -->
        <div 
          v-for="(service, index) in services" 
          :key="service.id"
          class="w-full flex-shrink-0 flex flex-col lg:flex-row"
          role="tabpanel"
          :aria-label="`Servicio ${service.title}`"
        >
          <!-- Card Principal Expandida -->
          <div 
            :class="[
              'rounded-xl flex flex-col md:flex-row p-2 gap-2 transition-all duration-300 ease-out flex-[2] mb-4 lg:mb-0',
              service.bgColor
            ]"
            @mouseenter="handleCardHover(index)"
            :data-aos="index === 0 ? 'slide-right' : ''"
            :data-aos-delay="index === 0 ? '1200' : ''"
            :data-aos-duration="index === 0 ? '700' : ''"
          >
            <!-- Columna izquierda - Contenido del servicio -->
            <div class="w-full md:w-[400px] lg:w-[350px] xl:w-[400px] flex flex-col m-4 md:m-6 flex-shrink-0">
              <button 
                type="button" 
                :class="[
                  'font-medium rounded-lg text-sm p-5 inline-flex items-center mb-4 w-fit transition-colors duration-150',
                  service.buttonClass
                ]"
                :aria-label="`Icono de ${service.title}`"
                :data-aos="index === 0 ? 'zoom-in' : ''"
                :data-aos-delay="index === 0 ? '1400' : ''"
                :data-aos-duration="index === 0 ? '400' : ''"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" class="w-5 h-5">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </button>

              <h3 :class="['font-bold font-inter text-2xl md:text-3xl lg:text-4xl mb-4', service.textColor]"
                  :data-aos="index === 0 ? 'fade-right' : ''"
                  :data-aos-delay="index === 0 ? '1500' : ''"
                  :data-aos-duration="index === 0 ? '600' : ''">
                {{ service.title }}
              </h3>
              
              <p :class="['max-w-md font-inter text-base md:text-lg mb-6', service.textColor]"
                 :data-aos="index === 0 ? 'fade-right' : ''"
                 :data-aos-delay="index === 0 ? '1700' : ''"
                 :data-aos-duration="index === 0 ? '600' : ''">
                {{ service.description }}
              </p>

              <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-auto"
                   :data-aos="index === 0 ? 'fade-up' : ''"
                   :data-aos-delay="index === 0 ? '1900' : ''"
                   :data-aos-duration="index === 0 ? '500' : ''">
                <button 
                  class="px-6 py-3 bg-[#653bd4] hover:bg-[#5c2ed9] text-white font-medium rounded-lg transition-colors duration-150 transform hover:scale-105"
                  @click="openServiceDetails(service)"
                >
                  Conocer más
                </button>
                <span :class="['text-sm', service.spanColor]">{{ service.cta }}</span>
              </div>
            </div>

            <!-- Columna derecha - Imagen principal -->
            <div class="flex-1 flex justify-center items-center overflow-hidden min-h-[300px] md:min-h-[390px]">
              <img 
                :src="service.image"
                :alt="`Imagen representativa de ${service.title}`" 
                class="rounded-lg w-full h-[300px] md:h-[390px] object-cover transition-transform duration-300 hover:scale-105"
                loading="eager"
                :data-aos="index === 0 ? 'slide-left' : ''"
                :data-aos-delay="index === 0 ? '1600' : ''"
                :data-aos-duration="index === 0 ? '700' : ''"
              />
            </div>
          </div>

          <!-- Cards de Preview (lado derecho) - Solo en desktop -->
          <div class="hidden lg:flex flex-col gap-2 ml-4 w-[280px]"
               :data-aos="index === 0 ? 'fade-left' : ''"
               :data-aos-delay="index === 0 ? '2100' : ''"
               :data-aos-duration="index === 0 ? '600' : ''">
            <div 
              v-for="(previewService, previewIndex) in getPreviewServices(index)" 
              :key="previewService.id"
              :class="[
                'rounded-lg flex items-center p-3 cursor-pointer transition-all duration-200 hover:scale-105 flex-1',
                previewService.bgColor,
                'opacity-70 hover:opacity-100'
              ]"
              @click="setActiveService(getActualIndex(index, previewIndex))"
              role="button"
              :aria-label="`Ver servicio ${previewService.title}`"
              :data-aos="index === 0 ? 'slide-left' : ''"
              :data-aos-delay="index === 0 ? (2300 + previewIndex * 100).toString() : ''"
              :data-aos-duration="index === 0 ? '400' : ''"
            >
              <!-- Mini imagen -->
              <div class="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 mr-3">
                <img 
                  :src="previewService.image" 
                  :alt="`Miniatura de ${previewService.title}`"
                  class="w-full h-full object-cover"
                />
              </div>
              <!-- Texto del preview -->
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

    <!-- Controles de navegación -->
    <div class="flex justify-between items-center mt-8 max-w-7xl mx-auto px-4"
         data-aos="fade-up"
         data-aos-delay="2000"
         data-aos-duration="500">
      <button 
        @click="prevService" 
        class="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group hover:scale-110"
        aria-label="Servicio anterior"
        data-aos="slide-right"
        data-aos-delay="2200"
        data-aos-duration="400"
      >
        <ChevronLeftIcon class="w-5 h-5 text-white group-hover:text-purple-400 transition-colors" />
      </button>
      
      <!-- Indicadores de posición -->
      <div class="flex gap-2"
           data-aos="zoom-in"
           data-aos-delay="2300"
           data-aos-duration="400">
        <button 
          v-for="(_, index) in services" 
          :key="index"
          @click="setActiveService(index)"
          :class="[
            'w-3 h-3 rounded-full transition-all duration-200 hover:scale-125',
            activeIndex === index ? 'bg-[#653bd4] scale-125' : 'bg-white/30 hover:bg-white/50'
          ]"
          :aria-label="`Ir al servicio ${index + 1}`"
          role="tab"
          :data-aos="'zoom-in'"
          :data-aos-delay="(2400 + index * 50).toString()"
          :data-aos-duration="'300'"
        />
      </div>
      
      <button 
        @click="nextService" 
        class="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group hover:scale-110"
        aria-label="Siguiente servicio"
        data-aos="slide-left"
        data-aos-delay="2200"
        data-aos-duration="400"
      >
        <ChevronRightIcon class="w-5 h-5 text-white group-hover:text-purple-400 transition-colors" />
      </button>
    </div>

    <!-- Preview cards en mobile -->
    <div class="lg:hidden mt-6 px-4"
         data-aos="fade-up"
         data-aos-delay="2100"
         data-aos-duration="600">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div 
          v-for="(previewService, previewIndex) in getPreviewServices(activeIndex)" 
          :key="previewService.id"
          :class="[
            'rounded-lg flex items-center p-3 cursor-pointer transition-all duration-200 hover:scale-105',
            previewService.bgColor,
            'opacity-70 hover:opacity-100'
          ]"
          @click="setActiveService(getActualIndex(activeIndex, previewIndex))"
          :data-aos="'slide-up'"
          :data-aos-delay="(2300 + previewIndex * 100).toString()"
          :data-aos-duration="'400'"
        >
          <div class="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 mr-3">
            <img 
              :src="previewService.image" 
              :alt="`Miniatura de ${previewService.title}`"
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
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

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

const CodeIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
    </svg>
  `
}

const WebIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
    </svg>
  `
}

const SupportIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
  `
}

const AutomationIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>
  `
}

const ChevronLeftIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
    </svg>
  `
}

const ChevronRightIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  `
}

// Estado reactivo
const activeIndex = ref(0)
let autoPlayInterval: NodeJS.Timeout | null = null
let isHovered = ref(false)

// Datos de los 4 servicios - CORREGIDOS
const services: Service[] = [
  {
    id: 1,
    title: 'Software a medida',
    description: 'Desarrollamos aplicaciones personalizadas que se adaptan exactamente a tu negocio. Desde sistemas de gestión interna hasta soluciones innovadoras a medida.',
    shortDesc: 'Apps personalizadas',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop&auto=format&q=75',
    bgColor: 'bg-gradient-to-br from-[#121316] to-[#1d232a]',
    textColor: 'text-white',
    buttonClass: 'text-black bg-white hover:bg-gray-300',
    spanColor: 'text-gray-300',
    cta: 'Transformá tu negocio hoy',
    icon: CodeIcon
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
    icon: WebIcon
  },
  {
    id: 3,
    title: 'Mantenimiento y Soporte',
    description: 'Mantenemos tu software, sitio o base de datos funcionando de forma segura y eficiente. Nos encargamos de actualizaciones, backups y mejoras.',
    shortDesc: 'Mantenimiento 24/7',
    image: 'https://images.unsplash.com/photo-1667372459510-55b5e2087cd0?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bgColor: 'bg-gradient-to-br from-[#667eea] to-[#764ba2]',
    textColor: 'text-white',
    buttonClass: 'text-[#667eea] bg-white hover:bg-gray-100',
    spanColor: 'text-white/80',
    cta: 'Mantené todo funcionando',
    icon: SupportIcon
  },
  {
    id: 4,
    title: 'Automatizaciones',
    description: 'Automatizamos procesos repetitivos o manuales para que ganes tiempo, reduzcas errores y hagas crecer tu negocio con menos esfuerzo.',
    shortDesc: 'Procesos automatizados',
    image: 'https://images.unsplash.com/photo-1639066648921-82d4500abf1a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bgColor: 'bg-gradient-to-br from-green-700 to-[#298d5e]',
    textColor: 'text-white',
    buttonClass: 'text-green-700 bg-white hover:bg-gray-100',
    spanColor: 'text-white/80',
    cta: 'Automatizá tu negocio',
    icon: AutomationIcon
  }
]

// **FUNCIONES PRINCIPALES**

// 1. Obtener los 3 servicios que NO están activos (para mostrar en preview)
const getPreviewServices = (currentIndex: number) => {
  const otherServices = services.filter((_, index) => index !== currentIndex)
  return otherServices.slice(0, 3) // Solo mostramos máximo 3 previews
}

// 2. Convertir el índice del preview al índice real del servicio
const getActualIndex = (currentIndex: number, previewIndex: number) => {
  const otherIndices = services
    .map((_, index) => index)
    .filter(index => index !== currentIndex)
  return otherIndices[previewIndex]
}

// 3. Cambiar servicio activo y refrescar AOS para nuevas animaciones
const setActiveService = (index: number) => {
  activeIndex.value = index
  
  // Refrescar AOS después de cambiar el servicio activo
  nextTick(() => {
    if (window.AOS) {
      window.AOS.refresh()
    }
  })
}

// 4. Avanzar al siguiente servicio
const nextService = () => {
  activeIndex.value = (activeIndex.value + 1) % services.length
  
  nextTick(() => {
    if (window.AOS) {
      window.AOS.refresh()
    }
  })
}

// 5. Servicio anterior
const prevService = () => {
  activeIndex.value = activeIndex.value === 0 ? services.length - 1 : activeIndex.value - 1
  
  nextTick(() => {
    if (window.AOS) {
      window.AOS.refresh()
    }
  })
}

// 6. Pausar autoplay en hover
const handleCardHover = (index: number) => {
  isHovered.value = true
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

// 7. Reanudar autoplay
const handleMouseLeave = () => {
  isHovered.value = false
  startAutoPlay()
}

// 8. Abrir detalles del servicio (función placeholder)
const openServiceDetails = (service: Service) => {
  console.log('Abrir detalles para:', service.title)
  // Aquí puedes agregar lógica para abrir un modal o navegar a otra página
}

// **AUTO-PLAY**
const startAutoPlay = () => {
  if (autoPlayInterval) clearInterval(autoPlayInterval)
  if (!isHovered.value) {
    autoPlayInterval = setInterval(() => {
      nextService()
    }, 6000) // Aumentado a 6 segundos para dar tiempo a las animaciones
  }
}

// **LIFECYCLE**
onMounted(() => {
  // Precargar todas las imágenes para evitar parpadeos
  services.forEach(service => {
    const img = new Image()
    img.src = service.image
  })
  
  // Inicializar AOS si está disponible
  if (window.AOS) {
    window.AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: false, // Permite que las animaciones se repitan
      mirror: false, // No anima al hacer scroll hacia arriba
      offset: 50,
      delay: 100
    })
  }
  
  // Iniciar auto-play después de las animaciones iniciales
  setTimeout(() => {
    startAutoPlay()
  }, 3000)
})

onUnmounted(() => {
  // Limpiar el intervalo cuando se destruye el componente
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
})

// Declarar AOS como global para TypeScript
declare global {
  interface Window {
    AOS: any;
  }
}
</script>

<style scoped>
/* Optimizaciones de rendimiento para transiciones suaves */
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

/* Mejoras adicionales para mobile */
@media (max-width: 768px) {
  .transition-transform {
    will-change: transform;
  }
}

/* Animaciones AOS personalizadas */
[data-aos="fade-zoom-in"] {
  opacity: 0;
  transform: scale(0.6);
  transition-property: transform, opacity;
}

[data-aos="fade-zoom-in"].aos-animate {
  opacity: 1;
  transform: scale(1);
}

[data-aos="slide-right"] {
  transform: translateX(-100px);
  opacity: 0;
}

[data-aos="slide-right"].aos-animate {
  transform: translateX(0);
  opacity: 1;
}

[data-aos="slide-left"] {
  transform: translateX(100px);
  opacity: 0;
}

[data-aos="slide-left"].aos-animate {
  transform: translateX(0);
  opacity: 1;
}

[data-aos="fade-right"] {
  transform: translateX(-50px);
  opacity: 0;
}

[data-aos="fade-right"].aos-animate {
  transform: translateX(0);
  opacity: 1;
}

/* Efecto hover mejorado para botones */
button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(101, 59, 212, 0.3);
}
</style>