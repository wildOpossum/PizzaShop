'use strict';
import menuBurger from "./modules/burgerMenu.js"; 
import setActive from "./modules/setActive.js";
document.addEventListener('DOMContentLoaded', () => {
	menuBurger();
	setActive({
		parrentSelector: '.menu__body',
		targetSelector: '.menu__link'
	});
	setActive({
		parrentSelector: '.btns-block',
		targetSelector: '.btns-block__button'
	});
});