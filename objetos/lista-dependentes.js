const cliente = {
    nome:"André",
    idade:36,
    cpf:"21321356465",
    email:"andre@email.com",
    fones: ["5592469875", "5512364578"],
    dependentes: [{    // transformando uma objeto em array
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}
//usando um metodo de array para adicionar um novo dependente
cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

const filhaMaisNova = cliente.dependentes.filter
(dependente => dependente.dataNasc === "04/01/2014")

console.log(filhaMaisNova[0].nome)