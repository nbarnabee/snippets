// Changing the style of your navbar as the user scrolls

let navBar = document.querySelector(".nav-header");

window.onscroll = () => {
  if (window.scrollY > 150) navBar.classList.add("nav-active");
  else navBar.classList.remove("nav-active");
};
