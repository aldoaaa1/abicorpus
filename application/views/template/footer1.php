<footer class="full-container">
	<div class="container">
		<div class="info_f1">
			<div class="a1">
				<h2>Horarios</h2>
			</div>
			<div class="a2">
				<p>Lunes-Viernes</p>
				<p>9:00am - 5:00pm</p>
			</div>
			<div class="a2">
				<p>Sábado</p>
				<p>9:00am - 2:00pm</p>
			</div>
			<div class="a1">
				<p>Puede agendar cita en cualquiera de nuestros medios de comunicación oficiales.</p>
			</div>
		</div>
		<div class="line_footer"></div>
		<div class="info_f2">
			<p>Todos los derechos reservados. Abi Corpus Hair Studio</p>
			<div>
				<a href="#"><img src="img/facebook.svg" alt="Facebook"></a>
				<a href="#"><img src="img/instagram.svg" alt="Instagram"></a>
				<a href="#"><img src="img/whatsapp.svg" alt="Whatsapp"></a>
			</div>
		</div>
	</div>
</footer>

<style>
	footer{
		background-color: #FFE2E0;
		padding-top: 20px;
		text-align: center;
	}
	.info_f1{
		margin: 0 auto 20px;
		display: flex; flex-direction: row;
		align-items: center; justify-content: center;
	}
	.info_f1 .a1, .info_f1 .a2{
		width: 25%;
		min-width: 200px;
	}
	.info_f1 .a1{
		height: 70%;
		color: Black;
		border: solid 2px black;
		padding: 2px;
	}
	.info_f1 .a2{
		height: 100%;
		padding: 10px;
		background-color: black;
		color: white;
		display: flex; flex-direction: column;
		justify-content: center; align-items: center;
	}
	.info_f1 > .a2 > p{
		margin: 7px;
	}
	.info_f1 > div:nth-child(4) > p{
		font-size: 14px;
	}
	.line_footer{
		border-bottom: solid 1px #333;
		width: 1024px; margin: auto;
		max-width: 100%;
	}
	.info_f2{
		height: 50px; max-width: 100%;
		width: 1024px; margin: auto;
		display: flex; flex-direction: row;
		align-items: center;
	}
	.info_f2 div{
		margin-left: auto;
	    width: 120px;
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	}
	.info_f2 div img{
		width: 20px;
	}
	.info_f2 p{
		text-align: left;
		width: 66.66%;
	    font-size: 12px;
	  	color: #777;
	    margin: 0;
	}

	@media (max-width: 800px) {
		.info_f1 > div:nth-child(4){
			display: none;
		}
		.info_f1{
			flex-direction: column;
		}
		.info_f2{
			flex-direction: column;
		}
		.info_f2 > p{
			text-align: center;
			max-width: 180px;
			margin: 10px 0;
		}
		.info_f2 > div{
			margin: auto;
		}
		footer{
			padding-bottom: 30px;
		}
	}
</style>