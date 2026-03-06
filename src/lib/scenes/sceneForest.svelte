<script>
	// sceneForest.svelte
	import { sceneManager } from '$lib/core/scenesManager.svelte.js';
	import { questActionTakeKey, randBetween } from '$lib/gameActions.svelte.js'
	import { flags } from '$lib/state/flags.svelte.js';
	import { player } from '$lib/state/player.svelte.js'

	$effect(() => {
        sceneManager.randomEvent(50, "Battle"); // 30% шанс нападу вовка при вході
    });
</script>
<h1>Ліс</h1>
{#if !flags.cityGateKeyTaken}
<button onclick={questActionTakeKey}>Підняти старий ключ</button>
{/if}
<button onclick={() => player.takeDamage(randBetween(5,10))}>Наступити на пастку</button>
<button onclick={() => sceneManager.changeScene("Battle")}>Полювати на вовків</button>
<button onclick={() => sceneManager.changeScene("Town")}>Піти у місто</button>