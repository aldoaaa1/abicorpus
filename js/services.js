hideHeader();
$(window).ready(function(){
	selectMenu(2);
	setTimeout(indicadores, 1000);
})
function indicadores(){
	var indicadoresTiempo = $('.indicador-tiempo');
	var indicadoresPrecio = $('.indicador-precio');
	var tiempoMaximo = 8;
	var precioMaximo = 2600;
	for (var i = 0; i < indicadoresTiempo.length; i++) {
		t1 = indicadoresTiempo[i].children[0].dataset.target; t2 = indicadoresTiempo[i].children[1].dataset.target;
		tx1 = 100-(t1*100/tiempoMaximo); tx2 = 100-(t2*100/tiempoMaximo);
		indicadoresTiempo[i].children[0].style.transform = "translateX(-"+tx1+"%)";
		indicadoresTiempo[i].children[1].style.transform = "translateX(-"+tx2+"%)";
	}
	for (var i = 0; i < indicadoresPrecio.length; i++) {
		t1 = indicadoresPrecio[i].children[0].dataset.target; t2 = indicadoresPrecio[i].children[1].dataset.target;
		tx1 = 100-(t1*100/precioMaximo); tx2 = 100-(t2*100/precioMaximo);
		indicadoresPrecio[i].children[0].style.transform = "translateX(-"+tx1+"%)";
		indicadoresPrecio[i].children[1].style.transform = "translateX(-"+tx2+"%)";
	}
}
function loadServices(){
	$.post(base_url()+'getServices', function(data){
		console.log(data);
	});
}
loadServices();