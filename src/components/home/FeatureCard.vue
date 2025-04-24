<template>
    <div>
        <nav class="max-w-4xl mx-auto p-4">
            <ul class="flex flex-wrap gap-2 sm:gap-3 md:space-x-4 justify-center">
                <li v-for="(category, index) in categories" :key="index">
                    <button @click="setActiveTab(category)"
                        class="px-2 sm:px-3 md:px-4 py-2 font-medium text-sm sm:text-base cursor-pointer focus:outline-none"
                        :class="[activeTab === category ? 'border-b-2 border-blue-600 text-blue-600' : '']">
                        {{ category }}
                    </button>
                </li>
            </ul>
        </nav>
    </div>
    <div class="px-4 sm:px-6 md:px-8">
        <div v-if="activeTab === 'People'"
            class="mx-auto max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl rounded-3xl overflow-hidden border border-gray-200">
            <img src="/images/visualize-human-after.png" class="w-full rounded-2xl" alt="visualize-human-after">
        </div>
        <div v-if="activeTab === 'Product'"
            class="mx-auto max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl rounded-3xl overflow-hidden border border-gray-200">
            <img src="/images/visualize-product-after.png" class="w-full rounded-2xl" alt="visualize-human-after">
        </div>
        <div v-if="activeTab === 'Cars'" 
            class="mx-auto max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl rounded-3xl overflow-hidden border border-gray-200">
            <img src="/images/visualize-car-after.png" class="w-full rounded-2xl" alt="visualize-human-after">
        </div>
        <div v-if="activeTab === 'Animals'"
            class="mx-auto max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl rounded-3xl overflow-hidden border border-gray-200">
            <img src="/images/visualize-animal-before.jpg" class="w-full rounded-2xl" alt="visualize-human-after">
        </div>
        <div v-if="activeTab === 'Graphics'"
            class="mx-auto max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl rounded-3xl overflow-hidden border border-gray-200">
            <img src="/images/visualize-graphics-before.jpg" class="w-full rounded-2xl" alt="visualize-human-after">
        </div>
        <div v-if="activeTab === 'Real Estate'"
            class="mx-auto max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl rounded-3xl overflow-hidden border border-gray-200">
            <img src="/images/visualize-real-estate-before.jpg" class="w-full rounded-2xl" alt="visualize-human-after">
        </div>
    </div>
    <div class="container mx-auto px-4 py-8 sm:py-12 md:py-16 mt-12 sm:mt-16 md:mt-20 lg:mt-28 w-full sm:w-[95%] md:w-[90%]">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="w-full">
                <img src="../../../public/images/remove-background.png" class="w-full" alt="remove background">
            </div>

            <div class="w-full py-3">
                <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 pr-0 sm:pr-4 md:pr-8 lg:pr-16">
                    Remove background
                    <span class="text-blue-500">instantly</span>
                    with one click
                </h1>
                <p class="text-gray-600 mb-4 sm:mb-6 md:mb-8 text-base sm:text-lg">Get images in a white, customized, or transparent background in 3
                    seconds or less.</p>
                <ul class="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    <li class="flex items-start">
                        <div class="flex-shrink-0 h-6 w-6 mt-2">
                            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
                        </div>
                        <span class="ml-2 text-gray-700 text-sm sm:text-base">Automatically detect subjects on photos.</span>
                    </li>
                    <li class="flex items-start">
                        <div class="flex-shrink-0 h-6 w-6 mt-2">
                            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
                        </div>
                        <span class="ml-2 text-gray-700 text-sm sm:text-base">Neat, clear & smooth cutout edges.</span>
                    </li>
                    <li class="flex items-start">
                        <div class="flex-shrink-0 h-6 w-6 mt-2">
                            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
                        </div>
                        <span class="ml-2 text-gray-700 text-sm sm:text-base">Can process hair or any furry edges.</span>
                    </li>
                    <li class="flex items-start">
                        <div class="flex-shrink-0 h-6 w-6 mt-2">
                            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
                        </div>
                        <span class="ml-2 text-gray-700 text-sm sm:text-base">Processes over 1,000 images in a single upload.</span>
                    </li>
                </ul>
                <router-link to=""
                    class="inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-gray-900 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-gray-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 mr-2" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clip-rule="evenodd" />
                    </svg>
                    Try our free background remover
                </router-link>
            </div>
        </div>
    </div>
    <div class="container mx-auto px-4 py-8 sm:py-12 md:py-16 mt-8 sm:mt-12 md:mt-16 w-full sm:w-[95%] md:w-[90%]">
        <div class="flex flex-col md:flex-row-reverse items-center justify-between gap-8">
            <div class="w-full">
                <img src="../../../public/images/Frame_37319.png" class="w-full" alt="remove background">
            </div>
            <div class="w-full py-3">
                <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 pr-0 sm:pr-4 md:pr-8 lg:pr-16">
                    <span class="text-blue-500">Cool designs</span>
                    as you wish
                </h1>
                <p class="text-gray-600 mb-4 sm:mb-6 md:mb-8 text-base sm:text-lg">No need to make designs somewhere else. Freely edit and create
                    graphics using our online photo editor after the background is removed from your image.</p>
                <ul class="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    <li class="flex items-start">
                        <div class="flex-shrink-0 h-6 w-6 mt-2">
                            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
                        </div>
                        <span class="ml-2 text-gray-700 text-sm sm:text-base">Quickly remove and change the background.</span>
                    </li>
                    <li class="flex items-start">
                        <div class="flex-shrink-0 h-6 w-6 mt-2">
                            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
                        </div>
                        <span class="ml-2 text-gray-700 text-sm sm:text-base">Add texts and effects.</span>
                    </li>
                    <li class="flex items-start">
                        <div class="flex-shrink-0 h-6 w-6 mt-2">
                            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
                        </div>
                        <span class="ml-2 text-gray-700 text-sm sm:text-base">Edit the foreground manually using the background eraser
                            tool.</span>
                    </li>
                    <li class="flex items-start">
                        <div class="flex-shrink-0 h-6 w-6 mt-2">
                            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
                        </div>
                        <span class="ml-2 text-gray-700 text-sm sm:text-base">Available presets and templates for marketplaces.</span>
                    </li>
                </ul>
                <router-link to=""
                    class="inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-gray-900 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-gray-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 mr-2" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clip-rule="evenodd" />
                    </svg>
                    Try our free background remover
                </router-link>
            </div>
        </div>
    </div>
    <div class="container mx-auto px-4 py-8 sm:py-12 md:py-16 mt-8 sm:mt-12 md:mt-16 w-full sm:w-[95%] md:w-[90%]">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="w-full">
                <img src="../../../public/images/easy-api.png" class="w-full" alt="remove background">
            </div>

            <div class="w-full py-3">
                <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 pr-0 sm:pr-4 md:pr-8 lg:pr-16">
                    <span class="text-blue-500">Easy API</span>
                    integration for speedy workflow
                </h1>
                <p class="text-gray-600 mb-4 sm:mb-6 md:mb-8 text-base sm:text-lg">Integrate our API to your existing systems with just few lines of code.</p>
                <ul class="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    <li class="flex items-start">
                        <div class="flex-shrink-0 h-6 w-6 mt-2">
                            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
                        </div>
                        <span class="ml-2 text-gray-700 text-sm sm:text-base">Reliable, efficient & scalable.</span>
                    </li>
                    <li class="flex items-start">
                        <div class="flex-shrink-0 h-6 w-6 mt-2">
                            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
                        </div>
                        <span class="ml-2 text-gray-700 text-sm sm:text-base">Optimized for different purposes and use-case.</span>
                    </li>
                    <li class="flex items-start">
                        <div class="flex-shrink-0 h-6 w-6 mt-2">
                            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
                        </div>
                        <span class="ml-2 text-gray-700 text-sm sm:text-base">99% uptime guarantee.</span>
                    </li>
                    <li class="flex items-start">
                        <div class="flex-shrink-0 h-6 w-6 mt-2">
                            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
                        </div>
                        <span class="ml-2 text-gray-700 text-sm sm:text-base">100% GDPR compliant file storage.</span>
                    </li>
                    <li class="flex items-start">
                        <div class="flex-shrink-0 h-6 w-6 mt-2">
                            <div class="h-2 w-2 bg-gray-800 rounded-full"></div>
                        </div>
                        <span class="ml-2 text-gray-700 text-sm sm:text-base">Dedicated customer support.</span>
                    </li>
                </ul>
                <router-link to=""
                    class="inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-gray-900 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-gray-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 mr-2" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clip-rule="evenodd" />
                    </svg>
                    Try our free background remover
                </router-link>
            </div>
        </div>
    </div>
    <AppSteps />
    <AppFaq />
</template>

<script setup>
import { ref } from 'vue';
import AppSteps from '../common/AppSteps.vue';
import AppFaq from '../common/AppFaq.vue';

const categories = ['People', 'Product', 'Cars', 'Animals', 'Graphics', 'Real Estate']
const activeTab = ref('People');

const setActiveTab = (tab) => {
    activeTab.value = tab;
}

</script>