<script>
	// @ts-nocheck
	// sceneTown.svelte
	import { changeScene, addItemToInventory, removeItemFromInventory, checkItem, questActionOpenCityGate} from '$lib/gameActions.js'
	import { inventory, flags, enterToCity} from '$lib/gameStore.js';
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

{#if $flags.cityGateIsOpen}
	{#if !$flags.visitedTheCity}
		<button onclick={() => isTalking = true}>Поговорити з охоронцем</button>
	{/if}
	<button onclick={() => addItemToInventory("Зілля здоров'я")}>Купити зілля</button>
{:else}
	<p>Брама міцно зачинена.</p>
	{#if checkItem($inventory,"Старий ключ")}
		<button onclick={questActionOpenCityGate}>Відкрити браму</button>
	{/if}
{/if}


<button onclick={() => changeScene("Forest")}>Піти у ліс</button>
{/if}

			
