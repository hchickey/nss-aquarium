// Import the function that returns a copy of the fish array

import { getFish } from './database.js'

export const listFish = () => {
    const fishes = getFish()
    // Invoke the function that you imported from the database module

    // Start building a string filled with HTML syntax
    const htmlString = '<article class="listFish">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {
        htmlString += `<section class="">
        
    }
















}
