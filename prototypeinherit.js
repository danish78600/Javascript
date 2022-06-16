//It is an old method and is not used now but we have some knowledge about that.
//In this we are going to define an object .
// const proto={
//     slogan:function()
// {
//     return("This company is the best")
// },
//     changename:function(newName)
// {
//     this.name=newName;
// }
// }

//1-
//It will create an object.
// const pro=Object.create(proto)
// pro.changename="Danish"
// pro.name="Danish"
// pro.role="Coder"
// console.log(harry)


//2-
//It is a complex statement as we are not going to use in other tutorials.
//This will also creates an object
// const harry=Object.create(proto,{
//     name:{value:'Danish',writable:true},//writable:true means that we can change this name even if it is of const harry element.
//     class:{value:'Coding'},
// })
// harry.changename("Dani")//It will change the name beacuse in name we haveused writable:true;
// console.log(harry)


//3-Inheritence
//i-
function employ(company,salary,passion)
{
    this.company=company;
    this.salary=salary;
    this.passion=passion;
}
employ.prototype.slogan=function()
    {
        return(`My worship: . ${this.company}`)
    }
let objj=new employ("Google",342423,"Coder")
console.log(objj)


//ii-
function bhai(company,salary,passion,language)
{
    employ.call(this,company,salary,passion);//This will inherit all these 4 arguements from employ object by employ.call(parameters).Also use this as the first arguement
    this.language=language;
}
bhai.prototype=Object.create(employ.prototype)//It will get the slogan from employ and put it to bhai.
let danish=new bhai("Micosoft",20000,"Game Developer","Python")//Use let in starting.
console.log(danish)
