document.querySelector('#burger').onclick = function() {
  const menu = document.querySelector("#menu");
  menu.classList.remove("hidden");

  const body = document.querySelector("body");
  body.classList.add("overflow-y-hiden");
}

document.querySelector('#menu-close').onclick = function() {
  const menu = document.querySelector("#menu");
  menu.classList.add("hidden");

  const body = document.querySelector("body");
  body.classList.remove("overflow-y-hiden");
}