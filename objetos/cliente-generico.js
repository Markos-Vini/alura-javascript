function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const marcos = new Cliente("Marcos", "12321312", "marcos@email.com", 100)

console.log(marcos)
