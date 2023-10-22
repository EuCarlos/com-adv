const Registro =  require('../models/Registros')

Registro.sync({ force: true })
console.log('Banco de dados criado')