const promiseOne = new Promise(function (resolve, reject) {
    // DO any DB Task
    setTimeout(function(){
        console.log('Async task is completed')
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promises is consumed')
})

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 completed')
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async task 2 is consumed')
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username : "HBS",
            email : "Shammi@hbsservices.com"
        })
    }, 1000)
}).then(function(userdata){
    console.log(userdata)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({
                username : "shammi",
                email : "shammi@hbsservices.com"
            })
        } else {
            reject('Error: Something Went Wrong with Request')
        }
    }, 1000)
})

promiseFour.then((user) => {
    // console.log(user)
    console.log(user.username)
}).catch((error) => {
    console.log(error)
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({
                username : "Js Beginners",
                password : "123"
            })
        } else {
            reject('Error: Something Went Wrong with Request')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
   }    
   catch (error) {
        console.log(error)
   }
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('E: ', error)
    }
}

getAllUsers()
