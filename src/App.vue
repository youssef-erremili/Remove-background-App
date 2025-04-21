<script setup>
import { RouterView } from 'vue-router';
import { provide, ref, inject } from 'vue';

import AppAlert from './components/common/AppAlert.vue';

const uploadedImage = ref(null);
const alert = ref(false);
const alertMsg = ref("");

provide('triggerAlert', (msg) => {
    alertMsg.value = msg;
    alert.value = true;
    setTimeout(() => {
        alert.value = false;
    }, 4000);
});

provide('uploadedImage', uploadedImage);

</script>

<template>
    <RouterView />
    <AppAlert :showAlert="alert" :alertMsg="alertMsg" @close="alert = false" />
</template>