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