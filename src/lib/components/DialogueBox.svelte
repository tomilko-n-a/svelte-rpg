<script>
	let { lines, onComplete} = $props();
	
	let count = $state(0);
	function countUp() {
    count++;
  }
</script>
{#if count <= lines.length}
<h4>{lines[count].speaker}</h4>
<p>{lines[count].text}</p>
	{#if count == lines.length-1}
		<button onclick={onComplete} >Завершити розмову</button>
	{:else}
		<button onclick={countUp}>Далі</button>
	{/if}
{/if}
	


