import {computed, ref} from "vue";

export const usePaginatePokemon = ( id: number = 1) => {

    const actualPokemonId = ref(id)

    const prevPokemon = () => actualPokemonId.value--
    const nextPokemon = () => actualPokemonId.value++

    const hasPrevPokemon = computed(() => actualPokemonId.value > 1)
    const hasNextPokemon = computed(() => actualPokemonId.value < 151)

    return {
        // Attributes
        pokemonId: actualPokemonId,
        // Computed
        hasPrevPokemon,
        hasNextPokemon,
        // Methods
        prevPokemon,
        nextPokemon
    }
}