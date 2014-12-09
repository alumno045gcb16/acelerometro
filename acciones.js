// JavaScript Document


$(document).ready(function(e) {
    // watchID se refiere a la aceleracion 'actual'
	//
	var watchID = null;
	
	document.addEventListener("deviceready", Dispositivo_Listo, false);
	
	
	// Cuando esta listo el dispositivo
	//
	function Dispositivo_listo() {
		Comienza();
	}
	
	// Empieza la 'observacion' de la aceleracion
	//
	function Comienza() {
		
		// Actualiza la aceleracion en segundos
		//
		var opciones ={ frequency: 2000 };
		
		watchID = navigator.acceleromer.watchAcceleration(correcto, Error, opciones);
		navigator.geolocation.getCurrentPosition(localiza, ErrorLocalizacion);
	}
	
	// Detiene la 'observacion' de la aceleracion
	//
	function Detente() {
		if (watchID) {
			navigator.accelerometer.clearWatch(watchID);
			watchID = null;
		}
	}
	
	// correcto: Toma una capturade la aceleracion
	//
	function Correcto(acceleration) {
		var element = document.getElementById('acelerometro');
		
		element.innerHTML = 'Aceleracion en X: ' + acceleration.x + '<br />' +
		                    'Aceleracion en Y: ' + acceleration.y + '<br />' +
							'Aceleracion en Z: ' + acceleration.z + '<br />' +
	                        'Intervalo: '      + acceleration.timestamp + + '<br />';
	}
	
	//Error: Falla al obtener la aceleracion
	//
	function Error() {
		alert('error!');
	}
	// Exito al localizar
	
	function Localiza(posicion) {
		var element = document.getElementById('geolocalizacion');
		element.innerHTML = 'latitud: ' + posicion.coords.latitude + '<br />' +
		                    'longitud: ' + posicion.coords.longitude + '<br />' +
							'Altitud: ' + posicion.coords.altitude + '<br />' +
							'Precision: ' + posicion.coords.accuracy + '<br />' +
							'Precision de Altitud: ' + posicion.coords.altitudeAccuracy + '<br />' +
							'Direccion: ' + posicion.coords.heading + '<br />' +
							'Velocidad: ' + posicion.coords.speed + '<br />' +
							'Intervalo: ' + posicion.timestamp + '<br />';
	}
	
	// Error en la Geolocalizacion
	//
	function ErrorLocalizacion(error) {
		alert('coigo: '  + error.code + '\n' +
		'mensaje: ' + error.message + '\n');
	}
});// documento ready