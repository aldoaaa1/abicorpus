$(window).ready(function(){
	loader();
})

$('#nombre').focus(function(){
	if ($('#nombre_label').hasClass('focus_label')) {return false;}
	$('#nombre_label').addClass('focus_label');
});
$('#nombre').blur(function(){
	if (!this.value == "") {return false;}
	if ($('#nombre_label').hasClass('focus_label')) {
		$('#nombre_label').removeClass('focus_label');
	}
});

$('#correo').focus(function(){
	if ($('#correo_label').hasClass('focus_label')) {return false;}
	$('#correo_label').addClass('focus_label');
});
$('#correo').blur(function(){
	if (!this.value == "") {return false;}
	if ($('#correo_label').hasClass('focus_label')) {
		$('#correo_label').removeClass('focus_label');
	}
});

$('#message').focus(function(){
	if ($('#message_label').hasClass('focus_label')) {return false;}
	$('#message_label').addClass('focus_label');
});
$('#message').blur(function(){
	if (!this.value == "") {return false;}
	if ($('#message_label').hasClass('focus_label')) {
		$('#message_label').removeClass('focus_label');
	}
});

function clearInputs(){
	$('#nombre').val('');
	$('#correo').val('');
	$('#message').val('');
}

function enviarMensaje(){
	if ($('#nombre').val() == "") {
		Swal.fire(
		  'Espera!',
		  'Aún te falta poner tu nombre!',
		  'warning'
		)
		return false;
	}
	if ($('#correo').val() == "") {
		Swal.fire(
		  'Espera!',
		  'Aún te falta poner tu correo!',
		  'warning'
		)
		return false;
	}
	if ($('#message').val() == "") {
		Swal.fire(
		  'Espera!',
		  'Aún te escribir el mensaje!',
		  'warning'
		)
		return false;
	}

	let datos = {
		nombreCliente: $('#nombre').val(),
		correoCliente: $('#correo').val(),
		mensajeCliente: $('#message').val()
	};

	$.ajax({
		url: base_url() + '/email/contacto',
		type: 'post',
		data: datos,
		success: function(){
			clearInputs();
			Swal.fire(
			  'Excelente!',
			  'El mensaje ha sido enviado!',
			  'success'
			)
			return false;
		}
	});
	return false;
}