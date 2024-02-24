function moveUp(){
	const up = document.querySelector('.footer-top__up');
	up.addEventListener('click', (event) => {
		const targetElem = event.target;
		if(targetElem.closest('.footer-top__up')){
			window.scrollTo({
				top:0,
				behavior: 'smooth',
			});
			event.preventDefault();
		}
	})

}
export default moveUp;