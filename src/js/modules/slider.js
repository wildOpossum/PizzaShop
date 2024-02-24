function slider (){
	console.log('тест');	
	
	if (document.querySelector('.main-slider')) {
		new Swiper ('.main-slider',{
			speed:3000,
			effect: 'fade',
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.bullets__items',
				type: 'bullets',
				clickable: true,
			},
		})
	}
}
export default slider;