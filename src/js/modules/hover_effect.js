'use strict';

function addHoverEffect({firstSelector, secondSelector, hoverClass} ){
	const elementImg = document.querySelectorAll(firstSelector);

	elementImg.forEach(item => {		
		item.addEventListener('mouseenter', () => actionHoverEffect(event, firstSelector, secondSelector, hoverClass));
		item.addEventListener('mouseleave', () => removeHoverEffect(event,  hoverClass));
		item.classList.remove('hover');		
	});
	
	function actionHoverEffect (event, firstSelector, secondSelector, hoverClass){
		const targetElement = event.target;		
		
		if(targetElement.closest(firstSelector)){
			const element = targetElement.closest(firstSelector);
			
			if (!element.classList.contains(hoverClass.slice(1))) {
				element.classList.add(hoverClass.slice(1));								
			}
			const childElements = element.children;
			const childElem = Array.from(childElements)
			
			for (const elem of childElem) {
				if (elem.closest(secondSelector)){
					if (!elem.classList.contains(secondSelector)) {
						elem.classList.add(hoverClass.slice(1));								
					}
				}
				
			}
		}
	}
	function removeHoverEffect (event, hoverClass){
		const targetElement = event.target;		
		
		if(targetElement.closest(hoverClass)){
			const element = targetElement.closest(hoverClass);
			
			if (element.classList.contains(hoverClass.slice(1))) {
				const hoverElement = document.querySelector(hoverClass);				
				hoverElement.classList.remove(hoverClass.slice(1));				
			}
			const childElements = element.children;
			const childElem = Array.from(childElements)
			
			for (const elem of childElem) {
				if (elem.closest(hoverClass)){
					elem.classList.remove(hoverClass.slice(1));							
					}
				}						
		}
	}
}
export default addHoverEffect;

