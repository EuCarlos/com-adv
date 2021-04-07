const db = require('./db')

const Registro = db.sequelize.define('registro', {
    nome: {
        type: db.Sequelize.STRING
    },
    tel: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    estado: {
        type: db.Sequelize.STRING
    },
    biografia: {
        type: db.Sequelize.TEXT
    }
})

// Registro.sync({force: true})
module.exports = Registro
