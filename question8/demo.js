//Traversing the  DOM
var itemList=document.querySelector('#items');
//parentNode
/*console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';


console.log(itemList.parentNode.parentNode);//contianer

console.log(itemList.parentNode.parentNode.parentNode);
*/

//parentElement
/*console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//they are almost same

//childNode
//console.log(itemList.childNodes);
 console.log(itemList.children);
 console.log(itemList.children[1] );;
 itemList.children[1].style.backgroundColor='yellow';*/
//last elemnt child
/* console.log(itemList.firstChild);
 console.log(itemList.firstElementChild.textContent)='Hello 1';
 //nextSibling
 console.log(itemList.nextSibling);
 console.log(itemList.nextElementSibling);*/

 //previosSibling
 /*console.log(itemList.previousSibling);
 console.log(itemList.previousElementSibling);
 itemList.previousElementSibling.style.color='green';
*/
//create element 

//create a div 
var newDiv=document.createElement('div');
//add class
newDiv.className='hello';
//add id

newDiv.id='hello1';
//Add attr
newDiv.setAttribute('title','Hello Div');

//Create a text node
var newDivText =document.createTextNode('Hello world');

//add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);
console.log(newDiv);

var 

newDiv.style.fontSize='30px';


