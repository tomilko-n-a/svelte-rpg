<script>
	// @ts-nocheck
	// sceneTown.svelte
	import { changeScene, addItemToInventory, removeItemFromInventory, checkItem, questActionOpenCityGate, changeGold, changeHp} from '$lib/gameActions.js'
	import { inventory, flags, enterToCity, gold, hpMax, currentDay} from '$lib/gameStore.js';
	import DialogeBox from '$lib/components/DialogueBox.svelte'

	let isTalking = $state(false)
	function onComplete() {
		isTalking = false;
		$flags.visitedTheCity = true
	}


</script>
{#if isTalking == true}
<DialogeBox lines={enterToCity} onComplete={onComplete}/>
{:else}
<h1>Місто</h1>
<div class="actions-list">

	{#if $flags.cityGateIsOpen}
		{#if !$flags.visitedTheCity}
			<button onclick={() => isTalking = true}>Поговорити з охоронцем</button>
		{/if}
			<button disabled={$gold < 20} onclick={() => {addItemToInventory("Зілля здоров'я"); changeGold(-20)}}>Купити зілля</button>
			<button disabled={$gold < 10} onclick={() => {
				$flags.searchCoinsToday = false; 
				changeHp($hpMax);
				changeGold(-10);
				$currentDay += 1;
				console.log("Ви заночували у таверні");
				console.log("Ви повністю відновили здоров'я");
				}}>Переночувати в таверні</button>
			{#if !checkItem($inventory,!checkItem($inventory,"Вовче ікло"))}
				<button onclick={() => {removeItemFromInventory("Вовче ікло"); changeGold(+25)}}>Продати вовче ікло</button>
			{/if}
			<button disabled={$flags.searchCoinsToday == true} onclick={() => {changeGold(Math.round((Math.random()))), $flags.searchCoinsToday = true}}>Пошукати гроші у фонтані</button>
	{:else}
		<p>Брама міцно зачинена.</p>
		{#if checkItem($inventory,"Старий ключ")}
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