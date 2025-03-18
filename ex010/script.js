function verificarPalindromo(str) {
    let separaString = str.split("");
    let inverteArray = separaString.reverse();
    let juntaArray = inverteArray.join("");
    return console.log(str === juntaArray);
}
let str1 = prompt("Digite uma palavra, se for um palíndromo retornará true.");
verificarPalindromo(str1);