var express=require('express');
var router=express.Router();


router.get('/',function(req,res){
  res.render('landingpage');
});

router.get('/home',function(req,res){
  res.render('homepage');
});

router.get('/committee',function(req,res){
  res.render('committee');
});

router.get('/newsletter',function(req,res){
  res.render('newsletter');
});

router.get('/mentorship',function(req,res){
  res.render('mentorship');
});

router.get('/wie',function(req,res){
  res.render('wie');
});

router.get('/industrialvisits',function(req,res){
  res.render('iv');
});

router.get('/gallery',function(req,res){
  res.render('gallery');
});

router.get('/workshops',function(req,res){
  res.render('workshops');
});

module.exports=router;
