// gameActions.js
// @ts-nocheck
import { hp, hpMax, xp, currentScene, inventory, gold, level, strengthModifier} from './gameStore.js';
import { get } from 'svelte/store';
import { player } from '$lib/state/player.svelte.js';
import { flags } from '$lib/state/flags.svelte.js';

export function changeScene(sceneName) {
    currentScene.set(sceneName);
}

export function changeGold(amount) {
    gold.update(currentGold => currentGold + amount);
    if (amount < 0) {
        console.log(amount +" золота")
    } else {
        console.log("+"+ amount +" золота")
    }
}


/**
 * З певним шансом змінює сцену
 * @param {number} chance - шанс спрацювання. Діапазон [1...100]
 * @param {string} sceneName - яку саме сцену 
 */
export function randomEvent(chance, sceneName){
    if (Math.random() * 100 < chance) {
        changeScene(sceneName);
    }
}
export function removeItemFromInventory(itemName) {
    inventory.update(currentItems => {
				const index = currentItems.indexOf(itemName);

			
				if (index !== -1) {
						return currentItems.toSpliced(index, 1);
				}
				
				return currentItems;
		});
}

export function addItemToInventory(itemName) {
    inventory.update(currentItems => [...currentItems, itemName]);
		console.log("Ви отримали "+itemName)
}

export function checkItem(items, itemName) {
    return items.includes(itemName);
}
export function changeHp(amount){
    hp.update(currentHp => {
        const newHp = currentHp + amount;
        return Math.max(0, Math.min(newHp, get(hpMax)))
    });
}

export function useItem(itemName) {
    console.log("Ви використали " + itemName);
    if (itemName == "Зілля здоров'я") {
        changeHp(20);
        removeItemFromInventory(itemName);
				console.log("Ви відновили "+ 20 +" здоров'я")
    }   
}

export function randBetween(min, max) {
		return (min + Math.floor((Math.random() * (max - min))))
}


export function takeDamage(min, max) {
		let damage = (min + Math.floor((Math.random() * (max - min))));
        changeHp(-damage);
		console.log("Ви отримали "+ damage +" урону")
        return damage;
}

export function addXp(amount) {
    xp.update(currentXp => currentXp + amount)
    console.log("Ви отримали "+ amount +" XP");
}

// КВЕСТОВІ ДІЇ
export function questActionOpenCityGate() {
    player.removeItem("Старий ключ");

    flags.cityGateIsOpen = true; 
    
    console.log("Ви відчинили браму");
}

export function questActionTakeKey() {
    player.addItem("Старий ключ");
    
    flags.cityGateKeyTaken = true;
}


// Дії по підписці

// level.subscribe(() => {
//     let currentHp = (get(hp) == get(hpMax));
//     hpMax.update(currentMax => currentMax + 10);
//     if (currentHp) {
//         changeHp(get(hpMax))
//     }
//     strengthModifier.update(currentstrengthModifier => Math.round((currentstrengthModifier + 0.1)*10)/10);

// });









