<?php
/*
	@author: Mitch Gohman
	@date Tue 07 Nov 2017 08:40:39 AM PST
	Carousel Slider - Creating new stand alone slider app that can be used/modded elsewhere

	@TODO: use global breakpoints, currently all over the map
*/
/*---------------------------
| FPO - to be fed by backend controller?
---------------------------*/
// $cards = [
// 	['url' => 'https://apple.com/', 'img' => 'https://resources.loyaltytravelrewards.com/images/experiences/wells_fargo/products/wdw_finding_nemo.jpg', 'h1' => 'Set 1 Ready, Set, Sale!', 'h2' => 'on vacation packages and tours'],
// 	['url' => 'https://apple.com/', 'img' => 'https://resources.loyaltytravelrewards.com/images/experiences/wells_fargo/products/disneyland_family.jpg', 'h1' => 'Set 1 Alaska Cruisetours', 'h2' => 'with free air!'],
// 	['url' => 'https://apple.com/', 'img' => 'https://resources.loyaltytravelrewards.com/images/experiences/wells_fargo/products/wdw_toy_story.jpg', 'h1' => 'Set 1 Free At Sea - Five FREE Offers', 'h2' => '2018 early booking discount'],
//
// 	['url' => 'https://apple.com/', 'img' => 'https://resources.loyaltytravelrewards.com/images/experiences/wells_fargo/products/wdw_toy_story.jpg', 'h1' => 'Set 2 Ready, Set, Dive!', 'h2' => 'on vacation packages and tours'],
// 	['url' => 'https://apple.com/', 'img' => 'https://resources.loyaltytravelrewards.com/images/experiences/wells_fargo/products/wdw_finding_nemo.jpg', 'h1' => 'Set 2 Hawaii Cruisetours', 'h2' => 'with free air!'],
// 	['url' => 'https://apple.com/', 'img' => 'https://resources.loyaltytravelrewards.com/images/experiences/wells_fargo/products/disneyland_family.jpg', 'h1' => 'Set 2 Free At Air - Five FREE Offers', 'h2' => '2018 early booking discount'],
//
// 	['url' => 'https://apple.com/', 'img' => 'https://resources.loyaltytravelrewards.com/images/experiences/wells_fargo/products/disneyland_family.jpg', 'h1' => 'Set 3 Ready, Set, Fly!', 'h2' => 'on vacation packages and tours'],
// 	['url' => 'https://apple.com/', 'img' => 'https://resources.loyaltytravelrewards.com/images/experiences/wells_fargo/products/wdw_toy_story.jpg', 'h1' => 'Set 3 Florida Cruisetours', 'h2' => 'with free air!'],
// 	['url' => 'https://apple.com/', 'img' => 'https://resources.loyaltytravelrewards.com/images/experiences/wells_fargo/products/wdw_finding_nemo.jpg', 'h1' => 'Set 3 Free At Land - Five FREE Offers', 'h2' => '2018 early booking discount'],
// ];

$cards = [
	['url' => 'https://apple.com/', 'img' => './Medium-Large/img/cards/wdw_finding_nemo.jpg', 'h1' => 'Set 1 Ready, Set, Sale!', 'h2' => 'on vacation packages and tours'],
	['url' => 'https://apple.com/', 'img' => './Medium-Large/img/cards/disneyland_family.jpg', 'h1' => 'Set 1 Alaska Cruisetours', 'h2' => 'with free air!'],
	['url' => 'https://apple.com/', 'img' => './Medium-Large/img/cards/wdw_toy_story.jpg', 'h1' => 'Set 1 Free At Sea - Five FREE Offers', 'h2' => '2018 early booking discount'],

	['url' => 'https://apple.com/', 'img' => './Medium-Large/img/cards/wdw_toy_story.jpg', 'h1' => 'Set 2 Ready, Set, Dive!', 'h2' => 'on vacation packages and tours'],
	['url' => 'https://apple.com/', 'img' => './Medium-Large/img/cards/wdw_finding_nemo.jpg', 'h1' => 'Set 2 Hawaii Cruisetours', 'h2' => 'with free air!'],
	['url' => 'https://apple.com/', 'img' => './Medium-Large/img/cards/disneyland_family.jpg', 'h1' => 'Set 2 Free At Air - Five FREE Offers', 'h2' => '2018 early booking discount'],

	['url' => 'https://apple.com/', 'img' => './Medium-Large/img/cards/disneyland_family.jpg', 'h1' => 'Set 3 Ready, Set, Fly!', 'h2' => 'on vacation packages and tours'],
	['url' => 'https://apple.com/', 'img' => './Medium-Large/img/cards/wdw_toy_story.jpg', 'h1' => 'Set 3 Florida Cruisetours', 'h2' => 'with free air!'],
	['url' => 'https://apple.com/', 'img' => './Medium-Large/img/cards/wdw_finding_nemo.jpg', 'h1' => 'Set 3 Free At Land - Five FREE Offers', 'h2' => '2018 early booking discount'],
];

?>

<!-- <div class="container wf-special-offer-learnmore-carousel-container"> -->
<div class="wf-special-offer-learnmore-carousel-container">

	<div class="wf-carousel wf-carousel-set-3">
	    <div class="deck">
	        <?php foreach($cards as $i => $card) : ?>
	        <div class="card card<?php echo $i + 1; ?>">
	        	<div class="content">
		            <div class="image" style="background-image:url(<?php echo $card['img']; ?>);"></div>
		            <h1><?php echo $card['h1']; ?></h1>
		            <h2><?php echo $card['h2']; ?></h2>
		            <a class="button" href="<?php echo $card['url']; ?>">View offer</a>
	            </div>
	        </div>
	        <?php endforeach; ?>
	    </div>

	    <!-- Path to Large Arrow Sprite :: /img/carets/pagination_sliderArrowsLrg.png -->
	    <div class="controls">
	        <div class="left pagination_sliderArrowsLrg">
	            Go to previous set
	        </div>
	        <div class="sets">
	            <div class="set set1 current"><span class="circle">Set 1 of 3</span></div>
	            <div class="set set2"><span class="circle">Set 2 of 3</span></div>
	            <div class="set set3"><span class="circle">Set 3 of 3</span></div>
	        </div>
	        <div class="right pagination_sliderArrowsLrg">
	            Go to next set
	        </div>
	    </div>
	</div>
</div>