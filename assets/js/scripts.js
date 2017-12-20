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
    var container = $(".tcc-container.mediumLarge");

    var carousel = container.find(".tcc-carousel");
    var sets = carousel.find(".tcc-set");
    var cards = carousel.find(".tcc-card");

    var controls = container.find(".tcc-controls");

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
    $(window).resize(function(){
        distAnimate = carousel.width();
        // move them off stage if view has changed from medium to large or vice versa
        sets.not(':eq('+currSet+')').css({'left':distAnimate});
    });

    function slideToSet() {
        // console.log(['before',isSliding]);
        if (!isSliding)
        {
            isSliding = true;
            // console.log(['during',isSliding]);
            var setWidth = carousel.width();

            // manage selected bullets
            // var bullets = controls.find('.circles .circle');
            controls.find(".tcc-circles .tcc-circle").removeClass("theChosenOne"); //blanket removal
            controls.find(".tcc-circles .tcc-circle:eq("+nextSet+")").addClass("theChosenOne"); //blanket removal

            // animate the sets

            var theCurrSet = $(sets[currSet]);
            var theNextSlide = $(sets[nextSet]);

            var el1 = theNextSlide.animate({"left": 0}, transSpeed);
            var el2 = theCurrSet.animate({"left": (distAnimate * -1)}, transSpeed);

            $.when(el1,el2).done(function(){
                theCurrSet.css({"left": distAnimate});
                isSliding = false;
                currSet = nextSet;
                // console.log(['done',isSliding]);
            });
        }
    }

    /*-------------------------------------
	| Arrow Right
	-------------------------------------*/
    function moveRight() {
        if (!isSliding)
        {
            console.log([currSet, nextSet]);
            nextSet = currSet + 1;
            // handle carousel, roundtrip
            if (nextSet === numSets) { nextSet = 0; }

            slideToSet();
        }
    }

    controls.find(".tcc-right").on("click", moveRight);
    carousel.on("swiperight", function() {
        moveRight();
    });

    /*-------------------------------------
	| Arrow Left
	-------------------------------------*/
    function moveleft() {
        if (!isSliding)
        {
            nextSet = currSet - 1;
            // handle carousel, roundtrip
            if (nextSet < 0) { nextSet = (numSets-1); }

            slideToSet();
        }
    }
    controls.find(".tcc-left").on("click", moveleft);

    /*-------------------------------------
	| Bullet Click
	-------------------------------------*/
    controls.find(".tcc-circles .tcc-circle").on("click", function(){
        if (!isSliding)
        {
            nextSet = controls.find(".tcc-circles .tcc-circle").index(this);
            slideToSet();
        }
    });

    /*-------------------------------------
    | Kill modal propagation and close
    | @FIX1: this may help stop it from propogating up, and triggering something else in our layout
    -------------------------------------*/
    $('#special_offer_modal').on('click', 'button.close', function(e){
        console.log('modal');
        e.preventDefault();
        e.stopPropagation();
        $('#special_offer_modal').modal('hide');
    });
}
cards_carousel_mediumLarge();

/*---------------------------
| Mobile Carousel
---------------------------*/
function cards_carousel_mobile() {
    var container = $(".tcc-container.mobile");
    var carousel = container.find(".tcc-carousel");
    var cards = container.find(".tcc-card");
    var controls = container.find(".tcc-controls");

    var rotate_deck_duration = 350; //how long it takes to complete a cycle in carousel rotation

    var transSpeed = 1000;

    /*---------------------------
	| Trigger Carsousel
	---------------------------*/
    carousel.on("click", function(e){
        if (!$(e.target).hasClass("button"))
        {
            rotate_deck(1);
        }
    });

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
        var card1 = carousel.find(".tcc-card1");
        var card2 = carousel.find(".tcc-card2");
        var card3 = carousel.find(".tcc-card3");

        // animate off...
        card1.addClass("card-slide-off");

        // remove all card1, 2, and 3 classes
        cards.removeClass("tcc-card1 tcc-card2 tcc-card3"); //blanket removal
        // move the other cards forward in line
        card2.addClass("tcc-card1");
        card3.addClass("tcc-card2");

        // ...and then place in the back of the line
        setTimeout(function() {
            card1
                .removeClass("card-slide-off")
                .addClass("tcc-card3")
                .appendTo(carousel);
        }, 300);


        // Update Bulvar Nav Current Selection
        var bullInd = parseInt(card2.attr("data-item"));
        update_current_bullet(bullInd);
    }

    /*-------------------------------------
	| Update Bullet Nav Current Selection
	-------------------------------------*/
    function update_current_bullet(index){
        controls.find(".tcc-circles .tcc-circle").removeClass("theChosenOne");
        controls.find(".tcc-circles .tcc-circle:eq("+index+")").addClass("theChosenOne");
    }

    /*-------------------------------------
	| Assign behaviors to circles created above
	-------------------------------------*/
    var circles = controls.find(".tcc-circles .tcc-circle");
    circles.on("click", function(){
        var bullInd = circles.index(this);
        update_current_bullet(bullInd);

        // which card, and what's its current indexed position?
        var chosenCard = carousel.find(".tcc-card[data-item=\""+bullInd+"\"]");
        var chosenCardInd = carousel.find(".tcc-card").index(chosenCard);

        if (chosenCardInd > 0)
        {
            rotate_deck(chosenCardInd);
        }
    });

}
cards_carousel_mobile();
