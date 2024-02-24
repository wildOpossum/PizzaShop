'use strict';

function setActive () {
	const parrent = document.querySelector('.menu__body');

	parrent.addEventListener('click', (event) => {
		const navItem = event.target.closest('.menu__link');
		if(!navItem.classList.contains('active')){
			const activeNavItem = document.querySelector('.menu__link.active');
			activeNavItem.classList.remove('active');
			navItem.classList.add('active');
		}
	})
}

export default setActive;