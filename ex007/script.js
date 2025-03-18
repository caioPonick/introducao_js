function mensagemPersonalizada(nome, mensagem='Olá'){
    console.log(mensagem + " " + nome);
}
mensagemPersonalizada(prompt("Qual o seu nome? "));