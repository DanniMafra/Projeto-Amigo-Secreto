let amigos = []
function adicionarAmigo() {
    let campo = document.getElementById('amigo');
    let nome = campo.value;
    if (nome === '') {
        alert('Por favor, digite um nome');
        return; //Se estiver vazio, o código vai parar.
    }
    if (nomeJaExiste(nome)) {
        alert('Esse nome já está na lista de sorteio!');
        return;
    }
    amigos.push(nome);
    campo.value = '';
    atualizarLista();
}

function atualizarLista() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    let i = 0;
    while (i < amigos.length) {
        ul.innerHTML = ul.innerHTML + '<li>' + amigos[i] + '</li>';
        i = i + 1; 
    }
}

function enterParaAdicionar(event) {
    //alert(event.key);
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome para sortear!');
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    let escolhido = amigos[indice];
    let ulResultado = document.getElementById('resultado');
    ulResultado.innerHTML = '';
    ulResultado.innerHTML = '<li>' + escolhido + '<li>';
}

function nomeJaExiste(nome) {
    let i = 0;
    while (i < amigos.length) {
        if (amigos[i].toLowerCase() === nome.toLowerCase()) {
            return true;
        }
        i = i + 1;
    }
    return false;
}