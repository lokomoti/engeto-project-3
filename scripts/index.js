import { initThemeSwitch, initScroller } from "./util.js";
import { initMenu } from "./menu.js";
import PWChecker from "./pwChecker.js";
import initPokemonGetter from "./pokemonGetter.js";

initMenu();
initThemeSwitch();
initScroller();
initPokemonGetter();

new PWChecker();
