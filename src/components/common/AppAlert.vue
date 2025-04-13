<template>
    <div :class="[showAlert ? 'translate-y-[1rem]' : '-translate-y-full']"
        class="fixed left-0 right-0 z-[550] flex justify-center transition-transform duration-500">
        <div
            class="flex items-center justify-between w-fit px-6 py-4 rounded-lg bg-gray-800 text-white shadow-lg border-l-4 border-blue-500">
            <div class="flex items-center space-x-3">
                <!-- Alert Circle Icon (SVG) -->
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="text-blue-400">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <p class="font-light text-nowrap inline-block">{{ alertMsg }}</p>
            </div>

            <!-- X/Close Icon (SVG) -->
            <button @click="$emit('close')" class="cursor-pointer ml-3 text-gray-400 hover:text-white transition-colors rounded-full p-1 hover:bg-gray-700 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    alertMsg: {
        type: String,
        required: true,
    },
    showAlert: {
        type: Boolean,
        required: true,
        default: false
    }
})

</script>