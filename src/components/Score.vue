<script setup>
import { ref } from 'vue';

const score = ref(55)
</script>

<template>
    <h1>Score App</h1>
    <div v-if="score > 90">
        <p>Yeay cool score {{ score }}</p>
    </div>
    <div v-else-if="score > 80">
        <p>Good score {{ score }}</p>
    </div>
    <div v-else-if="score > 70">
        <p>Not bad score {{ score }}</p>
    </div>
    <div v-else>
        <p>Bad score {{ score }}</p>
    </div>
</template>

<style scoped>
.hello {
  color: green;
}

</style>