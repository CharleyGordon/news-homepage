const hamburger = document.querySelector(".hamburger");
let header = document.querySelector("header");
hamburger.addEventListener("click", () => {
  if (header.dataset.menuOpen === undefined) {
    header.setAttribute("data-menu-open", "true");
  } else {
    header.removeAttribute("data-menu-open");
  }
  // header.dataset.menuOpen = "";
});
