<html>
    <head>
        <title>Mitch's Card Carousel Mobile, Medium and Large</title>
        <link media="all" type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/styles.css">
    </head>
    <body>
        <div id="wrapper">
            <h1>Mitch's Card Carousel Mobile, Medium and Large</h1>

            <!-- Mobile -->
            <?php include('mobile.php'); ?>

            <!-- Medium Large -->
            <?php include('medium-large.php'); ?>

            <!-- Modal Window -->
            <!-- @FIX3 Move modal to the bottom of the page, outside of container -->
            <div id="special_offer_modal" class="modal fade wf-special-offer-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog"><span class="ada-hidden">A modal has opened. You may press escape on your keyboard to close at anytime</span>
                <div class="modal-content" id="special_offer_content">
                    <div class="modal-header">
                        <!--
                            @FIX4 Make it like original BS component
                            tabindex="0" not in original BS ELement.
                            added aria-label="Close"
                        -->
                        <button class="close" data-dismiss="modal" tabindex="0" type="button">
                        <!-- <img src="/img/closeLrg.png" alt="Close" class="pull-left"> -->
                        CLOSE
                        </button>
                        <h3></h3>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="text-center">
                                    <img src="" alt="">
                                </div>
                                <h2 class="short-desc"></h2>
                                <p class="wf-normal-para"></p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer wf-modal-footer">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="text-center">
                                    <p class="contact-text"></p>
                                    <div class="divider">or</div>
                                    <div class="col-xs-12">
                                        <div class="row">
                                            <div class="center-block">
                                                <a href="#" class="btn special-offers-cta" data-id="" data-product="">Send a request</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p class="wf-small-para"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span class="ada-hidden">You have reached the end of the modal.</span></div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
            <script defer src="assets/js/scripts.js"></script>
        </div>
    </body>
</html>