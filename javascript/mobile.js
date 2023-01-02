let show = true;
const menuMobile = document.querySelector(".menu");
const menuToggle = menuMobile.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial"
  menuMobile.classList.toggle("open", show)
  show = !show;
});