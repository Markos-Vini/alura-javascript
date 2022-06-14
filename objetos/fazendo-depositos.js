const cliente = {
    nome: "André",
    idade: 36,
    cpf: "21321356465",
    email: "andre@email.com",
    fones: [ "5592469875", "5512364578" ],
    dependentes: [
        {    
            nome: "Sara Silva",
            parentesco: "filha",
            dataNasc: "20/03/2011" },
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)