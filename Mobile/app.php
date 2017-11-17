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
$cards = [
	['url' => 'https://apple.com/', 'img' => './Medium-Large/img/cards/wdw_finding_nemo.jpg', 'h1' => 'Set 1 Ready, Set, Sale!', 'h2' => 'on vacation packages and tours'],
	['url' => 'https://apple.com/', 'img' => './Medium-Large/img/cards/disneyland_family.jpg', 'h1' => 'Set 1 Alaska Cruisetours', 'h2' => 'with free air!'],
	['url' => 'https://apple.com/', 'img' => './Medium-Large/img/cards/wdw_toy_story.jpg', 'h1' => 'Set 1 Free At Sea - Five FREE Offers', 'h2' => '2018 early booking discount'],
];

?>


<div class="wf-carousel-mobile">
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
        <div class="sets">
            <div class="set set1 current"><span class="circle">Set 1 of 3</span></div>
            <div class="set set2"><span class="circle">Set 2 of 3</span></div>
            <div class="set set3"><span class="circle">Set 3 of 3</span></div>
        </div>
    </div>
</div>
