const score = 400
console.log(score)

const balance = new Number(200)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNum = 123.4805
console.log(otherNum.toPrecision(4))

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'))
console.log(hundreds.toLocaleString('en-UN'))

// ############### MATHS ####################

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(3.4))
console.log(Math.floor(4.9))
console.log(Math.min(4,5,6,7))
console.log(Math.max(4,5,6,7))


console.log(Math.random()) // O/P b/w 0 and 1 
console.log(Math.random()*10) // To get integral values
console.log((Math.random()*10) + 1) // To avoid 0 as output

// To get integral value range of 11 to 20
const min = 10 
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)+min))



