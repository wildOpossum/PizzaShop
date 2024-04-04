'use strict';
import menuBurger from "./modules/burgerMenu.js"; 
import setActive from "./modules/setActive.js";
import tabs from "./modules/tabs.js";
import setSelect from "./modules/setSelect.js";
import setSearchForm from "./modules/searchForm.js";
import initLoginForm from "./modules/loginForm.js";

document.addEventListener('DOMContentLoaded', () => {
	menuBurger();
	setActive({
		parrentSelector: '.menu__body',
		targetSelector: '.menu__link',
	});
	setActive({
		parrentSelector: '.btns-block',
		targetSelector: '.btns-block__button'
	});
	tabs();
	setSelect();
	setSearchForm();
	initLoginForm();	
});