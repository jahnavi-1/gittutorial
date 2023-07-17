let myobj={
    name:"dom",
    age:18
};
let myobj_serilized = JSON.stringify(myobj);
localStorage.setItem('myobj',myobj_serilized);
 var myobj_deserialize = JSON.parse(localStorage.getItem('myobj'));
console.log(myobj_deserialize);