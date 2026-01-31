import {computed, toValue, type MaybeRefOrGetter} from "vue";
import {useFetch} from "./useFetch.ts";
import type PokeapiResponseApi from "../interfaces/pokeapi-response-api.ts"

interface Pokemon {
    id: number,
    name: string,
    image: string
}

export const usePokemonInfo = (pokemonId: MaybeRefOrGetter<number>) => {

    const {data, hasError, isLoading, error} = useFetch<PokeapiResponseApi>(() => 
        `https://pokeapi.co/api/v2/pokemon/${toValue(pokemonId)}`
    )

    const pokemon = computed<Pokemon | null>(() => {
        if (!data.value) return null

        return {
            id: data.value.id ?? 0,
            name: data.value.name ?? 'Unknown',
            image: data.value.sprites?.other?.dream_world?.front_default ?? ''
        }
    })

    return {
        pokemon,
        hasError,
        isLoading,
        error
    }
}