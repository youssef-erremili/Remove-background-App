<template>
    <div class="bg-white mt-4">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-start mt-6 sm:mt-8 md:mt-10 lg:mt-12 lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight md:leading-none md:text-5xl xl:text-6xl">
                    AI Background Remover
                </h1>
                <p class="max-w-2xl mb-6 font-light text-balance text-gray-500 lg:mb-8 text-base md:text-lg lg:text-xl">
                    Instantly remove background from any image using Pixelcut's AI background remover. It's free and no
                    sign-up required.
                </p>
                <AppUpload />
            </div>
            <div class="mt-8 sm:mt-10 md:mt-12 lg:mt-0 lg:col-span-5 flex justify-center lg:justify-end">
                <video class="rounded-2xl w-full max-w-md lg:max-w-none h-auto" autoplay muted loop playsinline>
                    <source src="/images/banner.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
    <AppHeader title="Not Just Any Other Background Removal Tool" slogane="Get precise and quick image transformations regardless of what industry you belong to!" />
</template>

<script setup>
    import AppUpload from '../common/AppUpload.vue';
    import AppHeader from '../common/AppHeader.vue';
</script>