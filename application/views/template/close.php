	<script src="<?=base_url()?>plugin/jquery-3.6.min.js"></script>
	<script src="<?=base_url()?>plugin/sweetalert2.min.js"></script>
	<!-- <script src="<?=base_url()?>js/estadisticas.php"></script> -->
	<script src="<?=base_url()?>js/general.js"></script>
	<script src="<?=base_url()?>js/onScroll.js"></script>
	<?php
		if (file_exists('js/'.$page.'.js')) {
			echo '<script src="'.base_url().'js/'.$page.'.js"></script>';
		}
	?>
</body>
</html>