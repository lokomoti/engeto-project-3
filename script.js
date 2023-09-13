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

const initMenu = () => {
  menuIcon.addEventListener("click", menuClickHadle);
};

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

const initThemeSwitch = () => {
  themeButton.addEventListener("click", changeTheme);
};

// Scrolling button
const scrollButton = document.querySelector(".to-top-scroller");

const initScroller = () => {
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

// Pokemon getter //
const button = document.getElementById("pokemon-getter-button");
const pokemonStage = document.querySelector(".pokemon-stage");

const getRandomNumber = (max = 255) => {
  return Math.ceil(Math.random() * max);
};

const getSinglePokemon = (number) => {
  // const number = 50;
  fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      buildPokemon(data.name, data.sprites.front_default);
    });
};

const getPokemons = () => {
  // Clear the stage
  const divsToRemove = pokemonStage.querySelectorAll(".pokemon-avatar");

  divsToRemove.forEach((div) => {
    pokemonStage.removeChild(div);
  });

  // Get and build pokemons
  for (let i = 0; i < 3; i++) {
    getSinglePokemon(getRandomNumber());
  }
};

// Build Pokemon avatar from HTML elements
const buildPokemon = (name, image) => {
  console.log(name, image);

  const avatarDiv = document.createElement("div");
  const nameHeader = document.createElement("h3");
  const imageElement = document.createElement("img");

  nameHeader.textContent = name;
  imageElement.src = image;
  imageElement.alt = "pokemon image";

  avatarDiv.classList.add("pokemon-avatar");
  avatarDiv.append(nameHeader);
  avatarDiv.append(imageElement);

  pokemonStage.append(avatarDiv);
};

const initPokemonGetter = () => {
  button.addEventListener("click", getPokemons);
};

// Password checker
// Tento udělám OOP

class PWChecker {
  constructor() {
    this.first_input = document.getElementById("password-1");
    this.second_input = document.getElementById("password-2");
    this.errorMsg = document.querySelector(".password-invalid");

    this.init();
  }

  init() {
    this.first_input.addEventListener("input", () => this.validate());
    this.second_input.addEventListener("input", () => this.validate());
  }

  validate() {
    if (!this.inputsEmpty()) {
      this.hideError(this.passwordMatched());
    } else {
      this.hideError(true);
    }
  }

  passwordMatched() {
    return this.first_input.value === this.second_input.value;
  }

  inputsEmpty() {
    return this.first_input.value === "" && this.second_input.value === "";
  }

  hideError(display) {
    this.errorMsg.style.display = display === false ? "inline" : "none";
  }
}

initMenu();
initThemeSwitch();
initScroller();
initPokemonGetter();

new PWChecker();
