const caloriesArray = encodeURI(require("fs").readFileSync(__dirname + "/backpack_data.txt").toString()).split("%0D%0A").join(",").split(",,")
let array, sum, outputArray = []
caloriesArray.forEach((calories) => {
	array = calories.split(",").map((x) => { return parseInt(x) })
	sum = array.reduce((partialSum, a) => partialSum + a, 0)
	outputArray.push(sum)
})
outputArray = outputArray.sort(function (a, b) {
	return a - b;
}).reverse().slice(1, 4)
console.log(outputArray);
console.log(outputArray[0] + outputArray[1] + outputArray[2]);
// debugger;
// for node.js