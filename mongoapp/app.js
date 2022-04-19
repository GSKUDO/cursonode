// carregando modulos
const express = require('express')
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require("./routes/admin")
const path = require("path")
const mongoose = require("mongoose")


// configurações
    // Body parser
        app.use(express.urlencoded({extended:true}))
        app.use(express.json())
    
    // handlebars
        app.engine('handlebars', engine({defaultLayouts: 'main'}))
        app.set('view engine', 'handlebars')

    // mongoose
        mongoose.connect('mongodb://127.0.0.1/mongoapp').then (() => {
            console.log("conectado com sucesso")
        }).catch((err) => {
            console.log("erro" +err)
        })

    // public
        app.use(express.static(path.join(__dirname, "public")))


// rotas
    app.use("/admin", admin)


//outros
const PORT = 8081
app.listen(PORT, ()=>{
    console.log("Servidor Rodando")
})

