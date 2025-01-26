let myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

let myCreatedDate = new Date(2025, 1, 14)
let myCreatedDate1 = new Date(2025, 0, 15)
// console.log(myCreatedDate.toString())

// console.log(myCreatedDate1.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate1.getTime())

// convert it to seconds

// console.log(Math.floor(myTimeStamp/1000))
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();

// console.log(newDate.toLocaleString())
// console.log(newDate.getSeconds())

let fDate = newDate.toLocaleString('default',{
    // dateStyle : "full",
    timeZoneName : "long",
})

console.log(fDate)






