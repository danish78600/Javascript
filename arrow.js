//Creating a normal function
// const harry=function()
// {
//     console.log("Harry is called")
// }


//Converting it to arrow function
const harry = () =>
{
    console.log("Resolved")
}
harry()

//One liners do not require brackets if they are returning a string.
const greet=()=>"Good morning" //Greet will return Good Morning.
console.log(greet())


//Require brackets because it is an object
// const great=()=>({name:"Danish"})
// console.log(great())


//Parathensis is used with more than 1 parameters.
const great=(name,subject)=>"Good morning "+name+" You have choosen "+subject
console.log(great("Danish","Python"))