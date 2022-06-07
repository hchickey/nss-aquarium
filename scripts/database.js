// start adding objects and their properties

// create an object


export const getFish = () => {
    return fishInventory.fish.map(fish => ({...fish}))
}

const fishInventory = {
    fish: [
{id: 1, name: "Bart", species: "guppy", food: "crustaceans", harvested: "pond", size: 3, tip: "use a proper filter"},
{id: 2, name: "Noodles", species: "goldfish", food: "aquatic plants", harvested: "freshwater", size: 4, tip: "change water regularly"},
{id: 3, name: "Winter", species: "goldfish", food: "crestaceans", harvested: "freshwater", size: 4, tip: "welcome algae eater fish"},
{id: 4, name: "Patrick", species: "neon tetra", food: "flake fish food", harvested: "freshwater", size: 2, tip: "clean the tank"},
{id: 5, name: "Piper", species: "angelfish", food: "algae", harvested: "freshwater", size: 5, tip: "clean outside the tank"},
{id: 6, name: "Ruby", species: "clown loach", food: "algae", harvested: "freshwater", size: 4, tip: "clean tank"}
 ]
}

export const getLocations = () => {
    return fishLocations.locations.map(locations => ({...locations}))
}

const fishLocations = {
    locations: [
        {id: 1, name: "Pond Waters", country: "USA", state: "Arkansas"},
        {id: 2, name: "Indonesia Waters", country: "Indonesia", state: "Jakarta"},
        {id: 3, name: "Fresh Waters", country: "USA", state: "Colorado"},
        {id: 4, name: "Fishing Waters", country: "USA", state: "Alabama"}
    ]
}