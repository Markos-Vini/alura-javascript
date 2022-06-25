class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email          //Classe Cliente com suas propriedades
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor    // método (uma função que executa no contexto de um objeto)
    }

    exibirSaldo(){
        console.log(this.saldo)   // método (uma função que executa no contexto de um objeto)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const marcos = new ClientePoupanca("Marcos", "marcos@email.com", "12312322", 100, 200)

console.log(marcos)

marcos.depositar(50)
marcos.depositarPoupanca(50)

console.log(marcos)