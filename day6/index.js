const rawData = require("fs").readFileSync(__dirname + "/datastream.txt").toString()
function isDifferent(string) {
    let stringSplit = string.split("")
    let output = -1
    stringSplit.forEach((letter) => {
        if (string.lastIndexOf(letter) != string.indexOf(letter)) {
            output = string.indexOf(letter)
        }
    })

    return output
}
let dataArray = rawData.split("")
// part 1
for (let i = 0; i < dataArray.length; i++) {
    let input = dataArray[i] + dataArray[i + 1] + dataArray[i + 2] + dataArray[i + 3]
    if (isDifferent(input) != -1) {
        i = i + isDifferent(input)
    } else {
        console.log("part 1: "+(i+4));
        break
    }
}

// part 2
for (let i = 0; i < dataArray.length; i++) {
    let input = ""
    for(let j = 0; j < 14; j++){
        input+=dataArray[i+j]
    }
    if (isDifferent(input) != -1) {
        i = i + isDifferent(input)
    } else {
        console.log("part 2: "+(i+14));
        break
    }
}
debugger