var model = require('../models/model.js');
var mongoose = require('mongoose');

exports.new = function(req,res,next){	
	res.render('ok.ejs');
};

exports.crear = function (req, res) {
  if (!req.body) return res.sendStatus(400);
  //var particip = model.Person(req.body);
  console.log('particip');
  res.render('gracias.ejs');
};

 