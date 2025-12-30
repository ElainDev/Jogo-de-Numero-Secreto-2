//let titulo  = document.querySelector('h1');
//titulo.innerHTML = 'Game Number Secret';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let secretNumber = gerarNumeroAleatorio;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;    
}
                 //tag , texto
exibirTextoNaTela('h1', 'Game Number Secret');
exibirTextoNaTela('p','Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == secretNumber){
        exibirTextoNaTela('h1', 'Acertou');
        exibirTextoNaTela('p', 'Você descobriu o número secreto');
    } else {
        if (chute > secretNumber) {
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero é maior');
        }
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}