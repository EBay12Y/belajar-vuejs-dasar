<script setup>
import { inject } from 'vue';

const profile = inject('profile');
</script>

<template>
    <p>Address: {{ profile.address }}</p>
</template>

<style scoped>

h1 {
    font-size: 2em;
    color: #333;
}

p {
    font-size: 1.2em;
    color: #666;
}
</style>