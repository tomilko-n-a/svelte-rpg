// gameStore.js
// @ts-nocheck
import { writable, derived } from 'svelte/store';

// WRITABLE ЗМІННІ
export const currentScene = writable("Forest");
export const heroName = writable("Мандрівник");
export const hp = writable(100);
export const hpMax = writable(100);
export const xp = writable(150);
export const gold = writable(123);
export const inventory = writable(["Іржавий меч", "Зілля здоров'я", "Смолоскип"]);
export const currentDay = writable(1);
export const strengthModifier = writable(1);

// Діалоги
export const enterToCity = [
    { speaker: "Охоронець", text: "Стій! Хто йде?" },
    { speaker: "Мандрівник", text: "Я просто мандрівник, шукаю пригод." },
    { speaker: "Охоронець", text: "Проходь, але не роби проблем." }
	];

//Флаги
export const flags = writable({
	cityGateIsOpen: true, // false
	cityGateKeyTaken: false,
    visitedTheCity: false,
    searchCoinsToday: false,
})

// DERIVED ЗМІННІ
export const level = derived(xp, ($xp) => Math.floor($xp / 100) + 1);
export const isAlive = derived(hp, ($hp) => $hp > 0);

// шаблон змінної глобального сховища
//export const  = writable();
