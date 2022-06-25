const clientes = [
    {
        nome: "André",
        cpf: "123123123",
        dependentes: [{
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }],
    },
    {
        nome: "Juliana",
        cpf: "321321321",
        dependentes: [{
            nome: "Sophie",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }],
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)