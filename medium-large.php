<!-- Notepad and Desktop -->
<div id="wfthCarouselMediumLarge" class="wfthCarousel">
    <div class="tcc-container mediumLarge">
        <div class="tcc-carousel">
            <?php $set = 1; ?>
            <div class="tcc-set tcc-set<?php echo $set; ?>">
                <?php for($i=1; $i < 10; $i++) : $humNum = $i+1; ?>
                <div class="tcc-card tcc-card<?php echo $i; ?>">
                    <div class="tcc-content">
                        <div class="tcc-image" style="border: 1px solid grey"></div>
                        <h1>Slide <?php echo $i; ?></h1>
                        <h2></h2>
                        <!-- @FIX2: Remove wf-teal-secondary-cta class and manually build styles - this could be impacted? -->
                        <button
                            type="button"
                            class="button wf-teal-secondary-cta"
                            data-toggle="modal"
                            data-target="#special_offer_modal">
                                View offer
                        </button>
                    </div>
                </div>
                    <?php if ($i !== 9 && $i % 3 == 0) : $set++; ?>
            </div>
            <div class="tcc-set tcc-set<?php echo $set; ?>">
                    <?php endif; ?>
                <?php endfor; ?>
            </div>
        </div>
        <!-- Path to Large Arrow Sprite :: /img/carets/pagination_sliderArrowsLrg.png -->
        <div class="tcc-controls">
            <div class="tcc-left">
                <span class="sr-only">Go to previous set</span>
            </div>
            <div class="tcc-circles">
                <div class="tcc-circle tcc-set1 theChosenOne"><span class="sr-only">Set 1 of 3</span></div>
                <div class="tcc-circle tcc-set2"><span class="sr-only">Set 2 of 3</span></div>
                <div class="tcc-circle tcc-set3"><span class="sr-only">Set 3 of 3</span></div>
            </div>
            <div class="tcc-right">
                <span class="sr-only">Go to next set</span>
            </div>
            <a class="tcc-see-all" href="/travel-offers">See all offers</a>
        </div>
    </div>
</div>