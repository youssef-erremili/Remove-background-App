<script setup>
import { ref, reactive } from 'vue';

const activeTab = ref('Remove')
const frequentAskedQuestions = reactive([
    {
        tab: 'Remove',
        question: 'How to remove background from picture?',
        answer: 'Simply upload the image and let the app do the work for you! Photoroom uses AI to automatically delete the background from your photo, allowing you to easily customize and edit your images for free.',
    },
    {
        tab: 'Phone',
        question: 'Can I remove the background on my phone?',
        answer: 'Yes, you can either remove the background on your phone with the Photoroom in your browser or with the Photoroom app. The app is available for both iOS and Android devices, allowing you to easily edit and customize your images on-the-go.',
    },
    {
        tab: 'Free',
        question: 'Is the background remover tool free?',
        answer: 'Yes, the background remover tool from Photoroom is completely free to use. You can upload your images and remove their backgrounds without any cost or limitations.',
    },
    {
        tab: 'Color',
        question: 'How can I change the background color?',
        answer: 'Upload the photo of your choice and then click on the different color options. You can choose between colors that we pre-select for you or choose your own unique color.',
    },
    {
        tab: 'Benefit',
        question: 'Who can benefit from using the background remover tool?',
        answer: 'Whether you are a social media manager, marketer, or entrepreneur, the Background Remover tool can transform the way you create visuals for your business or personal projects. This tool offers a range of benefits, such as helping users to create stunning visuals, save time, and streamline their creative process.',
    },
    {
        tab: 'Importance',
        question: 'Why is it important to remove the background of product pictures?',
        answer: 'Removing the background from product pictures enhances the focus on the product, maintains consistency and branding, provides versatility for marketing materials, allows for contextual flexibility, facilitates product comparison, and improves the overall aesthetics of your product listings.',
    }
]);


const changeTab = (tab) => {
    activeTab.value = tab
}

</script>

<template>
    <section class="py-12 md:py-16 lg:py-24 mt-6 md:mt-8 lg:mt-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mb-8 md:mb-12 lg:mb-16">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-manrope text-center font-bold text-gray-900 leading-tight md:leading-[3.25rem]">
                    You asked, we answered
                </h1>
            </div>

            <div v-for="(item, index) in frequentAskedQuestions" :key="index"
                class="py-4 px-3 border-b border-solid border-gray-200 transition-all duration-500">
                <button @click="changeTab(item.tab)" class="w-full flex items-center justify-between cursor-pointer">
                    <h1 class="font-medium text-lg sm:text-xl my-2 text-gray-700">{{ item.question }}</h1>
                    <svg class="text-gray-500 transition-transform duration-300 ease-in-out flex-shrink-0 ml-2"
                        :class="{ 'rotate-180': activeTab === item.tab }" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="overflow-hidden transition-all duration-500 ease-in-out" :class="{ 'max-h-0 opacity-0': activeTab !== item.tab, 'max-h-96 opacity-100': activeTab === item.tab }">
                    <p class="text-sm sm:text-base text-gray-600 mt-2 pb-2 leading-6">{{ item.answer }}</p>
                </div>
            </div>
        </div>
    </section>
</template>