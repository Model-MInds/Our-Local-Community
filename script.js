const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

mobileNav.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

const mobileDropdownBtn = document.querySelector(".mobile-dropdown-btn");
const mobileDropdown = document.querySelector(".mobile-dropdown");

mobileDropdownBtn.addEventListener("click", () => {
  mobileDropdown.classList.toggle("dropdown-open");
});
