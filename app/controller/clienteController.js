var clienteModel = require('../models/clienteModel')();
// var { validationResult } = require('express-validator');

module.exports.index = function(req,res){
    clienteModel.all(function(erro,resultado){
        res.render('site/pag1',{clientes:resultado,erros:{}});
    });
};

module.exports.store = function(req,res){
    var dados = req.body;
    
//validacão
    // var validacaoErros = validationResult(req);
    
    // if(validacaoErros.errors != []){
    //     console.log(validacaoErros)
    //     console.log(validacaoErros.errors != [])
    //     clienteModel.all(function(erro,resultado){
    //         res.render('site/pag1',{clientes:resultado,erros:validacaoErros});
    //     });
    //     return;
    // }
//fim validacão
    console.log("Chegou aqui")
    clienteModel.save(dados, function(erro,resultado){
        if(!erro){
        res.redirect('/pag1');
        }else{
            console.log ('Erro ao adicionar cliente!');
            res.redirect('/pag1');
        }
    });
};

module.exports.show = function(req,res){
    clienteModel.find(req.params.id,function(erro,resultado){
        if(resultado[0] && !erro){
            res.render('site/detalhe',{cliente:resultado[0]});
        }else{
            console.log ('Cliente não existe!');
            res.redirect('/pag1');
        }
       
    });
};
