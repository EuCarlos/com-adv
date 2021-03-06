const express = require("express");
const app =  express();
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyParser =  require('body-parser')
const Registro =  require('./models/Registros')

// Template engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars')

//arquivos estaticos
app.use(express.static('/public'));
app.use('/_css', express.static(__dirname + '/public/_css'));
app.use('/_js', express.static(__dirname + '/public/_js'));
app.use('/_assets', express.static(__dirname + '/public/_assets'));

// body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Rota pagina inicial
app.get("/", function(req, res){
    res.sendFile(__dirname + "/_html/index.html");
});

// Rota amostragem dos registros criados no BD
app.get("/registros", function(req, res){
    Registro.findAll({order: [['id', 'DESC']]}).then(function(registros){
        res.render('home', {registros: registros })
    }).catch(function(erro){
        res.render('paginaErro')
    })
})

// Rota para apagar algum registro no BD
app.get("/delete/:id", function(req, res){
    Registro.destroy({where: {'id': req.params.id}}).then(function(){
        res.render('paginaSucesso')
    }).catch(function(erro){
        res.render('paginaErro')
    })
})

// Metodo POST (Inserindo dados no BD)
app.post("/registrar", function(req, res){
    Registro.create({
        nome: req.body.nome,
        tel: req.body.telefone,
        email: req.body.email,
        estado: req.body.estado,
        biografia: req.body.biografia
    }).then(function(){
        res.render('paginaSucesso')
    }).catch(function(erro){
        res.render('paginaErro')
    })
});

app.listen(8081, function(){
    console.log('servidor funcionando na porta')
});