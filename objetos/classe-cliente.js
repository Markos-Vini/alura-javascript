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

const marcos = new Cliente("Marcos", "marcos@email.com", "12312322", 100) //instância da classe Cliente

marcos.exibirSaldo()

console.log(marcos)