const menuToggles = document.querySelectorAll(".menu-toggle")

menuToggles.forEach(function(menuToggle) {
  const nav = document.querySelector("nav");
  const body = document.querySelector("body");

  menuToggle.onclick = function () {
    nav.classList.toggle("hidden");
    body.classList.toggle("overflow-y-hiden");
  }
})
