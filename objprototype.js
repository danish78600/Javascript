//__proto__ is a way to inherit properties from an object in JavaScript.


//1-
//This is added into the old prototype because we did not  created a new prototype.
let obj={
    name:'Danish',
    class:'9th a'
}
// console.log(obj)



//2-
//Creating a new prototype.We can create a new prototype by creating a new constructor.
function Obj(name)
    {
    this.nam=name;
    }

    //if you want to send the functions which are in your object to prototype then use this.
    //Note--Do this only when you have created a new contructor.
    Obj.prototype.getName=function()
    {
        return this.name;
    }


car1=new Obj("Danish")
console.log(car1)

//Note-We can change prototype by making constructor only .