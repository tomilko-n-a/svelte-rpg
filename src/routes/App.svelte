<script>
	import {hp, currentScene, isAlive} from '$lib/gameStore.js'
	import PlayerUI from '$lib/components/PlayerUI.svelte'
	import sceneForest from '$lib/scenes/sceneForest.svelte';
	import sceneTown from '$lib/scenes/sceneTown.svelte';
	import sceneBattle from '$lib/scenes/sceneBattle.svelte';
	import sceneEndGame from '$lib/scenes/sceneEndGame.svelte';

	/** @type {Record<string, any>} */
	const scenes = {
	    "Forest": sceneForest, 
	    "Town": sceneTown,
		"Battle": sceneBattle,
	    "End Game": sceneEndGame
	};

	const SvelteComponent = $derived(scenes[$currentScene] || sceneForest);

</script>

{#if $isAlive}
<PlayerUI/>
{/if}
<SvelteComponent/>

