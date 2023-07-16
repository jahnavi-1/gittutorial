var form =document.getElementById('addForm');
var itemList =document.getElementById('items');
var filter= document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);

//Delete the event
itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterItems);

//addItem function
function addItem(e)
{
    e.preventDefault();
    //Get input value
    var newItem=document.getElementById('item').value;

    //Create new li elemt
    var li=document.createElement('li');
    li.className='list-group-item';
    console.log(li);
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create the delete elemtn
    var b =document.createElement('button');

    //Add class to button
    b.className='btn btn-danger btn-sm float-right delete';
    //append text to node
    b.appendChild(document.createTextNode('x'));
    //append button to li
    li.appendChild(b);
   // append to the item list 
    itemList.appendChild(li);


}
function removeItem(e){

    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure'))
        {
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
function filterItems(e)
{
    // convert text to lowercase
    var text=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
     
    //convert to an array
    Array.from(items).forEach(function (items){
        var itemsName =items.firstChild.textContent;
        if(itemsName.toLowerCase().indexOf(text)!=-1){
            itemList.style.display='block';
        }
        else{
            items.style.display='none';
        }

    });

}