/* First need to define an object in code that represents each fish
- species
-length
-name
-harvested it
-what it eats
in the fish object the keys are above: name, species, length, harvest, eats.
*/

import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}