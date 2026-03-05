// @ts-nocheck
class Player {
    // 1. ДАНІ (стан)
    name = $state("Мандрівник");
    hpMax = $state(100);
    hp = $state(100);
    xp = $state(150);
    strengthModifier = $state(1);
    gold = $state(123);
    inventory = $state(["Іржавий меч", "Зілля здоров'я"]);

    levelUpStats = {
        MaxHp: 10,
        StrMod: 10
    }

    // 2. Похідні ДАНІ

    get level() { 
        return Math.floor(this.xp / 100) + 1;
    };

    get isAlive() {
        return this.hp > 0;
    };

    // 3. ДІЇ

    addXp(amount) {
        const currentLevel = this.level;

        this.xp += amount;
        console.log(`Отримано ${amount} XP`)

        if (this.level > currentLevel) {
            this._levelUp();
        }
    };

    _levelUp() {
        // Підвищення здоров'я
        const currentHpMax = this.hpMax;
        this.hpMax += this.levelUpStats.MaxHp;
        this.hp = Math.round(this.hp * this.hpMax / currentHpMax);
        // Підвищення сили
        this.strengthModifier = Math.round((this.strengthModifier + this.levelUpStats.StrMod/100) * 10) / 10;
        // Повідомлення про рівень
        console.log(`LEVEL UP! Новий рівень: ${this.level}`);
    }

    addGold(amount) {
        this.gold += amount;
        if (amount > 0) console.log(`Отримано ${amount} золота`);
    }

    spendGold(amount) {
        this.gold -= amount;
        if (amount > 0) console.log(`Витрачено ${amount} золота`);
    }

    heal(amount){
        this.hp = Math.min(this.hp + amount, this.hpMax);
        console.log(`Відновлено ${amount} HP`);
    }

    takeDamage(amount) {
        this.hp = Math.max(0, this.hp - amount);
    }

    hasItem(itemName) {
        return this.inventory.includes(itemName);
    }

    addItem(itemName) {
        this.inventory.push(itemName);
        console.log(`Ви отримали ${itemName}`)
    }

    removeItem(itemName) {
        const index = this.inventory.indexOf(itemName);
        if (index !== -1) {
            this.inventory.splice(index, 1);
            console.log(`Витрачено: ${itemName}`);
        }
    }
}

export const player = new Player();