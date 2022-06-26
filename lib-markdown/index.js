import chalk from 'chalk'
import fs from 'fs'

function tratarErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'))
}

function pegandoArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8'
    fs.readFile(caminhoDoArquivo, encoding, (erro,texto) => {
        if (erro) {
            tratarErro(erro)
        }
        console.log(chalk.green(texto))
    })
}

pegandoArquivo('./arquivos/texto1.md')