var mongoose = require('mongoose');

mongoose.connect('mongodb://AdminElMundo:NavidadPingus2017@ds129043.mlab.com:29043/participantes-elmundo');

//create a schema
var personSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    tel: String
});

//create new model
exports.Person = mongoose.model('Person', personSchema);
    
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