<script>
	import Inventory from '$lib/components/Inventory.svelte'
	import { player } from '$lib/state/player.svelte.js'
	import { currentDay } from '$lib/gameStore.js'
	import { useItem } from '$lib/gameActions.svelte.js'
</script>
<div>
	<div>
	<p> День: {$currentDay}</p>
	<p>|</p>
	</div>
	<div>
		<p>{player.name}</p>
		<p>|</p>
		<p>Здоров'я: {player.hp}/{player.hpMax}</p>
		<p>|</p>
		<p>Золото: {player.gold}</p>
		<p>|</p>
		<p>Досвід: {player.xp}</p>
		<p>|</p>
		<p>Рівень: {player.level}</p>
		<p>|</p>
		<p>Модифікатор сили: {player.strengthModifier}</p>
	</div>
</div>

<Inventory items={player.inventory} onUse={(item) => player.removeItem(item)}/>
<hr>

<style>
	div {
		display:flex;
		gap:10px;
	}
</style>
