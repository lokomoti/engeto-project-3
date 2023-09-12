const ICON_MENU = "fa-bars";
const ICON_HIDE = "fa-xmark";

const menuIcon = document.getElementById("icon");
const menuElement = document.querySelector(".full-menu");

const menuClickHadle = () => {
  if (menuIcon.classList.contains(ICON_MENU)) {
    // Class manipulation, hide hamburger
    menuIcon.classList.add(ICON_HIDE);
    menuIcon.classList.remove(ICON_MENU);

    menuElement.style.display = "block";
  } else {
    // Class manipulation, show hamburger
    menuIcon.classList.add(ICON_MENU);
    menuIcon.classList.remove(ICON_HIDE);

    // Display menu
    menuElement.style.display = "none";
  }
};

export const initMenu = () => {
  menuIcon.addEventListener("click", menuClickHadle);
};
