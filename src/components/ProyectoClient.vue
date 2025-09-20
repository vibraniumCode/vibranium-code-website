<template>
  <div class="  p-8 bg-gradient-to-b from-[#c0c0c3] to-[#ffffff]">
    <h1 class="text-3xl font-bold text-center mb-12 text-gray-800">Mis Proyectos</h1>
    
    <!-- Fila superior - 2 proyectos -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <!-- Proyecto 1 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2">
            <img 
              :src="projects[0].image" 
              :alt="projects[0].title" 
              class="w-full h-48 md:h-full object-cover"
            >
          </div>
          <div class="md:w-1/2 p-6">
            <h3 class="text-xl font-semibold mb-3 text-gray-800">{{ projects[0].title }}</h3>
            <div class="mb-4">
              <h4 class="font-medium text-gray-700 mb-2">Tecnologías:</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in projects[0].technologies" 
                  :key="tech.name"
                  :class="tech.color"
                  class="text-xs px-2 py-1 rounded"
                >
                  {{ tech.name }}
                </span>
              </div>
            </div>
            <div class="mb-3">
              <h4 class="font-medium text-gray-700">Cliente:</h4>
              <p class="text-gray-600 text-sm">{{ projects[0].client }}</p>
            </div>
            <div class="mb-4">
              <h4 class="font-medium text-gray-700">Descripción:</h4>
              <p class="text-gray-600 text-sm">{{ projects[0].description }}</p>
            </div>
            <button 
              @click="viewProject(projects[0])"
              class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
            >
              Ver proyecto
            </button>
          </div>
        </div>
      </div>

      <!-- Proyecto 2 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2">
            <img 
              :src="projects[1].image" 
              :alt="projects[1].title" 
              class="w-full h-48 md:h-full object-cover"
            >
          </div>
          <div class="md:w-1/2 p-6">
            <h3 class="text-xl font-semibold mb-3 text-gray-800">{{ projects[1].title }}</h3>
            <div class="mb-4">
              <h4 class="font-medium text-gray-700 mb-2">Tecnologías:</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in projects[1].technologies" 
                  :key="tech.name"
                  :class="tech.color"
                  class="text-xs px-2 py-1 rounded"
                >
                  {{ tech.name }}
                </span>
              </div>
            </div>
            <div class="mb-3">
              <h4 class="font-medium text-gray-700">Cliente:</h4>
              <p class="text-gray-600 text-sm">{{ projects[1].client }}</p>
            </div>
            <div class="mb-4">
              <h4 class="font-medium text-gray-700">Descripción:</h4>
              <p class="text-gray-600 text-sm">{{ projects[1].description }}</p>
            </div>
            <button 
              @click="viewProject(projects[1])"
              class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
            >
              Ver proyecto
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Fila inferior - 1 proyecto que ocupa todo el ancho -->
    <div class="max-w-full">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div class="flex flex-col lg:flex-row">
          <div class="lg:w-1/3">
            <img 
              :src="projects[2].image" 
              :alt="projects[2].title" 
              class="w-full h-64 lg:h-full object-cover"
            >
          </div>
          <div class="lg:w-2/3 p-8">
            <h3 class="text-2xl font-semibold mb-4 text-gray-800">{{ projects[2].title }}</h3>
            <div class="mb-6">
              <h4 class="font-medium text-gray-700 mb-3">Tecnologías:</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in projects[2].technologies" 
                  :key="tech.name"
                  :class="tech.color"
                  class="text-sm px-3 py-1 rounded"
                >
                  {{ tech.name }}
                </span>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 class="font-medium text-gray-700 mb-2">Cliente:</h4>
                <p class="text-gray-600">{{ projects[2].client }}</p>
              </div>
              <div v-if="projects[2].duration">
                <h4 class="font-medium text-gray-700 mb-2">Duración:</h4>
                <p class="text-gray-600">{{ projects[2].duration }}</p>
              </div>
            </div>
            <div class="mb-6">
              <h4 class="font-medium text-gray-700 mb-2">Descripción:</h4>
              <p class="text-gray-600">{{ projects[2].description }}</p>
            </div>
            <div class="flex gap-3">
              <button 
                @click="viewProject(projects[2])"
                class="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
              >
                Ver proyecto
              </button>
              <button 
                v-if="projects[2].demoUrl"
                @click="viewDemo(projects[2])"
                class="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50 transition-colors"
              >
                Ver demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Importar las imágenes (Opción 1 - Recomendada)
import proyecto1_2 from '@/assets/proyecto_1_2.jpeg'
import proyecto1_1 from '@/assets/proyecto_1_1.jpeg'

// Datos de los proyectos
const projects = ref([
  {
    id: 1,
    title: 'E-commerce Moderno',
    image: proyecto1_2,
    client: 'TechStore Solutions',
    description: 'Plataforma completa de e-commerce con carrito de compras, pasarela de pagos y panel administrativo. Desarrollada para una tienda de tecnología que necesitaba modernizar su presencia online.',
    technologies: [
      { name: 'React', color: 'bg-blue-100 text-blue-800' },
      { name: 'Node.js', color: 'bg-green-100 text-green-800' },
      { name: 'MongoDB', color: 'bg-purple-100 text-purple-800' },
      { name: 'Express', color: 'bg-yellow-100 text-yellow-800' }
    ],
    projectUrl: '#'
  },
  {
    id: 2,
    title: 'App de Gestión Médica',
    image: proyecto1_1,
    client: 'Clínica San Rafael',
    description: 'Aplicación móvil para gestión de citas médicas, historiales clínicos y comunicación paciente-doctor. Desarrollada para optimizar los procesos internos de una clínica privada.',
    technologies: [
      { name: 'React Native', color: 'bg-blue-100 text-blue-800' },
      { name: 'Firebase', color: 'bg-red-100 text-red-800' },
      { name: 'TypeScript', color: 'bg-indigo-100 text-indigo-800' }
    ],
    projectUrl: '#'
  },
  {
    id: 3,
    title: 'Dashboard de Analytics Empresarial',
    image: proyecto1_1,
    client: 'DataCorp Internacional',
    duration: '8 meses',
    description: 'Sistema completo de análisis de datos empresariales con visualizaciones interactivas, reportes automatizados y alertas en tiempo real. El proyecto incluyó la migración de datos legacy, implementación de APIs RESTful y un sistema de autenticación robusto. La plataforma procesa más de 1 millón de registros diarios y genera insights para la toma de decisiones estratégicas.',
    technologies: [
      { name: 'Vue.js', color: 'bg-green-100 text-green-800' },
      { name: 'Django', color: 'bg-green-100 text-green-800' },
      { name: 'PostgreSQL', color: 'bg-orange-100 text-orange-800' },
      { name: 'D3.js', color: 'bg-purple-100 text-purple-800' },
      { name: 'Docker', color: 'bg-gray-100 text-gray-800' },
      { name: 'Redis', color: 'bg-red-100 text-red-800' }
    ],
    projectUrl: '#',
    demoUrl: '#'
  }
])

// Métodos
const viewProject = (project) => {
  console.log('Ver proyecto:', project.title)
  // Aquí puedes implementar la navegación o modal
  // this.$router.push(`/proyecto/${project.id}`)
}

const viewDemo = (project) => {
  console.log('Ver demo:', project.title)
  // Aquí puedes abrir el demo en una nueva pestaña
  // window.open(project.demoUrl, '_blank')
}
</script>