'use strict';

function setSearchForm() {
	const form  = document.querySelector('.advanced-menu__form');
	const input = document.querySelector('.advanced-menu__input');
	const clearBtn =document.querySelector('.advanced-menu__btn');

	input.addEventListener('focus', (e) => {
		if (e.target.classList.contains('advanced-menu__input')) {
			clearBtn.classList.add('focus');
		}
	});

	input.addEventListener('blur', (e) => {
		if (e.target.classList.contains('advanced-menu__input')) {
			clearBtn.classList.remove('focus');
		}
	});

	clearBtn.addEventListener('click', (e) => {
		e.preventDefault();
		if (form) {
			form.reset();
		}
		
	});
}

export default setSearchForm;