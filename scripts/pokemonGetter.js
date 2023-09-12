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

export default initPokemonGetter;
