//type conversion
let myvar=String(54)
console.log("Data Type is "+ (typeof myvar));//Data type is converted to string.

let i=9;
i=i.toString()
console.log("Data Type is "+ (typeof i));//Data type is converted to string by second method.

let op=parseInt("danish")
console.log("Data Type is "+ (typeof op))//Data type is converted to string by third method.

let number=parseFloat('23.2397213');
console.log(number.toFixed(2));//It will only log till 2 decimal points.

//type coercion

let mystr=number('90')
let mynum=90
console.log(mystr+mynum)


