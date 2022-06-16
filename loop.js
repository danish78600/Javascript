for(let i=0;i<10;i++)
{
    console.log(i)
}


let i=0
while(i<10)
{
    i=i++
    console.log(i)
}


do{
    i=i+1;
    console.log(i)
}while(i>10)


let arr=[2,3,4,5,6]
arr.forEach(function(element) {
    console.log(element)
});



let  obj={
    name:'Danish',
    age:18,
    passion:'coding'
}


for(let key in obj)
{
    console.log(`The ${key} of object is${obj[key]}`)
}