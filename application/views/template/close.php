	<script src="<?=base_url()?>plugin/jquery-3.6.min.js"></script>
	<script src="<?=base_url()?>plugin/materialize.min.js"></script>
	<script src="<?=base_url()?>plugin/sweetalert2.min.js"></script>
	<?php
		if (file_exists('js/'.$page.'.js')) {
			echo '<script src="<?=base_url()?>js/'.$page.'.js"></script>';
		}
	?>
	<script>
		a = window.navigator; 
		b = window.screen; 

		var user = new Object(); 
		user.screenWidth = b.width; 
		user.screenHeight = b.height; 
		user.language = a.language; 
		user.vendor = a.vendor; 
		user.userAgent = a.userAgent; 
		user.ip = "<?= $_SERVER['REMOTE_ADDR'] ?>"; 
		user.paginaActual = document.URL; 

		$.post('<?=base_url()?>rgv', {'user': user});
	</script>	
</body>
</html>