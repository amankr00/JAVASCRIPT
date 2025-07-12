const arr = [1,2,3,4,5]
console.log(arr)

const myArr = new Array(1,2,3,4,5)
console.log(myArr[2])

myArr.push(6)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(9)
console.log(myArr)

myArr.shift()
console.log(myArr)

myArr.includes(4)
console.log(myArr)

myArr.indexOf(3)
console.log(myArr)

// [1,2,3,4,5] = 1,2,3,4,5 ----> Converts to string
let newAr = myArr.join()
console.log(newAr)

// slice and splice

const sArr = [0,1,2,3,4,5]
const mn1 = sArr.slice(1,3)

console.log(sArr)
console.log('Slice ' , mn1)

const mn2 = sArr.splice(1,4)

console.log(sArr)
console.log("Splice ",mn2)

// NOTE : Splice changes the original array . 