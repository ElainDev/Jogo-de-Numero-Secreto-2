//let titulo  = document.querySelector('h1');
//titulo.innerHTML = 'Game Number Secret';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let secretNumber = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;    
}

function exibirMensagemNaTela(versao) {
                 //tag , texto
    exibirTextoNaTela('h1', `Game Number Secret ${versao}`);
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');    
}

exibirMensagemNaTela(2);

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == secretNumber){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        // selecionando o elemento id e removendo o atributo 'disabled' para que o botão 'Novo Jogo' possa ser clicado
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else {
        if (chute > secretNumber) {
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero é maior');
        }
        tentativas++; //incrementa 
    }
    limparCampo();
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

//limpa o o input a cada tentativa
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    secretNumber = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemNaTela();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}