class Flags {
    cityGateIsOpen = $state(false); // false
    cityGateKeyTaken = $state(false);
    visitedTheCity = $state(false);
    searchCoinsToday = $state(false);
}


export const flags = new Flags();