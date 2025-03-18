function inverterTexto(str) {
    let separaString = str.split("");
    let inverteArray = separaString.reverse();
    let juntaArray = inverteArray.join("");
    alert(juntaArray);
}
inverterTexto(prompt("Digite uma palavra."));