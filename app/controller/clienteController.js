var clienteModel = require('../models/clienteModel')();

module.exports.index = function(req,res){
    clienteModel.all(function(erro,resultado){
        res.render('site/pag1',{clientes:resultado});
    });
};

module.exports.store = function(){

};

module.exports.show = function(){

};
