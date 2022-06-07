// Import the function that returns a copy of the fish array

import { getFish } from '../database.js'

export const listFish = () => {
    const fishes = getFish()
    // Invoke the function that you imported from the database module

    // Start building a string filled with HTML syntax
    let htmlString = '<div class="title"><h2>List of Fish</h2></div><article class="listFish">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {
        htmlString += `<section class="fish card">
        <div class="container">${fish.name}</div>
        <div class="polaroid"><img src="images/${fish.name}.jpg"/></div>
        <div>${fish.species}</div>
        <div>${fish.size}</div>
        <div>${fish.harvested}</div>
        <div>${fish.food}</div>
        </section>`
        
        
    }
    
    
    htmlString += `</article>`

    return htmlString
}


export const mostHolyFish = () => {
    const fishes = getFish()
    // 3, 6, 9, 12, etc... fish
    let holyFish = []
    
    for (const fish of fishes) {
        if (fish.size % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    const fishes = getFish()
    // 5, 10, 15, 20, 25, etc... fish
    let soldiers = []

    for (const fish of fishes) {
        if (fish.size % 5 === 0) {
        soldiers.push(fish)
    }
}   
    return soldiers
}

export const nonHolyFish = () => {
    const fishes = getFish()
    // Any fish not a multiple of 3 or 5
    let regularFish = []

    for (const fish of fishes) {
        if (fish.size % 3 !== 0) {
        if (fish.size % 5 !== 0) {
            regularFish.push(fish)
        }
    }
    }
    return regularFish
}














