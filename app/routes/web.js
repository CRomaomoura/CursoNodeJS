
var clienteController = require('../controller/clienteController'); 

module.exports = function(app){
    app.get("/",function(req,res){
        res.render('site/home');
    });
    
    app.get("/pag1",function(req,res){
        clienteController.index(req,res);
    });

    app.post("/pag1",function(req,res){
        clienteController.store(req,res);
    });

    app.get("/detalhe/:id",function(req,res){
        clienteController.show(req,res);
    });
};