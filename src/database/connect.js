const mongoose = require('mongoose')

const connectToDataBase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@estudosnode.k6rvj.mongodb.net/database?retryWrites=true&w=majority`, (error) => {
        if (error) {
            return console.log('Ocorreu um erro ao se conectar com o banco de dados:', error)
        }

        console.log('Banco conectado com sucesso!')
    })
}

module.exports = connectToDataBase