function q1(q){return document.querySelector(q)};
function q2(q){return document.querySelectorAll(q)};
chatbox = q1('#chatbox');
chatbox_Asesor = {
    nombre: q1('#chatbox .chatbox-asesor').dataset.nombre,
    puesto: q1('#chatbox .chatbox-asesor').dataset.puesto,
    correo: q1('#chatbox .chatbox-asesor').dataset.correo,
    img: q1('#chatbox .chatbox-asesor').dataset.img
};
chatbox_CustomColor = {
	Body: q1('.chatbox-customColors').dataset.body,
	ChatboxMsg: q1('.chatbox-customColors').dataset.chatboxmsg,
	ClientMsg: q1('.chatbox-customColors').dataset.clientmsg,
	iconHover: q1('.chatbox-customColors').dataset.iconhover
};
preguntasTodas = q2('.chatbox-question');
closeMessage ='<div class="chatbox-mensaje_left"><p>' + q1('.chatbox-comportamiento').dataset.close_message;
delayAutoShow = q1('.chatbox-comportamiento').dataset.delay_autoshow_ms;
var pregunta = new Array();
for (let i = 0; i < preguntasTodas.length; i++) {
	pregunta.push(preguntasTodas[i].dataset.question);
}
var preguntaHTML = new Array();
for (let i = 0; i < preguntasTodas.length; i++) {
	preguntaHTML.push('<div class="chatbox-mensaje_left"><p>'+pregunta[i]);
}
var rootCSS = q1(':root');
rootCSS.style.setProperty("--chatbox_message_color", chatbox_CustomColor.ChatboxMsg);
rootCSS.style.setProperty("--client_message_color", chatbox_CustomColor.ClientMsg);
rootCSS.style.setProperty("--chatbox_body_color", chatbox_CustomColor.Body);
// =================================================
chatbox.classList.add('chatboxClose');
htmlChatbox = '<div class="chatbox-header"><div class="chatbox-top"><img src="'+chatbox_Asesor.img+'" alt="Asesor"><h2>'+chatbox_Asesor.nombre+'</h2><p>'+chatbox_Asesor.puesto+'</p></div><span id="chatboxCloseBtn">X</span><div class="chatbox-headerCircle"></div></div><div class="chatbox-body"></div><div class="chatbox-send"><textarea id="clientMsg" cols="30" rows="10" placeholder="Escribe tu mensaje aquí..."></textarea><div class="chatbox-sendButton">ENVIAR</div></div><div class="chatbox-footer"><a href="">&#169 ChatBox</a></div>';
chatbox.innerHTML = htmlChatbox;
q1('body').innerHTML = '<div class="chatboxIcono"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 224 166"><title>CharboxIcon</title><path class="chatboxIcon-Color1" d="M161,0H20A20,20,0,0,0,0,20V96a20,20,0,0,0,20,20h6l24,24,24-24h87a20,20,0,0,0,20-20V20A20,20,0,0,0,161,0Z"/><path class="chatboxIcon-Color2" d="M105.7,59H209.3c8.12,0,14.7,6.84,14.7,15.29v58.08c0,8.44-6.58,15.29-14.7,15.29h-4.4L187.26,166l-17.64-18.34H105.7c-8.12,0-14.7-6.85-14.7-15.29V74.29C91,65.84,97.58,59,105.7,59Z"/></svg></div>' + q1('body').innerHTML;
chatbox = q1('#chatbox');
closeBtn = q1('#chatboxCloseBtn');
chatboxIcono = q1('.chatboxIcono');
chatboxBody = q1('.chatbox-body');
var chatboxYaMostrado = false;
// =================================================
q1('.chatboxIcon-Color1').style.fill = chatbox_CustomColor.ChatboxMsg;
q1('.chatboxIcon-Color2').style.fill = chatbox_CustomColor.ClientMsg;
q1('.chatbox-sendButton').style.background = chatbox_CustomColor.ClientMsg;
function paintMessages(){
	if (q2('.chatbox-mensaje_right').length > 0) {
		for (let i = 0; i < q2('.chatbox-mensaje_right').length; i++) {
			q2('.chatbox-mensaje_right')[i].style.background = chatbox_CustomColor.ClientMsg;
		}
	}
	if (q2('.chatbox-mensaje_left').length > 0) {
		for (let i = 0; i < q2('.chatbox-mensaje_left').length; i++) {
			q2('.chatbox-mensaje_left')[i].style.background = chatbox_CustomColor.ChatboxMsg;
		}
	}
}
// =================================================
function test(){
	alert('test ok');
}
function closeChatbox(){
	chatbox.classList.add('chatboxClose');
}
function chatboxIconoHoverIn(){
	q1('.chatboxIcon-Color1').style.fill = chatbox_CustomColor.iconHover;
	q1('.chatboxIcon-Color2').style.fill = chatbox_CustomColor.iconHover;		
}
function chatboxIconoHoverOut(){
	q1('.chatboxIcon-Color1').style.fill = chatbox_CustomColor.ChatboxMsg;
	q1('.chatboxIcon-Color2').style.fill = chatbox_CustomColor.ClientMsg;		
}
function chatboxOpen(){
	chatbox.classList.remove('chatboxClose');
	chatboxYaMostrado = true;
	if (!preguntaInicialMostrada()) {
		setTimeout(function(){
			chatboxBody.innerHTML += preguntaHTML[0] + '</p><span>'+myTime()+'</span></div>';
			paintMessages();
		}, 300);
	}
	setTimeout(showHideMessages, 350);
}
function preguntaInicialMostrada(){
	busqueda = pregunta[0];
	html = chatboxBody.innerHTML;
	index = html.indexOf(busqueda);
	if (index >= 0) { return true; } else { return false; }
}
function showHideMessages(){
	chatboxMessages = q2('.chatbox-mensaje_left');
	clientMessages = q2('.chatbox-mensaje_right');
	for (let i = 0; i < chatboxMessages.length; i++) {
		if (!chatboxMessages[i].classList.contains('chatbox-mensaje_show')) {
			chatboxMessages[i].classList.add('chatbox-mensaje_show');
		}
	}
	for (let i = 0; i < clientMessages.length; i++) {
		if (!clientMessages[i].classList.contains('chatbox-mensaje_show')) {
			clientMessages[i].classList.add('chatbox-mensaje_show');
		}
	}
}
function myTime(){
	let h = new Date().getHours();
	let m = new Date().getMinutes();
	let ampm;
	if (h>12) {
		ampm = 'pm';
		h = h - 12;
	} else { ampm = 'am'; }
	if (m < 10) {
		m = "0"+m;
	}
	return h+':'+m+ampm;
}
function longDate(){
	let d = new Date().getDate();
	if (d < 10) {d = '0' + d.toString();}
	let m = new Date().getMonth() + 1;
	if (m.length = 1) {m = '0' + m.toString();}
	let a = new Date().getFullYear();
	let h = myTime();
	return d+'/'+m+'/'+a+' a las '+myTime();
}
function salidaAutomatica(){
	if (!chatboxYaMostrado) {
		chatboxOpen();
	}
}
function clearTextArea(){
	if (q1('#clientMsg').value.length > 0) {
		q1('#clientMsg').value = "";	
	}
}
var clientMessagesSent = 0;
var respuestaCliente = [];
function sendClientMessage(){
	message = q1('#clientMsg').value;
	if (!message == "") {
		innerHTML = '<div class="chatbox-mensaje_right"><p>' + message + '</p><span>'+myTime()+'</span></div>';
		chatboxBody.innerHTML += innerHTML;	
		showAndFormatMessages();
		clientMessagesSent++;
		respuestaCliente[clientMessagesSent-1] = message;
		readClientMessage();
	}
}
function readClientMessage(){
	if (clientMessagesSent < preguntasTodas.length) {
		setTimeout(function(){
			chatboxBody.innerHTML += preguntaHTML[clientMessagesSent] + '</p><span>'+myTime()+'</span></div>';
			showAndFormatMessages();
		}, 1000);
	}
	if (clientMessagesSent == preguntasTodas.length) {
		setTimeout(function(){
			chatboxBody.innerHTML += closeMessage + '</p><span>'+myTime()+'</span></div>';
			showAndFormatMessages();

			let url = 'https://aldoalcala.com/code/chatbox-send_mail.php';
			let datos = {
				correoAsesor: chatbox_Asesor.correo,
				nombreAsesor: chatbox_Asesor.nombre,
				chatboxQuestions: pregunta,
				clientMensajes: respuestaCliente,
				fecha: longDate()
			};

			$.ajax({
				url: url,
				type: 'post',
				data: datos,
				success: function(response){
					console.log(enviadoPOST);
				}
			});

		}, 1000);
	}
}
function scrollBottomChatbody(){
	if (chatboxBody.scrollHeight > chatboxBody.offsetHeight) {
		chatboxBody.scroll({
		  top: chatboxBody.scrollHeight,
		  behavior: 'smooth'
		});
	}
}
function showAndFormatMessages(){
	paintMessages();
	setTimeout(showHideMessages,5);
	setTimeout(clearTextArea, 5);
	setTimeout(scrollBottomChatbody, 10);
}
function startChatbox(){
	if (delayAutoShow > 0) {
		setTimeout(salidaAutomatica, delayAutoShow);
	}
}
// =================================================
closeBtn.addEventListener('click', closeChatbox);
chatboxIcono.addEventListener('mouseover', chatboxIconoHoverIn);
chatboxIcono.addEventListener('mouseout', chatboxIconoHoverOut);
chatboxIcono.addEventListener('click', chatboxOpen);
q1('.chatbox-sendButton').addEventListener('click', sendClientMessage);
q1('#clientMsg').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sendClientMessage();
    }
});