// let cont=document.querySelector('.child');
// cont=document.querySelector('.container');
// // console.log(cont.childNodes);//It will include all things
// // console.log(cont.children);//It will only include elements and does not print the text,spaces etc.

//1-
// let nodeName=cont.childNodes[0].nodeName;
// console.log(nodeName)//Prints the 1st element of container even if it is text because we are using childnodes.

//2-
// let nodeType=cont.childNodes[0].nodeType;
// console.log(nodeType)
/*
Node types
1-element
2-attribute
3-textnode
8-comment
9-document
10-doctype
*/


let container=document.querySelector('div.container')
// console.log(container.firstChild)//It will print the 1st child of the container same as child node.
// console.log(container.firstElementChild)//It will print the first element of the container same as children.

// console.log(container.lastChild)//It will print the last child of the container same as child node.
// console.log(container.lastElementChild)//It will print the last element of the container same as children.

// console.log(container.childElementCount)//It will print the count of all the elements which are in container class.
// console.log(container.children)//It will print all the elements which are in container class.

// console.log(container.firstElementChild.nextElementSibling);//It will print the next element.
// console.log(container.firstElementChild.nextSibling);//It will print the next element sibling.
