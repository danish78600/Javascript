// Local storage writes the data to the disk, while session storage writes the data to the memory only. 

// localStorage.setItem("name","Danish");//Add a key value inside local storage.
// localStorage.clear();//Clears the local storage
// console.log(nam)//It will print Danish.

//Retrieve an item from local storage
// let nam=localStorage.getItem('name')

//How to remove particular item from local storage
// localStorage.removeItem('name');

//For adding an array
// let arr=["Patatoe","Bhindi"];
// localStorage.setItem('Vegetables' , JSON.stringify(arr));//It will add arr in vegetables.
// console.log(arr)
//JSON.stringfy will convert the array into string . JSON.parse will convert the string into array



//Session storage
// sessionStorage.setItem("sessionname","Danish");//Add a key value inside session storage.
// console.log(nam)//It will print Danish.


/*
Difference - When we restart the browser after commenting all the code. Our local storage will be the same
and is permanently stored untill we make it clear. But our session storage will utomatically get removed as 
it is temporary.
*/
