// gameActions.js

import { hp, currentScene, inventory, isAlive, flags} from './gameStore.js';

export function changeScene(sceneName) {
    currentScene.set(sceneName);
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

export function useItem(itemName) {
    console.log("Ви використали " + itemName);
    if (itemName == "Зілля здоров'я") {
        hp.update(currentHp => currentHp + 20);
        removeItemFromInventory(itemName);
				console.log("Ви відновили "+ 20 +" здоров'я")
    }   
}

export function takeDamage() {
		let damage = (5 + Math.floor((Math.random() * 5)));
    hp.update(currentHp => currentHp - damage);
		console.log("Ви отримали "+ damage +" урону")
}

// КВЕСТОВІ ДІЇ
export function questActionOpenCityGate() {
		removeItemFromInventory("Старий ключ");
    flags.update(currentFlags => {
        currentFlags.cityGateIsOpen = true;
        return currentFlags;
    });
		console.log("Ви відчинили браму")
}

export function questActionTakeKey() {
    addItemToInventory("Старий ключ");
    // Оновлюємо лише одну властивість всередині об'єкта
    flags.update(currentFlags => {
        currentFlags.cityGateKeyTaken = true;
        return currentFlags;
    });
}


// Дії по підписці
isAlive.subscribe((alive) => {
    if (!alive) {
        changeScene("End Game");
    }
});












