<template>
  <section class="bg-[#1d232a] mt-8 sm:mt-10 md:mt-16 lg:mt-24 xl:mt-0 2xl:mt-60 pt-20 pb-[1px] font-inter text-center relative z-10 ">
    <!-- Canvas para las partículas -->
    <div id="particles-js" class="absolute inset-0"></div>
    <!-- Estrella grande - arriba derecha (solo pantallas grandes) -->
    <svg data-aos="rotate-in-right" 
        data-aos-duration="1200" 
        data-aos-delay="600"  
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" width="120" height="120" class="absolute coolshapes star-6 hidden 2xl:block 2xl:top-0 2xl:right-40 animate-spin-and-bounce">
      <g clip-path="url(#cs_clip_1_star-6-large)" class="opacity-60">
        <mask id="cs_mask_1_star-6-large" style="mask-type:alpha" width="200" height="200" x="0" y="0" maskUnits="userSpaceOnUse">
          <path fill="#fff" d="M120 80L100 0 80 80 0 100l80 20 20 80 20-80 80-20-80-20z"></path>
        </mask>
        <g mask="url(#cs_mask_1_star-6-large)">
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#0E6FFF" d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4254_large)">
            <path fill="#8F5BFF" d="M222 89H0v111h222V89z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_748_4254_large" width="342" height="231" x="-60" y="29" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur result="effect1_foregroundBlur_748_4254" stdDeviation="30"></feGaussianBlur>
        </filter>
        <clipPath id="cs_clip_1_star-6-large">
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
      <g style="mix-blend-mode:overlay" mask="url(#cs_mask_1_star-6-large)">
        <path fill="gray" stroke="transparent" d="M200 0H0v200h200V0z" filter="url(#cs_noise_1_star-6-large)"></path>
      </g>
      <defs>
        <filter id="cs_noise_1_star-6-large" width="100%" height="100%" x="0%" y="0%" filterUnits="objectBoundingBox">
          <feTurbulence baseFrequency="0.6" numOctaves="5" result="out1" seed="4"></feTurbulence>
          <feComposite in="out1" in2="SourceGraphic" operator="in" result="out2"></feComposite>
          <feBlend in="SourceGraphic" in2="out2" mode="overlay" result="out3"></feBlend>
        </filter>
      </defs>
    </svg>

    <!-- Estrella pequeña - abajo derecha del título (solo pantallas grandes) -->
    <svg 
      data-aos="rotate-in-right" 
      data-aos-duration="1200" 
      data-aos-delay="600"
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" width="70" height="70" class="absolute coolshapes star-6 hidden 2xl:block 2xl:top-80 2xl:right-80 animate-spin-and-bounce">
      <g clip-path="url(#cs_clip_1_star-6-small)" class="opacity-60">
        <mask id="cs_mask_1_star-6-small" style="mask-type:alpha" width="200" height="200" x="0" y="0" maskUnits="userSpaceOnUse">
          <path fill="#fff" d="M120 80L100 0 80 80 0 100l80 20 20 80 20-80 80-20-80-20z"></path>
        </mask>
        <g mask="url(#cs_mask_1_star-6-small)">
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#0E6FFF" d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4254_small)">
            <path fill="#8F5BFF" d="M222 89H0v111h222V89z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_748_4254_small" width="342" height="231" x="-60" y="29" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur result="effect1_foregroundBlur_748_4254" stdDeviation="30"></feGaussianBlur>
        </filter>
        <clipPath id="cs_clip_1_star-6-small">
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
      <g style="mix-blend-mode:overlay" mask="url(#cs_mask_1_star-6-small)">
        <path fill="gray" stroke="transparent" d="M200 0H0v200h200V0z" filter="url(#cs_noise_1_star-6-small)"></path>
      </g>
      <defs>
        <filter id="cs_noise_1_star-6-small" width="100%" height="100%" x="0%" y="0%" filterUnits="objectBoundingBox">
          <feTurbulence baseFrequency="0.6" numOctaves="5" result="out1" seed="5"></feTurbulence>
          <feComposite in="out1" in2="SourceGraphic" operator="in" result="out2"></feComposite>
          <feBlend in="SourceGraphic" in2="out2" mode="overlay" result="out3"></feBlend>
        </filter>
      </defs>
    </svg>
    <!-- Estrella pequeña - abajo izquierda del título (solo pantallas grandes) -->
    <svg 
      data-aos="rotate-in-right" 
      data-aos-duration="1200" 
      data-aos-delay="600"
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" width="60" height="60" class="absolute coolshapes star-6 hidden 2xl:block 2xl:bottom-60 2xl:left-20 animate-spin-and-bounce">
      <g clip-path="url(#cs_clip_1_star-6-small)" class="opacity-60">
        <mask id="cs_mask_1_star-6-small" style="mask-type:alpha" width="200" height="200" x="0" y="0" maskUnits="userSpaceOnUse">
          <path fill="#fff" d="M120 80L100 0 80 80 0 100l80 20 20 80 20-80 80-20-80-20z"></path>
        </mask>
        <g mask="url(#cs_mask_1_star-6-small)">
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#0E6FFF" d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4254_small)">
            <path fill="#8F5BFF" d="M222 89H0v111h222V89z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_748_4254_small" width="342" height="231" x="-60" y="29" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur result="effect1_foregroundBlur_748_4254" stdDeviation="30"></feGaussianBlur>
        </filter>
        <clipPath id="cs_clip_1_star-6-small">
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
      <g style="mix-blend-mode:overlay" mask="url(#cs_mask_1_star-6-small)">
        <path fill="gray" stroke="transparent" d="M200 0H0v200h200V0z" filter="url(#cs_noise_1_star-6-small)"></path>
      </g>
      <defs>
        <filter id="cs_noise_1_star-6-small" width="100%" height="100%" x="0%" y="0%" filterUnits="objectBoundingBox">
          <feTurbulence baseFrequency="0.6" numOctaves="5" result="out1" seed="5"></feTurbulence>
          <feComposite in="out1" in2="SourceGraphic" operator="in" result="out2"></feComposite>
          <feBlend in="SourceGraphic" in2="out2" mode="overlay" result="out3"></feBlend>
        </filter>
      </defs>
    </svg>
    <div class="background-text-container relative hidden 2xl:block">
      <div class="flex justify-center mb-6 ">
        <div class="bg-gradient-to-r from-[#653bd4] to-[#8152e3] text-lg font-semibold text-white px-4 py-2 rounded-full shadow-md backdrop-blur-sm flex gap-2 items-center">
          <span class="bg-green-400 w-2 h-2 rounded-full animate-pulse"></span>
          <span>4+ Clientes</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-lightning-charge" viewBox="0 0 16 16">
            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z"/>
          </svg>  
          <a href="#more" class=" hover:text-indigo-600 transition">5+ Proyectos → </a>
        </div> 
      </div>
    </div>
    <div class="grid grid-cols-2 mt-16">
      <div>
        <h1 class="text-white font-bold text-6xl sm:text-7xl xl:text-6xl mt-4 mb-10 leading-tight tracking-tight" data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
            Impulsamos tu <span class="bg-[#653bd4] bg-clip-text text-transparent">futuro digital</span> <br />con 
            <span class="underline decoration-[#653bd4]">tecnología</span> 
            de alto nivel
        </h1>
        <h2 class="text-2xl font-semibold text-white my-2" data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">Software personalizado que hace crecer tu negocio</h2>
        <p class="text-lg text-white animate-fade-in-right">Confiá en Vibranium Code para llevar tus ideas al siguiente nivel</p>
        <div class="mt-10 mb-10 animate-expand-vertically">
          <button
            class="relative bg-gradient-to-r from-black via-black to-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-gray-500/70 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div class="flex items-center justify-center gap-4">
            <span class="relative z-10 flex items-center justify-center">OBTÉN TU COTIZACIÓN GRATUITA</span>
            <svg width="30" height="30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_231_793)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0H200V50V150L150 200L150 50H0L50 0ZM0 165.067V100L65.067 100L0 165.067ZM100 200H35.7777L100 135.778L100 200Z" fill="url(#paint0_linear_231_793)"/> </g> <defs> <linearGradient id="paint0_linear_231_793" x1="177" y1="-9.23648e-06" x2="39.5" y2="152.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#B0B9FF"/> <stop offset="1" stop-color="#E7E9FF"/> </linearGradient> <clipPath id="clip0_231_793"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
            </div>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20">
            </div>
          </button>
        </div>
        <!--<div class="mx-auto mt-20 w-[30%] h-[2px] rounded-full animate-gradient-x bg-[length:200%_100%] bg-gradient-to-r from-indigo-500 via-indigo-400 to-red-300"></div>-->
      </div>
        <div data-aos="zoom-in-up" data-aos-duration="800" ><!-- Mockup de laptop -->
          <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
              <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" class="dark:hidden h-[156px] md:h-[278px] w-full rounded-lg" alt="">
                  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" class=" dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt="">
              </div>
          </div>
          <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
              <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
          </div>
        </div>
    </div>
    <div class="2xl:mt-60 mt-24 mb-12 animate-fade-in hidden xl:block 2xl:block">
          <div class="flex justify-center items-center mt-6 mx-16 rounded-2xl mb-6 bg-gradient-to-r from-[#20096c] via-[#3404d0] to-[#20096c] p-4 text-white">
            <div class="flex flex-col items-start xl:py-2">
              <p class="text-yellow-500 font-semibold text-xl xl:text-4xl 2xl:text-5xl">{{ displayCount }}+</p>
              <p class=" font-inter font-bold">Años de experiencia</p>
            </div>
            <div class="separator h-10 bg-gray-300 mx-8" style="width: 1px;"></div>
          <div class="flex flex-col items-start">
              <p class="text-yellow-500 font-semibold text-xl xl:text-4xl 2xl:text-5xl">{{displayClientes}}+</p>
              <p class=" font-inter font-bold">Clientes felices</p>
            </div>
            <div class="separator h-10 bg-gray-300 mx-8" style="width: 1px;"></div>
          <div class="flex flex-col items-start">
              <p class="text-yellow-500 font-semibold text-xl xl:text-4xl 2xl:text-5xl">{{displayProyectos}}+</p>
              <p class=" font-inter font-bold">Proyectos finalizados</p>
            </div>
            <div class="separator h-10 bg-gray-300 mx-8" style="width: 1px;"></div>
          <div class="flex flex-col items-start">
              <p class="text-yellow-500 font-semibold text-xl xl:text-4xl 2xl:text-5xl">{{displayMiembros}}+</p>
              <p class=" font-inter font-bold">Miembros del equipo</p>
            </div>
          </div>
        </div>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {  onUnmounted } from 'vue'

// Declaración de tipos para particles.js
declare global {
  interface Window {
    particlesJS: (id: string, config: any) => void;
  }
}

const initParticles = () => {
  if (typeof window.particlesJS !== 'undefined') {
    window.particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#ffffff'
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    })
  }
}

const loadParticlesScript = () => {
  return new Promise<void>((resolve, reject) => {
    if (typeof window.particlesJS !== 'undefined') {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load particles.js'))
    document.head.appendChild(script)
  })
}

onMounted(async () => {
  try {
    await loadParticlesScript()
    initParticles()
  } catch (error) {
    console.error('Error loading particles.js:', error)
  }
})

onUnmounted(() => {
  // Limpiar el canvas si es necesario
  const canvas = document.querySelector('#particles-js canvas')
  if (canvas) {
    canvas.remove()
  }
})

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

 <style>
      /* Animación de rotación personalizada para AOS */
      [data-aos="rotate-in-right"] {
        transform: rotate(180deg) translateX(100px);
        opacity: 0;
      }
      
      [data-aos="rotate-in-right"].aos-animate {
        transform: rotate(0deg) translateX(0px);
        opacity: 1;
      }

      [data-aos="rotate-in-left"] {
        transform: rotate(100deg) translateX(180px);
        opacity: 0;
      }
      
      [data-aos="rotate-in-left"].aos-animate {
        transform: rotate(0deg) translateX(0px);
        opacity: 1;
      }
      
      [data-aos="spin-zoom-in"] {
        transform: rotate(360deg) scale(0);
        opacity: 0;
      }
      
      [data-aos="spin-zoom-in"].aos-animate {
        transform: rotate(0deg) scale(1);
        opacity: 1;
      }
      
      /* Animaciones continuas infinitas */
      .animate-spin-clockwise {
        animation: spinClockwise 3s ease-in-out forwards;
      }
      
      .animate-spin-and-bounce {
        animation: 
          spinClockwise 3s ease-in-out forwards,
          bouncing 2s ease-in-out infinite 3s;
      }
      
      .animate-spin-slow {
        animation: spinSlow 4s ease-in-out forwards;
      }
      
      .animate-float-gentle {
        animation: floatGentle 2.5s ease-in-out infinite;
        animation-delay: 4s; /* Empieza después del spin */
      }
      
      @keyframes spinClockwise {
        from { 
          transform: rotate(0deg); 
        }
        to { 
          transform: rotate(360deg); 
        }
      }
      
      @keyframes bouncing {
        0%, 100% { 
          transform: translateY(0px) rotate(360deg); 
        }
        25% { 
          transform: translateY(-15px) rotate(360deg); 
        }
        50% { 
          transform: translateY(-8px) rotate(360deg); 
        }
        75% { 
          transform: translateY(-12px) rotate(360deg); 
        }
      }
      
      @keyframes spinSlow {
        from { 
          transform: rotate(0deg); 
        }
        to { 
          transform: rotate(360deg); 
        }
      }
      
      @keyframes floatGentle {
        0%, 100% { 
          transform: translateY(0px) rotate(360deg); 
        }
        50% { 
          transform: translateY(-10px) rotate(360deg); 
        }
      }

.background-text-container {
  position: relative;
}

.background-text-container::before {
  content: "VIBRANIUM";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10rem;
  font-weight: 900;
  color: rgba(139, 92, 246, 0.08); /* Muy transparente */
  z-index: -1;
  white-space: nowrap;
  letter-spacing: 0.2em;
  user-select: none;
  pointer-events: none;
}

/* Responsive */
@media (max-width: 1024px) {
  .background-text-container::before {
    font-size: 6rem;
  }
}

@media (max-width: 768px) {
  .background-text-container::before {
    font-size: 4rem;
  }
}

@media (max-width: 640px) {
  .background-text-container::before {
    font-size: 3rem;
  }
}

.background-text-container1 {
  position: relative;
}

.background-text-container1::before {
  content: "CODE";
  position: absolute;
  top: 300%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10rem;
  font-weight: 900;
  color: rgba(139, 92, 246, 0.08); /* Muy transparente */
  z-index: -1;
  white-space: nowrap;
  letter-spacing: 0.2em;
  user-select: none;
  pointer-events: none;
}

/* Responsive */
@media (max-width: 1024px) {
  .background-text-container1::before {
    font-size: 6rem;
  }
}

@media (max-width: 768px) {
  .background-text-container1::before {
    font-size: 4rem;
  }
}

@media (max-width: 640px) {
  .background-text-container1::before {
    font-size: 3rem;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animation-delay-300 {
  animation-delay: 0.3s;
  opacity: 0;
}

.animation-delay-600 {
  animation-delay: 0.6s;
  opacity: 0;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>