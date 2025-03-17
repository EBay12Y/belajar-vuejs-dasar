<script setup>
import { computed, reactive, ref } from 'vue';

const person = reactive({
    firstName: '',
    lastName: ''
})

// function sayHello() {
//     person.firstName = document.getElementById('firstName').value;
//     person.lastName = document.getElementById('lastName').value;
// }

const fullName = computed(() => {
    return person.firstName + ' ' + person.lastName;
})

function changeFirstName(event) {
    person.firstName = event.target.value;
}

function changeLastName(event) {
    person.lastName = event.target.value;
}
const counter = ref(0)

function increment() {
    counter.value++
}
</script>

<template>
<div>
    <button v-on:click="increment">Increment {{ counter }}</button> <br>
    <input placeholder="First Name" type="text" name="firstName" id="firstName" @input="changeFirstName"> <br>
    <input placeholder="Last Name" type="text" name="lastName" id="lastName" @input="changeLastName"> <br>
    <button v-on:click="sayHello">Say Hello</button>
</div>
<h1> Hello {{ fullName }}</h1>
</template>

<style scoped>
</style>