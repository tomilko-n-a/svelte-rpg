<script>
	// @ts-nocheck
	// sceneTown.svelte
	import { changeScene, addItemToInventory, removeItemFromInventory, checkItem, questActionOpenCityGate, changeGold, changeHp} from '$lib/gameActions.svelte.js'
	import { inventory, enterToCity, gold, hpMax, currentDay} from '$lib/gameStore.js';
	import DialogeBox from '$lib/components/DialogueBox.svelte'
	import { flags } from '$lib/state/flags.svelte.js';
	import { player } from '$lib/state/player.svelte.js'

	let isTalking = $state(false)
	function onComplete() {
		isTalking = false;
		flags.visitedTheCity = true
	}


</script>
{#if isTalking == true}
<DialogeBox lines={enterToCity} onComplete={onComplete}/>
{:else}
<h1>Місто</h1>
<div class="actions-list">

	{#if flags.cityGateIsOpen}
		{#if !flags.visitedTheCity}
			<button onclick={() => isTalking = true}>Поговорити з охоронцем</button>
		{/if}
			<button disabled={player.gold < 20} onclick={() => {player.addItem("Зілля здоров'я"); player.spendGold(20)}}>Купити зілля</button>
			<button disabled={player.gold < 10} onclick={() => {
				flags.searchCoinsToday = false; 
				player.hp = player.hpMax;
				player.spendGold(10);
				$currentDay += 1;
				console.log("Ви заночували у таверні");
				console.log("Ви повністю відновили здоров'я");
				}}>Переночувати в таверні</button>
			{#if player.hasItem("Вовче ікло")}
				<button onclick={() => {player.removeItem("Вовче ікло"); player.addGold(25)}}>Продати вовче ікло</button>
			{/if}
			<button disabled={flags.searchCoinsToday == true} onclick={() => {player.addGold(Math.round((Math.random()))), flags.searchCoinsToday = true}}>Пошукати гроші у фонтані</button>
	{:else}
		<p>Брама міцно зачинена.</p>
		{#if player.hasItem("Старий ключ")}
			<button onclick={questActionOpenCityGate}>Відкрити браму</button>
		{/if}
	{/if}
<button onclick={() => changeScene("Forest")}>Піти у ліс</button>
</div>
{/if}		
<style>
.actions-list {
		display:flex;
		gap: 25px;
		align-items: flex-start;
		flex-direction: column;
	}
</style>