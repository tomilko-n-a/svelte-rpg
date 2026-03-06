// gameActions.js
// @ts-nocheck
import { currentScene } from './gameStore.svelte.js';
import { get } from 'svelte/store';
import { player } from '$lib/state/player.svelte.js';
import { flags } from '$lib/state/flags.svelte.js';








export function randBetween(min, max) {
		return (min + Math.floor((Math.random() * (max - min))))
}


export function takeDamage(min, max) {
		let damage = (min + Math.floor((Math.random() * (max - min))));
        changeHp(-damage);
		console.log("Ви отримали "+ damage +" урону")
        return damage;
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










