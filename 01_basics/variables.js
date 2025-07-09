const accountID = "1234"
let accountName = "Aman Kumar"
var accountEmail = "am@xyz.com"

accountCity = "Bangaluru"

let account

// accountID = "456" >> Error >> Assignment to Constant Variable

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountID)

console.table([accountID , accountName , accountEmail , accountCity , account])