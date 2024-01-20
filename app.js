let listaDeNumerosSorteados = [];
let NumeroLimite = 10 ;
let numeroSecreto = GerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNatela(tag,texto) { 
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;   
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',
    {Rate:1.2});      
}

function exibirMensagemInicial () { 
    exibirTextoNatela('h1', 'jogo do numero secreto');
    exibirTextoNatela('p', 'escolha um numero entre 1 e 10');
}
    exibirMensagemInicial();

function verificarChute(){
   let chute = document.querySelector ('input').value;

if (chute == numeroSecreto) {
    exibirTextoNatela('h1','acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

    let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
   
    exibirTextoNatela('p', mensagemTentativas);  
    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    if (chute > numeroSecreto) {
        exibirTextoNatela('p','o numero secreto e menor');
    } else {
        exibirTextoNatela('p','o numero secreto e maior');
     }
     tentativas ++ ;   
     limparCampo ();
    }
}

function GerarNumeroAleatorio() {
 let NumeroEscolhido = parseInt(Math.random() * NumeroLimite + 1);
 let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
 if (quantidadeDeElementosNaLista == NumeroLimite ){
    listaDeNumerosSorteados = [];
 }

 if (listaDeNumerosSorteados.includes(NumeroEscolhido)){
    return GerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(NumeroEscolhido);
        console.log(listaDeNumerosSorteados)
     return NumeroEscolhido;  
    }
 }  
 function limparCampo (){
    chute = document.querySelector ('input');
        chute.value = '' ;
}
function reiniciarJogo (){
    numeroSecreto = GerarNumeroAleatorio();
    limparCampo();
    tentativas = 1 ;
    exibirMensagemInicial();
    document.getElementById('reinicar').setAttribute('disable',
    true);
   }
   

