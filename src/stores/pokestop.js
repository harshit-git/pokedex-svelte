
import { writable } from 'svelte/store';

export const pokemon = writable([]);

export const fetchPokemon = async () => {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
	const data = await response.json();

	const loadedPokemon = data.results.map((data, index) => ({
		name: data.name,
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1
			}.png`
	}));

	pokemon.set(loadedPokemon);
};

fetchPokemon();
