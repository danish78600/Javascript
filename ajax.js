/*
AJAX is not a programming language. It is asynchronous javascript and XML.It is a set of technologies.
AJAX help in fetching data aschnchronously without interfering with the existing page.No page reload/refresh.
Modern websites use JSON more than XML.

Why use AJAX??
No page reload/refresh.
Better user experience

HOW AJAX works?
AJAX uses  XML http request object(xhr)
Data can be transfered in any format.

*/
let fetch = document.getElementById('fetch')
fetch.addEventListener('click', buttonclick)
function buttonclick() {
    console.log("You have clicked on fetch")



    //Making an xhr object
    const xhr = new XMLHttpRequest();



    //Open the object
    // xhr.open('GET','danish.txt',true)//1st parameter is what type of request you want. 2nd parameter is that from which file you want data . 3rd parameter is that if you want aschnchronous then write true.
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)

    //use this for post request 
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true)
    xhr.getResponseHeader('Content-type', 'application/json')//It means that we are sending our data in URL form.


    //What to do on progress(optional)
    xhr.onprogress = function () {
        console.log("On progress")
    }



    //onready state change
    /*
xhr ready state code values
0-unsent   -  Client has been created. open() not called yet.
1-opened   -  Open() has been completed.
2-HEADERS_RECEIVED   -   send() has been called, and headers and status are available.
3-loadings   -    Downloading; responseText holds partial data.
4-Done   -   	The operation is complete.
*/

    xhr.onreadystatechange = function () {
        console.log("xhr ready state is ", xhr.readyState)
    }




    //what to do when response is ready
    //200 is the response code of HTTP which means that response is ok .
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText)//When everythink is ready then it will send me the response text.
        }
        else {
            console.error("Some error occured")
        }
    }

    //send the request
    params = `{name":"test","salary":"123","age":"23}`//By this we can send post request.Post request is used to send large data. We can send passwords using post as it is safe
    xhr.send(params)
    console.log("We are done")
}





let populate=document.getElementById('populate');
populate.addEventListener('click',pop)
function pop()
{
    console.log("You have clicked on fetch")



    //Making an xhr object
    const xhr = new XMLHttpRequest();



    //Open the object
    // xhr.open('GET','danish.txt',true)//1st parameter is what type of request you want. 2nd parameter is that from which file you want data . 3rd parameter is that if you want aschnchronous then write true.
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true)

    xhr.onload = function () {
        if (this.status === 200) {
            let obj=JSON.parse(this.responseText)
            console.log(obj)//Prints the data in JSON form .
            //For getting elements in the main HTML document.
            let list=document.getElementById('list')
            str=" ";
            for(key in obj)
            {
                str += `<li> ${obj[key].employee_name} </li>`;
            }
            list.innerHTML=str;
        }
        else {
            console.error("Some error occured")
        }
    }

    //send the request
    params = `{name":"test","salary":"123","age":"23}`//By this we can send post request.Post request is used to send large data. We can send passwords using post as it is safe
    xhr.send(params);
    console.log("We are done")
}
