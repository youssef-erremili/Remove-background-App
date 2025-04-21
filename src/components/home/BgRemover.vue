<script setup>
import { ref, inject, computed, watch, provide } from 'vue';
import AppLoader from '../common/AppLoader.vue';

const scrollTarget = ref(null);
const uploadedImage = inject('uploadedImage');
const removedImage = ref(null);
const tabs = ['Original', 'Removed'];
const activeTab = ref('Original');
const loader = ref(false);
const processing = ref(false);

const apiUrl = ref('https://clipdrop-api.co/remove-background/v1')
const apiKey = ref('82efb428c8e746a4850871513ba2439717f8ead954d4b18d36972911f2392a91bd7eb8254cfc0090223e84dfbe13fb55')

function scrollToTarget() {
    if (scrollTarget.value) {
        const offset = 100;
        const top = scrollTarget.value.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    }
}

const closeEditorPanel = () => {
    uploadedImage.value = false;
};

const removeBackground = async () => {
    if (!uploadedImage.value) {
        console.log('please upload image');
        return;
    }

    processing.value = true;
    loader.value = true;
    activeTab.value = tabs[1];

    try {
        const base64Response = await fetch(uploadedImage.value);
        const blob = await base64Response.blob();

        const formData = new FormData();
        formData.append('image_file', blob);

        const response = await fetch(apiUrl.value, {
            method: 'POST',
            headers: {
                'x-api-key': apiKey.value,
            },
            body: formData,
        });

        if (!response.ok) {
            console.log('something had happened');
            throw new Error(`API returned status: ${response.status}`);
        }

        const resultBlob = await response.blob();
        removedImage.value = URL.createObjectURL(resultBlob);

        // Switch to the "Removed" tab once processing is complete
        activeTab.value = tabs[1];
    } catch (error) {
        console.error(error);
    } finally {
        processing.value = false;
        loader.value = false;
    }
}

function downloadImage() {
    fetch(removedImage.value)
        .then(res => res.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'background_removed_erremili.png'; 
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url); 
        });
}

// Replace computed with watch to properly trigger scrolling when uploadedImage changes
watch(() => uploadedImage.value, (newValue) => {
    if (newValue) {
        setTimeout(() => {
            scrollToTarget();
            removeBackground();
        }, 200);
    }
}, { immediate: true });

const showDimensions = computed(() => {
    return removedImage.value !== null;
});
</script>

<template>
    <div v-if="uploadedImage" class="mt-16 min-h-screen flex flex-col items-center justify-center p-4">
        <div class="mt-16 min-h-screen p-4 w-full">
            <div class="w-full max-w-6xl mx-auto mb-8">
                <h1 class="text-4xl font-bold text-gray-700 mb-8 text-center">AI Background Remover</h1>
                <div class="bg-white rounded-xl shadow-lg p-4 max-w-5xl mx-auto">
                    <div class="flex justify-between items-center mb-4">
                        <div ref="scrollTarget" class="flex space-x-2">
                            <button @click="activeTab = tabs[0]"
                                class="cursor-pointer px-4 py-2 font-medium text-sm rounded-full"
                                :class="activeTab === tabs[0] ? 'bg-[#4e7efe] text-white' : 'bg-gray-200 text-gray-700'">
                                Original
                            </button>
                            <button @click="activeTab = tabs[1]"
                                class="cursor-pointer px-4 py-2 font-medium text-sm rounded-full"
                                :class="activeTab === tabs[1] ? 'bg-[#4e7efe] text-white' : 'bg-gray-200 text-gray-700'">
                                Removed Background
                            </button>
                        </div>
                        <button @click="closeEditorPanel" class="cursor-pointer text-gray-500 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <!-- Main content area -->
                    <div class="flex flex-col md:flex-row gap-6">
                        <div class="w-full bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                            <!-- Original tab -->
                            <div v-if="activeTab === tabs[0]" class="w-full h-[450px]">
                                <img :src="uploadedImage" alt="Original Image" class="w-full h-full object-contain" />
                            </div>

                            <!-- Removed background tab -->
                            <div v-if="activeTab === tabs[1]"
                                class="relative w-full h-[450px] flex flex-col items-center justify-center">
                                <!-- Show loader while processing -->
                                <div v-if="processing" class="flex flex-col items-center justify-center">
                                    <AppLoader class="absolute" />
                                    <p class="text-gray-600 mt-2 text-center">Processing your image...</p>
                                </div>
                                <!-- Show the processed image once available -->
                                <img v-else-if="removedImage" :src="removedImage" alt="Removed Background Image"
                                    class="w-full h-full object-contain" />
                                <!-- Show a message if no processed image is available -->
                                <p v-else class="text-gray-600">Click "Remove Background" to process your image</p>
                            </div>
                        </div>

                        <div class="md:w-[460px] flex flex-col gap-4">
                            <div class="flex gap-4 mb-2">
                                <button disabled
                                    class="flex-1 py-3 px-4 bg-blue-50 text-blue-600 rounded-lg font-medium">
                                    Erase/Restore
                                </button>
                                <button disabled
                                    class="flex-1 py-3 px-4 bg-blue-50 text-blue-600 rounded-lg font-medium">
                                    Editor tools
                                </button>
                            </div>
                            <div>
                                <button @click="downloadImage" class="cursor-pointer w-full py-3 px-4 bg-blue-500 text-white rounded-lg font-medium inline-block text-center">
                                    Download
                                </button>
                                <p v-if="showDimensions" class="text-center text-gray-500 text-sm py-1">1200px x 900px
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>