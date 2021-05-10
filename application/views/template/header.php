<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
	<title><?= $title ?></title>
	<meta name="description" content="<?= $description ?>">
	<meta name="keywords" content="<?= $keywords ?>">
	<link rel="icon" href="img/favicon.svg">

	<link rel="stylesheet" type="text/css" href="<?=base_url()?>fonts/Roboto/roboto.css">
	<link rel="stylesheet" type="text/css" href="<?=base_url()?>fonts/BootstrapIcons/bootstrap-icons.css">
	<link rel="stylesheet" type="text/css" href="<?=base_url()?>fonts/MaterialIcons/Material_Icons.css">
	<!-- <link rel="stylesheet" type="text/css" href="<?=base_url()?>plugin/materialize.min.css"> -->
	<link rel="stylesheet" type="text/css" href="<?=base_url()?>plugin/sweetalert2.min.css">
	<link rel="stylesheet" type="text/css" href="<?=base_url()?>css/general.css">
	<?php
		if (file_exists('css/'.$page.'.css')) {
			echo '<link rel="stylesheet" type="text/css" href="'.base_url().'css/'.$page.'.css">';
		}
	?>
</head>
<body>