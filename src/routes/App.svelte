<script>
	import {currentScene} from '$lib/gameStore.js'
	import {changeScene} from '$lib/gameActions.svelte.js'
	import PlayerUI from '$lib/components/PlayerUI.svelte'
	import sceneForest from '$lib/scenes/sceneForest.svelte';
	import sceneTown from '$lib/scenes/sceneTown.svelte';
	import sceneBattle from '$lib/scenes/sceneBattle.svelte';
	import sceneEndGame from '$lib/scenes/sceneEndGame.svelte';
	import { player } from '$lib/state/player.svelte.js';

	/** @type {Record<string, any>} */
	const scenes = {
	    "Forest": sceneForest, 
	    "Town": sceneTown,
		"Battle": sceneBattle,
	    "End Game": sceneEndGame
	};

	const SvelteComponent = $derived(scenes[$currentScene] || sceneForest);

	$effect(() => {
        if (!player.isAlive) {
            changeScene("End Game");
        }
    });

</script>

{#if player.isAlive}
<PlayerUI/>
{/if}
<SvelteComponent/>

