var form =document.getElementById('addForm');
form.addEventListener('submit',adddetails);
let am = new Array ();
function adddetails(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    var output1=document.getElementById('output1');
    //output1.innerHTML=name;
    let arr = new Array ();
    arr.push(name);
    arr.push(email);
    arr.push(phone);
    output1.innerHTML=arr;
    am.push(a);
    localStorage.setItem(email,JSON.stringify(arr));
};
