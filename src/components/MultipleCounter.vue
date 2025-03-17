<script setup>
import { ref } from 'vue';
import Counter from './Counter.vue';
import CounterStateless from './CounterStateless.vue';

const counter1 = "Eka"
const counter2 = "Bayu"

const counter = ref(0)

function increment(value) {
    counter.value += value
}

</script>

<template>

    <h1>Ini counter pertama</h1>
    <Counter :name="counter1" initial-count="10"/>
    <h1>Ini counter kedua</h1>
    <Counter v-bind:name="counter2" initial-count="20"/>

    <CounterStateless name="Joko" :counter="counter" :increment="1" @click="increment"/>
    <CounterStateless name="Tingkir" :counter="counter" :increment="3" @click="increment"/>
    
</template>

<style scoped>
</style>