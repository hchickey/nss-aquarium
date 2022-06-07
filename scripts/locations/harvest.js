// Import the function that returns a copy of the fish array

import { getLocations } from '../database.js'


export const harvestFish = () => {
    const places = getLocations()
    // Invoke the function that you imported from the database module

    // Start building a string filled with HTML syntax
    let htmlString = '<h2>Harvest Locations</h2><article class="harvestFish">'

    // Create HTML representations of each fish here
    for (const locations of places) {
        htmlString += `<section class="locations card">
        <div>${locations.name}</div>
        <div class="harvestImg"><img src="images/${locations.name}.jpg"/></div>
        <div>${locations.country}</div>
        <div>${locations.state}</div>
        </section>`

        
    }

    htmlString += `</article>`

    return htmlString
}