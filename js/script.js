//console.log("Tavarez");

// CREARE UN ARRAY CON E-MAIL
let stampContainer = document.getElementById('box');
const btnElement = document.querySelector('.btn');



const mailList = [
	"rfernandez@gmail.com",
	"v.micov@outlook.com",
	"avramovic.a@gmail.com",
	"zobradovic@thecoach.com",
];

// //console.log(mailList);

// // CONTROLLARE SE LA MAIL E' PRESENTE NEL MIO ARRAY

btnElement.addEventListener('click', function (){
	console.log('click')
	let choise = document.getElementById("e-mail");
	let mail = choise.value;
	let message = '';
	const addBtnElement = document.querySelector('.d-none');

	message = "Non sei registrato, ma puoi rimediare!"
	
	addBtnElement.classList.toggle('d-none')

	addBtnElement.addEventListener('click', function () {
		mailList.push(mail);
		console.log(mailList)
		addBtnElement.classList.toggle('d-none')
		stampContainer.innerHTML = 'Ottimo! Ti sono stati addebitati 10.000€!'
	})
	

	for (let i = 0; i < mailList.length; i++) {
		//console.log(i, mailList[i]);

		if (mail === mailList[i]) {
			message = "Sei già dei nostri!";
			addBtnElement.classList.toggle('d-none')
		} 
	}
	
	stampContainer.innerHTML = message
	
})


// // // STAMPARE ADEGUATO RISULTATO

// printResult.innerHTML = message;

// // GENERARE NUMERO RANDOM TRA 1 E 6 PER UTENTE E UNO PER PC
// // dichiarare due variabili con numeri generati random, uno per uno
// let randomUtente = Math.floor(Math.random() * 6 + 1);
// let randomPc = Math.floor(Math.random() * 6 + 1);

// console.log(randomUtente, randomPc);

// // STABILIRE IL VINCITORE
// // confrontare quali tra i due è più altro
// let gameMessage = "Hai perso!";

// if (randomUtente > randomPc) {
// 	gameMessage = "Hai vinto!";
// }

// console.log(gameMessage);

// // stampare se ha vinto o meno

// alert(gameMessage);
