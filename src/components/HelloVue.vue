<script setup>
console.info('Hello Vue!')

const hello = '<h1>Hello <br/><b>Vue! </b> </h1>'
const data = {
    class: 'hello',
    id: 'hello',
}
</script>

<template>
    <h1 v-bind="data">{{ hello.toUpperCase() }}</h1>
    <div :class="data.class" v-html="hello"></div>
</template>

<style scoped>
.hello {
  color: green;
}

</style>