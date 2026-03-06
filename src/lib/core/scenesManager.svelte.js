// scenesManager.svelte.js
// @ts-nocheck
// Імпорт сцен
import sceneForest from '$lib/scenes/sceneForest.svelte';
import sceneTown from '$lib/scenes/sceneTown.svelte';
import sceneBattle from '$lib/scenes/sceneBattle.svelte';
import sceneEndGame from '$lib/scenes/sceneEndGame.svelte';
import sceneCityGate from '$lib/scenes/sceneTownGate.svelte';


class SceneManager {
    // поточний стан
    currentSceneName = $state("Forest");
    scenes = {
        "Forest": sceneForest, 
        "Town": sceneTown,
        "Battle": sceneBattle,
        "End Game": sceneEndGame,
        "Сity Gate": sceneCityGate
    };

    // Динамічно повертаємо сам компонент
    get currentComponent() {
        return this.scenes[this.currentSceneName] || sceneForest;
    }

    // метод перемикання сцен
    changeScene(sceneName) {
        if (this.scenes[sceneName]) {
            this.currentSceneName = sceneName;
        } else {
            console.log(`Сцени ${sceneName} не існує!`)
        }
    }
    /**
     * З певним шансом змінює сцену
     * @param {number} chance - шанс спрацювання. Діапазон [1...100]
     * @param {string} sceneName - яку саме сцену 
     */
    
    randomEvent(chance, sceneName){
        if (Math.random() * 100 < chance) {
            this.changeScene(sceneName);
        }
    }
}

export const sceneManager = new SceneManager();