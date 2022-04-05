// Exercício aplicando: 
// >> trim(), toUpperCase(), toLowerCase(), concat() e replace().

let inputNomeReferencia = document.querySelector('#inputNome')
let inputSobrenomeReferencia = document.querySelector('#inputSobrenome')
let botaoConcluirCadastroReferencia = document.querySelector('#botaoConcluirCadastro')
let usuario = {}

botaoConcluirCadastroReferencia.addEventListener('click', function(event){

    event.preventDefault()

    usuario.nome = inputNomeReferencia.value.trim().toUpperCase()
    usuario.sobrenome = inputSobrenomeReferencia.value.trim().toLowerCase()

    console.log(usuario.nome, usuario.sobrenome);
    console.log(usuario.nome.concat(usuario.sobrenome));
    console.log(usuario.nome.replace(usuario.sobrenome));
   
})
