//console.log("Tavarez");

// CREARE UN ARRAY CON E-MAIL

const mailList = [
	"rfernandez@gmail.com",
	"v.micov@outlook.com",
	"avramovic.a@gmail.com",
	"zobradovic@thecoach.com",
];

const printResult = document.getElementById("result");
//console.log(mailList);
// CHIEDERE A UTENTE SUA MAIL CON PROMPT

const userMail = prompt("Inserisci il tuo indirizzo mail");
//console.log(userMail);

// CONTROLLARE SE LA MAIL E' PRESENTE NEL MIO ARRAY

let message = "Non sei registrato";

if (userMail >= mailList) {
	message = "Sei già dei nostri!";
}

// STAMPARE ADEGUATO RISULTATO

printResult.innerHTML = message;
