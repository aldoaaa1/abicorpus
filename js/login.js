var user = document.querySelector("#user");
var pass = document.querySelector("#pass");
user.addEventListener('focus', function(){
	let e = document.querySelector("#info > p:nth-child(1)").style;
	e.transition = 'all 0.3s ease', e.transform = 'translateY(5px)', e.fontSize = '12px';
})
user.addEventListener('blur', function(){
	let e = document.querySelector("#info > p:nth-child(1)").style;
	if (user.value == "") {
		e.transform = 'translateY(35px)', e.fontSize = '16px';
	}
})
pass.addEventListener('focus', function(){
	let e = document.querySelector("#info > p:nth-child(3)").style;
	e.transition = 'all 0.3s ease', e.transform = 'translateY(5px)', e.fontSize = '12px';
})
pass.addEventListener('blur', function(){
	let e = document.querySelector("#info > p:nth-child(3)").style;
	if (document.querySelector("#info > input[type=text]:nth-child(2)").value == "") {
		e.transform = 'translateY(35px)', e.fontSize = '16px';
	}
})
function enter(){
	window.location=base_url()+"agenda";
}

var start = document.querySelectorAll(".fade");
function loadPage(){
	for(let i = 0; i < start.length; i++){
		start[i].style.opacity = 0;
	}
	setTimeout(loader(),50);
	var	time = 50;
	for(let i = 0; i < start.length; i++){
		time += 50;
		start[i].style.transform = 'translateY(30px)';
		setTimeout(function(){
			start[i].style.transition = 'all 0.5s ease';
			start[i].style.opacity = 1;
			start[i].style.transform = 'translateY(0px)';
		}, time);
	}
	setTimeout(function(){
		document.querySelector("#info > p:nth-child(1)").style.transform = 'translateY(35px)';
		document.querySelector("#info > p:nth-child(1)").style.fontSize = '16px';
		document.querySelector("#info > p:nth-child(3)").style.transform = 'translateY(35px)';
		document.querySelector("#info > p:nth-child(3)").style.fontSize = '16px';
	}, time+10)
}
$(window).ready(loadPage());