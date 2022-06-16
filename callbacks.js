//callbacks are function inside function.
const students=[{name:"Harry",subject:"Javascript"},
{name:"Danish",subject:"Python"}]

function enroll(student,callback)
{
    setTimeout(function() {
        students.push(student)//This will run in background after 2000 milleseconds when we will call this function.
        console.log("Enrolled")
        callback;//It means that after calling enroll() starts the next code execution .
    },1000);
  
}

function getstudent()
{
    setTimeout(function() {
        let str="";
        students.forEach(function(student) {
            str += `<li>${student.name}</li>`
        });
        document.getElementById('con').innerHTML=str;
        console.log("Enrolling")
    },3000);
}

let std={name:"JUgraj",subject:"java"};//If we do 3000 at 1000 and 1000 at 3000 then  jugraj will print.
enroll(std,getstudent());