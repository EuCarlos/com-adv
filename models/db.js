const Sequelize = require('sequelize');
// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: "localhost",
//     dialect: "mysql"
// })

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/db.sqlite'
});

module.exports = { 
    Sequelize: Sequelize, 
    sequelize: sequelize
}