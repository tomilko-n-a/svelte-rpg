<script>
	// sceneForest.svelte
	import {takeDamage, changeScene, addItemToInventory, checkItem, questActionTakeKey} from '$lib/gameActions.js'
	import { inventory, flags} from '$lib/gameStore.js';
</script>

<h1>Ліс</h1>
{#if !$flags.cityGateKeyTaken}
<button on:click={questActionTakeKey}>Підняти старий ключ</button>
{/if}
<button on:click={takeDamage}>Наступити на пастку</button>
<button on:click={() => changeScene("Town")}>Піти у місто</button>