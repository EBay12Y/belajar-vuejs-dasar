<script setup>
import { nextTick, ref } from 'vue';

const props = defineProps({
    name: String,
    initialCount: Number,
});

let counter = ref({
    count: Number(props.initialCount),
    name: 'ini',
});

async function increment() {
    // console.info('increment counter: ', counter.value.count);
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
    <h3>Counter punya {{ props.name }} nih bos</h3>
    <p id="count">Counter {{ counter.name }} : {{ counter.count }}</p>
    <button v-on:click="increment">Increment</button>
</div>
</template>

<style scoped>
</style>