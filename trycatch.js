//Pretend that it is comming from a server
let a="Danish Bhai"
if(a!=undefined)
{
    console.log("Not undefined")
}
else{
    console.log("Undefined")
}




//First it will try to run try block and if will throw error then it will go to the Catch block
try {
    console.log("Inside try block")
    functionpro()
}
 catch (error) {
    console.log("Are you okay")
    // console.log(error.name)
    // console.log(error.message)
    console.log(error)
}finally{
    console.log("Finally it will run")   //Finally it will run .
}