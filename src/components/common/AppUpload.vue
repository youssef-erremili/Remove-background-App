<template>
    <div>
        <div class="w-full max-w-md py-12 rounded-3xl shadow-[0_12px_48px_-8px_rgba(0,0,0,0.16)]"> 
            <div class="flex flex-col items-center justify-center space-y-6">
                <div class="relative p-3 overflow-hidden">
                    <button class="max-w-xs cursor-pointer flex items-center justify-center gap-2 py-4 px-10 bg-[#4e7efe] hover:bg-[#376cff] text-white font-medium rounded-2xl shadow-md transition-all duration-200 transform hover:scale-[1.02]">
                        <img src="../../../public/images/upload.png" alt="icon upload">
                        <span class="font-light">Upload Your Image</span>
                    </button>
                    <input class="cursor-pointer w-full h-full opacity-0 absolute top-0 left-0" type="file" name="file" id="file">
                </div>
                <div class="flex flex-col items-center text-center space-y-2">
                    <p class="text-gray-500">Or Drop an image,</p>
                    <p class="text-gray-500">
                        paste image with
                        <span class="inline-flex items-center px-2 py-0.5 text-sm text-gray-700 bg-gray-100 rounded">
                            Ctrl + V
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>