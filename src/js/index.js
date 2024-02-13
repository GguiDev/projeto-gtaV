/*

Objetivo 1- quando o usuario clicar no botao de seleção de plataformas deve abrir uma caixa com os botoes de seleção de plataforma

Passo 1- pegar o botao de seleçao de plataformas no JS pra poder verificar quando o usuario clicar em cima dele

Passo 2- pegar o elemento do conteudo que precisa ser mostrado

Passo 3- pegar o clique do usuario js

Passo 4- quando o usuario clicar, adicionar a classe ativo na listagem de plataformas dentro do botao pra que o conteudo apareça


Objetivo 2- caso a lista de botoes de plataforma ja esteja aparecendo e o usuario clicar em cima do botão, o conteudo deve ser escondido

Passo 1- verificar se o botao ja esta aberto, se sim, devemos remover a classe ativo

*/


//Objetivo 1- quando o usuario clicar no botao de seleção de plataformas deve abrir uma caixa com os botoes de seleção de plataforma

//Passo 1- pegar o botao de seleçao de plataformas no JS pra poder verificar quando o usuario clicar em cima dele

 const botao = document.querySelector(".btn-plataforma");

 // Passo 2 - pegar o elemento do conteudo que precisa ser mostrado
 const elementoPlataformas= document.querySelector(".btn-plataforma .plataformas");

 //Passo 3- Pegar o clique do usuario no js
 botao.addEventListener("click", ()=>{
    
    
 //Objetivo 2- caso a lista de botoes de plataformas ja esteja aparecendo e o usuario clicar em cima do botao, o conteudo deve ser escondido
 const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

 //Passo 1- verificar se o botao ja esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteudo novamente
 if(botaoEstaAberto){
    elementoPlataformas.classList.remove("ativo");
 }else{
    //Passo 4- quando o usuario clicar, adicionar a classe ativo na listagem de plataformas dentro do botao pra que o conteudo apareça
    elementoPlataformas.classList.add("ativo");
 }

 });
 