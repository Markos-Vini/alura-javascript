function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const raquel = new ClientePoupanca("Raquel", "1231231231", "raquel@email.com", 100, 200)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}
raquel.depositar(50)
raquel.depositarPoup(30)
console.log(raquel.saldo)
console.log(raquel.saldoPoup)