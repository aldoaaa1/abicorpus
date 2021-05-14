var start = [$('#hair_art'), $('header'), $('#header_img'), $('#submenu')];

function loadPage(){
	for(let i in start){
		start[i].css('opacity','0');
	}
	loader();
	var	time = 300;
	for(let i in start){
		time += 300;
		start[i].css('transform','translateY(-100px)');
		setTimeout(function(){
			start[i].css('transition','all 0.5s ease');
			start[i].css('opacity','1');
			start[i].css('transform','translateY(0)');
		}, time);
	}
}
$('#phone_menu').click(function(){
	$('#phone_menu_open').css('transition', 'all 0.4s ease');
	$('#phone_menu_open').css('opacity', '1');
	$('#phone_menu_open').css('transform', 'translateY(0)');
})
$('#phone_menu_open span').click(function(){
	$('#phone_menu_open').css('transform', 'translateY(-100%)');
	$('#phone_menu_open').css('opacity', '0');
})

$(document).ready(function(){
	loadPage();
	startChatbox();
});

function goLogin(){
	window.location=base_url()+"login";
}