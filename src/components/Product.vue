<script setup>
import { ref, watch, watchEffect } from 'vue';
import ProductDetail from './ProductDetail.vue';

const productId = ref("product1")
const product = ref(null)

// watch(productId, async (newVal, oldVal) => {
//     product.value = await response.json()
//     const response = await fetch(`${newVal}.json`)
// },{
//     immediate: true
// })

watchEffect(() => {
    if (productId.value) {
        fetch(`${productId.value}.json`)
            .then(response => response.json())
            .then(data => product.value = data)
    } else {
        product.value = null
    }
})

</script>

<template>
    <h1>Product List</h1>
    <label for="productId">
        Product Id :
        <select name="productId" id="productId" v-model="productId">
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            <option value="product3">Product 3</option>
            <option value="product4">Product 4</option>
        </select>
    </label>
    <div v-if="product">
        <ProductDetail  :id="product.id" 
                        :name="product.name" 
                        :price="product.price" />
        <!-- <p>{{ product.id }}</p>
        <p> <b>{{ product.name }}</b></p>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p> -->
    </div>
</template>

<style scoped>
</style>