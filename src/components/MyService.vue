<template>
  <section class="bg-[#1d232a] pt-6 pb-4">
  <div class="bg-gradient-to-b from-[#c0c0c3] to-[#f8f8fb] mx-10 rounded-xl font-inter text-center text-white  relative z-10" 
  data-aos="zoom-in"
  data-aos-duration="1000" 
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap- items-center max-w-7xl mx-auto px-4 py-12">
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
          <h2 class="text-black mb-8 text-2xl sm:text-4xl lg:text-6xl font-bold text-left" data-aos="fade-up">
            Creamos soluciones <br />
            tecnológicas <span class="text-[#653bd4] font-bold">personalizadas</span>
          </h2>
          <p class="text-gray-600 text-lg lg:text-xl text-left"  data-aos="fade-right">
            Diseñamos y desarrollamos herramientas digitales personalizadas que <span class="underline decoration-wavy decoration-red-400">optimizan tus procesos</span>,
            mejoran la experiencia de tus clientes y potencian tu marca.
          </p>
        </div>
      </div>
      <!-- Columna de la imagen -->
      <div class="flex justify-center lg:justify-end" data-aos="zoom-in-left"
      data-aos-duration="800"
      data-aos-delay="500">
        <img
          src="../assets/tecnoweb.jpg"
          alt="Tecnología"
          class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto object-contain rounded-xl shadow-2xl" 
        />
      </div>
    </div>
    </div>
  </section>
   <ServicesTecno />
</template>

<script setup>
import { ref } from 'vue'
import ServicesTecno from './ServicesTecno.vue';

const hoveredCard = ref(null)
</script>

<style scoped>
.card-with-c
,.card-with-o 
,.card-with-d 
,.card-with-e  {
  position: relative;
}

.card-with-c::before,
.card-with-o::before,
.card-with-d::before,
.card-with-e::before {
  
}

.card-with-c::before,
.card-with-o::before,
.card-with-d::before,
.card-with-e::before{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 10rem;
  font-weight: 900;
  color: rgba(139, 92, 246, 0.15);
  z-index: 1;
  pointer-events: none;
  user-select: none;
}

.card-with-c::before {
  content: 'C';
  //display: none;
}

.card-with-o::before {
  content: 'O';
  //display: none;
}

.card-with-d::before {
  content: 'D';
  //display: none;
}


.card-with-e::before {
  content: 'E';
  //display: none;
}

/* Celular chico */
@media (max-width: 480px) {
  .card-with-c::before,
.card-with-o::before,
.card-with-d::before,
.card-with-e::before{
    font-size: 30rem;
  }
}

/* Celular grande */
@media (max-width: 640px) {
  .card-with-c::before,
.card-with-o::before,
.card-with-d::before,
.card-with-e::before{
    font-size: 30rem;
  }
}

/* Tablet vertical */
@media (max-width: 768px) {
  .card-with-c::before,
.card-with-o::before,
.card-with-d::before,
.card-with-e::before{
    font-size: 30rem;
  }
}

/* Tablet horizontal */
@media (max-width: 1024px) {
  .card-with-c::before,
.card-with-o::before,
.card-with-d::before,
.card-with-e::before{
    font-size: 30rem;
  }
}

/* Laptop / Netbook */
@media (min-width: 1280px) {
  .card-with-c::before,
.card-with-o::before,
.card-with-d::before,
.card-with-e::before{
    font-size: 15rem;
  }

  .card-with-c::before{
    transform: translate(-200%, -450%);
  }

  .card-with-o::before{
    transform: translate(-190%, -450%);
  }

  .card-with-d::before{
    transform: translate(-205%, -450%);
  }

  .card-with-e::before{
    transform: translate(-243%, -450%);
  }
}

/* Desktop grande */
@media (min-width: 1440px) {
  .card-with-c::before,
.card-with-o::before,
.card-with-d::before,
.card-with-e::before{
    font-size: 17rem;
  }

  .card-with-c::before{
    transform: translate(-120%, -550%)
  }

  .card-with-o::before{
    transform: translate(-115%, -500%);
  }

  .card-with-d::before{
    transform: translate(-125%, -500%);
  }

  .card-with-e::before{
    transform: translate(-150%, -500%);
  }
}

/* Celular grande */
@media (min-width: 480px) {
  .card-with-c::before,
  .card-with-o::before,
  .card-with-d::before,
  .card-with-e::before {
    display: hidden;
  }
}


.card-content {
  position: relative;
  z-index: 2;
}
</style>