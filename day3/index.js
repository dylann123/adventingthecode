const rawData = require("fs").readFileSync(__dirname + "/rucksacks.txt").toString()
const rucksacksArray = rawData.split("\n")
let compartments = []
rucksacksArray.forEach((rucksack) => {
	compartments.push([rucksack.substring(0, rucksack.length / 2), rucksack.substring(rucksack.length / 2, rucksack.length)])
})

function getPriority(letter) {
	if (letter == letter.toUpperCase()) {
		return letter.charCodeAt(0) - 38
		// console.log(rucksack[0] + " " + rucksack[1] + "\t" + letter + " " + (letter.charCodeAt(0) - 38));
	}
	else {
		return letter.charCodeAt(0) - 96
		// console.log(rucksack[0] + " " + rucksack[1] + "\t" + letter + " " + (letter.charCodeAt(0) - 96));
	}
}
// part 1
let priority = 0
// lesson learned = for loop good
compartments.forEach((rucksack) => {
	let firstCompartmentSplit = rucksack[0].split("")
	let found = false
	firstCompartmentSplit.forEach((letter) => {
		if (!found) {
			if (rucksack[1].indexOf(letter) != -1) {
				priority += getPriority(letter)
				found = true
			}
		}
	})
})
console.log("part 1: " + priority);
// part 2
priority = 0
for (let i = 0; i < rucksacksArray.length; i += 3) {//first time ever used IN HISTORY
	let array = [rucksacksArray[i], rucksacksArray[i + 1], rucksacksArray[i + 2]]
	let found = false
	rucksacksArray[i].split("").forEach((letter) => {
		if (rucksacksArray[i + 1].indexOf(letter) != -1 && rucksacksArray[i + 2].indexOf(letter) != -1 && !found) {
			priority += getPriority(letter)
			found = true
		}
	})
}
console.log("part 2: " + priority);
debugger;