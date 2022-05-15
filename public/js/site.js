const sidebar = document.getElementById("sidebar");
const menu = document.getElementById("menu");
const content = document.getElementById("content");

menu.addEventListener("click", function () {
  sidebar.classList.toggle("collapsed");
  menu.classList.toggle("is-active");
});
content.addEventListener("click", function () {
  sidebar.classList.remove("collapsed");
  menu.classList.remove("is-active");
});
