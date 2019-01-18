var express=require('express');
var routes=require('./routes/pages');
var app=express();
//
var MongoClient = require('mongodb').MongoClient;

//set the template engine to ejs
app.set('view engine','ejs');

app.use(routes);
//express middleware so that we dont have to write a route for every stylsheet linked to an html file.
app.use('/assets',express.static('assets'));


//listen on the declared port

app.listen(3000);
