

<img id="header_img" src="<?=base_url()?>img/foto1.jpg" alt="Header Hair">
<div id="submenu">
	<a href="<?=base_url()?>contact">
		<img src="<?=base_url()?>img/mensajes.svg" alt="Icono Mensajes">
		<span>Contáctanos</span>
	</a>
	<a href="<?=base_url()?>contact">
		<img src="<?=base_url()?>img/foco.svg" alt="Icono Mensajes">
		<span>Compártenos tu idea</span>
	</a>
	<a href="<?=base_url()?>book_now">
		<img src="<?=base_url()?>img/calendario.svg" alt="Icono Mensajes">
		<span>Agenda tu Cita!</span>
	</a>
</div>
<section id="servicios">
	<a href="<?=base_url()?>services" class="onScroll" data-type="show" data-speed="2s" data-height="0.10" data-delay="5">
		<div></div>
		<img src="<?=base_url()?>img/foto2.jpg" alt="Diseño de Color">
		<span>Diseños de Color</span>
	</a>
	<a href="<?=base_url()?>services" class="onScroll" data-type="show" data-speed="2s" data-height="0.10" data-delay="50">
		<div></div>
		<img src="<?=base_url()?>img/foto3.jpg" alt="Cortes">
		<span>Cortes</span>
	</a>
	<a href="<?=base_url()?>services" class="onScroll" data-type="show" data-speed="2s" data-height="0.10" data-delay="100">
		<div></div>
		<img src="<?=base_url()?>img/foto4.jpg" alt="Tratamietos">
		<span>Tratamientos</span>
	</a>
</section>
<section id="agenda_ahora">
	<div class="onScroll" data-type="show" data-speed="0.5s" data-height="0.1">
		<div id="contenedor1">
			<h3 class="onScroll" data-type="show" data-speed="1s" data-height="0.1">Vive nuestros servicios!</h3>
			<p class="onScroll" data-type="up" data-speed="0.5s" data-height="0.1">¡Tenemos la experiencia y el conocimiento suficientes para crear la mejor versión de ti através de una increible presentación estética! ¡No lo dudes más!</p>
			<a class="onScroll" data-type="up" data-speed="1.5s" data-height="0.1" href="<?=base_url()?>book_now">Agenda Ahora!</a>
		</div>
	</div>
	<img class="onScroll" data-type="right" data-speed="1s" data-height="0.1" src="<?=base_url()?>img/foto5.jpg" alt="Agenda Ahora!">
</section>
<section id="redes">
	<a class="onScroll" data-type="up" data-speed="0.5s" data-height="0.2" data-delay="5" href="https://www.facebook.com/abicorpuss" target="_blank"><img src="<?=base_url()?>img/facebook.svg" alt=""></a>
	<a class="onScroll" data-type="up" data-speed="0.5s" data-height="0.2" data-delay="50" href="https://www.instagram.com/abicorpushairstudio" target="_blank"><img src="<?=base_url()?>img/instagram.svg" alt=""></a>
	<a class="onScroll" data-type="up" data-speed="0.5s" data-height="0.2" data-delay="100" href="https://wa.me/+528110041116?text=Quisiera%20mas%20informaci%C3%B3n%20porfavor.%20Me%20contanto%20a%20trav%C3%A9s%20de%20su%20P%C3%A1gina%20Web." target="_blank"><img src="<?=base_url()?>img/whatsapp.svg" alt=""></a>
</section>
<section id="ubicacion">
	<div class="onScroll" data-type="show" data-speed="2s" data-height="0.2"v>
		<h3>Dirección</h3>
	</div>
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.3575181219708!2d-100.25840978452904!3d25.6594407190869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c13786b1e12b%3A0x6bc82b992c2ded8f!2sAbi%20Corpus%20Hair%20Studio!5e0!3m2!1ses!2smx!4v1620759471546!5m2!1ses!2smx" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</section>
<footer class="onScroll" data-type="show" data-speed="2s" data-height="0.1">
	<div>
		<img src="<?=base_url()?>img/AbiBlanco.svg" alt="Abi Corpus">
	</div>
	<div>
		<h3>Visítanos</h3>
		<p>José Peón Contreras #2125A<br>Col. Contry Sol Guadalupe N.L.</p>
	</div>
	<div>
		<h3>Horario</h3>
		<p>Lunes a Viernes 10:00am - 7:00pm<br>Sábado 10:00am - 2:00pm</p>
	</div>
</footer>

<link rel="stylesheet" href="https://aldoalcala.com/code/chatbox.css">
<div id="chatbox">
	<div class="chatbox-asesor" data-img="<?=base_url()?>img/user.jpg" data-nombre="User" data-puesto="Técnica de Color" data-correo="aldo.aaa1@gmail.com"></div>
	<div class="chatbox-question" data-question="¡Hola! ¿Que servicio te llama la atención?"></div>
	<div class="chatbox-question" data-question="¿En que correo o teléfono podría contactarte?"></div>
	<div class="chatbox-question" data-question="¿Con quién tengo el gusto de conversar?"></div>
	<div class="chatbox-customColors" data-body="#f0efef" data-chatboxmsg="#FFF0F0" data-clientmsg="#fce8f9" data-iconhover="#FFF0F0"></div>
	<div class="chatbox-comportamiento" data-delay_autoshow_ms="18000" data-close_message="¡Muchas gracias por tu tiempo! Me contactaré contigo personalemte lo mas pronto posible. También estoy para servirte en el correo: aldo.aaa1@gmail.com"></div>
</div>
<script src="<?=base_url()?>js/chatbox.js"></script>


<?php 
	// $general = $this->db->query("SELECT * FROM general");

	// echo('<br><br><br>');
	// foreach ($general->result() as $row){
 //        echo $row->description; echo ": ";
 //        echo $row->value;	echo "<br>";
	// }
	// echo('<br><br><br>');
	// print_r($general->row(0));
?>