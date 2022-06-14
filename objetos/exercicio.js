const colecionador = {
    nome: "Marcos Vinicius",
    idade: 31,
    tipoColecao: ["quadrinhos"],
    contato: "marcos@email.com",
    adicionarTipo: function(propriedade,tipo){
        this[propriedade].push(tipo)
    }
}

console.log(colecionador)

for(i =0; i < 4; i++) {
    colecionador.adicionarTipo("tipoColecao", "HQ"+i)
}

console.log(colecionador)

