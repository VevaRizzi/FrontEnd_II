console.log('getElementsByTagName', document.getElementsByTagName('h1'))

console.log('getElementsByClassName', document.getElementsByClassName('teste'))

console.log(document.getElementById('TituloPrincipal'))
//não precisa usar a hastag pq  este getelementbyID só funciona em ID! 

console.log(document.querySelector('h1'))
//queryselector é uma função que substitui um getelement



// Obtendo vários elementos através do nome de uma Tag
console.log('getElementsByTagName', document.getElementsByTagName('h1'))

// Obtendo vários elementos através do nome de um classe do CSS
console.log('getElementsByClassName', document.getElementsByClassName('teste'))


// Obtendo um elemento através do nome de um Id
console.log('getElementById', document.getElementById('tituloPrincipal'))

// Obtendo um elemento através do Query Selector, onde podemos obter tanto pro nome das Tags, Classes e Ids
console.log(document.querySelector('#tituloPrincipal'))

// Armazenando o valor retornado da busca pelo Id #tituloPrincipal
var tituloPrincipal = document.querySelector('#tituloPrincipal')

// Alterando propriedades do elemento tituloPrincipal
tituloPrincipal.style.color = '#202020'
tituloPrincipal.style.fontSize = '48px'




console.log(document.querySelector('body'))
console.log(document.querySelector('h1'))
console.log(document.querySelector('.conteudo'))
console.log(document.querySelector('section'))
console.log(document.querySelector('#item1'))
console.log(document.querySelector('#item2'))
console.log(document.querySelector('#item3'))
console.log(document.querySelector('#item1'))
console.log(document.querySelector('#item2'))
console.log(document.querySelector('#item3'))
console.log(document.querySelector('p'))
console.log(document.querySelector('#card1'))
console.log(document.querySelector('h2'))
