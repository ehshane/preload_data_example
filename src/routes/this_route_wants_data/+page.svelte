<script lang="ts">
	import { preloadData } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { PreloadedData } from '../__where_we_load_data.html/+page.server';

	let pocket_monsters: { name: string }[] = [];

	onMount(async () => {
		const preload_data_obj = await preloadData('/__where_we_load_data.html');

		if (preload_data_obj.type == 'loaded') {
			// here we can grab what we want from the data we loaded elsewhere
			const preloaded_data = preload_data_obj.data as PreloadedData;
			pocket_monsters = preloaded_data.pokemon;
		}
	});
</script>

{#if pocket_monsters.length}
	<ul>
		{#each pocket_monsters as pocket_monster}
			<li>{pocket_monster.name}</li>
		{/each}
	</ul>
{:else}
	<p>No pocket monsters here</p>
{/if}
