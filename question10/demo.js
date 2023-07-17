/*localStorage.setItem('name','bob');
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');

sessionStorage.setItem('name','john');
console.log(sessionStorage.getItem('name'));
sessionStorage.removeItem('name');
sessionStorage.setItem('name','bob');

document.cookie = 'name=Kyle';*/
var form =document.getElementById('addForm');
form.addEventListener('submit',adddetails);
function adddetails(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    localStorage.setItem('name',name);
    var email=document.getElementById('email').value;
    localStorage.setItem('email',email);
    var phone=document.getElementById('phone').value;
    localStorage.setItem('phone',phone);
};