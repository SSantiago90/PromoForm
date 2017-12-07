var mongoose = require('mongoose');

mongoose.connect('mongodb://Admin207:ElMundoColon-17>@ds011248.mlab.com:11248/promonavidad-super207');

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
        nombre: 'Santiago',
        apellido: 'Salkin',
        email: 'salkin.santiago@gmail.com',
        tel: '3434522996'
    }).save(function(err){
        if(err) throw err;
        console.log('uploaded');    
    });    
};