function contaLetras(str){
    str.length = 5;
    console.log(str);
    console.log(str + " tem " + str.length + " letras.");
}
contaLetras(prompt("Digite uma palavra: "));