// gameStore.js
// @ts-nocheck
import { writable, derived } from 'svelte/store';
import { player } from '$lib/state/player.svelte.js';


// Game


export const currentScene = $state("Forest");
export const currentDay = $state(1);

//Флаги
export const flags = $state({
	cityGateIsOpen: true, // false
	cityGateKeyTaken: false,
    visitedTheCity: false,
    searchCoinsToday: false,
})


// Діалоги
export const enterToCity = [
    { speaker: "Охоронець", text: "Стій! Хто йде?" },
    { speaker: "Мандрівник", text: "Я просто мандрівник, шукаю пригод." },
    { speaker: "Охоронець", text: "Проходь, але не роби проблем." }
	];