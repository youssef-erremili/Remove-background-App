<template>
    <div>
        <nav class="max-w-4xl mx-auto p-4">
            <ul class="flex flex-wrap space-x-4 justify-center">
                <li v-for="(category, index) in categories" :key="index">
                    <button
                        @click="setActiveTab(category)" 
                        class="px-4 py-2 font-medium cursor-pointer focus:outline-none"
                        :class ="[activeTab === category ? 'border-b-2 border-blue-600 text-blue-600' : '' ]">
                        {{ category }}
                    </button>
                </li>
            </ul>
        </nav>
    </div>
    <div>
        <div v-if="activeTab === 'People'" class="mx-auto max-w-7/12 rounded-3xl overflow-hidden">
            <img src="/images/visualize-human-after.png" class="w-full rounded-2xl" alt="visualize-human-after">
        </div>
        <div v-if="activeTab === 'Product'" class="mx-auto max-w-7/12 rounded-3xl overflow-hidden">
            <img src="/images/visualize-product-after.png" class="w-full rounded-2xl" alt="visualize-human-after">
        </div>
        <div v-if="activeTab === 'Cars'" class="mx-auto max-w-7/12 rounded-3xl overflow-hidden">
            <img src="/images/visualize-car-after.png" class="w-full rounded-2xl" alt="visualize-human-after">
        </div>
        <div v-if="activeTab === 'Animals'" class="mx-auto max-w-7/12 rounded-3xl overflow-hidden">
            <img src="/images/visualize-animal-before.jpg" class="w-full rounded-2xl" alt="visualize-human-after">
        </div>
        <div v-if="activeTab === 'Graphics'" class="mx-auto max-w-7/12 rounded-3xl overflow-hidden">
            <img src="/images/visualize-graphics-before.jpg" class="w-full rounded-2xl" alt="visualize-human-after">
        </div>
        <div v-if="activeTab === 'Real Estate'" class="mx-auto max-w-7/12 rounded-3xl overflow-hidden">
            <img src="/images/visualize-real-estate-before.jpg" class="w-full rounded-2xl" alt="visualize-human-after">
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