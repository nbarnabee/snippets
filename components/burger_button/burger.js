const menuBtn = document.querySelector(".dropmenu"),
  navmenu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    navmenu.classList.toggle("open");
  } );