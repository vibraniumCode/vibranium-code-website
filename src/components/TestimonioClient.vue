<template>
  <section class="py-20 rounded-3xl mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ">
    <div class="text-center mb-12">
      <div class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">“</div>
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900">Nuestra gente está diciendo</h2>
      <div class="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
        <p>
          <!--Nos entendieron desde el primer momento. El sistema que desarrollaron se adapta perfecto a nuestra operativa diaria.-->
          {{ testimonios[testimonioActivo].comentario}}
        </p>
      </div>
    </div>

    <div class="flex justify-center gap-6 items-center mt-10">
      <template v-for="(testimonio, index) in testimonios" _ley="index">
        <img 
          :src="testimonio.avatar" 
          alt="cliente" 
          @click="testimonioActivo = index"
          :class="[
            'rounded-full cursor-pointer transition duration-300',
            index === testimonioActivo
              ? 'w-20 h-20 border-4 border-indigo-500 shadow-lg'
              : 'w-10 h-10 grayscale opacity-50 hover:opacity-100 hover:grayscale-0'
          ]"
      </template>
    </div>
    <div class="text-center mt-4">
      <h3 class="font-bold text-gray-800">{{ testimonios[testimonioActivo].nombre }}</h3>
      <p class="text-gray-500 text-sm">{{testimonios[testimonioActivo].cargo}}</p>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// Testimonios data
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
  }
])

const testimonioActivo = ref(0)

</script>