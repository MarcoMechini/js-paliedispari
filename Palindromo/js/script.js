//DATI

let userWord = prompt('Inserisci parola per vedere se è palindroma', 'Yamamay').toLocaleLowerCase();
let reverseWord = palindroma(userWord);

console.log(userWord);
console.log(reverseWord);

//BUSINES LOGIC

userWord === reverseWord ? console.log('Questa parola è palindroma') : console.log('Questa parola non è palindroma');

//FUNCTION

/**
 * Description placeholder
 * @param {string} userWord
 * @returns {string}
 */

function palindroma(userWord) {
    let reverseWord = '';
    for (let i = userWord.length - 1; i >= 0; i--) {
        const curChar = userWord[i];
        reverseWord += curChar;
    }
    return reverseWord;
}

