const cliente = {
    nome:"André",
    idade:36,
    cpf:"21321356465",
    email:"andre@email.com",
    fones: ["5592469875", "5512364578"]
}
cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)

