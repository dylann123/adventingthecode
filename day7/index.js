const rawData = require("fs").readFileSync(__dirname + "/commands.txt").toString()
let commands = rawData.split("\n")
let filesystem = {}
let currentDirectory = []
// populate filesystem
for (let i of commands) {
	let output = i.split("\n").join("").split("\r").join("").split(" ")
	if (i.startsWith("$")) {
		if (i.includes("cd") && !i.includes("/")) {
			if (i.includes("."))
				currentDirectory.pop()
			else
				currentDirectory.push(output[2])
		}
	} else {
		let evalstring = "filesystem"
		for (let j in currentDirectory)
			evalstring += `["${currentDirectory[j]}"]`
		if (i.startsWith("dir")) {
			evalstring += `["${output[1]}"] = {}`
		} else {
			evalstring += `["${output[1]}"] = ${output[0]}`
		}
		eval(evalstring)
	}
}
// part 1
let sum = 0
addSubFolders(filesystem)
addAll(filesystem)

function addSubFolders(folder) {
	let selfSum = 0
	for (let subfolder in folder) {
		if (typeof folder[subfolder] != 'number') {
			selfSum += addSubFolders(folder[subfolder])
			if (!folder["size"]) {
				folder["size"] = folder[subfolder]["size"]
			}
			else {
				folder["size"] += folder[subfolder]["size"]
			}
		}
		else {
			selfSum += folder[subfolder]
			if (!folder["size"])
				folder["size"] = folder[subfolder]
			else
				folder["size"] += folder[subfolder]
		}
	}
	return selfSum
}
function addAll(folder) {
	for (let subfolder in folder) {
		if (folder[subfolder]["size"]) {
			if (folder[subfolder]["size"] <= 100000) {
				sum += folder[subfolder]["size"]
			}
			addAll(folder[subfolder])
		}
	}
}
console.log("part 1: " + sum);

// part 2
let targetSize = Math.abs(70000000 - filesystem["size"] - 30000000)
let output = Number.MAX_SAFE_INTEGER
findClosestSize(filesystem)
function findClosestSize(folder) {
	for (let subfolder in folder) {
		if (folder[subfolder]["size"] && folder[subfolder]["size"] >= targetSize) {
			if (folder[subfolder]["size"] < output) {
				output = folder[subfolder]["size"]
			}
		}
		findClosestSize(folder[subfolder])
	}
}
console.log("part 2: "+output);

debugger