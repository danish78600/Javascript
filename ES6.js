class employ{
    constructor(givenName,givenSalary,givenExperience)
    {
        this.name=givenName
        this.salary=givenSalary
        this.experience=givenExperience
    }
    slogan()
    {
        return `I am ${this.name}`;
    }
    joining()
    {
        return 2022 - this.experience;
    }
    static add(a,b)
    {
        return a+b;
    }
}
dan=new employ("Harry",290832,5)
console.log(dan)



//For inheritence
class program extends employ{
constructor(givenName,givenSalary,givenExperience,language)
{
    super(givenName,givenSalary,givenExperience)//Super() means contructor of old class.
    this.language=language;//We can add more and more functions by this method.
}

//Making a function.
favlang()
{
if(this.language=="python")
{
    console.log("Python")
}
else{
    console.log("Javascript")
}
}
static multiply (c,d)
{
    return c*d;
}
}

danish=new program("Danish",78432,10,"python")
console.log()