import chalk from 'chalk'
import fs from 'fs'


function pegandoArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8'
    fs.readFile(caminhoDoArquivo, encoding, (_,texto) => {
        console.log(chalk.green(texto))
    })
}

pegandoArquivo('./arquivos/texto1.md')