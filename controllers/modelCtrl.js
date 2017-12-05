var model = require('../models/model.js');

exports.new = function(req,res,next){
	model.new();
	res.render('ok.ejs');
};