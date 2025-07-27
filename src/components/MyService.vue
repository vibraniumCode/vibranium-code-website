<template>
  <section class="pt-4 font-inter text-center text-white to-white relative z-10 m-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap- items-center max-w-7xl mx-auto mb-12 px-4">
      <!-- Columna del texto -->
      <div class="relative rounded-xl overflow-hidden p-8 md:p-12">
        <!-- Glow radial amarillo suave -->
        <div
          class="absolute inset-0 z-0"
          style="
            background-image: radial-gradient(circle at center, #FFF991 0%, transparent 70%);
            opacity: 0.6;
            mix-blend-mode: multiply;
          "
        ></div>
        <!-- Contenido por encima del fondo -->
        <div class="relative z-10">
          <h2 class="text-black mb-8 text-2xl sm:text-4xl lg:text-6xl font-bold text-left">
            Creamos soluciones <br />
            tecnológicas <span class="bg-gradient-to-r from-[#b981ff] to-[#8152e3] bg-clip-text text-transparent font-bold">personalizadas</span>
          </h2>
          <p class="text-gray-600 text-lg lg:text-xl text-left">
            Diseñamos y desarrollamos herramientas digitales personalizadas que <span class="underline decoration-wavy decoration-red-400">optimizan tus procesos</span>,
            mejoran la experiencia de tus clientes y potencian tu marca.
          </p>
        </div>
      </div>
      <!-- Columna de la imagen -->
      <div class="flex justify-center lg:justify-end">
        <img
          src="../assets/tecno.webp"
          alt="Tecnología"
          class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto object-contain"
        />
      </div>
    </div>
    <div class="max-w-8xl mx-auto mt-32 px-4">
      <div class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12 text-black text-xl">
        <!-- SOFTWARE A MEDIDA -->
        <div class="bg-green-100 text-green-800 rounded-xl p-10 border border-green-200">
            <div class=" place-items-center">
                <div class="bg-green-500 w-20 h-20 rounded-xl mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="white" viewBox="0 0 24 24">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                    <svg class="absolute" viewBox="0 0 120 120 z-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  <path d="M1.91734 2.01577L25.1499 23.4512L50.0672 0.330973L26.947 25.2483L63.5456 63.644L25.1499 27.0455L0.232543 50.1656L23.3527 25.2483L1.91734 2.01577Z" fill="#9C8EF4" stroke="#9C8EF4"></path>  <path d="M1.91734 2.01577L25.1499 23.4512L50.0672 0.330973L26.947 25.2483L63.5456 63.644L25.1499 27.0455L0.232543 50.1656L23.3527 25.2483L1.91734 2.01577Z" fill="green" stroke="green"></path></svg>
                </div>
                <h5 class="mb-2.5 font-bold">SOFTWARE A MEDIDA</h5>
                <p class="">Desarrollamos aplicaciones personalizadas que se adaptan exactamente a tu negocio. Desde sistemas de gestión interna hasta soluciones innovadoras a medida.</p>
            </div>
        </div>
        <!-- DESARROLLO WEB -->
        <div class="bg-blue-100 text-blue-800 rounded-xl p-10 border border-blue-200">
          <div class="place-items-center">
            <div class="bg-blue-500 w-20 h-20 rounded-xl mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="white" viewBox="0 0 24 24">
                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm2 2h12v2H6V7zm0 4h8v2H6v-2zm0 4h10v2H6v-2z"/>
              </svg>
              <svg class="absolute" viewBox="0 0 120 120 z-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  <path d="M1.91734 2.01577L25.1499 23.4512L50.0672 0.330973L26.947 25.2483L63.5456 63.644L25.1499 27.0455L0.232543 50.1656L23.3527 25.2483L1.91734 2.01577Z" fill="#9C8EF4" stroke="#9C8EF4"></path>  <path d="M1.91734 2.01577L25.1499 23.4512L50.0672 0.330973L26.947 25.2483L63.5456 63.644L25.1499 27.0455L0.232543 50.1656L23.3527 25.2483L1.91734 2.01577Z" fill="blue" stroke="blue"></path></svg>
            </div>
            <h5 class="mb-2.5 font-bold">DESARROLLO WEB</h5>
            <p>Creamos sitios web modernos, rápidos y optimizados para atraer clientes y reflejar la identidad de tu marca profesionalmente.</p>
          </div>
        </div>

        <!-- MANTENIMIENTO -->
        <div class="bg-orange-100 text-orange-800 rounded-xl p-10 border border-orange-200">
          <div class="grid place-items-center text-center">
            <div class="bg-orange-500 w-20 h-20 rounded-xl mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="white" viewBox="0 0 24 24">
                <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
              </svg>
              <svg class="absolute" viewBox="0 0 120 120 z-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  <path d="M1.91734 2.01577L25.1499 23.4512L50.0672 0.330973L26.947 25.2483L63.5456 63.644L25.1499 27.0455L0.232543 50.1656L23.3527 25.2483L1.91734 2.01577Z" fill="#9C8EF4" stroke="#9C8EF4"></path>  <path d="M1.91734 2.01577L25.1499 23.4512L50.0672 0.330973L26.947 25.2483L63.5456 63.644L25.1499 27.0455L0.232543 50.1656L23.3527 25.2483L1.91734 2.01577Z" fill="orange" stroke="orange"></path></svg>
            </div>
            <h5 class="mb-2.5 font-bold">MANTENIMIENTO</h5>
            <p>Mantenemos tu software, sitio o base de datos funcionando de forma segura y eficiente. Nos encargamos de actualizaciones, backups y mejoras.</p>
          </div>
        </div>

        <!-- AUTOMATIZACIONES -->
        <div class="bg-purple-100 text-purple-800 rounded-xl p-10 border border-purple-200">
          <div class="grid place-items-center text-center">
            <div class="bg-purple-500 w-20 h-20 rounded-xl mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="white" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg class="absolute" viewBox="0 0 120 120 z-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  <path d="M1.91734 2.01577L25.1499 23.4512L50.0672 0.330973L26.947 25.2483L63.5456 63.644L25.1499 27.0455L0.232543 50.1656L23.3527 25.2483L1.91734 2.01577Z" fill="#9C8EF4" stroke="#9C8EF4"></path>  <path d="M1.91734 2.01577L25.1499 23.4512L50.0672 0.330973L26.947 25.2483L63.5456 63.644L25.1499 27.0455L0.232543 50.1656L23.3527 25.2483L1.91734 2.01577Z" fill="purple" stroke="purple"></path></svg>
            </div>
            <h5 class="mb-2.5 font-bold">AUTOMATIZACIONES</h5>
            <p>Automatizamos procesos repetitivos o manuales para que ganes tiempo, reduzcas errores y hagas crecer tu negocio con menos esfuerzo.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const hoveredCard = ref(null)
</script>
