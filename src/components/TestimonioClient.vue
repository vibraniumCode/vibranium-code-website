<template>
  <section class="relative overflow-hidden bg-gradient-to-b from-gray-200 to-white py-20 mt-32 mb-6 font-inter px-4 sm:px-6 lg:px-8">
    <div class="text-4xl sm:text-6xl mt-28 leading-tight tracking-tight">
    <h1 class="font-bold text-gray-900 text-center mb-2">
      Que dice nuestro Cliente<span class="text-purple-700">?</span>
    </h1>
  </div>
    <img
      :src="waves"
      alt="waves"
      class="absolute top-0 left-0 w-full pointer-events-none select-none"
    />
    <div class="relative z-10">
      <div class="text-center mb-12">
        <div class="text-8xl font-serif text-gray-900 mt-10">“</div>
        <div class="max-w-3xl mx-auto text-gray-600 text-xl">
          <p>{{ testimonios[testimonioActivo].comentario }}</p>
        </div>
      </div>
      <div class="flex justify-center gap-6 items-center">
        <template v-for="(testimonio, index) in testimonios" :key="index">
          <img
            :src="testimonio.avatar"
            alt="cliente"
            @click="testimonioActivo = index"
            :class="[
              'rounded-full cursor-pointer transition duration-300',
              index === testimonioActivo
                ? 'w-20 h-20 border-4 border-[#8152e3] shadow-lg'
                : 'w-10 h-10 grayscale opacity-50 hover:opacity-100 hover:grayscale-0'
            ]"
          />
        </template>
      </div>
      <div class="text-center mt-4">
        <h3 class="font-bold text-purple-800 text-xl">{{ testimonios[testimonioActivo].nombre }}</h3>
        <p class="text-gray-500 text-sm">{{ testimonios[testimonioActivo].cargo }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import waves from '../assets/waves.svg'

const testimonios = ref([
  {
    nombre: 'Cristian Julca',
    cargo: 'Gerente de cocina - Break Burger',
    comentario: 'Nos entendieron desde el primer momento. El sistema que desarrollaron se adapta perfecto a nuestra operativa diaria.',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg'
  },
  {
    nombre: 'Jaqueline Domínguez',
    cargo: 'Administradora - Yaqueline Company',
    comentario: 'La web que nos entregaron es moderna, rápida y refleja exactamente lo que queríamos mostrar.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    nombre: 'César Pereyra',
    cargo: 'Productor de seguros - CPS',
    comentario: 'El sistema a medida me permitió automatizar tareas que antes llevaba horas.',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg'
  },
  {
    nombre: 'Jaqueline Domínguez',
    cargo: 'Administradora - Yaqueline Company',
    comentario: 'La web que nos entregaron es moderna, rápida y refleja exactamente lo que queríamos mostrar.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
])

const testimonioActivo = ref(0)
</script>
