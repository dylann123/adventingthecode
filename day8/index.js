const rawData = require("fs").readFileSync(__dirname + "/trees.txt").toString()
const rawDataSplit = rawData.split("\n")
let trees = []
for (let line in rawDataSplit) {
	let lineSplit = rawDataSplit[line].split("")
	trees[line] = []
	for (let number of lineSplit) {
		if (!isNaN(parseInt(number)))
			trees[trees.length - 1].push(parseInt(number))
	}
}
// part 1
let count = 0
function getTreeVisibility(x, y, array) {
	let visible = {
		top: true,
		bottom: true,
		left: true,
		right: true
	}
	// vertical check
	// for (let tree in array) {
	// 	// if tree we are checking is above
	// 	if (array[tree][x] >= array[y][x])
	// 		if (tree < y) {
	// 			visible.top = false
	// 		} else if (tree > y) { // skip current tree
	// 			visible.bottom = false
	// 		}
	// }
	// // horizontal check
	// for (let tree in array[y]) {
	// 	// if tree we are checking is left
	// 	if (array[y][tree] >= array[y][x]) {
	// 		if (tree < x) {
	// 			visible.left = false
	// 		} else if (tree > x) {
	// 			visible.right = false
	// 		}
	// 	}
	// }
	for(let treerow in array){
		
	}
	let returnval = (visible.top || visible.bottom || visible.left || visible.right)
	if (returnval) console.log(array[y][x]);
	// console.log(`${array[y][x]} - top: ${visible.top} bottom: ${visible.bottom} left: ${visible.left} right: ${visible.right}`);
	return returnval
}
for (let y in trees) {
	for (let x in trees[0]) {
		count += (getTreeVisibility(x, y, trees)) ? 1 : 0
	}
}
console.log(count);
debugger