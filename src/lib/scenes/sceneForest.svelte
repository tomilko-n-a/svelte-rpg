<script>
	// sceneForest.svelte
	import {takeDamage, changeScene, addItemToInventory, checkItem, questActionTakeKey, randomEvent} from '$lib/gameActions.js'
	import { inventory, flags} from '$lib/gameStore.js';
	$effect(() => {
        randomEvent(50, "Battle"); // 30% шанс нападу вовка при вході
    });
</script>
<h1>Ліс</h1>
{#if !$flags.cityGateKeyTaken}
<button onclick={questActionTakeKey}>Підняти старий ключ</button>
{/if}
<button onclick={() => takeDamage(5,10)}>Наступити на пастку</button>
<button onclick={() => changeScene("Town")}>Піти у місто</button>