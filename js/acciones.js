// JavaScript Document

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){

	},false);

		function  onDeviceReady(){
			$('#posicion')on('click'function(){
				getPosition();
			})
		}

		function getPosition(){
			var options = {
				enableHighAccuracy : true,
				maximunAge: 3600000
			}
			var watchID= navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

			function onSuccess(position){
				alert('latitude:' +position.coords.latitude + '\n' +
					'longitude:'  +position.coords.longitude + '\n');
			}

			function onError(error){
				alert('code:' + error.code +'\n'+'menssage:' error.menssage+'\n');
			}
		}
	
	
});//document
		
