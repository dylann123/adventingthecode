const rawData = require("fs").readFileSync(__dirname + "/jobs.txt").toString()
const pairs = rawData.split("\n")
// part 1
let amountOfPairs = 0
pairs.forEach((array) => {
	let pairsArray = array.split(",")
	let range1 = [parseInt(pairsArray[0].split("-")[0]), parseInt(pairsArray[0].split("-")[1])]
	let range2 = [parseInt(pairsArray[1].split("-")[0]), parseInt(pairsArray[1].split("-")[1])]
	if (range1[0] <= range2[0] && range1[1] >= range2[1] || range2[0] <= range1[0] && range2[1] >= range1[1])
		amountOfPairs++
})
console.log("part 1: "+amountOfPairs);
// part 2
amountOfPairs = 0
pairs.forEach((array) => {
	let pairsArray = array.split(",")
	let range1 = [parseInt(pairsArray[0].split("-")[0]), parseInt(pairsArray[0].split("-")[1])]
	let range2 = [parseInt(pairsArray[1].split("-")[0]), parseInt(pairsArray[1].split("-")[1])]

	console.log(range1,range2,(range1[1] >= range2[0] && range1[0] <= range2[0]) || (range1[0] <= range2[1] && range1[1] >= range2[1]))

	if((range1[1] >= range2[0] && range1[0] <= range2[1]))
		amountOfPairs++
})
console.log("part 2: "+amountOfPairs)

debugger