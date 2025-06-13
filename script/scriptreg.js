const crt = [35, 36, 38, 64];
const ctr = [false, false, false, false, false];
function signup() {
  let user = document.getElementById('userr');
  let pass = document.getElementById('passr');
  //let lgr = document.getElementById('lgr');
  if (user.value !== "" && pass.value !== "") {
    for (var i in pass.value) {
      if (pass.value[i].charCodeAt() >= 48 && pass.value[i].charCodeAt() <= 57) {
        ctr[0] = true;
      }
      if (pass.value[i].charCodeAt() >= 65 && pass.value[i].charCodeAt() <= 90) {
        ctr[1] = true;
      }
      if (pass.value[i].charCodeAt() >= 97 && pass.value[i].charCodeAt() <= 122) {
        ctr[2] = true;
      }
      if (crt.includes(pass.value[i].charCodeAt())) {
        ctr[3] = true;
      }
    }
    if (pass.value.length >= 8) {
      ctr[4] = true;
    }
    if (ctr.includes(false)) {
      alert("The password must contain at least one uppercase letter, one lowercase letter, one special character and one number. Please try again");
    }
    else {
      localStorage.setItem("newuser", user.value);
      lgr.action = "myspace.html";
    }
  }
  else {
    alert("Fill up the form");
  }
}
