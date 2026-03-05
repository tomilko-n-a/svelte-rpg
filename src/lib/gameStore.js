// gameStore.js
// @ts-nocheck
import { writable, derived } from 'svelte/store';
import { player } from '$lib/state/player.svelte.js';


// Game
export const currentScene = writable("Forest");
export const currentDay = writable(1);

//Флаги
export const flags = writable({
	cityGateIsOpen: true, // false
	cityGateKeyTaken: false,
    visitedTheCity: false,
    searchCoinsToday: false,
})

// Player
export const Player = writable({
    name: "Мандрівник",
    hpMax: 100,
    hp: 100,
    xp: 150,
    strengthModifier: 1,
    gold: 123,
    inventory: ["Іржавий меч", "Зілля здоров'я", "Смолоскип"]
})

export const heroName = writable("Мандрівник");
export const hpMax = writable(100);
export const hp = writable(100);
export const xp = writable(150);
export const strengthModifier = writable(1);
export const gold = writable(123);
export const inventory = writable(["Іржавий меч", "Зілля здоров'я", "Смолоскип"]);


// Діалоги
export const enterToCity = [
    { speaker: "Охоронець", text: "Стій! Хто йде?" },
    { speaker: "Мандрівник", text: "Я просто мандрівник, шукаю пригод." },
    { speaker: "Охоронець", text: "Проходь, але не роби проблем." }
	];

// DERIVED ЗМІННІ
export const level = derived(xp, ($xp) => Math.floor($xp / 100) + 1);

