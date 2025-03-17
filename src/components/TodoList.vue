<script setup>
const items = [{
    id: 1,
    title: 'Learn Vue 3',
    completed: true
}, {
    id: 2,
    title: 'Learn React',
    completed: false
}, {
    id: 3,
    title: 'Learn Angular',
    completed: false
}]
</script>

<template>
    <h1>Todo List</h1>
    <template v-for="item in items">
        <ul :key="item.id" v-if="!item.completed">
            <li v-for="(value, key) in item">
                {{ key }}: {{ value }}
            </li>
        </ul>
    </template>
    <div v-for="i in 5">
        <p>Hello {{ i }}</p>
    </div>
</template>

<style scoped>
</style>