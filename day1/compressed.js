const caloriesArray = encodeURI(require("fs").readFileSync(__dirname + "/backpack_data.txt").toString()).split("%0D%0A").join(",").split(",,")
let top1 = 0, top2 = 0, top3 = 0
caloriesArray.forEach((calories)=>{
	top1 = (calories.split(",").map((x)=>{return parseInt(x)}).reduce((partialSum, a) => partialSum + a, 0) > top1) ? calories.split(",").map((x)=>{return parseInt(x)}).reduce((partialSum, a) => partialSum + a, 0) : top1
	top2 = (calories.split(",").map((x)=>{return parseInt(x)}).reduce((partialSum, a) => partialSum + a, 0) > top2 && calories.split(",").map((x)=>{return parseInt(x)}).reduce((partialSum, a) => partialSum + a, 0) != top1) ? calories.split(",").map((x)=>{return parseInt(x)}).reduce((partialSum, a) => partialSum + a, 0) : top2
	top3 = (calories.split(",").map((x)=>{return parseInt(x)}).reduce((partialSum, a) => partialSum + a, 0) > top3 && calories.split(",").map((x)=>{return parseInt(x)}).reduce((partialSum, a) => partialSum + a, 0) != top2 && calories.split(",").map((x)=>{return parseInt(x)}).reduce((partialSum, a) => partialSum + a, 0) != top1) ? calories.split(",").map((x)=>{return parseInt(x)}).reduce((partialSum, a) => partialSum + a, 0) : top3
})
//part 1
console.log(top1);
//part 2
console.log(top1+top2+top3);
debugger;