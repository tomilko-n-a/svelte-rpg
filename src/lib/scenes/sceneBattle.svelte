<script>
    // @ts-nocheck
    import {changeScene, takeDamage, addXp, checkItem, addItemToInventory} from '$lib/gameActions.js'
    import { inventory } from '$lib/gameStore.js';

    let monsterHp = $state(30);
    let heroHasWeapon = $derived(checkItem($inventory, "Іржавий меч"));
    let combatLog = $state([]);
    let logMaxLength = 4;
    let battleEnd = $state(false);
   
    function combatLogUpdate(text) {
        combatLog = [text, ...combatLog].slice(0, logMaxLength);
    }

    function attack() {
        if (heroHasWeapon) {
            monsterHp -= 10;
            combatLogUpdate('Ви вдарили мечем на 10 шкоди');
        } else {
            monsterHp -= 3;
            combatLogUpdate('Ви вдарили кулаком на 3 шкоди');
        }
        if (monsterHp <= 0) {
            monsterHp = 0;
            addXp(50)
            addItemToInventory("Вовче ікло");
            combatLogUpdate("Ви здобули Вовче ікло")
            battleEnd = true;
            return
        }
        let damage = takeDamage(5,25);
        combatLogUpdate('Вовк наніс вам ' + damage + ' шкоди');
        return
    }
</script>

{#if battleEnd}
    <button onclick={() => changeScene("Forest")}>Покинути місце сутички</button>
{:else}
    <h4>Дикий Вовк</h4>
    <p>Здоров'я: {monsterHp}</p>
    {#if heroHasWeapon}
        <button onclick={attack}>Вдарити мечем</button>    
    {:else}
        <button onclick={attack}>Вдарити кулаком</button>    
    {/if}
{/if}
{#each combatLog as logItem}
    <p>{logItem}</p>
{/each}