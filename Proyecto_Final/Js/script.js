window.onload = function () {
  document.title = "Gaudeo Viajes";
};

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav");

  burgerMenu.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});
