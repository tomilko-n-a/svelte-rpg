// gameStore.js
// @ts-nocheck
import { writable, derived } from 'svelte/store';

// WRITABLE ЗМІННІ
export const currentScene = writable("Forest");
export const heroName = writable("Мандрівник");
export const hp = writable(100);
export const xp = writable(150);
export const inventory = writable(["Іржавий меч", "Зілля здоров'я", "Смолоскип"]);

// Діалоги
export const enterToCity = [
    { speaker: "Охоронець", text: "Стій! Хто йде?" },
    { speaker: "Мандрівник", text: "Я просто мандрівник, шукаю пригод." },
    { speaker: "Охоронець", text: "Проходь, але не роби проблем." }
	];

//Флаги
export const flags = writable({
	cityGateIsOpen: false,
	cityGateKeyTaken: false,
    visitedTheCity: false,
})

// DERIVED ЗМІННІ
export const level = derived(xp, ($xp) => Math.floor($xp / 100) + 1);
export const isAlive = derived(hp, ($hp) => $hp > 0);

// шаблон змінної глобального сховища
//export const  = writable();
