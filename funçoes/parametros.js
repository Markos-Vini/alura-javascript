// parametros de função

function soma(num1, num2){
    return num1 + num2
}

console.log(soma(2, 5))
console.log(soma(-10, 6))
console.log(soma(200, 15))


function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade('Marcos', 31))


function multiplica(numero1, numero2){
    return numero1 * numero2
}
                         // (4+5)  *  (3+3)
console.log(multiplica(soma(4, 5), soma(3, 3)))