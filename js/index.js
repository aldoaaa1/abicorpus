var start = [$('#hair_art'), $('header'), $('#header_img'), $('#submenu')];

function loadPage(){
	for(let i in start){
		start[i].css('opacity','0');
	}
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

$(document).ready(function(){
	loadPage();
	startChatbox();
	selectMenu(1);
});

function goLogin(){
	window.location=base_url()+"login";
}

