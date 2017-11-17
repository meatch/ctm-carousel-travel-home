/*
	@author: Mitch Gohman
	@date 11.16.2017
	Responsive Carousel Slider - Creating new stand alone slider app that can be used/modded elsewhere

	@TODO: use global breakpoints, currently no standardization of breakpoints
*/
$('document').ready(function() {
	function wf_carousel_mobile() {
		console.log('mobile test');

		var carousel = $('.wf-carousel-mobile');
		let deck = carousel.find('.deck');
		let cards = carousel.find('.card');
		let controls = carousel.find('.controls');

		let transSpeed = 1000;


		carousel.on('click', function(){
			var card1 = carousel.find('.card1');
			var card2 = carousel.find('.card2');
			var card3 = carousel.find('.card3');


			card2.removeClass('card2').addClass('card1');
			card3.removeClass('card3').addClass('card2');
			card1
				.removeClass('card1')
				.addClass('card-slide-off');

			setTimeout(function() {
				card1
					.removeClass('card-slide-off')
					.addClass('card3');
			}, 300);
		});

	}
	wf_carousel_mobile();
});










