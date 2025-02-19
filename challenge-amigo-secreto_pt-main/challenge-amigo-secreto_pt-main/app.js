//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let contaAmigo = 0;
let li = 0;

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo == '') {
        alert('Por favor, insira um nome.');
    }
    else {
        if (amigos.includes(nomeAmigo)) {
            alert('Você já incluiu este amigo na lista!'); 
            limparCampo();
        }
        else {
            amigos.push(nomeAmigo);
            exibirLista();
            limparCampo();
        }    
    }  
}

function exibirLista() {
    document.getElementById('nomeAmigos').innerHTML = '';
    for (contaAmigo = 0; contaAmigo < amigos.length; contaAmigo++) {
        let lista = document.getElementById('nomeAmigos').insertRow();
        lista.innerHTML = amigos[contaAmigo];
    }
}

function limparCampo() {
     document.querySelector('input').value = '';
     nomeAmigo = '';
}

function sortearAmigo() {
    if (amigos.length == 0){
        alert('Você não incluiu nenhum amigo na lista!'); 
    }
    else {
        let indiceMaximo = amigos.length;
        let indiceSecreto = parseInt(Math.floor(Math.random() * indiceMaximo));
        document.getElementById('resultado').innerHTML = 
            `O amigo secreto sorteado é: ${amigos[indiceSecreto]}`;
        limparCampo();
        document.getElementById('nomeAmigos').innerHTML = '';
        amigos=[];
    }
}