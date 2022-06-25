class Cadastro {
    constructor(nome, cpf, telefone, email) {
        this.nome = nome
        this.cpf = cpf
        this.telefone = telefone
        this.email = email
    }

}

class CadastroV2 extends Cadastro {
    constructor(nome, cpf, telefone, email, endereço) {
        super(nome, cpf, telefone, email)
        this.endereço = endereço
    }
}

const marcos = new CadastroV2("Marcos", "12312322", "12344321", "marcos@email.com", "Rua abc 78 - RJ")

console.log(marcos)