var mongoose = require('mongoose');

mongoose.connect('mongodb://Admin207:207admin207@ds117749.mlab.com:17749/sorteopascua207');

//create a schema
var personSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    tel: String
});

//create new model
var Person = mongoose.model('Person', personSchema);
    
exports.testdata = function(req,res,next){
    var prueba = Person({
        nombre: 'Admin',
        apellido: 'Istrador',
        email: 'salkin.santiago@gmail.com',
        tel: '3434522996'
    }).save(function(err){
        if(err) throw err;
        console.log('uploaded');    
    });    
};