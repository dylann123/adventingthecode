function getDistanceBetweenTwoPoints(x1, y1, x2, y2) {
    return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))
}
function updateUniquePositions(x, y, uniqueTailPositions) {
    let dataStr = x + "," + y
    if (uniqueTailPositions.indexOf(dataStr) == -1)
        uniqueTailPositions.push(dataStr)
}

module.exports = { getDistanceBetweenTwoPoints, updateUniquePositions }