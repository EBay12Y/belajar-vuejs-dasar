<script setup>
const {counter, name, increment} = defineProps({
    counter: Number,
    name: String,
    increment: Number,
})
const emits = defineEmits(['click'])

function buttonClick() {
    emits('click', increment)
}

</script>

<template>

    <h3>Ini {{ name }} : {{ counter }}</h3>
    <button @click="emits('click', increment)">Increment {{ name }}</button>
    
</template>

<style scoped>
</style>