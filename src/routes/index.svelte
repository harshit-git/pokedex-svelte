<script>
	import { pokemon } from '../stores/pokestop';
	import PokemanCard from '../components/pokemanCard.svelte';

	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			//search pokemon
			filteredPokemon = $pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			//show all pokemon
			filteredPokemon = $pokemon;
		}
	}
</script>

<svelte:head>
	<title>SvelteKit Pokedex App</title>
</svelte:head>
<h1 class="text-4xl my-8 text-center uppercase">Welcome to Pokedex App</h1>

<input
	type="text"
	class="w-full p-4 mb-10 text-lg text-center rounded-md border-2 border-gray-200"
	placeholder="Search for a pokemon"
	bind:value={searchTerm}
/>

<div class="grid gap-4 grid-cols-1 md:grid-cols-2">
	{#each filteredPokemon as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</div>
