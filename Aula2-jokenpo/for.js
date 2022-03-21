const numbers = [11, 2332, 3, 4, 15, 36]

// laços de repetição Rep+Array+Obj
console.log(numbers)
//o for passa por cada elemento da array
//e ao criar uma variavel(let number), ela representará cada elemento da array no momento que ela passar por ele em cada for.
for (let number of numbers){
    console.log(number)

}

for (let number of numbers){
    console.log(number + 10)

}

//objeto literal
const user = {
    name: 'Alow',
    age: 31,
    birthDate: '26/07/1990',
    userDetail: 'teste'
}

//console.log(user)
//console.log(user['name'])
//console.log(user[userDetail])
//usar fora ou usar dentro do for 

for(let userDetail in user){

    console.log(userDetail)
}
