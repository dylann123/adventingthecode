const fs = require("fs")
const rawData = fs.readFileSync(__dirname+"/data.txt")
const dataParsed = rawData.toString()
const dataArray = dataParsed.split("\n")
let score = 0;
//part 1
const typeToScorePart1 = {
    "A": 1,
    "B": 2,
    "C": 3,
    "X": 1,
    "Y": 2,
    "Z": 3
}
dataArray.forEach((round)=>{
    let opponent = round.split("\r").join("").split(" ")[0]
    let suggestedRoll = round.split("\r").join("").split(" ")[1]
    let scoreTally = typeToScorePart1[suggestedRoll]
    if(typeToScorePart1[opponent] == typeToScorePart1[suggestedRoll]) 
        scoreTally += 3
    else if((opponent == "A" && suggestedRoll == "Y") || (opponent == "B" && suggestedRoll == "Z") || (opponent == "C" && suggestedRoll == "X")){
        scoreTally += 6
    }

    score += scoreTally
})
console.log(`part 1 score: ${score}`);
score = 0
//part 2
const typeToScorePart2 = {
    "A": 1,
    "B": 2,
    "C": 3,
    "X": 1,
    "Y": 2,
    "Z": 3
}
const resultMethodWin = {
    "A": "Y",
    "B": "Z",
    "C": "X"
}
const resultMethodLose = {
    "A": "Z",
    "B": "X",
    "C": "Y"
}
dataArray.forEach((round)=>{
    let opponent = round.split("\r").join("").split(" ")[0]
    let suggestedResult = round.split("\r").join("").split(" ")[1]
    let scoreTally = 0
    switch(suggestedResult){
        case "X": //lose
            scoreTally = typeToScorePart2[resultMethodLose[opponent]]
            break
        case "Y": //tie
            scoreTally = 3 + typeToScorePart2[opponent]
            break   
        case "Z": //win
            scoreTally = 6 + typeToScorePart2[resultMethodWin[opponent]]
            break
        default:
            console.log("How???");
            break
    }
    score += scoreTally
})
console.log(`part 2 score: ${score}`);

debugger