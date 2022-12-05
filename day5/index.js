const rawData = require("fs").readFileSync(__dirname + "/crates.txt").toString()
let separateLines = rawData.split("\n")
let commands = []
let boxes = []
let stack = {}
for(let i in separateLines){
	if(separateLines[i].indexOf("[") > -1)
		boxes.push(separateLines[i])
	else if(separateLines[i].startsWith("m")){
		commands.push(separateLines[i])
	}
}
boxes.forEach(e=>console.log(e))
for(let i in boxes){
	let string = boxes[i]
	let index = 0
	for(let j = 1; j < string.length; j+=4){
		index++
		if(string.substring(j,j+1) != " "){
			let letter = string.substring(j,j+1)
			if(!stack[index]) stack[index] = []
			stack[index].unshift(letter)
		}
	}
}
// part 1
let output = ""
let part1Stack = JSON.parse(JSON.stringify(stack))
for(let string of commands){
	let amount = parseInt(string.split("move ")[1].split(" ")[0])
	let takeFrom = parseInt(string.split("from ")[1].split(" ")[0])
	let moveTo = parseInt(string.split("to ")[1])
	for(let i = 1; i <= amount; i++){
		part1Stack[moveTo].push(part1Stack[takeFrom].pop())
	}
}
for(let i in part1Stack){
	output += part1Stack[i][part1Stack[i].length-1]
}
console.log(("part 1: "+output));

// part 2
output = ""
let part2Stack = JSON.parse(JSON.stringify(stack))
for(let string of commands){
	let amount = parseInt(string.split("move ")[1].split(" ")[0])
	let takeFrom = parseInt(string.split("from ")[1].split(" ")[0])
	let moveTo = parseInt(string.split("to ")[1])
	let tempGroup = []
	for(let i = 1; i <= amount; i++){
		let letter = part2Stack[takeFrom].pop()
		tempGroup.unshift(letter)
	}
	for(let i in tempGroup){
		part2Stack[moveTo].push(tempGroup[i])
	}
}
for(let i in part2Stack){
	output += part2Stack[i][part2Stack[i].length-1]
}
console.log(("part 2: "+output));


debugger