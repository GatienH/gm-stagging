document.querySelector('#burger').onclick = function() {
  const nav = document.querySelector("nav");
  nav.classList.remove("hidden");

  const body = document.querySelector("body");
  body.classList.add("overflow-y-hiden");
}

document.querySelector('#close').onclick = function() {
  const nav = document.querySelector("nav");
  nav.classList.add("hidden");

  const body = document.querySelector("body");
  body.classList.remove("overflow-y-hiden");
}