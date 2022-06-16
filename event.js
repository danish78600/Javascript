//1-
// document.getElementById('hlo').addEventListener('click',function()
// {
//     console.log("You have clicked")
//     // location.href='codewithharry.com';//If we click on element with id hlo then it will send it to codewithharry.com.
// })



//2-
// document.getElementById('hlo').addEventListener('click',function(a)
// {
//     console.log("You have clicked")
//     let variable;


//     // variable=a.target;//It will print the who element in which you have targetted.
//     // variable=a.target.className;
//     // variable=a.target.classList;
//     // variable=a.target.id;
//     variable=a.offsetX;
//     variable=a.offsetY;
//     variable=a.clientX;
//     variable=a.clientY;


//     console.log(variable)
//     // location.href='codewithharry.com';//If we click on element with id hlo then it will send it to codewithharry.com.
// })



//More on event listeenrs.
//1-
// let btn=document.getElementById('fo');
// btn.addEventListener('mouseover',func1)
// btn.addEventListener('click',func2)
// btn.addEventListener('dblclick',func3)
// btn.addEventListener('',func4)

// function func1() {
//     console.log("Hello bro")
// }
// function func2() {
//     console.log("It is a click")
// }
// function func3()
// {
//     console.log("It is a double clcik")
// }



//2-
// document.querySelector('.child').addEventListener('mouseenter',function()
// {
//     console.log("You have entered");
// })


// document.querySelector('.child').addEventListener('mouseleave',function()
// {
//     console.log("You get exit");
// })

// document.querySelector('.container').addEventListener('mousemove',function(e)
// {
//     console.log(e.offsetX,e.offsetY);//prints the offset when the event will occur.
//     document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${e.offsetX+e.offsetY})`;//For styling.
//     console.log("You trigerred");
// })