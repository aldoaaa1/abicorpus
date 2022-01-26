<?php 
	$general = $this->db->query("SELECT * FROM general");
	$agenda = $this->db->query("SELECT * FROM agenda");
	$hora_apertura = $general->row(0)->value; $hora_cierre = $general->row(1)->value;
	date_default_timezone_set("America/Monterrey"); $hoy = date("Y-m-d"); $luego = date("Y-m-d",strtotime($hoy."+ 30 days"));;
?>
<video autoplay loop muted>
	<source src="<?=base_url()?>img/cabello1.mp4" type="video/mp4">
</video>
<menu>
	<a href="<?=base_url()?>">Home</a>
	<a href="<?=base_url()?>services">Services</a>
	<a href="<?=base_url()?>book_now">Book Now</a>
	<a href="<?=base_url()?>contact">Contact</a>
	<div id="phone_menu" onclick="openPhoneMenu();">
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
	</div>
</menu>
<div id="contenedor">
	<section id="book">
		<svg viewbox="0 0 41 34" width="300" xmlns="http://www.w3.org/2000/svg">
		  <defs>
		    <style>
		      .cls-1{fill:#fff;}
		    </style>
		  </defs>
		  <title>
		    book_now
		  </title>
		  <g data-name="Capa 2" id="Capa_2">
		    <g data-name="Capa 1" id="Capa_1-2">
		      <path class="cls-1" d="M6.86,6.56a2.05,2.05,0,0,1-.71,1.58,2.34,2.34,0,0,1-.76.46,2.51,2.51,0,0,1-.92.16h-4V.24h4.1a1.67,1.67,0,0,1,.81.19A2.12,2.12,0,0,1,6,.93a2.18,2.18,0,0,1,.39.7,2.38,2.38,0,0,1,.14.78,2.19,2.19,0,0,1-.33,1.18,1.9,1.9,0,0,1-.9.8,2.11,2.11,0,0,1,1.16.81A2.21,2.21,0,0,1,6.86,6.56ZM1.29,1V4.12H4.22A1.27,1.27,0,0,0,4.8,4a1.41,1.41,0,0,0,.46-.34,1.59,1.59,0,0,0,.3-.5,1.73,1.73,0,0,0,.11-.6,1.77,1.77,0,0,0-.1-.61,1.64,1.64,0,0,0-.29-.5,1.31,1.31,0,0,0-.44-.33A1.14,1.14,0,0,0,4.29,1ZM6,6.42a1.83,1.83,0,0,0-.11-.61A1.49,1.49,0,0,0,5.6,5.3a1.47,1.47,0,0,0-.46-.36,1.31,1.31,0,0,0-.59-.14H1.29V8H4.47a1.55,1.55,0,0,0,.61-.13A1.68,1.68,0,0,0,5.9,7,1.62,1.62,0,0,0,6,6.42Z">
		      </path>
		      <path class="cls-1" d="M15.17,8.88a3,3,0,0,1-1.24-.26,2.88,2.88,0,0,1-1-.7,3.13,3.13,0,0,1-.64-1,3.25,3.25,0,0,1-.23-1.24,3.51,3.51,0,0,1,.23-1.25,3.21,3.21,0,0,1,1.63-1.74,3,3,0,0,1,1.23-.26,3,3,0,0,1,1.25.26A3.21,3.21,0,0,1,18.05,4.4a3.51,3.51,0,0,1,.23,1.25,3.25,3.25,0,0,1-.23,1.24,3.13,3.13,0,0,1-.64,1,2.88,2.88,0,0,1-1,.7A3.05,3.05,0,0,1,15.17,8.88ZM12.91,5.66a2.65,2.65,0,0,0,.66,1.77,2.35,2.35,0,0,0,.72.54,2.11,2.11,0,0,0,1.77,0,2.35,2.35,0,0,0,.72-.54,2.5,2.5,0,0,0,.49-.8,2.63,2.63,0,0,0,.18-1,2.7,2.7,0,0,0-.18-1,2.5,2.5,0,0,0-.49-.8,2.35,2.35,0,0,0-.72-.54,2.07,2.07,0,0,0-.89-.2,2,2,0,0,0-.87.2,2.35,2.35,0,0,0-.72.54,2.78,2.78,0,0,0-.49.81A2.72,2.72,0,0,0,12.91,5.66Z">
		      </path>
		      <path class="cls-1" d="M26.7,8.88a3,3,0,0,1-2.23-1,3.31,3.31,0,0,1-.64-1,3.45,3.45,0,0,1-.23-1.24,3.41,3.41,0,0,1,.88-2.28,3.47,3.47,0,0,1,1-.71,3.09,3.09,0,0,1,2.48,0,3.21,3.21,0,0,1,1,.71,3.16,3.16,0,0,1,.65,1,3.31,3.31,0,0,1,.24,1.25,3.45,3.45,0,0,1-.23,1.24,3.31,3.31,0,0,1-.64,1,3.05,3.05,0,0,1-2.24,1ZM24.43,5.66a2.59,2.59,0,0,0,.18,1,2.45,2.45,0,0,0,.49.79,2.13,2.13,0,0,0,.72.54,2,2,0,0,0,.88.19,2.06,2.06,0,0,0,.88-.2,2.28,2.28,0,0,0,.73-.54,2.69,2.69,0,0,0,.49-.8,2.63,2.63,0,0,0,.18-1,2.64,2.64,0,0,0-.67-1.78,2.28,2.28,0,0,0-.73-.54,2.06,2.06,0,0,0-.88-.2,2,2,0,0,0-.88.2,2.35,2.35,0,0,0-.72.54,2.78,2.78,0,0,0-.49.81A2.72,2.72,0,0,0,24.43,5.66Z">
		      </path>
		      <path class="cls-1" d="M40,8.76l-2.31-3.2L36.37,6.8v2h-.82V0h.82V6l3.52-3.43h.92L38.25,5.08l2.66,3.68Z">
		      </path>
		      <path class="cls-1" d="M1.45,16V28H0V13.34H1.12l9.71,12.21V13.36h1.44V28H11Z">
		      </path>
		      <path class="cls-1" d="M19.69,28.22a5.14,5.14,0,0,1-3.83-1.66,5.58,5.58,0,0,1-1.11-1.77,5.91,5.91,0,0,1-.39-2.13,5.71,5.71,0,0,1,.4-2.15,5.52,5.52,0,0,1,2.8-3,5.29,5.29,0,0,1,4.27,0,5.46,5.46,0,0,1,1.69,1.22,5.54,5.54,0,0,1,1.12,1.78,5.71,5.71,0,0,1,.4,2.15,5.91,5.91,0,0,1-.39,2.13,5.41,5.41,0,0,1-1.11,1.77,5.19,5.19,0,0,1-3.85,1.66Zm-3.9-5.54a4.41,4.41,0,0,0,.31,1.68,4.53,4.53,0,0,0,.83,1.37,4,4,0,0,0,1.24.92,3.58,3.58,0,0,0,1.52.33,3.46,3.46,0,0,0,1.52-.35,3.9,3.9,0,0,0,1.25-.92,4.63,4.63,0,0,0,.85-1.38,4.76,4.76,0,0,0,0-3.38,4.39,4.39,0,0,0-.85-1.38,4.08,4.08,0,0,0-1.25-.93,3.45,3.45,0,0,0-1.52-.34,3.38,3.38,0,0,0-1.51.34,4,4,0,0,0-1.24.94A4.53,4.53,0,0,0,16.1,21,4.6,4.6,0,0,0,15.79,22.68Z">
		      </path>
		      <path class="cls-1" d="M40,17.24h1.39L36.73,28H35.57l-2.31-5.5L31,28H29.81L25.18,17.24h1.36l3.93,9.32,2-4.91-1.84-4.39h1.18l1.41,3.52,1.4-3.52h1.2L34,21.65l2,4.91Z">
		      </path>
		      <rect class="cls-1" height="1" width="13.67" x="27.69" y="32.76">
		      </rect>
		    </g>
		  </g>
		</svg>
		<a href="#book_info">
			<div id="flecha">
				<div class="line"></div>
				<div class="line"></div>
			</div>
		</a>
	</section>
	<section id="book_info">
		<label for="name">Nombre</label>
		<input id="name" name="name" type="text"><br>
		<label for="service">Servicio</label>
		<select onchange="updateHours()" id="service" name="service">
			<option value="none"></option>
			<?php 
				$servicios = $this->db->query("SELECT * FROM servicios");
				foreach($servicios->result() as $row){
					echo ('<option value="'.$row->id.'">'.$row->nombre.'</option>');
				}
			?>
		</select><br>
		<label for="date">Dia</label>
		<input id="date" onchange="getSchedule()" name="date" type="date" min="<?= $hoy ?>" max="<?= $luego ?>"><br>
		<label for="hora">Hora</label>
		<select id="hora" name="hora" disabled>
			<!-- Relleno de opciones en base a la agenda del día seleccionado -->
		</select>
		<p id="horas_disponibles">Tenemos Horas Disponibles!</p>
		<p id="horas_no-disponibles">Disculpa! No hay horas disponibles para este servicio en el día seleccionado. Pueba otro dia.</p><br>
		<label for="email">Correo</label>
		<input id="email" name="email" type="email"><br>
		<label for="whatsapp">WhatsApp Contacto</label>
		<input id="whatsapp" name="whatsapp" type="tel"><br>
		<button onclick="reservar();">Solicitar Reserva!</button>
	</section>
</div>