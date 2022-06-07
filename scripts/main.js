/* First need to define an object in code that represents each fish
- species
-length
-name
-harvested it
-what it eats
in the fish object the keys are above: name, species, length, harvest, eats.
*/

import { getFish } from './database.js'
import { getLocations } from './database.js'
import { listFish } from './fish/listFish.js'
import { mostHolyFish, soldierFish, nonHolyFish} from './fish/listFish.js'
import { fishTips } from './tips/cleanTank.js'
import { harvestFish } from './locations/harvest.js'

const allFish = getFish()
const allLocations = getLocations()

// // for (const fish of allFish) {
//     // console.log(fish)
// }

const threeMultis = mostHolyFish();
const fiveMultis = soldierFish();
const noMultis = nonHolyFish();
console.log(noMultis)


const parentHTMLElement = document.querySelector("#martins-aqua")

parentHTMLElement.innerHTML = listFish()

const asideHTMLElement = document.querySelector(".tipList")

asideHTMLElement.innerHTML = fishTips()

const harvestHTMLElement = document.querySelector(".harvest")

harvestHTMLElement.innerHTML = harvestFish()