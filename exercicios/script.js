/* EX001
function verificarPar(numero) {
    if ((numero%2) === 0) {
        alert(numero + " é par.");
    } else {
        alert(numero + " é ímpar.");
    }
}
verificarPar(prompt("Digite um número >>>"));
*/

/* EX002
function calcular(n1, n2){
    let soma = Number(n1) + Number(n2);
    let sub = n1 - n2;
    let mult = n1 * n2;
    let div = n1 / n2;
    alert("A soma dos dois número é " + soma);
    alert("A subtração dos dois número é " + sub);
    alert("A multiplicação dos dois número é " + mult);
    alert("A divisão dos dois número é " + div);
}
calcular(prompt("Digite um número: "), prompt("Digite outro: "));
*/

/* EX003
function contagemRegressiva() {
    for(let n = 10; n>=1; n--){
        console.log(n);
    }
}
contagemRegressiva();
*/

/* EX004
function inverterTexto(str) {
    let separaString = str.split("");
    let inverteArray = separaString.reverse();
    let juntaArray = inverteArray.join("");
    alert(juntaArray);
}
inverterTexto(prompt("Digite uma palavra."));
*/

/* EX005
function contaLetras(str){
    console.log(str);
    alert(str + " tem " + str.length + " letras.");
}
contaLetras(prompt("Digite uma palavra: "));
*/

/* EX006
let carro = {
    marca: "Jeep",
    modelo: "Commander",
    ano: 2022  
}
alert(carro.modelo);
*/

/* EX007
function mensagemPersonalizada(nome, mensagem="Olá"){
    alert(mensagem + " " + nome);
}
mensagemPersonalizada(prompt("Qual o seu nome? "));
*/

/* EX008
function media(n1, n2, n3) {
    let soma = Number(n1) + Number(n2)+ Number(n3);
    let div = soma/3;
    alert("A média é " + div);
}
media(prompt("Digite um número: "), prompt("Digite outro número: "), prompt("Digite um último número: "));
*/

/* EX009
for(let n = 1; n<=20; n++) {
    if ((n%3)===0){
        console.log(n + ": Múltiplo de 3");
    } else {
        console.log(n + ": não é múltiplo de 3");
    }
}
*/

/* EX010
function verificarPalindromo(str) {
    let separaString = str.split("");
    let inverteArray = separaString.reverse();
    let juntaArray = inverteArray.join("");
    return alert(str === juntaArray);
}
let str1 = prompt("Digite uma palavra, se for um palíndromo retornará true.");
verificarPalindromo(str1);
*/