<template>
  <Disclosure as="nav" v-slot="{ open }" >
    <div :class="[
        'fixed top-0 left-1/2 transform -translate-x-1/2 w-[80%] max-w-6xl z-50 transition-colors duration-300 ease-in-out px-6 rounded-2xl xl:mt-4 2xl:mt-10',
        isScrolled ? 'bg-slate-900/50 backdrop-blur-md' : 'bg-gradient-to-r from-slate-9  00 via-gray-800 to-slate-900'
      ]">
      <div class="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8 font-inter ">
        <div class="relative flex h-16 items-center justify-end xl:justify-center 2xl:justify-center m-2 ">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
              <XMarkIcon v-else class="block size-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex items-center justify-center sm:items-center sm:justify-start">
            <div class="flex shrink-0 items-center">
              <svg width="51" height="40" viewBox="0 0 51 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.446 0L22.7801 8.82887C23.3936 9.35302 23.7473 10.1222 23.7473 10.9323V17.5862L13.4131 8.75734C12.7996 8.23319 12.446 7.464 12.446 6.65386V0Z" fill="#8152e3" class="hover:fill-[#6e5ff7]"></path>
                <path d="M12.446 40L22.7801 31.1711C23.3936 30.647 23.7473 29.8778 23.7473 29.0677V22.4138L13.4131 31.2427C12.7996 31.7668 12.446 32.536 12.446 33.3461V40Z" fill="#6e5ff7" class="hover:fill-[#8152e3]"></path>
                <path d="M0.117188 9.31034L10.3108 17.9705C10.805 18.3904 11.4308 18.6207 12.0775 18.6207H20.2982L10.1297 9.96253C9.63514 9.54141 9.00837 9.31034 8.36065 9.31034H0.117188Z" fill="#6e5ff7" class="hover:fill-[#8152e3]"></path>
                <path d="M0.117188 30.6897L10.2481 22.0345C10.7432 21.6115 11.3713 21.3793 12.0206 21.3793H20.3227L10.1291 30.0394C9.63487 30.4593 9.00904 30.6897 8.36236 30.6897H0.117188Z" fill="#8152e3" class="hover:fill-[#6e5ff7]"></path>
                <path d="M37.7884 0L27.4542 8.82887C26.8407 9.35302 26.4871 10.1222 26.4871 10.9323V17.5862L36.8212 8.75734C37.4347 8.23319 37.7884 7.464 37.7884 6.65386V0Z" fill="#6e5ff7" class="hover:fill-[#8152e3]"></path>
                <path d="M37.7884 40L27.4542 31.1711C26.8407 30.647 26.4871 29.8778 26.4871 29.0677V22.4138L36.8212 31.2427C37.4347 31.7668 37.7884 32.536 37.7884 33.3461V40Z" fill="#8152e3" class="hover:fill-[#6e5ff7]"></path>
                <path d="M50.1172 9.31034L39.9236 17.9705C39.4294 18.3904 38.8035 18.6207 38.1569 18.6207H29.9361L40.1047 9.96253C40.5992 9.54141 41.226 9.31034 41.8737 9.31034H50.1172Z" fill="#8152e3" class="hover:fill-[#6e5ff7]"></path>
                <path d="M50.1172 30.6897L39.9863 22.0345C39.4912 21.6115 38.863 21.3793 38.2137 21.3793H29.9117L40.1052 30.0394C40.5995 30.4593 41.2253 30.6897 41.872 30.6897H50.1172Z" fill="#6e5ff7" class="hover:fill-[#8152e3]"></path>
              </svg>
              <span class="ml-2 text-white text-lg font-semibold hidden xl:block 2xl:block">VIBRANIUM CODE</span>
              <div class="separator h-10 bg-gray-300 ml-10 hidden xl:block 2xl:block" style="width: 1px;"></div>
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4 uppercase" >
                <a v-for="item in navigation"  :key="item.name" :href="item.href" :class="[item.current ? 'text-gray-400' : 'text-white  hover:text-gray-300', 'rounded-md px-3 py-2 text-lg']" :aria-current="item.current ? 'page' : undefined">{{ item.name }} </a>
              </div>
            </div>
          </div>
          <!--<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View notifications</span>
              <BellIcon class="size-6" aria-hidden="true" />
            </button>

            Profile dropdown 
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800">
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">Open user menu</span>
                  <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>-->
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden" >
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ref, onMounted, onUnmounted } from 'vue'

const navigation = [
  { name: 'Inicio', href: '#', current: true },
  { name: 'Servicios', href: '#', current: false },
  { name: 'Clientes', href: '#', current: false },
  { name: 'Sobre Nosotros', href: '#', current: false },
]

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>