const fs = require('fs')
const { join } = require('path')
const path = require('path')

// Criar uma pasta
// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//     if (error) {
//         return console.log('Erro:', error)
//     }

//     console.log('Pasta criada com sucesso')
// })


// Criar um arquivo
// fs.writeFile(path.join(__dirname, '/test', 'teste.txt'), 'Hello node!', (error) => {
//     if (error) {
//         return console.log('Erro:', error)
//     }

//     console.log('Arquivo criado com sucesso')

//     // Adicionar a um arquivo
//     fs.appendFile(path.join(__dirname, '/test', 'teste.txt'), 'Hello Word!', (error) => {
//         if (error) {
//             return console.log('Erro:', error)
//         }

//         console.log('Arquivo atualizado com sucesso!')
//     })

//     // Ler arquivo
//     fs.readFile(path.join(__dirname, '/test', 'teste.txt'), 'utf-8', (error, data) => {
//         if (error) {
//             return console.log('Erro:', error)
//         }

//         console.log(data)
//         console.log('Arquivo lido!')
//     })
// })

