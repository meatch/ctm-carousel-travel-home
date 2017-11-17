/*
	@author: Mitch Gohman
	@date 11.16.2017
	Responsive Carousel Slider - Creating new stand alone slider app that can be used/modded elsewhere

	@TODO: use global breakpoints, currently no standardization of breakpoints
*/
$('document').ready(function() {
	function wf_carousel_mobile() {
		var carousel = $('.wf-carousel-mobile');
		let deck = carousel.find('.deck');
		let cards = carousel.find('.card');
		let controls = carousel.find('.controls');

		let rotate_deck_duration = 350; //how long it takes to complete a cycle in deck rotation

		let transSpeed = 1000;

        // Let user click link and destination without firing off the card transition.
		cards.find('a.button').on('click', function(e){
			e.stopPropagation();
		});

		/*-------------------------------------
		| Create circles based on sets
		-------------------------------------*/
		function generate_bullet_nav() {
			$('.controls .circles').html(' '); //empty defaults
			cards.each(function(i) {
				let humNum = i + 1;

				thisEl = (i === 0) ?
					$('<div class="circle card'+humNum+' current"><span>Card '+humNum+'</span></div>') :
					$('<div class="circle card'+humNum+'"><span>Card '+humNum+'</span></div>');
				thisEl.appendTo('.controls .circles');
			});

		}
		generate_bullet_nav();

		/*-------------------------------------
		| Rotate Deck
		| @intervals :: int = number of rotation cycles
		-------------------------------------*/
		function rotate_deck(intervals) {
			for (i=0; i < intervals; i++)
			{
				// create a immediately evoking fn closure to preserve the value of "i", pass i
				(function(i){
					window.setTimeout(function(){
						// console.log('Firing off ' + i);
						rotate_deck_once();
				  }, i * rotate_deck_duration); //have to multiply it out, cause this all happens at once.
				}(i));
			}
		}

		function rotate_deck_once() {
			/* The higher the number, the closer to the viewer, inverse of dom array -------------------------------*/
			var card1 = deck.find('.card:eq(0)');
			var card2 = deck.find('.card:eq(1)');
			var card3 = deck.find('.card:eq(2)');

			// animate off...
			card1.addClass('card-slide-off');

            // remove all card1, 2, and 3 classes
			cards.removeClass('card1 card2 card3'); //blanket removal
			// move the other cards forward in line
			card2.addClass('card1');
			card3.addClass('card2');

			// ...and then place in the back of the line
			setTimeout(function() {
				card1
					.removeClass('card-slide-off')
					.addClass('card3')
					.appendTo(deck);
			}, 300);


            // Update Bullet Nav Current Selection
			let bullInd = parseInt(card2.attr('data-item'));
			update_current_bullet(bullInd);

		}

		/*-------------------------------------
		| Update Bullet Nav Current Selection
		-------------------------------------*/
		function update_current_bullet(index){
			$('.controls .circles .circle').removeClass('current');
			$('.controls .circles .circle:eq('+index+')').addClass('current');
		}

		deck.on('click swipe', function(){ rotate_deck(1); });

		/*-------------------------------------
		| Assign behaviors to circles created above
		-------------------------------------*/
		let circles = $('.controls .circles .circle');
		circles.on('click', function(){
			let bullInd = circles.index(this);
			update_current_bullet(bullInd);

            // which card, and what's its current indexed position?
			let chosenCard = deck.find('.card[data-item="'+bullInd+'"]');
			let chosenCardInd = deck.find('.card').index(chosenCard);

			console.log(chosenCardInd);

			if (chosenCardInd > 0)
			{
				rotate_deck(chosenCardInd);
			}

		});

	}
	wf_carousel_mobile();
});