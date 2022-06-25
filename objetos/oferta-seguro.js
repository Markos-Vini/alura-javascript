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

// Object.keys cria um array pegando todas as chaves que foi passada no objeto por parametro

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj)
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}
oferecerSeguro(cliente)