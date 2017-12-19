/*
	@author: Mitch Gohman
	@date Tue 19 Dec 2017 02:44:09 PM PST
*/
/*---------------------------
| Medium and Large Carousel
---------------------------*/
function cards_carousel_mediumLarge() {

    /*---------------------------
	| Initialize Some Stuff
	---------------------------*/
    var carousel = $(".cards-carousel.mediumLarge");
    var sets = carousel.find(".set");
    var cards = carousel.find(".card");
    var controls = carousel.find(".the-controls");
    var distAnimate = carousel.width();
    var transSpeed = 750;
    var numSets = 3; //tells how many sets to cycle through
    var currSet = 0; //starts at zeroeth set
    var nextSet = 1; //next set is based on arrows and bullets
    var isSliding = false;

    /*-------------------------------------
	||
	|| Navigating
	||
	-------------------------------------*/

    function slideToSet() {
        if (!isSliding)
        {
            isSliding = true;
            var setWidth = carousel.width();

            // manage selected bullets
            // var bullets = controls.find('.circles .circle');
            controls.find(".circles .circle").removeClass("current"); //blanket removal
            controls.find(".circles .circle:eq("+nextSet+")").addClass("current"); //blanket removal

            // animate the sets

            var theCurrSet = $(sets[currSet]);
            var theNextSlide = $(sets[nextSet]);

            theNextSlide.animate({"left": 0}, transSpeed);
            theCurrSet.animate({"left": (distAnimate * -1)}, transSpeed, function(){
                theCurrSet.css({"left": distAnimate});
                isSliding = false;
                currSet = nextSet;
            });
        }
    }

    /*-------------------------------------
	| Arrow Right
	-------------------------------------*/
    function moveRight() {
        console.log([currSet, nextSet]);
        nextSet = currSet + 1;
        // handle carousel, roundtrip
        if (nextSet === numSets) { nextSet = 0; }

        slideToSet();
    }

    controls.find(".right").on("click", moveRight);
    carousel.on("swiperight", function() {
        moveRight();
    });

    /*-------------------------------------
	| Arrow Left
	-------------------------------------*/
    function moveleft() {
        nextSet = currSet - 1;
        // handle carousel, roundtrip
        if (nextSet < 0) { nextSet = (numSets-1); }

        slideToSet();
    }
    controls.find(".left").on("click", moveleft);

    /*-------------------------------------
	| Bullet Click
	-------------------------------------*/
    controls.find(".circles .circle").on("click", function(){
        nextSet = controls.find(".circles .circle").index(this);
        slideToSet();
    });

    /*---------------------------
    | Kill defaults for all links.
    ---------------------------*/
    cards.on('click', 'button', function(e){
        console.log('ouchy');
        e.preventDefault();
        // e.stopPropagation();
    });

}
cards_carousel_mediumLarge();

/*---------------------------
| Mobile Carousel
---------------------------*/
function cards_carousel_mobile() {
    var carousel = $(".cards-carousel.mobile");
    var deck = carousel.find(".deck");
    var cards = carousel.find(".card");
    var controls = carousel.find(".the-controls");

    var rotate_deck_duration = 350; //how long it takes to complete a cycle in deck rotation

    var transSpeed = 1000;


    /*---------------------------
	| Trigger Carsousel
	---------------------------*/
    deck.on("click", function(e){
        if (!$(e.target).hasClass("button"))
        {
            rotate_deck(1);
        }
    });

    /*-------------------------------------
	| Create circles based on sets
	-------------------------------------*/
    function generate_bullet_nav() {
        var circlesContainer = controls.find(".circles");

        circlesContainer.html(" "); //empty defaults
        cards.each(function(i) {
            var humNum = i + 1;

            var thisEl = (i === 0) ?
                $("<div class=\"circle card"+humNum+" current\"><span>Card "+humNum+"</span></div>") :
                $("<div class=\"circle card"+humNum+"\"><span>Card "+humNum+"</span></div>");
            thisEl.appendTo(circlesContainer);
        });

    }
    generate_bullet_nav();

    /*-------------------------------------
	| Rotate Deck
	| @intervals :: int = number of rotation cycles
	-------------------------------------*/
    function rotate_deck(intervals) {
        for (var i=0; i < intervals; i++)
        {
            // create a immediately evoking fn closure to preserve the value of "i", pass i
            (function(i){
                window.setTimeout(function(){
                    rotate_deck_once();
				  }, i * rotate_deck_duration); //have to multiply it out, cause this all happens at once.
            }(i));
        }
    }

    function rotate_deck_once() {
        /* The higher the number, the closer to the viewer, inverse of dom array -------------------------------*/
        var card1 = deck.find(".card:eq(0)");
        var card2 = deck.find(".card:eq(1)");
        var card3 = deck.find(".card:eq(2)");

        // animate off...
        card1.addClass("card-slide-off");

        // remove all card1, 2, and 3 classes
        cards.removeClass("card1 card2 card3"); //blanket removal
        // move the other cards forward in line
        card2.addClass("card1");
        card3.addClass("card2");

        // ...and then place in the back of the line
        setTimeout(function() {
            card1
                .removeClass("card-slide-off")
                .addClass("card3")
                .appendTo(deck);
        }, 300);


        // Update Bulvar Nav Current Selection
        var bullInd = parseInt(card2.attr("data-item"));
        update_current_bullet(bullInd);
    }

    /*-------------------------------------
	| Update Bullet Nav Current Selection
	-------------------------------------*/
    function update_current_bullet(index){
        controls.find(".circles .circle").removeClass("current");
        controls.find(".circles .circle:eq("+index+")").addClass("current");
    }



    /*-------------------------------------
	| Assign behaviors to circles created above
	-------------------------------------*/
    var circles = controls.find(".circles .circle");
    circles.on("click", function(){
        var bullInd = circles.index(this);
        update_current_bullet(bullInd);

        // which card, and what's its current indexed position?
        var chosenCard = deck.find(".card[data-item=\""+bullInd+"\"]");
        var chosenCardInd = deck.find(".card").index(chosenCard);

        if (chosenCardInd > 0)
        {
            rotate_deck(chosenCardInd);
        }
    });

}
cards_carousel_mobile();
