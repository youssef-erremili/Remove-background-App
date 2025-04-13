<template>
    <AppNavbar />
    <!-- Main content area - Hide when image is uploaded -->
    <div v-if="!uploadedImage" class="mt-16 min-h-screen flex flex-col items-center justify-center p-4">
        <div class="w-full max-w-5xl mx-auto text-center ">
            <h1 class="text-4xl font-bold text-gray-700 mb-8">Upload an image to remove background</h1>
            <div class="bg-white rounded-xl shadow-lg p-12 flex flex-col items-center justify-center">
                <div
                    class="w-full h-60 flex flex-col items-center justify-center border-2 border-dashed border-transparent rounded-lg">
                    <div class="relative p-3 overflow-hidden">
                        <button
                            class="cursor-pointer flex items-center justify-center gap-2 py-4 px-10 bg-[#4e7efe] hover:bg-[#376cff] text-white font-medium rounded-2xl shadow-md transition-all duration-200 transform hover:scale-[1.02]">
                            <img src="../../../public/images/upload.png" alt="icon upload">
                            <span class="font-light">Upload Your Image</span>
                        </button>
                        <input @change="handleInputMeme"
                            class="cursor-pointer w-full h-full opacity-0 absolute top-0 left-0" type="file" name="file"
                            accept="image/jpeg, image/png, image/gif, image/webp" id="file">
                    </div>
                    <p class="text-gray-500 text-sm">or drag and drop images</p>
                    <p class="text-gray-500 text-sm mt-1">Paste image or <span
                            class="inline-flex items-center bg-gray-100 px-2 py-0.5 rounded text-xs font-mono">Ctrl +
                            V</span></p>
                </div>
            </div>

            <p class="text-gray-400 mt-8">No image uploaded yet</p>

            <div class="mt-8">
                <p class="text-gray-600 mb-2">No image?</p>
                <p class="text-gray-600 mb-3">Try one of these:</p>
                <div class="flex justify-center space-x-2">
                    <img @click="handleSampleImage('../../public/images/sample-4.jpg')"
                        src="../../public/images/sample-4.jpg" alt="Cat example"
                        class="w-12 h-12 rounded-lg object-cover cursor-pointer hover:ring-2 hover:ring-blue-400">
                    <img @click="handleSampleImage('../../public/images/sample-21.jpg')"
                        src="../../public/images/sample-21.jpg" alt="Bottle example"
                        class="w-12 h-12 rounded-lg object-cover cursor-pointer hover:ring-2 hover:ring-blue-400">
                    <img @click="handleSampleImage('../../public/images/sample-26.jpg')"
                        src="../../public/images/sample-26.jpg" alt="Car example"
                        class="w-12 h-12 rounded-lg object-cover cursor-pointer hover:ring-2 hover:ring-blue-400">
                    <img @click="handleSampleImage('../../public/images/sample-13.jpg')"
                        src="../../public/images/sample-13.jpg" alt="Person example"
                        class="w-12 h-12 rounded-lg object-cover cursor-pointer hover:ring-2 hover:ring-blue-400">
                </div>
            </div>
        </div>
    </div>

    <!-- Show editor immediately after image upload -->
    <div v-if="uploadedImage" class="mt-16 min-h-screen p-4">
        <div class="w-full max-w-5xl mx-auto mb-8">
            <h1 class="text-4xl font-bold text-gray-700 mb-8 text-center">AI Background Remover</h1>

            <!-- Preview of uploaded image with remove background button -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-8 text-center">
                <div class="flex flex-col items-center justify-center">
                    <img :src="uploadedImage" alt="Uploaded Image" class="max-h-64 rounded-xl shadow-md mb-6" />

                    <button @click="removeBackground" :disabled="processingState.isProcessing"
                        class="cursor-pointer flex items-center justify-center mx-auto gap-2 py-3 px-8 bg-[#4e7efe] hover:bg-[#376cff] text-white font-medium rounded-xl shadow-md transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">
                        <span v-if="processingState.isProcessing">Processing...</span>
                        <span v-else>Remove Background</span>
                    </button>
                </div>
            </div>

            <!-- Editor section -->
            <div v-if="processingState.removedBgImage || processingState.isProcessing"
                class="bg-white rounded-xl shadow-lg p-4 max-w-4xl mx-auto">
                <!-- Tabs -->
                <div class="flex justify-between items-center mb-4">
                    <div class="flex space-x-2">
                        <button @click="processingState.activeTab = 'original'"
                            class="px-4 py-2 font-medium rounded-full"
                            :class="processingState.activeTab === 'original' ? 'bg-gray-100 text-gray-800' : 'text-gray-500'">
                            Original
                        </button>
                        <button @click="processingState.activeTab = 'removed'"
                            class="px-4 py-2 font-medium rounded-full"
                            :class="processingState.activeTab === 'removed' ? 'bg-gray-100 text-gray-800' : 'text-gray-500'">
                            Removed Background
                        </button>
                    </div>
                    <button @click="closeEditor" class="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>

                <!-- Main content area -->
                <div class="flex flex-col md:flex-row gap-6">
                    <!-- Image preview -->
                    <div class="w-full md:w-7/12 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center"
                        style="min-height: 400px;">
                        <div v-if="processingState.isProcessing" class="text-center p-8">
                            <div
                                class="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4">
                            </div>
                            <p class="text-gray-600">Processing your image...</p>
                        </div>
                        <img v-else-if="processingState.activeTab === 'original' && processingState.originalImage"
                            :src="processingState.originalImage" alt="Original Image"
                            class="max-w-full max-h-[450px] object-contain" />
                        <img v-else-if="processingState.activeTab === 'removed' && processingState.removedBgImage"
                            :src="processingState.removedBgImage" alt="Background Removed"
                            class="max-w-full max-h-[450px] object-contain" />
                        <div v-else class="text-gray-500 text-center p-8">
                            No image available
                        </div>
                    </div>

                    <!-- Right sidebar -->
                    <div class="w-full md:w-5/12 flex flex-col gap-4">
                        <!-- Tools section -->
                        <div class="flex gap-4 mb-2">
                            <button class="flex-1 py-3 px-4 bg-blue-50 text-blue-600 rounded-lg font-medium">
                                Erase/Restore
                            </button>
                            <button class="flex-1 py-3 px-4 bg-blue-50 text-blue-600 rounded-lg font-medium">
                                Editor tools
                            </button>
                        </div>

                        <!-- Download buttons -->
                        <button @click="downloadImage(false)"
                            :disabled="!processingState.removedBgImage || processingState.isProcessing"
                            class="w-full py-3 px-4 bg-blue-500 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed">
                            Download
                        </button>
                        <p class="text-center text-gray-500 text-sm">
                            {{ processingState.imageDimensions.width }} x {{ processingState.imageDimensions.height }}
                            px
                        </p>

                        <!-- Download HD button -->
                        <button @click="downloadImage(true)"
                            :disabled="!processingState.removedBgImage || processingState.isProcessing"
                            class="w-full py-3 px-4 bg-blue-50 text-blue-600 rounded-lg font-medium mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                            Download HD
                        </button>
                        <p class="text-center text-gray-500 text-sm">
                            {{ Math.round(processingState.imageDimensions.width * 1.5) }} x {{
                                Math.round(processingState.imageDimensions.height * 1.5) }} px
                        </p>

                        <!-- More challenging images section -->
                        <div class="mt-8">
                            <p class="text-center text-gray-600 mb-4">More challenging images?</p>
                            <button @click="hireEditor"
                                class="w-full py-3 px-4 bg-blue-50 text-blue-600 rounded-lg font-medium">
                                Hire professional editors
                            </button>
                            <p class="text-center text-gray-500 text-sm mt-2">Have image back within 24 hours</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Alert notification -->
    <div v-if="alert"
        class="fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300"
        :class="{ 'opacity-100': alert, 'opacity-0': !alert }">
        {{ alertMsg }}
    </div>

    <AppFooter />
</template>

<script setup>
// Add auto-processing of background removal when image is uploaded
import { ref, provide, inject, reactive, watch } from 'vue';
import AppNavbar from '@/components/common/AppNavbar.vue';
import { useRouter } from 'vue-router';
import AppFooter from '@/components/common/AppFooter.vue';

const router = useRouter();
const alert = ref(false)
const alertMsg = ref("")
const uploadedImage = inject('uploadedImage')
const triggerAlert = inject('triggerAlert')
const apiKey = ref('43be7e33-ed56-4685-ab7e-d412fc980bfb')

// Image processing states
const processingState = reactive({
    isProcessing: false,
    originalImage: null,
    removedBgImage: null,
    activeTab: 'original',
    imageDimensions: { width: 0, height: 0 },
    error: null
})

// Re-provide the triggerAlert for child components
provide('triggerAlert', (msg) => {
    alertMsg.value = msg
    alert.value = true
    setTimeout(() => {
        alert.value = false
    }, 4000);
})

// Add the missing handleInputMeme function
const handleInputMeme = (event) => {
    const file = event.target.files[0];
    const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

    if (!file) {
        triggerAlert("Make sure you upload right file extension!");
        return;
    }

    if (!allowedMimeTypes.includes(file.type)) {
        triggerAlert("Unsupported file type!")
        return
    }

    const reader = new FileReader()
    reader.onload = function () {
        const memeFile = reader.result
        uploadedImage.value = memeFile;
        processingState.originalImage = memeFile;

        // Get image dimensions
        const img = new Image();
        img.onload = () => {
            processingState.imageDimensions.width = img.width;
            processingState.imageDimensions.height = img.height;

            // Auto-start background removal process once dimensions are loaded
            removeBackground();
        };
        img.src = memeFile;

        triggerAlert("File uploaded successfully!")
        router.push({ path: '/upload' })
    }

    reader.readAsDataURL(file)
}

// Add function to handle sample images
const handleSampleImage = (imagePath) => {
    uploadedImage.value = imagePath;
    processingState.originalImage = imagePath;

    // Get image dimensions for the sample image
    const img = new Image();
    img.onload = () => {
        processingState.imageDimensions.width = img.width;
        processingState.imageDimensions.height = img.height;

        // Auto-start background removal process once dimensions are loaded
        removeBackground();
    };
    img.src = imagePath;

    triggerAlert("Sample image selected!");
    router.push({ path: '/upload' });
}

// Background removal function using fetch API
const removeBackground = async () => {
    if (!processingState.originalImage) {
        triggerAlert("Please upload an image first");
        return;
    }

    processingState.isProcessing = true;
    processingState.error = null;

    try {
        // Convert base64 to blob for file upload
        const fetchBlob = async (dataUrl) => {
            const response = await fetch(dataUrl);
            const blob = await response.blob();
            return blob;
        };

        // Create FormData object
        const formData = new FormData();

        // If it's a path to an image (sample image)
        if (processingState.originalImage.startsWith('http') || processingState.originalImage.startsWith('/')) {
            formData.append("image_url", processingState.originalImage);
        } else {
            // If it's a base64 data URL
            const blob = await fetchBlob(processingState.originalImage);
            formData.append("image_file", blob, "image.png");
        }

        // Fetch options
        const options = {
            method: 'POST',
            body: formData,
            headers: {
                'Rm-Token': apiKey.value
            }
        };

        // Show processing message
        triggerAlert("Removing background...");

        // Make the API call
        const response = await fetch('https://api.removal.ai/3.0/remove', options);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`API returned status: ${response.status}`);
        }

        // Parse the JSON response
        const result = await response.json();

        if (result.url) {
            processingState.removedBgImage = result.url;
            processingState.activeTab = 'removed';
            triggerAlert("Background removed successfully!");
        } else {
            throw new Error("Failed to get processed image URL");
        }

    } catch (error) {
        console.error('Error removing background:', error);
        processingState.error = error.message;
        triggerAlert("Error removing background: " + error.message);
    } finally {
        processingState.isProcessing = false;
    }
};

// Function to download the processed image
const downloadImage = async (isHD = false) => {
    const imageUrl = processingState.removedBgImage;

    if (!imageUrl) {
        triggerAlert("No processed image to download");
        return;
    }

    try {
        // Fetch the image
        const response = await fetch(imageUrl);
        const blob = await response.blob();

        // Create download link
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = `removed-bg${isHD ? '-hd' : ''}.png`;

        // Trigger download
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        triggerAlert(`${isHD ? 'HD ' : ''}Image downloaded successfully!`);
    } catch (error) {
        console.error('Error downloading image:', error);
        triggerAlert("Error downloading image: " + error.message);
    }
};

// Function to close the editor modal
const closeEditor = () => {
    processingState.removedBgImage = null;
    processingState.activeTab = 'original';
};

// Function to hire professional editors
const hireEditor = () => {
    // Implement your logic to hire professional editors
    triggerAlert("Professional editing request submitted!");
    // You could redirect to a contact form or another page
};
</script>