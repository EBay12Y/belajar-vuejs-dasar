<script setup>
import { nextTick, ref } from 'vue';

let counter = ref({
    count: 0,
    name: 'ini',
});

async function increment() {
    console.info('increment counter: ', counter.value.count);
    counter.value = {
        name: counter.value.name,
        count: counter.value.count + 1,
    }

    await nextTick();
    console.log('incremented counter after nextTick');
}
</script>

<template>
<div>
    <h1>Counter nih bos</h1>
    <p id="count">Counter {{ counter.name }} : {{ counter.count }}</p>
    <button v-on:click="increment">Increment</button>
</div>
</template>

<style scoped>
</style>