/*
primitive data type-memory location on stack
reference data type-memory location on heap

primitive-defined data types    E.G-string,number,boolean,null,undefined,symbol.
reference - derieved            E.G.-arrays,literals,dates,function.
*/

//1--Primitive
var name="Danish";
console.log("Data Type is "+ (typeof name));//string


var nam=89;
console.log("Data Type is "+ (typeof nam));//number


var na=true;
console.log("Data Type is "+ (typeof na));//boolean


var n=null;
console.log("Data Type is "+ (typeof n));//null


var un=undefined;
console.log("Data Type is "+ (typeof un));//undefined

//2--Reference
 
let arr=[9,2,3,4,5,"string",null]
console.log("Data Type is "+ (typeof arr));//Array


let obj={
    harry:90,
    danish:100,
    kanishk:19
}
console.log("Data Type is "+ (typeof obj));//Object



function namec() {
    
}
console.log("Data Type is "+ (typeof namec ));//Function




let date=new Date();
console.log("Data Type is "+ (typeof date));//Date