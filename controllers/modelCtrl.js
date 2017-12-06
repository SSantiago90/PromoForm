var model = require('../models/model.js');
var mongoose = require('mongoose');

exports.new = function(req,res,next){	
	res.render('ok.ejs');
};

exports.crear = function (req, res,next) {
  if (!req.body) return res.sendStatus(400);
  var particip = model.Person(req.body).save(function(err){
        if(err) throw err;
        console.log('uploaded');   
        res.render('gracias.ejs', {'nombre' : req.body.nombre});
   });
};

 