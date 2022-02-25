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
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, at.</p>
			</div>
		</div>
		<div class="line_footer"></div>
		<div class="info_f2">
			<p>Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Enim qui sequi quisquam adipisci amet eum quo a id odit earum.</p>
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
		width: 800px; height: 100px; margin: 0 auto 20px;
		display: flex; flex-direction: row;
		align-items: center; justify-content: center;
	}
	.info_f1 .a1, .info_f1 .a2{
		width: 25%;
	}
	.info_f1 .a1{
		height: 80%;
		color: Black;
		border: solid 2px black;
	}
	.info_f1 .a2{
		height: 100%;
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
		width: 66.66%;
	    font-size: 12px;
	  	color: #777;
	    margin: 0;
	}
</style>