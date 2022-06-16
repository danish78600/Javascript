// Promise:
// -resolve
// -reject 
// -pending 

// Promise will take an function and that function will take 2 more functions.

function func1()
{
    return new Promise(function(resolve,reject){
setTimeout(()=> {
    const error=false;
    if(!error)
    {
        console.log("Resolved")
        resolve();
    }
    else{
        console.log("Rejected")
        reject("Sorry Not fulfilled");
    }
},3000);
    })
}


func1().then(function()        //then means if it is reolved then print this function.
{
    console.log("Thanks for resolving")
}).catch(function(error)           //catch means if it is rejected then print this function.
{
    console.log("Very bad Danish"+error)
})