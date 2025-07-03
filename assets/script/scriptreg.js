function signup() {
  if (userr.value !== "" && passr.value !== "") {
    for (let i in passr.value) {
      if (passr.value[i].charCodeAt() >= 48 && passr.value[i].charCodeAt() <= 57) {
        ctr[0] = true;
      }
      if (passr.value[i].charCodeAt() >= 65 && passr.value[i].charCodeAt() <= 90) {
        ctr[1] = true;
      }
      if (passr.value[i].charCodeAt() >= 97 && passr.value[i].charCodeAt() <= 122) {
        ctr[2] = true;
      }
      if (crt.includes(passr.value[i].charCodeAt())) {
        ctr[3] = true;
      }
    }
    if (passr.value.length >= 8) {
      ctr[4] = true;
    }
    if (ctr.includes(false)) {
      alert("The password must contain at least one uppercase letter, one lowercase letter, one special character and one number. Please try again");
    }
    else {
      localStorage.setItem('i',   parseInt(localStorage.getItem('i')) + 1);
      let i = localStorage.getItem('i')
      localStorage.setItem('us'+ i,
      JSON.stringify({name:userr.value,pass:passr.value})
  )  
      lgr.action = "myspace.html";
    }
  }
}
function somar(){
  //alert()
  localStorage.setItem('i',   parseInt(localStorage.getItem('i')) + 1);
  let i = localStorage.getItem('i')
  localStorage.setItem('us'+ i,
    JSON.stringify({name:userr.value,pass:passr.value})
  ) 
}

showr.onclick = () => {
  if (passr.type === "password") {
    passr.type = "text"
  }else{
    passr.type = "password"
  }
}