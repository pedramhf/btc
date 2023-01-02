function show() {
  var menu = document.getElementById("nav-toggle");
  if (menu.className == "show") {
    menu.className = "";
  } else {
    menu.className += "show";
  }
}
