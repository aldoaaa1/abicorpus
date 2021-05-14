function showElements(e){
	for(let i = 0; i < e.length; i++){
		e[i].style.opacity = 0;
	}
	setTimeout(loader(),50);
	var	time = 100;
	for(let i = 0; i < e.length; i++){
		time += 100;
		e[i].style.transform = 'translateY(30px)';
		setTimeout(function(){
			e[i].style.transition = 'all 0.5s ease';
			e[i].style.opacity = 1;
			e[i].style.transform = 'translateY(0px)';
		}, time);
	}
}
var e1 = $('.cliente');
var e2 = [$('#menu')[0], $('.clientes_pasados')[0], $('.cliente_activo')[0], $('.clientes_siguientes')[0]];
$(window).ready(function(){
	showElements(e1);
	showElements(e2);
});