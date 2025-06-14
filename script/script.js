function login() {
  var user = document.getElementById('user');
  var pass = document.getElementById('pass');
  var lg = document.getElementById('lg');
  if (user.value !== "" && pass.value !== "") {
    if (user.value == "admin" && pass.value == "admin") {
      lg.action = "home.html"
    }
    else {
      alert("Wrong data")
    }
  }
  else {
    alert("Fill up the form");
  }
}
