window.onload = function(){

	var recognition = new webkitSpeechRecognition();
	recognition.lang = "pt-BR";
	recognition.continuous = true;

	recognition.onresult = function(event){

		var busca = "";
		for (var i = event.resultIndex; i < event.results.length; i++) {

			if (event.results[i].isFinal){
				busca += event.results[i][0].transcript.trim().toLowerCase();
			}
		}

		// if (busca.indexOf("buscar por") > -1) {

		// 	busca = busca.substring(11,busca.length);

		// 	let url = "https://www.google.com/search?q=" + busca;

		// 	window.open(url);

		// }else{

			// busca = busca.split(" ").join("+")
			// let api_key = "IuFzLL4qAtOzICPwH4CRpTIygyE8y4ms";
			// let url = "https://api.giphy.com/v1/gifs/search?q="+busca+"&api_key="+api_key+"&limit=5";
			// var xhr = $.get(url);

			// xhr.done(function(result){
			// 	console.log(result);
			// 	let qtd = result.data.length;

			// 	if (qtd > 0) {

			// 		let  numero = Math.floor(Math.random() * qtd);
			// 		let image_url = result.data[numero].images.downsized.url;
			// 		 document.getElementById("img_result").src = image_url;

			// 	}

			// });

		// }

		document.getElementById('result').innerHTML = busca;

	}

	recognition.start();

}