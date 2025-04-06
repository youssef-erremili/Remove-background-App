<template>
    <div>
        <nav class="max-w-4xl mx-auto p-4">
            <ul class="flex flex-wrap space-x-4 justify-center">
                <li v-for="(category, index) in categories" :key="index">
                    <button @click="setActiveTab(category)"
                        class="px-4 py-2 font-medium cursor-pointer focus:outline-none"
                        :class="[activeTab === category ? 'border-b-2 border-blue-600 text-blue-600' : '']">
                        {{ category }}
                    </button>
                </li>
            </ul>
        </nav>
    </div>
    <div>
        <div v-if="activeTab === 'People'" class="mx-auto max-w-7/12 rounded-3xl overflow-hidden border border-gray-200">
            <img src="/images/visualize-human-after.png" class="w-full rounded-2xl" alt="visualize-human-after">
        </div>
        <div v-if="activeTab === 'Product'" class="mx-auto max-w-7/12 rounded-3xl overflow-hidden border border-gray-200">
            <img src="/images/visualize-product-after.png" class="w-full rounded-2xl" alt="visualize-human-after">
        </div>
        <div v-if="activeTab === 'Cars'" class="mx-auto max-w-7/12 rounded-3xl overflow-hidden border border-gray-200">
            <img src="/images/visualize-car-after.png" class="w-full rounded-2xl" alt="visualize-human-after">
        </div>
        <div v-if="activeTab === 'Animals'" class="mx-auto max-w-7/12 rounded-3xl overflow-hidden border border-gray-200">
            <img src="/images/visualize-animal-before.jpg" class="w-full rounded-2xl" alt="visualize-human-after">
        </div>
        <div v-if="activeTab === 'Graphics'" class="mx-auto max-w-7/12 rounded-3xl overflow-hidden border border-gray-200">
            <img src="/images/visualize-graphics-before.jpg" class="w-full rounded-2xl" alt="visualize-human-after">
        </div>
        <div v-if="activeTab === 'Real Estate'" class="mx-auto max-w-7/12 rounded-3xl overflow-hidden border border-gray-200">
            <img src="/images/visualize-real-estate-before.jpg" class="w-full rounded-2xl" alt="visualize-human-after">
        </div>
    </div>
    <div class="container mx-auto px-4 py-16 mt-28 w-[90%]">
        <div class="flex flex-col md:flex-row items-center justify-between gap">
            <div class="w-full">
                <img src="../../../public/images/remove-background.png" class="w-full" alt="remove background">
            </div>

            <div class="w-full py-3">
                <h1 class="text-4xl font-bold mb-2 pr-16">
                    Remove background 
                    <span class="text-blue-500">instantly</span>
                    with one click
                </h1>
                <p class="text-gray-600 mb-8 text-lg">Get images in a white, customized, or transparent background in 3 seconds or less.</p>
                <ul class="space-y-3 mb-8">
                    <li class="flex items-start">
                        <div class="flex-shrink-0 h-6 w-6 mt-0.5">
                            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
                        </div>
                        <span class="ml-2 text-gray-700">Automatically detect subjects on photos.</span>
                    </li>
                    <li class="flex items-start">
                        <div class="flex-shrink-0 h-6 w-6 mt-0.5">
                            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
                        </div>
                        <span class="ml-2 text-gray-700">Neat, clear & smooth cutout edges.</span>
                    </li>
                    <li class="flex items-start">
                        <div class="flex-shrink-0 h-6 w-6 mt-0.5">
                            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
                        </div>
                        <span class="ml-2 text-gray-700">Can process hair or any furry edges.</span>
                    </li>
                    <li class="flex items-start">
                        <div class="flex-shrink-0 h-6 w-6 mt-0.5">
                            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
                        </div>
                        <span class="ml-2 text-gray-700">Processes over 1,000 images in a single upload.</span>
                    </li>
                </ul>

                <a href="#"
                    class="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clip-rule="evenodd" />
                    </svg>
                    Try our free background remover
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const categories = ['People', 'Product', 'Cars', 'Animals', 'Graphics', 'Real Estate']
const activeTab = ref('People');

const setActiveTab = (tab) => {
    activeTab.value = tab;
}

</script>