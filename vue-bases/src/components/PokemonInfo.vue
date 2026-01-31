<script setup lang="ts">

import {usePokemonInfo} from "../composables/usePokemonInfo.ts";

const  pokemonInfo  = usePokemonInfo()

</script>

<template>

  <section>
    <h2>{{pokemonInfo.value.name}}</h2>
    <img :src="pokemonInfo.value.image" alt="">
    <button></button>
  </section>
</template>

<style scoped>

</style>