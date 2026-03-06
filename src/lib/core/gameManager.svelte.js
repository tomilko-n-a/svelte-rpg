import { player } from '$lib/state/player.svelte.js';
import { sceneManager } from '$lib/core/scenesManager.svelte.js';

//

export function initGameLoop() {
    return $effect.root(() => {
        $effect(() => {
            if (!player.isAlive) {
                sceneManager.changeScene("End Game");
                console.log("Game Over triggered");
            }
        });
    });
}