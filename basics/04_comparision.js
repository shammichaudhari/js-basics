// console.log("2" > 1 )

// While comparing always use same data type to avoid unexpected result.

// ===

// console.log("2" === 2 )


const id = Symbol('895')
const anotherId = Symbol('895')

// console.log(id === anotherId)


const myFunction = function(){
    console.log("HBS Services")
}

// myFunction()


// Stack (Primitive)   Heap (non primitive)

let companyName = "HBS Services"
let anotherCName = companyName
anotherCName = "Medical Services"

// console.table([companyName, anotherCName])


let userData = {
    uname : "HBS Services",
    email : "email@HBS.com",
    phone : 987546321
}

let userDataOne = userData

userDataOne.email = "shammi@google.com"

console.log(userData.email)
console.log(userDataOne.email)



