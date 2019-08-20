

module.exports = function(){
    var express = require('express');

var app = express();
app.set("view engine","ejs");
app.set("views","./app/views");

 var route = require("../app/routes/web");
 route(app);
 
 app.listen(8000, function(){
    console.log("localhost:8000");
});
};