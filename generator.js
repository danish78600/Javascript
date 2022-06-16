//In for loop think that you have to store values from 0-1B then we will make a generator
//which will not store values but generate it when needed.
function* numbergen()
{
    let i=0;

    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
// const gen=numbergen()
// console.log(gen.next())//It will print the next of generator.
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())//It will print true because yield values are finished.




function* numbergeen()
{
    let i=0;

    while(true)
    {
        yield i++;
    }
}
const gen=numbergeen()
console.log(gen.next().value)//It will print the next of generator.
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)//It will print value .