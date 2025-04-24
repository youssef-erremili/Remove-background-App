<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const open = ref(false)
const dropdownButtonRef = ref<HTMLButtonElement | null>(null)

const toggleNavbar = () => {
    open.value = !open.value
}

const navLinkItems = ref([
    { text: 'Home', href: '/', active: true },
    { text: 'About', href: '/about', active: false },
    { text: 'Services', href: '/services', active: false },
    { text: 'Contact', href: '/contact', active: false }
])

// Custom composition function to handle click outside
const handleClickOutside = (event: MouseEvent) => {
    if (dropdownButtonRef.value && !dropdownButtonRef.value.contains(event.target as Node)) {
        open.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 sm:p-4">
            <!-- Logo -->
            <a href="/" class="flex items-center gap-2 sm:gap-3">
                <img src="/public/images/logo.svg" alt="logo" class="h-6 sm:h-7 md:h-8 w-auto">
            </a>

            <!-- Right side buttons -->
            <div class="flex items-center gap-2 sm:gap-3 md:gap-0 md:order-2">
                <button type="button"
                    class="text-white bg-[#4e7efe] hover:bg-blue-700 focus-visible:ring-4 focus-visible:outline-none focus-visible:ring-blue-300 font-medium rounded-lg text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 text-center transition-colors">
                    Get started
                </button>

                <!-- Mobile menu button -->
                <button @click="toggleNavbar" ref="dropdownButtonRef" type="button"
                    class="inline-flex items-center p-1.5 sm:p-2 w-8 h-8 sm:w-10 sm:h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-200"
                    aria-controls="navbar-menu" :aria-expanded="open">
                    <span class="sr-only">Toggle menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>

            <!-- Navigation menu -->
            <div class="items-center justify-between w-full md:flex md:w-auto md:order-1"
                :class="open ? 'block' : 'hidden'" id="navbar-menu">
                <ul
                    class="flex flex-col font-medium p-3 sm:p-4 md:p-0 mt-3 sm:mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:gap-6 lg:gap-8 md:mt-0 md:border-0 md:bg-white">
                    <li v-for="(item, index) in navLinkItems" :key="index">
                        <a :href="item.href"
                            class="block py-1.5 sm:py-2 px-2 sm:px-3 md:p-0 rounded-lg md:rounded-none md:hover:text-blue-600 transition-colors"
                            :class="item.active
                                ? 'text-white bg-blue-600 md:bg-transparent md:text-blue-600'
                                : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent'"
                            :aria-current="item.active ? 'page' : undefined">
                            {{ item.text }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>