<script>
	import { sceneManager } from '$lib/core/scenesManager.svelte.js';
	import { initGameLoop } from '$lib/core/gameManager.svelte.js';
	import PlayerUI from '$lib/components/PlayerUI.svelte'
	import { onMount } from 'svelte';

	onMount(() => {
			const cleanup = initGameLoop();
			return () => cleanup(); // Важливо: чистимо корінь при знищенні
		});
	const CurrentScene = $derived(sceneManager.currentComponent);
</script>

<PlayerUI/>
<CurrentScene/>

