let name;
function greet(name) {
    console.log(`Happy Birthday ${name}`)
}//This function will take a name and call it happy birthday when we call it.

greet("Danish")

const obj={
    naam:'Danish',
    game:function(){
    return "Gta";
    }
}
console.log(obj.game())

arr=["Banana","Apple","Papaya"]
arr.forEach(function(element,index,array) {
    console.log(element,index,array)
})

/*
JavaScript function definitions do not specify data types for parameters.

JavaScript functions do not perform type checking on the passed arguments.

JavaScript functions do not check the number of arguments received
*/