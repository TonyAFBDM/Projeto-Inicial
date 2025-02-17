//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//array para armazenar os nomes
let listaDeNomes = []

//função para adcionar nomes a lista
function adicionarAmigo(){
    console.log('botãoo funcionando corretamente');
    //pega o valor do input
    let Nome = document.querySelector("#amigo").value; 

    //verifica se a caixa não está vazia
    if (Nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    //adiciona o nome a lista 
    listaDeNomes.push(Nome)
    console.log(listaDeNomes)

    //limpar caixa de entrada 
     document.querySelector("#amigo").value = "";

    atualizarLista();

}
//Função para atualiza a lista 
function atualizarLista(){
    let listaHTML = document.querySelector('#listaAmigos')
    listaHTML.innerHTML = "" // limpa a lista atual 
//loop para percorrer a (variavel/array) listaDeNomes
    for(let i = 0; i <listaDeNomes.length; i++){
        const li = document.createElement('li'); //cria um novo elemente <li>
        li.textContent = listaDeNomes[i]; //define o conteudo do elemente <li> com o nome 
        listaHTML.appendChild(li); //adiciona o <li> a lista 


    } 
}
//Função para selecionar um nome aleatório 
function sortearAmigo(){
    // irá gerar um numero aleatorio entre 0 e o numero da variavel/array
    let numeroAleatorio = Math.floor(Math.random() * listaDeNomes.length); 
    // Usa o numeroAleatorio para selecionar um nome da lista
    let nomeEscolhido = listaDeNomes[numeroAleatorio];
   
    document.getElementById("resultado").innerHTML = `O amigo sorteado foi: <strong>${nomeEscolhido}</strong>`;

    console.log(nomeEscolhido) 
 
}