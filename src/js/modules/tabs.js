'use strict';

function tabs(){
	const tabParrent = document.querySelector('.items-workshop__nav');

	tabParrent.addEventListener('click', initTabs);

	function initTabs(event){
		const targetElem = event.target;

		if(targetElem.closest('.items-workshop__nav')){
			const tabNavItem = targetElem.closest('.items-workshop__button');
			if(!tabNavItem.classList.contains('active')){
				const activeTabNavItem = document.querySelector('.items-workshop__button.active');
				activeTabNavItem.classList.remove('active');
				tabNavItem.classList.add('active');
	
				const tabItem = document.querySelectorAll('.items-workshop__body');
				const tabItemActive = document.querySelector('.items-workshop__body.active');
	
				tabItemActive.classList.remove('active');
				tabItem[getIndex(tabNavItem)].classList.add('active');
				console.log(tabItem[getIndex(tabNavItem)]);			
			}
		}
	
	}

	
	function getIndex(element){	
		console.log(Array.from(element.parentNode.children).indexOf(element));	
		return Array.from(element.parentNode.children).indexOf(element);
	}
}
export default tabs;