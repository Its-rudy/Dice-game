var randomNumber1 = Math.floor((Math.random(1) * 6) + 1);
var randomNumber2 = Math.floor((Math.random(1) * 6) + 1);
let art = document.querySelector(".img1");
let art1 = document.querySelector(".img2");

var winnerText = document.querySelector('.container h1');

function diceValue1(randomNumber, img) {
	
	if (randomNumber === 1) {
		img.setAttribute('src','images/dice1.png');
	} else if (randomNumber === 2) {
		img.setAttribute('src','images/dice2.png');
	} else if (randomNumber === 3) {
		img.setAttribute('src','images/dice3.png');
	} else if (randomNumber === 4) {
		img.setAttribute('src','images/dice4.png');
	} else if (randomNumber === 5) {
		img.setAttribute('src','images/dice5.png');
	} else if (randomNumber === 6) {
		img.setAttribute('src','images/dice6.png');
		}
	
}

function winner(randomNumber1, randomNumber2) {
	if (randomNumber1 === randomNumber2) {
		winnerText.textContent = 'Draw';
	} else if (randomNumber1 > randomNumber2) {
		winnerText.innerHTML = 'Player 1 Won'
	} else {
		winnerText.innerHTML = 'Player 2 Won'
	}
}

diceValue1(randomNumber1,art);
diceValue1(randomNumber2, art1);
winner(randomNumber1, randomNumber2)
var reload = document.querySelector('.press')
reload.addEventListener('click', () => {
	location.reload();
})