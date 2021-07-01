function wait(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function loader(){
	$('#loader').css('transform', 'translateY(-100%)');
}
$(document).ready(function(){
	loader();
});
function hideHeader(){
	$('#hair_art').hide();
	$("body > div:nth-child(4)").hide();
	$("body > header").hide();	
}
function selectMenu(page){
	setTimeout(function(){
		document.querySelector("body > header > menu > a:nth-child("+page+")").classList.add("menu_seleccionado");
	},500);
}

// Funciones del header común entre páginas
function openPhoneMenu(){
	$('#phone_menu_open').css('transition', 'all 0.4s ease');
	$('#phone_menu_open').css('opacity', '1');
	$('#phone_menu_open').css('transform', 'translateY(0)');
	setTimeout(function(){
		$('#phone_menu_closeBtn .line:nth-child(1)').css('animation', 'slideInUp 0.8s cubic-bezier(0.48, 0.01, 0.2, 1.01) forwards');
		$('#phone_menu_closeBtn .line:nth-child(2)').css('animation', 'slideInRight 0.8s cubic-bezier(0.48, 0.01, 0.2, 1.01) 0.3s forwards');
		$("#phone_menu_open > a").css('animation', 'fadeInUp 1s ease 0.2s forwards');
		$("#phone_menu_open > div.line").css('animation', 'fadeInLeft 1s ease forwards');
		$("#phone_menu_footer > p").css('animation', 'fadeInDown 1.5s ease forwards');
		$("#phone_menu_footer > a").css('animation', 'fadeInDown 1.5s ease forwards');
	},100)
}
function closePhoneMenu(){
	$('#phone_menu_open').css('transition', 'all 0.4s ease');
	$('#phone_menu_open').css('transform', 'translateY(-100%)');
	$('#phone_menu_open').css('opacity', '0');
	setTimeout(function(){
		$('#phone_menu_closeBtn .line:nth-child(1)').css('animation', 'none');
		$('#phone_menu_closeBtn .line:nth-child(2)').css('animation', 'none');
		$("#phone_menu_open > a").css('animation', 'none');
		$("#phone_menu_open > div.line").css('animation', 'none');
		$("#phone_menu_footer > p").css('animation', 'none');
		$("#phone_menu_footer > a").css('animation', 'none');
	},100)
}
function string2TimeA(string){
	hora = parseInt(string.slice(0, 2));
	minutos = parseInt(string.slice(2, 4))/60;
	if (hora > 12) { hora = hora - 12 }
	time = hora + minutos;
	return time;
}