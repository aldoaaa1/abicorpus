<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
	<title><?= $title ?></title>
	<meta name="description" content="<?= $description ?>">
	<meta name="keywords" content="<?= $keywords ?>">
	<link rel="icon" href="<?=base_url()?>img/favicon.svg">

	<link rel="stylesheet" type="text/css" href="<?=base_url()?>fonts/Roboto/roboto.css">
	<link rel="stylesheet" type="text/css" href="<?=base_url()?>fonts/BootstrapIcons/bootstrap-icons.css">
	<link rel="stylesheet" type="text/css" href="<?=base_url()?>fonts/MaterialIcons/Material_Icons.css">
	<!-- <link rel="stylesheet" type="text/css" href="<?=base_url()?>plugin/materialize.min.css"> -->
	<link rel="stylesheet" type="text/css" href="<?=base_url()?>plugin/sweetalert2.min.css">
	<link rel="stylesheet" href="<?=base_url()?>css/animate.min.css">
	<link rel="stylesheet" type="text/css" href="<?=base_url()?>css/general.css">
	<script>function base_url(){ return '<?=base_url()?>'; }</script>
	<?php
		if (file_exists('css/'.$page.'.css')) {
			echo '<link rel="stylesheet" type="text/css" href="'.base_url().'css/'.$page.'.css">';
		}
	?>
</head>
<body>
	<div id="loader">
		<div class="container">
			<p>Abi Corpus</p>
			<div class="box1"></div>
			<div class="box2"></div>
			<div class="box3"></div>
		</div>
	</div>
	<div id="phone_menu_open">
		<div id="phone_menu_closeBtn" onclick="closePhoneMenu();">
			<div class="line"></div>
			<div class="line"></div>
		</div>
		<a href="<?=base_url()?>">Home</a>
		<a href="<?=base_url()?>services">Services</a>
		<a href="<?=base_url()?>book_now">Book Now</a>
		<a href="<?=base_url()?>contact">Contact</a>
		<div class="line"></div>
		<div id="phone_menu_footer">
			<p>Tel: (81) 87613491</p>
			<p>WhastApp: (81) 10041116</p>
			<a href="https://www.instagram.com/abicorpushairstudio" target="_blank">IG: abicorpushairstudio</a>
			<a href="https://www.facebook.com/abicorpuss" target="_blank">FB: Abi Corpus Hair Studio</a>
		</div>
	</div>