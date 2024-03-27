'use strict';

function tabs(){
	const tabParrent = document.querySelector('.items-pizza__navigation');

	tabParrent.addEventListener('click', initTabs);

	function initTabs (event){
		const targetElem = event.target;		

		if (targetElem.classList.contains('items-pizza__type') && !targetElem.classList.contains('active')) {
			const activeElement = document.querySelector('.items-pizza__type.active');
			const elements = document.querySelectorAll('.items-pizza__item');
			const elementType = targetElem.dataset.pizzaType;						

			activeElement.classList.remove('active');
			targetElem.classList.add('active');

			elements.forEach(element => {				
				!elementType || element.dataset.pizzaType === elementType ? element.hidden = false : element.hidden = true;
			});
		}
	}
}
export default tabs;