async function get_pokemon(): Promise<{ pokemon: { name: string }[] }> {
	return new Promise((resolve, reject) => {
		setTimeout(
			() =>
				resolve({
					pokemon: [{ name: 'Pikachu' }, { name: 'Hitmonlee' }, { name: 'Squirtle' }]
				}),
			3000
		);
	});
}

async function get_users(): Promise<{ users: { name: string }[] }> {
	return new Promise((resolve, reject) => {
		setTimeout(
			() =>
				resolve({
					users: [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Carol' }]
				}),
			2000
		);
	});
}

async function get_colors(): Promise<{ colors: { name: string }[] }> {
	return new Promise((resolve, reject) => {
		setTimeout(
			() =>
				resolve({
					colors: [{ name: 'Red' }, { name: 'Green' }, { name: 'Blue' }]
				}),
			1000
		);
	});
}

export type PreloadedData = {
	pokemon: { name: string }[];
	users: { name: string }[];
	colors: { name: string }[];
};

export const prerender = true;

// Assume this is configured to prerender in svelte.config.js

export async function load() {
	const pokemon_promise = get_pokemon();
	const users_promise = get_users();
	const colors_promise = get_colors();

	const response: PreloadedData = {
		pokemon: (await pokemon_promise).pokemon,
		users: (await users_promise).users,
		colors: (await colors_promise).colors
	};

	return response;
}
