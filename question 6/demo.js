//console.dir(document);
//console.log('ji');
//examning the document object
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title); //title of document
//document.title=123;
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent='hello';
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

//Get Elemnt By Id
//console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');

 /* console.log(headerTitle);

 headerTitle.textContent='hello'; //span una kuda console lo chupithadi
 headerTitle.innerText='ji';//chupiyadu
 headerTitle.innerHTML='<h3>hi</h3>';*/

// header.style.borderBottom='solid 3px #000';

//geting  elemnt by class name

/*var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='hello2';

var additems =document.getElementsByClassName('title');
//additems.innerHTML='<h1>Add items</h1>';
console.log(additems);
additems[0].style.fontWeight='bold';
additems[0].style.backgroundColor='green';*/

/*var first=document.getElementsByClassName('list-group1');
first[0].style.backgroundColor='black';
first[0].style.fontWeight='bold';
first[0].style.color='white';

const list=document.getElementsByTagName("p");
//console.log('Hi');
console.log(list.length);*/

//QuerySelector 

/*var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px grey';

var input=document.querySelector('input');
input.value='Hello world'; //only first one

var submit =document.querySelector('input[type="submit"]');
submit.value='send';

var item=document.querySelector('.list-group-item');
item.style.color='red';
var lastitem=document.querySelector('.list-group-item:last-child');
lastitem.style.color='blue';

var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color='pink';
*/
//Query Selector ALL
var thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.color='pink';
thirditem.style.visibility='hidden';


var titles =document.querySelectorAll('.title');
console.log(titles); 
var list=document.querySelectorAll('li');
titles[0].textContent='Hello';
list[1].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}






