/*
	@author: Mitch Gohman
	@date Tue 07 Nov 2017 08:40:39 AM PST
	Responsive Carousel Slider - Creating new stand alone slider app that can be used/modded elsewhere

	@TODO: use global breakpoints, currently no standardization of breakpoints
*/
$('document').ready(function() {
	function wf_carousel() {

		/*---------------------------
		| Grab Assets
		---------------------------*/
		let carousel = $('.wf-carousel');
		let deck = $('.wf-carousel .deck');
		let cards = $('.wf-carousel .card');
		let controls = $('.wf-carousel .controls');
		let numSets; //tells how many sets to cycle through
		let transSpeed = 1000;

		/*---------------------------
		| Cards per set
		---------------------------*/
		let cardsPerSet = 1; //default
		if (carousel.hasClass('wf-carousel-set-2'))
		{
			cardsPerSet = 2;
		}
		else if (carousel.hasClass('wf-carousel-set-3'))
		{
			cardsPerSet = 3;
		}
		else if (carousel.hasClass('wf-carousel-set-4'))
		{
			cardsPerSet = 4;
		}
		else if (carousel.hasClass('wf-carousel-set-5'))
		{
			cardsPerSet = 4;
		}


		/*---------------------------
		| Set deck width to accomdate number of cards and sets per view
		| Could adjust on window resize for example.
		---------------------------*/
		function set_deckCard_width() {
			let carousel_width = carousel.width();

			// sometimes number of cadrs per sets generate additional sets - not even division.
			let cardCount = cards.length;
			numSets = Math.ceil(cardCount / cardsPerSet);
			let deckWidth = carousel_width * numSets;
			let cardWidth = deckWidth/numSets/cardsPerSet;

			// Update dims
			deck.css({'width': deckWidth});
			cards.css({'width': cardWidth});

		}
		set_deckCard_width();
		$(window).resize(set_deckCard_width);


		/*-------------------------------------
		| Flag first and last of each set for styling
		-------------------------------------*/
		// function flag_first_last_of_set() {
		// 	let cardsPerSet = (cards.length / numSets);
		//
		// 	cards.each(function(index){
		// 		// first
		// 		if (index % cardsPerSet == 0)
		// 		{
		// 			$(this).addClass('first-of-set');
		// 		}
		// 		// last
		// 		if (index % cardsPerSet == (cardsPerSet-1))
		// 		{
		// 			$(this).addClass('last-of-set');
		// 		}
		// 	});
		// }
		// flag_first_last_of_set();




		/*-------------------------------------
		| Create bullets based on sets
		-------------------------------------*/
		function generate_bullet_nav() {
			$('.controls .sets').html(' ');
			for(i=0; i < numSets; i++)
			{
				var thisEl;
				thisEl = (i === 0) ?
					$('<div class="set set1 current"><span class="circle">Set ' + i + ' of ' + numSets + '</span></div>') :
					$('<div class="set set1"><span class="circle">Set ' + i + ' of ' + numSets + '</span></div>');
				thisEl.appendTo('.controls .sets');
			}

		}
		generate_bullet_nav();

		/*-------------------------------------
		||
		|| Navigating
		||
		-------------------------------------*/
		let currSet = 0;

		function slideToSet() {
			// Splitting in half is Working, but does not make sense why I am splitting this in half.
			// Math is right, I am wrong
			let setWidth = carousel.width();
			let distAnimate = (setWidth * currSet) * -1; //reverse

			// manage selected bullets
			let bullets = controls.find('.sets .set');
			controls.find('.sets .set').removeClass('current'); //blanket removal
			controls.find('.sets .set:eq('+currSet+')').addClass('current'); //blanket removal

			deck.stop(true).animate({'left': distAnimate}, transSpeed);
		}

		/*-------------------------------------
		| Arrow Right
		-------------------------------------*/
		function moveRight() {
			currSet++;
			// handle carousel, roundtrip
			if (currSet === numSets) { currSet = 0; }

			slideToSet();
		}

		controls.find('.right').on('click', moveRight);
		carousel.on('swiperight', function() {
			moveRight();
			console.log('Swiping Right');
		});

		/*-------------------------------------
		| Arrow Left
		-------------------------------------*/
		function moveleft() {
			currSet--;
			// handle carousel, roundtrip
			if (currSet < 0) { currSet = (numSets-1); }

			slideToSet();
		}
		controls.find('.left').on('click', moveleft);
		carousel.on('swipeleft', function() {
			moveleft();
			console.log('Swiping Left');
		});

		/*-------------------------------------
		| Bullet Click
		-------------------------------------*/
		controls.find('.sets .set').on('click', function(){
			currSet = controls.find('.sets .set').index(this);
			slideToSet();
		});

	}
	wf_carousel();
});










