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

for (let i = 1; i <= numBoxes; i++) {
	let boxColor = '';

	if (i % 3 === 0 && i % 5 === 0) {
		boxColor = 'fizzbuzz';
	} else if (i % 5 === 0) {
		boxColor = 'buzz';
	} else if (i % 3 === 0) {
		boxColor = 'fizz';
	}

	boardbox.innerHTML += `<div class="box">
	<div id="content" class="boxcontent d-flex justify-content-center align-items-center ${boxColor}">
    ${i}
  </div>
</div>`;
}

// LO DO PER FATTO A METÀ, IL CODICE SOTTO FUNZIONA MA HA TROPPA ROBA, VOLEVO RIDURLA MA NON RIESCO A CAMBIARE IL VALORE DELLA I SENZA FAR SPARIRE TUTTO,

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
