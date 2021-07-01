hideHeader();

$(window).ready(function(){
	selectMenu(3);
})

function alert2(a){
	Swal.fire(
	  'Espera!',
	  'Aún te falta llenar el campo<br><strong>"'+a+'"</strong><br>para poder agendar tu cita!',
	  'warning'
	)
}
function showLoader(info){
	document.querySelector("#loader").style.transform = "translateY(0)";
	document.querySelector("#infoLoader").textContent = info;
	document.querySelector("#infoLoader").style.display = "block";
}
function hideLoader(){
	document.querySelector("#loader").style.transform = "translateY(-100%)";
	document.querySelector("#infoLoader").textContent = "";
	document.querySelector("#infoLoader").style.display = "none";
}
function clearContent(){
	document.querySelector("#name").value = "";
	document.querySelector("#service").value = "none";
	document.querySelector("#email").value = "";
	document.querySelector("#whatsapp").value = "";
	clearHourOptions();
}

function reservar(){
	if (document.querySelector("#name").value == "") { alert2("Nombre"); return false; }
	if (document.querySelector("#service").value == "none") { alert2("Servicio"); return false; }
	if (document.querySelector("#hora").value == "") { alert2("Hora"); return false; }
	if (document.querySelector("#email").value == "") { alert2("Correo"); return false; }
	if (document.querySelector("#whatsapp").value == "") { alert2("WhatsApp"); return false; }
	showLoader('Solicitando Reserva...');
	if (parseInt(document.querySelector("#hora").value) < 10) {
		fecha = document.querySelector("#date").value + " 0"+document.querySelector("#hora").value+":00:00";
	} else { fecha = document.querySelector("#date").value + " "+document.querySelector("#hora").value+":00:00"; }
	data = new Object();
	data.nombre = document.querySelector("#name").value;
	data.servicio = document.querySelector("#service").value;
	data.fecha = fecha;
	data.correo = document.querySelector("#email").value;
	data.whatsapp = document.querySelector("#whatsapp").value;
	$.post(base_url()+'pages/reservar', data).then(function(e){
		clearContent();
		hideLoader();
		setTimeout(function(){
			Swal.fire(
			  'Excelente!',
			  'Tu solicitud ha sido enviada!',
			  'success'
			)
		}, 400)
	});
}

function checkHours(time_to_check, schedule){
	duration = time_to_check;
	aviable_hours = 0;
	aviable_dates = 0;
	dates = [];
	for (var i = 0; i < schedule.length - 1; i++) {
		if (!schedule[i][1]) { aviable_hours = 0; }
		if (schedule[i][1]) {
			aviable_hours = aviable_hours + 1;
			if (aviable_hours == time_to_check) {
				dates.push(schedule[i-(time_to_check-1)][0]);
				aviable_dates = aviable_dates + 1;
				aviable_hours = aviable_hours - 1;
			}
		}
	}
	if (aviable_dates == 0) { return 0 }
	return dates;
}

function getDay(){
	day_noformat = document.querySelector("#date").value;
	day = parseInt(day_noformat.slice(8, 10));
	return day;
}

function getHour(t){ return parseInt(t.slice(0, 2)); }

function getTimetoWork(){
	$.post(base_url()+'pages/timeToWork').then(function(e){
		return e;
	});
}

function clearHourOptions(){
	options = document.querySelectorAll("#hora > option");
	for (var i = 0; i < options.length; i++) {
		options[i].remove();
	}
	document.querySelector("#hora").disabled = true;
	siHoras = document.querySelector("#horas_disponibles");
	noHoras = document.querySelector("#horas_no-disponibles");
	if (siHoras.style.opacity == 1) {
		siHoras.style.opacity = 0;
		siHoras.style.marginTop = siHoras.offsetHeight * -1 + "px";		
	}
	if (noHoras.style.opacity == 1) {
		noHoras.style.opacity = 0;
		noHoras.style.marginTop = noHoras.offsetHeight * -1 + "px";
	}
}

function showHoras(y){
	siHoras = document.querySelector("#horas_disponibles");
	noHoras = document.querySelector("#horas_no-disponibles");
	if (y) {
		siHoras.style.display = "initial";
		siHoras.style.opacity = 1;
		siHoras.style.marginTop = "7px";	
	}
	if (!y) {
		noHoras.style.display = "initial";
		noHoras.style.opacity = 1;
		noHoras.style.marginTop = "7px";	
	}
}

function setHoursOptions(dates){
	if (document.querySelectorAll("#hora > option").length > 0) {clearHourOptions();}
	showHoras(true);
	document.querySelector("#hora").disabled = false;
	for (var i = 0; i < dates.length; i++) {
		text = dates[i]+':00 hrs';
		hourSelector = document.querySelector("#hora");
		var added = document.createElement('option');
	    added.value = dates[i];
	    added.innerHTML = text;
	    hourSelector.append(added);
	}
}

function updateHours(){
	if (document.querySelector("#date").value == "" || document.querySelector("#service").value == "none") {
		if (document.querySelectorAll("#hora > option").length > 0) {clearHourOptions();}
		return false;
	}
	getSchedule();
}

function getSchedule(){
	if (document.querySelector("#service").value == "none") {
		Swal.fire(
		  'Espera!',
		  'Primero selecciona el servicio!',
		  'warning'
		)
		return false;
	}
	dayWeek = new Date(document.querySelector("#date").value).getDay();
	if (dayWeek == 6) {
		Swal.fire(
		  'Lo sentimos!',
		  'Los domingos o tenemos agenda disponible',
		  'info'
		)
		return false;
	}
	showLoader('Buscando Horarios...');
	serviceID = document.querySelector("#service").value;
	day = getDay();
	timeToWork = [];
	schedule = [];
	dates = []; serviceTime = 0;
	$.post(base_url()+'pages/getServiceTime/'+serviceID).then(function(s){
		s = JSON.parse(s);
		serviceTime = s[0].tiempo1;
		// console.log('Tiempo del Servicio Solicitado: '+serviceTime);
		return false;
	}).then(function(){
		if (serviceTime == 0) {
			if (document.querySelector("#hora").disabled == false) {
				document.querySelector("#hora").disabled = true;
			}
			return false
		}
		$.post(base_url()+'pages/timeToWork').then(function(e){
			e = JSON.parse(e);
			start_time = getHour(e['apertura']);
			end_time = getHour(e['cierre']);
			for (var i = start_time; i <= end_time; i++) {
				timeToWork.push([i, 1]);
			}
			$.post(base_url()+'pages/getShedule/'+document.querySelector("#date").value).then(function(e){
				schedule = JSON.parse(e);
				if (schedule == 0) {
					dates = checkHours(serviceTime, timeToWork);
					setHoursOptions(dates);
				}
				if (schedule.length > 0){
					// console.log('Citas Agendadas: '+schedule.length);
					for (var i = 0; i < schedule.length; i++) {
						let fecha = schedule[i].fecha;
						let duracion = schedule[i].horas_asignadas;
						hora = parseInt(fecha.slice(11, 13))
						// console.log('Cita '+(i+1)+' ['+hora+'hrs] horas asignadas: ' + duracion);

						// Si dura mas de una hora el servicio agendado
						if (duracion > 1) {
							// console.log("** Cita con duración de mas de 1 hora: ("+duracion+" horas)")
							for (let l = 0; l < timeToWork.length; l++) {
								if (timeToWork[l][0] == hora) {
									for (var d = 0; d < duracion; d++) {
										timeToWork[l+d][1] = 0;
										if (d>0) {
											// console.log('Tiempo Extra detectado desabilitado: '+ timeToWork[l+d][0]);
										}
									}
								}
								continue;
							}
						}
						// Si solamente dura una hora el servicio agendado
						if (duracion == 1) {
							for (let l = 0; l < timeToWork.length; l++) {
								if (timeToWork[l][0] == hora) {
									timeToWork[l][1] = 0;
								}
								continue;
							}
						}

						dates = checkHours(serviceTime, timeToWork);
						if (dates == 0) {
							showHoras(false);
							return false;
						}
						setHoursOptions(dates);
					}
				}
				// console.log('timeToWork: '+timeToWork);
				// console.log('dates: '+dates);
				hideLoader();
			});
		});
	})
}