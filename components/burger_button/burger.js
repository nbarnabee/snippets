const menuBtn = document.querySelector(".dropmenu"),
  navMenu = document.querySelector(".menu"),
  dropLinks = document.querySelectorAll(".drop-link");
  
menuBtn.addEventListener("click", toggleNav);
dropLinks.forEach(element => element.addEventListener('click', toggleNav));

function toggleNav() {
    menuBtn.classList.toggle("open");
    navMenu.classList.toggle("open");
  };