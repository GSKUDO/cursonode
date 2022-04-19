// conexão com o banco de dados Mysql

const Sequelize = require('sequelize')
const sequelize = new Sequelize('postagens', 'root', 'gislaine1', {
    host:"localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso")
}).catch(function(erro){
    console.log("erro" +erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}