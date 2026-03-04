<script>
	import Inventory from '$lib/components/Inventory.svelte'
	import {heroName, hp, hpMax, xp, inventory, level, gold, currentDay, strengthModifier} from '$lib/gameStore.js'
	import {useItem} from '$lib/gameActions.js'
</script>
<div>
	<div>
	<p> День: {$currentDay}</p>
	<p>|</p>
	</div>
	<div>
		<p>{$heroName}</p>
		<p>|</p>
		<p>Здоров'я: {$hp}/{$hpMax}</p>
		<p>|</p>
		<p>Золото: {$gold}</p>
		<p>|</p>
		<p>Досвід: {$xp}</p>
		<p>|</p>
		<p>Рівень: {$level}</p>
		<p>|</p>
		<p>|Модифікатор сили: {$strengthModifier}</p>
	</div>
</div>

<Inventory items={$inventory} onUse={useItem}/>
<hr>

<style>
	div {
		display:flex;
		gap:10px;
	}
</style>
