<script setup lang="ts">

import {usePokemonInfo} from "../composables/usePokemonInfo.ts";
import {usePaginatePokemon} from "../composables/usePaginatePokemon.ts";


const {pokemonId, prevPokemon, nextPokemon, hasPrevPokemon, hasNextPokemon} = usePaginatePokemon()
const {pokemon, hasError, isLoading, error} = usePokemonInfo(pokemonId)

</script>

<template>

  <section v-if="isLoading">
    Loading...
  </section>

  <section v-else-if="hasError">
    <span>Error</span>
    <span>{{ error?.message }}</span>
  </section>

  <section v-else-if="pokemon">
    <h2>{{ pokemon.name.toUpperCase() }}</h2>
    <p>ID: {{ pokemon.id }}</p>
    <div class="pokemon-info">
      <button :disabled="!hasPrevPokemon" @click="prevPokemon">Prev</button>
      <img :src="pokemon.image" alt="Pokemon Image"/>
      <button :disabled="!hasNextPokemon" @click="nextPokemon">Next</button>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 1rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pokemon-info {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}
img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

</style>