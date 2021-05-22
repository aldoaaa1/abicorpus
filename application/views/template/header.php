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
	<div id="hair_art">
		<p><a href="">Agenda tu Visita!</a></p>
		<p>The hair is my art</p>
		<div>
			<a href="https://www.facebook.com/abicorpuss" target="_blank"><img src="<?=base_url()?>img/facebook.svg" alt=""></a>
			<a href="https://www.instagram.com/abicorpushairstudio" target="_blank"><img src="<?=base_url()?>img/instagram.svg" alt=""></a>
			<a href="https://wa.me/+528110041116?text=Quisiera%20mas%20informaci%C3%B3n%20porfavor.%20Me%20contanto%20a%20trav%C3%A9s%20de%20su%20P%C3%A1gina%20Web." target="_blank"><img src="<?=base_url()?>img/whatsapp.svg" alt=""></a>
		</div>
	</div>
	<div style="height: 65px;"></div>
	<header>
		<img onclick="goLogin();" id="logo_header" src="<?=base_url()?>img/AbiCompleto.svg" alt="Abi Corpus">
		<menu>
			<a href="<?=base_url()?>">Home</a>
			<a href="<?=base_url()?>services">Services</a>
			<a href="<?=base_url()?>book_now">Book Now</a>
			<a href="<?=base_url()?>contact">Contact</a>
		</menu>
		<div id="phone_menu_openBtn" onclick="openPhoneMenu();">
			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>
		</div>
	</header>