
//https://docs.google.com/document/d/1b6zW2DQT5PSpwgATbqWq75332Os_EDCjTmLOU4zMJ1w/edit#heading=h.7g7xzfiv6u36
// ATIVIDADE
//exeMplo https://www.figma.com/file/DKPz10CYUNqcYt2GPs0dpx/Untitled?node-id=0%3A1
let buttonReference = document.querySelector('#button')
//dica: nome de variavel, nome do botão+Reference.

let titleReference = document.querySelector('#titleHint')
let titleInputReference = document.querySelector('#titleInput')
let mensagemSucessoReference = document.querySelector()

//Evento que verifica se a página já foi verificada
window.onload = function () {
    //tudo que for escrito dentro de mim, será executado apeans quando a página inteira carregar
    console.log('Agora a página está carregada completamente')

}

console.log('Estou Vivo')
console.log(window)



function mostrarMensagem() {

    alert('Olá, sou uma mensagem')
}

function manipularSugestao(){
    titleReference.classList.toggle('show')
}

//https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener

buttonReference.addEventListener('click', mostrarMensagem)
    //'click, function() - function como segundo parametro

    buttonReference.onclick = function (event) {
        //assim vc clicará no botão "click me" e aparece o box de alert
        //com a mensagem que está armazeanada na funcão aqui abaixo

        mostrarMensagem()
        event.preventDefaut()
    }


titleInputReference.addEventListener('mouseover')
    //vamos usar prefixo de mouse
    //primeiro é o nome do que irá fazer, o segundo é o que ele fará quando chamado

titleInputReference.addEventListener('keydown', function(event){
    console.log('digitando...')
} )
//mostra a mensagem dentro do quadro de preenchimento da informação do forms