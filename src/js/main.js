'use strict';
import menuBurger from "./modules/burgerMenu.js"; 
import setActive from "./modules/setActive.js";
document.addEventListener('DOMContentLoaded', () => {
	menuBurger();
	setActive()
});