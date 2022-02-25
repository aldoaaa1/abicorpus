// VARIABLES MODIFICABLES PARA MEJOR FUNCIONAMIENTO
var porcentajeAltura = 0.85; var distance = '50px'; var time = '1.5s';

var scroll = [];
scroll[0] = document.querySelectorAll(".onScroll[data-type=up]");
scroll[1] = document.querySelectorAll(".onScroll[data-type=right]");
scroll[2] = document.querySelectorAll(".onScroll[data-type=left]");
scroll[3] = document.querySelectorAll(".onScroll[data-type=show]");
var clientHeight = document.documentElement.clientHeight;

for (let i = 0; i < scroll.length; i++) {
	for (let t = 0; t < scroll[i].length; t++) {
		scroll[i][t].style.opacity = 0;
		if (i == 0) { scroll[i][t].style.transform = 'translateY(' + distance + ')'; }
		if (i == 1) { scroll[i][t].style.transform = 'translateX(-' + distance + ')'; }
		if (i == 2) { scroll[i][t].style.transform = 'translateX(' + distance + ')'; }
		setTimeout(function(){
			scroll[i][t].style.transition = 'all '+time+' ease';
		}, 100)
	}
}

// Se llama funcion para que los elementos superiores se muestren con animación
setTimeout(onScrollShow2(), time);

function onScrollShow2(){
	// Defino la altura del scroll
	scrollTop = pageYOffset;
	// Defino la altura a la que deberían de mostrarse las cosas
	targetScroll =  (clientHeight * porcentajeAltura) + scrollTop;
	for (let i = 0; i < scroll.length; i++) {
		for (let t = 0; t < scroll[i].length; t++) {
			if (targetScroll > scroll[i][t].offsetTop) {
				if (scroll[i][t].style.opacity == 0) {
					// console.log ('Pasó 1!!');
					if (scroll[i][t].dataset.delay) {
						setTimeout(function(){
							scroll[i][t].style.opacity = 1;
							if (i < 3) { scroll[i][t].style.transform = 'translateY(0px)'; }
						}, scroll[i][t].dataset.delay)
					}else{
						scroll[i][t].style.opacity = 1;
						if (i < 3) { scroll[i][t].style.transform = 'translateY(0px)'; }
					}
				}
			} else{
				if (scroll[i][t].style.opacity == 1) {
					// console.log ('1 elemento escondido!');
					scroll[i][t].style.opacity = 0;
					if (i == 0) { scroll[i][t].style.transform = 'translateY(' + distance + ')'; }
					if (i == 1) { scroll[i][t].style.transform = 'translateX(-' + distance + ')'; }
					if (i == 2) { scroll[i][t].style.transform = 'translateX(' + distance + ')'; }
				}
			}
		}
	}
}

window.addEventListener('scroll', onScrollShow2);