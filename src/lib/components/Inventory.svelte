<script>
	let { items, onUse } = $props();
</script>

<div class="main-line">
	<p>Інвентар</p>
<ul>
	{#each items as item}
			<li><button onclick={() => {onUse(item)}} >{item}</button></li>
	{/each}
</ul>
</div>

<style>
.main-line {
		display:flex;
		gap: 25px;
		align-items: center
	}
ul {
		gap: 25px;
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}
</style>
