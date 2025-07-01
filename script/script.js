const users = [{name:'admin',pass:'admin'}];
const user = document.getElementById('user');
const pass = document.getElementById('pass');
const lg = document.getElementById('lg');

function login() {

for(let l in users){
 if (user.value !== "" && pass.value !== "") {
    if (user.value === users[l].name && pass.value === users[l].pass) {
      lg.action = "home.html"
    }
    else {
      alert("Wrong data")
    }
  }
  else {
    alert("Fill up the form");
  

}}}
