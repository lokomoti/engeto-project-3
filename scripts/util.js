// Můj původní postup přepínání themů odpovídal probrané látce z lekcí. Nelíbilo se mi, že to není scalovatelné. Hledal jsem na internetech lepší řešení.
// https://whitep4nth3r.com/blog/best-light-dark-mode-theme-toggle-javascript/
// Použil jsem jen část.

// const themeButton = document.getElementById("theme-switch");
const themeButton = document.querySelector(".theme-switch");
const themeIcon = document.getElementById("theme-switch");
const htmlAttr = document.querySelector("html");

// Get theme from local storage
const getTheme = () => {
  const theme = localStorage.getItem("theme");

  return theme === null ? "light" : theme;
};

// Store theme into local storage
const storeTheme = (theme) => {
  localStorage.setItem("theme", theme);
};

const changeTheme = () => {
  const nextTheme = getTheme() === "light" ? "dark" : "light";

  htmlAttr.setAttribute("data-theme", nextTheme);

  storeTheme(nextTheme);

  if (nextTheme === "light") {
    themeIcon.classList.add("fa-moon");
    themeIcon.classList.remove("fa-sun");
  } else {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
};

export const initThemeSwitch = () => {
  themeButton.addEventListener("click", changeTheme);
};

// Scrolling button
const scrollButton = document.querySelector(".to-top-scroller");

export const initScroller = () => {
  scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      scrollButton.style.display = "flex";
    } else {
      scrollButton.style.display = "none";
    }
  });
};
