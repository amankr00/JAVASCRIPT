// Singleton 
Object.create

const mySym = '12y3'

const jsUser = {
    name : 'Aman',
    [mySym] : '12345',
    age : 24,
    location : 'New York',
    email : 'user2amankr@gmail.com',
    isLoggedIn : false
}

/*
    Key is taken as strings by js , so accessing using 
    jsUser.email is ok by right way is jsUser[email] as
    js dosen't allow jsUser.'email' . 
*/

console.log(jsUser[name])
console.log(mySym)