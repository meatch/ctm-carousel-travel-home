<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>WF Carousel</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="./vendor/bootstrap/bootstrap.min.css">
		<link rel="stylesheet" href="./Mobile/css/styles.css">
		<link rel="stylesheet" href="./Medium-Large/css/styles.css">
		<style>
			body { background-color: #333;  margin: 25px; }
			.wrapper {
				width: 768px;
				margin: auto;
				padding: 25px;
				background-color: #eee;

				overflow: hidden;
			}
			@media only screen and (min-width : 768px) {
				.wrapper { width: 768px; }
			}
			@media only screen and (min-width : 1024px) {
				.wrapper { width: 1068px; }
			}
		</style>
    </head>
    <body>
        <div class="wrapper">

			<h1>Mobile</h1>
			<div id="mobile">
				<?php include('./Mobile/app.php'); ?>
			</div>

			<h1>Medium to Large</h1>
			<div id="medLarge">
	            <?php include('./Medium-Large/app.php'); ?>
			</div>

        </div>

        <script src="./vendor/jquery/jquery-1.12.4.min.js"></script>
        <script src="./vendor/bootstrap/bootstrap.min.js"></script>
		<script src="./Mobile/js/scripts.js"></script>
		<script src="./Medium-Large/js/scripts.js"></script>
    </body>
</html>