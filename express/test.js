const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'gislaine1', {
    host:"localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso")
}).catch(function(erro){
    console.log("erro" +erro)
})

// model

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//Postagem.sync({force:true})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

//Usuario.sync({force:true})

//Postagem.create({
  //  titulo: "titulo",
   // conteudo: "ceiowocwenceo"
//})

