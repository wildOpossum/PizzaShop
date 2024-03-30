'use strict';

function initLoginForm(){
	const modalTriger = document.querySelector('.actions__login');
	const modalCloseBtn = document.querySelector('[data-close]');
	const modal = document.querySelector('.modal');
	const form = document.forms.loginform;
	const input = form.querySelectorAll('input');
	const showBnt = form.querySelector('.modal-pass__show');
	const pass = form.password;

	function showLogin() {
		modal.classList.add('active');
		document.querySelector('body').classList.add('lock');
	}

	function closeLogin() {
		modal.classList.remove('active');
		form.reset();
		input.forEach(item => {
			item.classList.remove('error');
		});
		document.querySelector('body').classList.remove('lock');
	}

	modalTriger.addEventListener('click', (e) => {
		e.preventDefault();
		if (e.target.closest(".actions__login")) {
			showLogin();
		}
	});

	modalCloseBtn.addEventListener('click', closeLogin);

	modal.addEventListener('click', (event) => {
		if (event.target === modal) {
			closeLogin();
		}
	});

	showBnt.addEventListener('click', () => {
		showBnt.classList.toggle('show');
	
		if (pass.getAttribute('type') === 'password') {
			pass.setAttribute('type', 'text');
		} else {
			pass.setAttribute('type', 'password');
		}
	});

	input.forEach(item => {
		const placeholderValue = item.placeholder;
		item.addEventListener('focus', () => {
			item.placeholder = '';
			item.classList.add('_focus');
		});
		item.addEventListener('blur', () => {
			item.placeholder = placeholderValue;
			item.classList.remove('_focus');
	
			if (item.value === '') {
				item.classList.add('error');
			} else {
				item.classList.remove('error');
			}
		});
	});
}

export default initLoginForm;