<script lang="ts">
	import { preloadData } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { PreloadedData } from '../__where_we_load_data.html/+page.server';

	let users: { name: string }[] = [];
	let colors: { name: string }[] = [];

	onMount(async () => {
		const preload_obj = await preloadData('/__where_we_load_data.html');
		if (preload_obj.type == 'loaded') {
			const preloaded_data = preload_obj.data as PreloadedData;
			users = preloaded_data.users;
			colors = preloaded_data.colors;
		}
	});
</script>

<h1>Page</h1>

{#if users.length}
	<h2>Users</h2>
	<ul>
		{#each users as user}
			<li>{user.name}</li>
		{/each}
	</ul>
{:else}
	<p>No users here</p>
{/if}

{#if colors.length}
	<h2>Colors</h2>
	<ul>
		{#each colors as color}
			<li>{color.name}</li>
		{/each}
	</ul>
{:else}
	<p>No colors here</p>
{/if}
