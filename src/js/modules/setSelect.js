'use strict';

function setSelect(){
	const parrentSelector = document.querySelector('.sorting');
	const popUp = document.querySelector('.sorting__popup');
	const sortingSelect = document.querySelector('.sorting__select')
	
	parrentSelector.addEventListener('click', (event) => {				
		if(event.target.closest('.sorting__toggle') 
		|| event.target.closest('span') 
		|| event.target.classList.contains('sorting__select')){			
			if(popUp.classList.contains('active')){
				popUp.classList.remove('active');
				sortingSelect.classList.remove('active');
			}
			else{
				popUp.classList.add('active');
				sortingSelect.classList.add('active');
			}									
		}			
	});
	document.body.addEventListener('click', (e) => {
		if (!e.target.closest('.sorting__select') && !e.target.closest('.sorting__toggle')) {
			popUp.classList.remove('active');
			sortingSelect.classList.remove('active');
		}
	});
}
export default setSelect;