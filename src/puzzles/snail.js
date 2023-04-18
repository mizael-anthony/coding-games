/** 
 * simple run yes
 * ["1****#", "2****#", "3****#"]
 * [2, 3, 5]
 * 
 * run in progress yes
 * ["**1**#", "*2***#", "**3**#", "**4**#"]
 * [1, 3, 4, 1]
 * 
 * only one arrives yes
 * ["1*******", "2******#", "3*******"]
 * [3, 1, 2]
 * 
 * in a mess yes
 * ["12****3", "*******", "******#"]
 * [4, 4, 2]
 * 
 * conversely yes
 * ["#*****1", "#*****2", "#*****3", "#*****4", "#*****5"]
 * [1, 1, 2, 1, 1]
 * 
 * difficulty 1 yes
 * ["**3****", "****2**", "#*****1"]
 * [1, 1, 1]
 * 
 * difficulty 2 yes
 * ["1******", "****3**", "**#***2", "******4"]
 * [1, 1, 1, 1]
 * 
 * difficulty 3 yes 
 * ["1*****", "2****#", "**#***"]
 * [1, 1]
 * 
 */
const rows = ["1******", "****3**", "**#***2", "******4"]
const speed = [1, 1, 1, 1]

let snails = []
let destinations = []
let closestDistance = 100
let closestDestination = []
let winner = ""
let end = false

for (let i = 0; i < rows.length; i++) {
    const row = rows[i]

    for (let j = 0; j < row.length; j++) {
        const r = row.charAt(j)
        if (r === '#') {
            destinations.push([i, j])
        }

        else if (r !== '*') {
            snails.push([i, j, r])
        }
    }
}



let i = 0
while (i < snails.length) {
    const snail = snails[i]
    console.log("snails", snails)

    let j = 0
    while (j < destinations.length) {
        const destination = destinations[j]

        const distance = Math.sqrt(((destination[0] - snail[0]) ** 2) + ((destination[1] - snail[1]) ** 2))

        if (distance <= closestDistance) {
            closestDistance = distance
            closestDestination = destination

        }

        if (distance === 0 || snail[0] >= rows.length || snail[1] >= rows[i].length) {
            closestDestination = destination
            winner = snail[2]
            end = true
            break
        }

        j++
    }

    const dx = closestDestination[0] - snail[0]
    const dy = closestDestination[1] - snail[1]

    if (end === true) {
        break
    }

    else {
        if (dx === 0 || dx < dy) {
            snails[i][1] = (closestDestination[1] < snail[1]) ? snail[1] - speed[i] : snail[1] + speed[i]
        }
        // else if (dy === 0 || dy < dx) {
        //     snails[i][0] = (closestDestination[0] < snail[0]) ? snail[0] - speed[i] : snail[0] + speed[i]
        // }

        // (dy === 0 || dy < dx) or dy === dx
        else{
            snails[i][0] = (closestDestination[0] < snail[0]) ? snail[0] - speed[i] : snail[0] + speed[i]
        }

    }

    i = (i === snails.length - 1) ? 0 : (i + 1)


}



// rows.forEach(r => console.log(r))
// console.log("snails", snails)
// console.log("destinations", destinations)
console.log("winner position", winner)

