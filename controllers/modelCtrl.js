var model = require('../models/model.js');
var mongoose = require('mongoose');
exports.crear = function (req,res,next) {
  if (!req.body) return res.sendStatus(400);        
  var usrIp = req.ip;
  usrIp += '';
  model.ListIPs.findOne({ip: usrIp}, function(err,result){	  	
		if (err) throw err;
		console.log('result del check '+result);
	  	if(result) {
	  		console.log('already registered');
  			res.render('gracias-ya.ejs');
	  	}
	  	else {
		  	var particip = model.Person(req.body).save(function(err){
		        if(err) throw err;
		        console.log('saved user');   
		        saveIp(usrIp);
		        res.render('gracias.ejs', {'nombre' : req.body.nombre});
	 	 	});
 		};
 	});
};
        
function saveIp(usrIp){
	var newip = model.ListIPs({ip:usrIp}).save(function(err){
		if (err) throw err;
		console.log('saved iplist');
	});
}
