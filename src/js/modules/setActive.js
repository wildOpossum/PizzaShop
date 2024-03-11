'use strict';

function setActive ({parrentSelector, targetSelector}) {
	const parrent = document.querySelector(parrentSelector);

	parrent.addEventListener('click', (event) => {
		const navItem = event.target.closest(targetSelector);
		if(!navItem.classList.contains('active')){
			const activeNavItem = document.querySelector(`${targetSelector}.active`);
			activeNavItem.classList.remove('active');
			navItem.classList.add('active');
		}
	})
}

export default setActive;