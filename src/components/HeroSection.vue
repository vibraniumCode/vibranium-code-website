<template>
  <section class="mt-10 py-20 font-inter text-center text-white to-white relative z-10 ">
    <div class="flex justify-center mb-6 ">
      <div class="bg-[#9e82e8] text-lg font-semibold text-white px-4 py-2 rounded-full shadow-md backdrop-blur-sm flex gap-2 items-center">
        <span class="bg-green-400 w-2 h-2 rounded-full animate-pulse"></span>
        <span>4+ Clientes</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning-charge" viewBox="0 0 16 16">
          <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z"/>
        </svg>  
        <a href="#more" class=" hover:text-indigo-600 transition">5+ Proyectos →</a>
      </div> 
    </div>
    <h1 class="text-gray-900 font-bold text-6xl sm:text-7xl mt-10 mb-4 leading-tight tracking-tight animate-fade-in">
        Impulsamos tu <span class="bg-gradient-to-r from-[#653bd4] to-[#8152e3] bg-clip-text text-transparent">futuro digital</span> <br />con <span class="underline decoration-[#8152e3]">tecnología</span> de alto nivel
    </h1>
    <h2 class="text-4xl font-semibold text-slate-700 my-8 animate-fade-in-left">Desarrollamos software y <br/>  <span class="bg-gradient-to-r from-gray-800 to-gray-400 bg-clip-text text-transparent">sitios web que transforman negocios</span></h2>
    <p class="text-xl text-slate-600 mt-6 animate-fade-in-right">Confiá en Vibranium Code para llevar tus ideas al siguiente nivel</p>
    <div class="text-center mt-10 mb-10 animate-expand-vertically">
      <a href="#contacto" 
        class="inline-block bg-[#ffce46] text-black font-bold px-6 py-4 cursor-pointer rounded-2xl shadow-lg shadow-gray-400 hover:bg-[#ffcb36] transition">
        <div class="flex items-center justify-center gap-2 group">
          <span>EMPEZÁ TU PROYECTO</span>
          <div class="bg-white rounded-2xl shadow-md transition-transform duration-300 group-hover:translate-x-1">
            <svg class="m-2 <!--transition-all duration-500 group-hover:translate-x-1-->" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.25 9L14.25 9M10.5 13.5L14.4697 9.53033C14.7197 9.28033 14.8447 9.15533 14.8447 9C14.8447 8.84467 14.7197 8.71967 14.4697 8.46967L10.5 4.5" stroke="black" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
        </div>
      </a>
      <a href="#servicios" 
        class="inline-block bg-[#f8d574] text-black font-bold p-6 cursor-pointer rounded-2xl shadow-lg shadow-gray-400 hover:bg-[#ffcb36] transition ml-4">
          <span>SABER MÁS</span>
      </a>
    </div>
    <!--<div class="mx-auto mt-20 w-[30%] h-[2px] rounded-full animate-gradient-x bg-[length:200%_100%] bg-gradient-to-r from-indigo-500 via-indigo-400 to-red-300"></div>-->
    <div class="my-24 animate-fade-in">
      <div class="flex justify-center items-center mt-6 mx-16 rounded-2xl mb-6 bg-[#4923c6] p-4 text-white">
        <div class="flex flex-col items-start">
          <p class="text-yellow-500 font-semibold text-3xl">{{ displayCount }}+</p>
          <p class=" font-inter font-bold">Años de experiencia</p>
        </div>
        <div class="separator h-10 bg-gray-300 mx-8" style="width: 1px;"></div>
      <div class="flex flex-col items-start">
          <p class="text-yellow-500 font-semibold text-3xl">{{displayClientes}}+</p>
          <p class=" font-inter font-bold">Clientes felices</p>
        </div>
        <div class="separator h-10 bg-gray-300 mx-8" style="width: 1px;"></div>
      <div class="flex flex-col items-start">
          <p class="text-yellow-500 font-semibold text-3xl">{{displayProyectos}}+</p>
          <p class=" font-inter font-bold">Proyectos finalizados</p>
        </div>
        <div class="separator h-10 bg-gray-300 mx-8" style="width: 1px;"></div>
      <div class="flex flex-col items-start">
          <p class="text-yellow-500 font-semibold text-3xl">{{displayMiembros}}</p>
          <p class=" font-inter font-bold">Miembros del equipo</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const anio = 2
const clientes = 4
const proyectos = 5
const miembros = 1
const duration = 1000 // en ms

const displayCount = ref(0)
const displayClientes = ref(0)
const displayProyectos = ref(0)
const displayMiembros = ref(0)

onMounted(() => {
  const startTime = performance.now()

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    displayCount.value = Math.floor(progress * anio)
    displayClientes.value = Math.floor(progress * clientes)
    displayProyectos.value = Math.floor(progress * proyectos)
    displayMiembros.value = Math.floor(progress * miembros)

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      displayCount.value = anio
      displayClientes.value = clientes
      displayProyectos.value = proyectos
      displayMiembros.value = miembros
    }
  }

  // 👇 Esta línea es clave: iniciar la animación
  requestAnimationFrame(animate)
})
</script>

