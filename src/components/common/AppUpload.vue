<script setup>
import router from '@/router';
import { ref, inject, provide } from 'vue';

// inital value if file input
const triggerAlert = inject('triggerAlert')
const uploadedImage = inject('uploadedImage');

const handleInputMeme = (event) => {
    const file = event.target.files[0];
    const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];
    
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
        triggerAlert("File uploaded successfully!")
        
    }
    
    reader.readAsDataURL(file)
}

</script>

<template>
    <div class="w-full max-w-xs sm:max-w-sm md:max-w-md py-6 sm:py-8 md:py-12 rounded-2xl sm:rounded-3xl shadow-[0_8px_32px_-6px_rgba(0,0,0,0.12)] sm:shadow-[0_12px_48px_-8px_rgba(0,0,0,0.16)]">
        <div class="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
            <div class="relative p-2 sm:p-3 overflow-hidden">
                <button class="max-w-xs cursor-pointer flex items-center justify-center gap-1 sm:gap-2 py-3 sm:py-4 px-6 sm:px-8 md:px-10 bg-[#4e7efe] hover:bg-[#376cff] text-white text-sm sm:text-base font-medium rounded-xl sm:rounded-2xl shadow-md transition-all duration-200 transform hover:scale-[1.02]">
                    <img src="../../../public/images/upload.png" alt="icon upload" class="w-4 h-4 sm:w-5 sm:h-5">
                    <span class="font-light">Upload Your Image</span>
                </button>
                <input @change="handleInputMeme" class="cursor-pointer w-full h-full opacity-0 absolute top-0 left-0" type="file" name="file"
                    accept="image/jpeg, image/png, image/gif, image/webp" id="file">
            </div>
            <div class="flex flex-col items-center text-center space-y-1 sm:space-y-2">
                <p class="text-gray-500 text-sm sm:text-base">Or Drop an image,</p>
                <p class="text-gray-500 text-sm sm:text-base">
                    paste image with
                    <span class="inline-flex items-center px-1.5 sm:px-2 py-0.5 text-xs sm:text-sm text-gray-700 bg-gray-100 rounded">
                        Ctrl + V
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>