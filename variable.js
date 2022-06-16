//const or let increases the code readability and are very good to use.


/* 3 keywords by which we can make variables
1-let
2-var
3-const

We will assign values in them or we can declare them.
*/
var a ="danish"//Initialising
console.log(a)

var channel;//Only declaring
channel="codewithdanish"//Initialising.

/*
Rules for creting variables

1-cannot start with numbers.
2-can start with letters , _ , numbers or $ .
3-Variables are case sensitive.

// $ or _ - Use them in object oriented programming.
const is used when we does not want to change the value .
*/


const b ="pro";//we have to assign value when we have written const.
// b="bhai";//throw an error because it is declared with const in 29th line.
console.log(b);

//var have global scope.
//let,const have block level scope.
// city="kolkata"
{
    let city="rampur";
    console.log(city)
}

/*
most programming case types
1-camelcase
2-kebab-case
3-snake_case
4-PascalCase
*/