<script>
	import Inventory from '$lib/components/Inventory.svelte'
	import {heroName, hp, xp, inventory, level} from '$lib/gameStore.js'
	import {useItem} from '$lib/gameActions.js'
</script>

<div style="display:flex; gap:10px" >
	<p>{$heroName}</p>
	<p>|</p>
	<p>Здоров'я: {$hp}</p>
	<p>|</p>
	<p>Досвід: {$xp}</p>
	<p>|</p>
	<p>Рівень: {$level}</p>
</div>
<Inventory items={$inventory} onUse={useItem}/>
<hr>
