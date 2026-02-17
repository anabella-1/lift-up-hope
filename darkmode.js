const toggle =
document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
 document.getElementById("menuToggle");
const nav = document.querySelector("navmenu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});
