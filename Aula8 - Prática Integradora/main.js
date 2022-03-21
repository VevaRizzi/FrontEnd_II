let buttonReference = document.querySelector('#button')

let botaoReferencia = document.querySelector('#submit')
botaoReferencia.addEventListener('click', function(event){
    //o que irá acontecer (function) quando eu clicar (click) no meu parâmetro (variavel).
    //event pega do addEvent... Mas caso queira usar em outro lugar, mude o parametro.
    event.preventDefault()
})