var consta = false
function login() {
  for(let l in users){
 if (user.value !== "" && pass.value !== "") {
    if (user.value === users[l].name && pass.value === users[l].pass) {
      consta = true
    }
  }
 }
 if(consta === true){
  //alert("ok")
  localStorage.setItem('login', user.value)
  lg.action = "home.html"
 }
 if(consta === false){
  alert("Wrong data")
 }
}
