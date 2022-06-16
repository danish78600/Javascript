//async will return a promise.With use of async/await we does not have to use 2 .then 
async function harry()
{
    console.log("Inside function")
    return "harry"
}
console.log("before")
let a=harry()
console.log(a)
console.log("last line")