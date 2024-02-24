function menuBurger(){
	const iconMenu = document.querySelector('.icon-menu');

	iconMenu.addEventListener('click', () => {
	if (iconMenu.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open');
		document.querySelector('body').classList.toggle('lock');
	}
	})

}
export default menuBurger;