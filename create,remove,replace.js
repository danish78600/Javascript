//For  creating  element
let element=document.createElement('li')

//For adding class name to it.
element.className='childhul'

//for adding id name to it.
element.id="id"

//for adding attributes.
element.setAttribute('title','mytitle')//It will print title="mytitle" .

//For adding text
// element.innerText="This is created by Danish"
console.log(element)

//for adding HTML
// element.innerHTML="<b>Hello</b><br>"



//For adding elements into my main HTML document
let text=document.createTextNode('i am danish and this is my best program')
element.appendChild(text)
let ul=document.querySelector('ul.classn')
ul.appendChild(element)//It will print this element in the class with name classn in the last.
// console.log(ul)


//For replacing elements
let elem2=document.createElement('h3')
let node=document.createTextNode('Hello brothers')
elem2.appendChild(node)
elem2.className="elem1"
elem2.id="elem2"
element.replaceWith(elem2);//It will replace element with elem2.

//For relacing child elements
let myul=document.getElementById('myul')
myul.replaceChild(element,document.getElementById('a'))//First parameter should be the new element which you want after replacement.

//For removing elements.
myul.removeChild(document.getElementById('c'))

let elemm=elem2.getAttribute('class')//prints the class of elem2.
let clas=elem2.hasAttribute('class')//If it has class attribute then it will print true.
elem2.removeAttribute('id')//It will remove attribute.
// console.log(clas)

