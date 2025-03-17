<script setup>
import { inject } from 'vue';

const profile = inject('profile');
</script>

<template>
    <h1>Profile</h1>
    <p>Name: {{ profile.name }}</p>
    <p>Email: {{ profile.email }}</p>
</template>

<style scoped>

h1 {
    font-size: 2em;
    color: green;
}

p {
    font-size: 1.2em;
    color: #666;
}
</style>