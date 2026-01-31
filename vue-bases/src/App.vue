<script setup lang="ts">
import ShoppingCart from "./components/ShoppingCart.vue";
import {useProducts} from "./composables/useProducts.ts";
import PokemonInfo from "./components/PokemonInfo.vue";

const { products, handleDecrementAmount, handleIncrementAmount } = useProducts()

</script>

<template>
  <div>
    <h1>My cart</h1>
    <ShoppingCart
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :amount="product.amount"
        @onDecrement="handleDecrementAmount( product.id)"
        @onIncrement="handleIncrementAmount( product.id)"
    />
    <Suspense>
      <PokemonInfo />
    </Suspense>
  </div>
</template>

<style scoped>
</style>
