// Singleton 
Object.create
// Singleton
const tinder = new Object()
console.log(typeof(tinder))

const mySym = '12y3'

const jsUser = {
    name: "Aman",
    [mySym] : '12345', // Syntax for Symbal datatype
    age : 24,
    location : 'New York',
    email : 'amankr@gmail.com',
    isLoggedIn : false,
    lastLogin : ['monday' , 'friday']
}

/*
    Key is taken as strings by js , so accessing using 
    jsUser.email is ok by right way is jsUser['email'] as
    js dosen't allow jsUser.'email' . 
*/

console.log(jsUser['name'])
console.log(jsUser['email'])
console.log(mySym)
console.log(typeof([mySym]))

jsUser.email = 'kr@reddit.com' // Overwrite
console.log(jsUser['email'])

// To make the object immutable , we also cannot add anything in the object 
// Object.freeze(jsUser)

jsUser.email = "xyz@ybl.com"  // Not updated as Object.freeze is used.
console.log(jsUser['email']) 

console.log(jsUser)

jsUser.greeting = function(){
    console.log('\nThis is a function')
}

jsUser.greeting()
console.log(jsUser.greeting)
