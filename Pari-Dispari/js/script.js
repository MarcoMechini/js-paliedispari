
//DATI
const userOddEven = prompt('Scegli Pari o Dispari', 'pari').toLocaleLowerCase();
const userNumber = parseInt(prompt('Scegli un numero tra 1 e 5', '2'));

let min = 1;
let max = 5;

const pcNumber = randomNumber(min, max);

console.log(`Hai scelto ${userOddEven}`);
let message = '';
console.log('PC', pcNumber);
console.log('User', userNumber);



//BUSINES LOGIC
let result = oddEven(userNumber, pcNumber)

if (userOddEven === result) {
    console.log('Hai vinto');
} else {
    console.log('Hai perso');
}

//FUNCTION

/**
 * Generate a rondom number between min and max
 *
 * @param {number} max
 * @param {number} min
 * @returns {number}
*/
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Description placeholder
*
* @param {number} userNumber
* @param {number} pcNumber
* @returns {string}
*/
function oddEven(userNumber, pcNumber) {

    let numFin = userNumber + pcNumber;
    let flag;

    if (numFin % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}

