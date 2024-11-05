//DATI

//ricordarsi di mettere il lowerCase

let userWord = prompt('Inserisci parola per vedere se è palindroma', 'Yamamay').toLocaleLowerCase();
let reverseWord = palindroma(userWord);

console.log(userWord);
console.log(reverseWord);


if (userWord === reverseWord) {
    console.log('Questa parola è palindroma');
} else {
    console.log('Questa parola non è palindroma');
}

//BUSINES LOGIC

//FUNCTION

/**
 * Description placeholder
 *
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

