<template>
  <section class="pt-10 font-inter text-center text-white to-white relative z-10">
    <div class="max-w-6xl mx-auto px-4">
      <div class="max-8-xl mx-auto mb-12 px-4 md:px-52">
        <h1 class="text-gray-900 font-bold text-4xl sm:text-6xl mt-10 mb-4 leading-tight tracking-tight">
          Servicios
        </h1>
        <p class="text-gray-600 mb-12 text-xl">
          Creamos soluciones tecnológicas <span class="text-indigo-700">personalizadas</span> para impulsar tu negocio. Estos son algunos de los servicios que ofrecemos:
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <!-- CARD 1 -->
        <div
          :class="[
            'bg-white rounded-sm p-6 sm:border-b-2 transition duration-300 group cursor-pointer',
            hoveredCard === 'software' ? 'border-indigo-500 sm:border-b-4' : 'border-indigo-300'
          ]"
          @mouseenter="hoveredCard = 'software'"
        >
          <div class="flex justify-center items-center h-16 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-600 group-hover:scale-150 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9.75 19.5h4.5M3 5.25h18v11.25H3z" />
            </svg>
          </div>
          <h3 class="font-semibold text-md text-gray-700 tracking-widest">SOFTWARE A MEDIDA</h3>
        </div>

        <!-- CARD 2 -->
        <div
          :class="[
            'bg-white rounded-sm p-6 sm:border-b-2 transition duration-300 group cursor-pointer',
            hoveredCard === 'web' ? 'border-indigo-500 sm:border-b-4' : 'border-indigo-300'
          ]"
          @mouseenter="hoveredCard = 'web'"
          
        >
          <div class="flex justify-center items-center h-16 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-yellow-600 group-hover:scale-150 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4.5 4.5h15v15h-15z M9 18v-3h6v3" />

            </svg>
          </div>
          <h3 class="font-semibold text-md text-gray-700 tracking-widest">DESARROLLO WEB</h3>
        </div>

        <!-- CARD 3 -->
        <div
          :class="[
            'bg-white rounded-sm p-6 sm:border-b-2 transition duration-300 group cursor-pointer',
            hoveredCard === 'mantenimiento' ? 'border-indigo-500 sm:border-b-4' : 'border-indigo-300'
          ]"
          @mouseenter="hoveredCard = 'mantenimiento'"
        >
          <div class="flex justify-center items-center h-16 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-cyan-600 group-hover:scale-150 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 17h5l-1.405-1.405M4 4v16h16V4H4zm4 4h8M4 12h8" />
            </svg>
          </div>
          <h3 class="font-semibold text-md text-gray-700 tracking-widest">MANTENIMIENTO</h3>
        </div>

        <!-- CARD 4 -->
        <div
          :class="[
            'bg-white rounded-sm p-6 sm:border-b-2 transition duration-300 group cursor-pointer',
            hoveredCard === 'automatizacion' ? 'border-indigo-500 sm:border-b-4' : 'border-indigo-300'
          ]"
          @mouseenter="hoveredCard = 'automatizacion'"
        >
          <div class="flex justify-center items-center h-16 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-orange-600 group-hover:scale-150 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="font-semibold text-md text-gray-700 tracking-widest">AUTOMATIZACIONES</h3>
        </div>
      </div>

      <!-- TEXTO DINÁMICO -->
      <div class="max-w-3xl mx-auto mt-20 text-center text-gray-600 text-sm md:text-lg transition duration-300 min-h-[120px]">
        <p v-if="hoveredCard === 'software'">
          Desarrollamos aplicaciones personalizadas que se adaptan exactamente a tu negocio. Desde sistemas de gestión interna hasta soluciones innovadoras a medida.
        </p>
        <p v-else-if="hoveredCard === 'web'">
          Creamos sitios web modernos, rápidos y optimizados para atraer clientes y reflejar la identidad de tu marca profesionalmente.
        </p>
        <p v-else-if="hoveredCard === 'mantenimiento'">
          Mantenemos tu software, sitio o base de datos funcionando de forma segura y eficiente. Nos encargamos de actualizaciones, backups y mejoras.
        </p>
        <p v-else-if="hoveredCard === 'automatizacion'">
          Automatizamos procesos repetitivos o manuales para que ganes tiempo, reduzcas errores y hagas crecer tu negocio con menos esfuerzo.
        </p>
        <p v-else>
          Brindamos soluciones integrales en tecnología para potenciar negocios. Desde el desarrollo web y de software personalizado hasta el soporte técnico y administración de bases de datos.
        </p>
      </div>
    </div>
    <div class="bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400
        border-4 border-white shadow-lg shadow-indigo-400/50
        max-w-6xl mx-auto p-4 rounded-2xl mt-20 mb-20">
      <div class="flex justify-between items-center">
        <div class="flex flex-col items-center">
          <h3 class="text-center text-xl font-inter mb-6 px-12"><span class="text-black">Nuestra experiencia nos avala:</span> 4 clientes activos, 100% de satisfacción y soluciones que realmente hacen la diferencia.</h3>
          
          <div class="flex justify-center items-center mt-6">
            <div class="flex -space-x-6 rtl:space-x-reverse mx-2 mt-6">
                <img title="Break Burger - Desarrollo de sistema de pedidos" class="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300" src="../assets/cliente1.avif" alt="Cliente 1">
                <img title="Cesar Pereyra Seguros - Desarrollo de Landing Page" class="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300" src="../assets/cliente2.png" alt="Cliente 2">
                <img title="Jaqueline - Desarrollo de sistema de facturación" class="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300" src="../assets/cliente3.png" alt="Cliente 3">
                <img title="Inmobiliaria Ezequiel - Desarrollo de Landing Page" class="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300" src="../assets/cliente4.jpg" alt="Cliente 4">
            </div>
            <div>
              <p class="text-sm italic text-white mt-6">“Nos ayudaron a crecer con una app impecable” – Break Burger</p>
            </div>
          </div>
        </div>
        <div>
          <img src="../assets/team.svg" alt="team" class="w-[100%] -translate-x-10 -translate-y-32 md:-translate-x-50 md:-translate-y-50 relative" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const hoveredCard = ref(null)
</script>
