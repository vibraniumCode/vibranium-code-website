<template>
  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-16">
        <span class="text-sm text-gray-500 font-medium text-center block mb-2">TESTIMONIO</span>
        <h2 class="text-4xl text-center font-bold text-gray-900">¡Lo que dice nuestro usuario!</h2>
      </div>

      <!-- Slider wrapper -->
      <div class="relative overflow-hidden">
        <div 
          class="flex transition-transform duration-500 ease-in-out pb-16"
          :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
          @mouseenter="stopAutoplay"
          @mouseleave="startAutoplay"
        >
          <!-- Original slides -->
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="`original-${index}`"
            class="flex-shrink-0 px-4"
            :class="slideClasses"
          >
            <div
              class="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm h-full flex flex-col"
              :class="{ 'border-indigo-600': index === currentDotIndex }"
            >
              <div class="flex-grow">
                <div class="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                  <svg class="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span class="text-base font-semibold text-indigo-600">{{ testimonial.rating }}</span>
                </div>
                <p
                  class="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800"
                  :class="{ 'text-gray-800': index === currentDotIndex }"
                >
                  {{ testimonial.content }}
                </p>
              </div>
              <div class="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                <img 
                  class="rounded-full h-10 w-10 object-cover" 
                  :src="testimonial.avatar" 
                  :alt="testimonial.name"
                />
                <div class="block">
                  <h5 class="text-gray-900 font-medium transition-all duration-500 mb-1">
                    {{ testimonial.name }}
                  </h5>
                  <span class="text-sm leading-4 text-gray-500">{{ testimonial.position }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Duplicate slides for infinite loop -->
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="`duplicate-${index}`"
            class="flex-shrink-0 px-4"
            :class="slideClasses"
          >
            <div
              class="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm h-full flex flex-col"
              :class="{ 'border-indigo-600': index === currentDotIndex }"
            >
              <div class="flex-grow">
                <div class="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                  <svg class="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span class="text-base font-semibold text-indigo-600">{{ testimonial.rating }}</span>
                </div>
                <p class="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                  {{ testimonial.content }}
                </p>
              </div>
              <div class="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                <img 
                  class="rounded-full h-10 w-10 object-cover" 
                  :src="testimonial.avatar" 
                  :alt="testimonial.name"
                />
                <div class="block">
                  <h5 class="text-gray-900 font-medium transition-all duration-500 mb-1">
                    {{ testimonial.name }}
                  </h5>
                  <span class="text-sm leading-4 text-gray-500">{{ testimonial.position }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination dots -->
        <div class="flex justify-center items-center gap-2 mt-8">
          <button
            v-for="(_, index) in testimonials.length"
            :key="index"
            @click="goToSlide(index)"
            class="w-4 h-1 rounded-full transition-all duration-300 mx-1"
            :class="index === currentDotIndex ? 'bg-indigo-600' : 'bg-gray-300'"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Reactive data
const currentSlide = ref(0)
const slidesToShow = ref(1)

// Testimonials data
const testimonials = ref([
  {
    rating: '4.9',
    content: 'Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.',
    name: 'Jane D',
    position: 'CEO',
    avatar: 'https://pagedone.io/asset/uploads/1696229969.png'
  },
  {
    rating: '4.9',
    content: 'Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.',
    name: 'Harsh P.',
    position: 'Product Designer',
    avatar: 'https://pagedone.io/asset/uploads/1696229994.png'
  },
  {
    rating: '4.9',
    content: 'The customer service team at pagedone went above and beyond to help me resolve a billing issue.',
    name: 'Alex K.',
    position: 'Design Lead',
    avatar: 'https://pagedone.io/asset/uploads/1696230027.png'
  },
  {
    rating: '4.9',
    content: 'Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.',
    name: 'Jane D',
    position: 'CEO',
    avatar: 'https://pagedone.io/asset/uploads/1696229969.png'
  },
  {
    rating: '4.9',
    content: 'Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.',
    name: 'Harsh P.',
    position: 'Product Designer',
    avatar: 'https://pagedone.io/asset/uploads/1696229994.png'
  }
])

// Computed properties
const slideWidth = computed(() => {
  return 100 / slidesToShow.value
})

const slideClasses = computed(() => {
  if (slidesToShow.value === 1) return 'w-full'
  if (slidesToShow.value === 2) return 'w-1/2'
  if (slidesToShow.value === 3) return 'w-1/3'
  return 'w-full'
})

const currentDotIndex = computed(() => {
  return currentSlide.value % testimonials.value.length
})

// Methods
const updateSlidesToShow = () => {
  const width = window.innerWidth
  if (width >= 1024) {
    slidesToShow.value = 3
  } else if (width >= 768) {
    slidesToShow.value = 2
  } else {
    slidesToShow.value = 1
  }
}

const nextSlide = () => {
  currentSlide.value++
  
  // When we reach the end of the duplicated slides, reset to start
  if (currentSlide.value >= testimonials.value.length * 2) {
    setTimeout(() => {
      currentSlide.value = 0
    }, 500) // Wait for transition to complete
  }
}

const goToSlide = (index) => {
  currentSlide.value = index
}

// Auto-play functionality
let autoplayInterval = null

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 2500)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

// Lifecycle hooks
onMounted(() => {
  updateSlidesToShow()
  window.addEventListener('resize', updateSlidesToShow)
  startAutoplay()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateSlidesToShow)
  stopAutoplay()
})
</script>

<style scoped>
/* Optional: Add any additional custom styles here */
</style>