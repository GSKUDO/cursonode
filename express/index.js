const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/post')

//config 
    // template engine 
    app.engine('handlebars', handlebars({defautLayout: 'main',
    runtimeOptions: {
              allowProtoPropertiesByDefault: true,
              allowProtoMethodsByDefault: true,
            }}))

    app.set('view engine', 'handlebars')

    // Body parser 

        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

// Rotas

app.get('/', function(req, res){
    Post.findAll().then(function(posts){
        res.render('home', {posts: posts})
    })
})

app.get("/cad", function(req, res){
    res.render('formulario')
})

app.post("/add", function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Houve um erro: "+ erro)
    })
})

app.get('/deletar/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("postagem deletada com sucesso")
    }).catch(function(erro){
        res.send("esta postagem nao existe "+erro)
    })
})


//rota com parametro 
//send so pode fazer um so 
app.get('/ola/:nome/:cargo', function(req, res){
    res.send("<h1> Ola </h1>"+req.params.nome + "<h2> seu cargo eh "+req.params.cargo+"</h2>");
})

app.listen(8081, function(){
    console.log("Servidor rodando no localhost:8081")
});