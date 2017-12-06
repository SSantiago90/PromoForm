var model = require('../models/model.js');
var mongoose = require('mongoose');

exports.new = function(req,res,next){	
	res.render('ok.ejs');
};

exports.crear = function (req,res,next) {
  if (!req.body) return res.sendStatus(400);    
  var usrip =  ''+req.ip;
  if (checkIp(usrip)){
  	console.log('already registered');
  	res.render('gracias-ya.ejs');
  	res.end();
  }
  var particip = model.Person(req.body).save(function(err){
        if(err) throw err;
        console.log('saved user');   
        saveIp(usrip);
        res.render('gracias.ejs', {'nombre' : req.body.nombre});
   });
};

function checkIp(userip){
	var regex = new RegExp(userip,'i');
	var found = undefined;
	model.ListIPs.findOne({ip: regex}, function(err,result){	  	
		if (err) throw err;
		console.log('result del check '+result);
	  	if(result) {
	  		found = true;
	  		console.log('found')
	  	}
	  	else {
	  		found = false;
	  		console.log('not found')
	  	};
 	});
 	return found;
}
        
function saveIp(userIp){
	var newip = model.ListIPs({ip:userIp}).save(function(err){
		if (err) throw err;
		console.log('saved iplist');
	});
}
