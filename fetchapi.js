//We can fetch data by using mordern technologies like fetch api instead of using xhr .

//Button with id mybtn
let mybtn=document.getElementById('mybtn');

//div with id content
let content=document.getElementById('content');


//In fetch api two .then are used . first is for response text and second is for data.


//Simple for understanding concept.
function getdata()
{
    console.log("Started get data")
    URL="danish.txt"
    fetch(URL).then((response)=>{          //The fetch will be running in background
        console.log("Inside first then")
        return response.text();
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data)
    })
}

