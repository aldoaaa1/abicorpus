// ONSCROLL SHOW
let porcentajeAltura = 0.80;
let onScroll_up = document.querySelectorAll(".onScroll_up");
let onScroll_right = document.querySelectorAll(".onScroll_right");
let onScroll_left = document.querySelectorAll(".onScroll_left");
let onScroll_show = document.querySelectorAll(".onScroll_show");
function onScrollShow(){
	let scrollTop = document.documentElement.scrollTop;
	for (var i=0; i<onScroll_up.length; i++) {
		let alturaAnimado = onScroll_up[i].offsetTop;
		if(alturaAnimado - window.innerHeight*porcentajeAltura < scrollTop){
			onScroll_up[i].style.opacity = 1;
			onScroll_up[i].classList.add("onScroll_up2");
		} else{
			onScroll_up[i].style.opacity = 0;
			onScroll_up[i].classList.remove("onScroll_up2");
		}
	}
	for (let i=0; i<onScroll_right.length; i++) {
		let alturaAnimado = onScroll_right[i].offsetTop;
		if(alturaAnimado - window.innerHeight*porcentajeAltura < scrollTop){
			onScroll_right[i].style.opacity = 1;
			onScroll_right[i].classList.add("onScroll_right2");
		} else{
			onScroll_right[i].style.opacity = 0;
			onScroll_right[i].classList.remove("onScroll_right2");
		}
	}
	for (var i=0; i<onScroll_left.length; i++) {
		let alturaAnimado = onScroll_left[i].offsetTop;
		if(alturaAnimado - window.innerHeight*porcentajeAltura < scrollTop){
			onScroll_left[i].style.opacity = 1;
			onScroll_left[i].classList.add("onScroll_left2");
		} else{
			onScroll_left[i].style.opacity = 0;
			onScroll_left[i].classList.remove("onScroll_left2");
		}
	}
	for (var i=0; i<onScroll_show.length; i++) {
		let alturaAnimado = onScroll_show[i].offsetTop;
		if(alturaAnimado - window.innerHeight*porcentajeAltura < scrollTop){
			onScroll_show[i].style.opacity = 1;
		} else{
			onScroll_show[i].style.opacity = 0;
		}
	}
}
window.addEventListener('scroll', onScrollShow);
// FIN ONSCROLL SHOW