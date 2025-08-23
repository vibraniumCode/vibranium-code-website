<template>
  <section class="mt-20">
    <div class="mx-16">
      <div class="mb-4 flex items-center gap-4">
        <h3 class="text-white text-left"> <span class="bg-[#8152e3] p-2 rounded-md text-xl">TESTIMONIO</span> </h3>
        <span class="text-black">Lo que dicen nuestros clientes <br>sobre nuestros sistemas</span>
      </div>
      <div class="bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 rounded-xl p-10">
        <div class="flex items-center gap-20 m-10 ">
          <div class="m-4">
            <p class="text-white">CONFIAR EN VIBRANIUM CODE FUE DE LO MEJOR QUE PUDE HACER PARA MI NEGOCIO, EL SISTEMA VENPRO, UN SISTEMA DE GESTION PARA MI NEGOCIO FUE LO MAS UTILIZABLE</p>
            <div class="flex items-center gap-4 mt-4">
              <img class="w-16 h-16 rounded-full" src="../assets/cliente1.avif" alt="Clientes Image">
              <div>
                <h3 class="font-bold text-[#8152e3] text-sm mt-2">CRISTIAN JULCA</h3>
                <p class="font-bold text-[#8152e3] text-xs">CREADOR DE BREAK BURGER</p>
                <StarRating :rating="5" />
              </div>
            </div>
          </div>
          <div class="separator h-40 bg-white mx-8" style="width: 1px;"></div>
          <div class="m-4">
            <p class="text-white">CONFIAR EN VIBRANIUM CODE FUE DE LO MEJOR QUE PUDE HACER PARA MI NEGOCIO, EL SISTEMA VENPRO, UN SISTEMA DE GESTION PARA MI NEGOCIO FUE LO MAS UTILIZABLE</p>
            <div class="flex items-center gap-4 mt-4">
              <img class="w-16 h-16 rounded-full" src="../assets/cliente2.png" alt="Clientes Image">
              <div>
                <h3 class="font-bold text-[#8152e3] text-sm mt-2">CESAR PEREYRA</h3>
                <p class="font-bold text-[#8152e3] text-xs">PRODUCTOR DE SEGUROS</p>
                <StarRating :rating="4" />
              </div>
            </div>
          </div>
          <div class="separator h-40 bg-white mx-8" style="width: 1px;"></div>
          <div class="m-4">
            <p class="text-white">CONFIAR EN VIBRANIUM CODE FUE DE LO MEJOR QUE PUDE HACER PARA MI NEGOCIO, EL SISTEMA VENPRO, UN SISTEMA DE GESTION PARA MI NEGOCIO FUE LO MAS UTILIZABLE</p>
            <div class="flex items-center gap-4 mt-4">
              <img class="w-16 h-16 rounded-full" src="../assets/cliente3.png" alt="Clientes Image">
              <div>
                <h3 class="font-bold text-[#8152e3] text-sm mt-2">EZEQUIEL</h3>
                <p class="font-bold text-[#8152e3] text-xs">ARQUITECTO</p>
                <StarRating :rating="3" />
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import StarRating from '@/components/common/StarRating.vue'
</script>