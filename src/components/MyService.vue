<template>
  <section class="pt-4 font-inter text-center text-white to-white relative z-10">
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
          <h2 class="text-black mb-8 text-2xl sm:text-4xl lg:text-6xl font-bold text-left" data-aos="fade-up">
            Creamos soluciones <br />
            tecnológicas <span class="bg-gradient-to-r from-[#b981ff] to-[#8152e3] bg-clip-text text-transparent font-bold">personalizadas</span>
          </h2>
          <p class="text-gray-600 text-lg lg:text-xl text-left"  data-aos="fade-right">
            Diseñamos y desarrollamos herramientas digitales personalizadas que <span class="underline decoration-wavy decoration-red-400">optimizan tus procesos</span>,
            mejoran la experiencia de tus clientes y potencian tu marca.
          </p>
        </div>
      </div>
      <!-- Columna de la imagen -->
      <div class="flex justify-center lg:justify-end" data-aos="zoom-in-left">
        <img
          src="../assets/tecno.webp"
          alt="Tecnología"
          class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto object-contain"
        />
      </div>
    </div>
    <div> 
      <h1 data-aos="flip-up" class="text-black text-2xl font-semibold">Todo lo que podés hacer con <span class="bg-[#6d4adf] text-white px-2">VIBRANIUM CODE</span></h1>
    </div>
    <div class="relative max-w-8xl mx-auto mt-10 px-4 sm:px-6 lg:px-12 xl:px-20">
       <!-- SVG de fondo posicionado absolutamente 
      <div class="absolute inset-0 xl:-bottom-[18px] 2xl:-bottom-20 overflow-hidden pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute bottom-0 left-0 w-full h-auto scale-110">
          <defs>
            <linearGradient id="ondaMoradaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#a855f7; stop-opacity:0.8" />
              <stop offset="100%" style="stop-color:#5000ca; stop-opacity:0.8" />
            </linearGradient>
          </defs>
          <path fill="url(#ondaMoradaGradient)" d="M0,64L20,101.3C40,139,80,213,120,250.7C160,288,200,288,240,272C280,256,320,224,360,218.7C400,213,440,235,480,234.7C520,235,560,213,600,192C640,171,680,149,720,154.7C760,160,800,192,840,224C880,256,920,288,960,277.3C1000,267,1040,213,1080,186.7C1120,160,1160,160,1200,176C1240,192,1280,224,1320,229.3C1360,235,1400,213,1420,202.7L1440,192L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path>
        </svg>
      </div>-->


      
      <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-10 2xl:gap-14 items-stretch my-12 text-black text-xl" data-aos="zoom-in">
        <!-- SOFTWARE A MEDIDA -->
        <div class="border-2 border-green-400 p-6 rounded-xl">
        <div class="bg-green-100/70 text-green-800 h-full rounded-xl px-10 py-24 border border-green-200 hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-1 transition-all duration-300 card-with-c">
          <div class="place-items-center card-content">
            <div class="bg-gradient-to-r from-green-400 to-green-500 w-20 h-20 rounded-xl mb-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="white" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <h5 class="mb-2.5 font-bold">SOFTWARE A MEDIDA</h5>
              <p class="">Desarrollamos aplicaciones personalizadas que se adaptan exactamente a tu negocio. Desde sistemas de gestión interna hasta soluciones innovadoras a medida.</p>
          </div>
        </div>
        </div>
        <!-- DESARROLLO WEB -->
        <div class="border-2 border-blue-400 p-6 rounded-xl">
        <div class="bg-blue-100/70 text-blue-800 h-full rounded-xl px-10 py-24 border border-blue-200 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 card-with-o">
          <div class="place-items-center card-content">
            <div class="bg-gradient-to-r from-blue-400 to-blue-500 w-20 h-20 rounded-xl mb-12 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="white" viewBox="0 0 24 24">
                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm2 2h12v2H6V7zm0 4h8v2H6v-2zm0 4h10v2H6v-2z"/>
              </svg>
            </div>
            <h5 class="mb-2.5 font-bold">DESARROLLO WEB</h5>
            <p>Creamos sitios web modernos, rápidos y optimizados para atraer clientes y reflejar la identidad de tu marca profesionalmente.</p>
          </div>
        </div>
        </div>
        <!-- MANTENIMIENTO -->
        <div class="border-2 border-orange-400 p-6 rounded-xl">
        <div class="bg-orange-100/70 text-orange-800 h-full rounded-xl px-10 py-24 border border-orange-200 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300 card-with-d">
          <div class="place-items-center card-content">
            <div class="bg-gradient-to-r from-orange-400 to-orange-500 w-20 h-20 rounded-xl mb-12 flex items-center justify-center ">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="white" viewBox="0 0 24 24">
                <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
              </svg>
            </div>
            <h5 class="mb-2.5 font-bold">MANTENIMIENTO</h5>
            <p>Mantenemos tu software, sitio o base de datos funcionando de forma segura y eficiente. Nos encargamos de actualizaciones, backups y mejoras.</p>
          </div>
        </div>
        </div>
        <!-- AUTOMATIZACIONES -->
        <div class="border-2 border-purple-400 p-6 rounded-xl">
        <div class="bg-purple-100/70 text-purple-800 h-full rounded-xl px-10 py-24 border border-purple-200 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300 card-with-e">
          <div class="place-items-center card-content">
            <div class="bg-gradient-to-r from-purple-400 to-purple-500 w-20 h-20 rounded-xl mb-12 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="white" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h5 class="mb-2.5 font-bold">AUTOMATIZACIONES</h5>
            <p>Automatizamos procesos repetitivos o manuales para que ganes tiempo, reduzcas errores y hagas crecer tu negocio con menos esfuerzo.</p>
          </div>
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