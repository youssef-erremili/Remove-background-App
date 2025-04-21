<template>
    <AppNavbar />
    <HeroSection />
    <BgRemover />
    <FeatureCard />
    <AppTestimonial />
    <AppFooter />
</template>

<script setup>
import AppNavbar from '@/components/common/AppNavbar.vue';
import HeroSection from '@/components/home/HeroSection.vue';
import BgRemover from '@/components/home/BgRemover.vue';
import FeatureCard from '@/components/home/FeatureCard.vue';
import AppFooter from '@/components/common/AppFooter.vue';
import AppTestimonial from '@/components/common/AppTestimonial.vue';
</script>
