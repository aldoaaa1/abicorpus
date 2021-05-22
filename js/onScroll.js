let onScroll_element = document.querySelectorAll(".onScroll");
function oS_hideElement(e, i){
	e.style.transition = "all 0.3s ease";
	e.style.opacity = "0";
	if (e.dataset.d) {e.dataset.d=false;}
}
function oS_showType(e, i, type){
	let transition = 'all '+e.dataset.speed+' ease';
	switch (type){
		case 'show':
			onScroll_element[i].style.transition = 'all '+onScroll_element[i].dataset.speed+' ease';
			onScroll_element[i].style.opacity = '1';
		break;
		case 'up':
			e.style.transition = 'all 0s';
			e.style.transform = 'translateY(50px)';
			setTimeout(function(){
				e.style.transition = transition;
				e.style.opacity = '1';
				e.style.transform = 'translateX(0px)';
			},10)
		break;
		case 'left':
			e.style.transition = 'all 0s';
			e.style.transform = 'translateX(-50px)';
			setTimeout(function(){
				e.style.transition = transition;
				e.style.opacity = '1';
				e.style.transform = 'translateX(0px)';
			},10)
		break;
		case 'right':
			e.style.transition = 'all 0s';
			e.style.transform = 'translateX(50px)';
			setTimeout(function(){
				e.style.transition = transition;
				e.style.opacity = '1';
				e.style.transform = 'translateX(0px)';
			},10)
		break;
		default:
			console.log('Tipo de transisión no establecida correctamente.')
		break;
	}
}
function onScroll(){
	if (window.innerWidth < 1024) { return false;	}
	let currentScrollValue = document.documentElement.scrollTop;
	let screenHeight = window.innerHeight;
	for (let i = 0; i < onScroll_element.length; i++) {
		let e = onScroll_element[i];
		let elementScrollTop = e.offsetTop;
		let heightToShow = (1 - e.dataset.height) * screenHeight;
		if (elementScrollTop - heightToShow > currentScrollValue) {
			if (e.style.opacity == "0") {continue;}
			oS_hideElement(e, i);
			continue;
		}
		if (e.style.opacity == "1") {continue;}
		//FUNCIONES DE LAS OPCIONES DE APARICIÓN
		if (e.dataset.delay) {
			if (e.dataset.d=="true") {continue;}
			if (e.dataset.d == undefined || e.dataset.d=="false") {
				e.dataset.d = true;
				setTimeout(function(){
					oS_showType(e, i, e.dataset.type);
				}, e.dataset.delay)
			}
		} else{oS_showType(e, i, e.dataset.type)}
	}
}
window.addEventListener('scroll', onScroll);



//SCRIPT COPIADO PARA MOSTAR ELEMENTOS CON ARRAYS
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