const recognition = new webkitSpeechRecognition();

const newRecordButton = document.getElementById('new-record');
const saveRecordForm = document.getElementById('save-record');
const saveRecordButton = document.getElementById('save-record-button');
const resultArea = document.getElementById('result');

recognition.lang = "pt-BR";
recognition.continuous = true;

speech = () => {
	recognition.onresult = function(e){
		for (var i = e.resultIndex; i < e.results.length; i++) {
			(e.results[i].isFinal) ? resultArea.value += e.results[i][0].transcript.trim().toLowerCase(): '' ;
		}
	}
	recognition.start();
	saveRecordButton.classList.remove('d-none');
}

saveSpeech = (e) => {
	e.preventDefault();
	recognition.stop();

	let form = new FormData(saveRecordForm);

	fetch("/create-record", {
		method: "POST",
		body: form
	})
	.then(res => res.json())
    .then(response => {
		console.log(response);
    })
    .catch(err => {
        alert(err)
    });;
	
}

newRecordButton.addEventListener('click', speech);
saveRecordForm.addEventListener('submit', saveSpeech);