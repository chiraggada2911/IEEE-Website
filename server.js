var express=require('express');
var routes=require('./routes/pages');
var app=express();
var bodyParser = require('body-parser');
var jsondata= require('./index.json');
var _und = require('underscore');
//
var MongoClient = require('mongodb').MongoClient;

//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000
var router = express.Router();

router.get('/', function(req, res){
res.json(jsondata);

})
router.post('/postdata', function(req,res){
if(req.body.Id && req.body.Title)
{
jsondata.push(req.body);
res.json(jsondata);
}
else
{
    console.log('please put some values to insert');
}

})
router.put('/updateapplied/:id', function(req,res){
if(req.params.id)
{
_und.each(jsondata , function(elem, index){
if(req.params.id === elem.Id){

    elem.Applied = "1";
}

})
res.json(jsondata);
}
else
{
    console.log('Invalid Request');
}

})
router.put('/updateapproved/:id', function(req,res){
if(req.params.id)
{
_und.each(jsondata , function(elem, index){
if(req.params.id === elem.Id){
    elem.Approved = "1";

}

})
res.json(jsondata);
}
else
{
    console.log('Invalid Request');
}

})

router.delete('/deletedata/:id', function(req, res) {
    getindextodelete = -1;
    if(req.params.id){

        _und.each(jsondata, function(elem,index){
if(elem.Id === req.params.id){
    getindextodelete  = index;


}

        })
        if(getindextodelete > -1)
        {
            jsondata.splice(getindextodelete ,1);
        }

    res.json(jsondata);
    }
    else{
        console.log('Please pass body elements with id');
    }
});
app.use('/api', router);


//set the template engine to ejs
app.set('view engine','ejs');

app.use(routes);
//express middleware so that we dont have to write a route for every stylsheet linked to an html file.
app.use('/assets',express.static('assets'));

app.use('/archive',express.static('archive'));


//listen on the declared port

app.listen(port);
