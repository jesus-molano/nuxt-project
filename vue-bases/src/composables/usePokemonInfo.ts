import {ref} from "vue";

interface PokemonInfo {
    id: number,
    name: string,
    image: string
}
export const usePokemonInfo = async () => {
    const actualPokemonId = ref(1)

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${actualPokemonId.value}`)
    const data = await response.json()

    const pokemonInfo = ref<PokemonInfo | null>(null)
    pokemonInfo.value = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default
    }


    return {
        pokemonInfo
    }
}