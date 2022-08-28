const MathRound = (float, num) => {
    return Math.round(float * Math.pow(10, num)) / Math.pow(10, num)
}
module.exports = MathRound