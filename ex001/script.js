function verificarPar(numero) {
    if ((numero%2) === 0) {
        alert(numero + " é par.");
    } else {
        alert(numero + " é ímpar.");
    }
}
verificarPar(window.prompt("Digite um número: "));