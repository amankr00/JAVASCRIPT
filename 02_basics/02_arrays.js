const marvel_heros = ['ironman' , 'thor' , 'hawkeye']
const dc_heros = ['superman' , 'batman' , 'flash']

// Array inside an array is created using push
marvel_heros.push(dc_heros)

// This is preffered
const heros = marvel_heros.concat(dc_heros)
console.log(heros)

// Spread - Preffered because efficent reason being comma seperated
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros)

// flat - To convert mutlidimensional array to single dimension
const anotherArray = [1,2,[4,5,6],7,[6,[3,9]]]
console.log(anotherArray.flat(3))

// Few more methods
console.log(Array.isArray('Aman'))

// Array.from convert strings to arrays
console.log(Array.from('aman'))
// For objects Array.from() is used in different manner
console.log(Array.from({name : 'Raman'}))

// Arrays.of(x,y,z,..)
const score1 = 200
const score2 = 300
const score3 = 400

console.log(Array.of(score1,score2,score3))

