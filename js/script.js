// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const numBoxes = 100;

/*
`<div id="" class="box">
	<div class="boxcontent">

  </div>
</div>`
*/

const boardbox = document.getElementById('boardbox');
let content = '';

for (let i = 1; i <= numBoxes; i++) {
	let boxColor = '';

	if (i % 3 === 0 && i % 5 === 0) {
		boxColor = 'bg-fizzbuzz';
		content = 'FizzBuzz';
	} else if (i % 5 === 0) {
		boxColor = 'bg-buzz';
		content = 'Buzz';
	} else if (i % 3 === 0) {
		boxColor = 'bg-fizz';
		content = 'Fizz';
	} else {
		content = i;
	}

	console.log(content);

	boardbox.innerHTML += `<div class="box">
	<div id="content" class="boxcontent d-flex justify-content-center align-items-center ${boxColor}">
    ${content}
  </div>
</div>`;
}

// VERSIONE ALTERNATIVA (AGGIUSTATA QUELLA INIZIALE EHEHEHEHEHE)

/*
for (let i = 1; i <= numBoxes; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		boardbox.innerHTML += `<div class="box">
	<div class="boxcontent d-flex justify-content-center align-items-center fizzbuzz">
    FizzBuzz
  </div>
</div>`;
	} else if (i % 5 === 0) {
		boardbox.innerHTML += `<div class="box">
	<div class="boxcontent d-flex justify-content-center align-items-center buzz">
    Buzz
  </div>
</div>`;
	} else if (i % 3 === 0) {
		boardbox.innerHTML += `<div class="box">
	<div class="boxcontent d-flex justify-content-center align-items-center fizz">
    Fizz
  </div>
</div>`;
	} else {
		boardbox.innerHTML += `<div class="box">
	<div class="boxcontent d-flex justify-content-center align-items-center">
    ${i}
  </div>
</div>`;
	}
}
*/
