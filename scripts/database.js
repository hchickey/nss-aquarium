// start adding objects and their properties

// create an object


export const getFish = () => {
    return fishInventory.fish.map(fish => ({...fish}))
}

const fishInventory = {
    fish: [
{id: 1, name: "Bart", species: "guppy", food: "crustaceans", harvested: "freshwater", size: 3},
{id: 2, name: "Noodles", species: "goldfish", food: "aquatic plants", harvested: "freshwater", size: 4},
{id: 3, name: "Winter", species: "goldfish", food: "crestaceans", harvested: "freshwater", size: 4},
{id: 4, name: "Patrick", species: "neon tetra", food: "flake fish food", harvested: "freshwater", size: 2},
{id: 5, name: "Piper", species: "angelfish", food: "algae", harvested: "freshwater", size: 5},
{id: 6, name: "Ruby", species: "clown loach", food: "algae", harvested: "freshwater", size: 4}
 ]
}


