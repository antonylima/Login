var consta = false
var campos = false
function login() {
  for(let l in users){
 if (user.value !== "" && pass.value !== "") {
    campos = true
    if (user.value === users[l].name && pass.value === users[l].pass) {
      consta = true
    }
  }else{
    alert("Fill the form")
  }
 }
 if(consta === true){
  //alert("ok")
  localStorage.setItem('login', user.value)
  lg.action = "home.html"
 }
 if(consta === false && campos === true){
    alert("Wrong data")
 }
}
