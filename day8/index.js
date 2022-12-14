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
function getTreeVisibility(x, y) {
	let visible = {
		top: true,
		bot: true,
		left: true,
		right: true
	}
	let index = 0
	for (i of trees[y]) {
		if (i >= trees[y][x]) {
			if (index > x) {
				visible.right = false
			} else if (index < x) {
				visible.left = false
			}
		}
		index += 1
	}

	index = 0
	for (i of trees) {
		if (i[x] >= trees[y][x]) {
			if (index > y) {
				visible.bot = false
			} else if (index < y) {
				visible.top = false
			}
		}
		index += 1
	}
	return visible.bot || visible.top || visible.left || visible.right
}
for (let y in trees) {
	for (let x in trees[0]) {
		if (getTreeVisibility(x, y))
			count++
	}
}
console.log("part 1: "+count);
// part 2
let highestscore = 0
function getScore(x, y) {
	let viewDistance = {
		left: 0,
		right: 0,
		up: 0,
		down: 0
	}
	for (let treeX = 0; treeX < trees[y].length; treeX++) {
		if (treeX < x) {
			if (trees[y][treeX] >= trees[y][x]) {
				viewDistance.left = 1
			} else {
				viewDistance.left++
			}
		} else if (treeX > x) {
			if (trees[y][treeX] >= trees[y][x]) {
				viewDistance.right++
				break
			} else {
				viewDistance.right++
			}
		} else{
			console.log(treeX == x);
		}
	}
	for (let treeY = 0; treeY < trees.length; treeY++) {
		if (treeY < y) {
			if (trees[treeY][x] >= trees[y][x]) {
				viewDistance.up = 1
			} else {
				viewDistance.up++
			}
		} else if (treeY > y) {
			if (trees[treeY][x] >= trees[y][x]) {
				viewDistance.down++
				break
			} else {
				viewDistance.down++
			}
		}
	}
	let output = viewDistance.left * viewDistance.right * viewDistance.up * viewDistance.down
	console.log(`(${x},${y}) ${trees[y][x]} | ${viewDistance.right} ${viewDistance.left} ${viewDistance.down} ${viewDistance.up}\t${output}`);
	return output
}
for (let y in trees) {
	for (let x in trees[0]) {
		let score = getScore(x, y)
		if(score > highestscore)
			highestscore = score
	}
}
console.log("part 2: "+highestscore);

debugger