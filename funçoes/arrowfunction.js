function apresentar(nome){
    return `Meu nome é ${nome}`
}


const apresentarArrow = nome => `Meu nome é ${nome}`
const soma = (num1, num2) => num1 + num2

// Arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (numero1, numero2) => {
    if (numero1 || numero2 >= 10){
        return 'somente numeros de 1 a 9'
    } else {
        return numero1 + numero2
    }
}
