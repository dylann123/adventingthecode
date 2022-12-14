const rawData = require("fs").readFileSync(__dirname + "/rope.txt").toString()
const calc = require("./functions")
let instructions = rawData.split("\n")
let head = { x: 0, y: 0 }
let tail = { x: 0, y: 0 }

// part 1
let uniqueTailPositions = []
while (instructions.length > 0) {
    let instruction = instructions[0]
    let direction = instruction.split(" ")[0]
    let units = instruction.split(" ")[1]
    for (let i = 0; i < units; i++) {
        calc.updateUniquePositions(tail.x, tail.y, uniqueTailPositions)
        // console.log("head: " + head.x + "," + head.y + "\ttail: " + tail.x + "," + tail.y)
        switch (direction) {
            case "L":
                head.x--
                break
            case "R":
                head.x++
                break
            case "U":
                head.y++
                break
            case "D":
                head.y--
                break
        }

        if (calc.getDistanceBetweenTwoPoints(head.x, head.y, tail.x, tail.y) >= 2) { //sqrt3
            if (head.x != tail.x && head.y != tail.y) { // is diagonal
                if (head.x > tail.x)
                    tail.x++
                else
                    tail.x--
                if (head.y > tail.y)
                    tail.y++
                else
                    tail.y--
            } else {
                if (head.x > tail.x + 1)
                    tail.x++
                else if (head.x < tail.x - 1)
                    tail.x--
                if (head.y > tail.y + 1)
                    tail.y++
                else if (head.y < tail.y - 1)
                    tail.y--
            }
        }
    }
    instructions.shift()
}
console.log("part 1: " + uniqueTailPositions.length);
// part 2:
instructions = rawData.split("\n")
uniqueTailPositions = []
let knots = []
for (let i = 0; i < 10; i++) {
    knots.push({ x: 0, y: 0 })
}
while (instructions.length > 0) {
    let instruction = instructions[0]
    let direction = instruction.split(" ")[0]
    let units = instruction.split(" ")[1]
    for (let i = 0; i < units; i++) {
        calc.updateUniquePositions(knots[9].x, knots[9].y, uniqueTailPositions)
        // console.log("head: " + head.x + "," + head.y + "\ttail: " + tail.x + "," + tail.y)
        switch (direction) {
            case "L":
                knots[0].x--
                break
            case "R":
                knots[0].x++
                break
            case "U":
                knots[0].y++
                break
            case "D":
                knots[0].y--
                break
        }
        for (let i = 1; i < knots.length; i++) {
            if (calc.getDistanceBetweenTwoPoints(knots[i-1].x, knots[i-1].y, knots[i].x, knots[i].y) >= 2) { //sqrt3
                if (knots[i-1].x != knots[i].x && knots[i-1].y != knots[i].y) { // is diagonal
                    if (knots[i-1].x > knots[i].x)
                        knots[i].x++
                    else
                        knots[i].x--
                    if (knots[i-1].y > knots[i].y)
                        knots[i].y++
                    else
                        knots[i].y--
                } else {
                    if (knots[i-1].x > knots[i].x + 1)
                        knots[i].x++
                    else if (knots[i-1].x < knots[i].x - 1)
                        knots[i].x--
                    if (knots[i-1].y > knots[i].y + 1)
                        knots[i].y++
                    else if (knots[i-1].y < knots[i].y - 1)
                        knots[i].y--
                }
            }
        }
    }
    instructions.shift()
}
console.log("part 2: "+uniqueTailPositions.length)
debugger