const rawData = require("fs").readFileSync(__dirname + "/data.txt").toString()
let commands = rawData.split("\n")

//part 1
let cycle = 0
let outputs = [1,1]
let frequency = 1
for (let i = 0; i < commands.length; i++) {
	if (commands[i].startsWith("noop")) {
		outputs.push(frequency)
		cycle++
	} else {32
		let change = parseInt(commands[i].split(" ")[1])
		outputs.push(frequency)
		frequency += change
		outputs.push(frequency)
		cycle++
	}
}
let sum = 0;
for (let i = 0; i < 6; i++) {
	let indexToAdd = (i * 40) + 20
	sum += outputs[indexToAdd] * (indexToAdd)
}
console.log("part 1: "+sum);
//part 2
debugger