//console.log("Tavarez");

// CREARE UN ARRAY CON E-MAIL

let choise = prompt(
	"Scrivi mail se vuoi sapere se sei registrato o play se vuoi giocare con me!"
);

if (choise === "mail") {
	const mailList = [
		"rfernandez@gmail.com",
		"v.micov@outlook.com",
		"avramovic.a@gmail.com",
		"zobradovic@thecoach.com",
	];

	const printResult = document.getElementById("result");
	// //console.log(mailList);
	// // CHIEDERE A UTENTE SUA MAIL CON PROMPT

	const userMail = prompt("Inserisci il tuo indirizzo mail");
	// //console.log(userMail);

	// // CONTROLLARE SE LA MAIL E' PRESENTE NEL MIO ARRAY

	let message = "Non sei registrato";

	if (userMail >= mailList) {
		message = "Sei già dei nostri!";
	}

	// // STAMPARE ADEGUATO RISULTATO

	printResult.innerHTML = message;
}

if (choise === "play") {
	// GENERARE NUMERO RANDOM TRA 1 E 6 PER UTENTE E UNO PER PC
	// dichiarare due variabili con numeri generati random, uno per uno
	let randomUtente = Math.floor(Math.random() * (6 - 1 + 1) + 1);
	let randomPc = Math.floor(Math.random() * (6 - 1 + 1) + 1);

	console.log(randomUtente, randomPc);

	// STABILIRE IL VINCITORE
	// confrontare quali tra i due è più altro
	let gameMessage = "Hai perso!";

	if (randomUtente > randomPc) {
		gameMessage = "Hai vinto!";
	}

	console.log(gameMessage);

	// stampare se ha vinto o meno

	alert(gameMessage);
}
