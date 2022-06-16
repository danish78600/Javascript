//Normal if else

let age=80;
if(age==18)
{
    console.log("Your age is 18")
}
else if(age==80){
    console.log("You are of 80");
}
else{
    console.log("You are a kid")
}

/*Note - 
1)  == check only value
2)  === check value and type .
*/


const pro=90;
if(typeof pro!=='undefined')
{
    console.log("pro is defined")//If pro is defined then it will print this else it will print the else statement.
}

else{
    console.log("pro is undefined")
}





console.log(age==45? 'Age is 45':'Age is not 45')//Conditional.


//Switch
switch(age){
case 18:
    console.log("You are an adult")
    break;
case 80:
    console.log("You are of 80")
}

