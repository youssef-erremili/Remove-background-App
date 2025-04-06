<template>
    <div class="w-full py-16 mt-10">
        <div class="max-w-6xl mx-auto px-4 text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {{ title }}
            </h1>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto">
                {{ slogane }}
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        Type: String,
        required: true,
    },
    slogane: {
        Type: String,
        required: true,
    },
})
</script>