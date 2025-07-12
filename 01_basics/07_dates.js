const myDate = new Date()

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

// ************************* (Year,month,date,hr,min,sec)
let myCreateDate = new Date(2025,0,12,5,3,2)
console.log(myCreateDate.toString())
console.log(myCreateDate.toLocaleString())

//*************************** MM-DD-YYYY
let myCreateDate2 = new Date("01-31-2025")
console.log(myCreateDate2.toString())
console.log(myCreateDate2.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime())
console.log(Date.now()/1000) // -> Gets in decimals so use Math.floor
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1) // Starts form 0 so 1 is added
console.log(newDate.getDay())

newDate.toLocaleString('default' , {
    weekday : "long"
})