/*
asynchronus is used to do multiple thinks at a time by the processor.
Synchronous is used to do single think at a time and block the other thinks to perform.
*/

for (let index = 0; index < 45; index++) {
    console.log("The no is " +index)
}
console.log("Done")
//This is synchronous means that until index will reach to 45 do not print done.

//Asynchronus
setTimeout(() => {
    for (let index = 0; index < 45; index++) {
        console.log("The no is " +index)
    }
},100);//100 means that jab done print ho uske 100 millesecond baad for loop execute kro.
console.log("Done")

/*
3 ways to write asynchronus in javascript
i-await/async
ii-callbacks
iii-promises
*/