import somar from "./somar.js"
import subtrair from "./subtrair.js"
import multiplicar from "./multiplicar.js"
import dividir from "./dividir.js"

let primeiroNumero = converterNumero(prompt('Insira o primeiro número.'))
let segundoNumero = converterNumero(prompt('Insira o segundo número.'))

function converterNumero(numero){
    return parseInt(numero)
}

let buttonSomar = document.querySelector('#somar')
let buttonSubtrair = document.querySelector('#subtração')
let buttonDividir = document.querySelector('#divisão')
let buttonMultiplicar = document.querySelector('#multiplicação')
let primeiroNumeroReference = document.querySelector('#primeiroNumero')
let segundoNumeroReference = document.querySelector('#segundoNumero')

console.log('Resultado da soma: '+ somar(primeiroNumero, segundoNumero))
console.log('Resultado da subtração: '+ subtrair(primeiroNumero, segundoNumero))
console.log('Resultado da multiplicação: '+ multiplicar(primeiroNumero, segundoNumero))
console.log('Resultado da divisão: '+ dividir(primeiroNumero, segundoNumero))

function processar(operacao){
    let primeiroNumeroTratado = Number(primeiroNumeroReference.value)
    let segundoNumeroTratado = Number(segundoNumeroReference.value)
    
    switch(operacao){
        case 'somar':
            somar(primeiroNumeroTratado, segundoNumeroTratado)
                break
        case 'subtrair':
            subtrair(primeiroNumeroTratado, segundoNumeroTratado)
            break

    }
}

function somar(primeiroNumero,segundoNumero){
    resultadoReferencia.innerHTML = primeiroNumero + segundoNumero
}

window.onload = function(){
    somarBotaoReferencia.addEvent

}