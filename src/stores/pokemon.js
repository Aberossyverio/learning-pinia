import { defineStore } from "pinia";
import { ref } from "vue";

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemonDetails = ref({});

  async function getPokemonDetails(name) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const result = await response.json();
      pokemonDetails.value = result;
    } catch (error) {
      console.error("Failed to fetch Pokemon details:", error);
    }
  }

  return {
    pokemonDetails,
    getPokemonDetails,
  };
});
